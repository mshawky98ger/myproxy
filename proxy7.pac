function FindProxyForURL(url, host) {
    // تعريف البروكسي الصحيح
    var proxy = "PROXY 207.244.253.23:8539";

    // السماح لجوجل بالاتصال عبر البروكسي فقط
    if (dnsDomainIs(host, "m.google.com")) {
        return proxy;
    }

    // تمرير كل الترافيك الآخر عبر البروكسي فقط
    return proxy;

    // منع الاتصال تمامًا إذا كان البروكسي غير متاح
    return "DIRECT";  // لا تسمح بأي اتصال مباشر
}
