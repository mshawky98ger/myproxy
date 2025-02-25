function FindProxyForURL(url, host) {
    // تغيير SNI ليبدو مثل Google أو موقع مسموح
    var sni_host = "m.google.com";

    // إجبار الاتصال عبر HTTPS ليبدو شرعياً
    if (isPlainHostName(host) || dnsDomainIs(host, ".google.com")) {
        return "DIRECT";
    }

    // تمرير كل الترافيك عبر البروكسي مع إخفاءه بـ SNI
    return "HTTPS " + sni_host + ":443; PROXY 207.244.253.23:8539";
}
