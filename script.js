const format = n => {
    if (n < 1e3) return +(n).toFixed(3) + "B";
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(3) + "kB";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(3) + "MB";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(3) + "GB";
    if (n >= 1e12 && n < 1e15) return +(n / 1e12).toFixed(1) + "TB";
    if (n >= 1e15 && n < 1e18) return +(n / 1e12).toFixed(1) + "PB";
    if (n >= 1e18 && n < 1e21) return +(n / 1e12).toFixed(1) + "EB";
    if (n >= 1e21 && n < 1e24) return +(n / 1e12).toFixed(1) + "ZB";
    if (n >= 1e24 && n < 1e27) return +(n / 1e12).toFixed(1) + "YB";
    if (n >= 1e27 && n < 1e30) return +(n / 1e12).toFixed(1) + "kYB";
};

var buttons = {
    simple: {
        add: 1,
        delay: 0,
    }
    
};
