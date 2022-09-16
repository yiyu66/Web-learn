// fetch 加缓存

const cacheMap = new Map<string, Response>();
const timer: Record<string, number> = {};

async function sendFetch(url: string, options?: RequestInit = {}) {
  if (options.method === "GET") {
    if (cacheMap.has(url)) {
      return cacheMap.get(url).clone();
    }

    const response = await fetch(url, options);

    cacheMap.set(url, response.clone());

    timer[url] = setTimeout(() => {
      cacheMap.delete(url);
      delete timer[url];
    }, 1000 * 60 * 60); //过期时间
    return response;
  }

  return fetch(url, options);
}

sendFetch("/get", { method: "GET" }).then((res) => {
  // 这里是缓存之后的结果
  console.log(res);
});
