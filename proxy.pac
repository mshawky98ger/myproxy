function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*google.com") || shExpMatch(host, "*youtube.com")) {
        return "PROXY 207.244.253.23:8539";  // ضع هنا البروكسي الخاص بك
    } else {
        return "DIRECT";  // إرسال باقي الترافيك بدون بروكسي
    }
}
