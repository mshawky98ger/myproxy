function FindProxyForURL(url, host) {
    // تحديد SNI الذي سيتم إظهاره لمزود الخدمة
    var sni_host = "m.google.com";  // يمكنك تغييره إلى أي SNI يعمل مثل www.bing.com أو cloudflare.com

    // السماح لجوجل بالاتصال مباشرة (لضمان عدم كشف التلاعب)
    if (dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "www.google.com") ||
        dnsDomainIs(host, "m.google.com")) {
        return "DIRECT";
    }

    // إجبار كل الترافيك الآخر على المرور عبر البروكسي مع SNI المموه
    return "HTTPS " + sni_host + ":443; PROXY 208.244.253.23:8549";
}
