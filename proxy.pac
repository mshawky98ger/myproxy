function FindProxyForURL(url, host) {
    // استخدام SNI وهمي حتى يظهر التصفح وكأنه متصل بجوجل
    var sni_host = "m.google.com";  // يمكنك تغييره إلى SNI آخر مثل www.bing.com أو cloudflare.com

    // تمرير كل الترافيك عبر البروكسي
    return "HTTPS " + sni_host + ":443; PROXY 207.244.253.23:8539";
}

