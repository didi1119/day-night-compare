const ORIGIN_HOST = "didi1119.github.io";
const DEFAULT_PATH =
  "/day-night-compare/%E5%AE%A4%E5%85%A7%E8%A8%AD%E8%A8%88%E6%9D%90%E6%96%99%E6%A8%99%E8%A8%BB/%E6%9D%90%E6%96%99%E8%A6%96%E8%A6%BA%E7%B8%BD%E8%A6%BD.html";

export default {
  async fetch(request) {
    const incoming = new URL(request.url);

    if (incoming.pathname === "/") {
      return Response.redirect(incoming.origin + DEFAULT_PATH, 302);
    }

    const target = new URL(request.url);
    target.protocol = "https:";
    target.hostname = ORIGIN_HOST;
    target.port = "";

    const proxiedRequest = new Request(target, request);
    proxiedRequest.headers.set("Host", ORIGIN_HOST);

    return fetch(proxiedRequest);
  },
};
