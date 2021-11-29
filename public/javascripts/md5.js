function md5(n, t, i) {
  function f(n, t) {
    var i = (n & 65535) + (t & 65535),
      r = (n >> 16) + (t >> 16) + (i >> 16);
    return (r << 16) | (i & 65535);
  }
  function y(n, t) {
    return (n << t) | (n >>> (32 - t));
  }
  function e(n, t, i, r, u, e) {
    return f(y(f(f(t, n), f(r, e)), u), i);
  }
  function t(n, t, i, r, u, f, o) {
    return e((t & i) | (~t & r), n, t, u, f, o);
  }
  function i(n, t, i, r, u, f, o) {
    return e((t & r) | (i & ~r), n, t, u, f, o);
  }
  function r(n, t, i, r, u, f, o) {
    return e(t ^ i ^ r, n, t, u, f, o);
  }
  function u(n, t, i, r, u, f, o) {
    return e(i ^ (t | ~r), n, t, u, f, o);
  }
  function o(n, e) {
    n[e >> 5] |= 128 << e % 32;
    n[(((e + 64) >>> 9) << 4) + 14] = e;
    for (
      var a,
        v,
        y,
        p,
        o = 1732584193,
        s = -271733879,
        h = -1732584194,
        c = 271733878,
        l = 0;
      l < n.length;
      l += 16
    )
      (a = o),
        (v = s),
        (y = h),
        (p = c),
        (o = t(o, s, h, c, n[l], 7, -680876936)),
        (c = t(c, o, s, h, n[l + 1], 12, -389564586)),
        (h = t(h, c, o, s, n[l + 2], 17, 606105819)),
        (s = t(s, h, c, o, n[l + 3], 22, -1044525330)),
        (o = t(o, s, h, c, n[l + 4], 7, -176418897)),
        (c = t(c, o, s, h, n[l + 5], 12, 1200080426)),
        (h = t(h, c, o, s, n[l + 6], 17, -1473231341)),
        (s = t(s, h, c, o, n[l + 7], 22, -45705983)),
        (o = t(o, s, h, c, n[l + 8], 7, 1770035416)),
        (c = t(c, o, s, h, n[l + 9], 12, -1958414417)),
        (h = t(h, c, o, s, n[l + 10], 17, -42063)),
        (s = t(s, h, c, o, n[l + 11], 22, -1990404162)),
        (o = t(o, s, h, c, n[l + 12], 7, 1804603682)),
        (c = t(c, o, s, h, n[l + 13], 12, -40341101)),
        (h = t(h, c, o, s, n[l + 14], 17, -1502002290)),
        (s = t(s, h, c, o, n[l + 15], 22, 1236535329)),
        (o = i(o, s, h, c, n[l + 1], 5, -165796510)),
        (c = i(c, o, s, h, n[l + 6], 9, -1069501632)),
        (h = i(h, c, o, s, n[l + 11], 14, 643717713)),
        (s = i(s, h, c, o, n[l], 20, -373897302)),
        (o = i(o, s, h, c, n[l + 5], 5, -701558691)),
        (c = i(c, o, s, h, n[l + 10], 9, 38016083)),
        (h = i(h, c, o, s, n[l + 15], 14, -660478335)),
        (s = i(s, h, c, o, n[l + 4], 20, -405537848)),
        (o = i(o, s, h, c, n[l + 9], 5, 568446438)),
        (c = i(c, o, s, h, n[l + 14], 9, -1019803690)),
        (h = i(h, c, o, s, n[l + 3], 14, -187363961)),
        (s = i(s, h, c, o, n[l + 8], 20, 1163531501)),
        (o = i(o, s, h, c, n[l + 13], 5, -1444681467)),
        (c = i(c, o, s, h, n[l + 2], 9, -51403784)),
        (h = i(h, c, o, s, n[l + 7], 14, 1735328473)),
        (s = i(s, h, c, o, n[l + 12], 20, -1926607734)),
        (o = r(o, s, h, c, n[l + 5], 4, -378558)),
        (c = r(c, o, s, h, n[l + 8], 11, -2022574463)),
        (h = r(h, c, o, s, n[l + 11], 16, 1839030562)),
        (s = r(s, h, c, o, n[l + 14], 23, -35309556)),
        (o = r(o, s, h, c, n[l + 1], 4, -1530992060)),
        (c = r(c, o, s, h, n[l + 4], 11, 1272893353)),
        (h = r(h, c, o, s, n[l + 7], 16, -155497632)),
        (s = r(s, h, c, o, n[l + 10], 23, -1094730640)),
        (o = r(o, s, h, c, n[l + 13], 4, 681279174)),
        (c = r(c, o, s, h, n[l], 11, -358537222)),
        (h = r(h, c, o, s, n[l + 3], 16, -722521979)),
        (s = r(s, h, c, o, n[l + 6], 23, 76029189)),
        (o = r(o, s, h, c, n[l + 9], 4, -640364487)),
        (c = r(c, o, s, h, n[l + 12], 11, -421815835)),
        (h = r(h, c, o, s, n[l + 15], 16, 530742520)),
        (s = r(s, h, c, o, n[l + 2], 23, -995338651)),
        (o = u(o, s, h, c, n[l], 6, -198630844)),
        (c = u(c, o, s, h, n[l + 7], 10, 1126891415)),
        (h = u(h, c, o, s, n[l + 14], 15, -1416354905)),
        (s = u(s, h, c, o, n[l + 5], 21, -57434055)),
        (o = u(o, s, h, c, n[l + 12], 6, 1700485571)),
        (c = u(c, o, s, h, n[l + 3], 10, -1894986606)),
        (h = u(h, c, o, s, n[l + 10], 15, -1051523)),
        (s = u(s, h, c, o, n[l + 1], 21, -2054922799)),
        (o = u(o, s, h, c, n[l + 8], 6, 1873313359)),
        (c = u(c, o, s, h, n[l + 15], 10, -30611744)),
        (h = u(h, c, o, s, n[l + 6], 15, -1560198380)),
        (s = u(s, h, c, o, n[l + 13], 21, 1309151649)),
        (o = u(o, s, h, c, n[l + 4], 6, -145523070)),
        (c = u(c, o, s, h, n[l + 11], 10, -1120210379)),
        (h = u(h, c, o, s, n[l + 2], 15, 718787259)),
        (s = u(s, h, c, o, n[l + 9], 21, -343485551)),
        (o = f(o, a)),
        (s = f(s, v)),
        (h = f(h, y)),
        (c = f(c, p));
    return [o, s, h, c];
  }
  function c(n) {
    for (var i = "", t = 0; t < n.length * 32; t += 8)
      i += String.fromCharCode((n[t >> 5] >>> t % 32) & 255);
    return i;
  }
  function s(n) {
    var t,
      i = [];
    for (i[(n.length >> 2) - 1] = undefined, t = 0; t < i.length; t += 1)
      i[t] = 0;
    for (t = 0; t < n.length * 8; t += 8)
      i[t >> 5] |= (n.charCodeAt(t / 8) & 255) << t % 32;
    return i;
  }
  function p(n) {
    return c(o(s(n), n.length * 8));
  }
  function w(n, t) {
    var i,
      r = s(n),
      u = [],
      f = [],
      e;
    for (
      u[15] = f[15] = undefined,
        r.length > 16 && (r = o(r, n.length * 8)),
        i = 0;
      i < 16;
      i += 1
    )
      (u[i] = r[i] ^ 909522486), (f[i] = r[i] ^ 1549556828);
    return (e = o(u.concat(s(t)), 512 + t.length * 8)), c(o(f.concat(e), 640));
  }
  function l(n) {
    for (var r = "0123456789abcdef", u = "", i, t = 0; t < n.length; t += 1)
      (i = n.charCodeAt(t)), (u += r.charAt((i >>> 4) & 15) + r.charAt(i & 15));
    return u;
  }
  function h(n) {
    return unescape(encodeURIComponent(n));
  }
  function a(n) {
    return p(h(n));
  }
  function b(n) {
    return l(a(n));
  }
  function v(n, t) {
    return w(h(n), h(t));
  }
  function k(n, t) {
    return l(v(n, t));
  }
  // n.md5 = function(n, t, i) {
  return t ? (i ? v(t, n) : k(t, n)) : i ? a(n) : b(n);
  // }
}
exports.md5 = md5;
