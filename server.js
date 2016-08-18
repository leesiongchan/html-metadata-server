import Koa from 'koa';
import cacheManager from 'cache-manager';
import cors from 'kcors';
import json from 'koa-json';
import scrape from 'html-metadata';
import validUrl from 'valid-url';

const app = new Koa();
const memoryCache = cacheManager.caching({
  max: process.env.CACHE_MAXSIZE || 100,
  store: 'memory',
  ttl: process.env.CACHE_TTL || 3600,
});

const userAgent = process.env.USER_AGENT || 'metadata-bot';

app.use(cors({
  allowMethods: 'GET',
  origin: process.env.CORS_ALLOW_ORIGIN || '*',
}));
app.use(json());

app.use(async ctx => {
  const url = ctx.query.url;

  if (!validUrl.isWebUri(url)) {
    console.log('Invalid Url: ', url);
    ctx.status = 500;
    ctx.body = {
      message: `Invalid Url: ${url}`,
      status: 500,
    };

    return false;
  }

  try {
    const cache = await memoryCache.get(url);
    let response;

    if (cache) {
      console.log('Load from cache.');
      response = cache;
    } else {
      console.log('Scraping URL: ', url);
      response = await scrape({
        headers: {
          'User-Agent': userAgent,
        },
        url,
      });
    }

    console.log('Scrape complete: ', response);
    memoryCache.set(url, response);
    ctx.body = response;
  } catch (err) {
    console.log('Scrape error: ', err)
    ctx.status = err.status;
    ctx.body = err;
  }
});

app.listen(process.env.PORT || 3000);
