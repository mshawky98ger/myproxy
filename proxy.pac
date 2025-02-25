function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*")) {
        return "PROXY 207.244.253.23:8539";  // ضع هنا البروكسي الصحيح
    } else {
        return "DIRECT";
    }
}
