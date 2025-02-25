function FindProxyForURL(url, host) {
    // تحديد SNI المزيف لمزود الخدمة
    var sni_host = "m.google.com";  // يمكنك تغييره إلى bing.com أو أي SNI يعمل

    // السماح لجوجل بالاتصال مباشرة لمنع كشف التلاعب
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "google.com")) {
        return "DIRECT";
    }

    // إجبار كل الترافيك على استخدام البروكسي مع HTTP Tunnel
    return "HTTPS 207.244.253.23:8539; PROXY " + sni_host + ":443";
}
