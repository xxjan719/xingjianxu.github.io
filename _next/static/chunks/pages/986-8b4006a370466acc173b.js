(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[986], {
    7154: function(t) {
        function e() {
            return t.exports = e = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            ,
            t.exports.default = t.exports,
            t.exports.__esModule = !0,
            e.apply(this, arguments)
        }
        t.exports = e,
        t.exports.default = t.exports,
        t.exports.__esModule = !0
    },
    562: function(t, e, r) {
        "use strict";
        r.d(e, {
            Au: function() {
                return i
            },
            Ki: function() {
                return a
            },
            tm: function() {
                return u
            },
            hL: function() {
                return c
            },
            d3: function() {
                return l
            },
            qX: function() {
                return f
            },
            lx: function() {
                return h
            },
            G3: function() {
                return p
            }
        });
        var n = r(8908)
          , i = function(t) {
            return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
        }
          , a = function(t) {
            return t instanceof Uint8Array ? t : (Array.isArray(t) || i(t) || t instanceof ArrayBuffer || (t = "number" !== typeof t || "number" === typeof t && t !== t ? 0 : [t]),
            new Uint8Array(t && t.buffer || t,t && t.byteOffset || 0,t && t.byteLength || 0))
        }
          , o = r.n(n)().BigInt || Number
          , s = [o("0x1"), o("0x100"), o("0x10000"), o("0x1000000"), o("0x100000000"), o("0x10000000000"), o("0x1000000000000"), o("0x100000000000000"), o("0x10000000000000000")]
          , u = (function() {
            var t = new Uint16Array([65484])
              , e = new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
            255 === e[0] || e[0]
        }(),
        function(t, e) {
            var r = void 0 === e ? {} : e
              , n = r.signed
              , i = void 0 !== n && n
              , u = r.le
              , c = void 0 !== u && u;
            t = a(t);
            var l = c ? "reduce" : "reduceRight"
              , f = (t[l] ? t[l] : Array.prototype[l]).call(t, (function(e, r, n) {
                var i = c ? n : Math.abs(n + 1 - t.length);
                return e + o(r) * s[i]
            }
            ), o(0));
            if (i) {
                var h = s[t.length] / o(2) - o(1);
                (f = o(f)) > h && (f -= h,
                f -= h,
                f -= o(2))
            }
            return Number(f)
        }
        )
          , c = function(t, e) {
            var r = (void 0 === e ? {} : e).le
              , n = void 0 !== r && r;
            ("bigint" !== typeof t && "number" !== typeof t || "number" === typeof t && t !== t) && (t = 0),
            t = o(t);
            for (var i, a = (i = t,
            Math.ceil(function(t) {
                return t.toString(2).length
            }(i) / 8)), u = new Uint8Array(new ArrayBuffer(a)), c = 0; c < a; c++) {
                var l = n ? c : Math.abs(c + 1 - u.length);
                u[l] = Number(t / s[c] & o(255)),
                t < 0 && (u[l] = Math.abs(~u[l]),
                u[l] -= 0 === c ? 1 : 2)
            }
            return u
        }
          , l = function(t) {
            if (!t)
                return "";
            t = Array.prototype.slice.call(t);
            var e = String.fromCharCode.apply(null, a(t));
            try {
                return decodeURIComponent(escape(e))
            } catch (r) {}
            return e
        }
          , f = function(t, e) {
            if ("string" !== typeof t && t && "function" === typeof t.toString && (t = t.toString()),
            "string" !== typeof t)
                return new Uint8Array;
            e || (t = unescape(encodeURIComponent(t)));
            for (var r = new Uint8Array(t.length), n = 0; n < t.length; n++)
                r[n] = t.charCodeAt(n);
            return r
        }
          , h = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            if ((e = e.filter((function(t) {
                return t && (t.byteLength || t.length) && "string" !== typeof t
            }
            ))).length <= 1)
                return a(e[0]);
            var n = e.reduce((function(t, e, r) {
                return t + (e.byteLength || e.length)
            }
            ), 0)
              , i = new Uint8Array(n)
              , o = 0;
            return e.forEach((function(t) {
                t = a(t),
                i.set(t, o),
                o += t.byteLength
            }
            )),
            i
        }
          , p = function(t, e, r) {
            var n = void 0 === r ? {} : r
              , i = n.offset
              , o = void 0 === i ? 0 : i
              , s = n.mask
              , u = void 0 === s ? [] : s;
            t = a(t);
            var c = (e = a(e)).every ? e.every : Array.prototype.every;
            return e.length && t.length - o >= e.length && c.call(e, (function(e, r) {
                return e === (u[r] ? u[r] & t[o + r] : t[o + r])
            }
            ))
        }
    },
    2260: function(t, e, r) {
        "use strict";
        r.d(e, {
            ws: function() {
                return u
            },
            kS: function() {
                return c
            },
            Jg: function() {
                return l
            },
            KL: function() {
                return f
            },
            _5: function() {
                return h
            },
            p7: function() {
                return p
            },
            Hi: function() {
                return d
            },
            lA: function() {
                return g
            },
            xz: function() {
                return m
            }
        });
        var n = r(8908)
          , i = r.n(n)
          , a = {
            mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
            webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
            ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
            video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
            audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
            text: /^(stpp.ttml.im1t)/,
            muxerVideo: /^(avc0?1)/,
            muxerAudio: /^(mp4a)/,
            muxerText: /a^/
        }
          , o = ["video", "audio", "text"]
          , s = ["Video", "Audio", "Text"]
          , u = function(t) {
            return t ? t.replace(/avc1\.(\d+)\.(\d+)/i, (function(t, e, r) {
                return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(r).toString(16)).slice(-2)
            }
            )) : t
        }
          , c = function(t) {
            void 0 === t && (t = "");
            var e = t.split(",")
              , r = [];
            return e.forEach((function(t) {
                var e;
                t = t.trim(),
                o.forEach((function(n) {
                    var i = a[n].exec(t.toLowerCase());
                    if (i && !(i.length <= 1)) {
                        e = n;
                        var o = t.substring(0, i[1].length)
                          , s = t.replace(o, "");
                        r.push({
                            type: o,
                            details: s,
                            mediaType: n
                        })
                    }
                }
                )),
                e || r.push({
                    type: t,
                    details: "",
                    mediaType: "unknown"
                })
            }
            )),
            r
        }
          , l = function(t, e) {
            if (!t.mediaGroups.AUDIO || !e)
                return null;
            var r = t.mediaGroups.AUDIO[e];
            if (!r)
                return null;
            for (var n in r) {
                var i = r[n];
                if (i.default && i.playlists)
                    return c(i.playlists[0].attributes.CODECS)
            }
            return null
        }
          , f = function(t) {
            return void 0 === t && (t = ""),
            a.audio.test(t.trim().toLowerCase())
        }
          , h = function(t) {
            if (t && "string" === typeof t) {
                var e, r = t.toLowerCase().split(",").map((function(t) {
                    return u(t.trim())
                }
                )), n = "video";
                1 === r.length && f(r[0]) ? n = "audio" : 1 === r.length && (void 0 === (e = r[0]) && (e = ""),
                a.text.test(e.trim().toLowerCase())) && (n = "application");
                var i = "mp4";
                return r.every((function(t) {
                    return a.mp4.test(t)
                }
                )) ? i = "mp4" : r.every((function(t) {
                    return a.webm.test(t)
                }
                )) ? i = "webm" : r.every((function(t) {
                    return a.ogg.test(t)
                }
                )) && (i = "ogg"),
                n + "/" + i + ';codecs="' + t + '"'
            }
        }
          , p = function(t) {
            return void 0 === t && (t = ""),
            i().MediaSource && i().MediaSource.isTypeSupported && i().MediaSource.isTypeSupported(h(t)) || !1
        }
          , d = function(t) {
            return void 0 === t && (t = ""),
            t.toLowerCase().split(",").every((function(t) {
                t = t.trim();
                for (var e = 0; e < s.length; e++) {
                    if (a["muxer" + s[e]].test(t))
                        return !0
                }
                return !1
            }
            ))
        }
          , g = "mp4a.40.2"
          , m = "avc1.4d400d"
    },
    7530: function(t, e, r) {
        "use strict";
        r.d(e, {
            Xm: function() {
                return N
            },
            cz: function() {
                return A
            }
        });
        var n, i = r(562), a = (new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100]),
        function(t) {
            return "string" === typeof t ? (0,
            i.qX)(t) : t
        }
        ), o = function(t) {
            t = (0,
            i.Ki)(t);
            for (var e = [], r = 0; t.length > r; ) {
                var a = t[r]
                  , o = 0
                  , s = 0
                  , u = t[++s];
                for (s++; 128 & u; )
                    o = (127 & u) << 7,
                    u = t[s],
                    s++;
                o += 127 & u;
                for (var c = 0; c < n.length; c++) {
                    var l = n[c]
                      , f = l.id
                      , h = l.parser;
                    if (a === f) {
                        e.push(h(t.subarray(s, s + o)));
                        break
                    }
                }
                r += o + s
            }
            return e
        };
        n = [{
            id: 3,
            parser: function(t) {
                var e = {
                    tag: 3,
                    id: t[0] << 8 | t[1],
                    flags: t[2],
                    size: 3,
                    dependsOnEsId: 0,
                    ocrEsId: 0,
                    descriptors: [],
                    url: ""
                };
                if (128 & e.flags && (e.dependsOnEsId = t[e.size] << 8 | t[e.size + 1],
                e.size += 2),
                64 & e.flags) {
                    var r = t[e.size];
                    e.url = (0,
                    i.d3)(t.subarray(e.size + 1, e.size + 1 + r)),
                    e.size += r
                }
                return 32 & e.flags && (e.ocrEsId = t[e.size] << 8 | t[e.size + 1],
                e.size += 2),
                e.descriptors = o(t.subarray(e.size)) || [],
                e
            }
        }, {
            id: 4,
            parser: function(t) {
                return {
                    tag: 4,
                    oti: t[0],
                    streamType: t[1],
                    bufferSize: t[2] << 16 | t[3] << 8 | t[4],
                    maxBitrate: t[5] << 24 | t[6] << 16 | t[7] << 8 | t[8],
                    avgBitrate: t[9] << 24 | t[10] << 16 | t[11] << 8 | t[12],
                    descriptors: o(t.subarray(13))
                }
            }
        }, {
            id: 5,
            parser: function(t) {
                return {
                    tag: 5,
                    bytes: t
                }
            }
        }, {
            id: 6,
            parser: function(t) {
                return {
                    tag: 6,
                    bytes: t
                }
            }
        }];
        var s = function t(e, r, n) {
            void 0 === n && (n = !1),
            r = function(t) {
                return Array.isArray(t) ? t.map((function(t) {
                    return a(t)
                }
                )) : [a(t)]
            }(r),
            e = (0,
            i.Ki)(e);
            var o = [];
            if (!r.length)
                return o;
            for (var s = 0; s < e.length; ) {
                var u = (e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3]) >>> 0
                  , c = e.subarray(s + 4, s + 8);
                if (0 === u)
                    break;
                var l = s + u;
                if (l > e.length) {
                    if (n)
                        break;
                    l = e.length
                }
                var f = e.subarray(s + 8, l);
                (0,
                i.G3)(c, r[0]) && (1 === r.length ? o.push(f) : o.push.apply(o, t(f, r.slice(1), n))),
                s = l
            }
            return o
        }
          , u = {
            EBML: (0,
            i.Ki)([26, 69, 223, 163]),
            DocType: (0,
            i.Ki)([66, 130]),
            Segment: (0,
            i.Ki)([24, 83, 128, 103]),
            SegmentInfo: (0,
            i.Ki)([21, 73, 169, 102]),
            Tracks: (0,
            i.Ki)([22, 84, 174, 107]),
            Track: (0,
            i.Ki)([174]),
            TrackNumber: (0,
            i.Ki)([215]),
            DefaultDuration: (0,
            i.Ki)([35, 227, 131]),
            TrackEntry: (0,
            i.Ki)([174]),
            TrackType: (0,
            i.Ki)([131]),
            FlagDefault: (0,
            i.Ki)([136]),
            CodecID: (0,
            i.Ki)([134]),
            CodecPrivate: (0,
            i.Ki)([99, 162]),
            VideoTrack: (0,
            i.Ki)([224]),
            AudioTrack: (0,
            i.Ki)([225]),
            Cluster: (0,
            i.Ki)([31, 67, 182, 117]),
            Timestamp: (0,
            i.Ki)([231]),
            TimestampScale: (0,
            i.Ki)([42, 215, 177]),
            BlockGroup: (0,
            i.Ki)([160]),
            BlockDuration: (0,
            i.Ki)([155]),
            Block: (0,
            i.Ki)([161]),
            SimpleBlock: (0,
            i.Ki)([163])
        }
          , c = [128, 64, 32, 16, 8, 4, 2, 1]
          , l = function(t, e, r, n) {
            void 0 === r && (r = !0),
            void 0 === n && (n = !1);
            var a = function(t) {
                for (var e = 1, r = 0; r < c.length && !(t & c[r]); r++)
                    e++;
                return e
            }(t[e])
              , o = t.subarray(e, e + a);
            return r && ((o = Array.prototype.slice.call(t, e, e + a))[0] ^= c[a - 1]),
            {
                length: a,
                value: (0,
                i.tm)(o, {
                    signed: n
                }),
                bytes: o
            }
        }
          , f = function t(e) {
            return "string" === typeof e ? e.match(/.{1,2}/g).map((function(e) {
                return t(e)
            }
            )) : "number" === typeof e ? (0,
            i.hL)(e) : e
        }
          , h = function t(e, r, n) {
            if (n >= r.length)
                return r.length;
            var a = l(r, n, !1);
            if ((0,
            i.G3)(e.bytes, a.bytes))
                return n;
            var o = l(r, n + a.length);
            return t(e, r, n + o.length + o.value + a.length)
        }
          , p = function t(e, r) {
            r = function(t) {
                return Array.isArray(t) ? t.map((function(t) {
                    return f(t)
                }
                )) : [f(t)]
            }(r),
            e = (0,
            i.Ki)(e);
            var n = [];
            if (!r.length)
                return n;
            for (var a = 0; a < e.length; ) {
                var o = l(e, a, !1)
                  , s = l(e, a + o.length)
                  , u = a + o.length + s.length;
                127 === s.value && (s.value = h(o, e, u),
                s.value !== e.length && (s.value -= u));
                var c = u + s.value > e.length ? e.length : u + s.value
                  , p = e.subarray(u, c);
                (0,
                i.G3)(r[0], o.bytes) && (1 === r.length ? n.push(p) : n = n.concat(t(p, r.slice(1)))),
                a += o.length + s.length + p.length
            }
            return n
        }
          , d = r(8925)
          , g = (0,
        i.Ki)([0, 0, 0, 1])
          , m = (0,
        i.Ki)([0, 0, 1])
          , b = (0,
        i.Ki)([0, 0, 3])
          , y = function(t) {
            for (var e = [], r = 1; r < t.length - 2; )
                (0,
                i.G3)(t.subarray(r, r + 3), b) && (e.push(r + 2),
                r++),
                r++;
            if (0 === e.length)
                return t;
            var n = t.length - e.length
              , a = new Uint8Array(n)
              , o = 0;
            for (r = 0; r < n; o++,
            r++)
                o === e[0] && (o++,
                e.shift()),
                a[r] = t[o];
            return a
        }
          , v = function(t, e, r, n) {
            void 0 === n && (n = 1 / 0),
            t = (0,
            i.Ki)(t),
            r = [].concat(r);
            for (var a, o = 0, s = 0; o < t.length && (s < n || a); ) {
                var u = void 0;
                if ((0,
                i.G3)(t.subarray(o), g) ? u = 4 : (0,
                i.G3)(t.subarray(o), m) && (u = 3),
                u) {
                    if (s++,
                    a)
                        return y(t.subarray(a, o));
                    var c = void 0;
                    "h264" === e ? c = 31 & t[o + u] : "h265" === e && (c = t[o + u] >> 1 & 63),
                    -1 !== r.indexOf(c) && (a = o + u),
                    o += u + ("h264" === e ? 1 : 2)
                } else
                    o++
            }
            return t.subarray(0, 0)
        }
          , w = {
            webm: (0,
            i.Ki)([119, 101, 98, 109]),
            matroska: (0,
            i.Ki)([109, 97, 116, 114, 111, 115, 107, 97]),
            flac: (0,
            i.Ki)([102, 76, 97, 67]),
            ogg: (0,
            i.Ki)([79, 103, 103, 83]),
            ac3: (0,
            i.Ki)([11, 119]),
            riff: (0,
            i.Ki)([82, 73, 70, 70]),
            avi: (0,
            i.Ki)([65, 86, 73]),
            wav: (0,
            i.Ki)([87, 65, 86, 69]),
            "3gp": (0,
            i.Ki)([102, 116, 121, 112, 51, 103]),
            mp4: (0,
            i.Ki)([102, 116, 121, 112]),
            fmp4: (0,
            i.Ki)([115, 116, 121, 112]),
            mov: (0,
            i.Ki)([102, 116, 121, 112, 113, 116]),
            moov: (0,
            i.Ki)([109, 111, 111, 118]),
            moof: (0,
            i.Ki)([109, 111, 111, 102])
        }
          , E = {
            aac: function(t) {
                var e = (0,
                d.c)(t);
                return (0,
                i.G3)(t, [255, 16], {
                    offset: e,
                    mask: [255, 22]
                })
            },
            mp3: function(t) {
                var e = (0,
                d.c)(t);
                return (0,
                i.G3)(t, [255, 2], {
                    offset: e,
                    mask: [255, 6]
                })
            },
            webm: function(t) {
                var e = p(t, [u.EBML, u.DocType])[0];
                return (0,
                i.G3)(e, w.webm)
            },
            mkv: function(t) {
                var e = p(t, [u.EBML, u.DocType])[0];
                return (0,
                i.G3)(e, w.matroska)
            },
            mp4: function(t) {
                return !E["3gp"](t) && !E.mov(t) && (!(!(0,
                i.G3)(t, w.mp4, {
                    offset: 4
                }) && !(0,
                i.G3)(t, w.fmp4, {
                    offset: 4
                })) || (!(!(0,
                i.G3)(t, w.moof, {
                    offset: 4
                }) && !(0,
                i.G3)(t, w.moov, {
                    offset: 4
                })) || void 0))
            },
            mov: function(t) {
                return (0,
                i.G3)(t, w.mov, {
                    offset: 4
                })
            },
            "3gp": function(t) {
                return (0,
                i.G3)(t, w["3gp"], {
                    offset: 4
                })
            },
            ac3: function(t) {
                var e = (0,
                d.c)(t);
                return (0,
                i.G3)(t, w.ac3, {
                    offset: e
                })
            },
            ts: function(t) {
                if (t.length < 189 && t.length >= 1)
                    return 71 === t[0];
                for (var e = 0; e + 188 < t.length && e < 188; ) {
                    if (71 === t[e] && 71 === t[e + 188])
                        return !0;
                    e += 1
                }
                return !1
            },
            flac: function(t) {
                var e = (0,
                d.c)(t);
                return (0,
                i.G3)(t, w.flac, {
                    offset: e
                })
            },
            ogg: function(t) {
                return (0,
                i.G3)(t, w.ogg)
            },
            avi: function(t) {
                return (0,
                i.G3)(t, w.riff) && (0,
                i.G3)(t, w.avi, {
                    offset: 8
                })
            },
            wav: function(t) {
                return (0,
                i.G3)(t, w.riff) && (0,
                i.G3)(t, w.wav, {
                    offset: 8
                })
            },
            h264: function(t) {
                return function(t, e, r) {
                    return v(t, "h264", e, r)
                }(t, 7, 3).length
            },
            h265: function(t) {
                return function(t, e, r) {
                    return v(t, "h265", e, r)
                }(t, [32, 33], 3).length
            }
        }
          , T = Object.keys(E).filter((function(t) {
            return "ts" !== t && "h264" !== t && "h265" !== t
        }
        )).concat(["ts", "h264", "h265"]);
        T.forEach((function(t) {
            var e = E[t];
            E[t] = function(t) {
                return e((0,
                i.Ki)(t))
            }
        }
        ));
        var S = E
          , N = function(t) {
            t = (0,
            i.Ki)(t);
            for (var e = 0; e < T.length; e++) {
                var r = T[e];
                if (S[r](t))
                    return r
            }
            return ""
        }
          , A = function(t) {
            return s(t, ["moof"]).length > 0
        }
    },
    8925: function(t, e, r) {
        "use strict";
        r.d(e, {
            c: function() {
                return a
            }
        });
        var n = r(562)
          , i = (0,
        n.Ki)([73, 68, 51])
          , a = function t(e, r) {
            return void 0 === r && (r = 0),
            (e = (0,
            n.Ki)(e)).length - r < 10 || !(0,
            n.G3)(e, i, {
                offset: r
            }) ? r : (r += function(t, e) {
                void 0 === e && (e = 0);
                var r = (t = (0,
                n.Ki)(t))[e + 5]
                  , i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & r) >> 4 ? i + 20 : i + 10
            }(e, r),
            t(e, r))
        }
    },
    8485: function(t, e, r) {
        "use strict";
        r.d(e, {
            t: function() {
                return a
            }
        });
        var n = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i
          , i = /^application\/dash\+xml/i
          , a = function(t) {
            return n.test(t) ? "hls" : i.test(t) ? "dash" : "application/vnd.videojs.vhs+json" === t ? "vhs-json" : null
        }
    },
    779: function(t, e, r) {
        "use strict";
        var n = r(9945)
          , i = r.n(n)
          , a = r(8908)
          , o = r.n(a)
          , s = "http://example.com";
        e.Z = function(t, e) {
            if (/^[a-z]+:/i.test(e))
                return e;
            /^data:/.test(t) && (t = o().location && o().location.href || "");
            var r = "function" === typeof o().URL
              , n = /^\/\//.test(t)
              , a = !o().location && !/\/\//i.test(t);
            if (r ? t = new (o().URL)(t,o().location || s) : /\/\//i.test(t) || (t = i().buildAbsoluteURL(o().location && o().location.href || "", t)),
            r) {
                var u = new URL(e,t);
                return a ? u.href.slice(s.length) : n ? u.href.slice(u.protocol.length) : u.href
            }
            return i().buildAbsoluteURL(t, e)
        }
    },
    3490: function(t, e, r) {
        "use strict";
        var n = r(8908);
        t.exports = function(t, e) {
            return void 0 === e && (e = !1),
            function(r, i, a) {
                if (r)
                    t(r);
                else if (i.statusCode >= 400 && i.statusCode <= 599) {
                    var o = a;
                    if (e)
                        if (n.TextDecoder) {
                            var s = function(t) {
                                void 0 === t && (t = "");
                                return t.toLowerCase().split(";").reduce((function(t, e) {
                                    var r = e.split("=")
                                      , n = r[0]
                                      , i = r[1];
                                    return "charset" === n.trim() ? i.trim() : t
                                }
                                ), "utf-8")
                            }(i.headers && i.headers["content-type"]);
                            try {
                                o = new TextDecoder(s).decode(a)
                            } catch (u) {}
                        } else
                            o = String.fromCharCode.apply(null, new Uint8Array(a));
                    t({
                        cause: o
                    })
                } else
                    t(null, a)
            }
        }
    },
    9603: function(t, e, r) {
        "use strict";
        var n = r(8908)
          , i = r(7154)
          , a = r(7376);
        s.httpHandler = r(3490);
        function o(t, e, r) {
            var n = t;
            return a(e) ? (r = e,
            "string" === typeof t && (n = {
                uri: t
            })) : n = i({}, e, {
                uri: t
            }),
            n.callback = r,
            n
        }
        function s(t, e, r) {
            return u(e = o(t, e, r))
        }
        function u(t) {
            if ("undefined" === typeof t.callback)
                throw new Error("callback argument missing");
            var e = !1
              , r = function(r, n, i) {
                e || (e = !0,
                t.callback(r, n, i))
            };
            function n() {
                var t = void 0;
                if (t = c.response ? c.response : c.responseText || function(t) {
                    try {
                        if ("document" === t.responseType)
                            return t.responseXML;
                        var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                        if ("" === t.responseType && !e)
                            return t.responseXML
                    } catch (r) {}
                    return null
                }(c),
                m)
                    try {
                        t = JSON.parse(t)
                    } catch (e) {}
                return t
            }
            function i(t) {
                return clearTimeout(l),
                t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))),
                t.statusCode = 0,
                r(t, b)
            }
            function a() {
                if (!u) {
                    var e;
                    clearTimeout(l),
                    e = t.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
                    var i = b
                      , a = null;
                    return 0 !== e ? (i = {
                        body: n(),
                        statusCode: e,
                        method: h,
                        headers: {},
                        url: f,
                        rawRequest: c
                    },
                    c.getAllResponseHeaders && (i.headers = function(t) {
                        var e = {};
                        return t ? (t.trim().split("\n").forEach((function(t) {
                            var r = t.indexOf(":")
                              , n = t.slice(0, r).trim().toLowerCase()
                              , i = t.slice(r + 1).trim();
                            "undefined" === typeof e[n] ? e[n] = i : Array.isArray(e[n]) ? e[n].push(i) : e[n] = [e[n], i]
                        }
                        )),
                        e) : e
                    }(c.getAllResponseHeaders()))) : a = new Error("Internal XMLHttpRequest Error"),
                    r(a, i, i.body)
                }
            }
            var o, u, c = t.xhr || null;
            c || (c = t.cors || t.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
            var l, f = c.url = t.uri || t.url, h = c.method = t.method || "GET", p = t.body || t.data, d = c.headers = t.headers || {}, g = !!t.sync, m = !1, b = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: h,
                url: f,
                rawRequest: c
            };
            if ("json"in t && !1 !== t.json && (m = !0,
            d.accept || d.Accept || (d.Accept = "application/json"),
            "GET" !== h && "HEAD" !== h && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"),
            p = JSON.stringify(!0 === t.json ? p : t.json))),
            c.onreadystatechange = function() {
                4 === c.readyState && setTimeout(a, 0)
            }
            ,
            c.onload = a,
            c.onerror = i,
            c.onprogress = function() {}
            ,
            c.onabort = function() {
                u = !0
            }
            ,
            c.ontimeout = i,
            c.open(h, f, !g, t.username, t.password),
            g || (c.withCredentials = !!t.withCredentials),
            !g && t.timeout > 0 && (l = setTimeout((function() {
                if (!u) {
                    u = !0,
                    c.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT",
                    i(t)
                }
            }
            ), t.timeout)),
            c.setRequestHeader)
                for (o in d)
                    d.hasOwnProperty(o) && c.setRequestHeader(o, d[o]);
            else if (t.headers && !function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        return !1;
                return !0
            }(t.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in t && (c.responseType = t.responseType),
            "beforeSend"in t && "function" === typeof t.beforeSend && t.beforeSend(c),
            c.send(p || null),
            c
        }
        t.exports = s,
        t.exports.default = s,
        s.XMLHttpRequest = n.XMLHttpRequest || function() {}
        ,
        s.XDomainRequest = "withCredentials"in new s.XMLHttpRequest ? s.XMLHttpRequest : n.XDomainRequest,
        function(t, e) {
            for (var r = 0; r < t.length; r++)
                e(t[r])
        }(["get", "put", "post", "patch", "head", "delete"], (function(t) {
            s["delete" === t ? "del" : t] = function(e, r, n) {
                return (r = o(e, r, n)).method = t.toUpperCase(),
                u(r)
            }
        }
        ))
    },
    2167: function(t, e) {
        "use strict";
        function r(t, e) {
            return void 0 === e && (e = Object),
            e && "function" === typeof e.freeze ? e.freeze(t) : t
        }
        var n = r({
            HTML: "text/html",
            isHTML: function(t) {
                return t === n.HTML
            },
            XML_APPLICATION: "application/xml",
            XML_TEXT: "text/xml",
            XML_XHTML_APPLICATION: "application/xhtml+xml",
            XML_SVG_IMAGE: "image/svg+xml"
        })
          , i = r({
            HTML: "http://www.w3.org/1999/xhtml",
            isHTML: function(t) {
                return t === i.HTML
            },
            SVG: "http://www.w3.org/2000/svg",
            XML: "http://www.w3.org/XML/1998/namespace",
            XMLNS: "http://www.w3.org/2000/xmlns/"
        });
        e.assign = function(t, e) {
            if (null === t || "object" !== typeof t)
                throw new TypeError("target is not an object");
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        ,
        e.find = function(t, e, r) {
            if (void 0 === r && (r = Array.prototype),
            t && "function" === typeof r.find)
                return r.find.call(t, e);
            for (var n = 0; n < t.length; n++)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var i = t[n];
                    if (e.call(void 0, i, n, t))
                        return i
                }
        }
        ,
        e.freeze = r,
        e.MIME_TYPE = n,
        e.NAMESPACE = i
    },
    6129: function(t, e, r) {
        var n = r(2167)
          , i = r(1146)
          , a = r(1045)
          , o = r(6925)
          , s = i.DOMImplementation
          , u = n.NAMESPACE
          , c = o.ParseError
          , l = o.XMLReader;
        function f(t) {
            return t.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n")
        }
        function h(t) {
            this.options = t || {
                locator: {}
            }
        }
        function p() {
            this.cdata = !1
        }
        function d(t, e) {
            e.lineNumber = t.lineNumber,
            e.columnNumber = t.columnNumber
        }
        function g(t) {
            if (t)
                return "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]"
        }
        function m(t, e, r) {
            return "string" == typeof t ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t,e,r) + "" : t
        }
        function b(t, e) {
            t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e)
        }
        h.prototype.parseFromString = function(t, e) {
            var r = this.options
              , n = new l
              , i = r.domBuilder || new p
              , o = r.errorHandler
              , s = r.locator
              , c = r.xmlns || {}
              , h = /\/x?html?$/.test(e)
              , d = h ? a.HTML_ENTITIES : a.XML_ENTITIES;
            s && i.setDocumentLocator(s),
            n.errorHandler = function(t, e, r) {
                if (!t) {
                    if (e instanceof p)
                        return e;
                    t = e
                }
                var n = {}
                  , i = t instanceof Function;
                function a(e) {
                    var a = t[e];
                    !a && i && (a = 2 == t.length ? function(r) {
                        t(e, r)
                    }
                    : t),
                    n[e] = a && function(t) {
                        a("[xmldom " + e + "]\t" + t + g(r))
                    }
                    || function() {}
                }
                return r = r || {},
                a("warning"),
                a("error"),
                a("fatalError"),
                n
            }(o, i, s),
            n.domBuilder = r.domBuilder || i,
            h && (c[""] = u.HTML),
            c.xml = c.xml || u.XML;
            var m = r.normalizeLineEndings || f;
            return t && "string" === typeof t ? n.parse(m(t), c, d) : n.errorHandler.error("invalid doc source"),
            i.doc
        }
        ,
        p.prototype = {
            startDocument: function() {
                this.doc = (new s).createDocument(null, null, null),
                this.locator && (this.doc.documentURI = this.locator.systemId)
            },
            startElement: function(t, e, r, n) {
                var i = this.doc
                  , a = i.createElementNS(t, r || e)
                  , o = n.length;
                b(this, a),
                this.currentElement = a,
                this.locator && d(this.locator, a);
                for (var s = 0; s < o; s++) {
                    t = n.getURI(s);
                    var u = n.getValue(s)
                      , c = (r = n.getQName(s),
                    i.createAttributeNS(t, r));
                    this.locator && d(n.getLocator(s), c),
                    c.value = c.nodeValue = u,
                    a.setAttributeNode(c)
                }
            },
            endElement: function(t, e, r) {
                var n = this.currentElement;
                n.tagName;
                this.currentElement = n.parentNode
            },
            startPrefixMapping: function(t, e) {},
            endPrefixMapping: function(t) {},
            processingInstruction: function(t, e) {
                var r = this.doc.createProcessingInstruction(t, e);
                this.locator && d(this.locator, r),
                b(this, r)
            },
            ignorableWhitespace: function(t, e, r) {},
            characters: function(t, e, r) {
                if (t = m.apply(this, arguments)) {
                    if (this.cdata)
                        var n = this.doc.createCDATASection(t);
                    else
                        n = this.doc.createTextNode(t);
                    this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(t) && this.doc.appendChild(n),
                    this.locator && d(this.locator, n)
                }
            },
            skippedEntity: function(t) {},
            endDocument: function() {
                this.doc.normalize()
            },
            setDocumentLocator: function(t) {
                (this.locator = t) && (t.lineNumber = 0)
            },
            comment: function(t, e, r) {
                t = m.apply(this, arguments);
                var n = this.doc.createComment(t);
                this.locator && d(this.locator, n),
                b(this, n)
            },
            startCDATA: function() {
                this.cdata = !0
            },
            endCDATA: function() {
                this.cdata = !1
            },
            startDTD: function(t, e, r) {
                var n = this.doc.implementation;
                if (n && n.createDocumentType) {
                    var i = n.createDocumentType(t, e, r);
                    this.locator && d(this.locator, i),
                    b(this, i),
                    this.doc.doctype = i
                }
            },
            warning: function(t) {
                console.warn("[xmldom warning]\t" + t, g(this.locator))
            },
            error: function(t) {
                console.error("[xmldom error]\t" + t, g(this.locator))
            },
            fatalError: function(t) {
                throw new c(t,this.locator)
            }
        },
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (function(t) {
            p.prototype[t] = function() {
                return null
            }
        }
        )),
        e.DOMParser = h
    },
    1146: function(t, e, r) {
        var n = r(2167)
          , i = n.find
          , a = n.NAMESPACE;
        function o(t) {
            return "" !== t
        }
        function s(t, e) {
            return t.hasOwnProperty(e) || (t[e] = !0),
            t
        }
        function u(t) {
            if (!t)
                return [];
            var e = function(t) {
                return t ? t.split(/[\t\n\f\r ]+/).filter(o) : []
            }(t);
            return Object.keys(e.reduce(s, {}))
        }
        function c(t, e) {
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }
        function l(t, e) {
            var r = t.prototype;
            if (!(r instanceof e)) {
                function n() {}
                n.prototype = e.prototype,
                c(r, n = new n),
                t.prototype = r = n
            }
            r.constructor != t && ("function" != typeof t && console.error("unknown Class:" + t),
            r.constructor = t)
        }
        var f = {}
          , h = f.ELEMENT_NODE = 1
          , p = f.ATTRIBUTE_NODE = 2
          , d = f.TEXT_NODE = 3
          , g = f.CDATA_SECTION_NODE = 4
          , m = f.ENTITY_REFERENCE_NODE = 5
          , b = f.ENTITY_NODE = 6
          , y = f.PROCESSING_INSTRUCTION_NODE = 7
          , v = f.COMMENT_NODE = 8
          , w = f.DOCUMENT_NODE = 9
          , E = f.DOCUMENT_TYPE_NODE = 10
          , T = f.DOCUMENT_FRAGMENT_NODE = 11
          , S = f.NOTATION_NODE = 12
          , N = {}
          , A = {}
          , D = (N.INDEX_SIZE_ERR = (A[1] = "Index size error",
        1),
        N.DOMSTRING_SIZE_ERR = (A[2] = "DOMString size error",
        2),
        N.HIERARCHY_REQUEST_ERR = (A[3] = "Hierarchy request error",
        3))
          , x = (N.WRONG_DOCUMENT_ERR = (A[4] = "Wrong document",
        4),
        N.INVALID_CHARACTER_ERR = (A[5] = "Invalid character",
        5),
        N.NO_DATA_ALLOWED_ERR = (A[6] = "No data allowed",
        6),
        N.NO_MODIFICATION_ALLOWED_ERR = (A[7] = "No modification allowed",
        7),
        N.NOT_FOUND_ERR = (A[8] = "Not found",
        8))
          , C = (N.NOT_SUPPORTED_ERR = (A[9] = "Not supported",
        9),
        N.INUSE_ATTRIBUTE_ERR = (A[10] = "Attribute in use",
        10));
        N.INVALID_STATE_ERR = (A[11] = "Invalid state",
        11),
        N.SYNTAX_ERR = (A[12] = "Syntax error",
        12),
        N.INVALID_MODIFICATION_ERR = (A[13] = "Invalid modification",
        13),
        N.NAMESPACE_ERR = (A[14] = "Invalid namespace",
        14),
        N.INVALID_ACCESS_ERR = (A[15] = "Invalid access",
        15);
        function R(t, e) {
            if (e instanceof Error)
                var r = e;
            else
                r = this,
                Error.call(this, A[t]),
                this.message = A[t],
                Error.captureStackTrace && Error.captureStackTrace(this, R);
            return r.code = t,
            e && (this.message = this.message + ": " + e),
            r
        }
        function O() {}
        function I(t, e) {
            this._node = t,
            this._refresh = e,
            L(this)
        }
        function L(t) {
            var e = t._node._inc || t._node.ownerDocument._inc;
            if (t._inc !== e) {
                var r = t._refresh(t._node);
                if (vt(t, "length", r.length),
                !t.$$length || r.length < t.$$length)
                    for (var n = r.length; n in t; n++)
                        Object.prototype.hasOwnProperty.call(t, n) && delete t[n];
                c(r, t),
                t._inc = e
            }
        }
        function U() {}
        function M(t, e) {
            for (var r = t.length; r--; )
                if (t[r] === e)
                    return r
        }
        function P(t, e, r, n) {
            if (n ? e[M(e, n)] = r : e[e.length++] = r,
            t) {
                r.ownerElement = t;
                var i = t.ownerDocument;
                i && (n && H(i, t, n),
                function(t, e, r) {
                    t && t._inc++,
                    r.namespaceURI === a.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value)
                }(i, t, r))
            }
        }
        function q(t, e, r) {
            var n = M(e, r);
            if (!(n >= 0))
                throw new R(x,new Error(t.tagName + "@" + r));
            for (var i = e.length - 1; n < i; )
                e[n] = e[++n];
            if (e.length = i,
            t) {
                var a = t.ownerDocument;
                a && (H(a, t, r),
                r.ownerElement = null)
            }
        }
        function k() {}
        function B() {}
        function X(t) {
            return ("<" == t ? "&lt;" : ">" == t && "&gt;") || "&" == t && "&amp;" || '"' == t && "&quot;" || "&#" + t.charCodeAt() + ";"
        }
        function _(t, e) {
            if (e(t))
                return !0;
            if (t = t.firstChild)
                do {
                    if (_(t, e))
                        return !0
                } while (t = t.nextSibling)
        }
        function G() {
            this.ownerDocument = this
        }
        function H(t, e, r, n) {
            t && t._inc++,
            r.namespaceURI === a.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""]
        }
        function V(t, e, r) {
            if (t && t._inc) {
                t._inc++;
                var n = e.childNodes;
                if (r)
                    n[n.length++] = r;
                else {
                    for (var i = e.firstChild, a = 0; i; )
                        n[a++] = i,
                        i = i.nextSibling;
                    n.length = a,
                    delete n[n.length]
                }
            }
        }
        function F(t, e) {
            var r = e.previousSibling
              , n = e.nextSibling;
            return r ? r.nextSibling = n : t.firstChild = n,
            n ? n.previousSibling = r : t.lastChild = r,
            e.parentNode = null,
            e.previousSibling = null,
            e.nextSibling = null,
            V(t.ownerDocument, t),
            e
        }
        function j(t) {
            return t && t.nodeType === B.DOCUMENT_TYPE_NODE
        }
        function z(t) {
            return t && t.nodeType === B.ELEMENT_NODE
        }
        function Y(t) {
            return t && t.nodeType === B.TEXT_NODE
        }
        function $(t, e) {
            var r = t.childNodes || [];
            if (i(r, z) || j(e))
                return !1;
            var n = i(r, j);
            return !(e && n && r.indexOf(n) > r.indexOf(e))
        }
        function K(t, e) {
            var r = t.childNodes || [];
            if (i(r, (function(t) {
                return z(t) && t !== e
            }
            )))
                return !1;
            var n = i(r, j);
            return !(e && n && r.indexOf(n) > r.indexOf(e))
        }
        function W(t, e, r) {
            if (!function(t) {
                return t && (t.nodeType === B.DOCUMENT_NODE || t.nodeType === B.DOCUMENT_FRAGMENT_NODE || t.nodeType === B.ELEMENT_NODE)
            }(t))
                throw new R(D,"Unexpected parent node type " + t.nodeType);
            if (r && r.parentNode !== t)
                throw new R(x,"child not in parent");
            if (!function(t) {
                return t && (z(t) || Y(t) || j(t) || t.nodeType === B.DOCUMENT_FRAGMENT_NODE || t.nodeType === B.COMMENT_NODE || t.nodeType === B.PROCESSING_INSTRUCTION_NODE)
            }(e) || j(e) && t.nodeType !== B.DOCUMENT_NODE)
                throw new R(D,"Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType)
        }
        function Q(t, e, r) {
            var n = t.childNodes || []
              , a = e.childNodes || [];
            if (e.nodeType === B.DOCUMENT_FRAGMENT_NODE) {
                var o = a.filter(z);
                if (o.length > 1 || i(a, Y))
                    throw new R(D,"More than one element or text in fragment");
                if (1 === o.length && !$(t, r))
                    throw new R(D,"Element in fragment can not be inserted before doctype")
            }
            if (z(e) && !$(t, r))
                throw new R(D,"Only one element can be added and only after doctype");
            if (j(e)) {
                if (i(n, j))
                    throw new R(D,"Only one doctype is allowed");
                var s = i(n, z);
                if (r && n.indexOf(s) < n.indexOf(r))
                    throw new R(D,"Doctype can only be inserted before an element");
                if (!r && s)
                    throw new R(D,"Doctype can not be appended since element is present")
            }
        }
        function Z(t, e, r) {
            var n = t.childNodes || []
              , a = e.childNodes || [];
            if (e.nodeType === B.DOCUMENT_FRAGMENT_NODE) {
                var o = a.filter(z);
                if (o.length > 1 || i(a, Y))
                    throw new R(D,"More than one element or text in fragment");
                if (1 === o.length && !K(t, r))
                    throw new R(D,"Element in fragment can not be inserted before doctype")
            }
            if (z(e) && !K(t, r))
                throw new R(D,"Only one element can be added and only after doctype");
            if (j(e)) {
                if (i(n, (function(t) {
                    return j(t) && t !== r
                }
                )))
                    throw new R(D,"Only one doctype is allowed");
                var s = i(n, z);
                if (r && n.indexOf(s) < n.indexOf(r))
                    throw new R(D,"Doctype can only be inserted before an element")
            }
        }
        function J(t, e, r, n) {
            W(t, e, r),
            t.nodeType === B.DOCUMENT_NODE && (n || Q)(t, e, r);
            var i = e.parentNode;
            if (i && i.removeChild(e),
            e.nodeType === T) {
                var a = e.firstChild;
                if (null == a)
                    return e;
                var o = e.lastChild
            } else
                a = o = e;
            var s = r ? r.previousSibling : t.lastChild;
            a.previousSibling = s,
            o.nextSibling = r,
            s ? s.nextSibling = a : t.firstChild = a,
            null == r ? t.lastChild = o : r.previousSibling = o;
            do {
                a.parentNode = t
            } while (a !== o && (a = a.nextSibling));
            return V(t.ownerDocument || t, t),
            e.nodeType == T && (e.firstChild = e.lastChild = null),
            e
        }
        function tt() {
            this._nsMap = {}
        }
        function et() {}
        function rt() {}
        function nt() {}
        function it() {}
        function at() {}
        function ot() {}
        function st() {}
        function ut() {}
        function ct() {}
        function lt() {}
        function ft() {}
        function ht() {}
        function pt(t, e) {
            var r = []
              , n = 9 == this.nodeType && this.documentElement || this
              , i = n.prefix
              , a = n.namespaceURI;
            if (a && null == i && null == (i = n.lookupPrefix(a)))
                var o = [{
                    namespace: a,
                    prefix: null
                }];
            return mt(this, r, t, e, o),
            r.join("")
        }
        function dt(t, e, r) {
            var n = t.prefix || ""
              , i = t.namespaceURI;
            if (!i)
                return !1;
            if ("xml" === n && i === a.XML || i === a.XMLNS)
                return !1;
            for (var o = r.length; o--; ) {
                var s = r[o];
                if (s.prefix === n)
                    return s.namespace !== i
            }
            return !0
        }
        function gt(t, e, r) {
            t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, X), '"')
        }
        function mt(t, e, r, n, i) {
            if (i || (i = []),
            n) {
                if (!(t = n(t)))
                    return;
                if ("string" == typeof t)
                    return void e.push(t)
            }
            switch (t.nodeType) {
            case h:
                var o = t.attributes
                  , s = o.length
                  , u = t.firstChild
                  , c = t.tagName
                  , l = c;
                if (!(r = a.isHTML(t.namespaceURI) || r) && !t.prefix && t.namespaceURI) {
                    for (var f, b = 0; b < o.length; b++)
                        if ("xmlns" === o.item(b).name) {
                            f = o.item(b).value;
                            break
                        }
                    if (!f)
                        for (var S = i.length - 1; S >= 0; S--) {
                            if ("" === (N = i[S]).prefix && N.namespace === t.namespaceURI) {
                                f = N.namespace;
                                break
                            }
                        }
                    if (f !== t.namespaceURI)
                        for (S = i.length - 1; S >= 0; S--) {
                            var N;
                            if ((N = i[S]).namespace === t.namespaceURI) {
                                N.prefix && (l = N.prefix + ":" + c);
                                break
                            }
                        }
                }
                e.push("<", l);
                for (var A = 0; A < s; A++) {
                    "xmlns" == (D = o.item(A)).prefix ? i.push({
                        prefix: D.localName,
                        namespace: D.value
                    }) : "xmlns" == D.nodeName && i.push({
                        prefix: "",
                        namespace: D.value
                    })
                }
                for (A = 0; A < s; A++) {
                    var D, x, C;
                    if (dt(D = o.item(A), 0, i))
                        gt(e, (x = D.prefix || "") ? "xmlns:" + x : "xmlns", C = D.namespaceURI),
                        i.push({
                            prefix: x,
                            namespace: C
                        });
                    mt(D, e, r, n, i)
                }
                if (c === l && dt(t, 0, i))
                    gt(e, (x = t.prefix || "") ? "xmlns:" + x : "xmlns", C = t.namespaceURI),
                    i.push({
                        prefix: x,
                        namespace: C
                    });
                if (u || r && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
                    if (e.push(">"),
                    r && /^script$/i.test(c))
                        for (; u; )
                            u.data ? e.push(u.data) : mt(u, e, r, n, i.slice()),
                            u = u.nextSibling;
                    else
                        for (; u; )
                            mt(u, e, r, n, i.slice()),
                            u = u.nextSibling;
                    e.push("</", l, ">")
                } else
                    e.push("/>");
                return;
            case w:
            case T:
                for (u = t.firstChild; u; )
                    mt(u, e, r, n, i.slice()),
                    u = u.nextSibling;
                return;
            case p:
                return gt(e, t.name, t.value);
            case d:
                return e.push(t.data.replace(/[<&>]/g, X));
            case g:
                return e.push("<![CDATA[", t.data, "]]>");
            case v:
                return e.push("\x3c!--", t.data, "--\x3e");
            case E:
                var R = t.publicId
                  , O = t.systemId;
                if (e.push("<!DOCTYPE ", t.name),
                R)
                    e.push(" PUBLIC ", R),
                    O && "." != O && e.push(" ", O),
                    e.push(">");
                else if (O && "." != O)
                    e.push(" SYSTEM ", O, ">");
                else {
                    var I = t.internalSubset;
                    I && e.push(" [", I, "]"),
                    e.push(">")
                }
                return;
            case y:
                return e.push("<?", t.target, " ", t.data, "?>");
            case m:
                return e.push("&", t.nodeName, ";");
            default:
                e.push("??", t.nodeName)
            }
        }
        function bt(t, e, r) {
            var n;
            switch (e.nodeType) {
            case h:
                (n = e.cloneNode(!1)).ownerDocument = t;
            case T:
                break;
            case p:
                r = !0
            }
            if (n || (n = e.cloneNode(!1)),
            n.ownerDocument = t,
            n.parentNode = null,
            r)
                for (var i = e.firstChild; i; )
                    n.appendChild(bt(t, i, r)),
                    i = i.nextSibling;
            return n
        }
        function yt(t, e, r) {
            var n = new e.constructor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = e[i];
                    "object" != typeof a && a != n[i] && (n[i] = a)
                }
            switch (e.childNodes && (n.childNodes = new O),
            n.ownerDocument = t,
            n.nodeType) {
            case h:
                var o = e.attributes
                  , s = n.attributes = new U
                  , u = o.length;
                s._ownerElement = n;
                for (var c = 0; c < u; c++)
                    n.setAttributeNode(yt(t, o.item(c), !0));
                break;
            case p:
                r = !0
            }
            if (r)
                for (var l = e.firstChild; l; )
                    n.appendChild(yt(t, l, r)),
                    l = l.nextSibling;
            return n
        }
        function vt(t, e, r) {
            t[e] = r
        }
        R.prototype = Error.prototype,
        c(N, R),
        O.prototype = {
            length: 0,
            item: function(t) {
                return t >= 0 && t < this.length ? this[t] : null
            },
            toString: function(t, e) {
                for (var r = [], n = 0; n < this.length; n++)
                    mt(this[n], r, t, e);
                return r.join("")
            },
            filter: function(t) {
                return Array.prototype.filter.call(this, t)
            },
            indexOf: function(t) {
                return Array.prototype.indexOf.call(this, t)
            }
        },
        I.prototype.item = function(t) {
            return L(this),
            this[t] || null
        }
        ,
        l(I, O),
        U.prototype = {
            length: 0,
            item: O.prototype.item,
            getNamedItem: function(t) {
                for (var e = this.length; e--; ) {
                    var r = this[e];
                    if (r.nodeName == t)
                        return r
                }
            },
            setNamedItem: function(t) {
                var e = t.ownerElement;
                if (e && e != this._ownerElement)
                    throw new R(C);
                var r = this.getNamedItem(t.nodeName);
                return P(this._ownerElement, this, t, r),
                r
            },
            setNamedItemNS: function(t) {
                var e, r = t.ownerElement;
                if (r && r != this._ownerElement)
                    throw new R(C);
                return e = this.getNamedItemNS(t.namespaceURI, t.localName),
                P(this._ownerElement, this, t, e),
                e
            },
            removeNamedItem: function(t) {
                var e = this.getNamedItem(t);
                return q(this._ownerElement, this, e),
                e
            },
            removeNamedItemNS: function(t, e) {
                var r = this.getNamedItemNS(t, e);
                return q(this._ownerElement, this, r),
                r
            },
            getNamedItemNS: function(t, e) {
                for (var r = this.length; r--; ) {
                    var n = this[r];
                    if (n.localName == e && n.namespaceURI == t)
                        return n
                }
                return null
            }
        },
        k.prototype = {
            hasFeature: function(t, e) {
                return !0
            },
            createDocument: function(t, e, r) {
                var n = new G;
                if (n.implementation = this,
                n.childNodes = new O,
                n.doctype = r || null,
                r && n.appendChild(r),
                e) {
                    var i = n.createElementNS(t, e);
                    n.appendChild(i)
                }
                return n
            },
            createDocumentType: function(t, e, r) {
                var n = new ot;
                return n.name = t,
                n.nodeName = t,
                n.publicId = e || "",
                n.systemId = r || "",
                n
            }
        },
        B.prototype = {
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            attributes: null,
            parentNode: null,
            childNodes: null,
            ownerDocument: null,
            nodeValue: null,
            namespaceURI: null,
            prefix: null,
            localName: null,
            insertBefore: function(t, e) {
                return J(this, t, e)
            },
            replaceChild: function(t, e) {
                J(this, t, e, Z),
                e && this.removeChild(e)
            },
            removeChild: function(t) {
                return F(this, t)
            },
            appendChild: function(t) {
                return this.insertBefore(t, null)
            },
            hasChildNodes: function() {
                return null != this.firstChild
            },
            cloneNode: function(t) {
                return yt(this.ownerDocument || this, this, t)
            },
            normalize: function() {
                for (var t = this.firstChild; t; ) {
                    var e = t.nextSibling;
                    e && e.nodeType == d && t.nodeType == d ? (this.removeChild(e),
                    t.appendData(e.data)) : (t.normalize(),
                    t = e)
                }
            },
            isSupported: function(t, e) {
                return this.ownerDocument.implementation.hasFeature(t, e)
            },
            hasAttributes: function() {
                return this.attributes.length > 0
            },
            lookupPrefix: function(t) {
                for (var e = this; e; ) {
                    var r = e._nsMap;
                    if (r)
                        for (var n in r)
                            if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === t)
                                return n;
                    e = e.nodeType == p ? e.ownerDocument : e.parentNode
                }
                return null
            },
            lookupNamespaceURI: function(t) {
                for (var e = this; e; ) {
                    var r = e._nsMap;
                    if (r && Object.prototype.hasOwnProperty.call(r, t))
                        return r[t];
                    e = e.nodeType == p ? e.ownerDocument : e.parentNode
                }
                return null
            },
            isDefaultNamespace: function(t) {
                return null == this.lookupPrefix(t)
            }
        },
        c(f, B),
        c(f, B.prototype),
        G.prototype = {
            nodeName: "#document",
            nodeType: w,
            doctype: null,
            documentElement: null,
            _inc: 1,
            insertBefore: function(t, e) {
                if (t.nodeType == T) {
                    for (var r = t.firstChild; r; ) {
                        var n = r.nextSibling;
                        this.insertBefore(r, e),
                        r = n
                    }
                    return t
                }
                return J(this, t, e),
                t.ownerDocument = this,
                null === this.documentElement && t.nodeType === h && (this.documentElement = t),
                t
            },
            removeChild: function(t) {
                return this.documentElement == t && (this.documentElement = null),
                F(this, t)
            },
            replaceChild: function(t, e) {
                J(this, t, e, Z),
                t.ownerDocument = this,
                e && this.removeChild(e),
                z(t) && (this.documentElement = t)
            },
            importNode: function(t, e) {
                return bt(this, t, e)
            },
            getElementById: function(t) {
                var e = null;
                return _(this.documentElement, (function(r) {
                    if (r.nodeType == h && r.getAttribute("id") == t)
                        return e = r,
                        !0
                }
                )),
                e
            },
            getElementsByClassName: function(t) {
                var e = u(t);
                return new I(this,(function(r) {
                    var n = [];
                    return e.length > 0 && _(r.documentElement, (function(i) {
                        if (i !== r && i.nodeType === h) {
                            var a = i.getAttribute("class");
                            if (a) {
                                var o = t === a;
                                if (!o) {
                                    var s = u(a);
                                    o = e.every((c = s,
                                    function(t) {
                                        return c && -1 !== c.indexOf(t)
                                    }
                                    ))
                                }
                                o && n.push(i)
                            }
                        }
                        var c
                    }
                    )),
                    n
                }
                ))
            },
            createElement: function(t) {
                var e = new tt;
                return e.ownerDocument = this,
                e.nodeName = t,
                e.tagName = t,
                e.localName = t,
                e.childNodes = new O,
                (e.attributes = new U)._ownerElement = e,
                e
            },
            createDocumentFragment: function() {
                var t = new lt;
                return t.ownerDocument = this,
                t.childNodes = new O,
                t
            },
            createTextNode: function(t) {
                var e = new nt;
                return e.ownerDocument = this,
                e.appendData(t),
                e
            },
            createComment: function(t) {
                var e = new it;
                return e.ownerDocument = this,
                e.appendData(t),
                e
            },
            createCDATASection: function(t) {
                var e = new at;
                return e.ownerDocument = this,
                e.appendData(t),
                e
            },
            createProcessingInstruction: function(t, e) {
                var r = new ft;
                return r.ownerDocument = this,
                r.tagName = r.nodeName = r.target = t,
                r.nodeValue = r.data = e,
                r
            },
            createAttribute: function(t) {
                var e = new et;
                return e.ownerDocument = this,
                e.name = t,
                e.nodeName = t,
                e.localName = t,
                e.specified = !0,
                e
            },
            createEntityReference: function(t) {
                var e = new ct;
                return e.ownerDocument = this,
                e.nodeName = t,
                e
            },
            createElementNS: function(t, e) {
                var r = new tt
                  , n = e.split(":")
                  , i = r.attributes = new U;
                return r.childNodes = new O,
                r.ownerDocument = this,
                r.nodeName = e,
                r.tagName = e,
                r.namespaceURI = t,
                2 == n.length ? (r.prefix = n[0],
                r.localName = n[1]) : r.localName = e,
                i._ownerElement = r,
                r
            },
            createAttributeNS: function(t, e) {
                var r = new et
                  , n = e.split(":");
                return r.ownerDocument = this,
                r.nodeName = e,
                r.name = e,
                r.namespaceURI = t,
                r.specified = !0,
                2 == n.length ? (r.prefix = n[0],
                r.localName = n[1]) : r.localName = e,
                r
            }
        },
        l(G, B),
        tt.prototype = {
            nodeType: h,
            hasAttribute: function(t) {
                return null != this.getAttributeNode(t)
            },
            getAttribute: function(t) {
                var e = this.getAttributeNode(t);
                return e && e.value || ""
            },
            getAttributeNode: function(t) {
                return this.attributes.getNamedItem(t)
            },
            setAttribute: function(t, e) {
                var r = this.ownerDocument.createAttribute(t);
                r.value = r.nodeValue = "" + e,
                this.setAttributeNode(r)
            },
            removeAttribute: function(t) {
                var e = this.getAttributeNode(t);
                e && this.removeAttributeNode(e)
            },
            appendChild: function(t) {
                return t.nodeType === T ? this.insertBefore(t, null) : function(t, e) {
                    return e.parentNode && e.parentNode.removeChild(e),
                    e.parentNode = t,
                    e.previousSibling = t.lastChild,
                    e.nextSibling = null,
                    e.previousSibling ? e.previousSibling.nextSibling = e : t.firstChild = e,
                    t.lastChild = e,
                    V(t.ownerDocument, t, e),
                    e
                }(this, t)
            },
            setAttributeNode: function(t) {
                return this.attributes.setNamedItem(t)
            },
            setAttributeNodeNS: function(t) {
                return this.attributes.setNamedItemNS(t)
            },
            removeAttributeNode: function(t) {
                return this.attributes.removeNamedItem(t.nodeName)
            },
            removeAttributeNS: function(t, e) {
                var r = this.getAttributeNodeNS(t, e);
                r && this.removeAttributeNode(r)
            },
            hasAttributeNS: function(t, e) {
                return null != this.getAttributeNodeNS(t, e)
            },
            getAttributeNS: function(t, e) {
                var r = this.getAttributeNodeNS(t, e);
                return r && r.value || ""
            },
            setAttributeNS: function(t, e, r) {
                var n = this.ownerDocument.createAttributeNS(t, e);
                n.value = n.nodeValue = "" + r,
                this.setAttributeNode(n)
            },
            getAttributeNodeNS: function(t, e) {
                return this.attributes.getNamedItemNS(t, e)
            },
            getElementsByTagName: function(t) {
                return new I(this,(function(e) {
                    var r = [];
                    return _(e, (function(n) {
                        n === e || n.nodeType != h || "*" !== t && n.tagName != t || r.push(n)
                    }
                    )),
                    r
                }
                ))
            },
            getElementsByTagNameNS: function(t, e) {
                return new I(this,(function(r) {
                    var n = [];
                    return _(r, (function(i) {
                        i === r || i.nodeType !== h || "*" !== t && i.namespaceURI !== t || "*" !== e && i.localName != e || n.push(i)
                    }
                    )),
                    n
                }
                ))
            }
        },
        G.prototype.getElementsByTagName = tt.prototype.getElementsByTagName,
        G.prototype.getElementsByTagNameNS = tt.prototype.getElementsByTagNameNS,
        l(tt, B),
        et.prototype.nodeType = p,
        l(et, B),
        rt.prototype = {
            data: "",
            substringData: function(t, e) {
                return this.data.substring(t, t + e)
            },
            appendData: function(t) {
                t = this.data + t,
                this.nodeValue = this.data = t,
                this.length = t.length
            },
            insertData: function(t, e) {
                this.replaceData(t, 0, e)
            },
            appendChild: function(t) {
                throw new Error(A[D])
            },
            deleteData: function(t, e) {
                this.replaceData(t, e, "")
            },
            replaceData: function(t, e, r) {
                r = this.data.substring(0, t) + r + this.data.substring(t + e),
                this.nodeValue = this.data = r,
                this.length = r.length
            }
        },
        l(rt, B),
        nt.prototype = {
            nodeName: "#text",
            nodeType: d,
            splitText: function(t) {
                var e = this.data
                  , r = e.substring(t);
                e = e.substring(0, t),
                this.data = this.nodeValue = e,
                this.length = e.length;
                var n = this.ownerDocument.createTextNode(r);
                return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling),
                n
            }
        },
        l(nt, rt),
        it.prototype = {
            nodeName: "#comment",
            nodeType: v
        },
        l(it, rt),
        at.prototype = {
            nodeName: "#cdata-section",
            nodeType: g
        },
        l(at, rt),
        ot.prototype.nodeType = E,
        l(ot, B),
        st.prototype.nodeType = S,
        l(st, B),
        ut.prototype.nodeType = b,
        l(ut, B),
        ct.prototype.nodeType = m,
        l(ct, B),
        lt.prototype.nodeName = "#document-fragment",
        lt.prototype.nodeType = T,
        l(lt, B),
        ft.prototype.nodeType = y,
        l(ft, B),
        ht.prototype.serializeToString = function(t, e, r) {
            return pt.call(t, e, r)
        }
        ,
        B.prototype.toString = pt;
        try {
            if (Object.defineProperty) {
                function wt(t) {
                    switch (t.nodeType) {
                    case h:
                    case T:
                        var e = [];
                        for (t = t.firstChild; t; )
                            7 !== t.nodeType && 8 !== t.nodeType && e.push(wt(t)),
                            t = t.nextSibling;
                        return e.join("");
                    default:
                        return t.nodeValue
                    }
                }
                Object.defineProperty(I.prototype, "length", {
                    get: function() {
                        return L(this),
                        this.$$length
                    }
                }),
                Object.defineProperty(B.prototype, "textContent", {
                    get: function() {
                        return wt(this)
                    },
                    set: function(t) {
                        switch (this.nodeType) {
                        case h:
                        case T:
                            for (; this.firstChild; )
                                this.removeChild(this.firstChild);
                            (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                            break;
                        default:
                            this.data = t,
                            this.value = t,
                            this.nodeValue = t
                        }
                    }
                }),
                vt = function(t, e, r) {
                    t["$$" + e] = r
                }
            }
        } catch (Et) {}
        e.DocumentType = ot,
        e.DOMException = R,
        e.DOMImplementation = k,
        e.Element = tt,
        e.Node = B,
        e.NodeList = O,
        e.XMLSerializer = ht
    },
    1045: function(t, e, r) {
        "use strict";
        var n = r(2167).freeze;
        e.XML_ENTITIES = n({
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            quot: '"'
        }),
        e.HTML_ENTITIES = n({
            Aacute: "\xc1",
            aacute: "\xe1",
            Abreve: "\u0102",
            abreve: "\u0103",
            ac: "\u223e",
            acd: "\u223f",
            acE: "\u223e\u0333",
            Acirc: "\xc2",
            acirc: "\xe2",
            acute: "\xb4",
            Acy: "\u0410",
            acy: "\u0430",
            AElig: "\xc6",
            aelig: "\xe6",
            af: "\u2061",
            Afr: "\ud835\udd04",
            afr: "\ud835\udd1e",
            Agrave: "\xc0",
            agrave: "\xe0",
            alefsym: "\u2135",
            aleph: "\u2135",
            Alpha: "\u0391",
            alpha: "\u03b1",
            Amacr: "\u0100",
            amacr: "\u0101",
            amalg: "\u2a3f",
            AMP: "&",
            amp: "&",
            And: "\u2a53",
            and: "\u2227",
            andand: "\u2a55",
            andd: "\u2a5c",
            andslope: "\u2a58",
            andv: "\u2a5a",
            ang: "\u2220",
            ange: "\u29a4",
            angle: "\u2220",
            angmsd: "\u2221",
            angmsdaa: "\u29a8",
            angmsdab: "\u29a9",
            angmsdac: "\u29aa",
            angmsdad: "\u29ab",
            angmsdae: "\u29ac",
            angmsdaf: "\u29ad",
            angmsdag: "\u29ae",
            angmsdah: "\u29af",
            angrt: "\u221f",
            angrtvb: "\u22be",
            angrtvbd: "\u299d",
            angsph: "\u2222",
            angst: "\xc5",
            angzarr: "\u237c",
            Aogon: "\u0104",
            aogon: "\u0105",
            Aopf: "\ud835\udd38",
            aopf: "\ud835\udd52",
            ap: "\u2248",
            apacir: "\u2a6f",
            apE: "\u2a70",
            ape: "\u224a",
            apid: "\u224b",
            apos: "'",
            ApplyFunction: "\u2061",
            approx: "\u2248",
            approxeq: "\u224a",
            Aring: "\xc5",
            aring: "\xe5",
            Ascr: "\ud835\udc9c",
            ascr: "\ud835\udcb6",
            Assign: "\u2254",
            ast: "*",
            asymp: "\u2248",
            asympeq: "\u224d",
            Atilde: "\xc3",
            atilde: "\xe3",
            Auml: "\xc4",
            auml: "\xe4",
            awconint: "\u2233",
            awint: "\u2a11",
            backcong: "\u224c",
            backepsilon: "\u03f6",
            backprime: "\u2035",
            backsim: "\u223d",
            backsimeq: "\u22cd",
            Backslash: "\u2216",
            Barv: "\u2ae7",
            barvee: "\u22bd",
            Barwed: "\u2306",
            barwed: "\u2305",
            barwedge: "\u2305",
            bbrk: "\u23b5",
            bbrktbrk: "\u23b6",
            bcong: "\u224c",
            Bcy: "\u0411",
            bcy: "\u0431",
            bdquo: "\u201e",
            becaus: "\u2235",
            Because: "\u2235",
            because: "\u2235",
            bemptyv: "\u29b0",
            bepsi: "\u03f6",
            bernou: "\u212c",
            Bernoullis: "\u212c",
            Beta: "\u0392",
            beta: "\u03b2",
            beth: "\u2136",
            between: "\u226c",
            Bfr: "\ud835\udd05",
            bfr: "\ud835\udd1f",
            bigcap: "\u22c2",
            bigcirc: "\u25ef",
            bigcup: "\u22c3",
            bigodot: "\u2a00",
            bigoplus: "\u2a01",
            bigotimes: "\u2a02",
            bigsqcup: "\u2a06",
            bigstar: "\u2605",
            bigtriangledown: "\u25bd",
            bigtriangleup: "\u25b3",
            biguplus: "\u2a04",
            bigvee: "\u22c1",
            bigwedge: "\u22c0",
            bkarow: "\u290d",
            blacklozenge: "\u29eb",
            blacksquare: "\u25aa",
            blacktriangle: "\u25b4",
            blacktriangledown: "\u25be",
            blacktriangleleft: "\u25c2",
            blacktriangleright: "\u25b8",
            blank: "\u2423",
            blk12: "\u2592",
            blk14: "\u2591",
            blk34: "\u2593",
            block: "\u2588",
            bne: "=\u20e5",
            bnequiv: "\u2261\u20e5",
            bNot: "\u2aed",
            bnot: "\u2310",
            Bopf: "\ud835\udd39",
            bopf: "\ud835\udd53",
            bot: "\u22a5",
            bottom: "\u22a5",
            bowtie: "\u22c8",
            boxbox: "\u29c9",
            boxDL: "\u2557",
            boxDl: "\u2556",
            boxdL: "\u2555",
            boxdl: "\u2510",
            boxDR: "\u2554",
            boxDr: "\u2553",
            boxdR: "\u2552",
            boxdr: "\u250c",
            boxH: "\u2550",
            boxh: "\u2500",
            boxHD: "\u2566",
            boxHd: "\u2564",
            boxhD: "\u2565",
            boxhd: "\u252c",
            boxHU: "\u2569",
            boxHu: "\u2567",
            boxhU: "\u2568",
            boxhu: "\u2534",
            boxminus: "\u229f",
            boxplus: "\u229e",
            boxtimes: "\u22a0",
            boxUL: "\u255d",
            boxUl: "\u255c",
            boxuL: "\u255b",
            boxul: "\u2518",
            boxUR: "\u255a",
            boxUr: "\u2559",
            boxuR: "\u2558",
            boxur: "\u2514",
            boxV: "\u2551",
            boxv: "\u2502",
            boxVH: "\u256c",
            boxVh: "\u256b",
            boxvH: "\u256a",
            boxvh: "\u253c",
            boxVL: "\u2563",
            boxVl: "\u2562",
            boxvL: "\u2561",
            boxvl: "\u2524",
            boxVR: "\u2560",
            boxVr: "\u255f",
            boxvR: "\u255e",
            boxvr: "\u251c",
            bprime: "\u2035",
            Breve: "\u02d8",
            breve: "\u02d8",
            brvbar: "\xa6",
            Bscr: "\u212c",
            bscr: "\ud835\udcb7",
            bsemi: "\u204f",
            bsim: "\u223d",
            bsime: "\u22cd",
            bsol: "\\",
            bsolb: "\u29c5",
            bsolhsub: "\u27c8",
            bull: "\u2022",
            bullet: "\u2022",
            bump: "\u224e",
            bumpE: "\u2aae",
            bumpe: "\u224f",
            Bumpeq: "\u224e",
            bumpeq: "\u224f",
            Cacute: "\u0106",
            cacute: "\u0107",
            Cap: "\u22d2",
            cap: "\u2229",
            capand: "\u2a44",
            capbrcup: "\u2a49",
            capcap: "\u2a4b",
            capcup: "\u2a47",
            capdot: "\u2a40",
            CapitalDifferentialD: "\u2145",
            caps: "\u2229\ufe00",
            caret: "\u2041",
            caron: "\u02c7",
            Cayleys: "\u212d",
            ccaps: "\u2a4d",
            Ccaron: "\u010c",
            ccaron: "\u010d",
            Ccedil: "\xc7",
            ccedil: "\xe7",
            Ccirc: "\u0108",
            ccirc: "\u0109",
            Cconint: "\u2230",
            ccups: "\u2a4c",
            ccupssm: "\u2a50",
            Cdot: "\u010a",
            cdot: "\u010b",
            cedil: "\xb8",
            Cedilla: "\xb8",
            cemptyv: "\u29b2",
            cent: "\xa2",
            CenterDot: "\xb7",
            centerdot: "\xb7",
            Cfr: "\u212d",
            cfr: "\ud835\udd20",
            CHcy: "\u0427",
            chcy: "\u0447",
            check: "\u2713",
            checkmark: "\u2713",
            Chi: "\u03a7",
            chi: "\u03c7",
            cir: "\u25cb",
            circ: "\u02c6",
            circeq: "\u2257",
            circlearrowleft: "\u21ba",
            circlearrowright: "\u21bb",
            circledast: "\u229b",
            circledcirc: "\u229a",
            circleddash: "\u229d",
            CircleDot: "\u2299",
            circledR: "\xae",
            circledS: "\u24c8",
            CircleMinus: "\u2296",
            CirclePlus: "\u2295",
            CircleTimes: "\u2297",
            cirE: "\u29c3",
            cire: "\u2257",
            cirfnint: "\u2a10",
            cirmid: "\u2aef",
            cirscir: "\u29c2",
            ClockwiseContourIntegral: "\u2232",
            CloseCurlyDoubleQuote: "\u201d",
            CloseCurlyQuote: "\u2019",
            clubs: "\u2663",
            clubsuit: "\u2663",
            Colon: "\u2237",
            colon: ":",
            Colone: "\u2a74",
            colone: "\u2254",
            coloneq: "\u2254",
            comma: ",",
            commat: "@",
            comp: "\u2201",
            compfn: "\u2218",
            complement: "\u2201",
            complexes: "\u2102",
            cong: "\u2245",
            congdot: "\u2a6d",
            Congruent: "\u2261",
            Conint: "\u222f",
            conint: "\u222e",
            ContourIntegral: "\u222e",
            Copf: "\u2102",
            copf: "\ud835\udd54",
            coprod: "\u2210",
            Coproduct: "\u2210",
            COPY: "\xa9",
            copy: "\xa9",
            copysr: "\u2117",
            CounterClockwiseContourIntegral: "\u2233",
            crarr: "\u21b5",
            Cross: "\u2a2f",
            cross: "\u2717",
            Cscr: "\ud835\udc9e",
            cscr: "\ud835\udcb8",
            csub: "\u2acf",
            csube: "\u2ad1",
            csup: "\u2ad0",
            csupe: "\u2ad2",
            ctdot: "\u22ef",
            cudarrl: "\u2938",
            cudarrr: "\u2935",
            cuepr: "\u22de",
            cuesc: "\u22df",
            cularr: "\u21b6",
            cularrp: "\u293d",
            Cup: "\u22d3",
            cup: "\u222a",
            cupbrcap: "\u2a48",
            CupCap: "\u224d",
            cupcap: "\u2a46",
            cupcup: "\u2a4a",
            cupdot: "\u228d",
            cupor: "\u2a45",
            cups: "\u222a\ufe00",
            curarr: "\u21b7",
            curarrm: "\u293c",
            curlyeqprec: "\u22de",
            curlyeqsucc: "\u22df",
            curlyvee: "\u22ce",
            curlywedge: "\u22cf",
            curren: "\xa4",
            curvearrowleft: "\u21b6",
            curvearrowright: "\u21b7",
            cuvee: "\u22ce",
            cuwed: "\u22cf",
            cwconint: "\u2232",
            cwint: "\u2231",
            cylcty: "\u232d",
            Dagger: "\u2021",
            dagger: "\u2020",
            daleth: "\u2138",
            Darr: "\u21a1",
            dArr: "\u21d3",
            darr: "\u2193",
            dash: "\u2010",
            Dashv: "\u2ae4",
            dashv: "\u22a3",
            dbkarow: "\u290f",
            dblac: "\u02dd",
            Dcaron: "\u010e",
            dcaron: "\u010f",
            Dcy: "\u0414",
            dcy: "\u0434",
            DD: "\u2145",
            dd: "\u2146",
            ddagger: "\u2021",
            ddarr: "\u21ca",
            DDotrahd: "\u2911",
            ddotseq: "\u2a77",
            deg: "\xb0",
            Del: "\u2207",
            Delta: "\u0394",
            delta: "\u03b4",
            demptyv: "\u29b1",
            dfisht: "\u297f",
            Dfr: "\ud835\udd07",
            dfr: "\ud835\udd21",
            dHar: "\u2965",
            dharl: "\u21c3",
            dharr: "\u21c2",
            DiacriticalAcute: "\xb4",
            DiacriticalDot: "\u02d9",
            DiacriticalDoubleAcute: "\u02dd",
            DiacriticalGrave: "`",
            DiacriticalTilde: "\u02dc",
            diam: "\u22c4",
            Diamond: "\u22c4",
            diamond: "\u22c4",
            diamondsuit: "\u2666",
            diams: "\u2666",
            die: "\xa8",
            DifferentialD: "\u2146",
            digamma: "\u03dd",
            disin: "\u22f2",
            div: "\xf7",
            divide: "\xf7",
            divideontimes: "\u22c7",
            divonx: "\u22c7",
            DJcy: "\u0402",
            djcy: "\u0452",
            dlcorn: "\u231e",
            dlcrop: "\u230d",
            dollar: "$",
            Dopf: "\ud835\udd3b",
            dopf: "\ud835\udd55",
            Dot: "\xa8",
            dot: "\u02d9",
            DotDot: "\u20dc",
            doteq: "\u2250",
            doteqdot: "\u2251",
            DotEqual: "\u2250",
            dotminus: "\u2238",
            dotplus: "\u2214",
            dotsquare: "\u22a1",
            doublebarwedge: "\u2306",
            DoubleContourIntegral: "\u222f",
            DoubleDot: "\xa8",
            DoubleDownArrow: "\u21d3",
            DoubleLeftArrow: "\u21d0",
            DoubleLeftRightArrow: "\u21d4",
            DoubleLeftTee: "\u2ae4",
            DoubleLongLeftArrow: "\u27f8",
            DoubleLongLeftRightArrow: "\u27fa",
            DoubleLongRightArrow: "\u27f9",
            DoubleRightArrow: "\u21d2",
            DoubleRightTee: "\u22a8",
            DoubleUpArrow: "\u21d1",
            DoubleUpDownArrow: "\u21d5",
            DoubleVerticalBar: "\u2225",
            DownArrow: "\u2193",
            Downarrow: "\u21d3",
            downarrow: "\u2193",
            DownArrowBar: "\u2913",
            DownArrowUpArrow: "\u21f5",
            DownBreve: "\u0311",
            downdownarrows: "\u21ca",
            downharpoonleft: "\u21c3",
            downharpoonright: "\u21c2",
            DownLeftRightVector: "\u2950",
            DownLeftTeeVector: "\u295e",
            DownLeftVector: "\u21bd",
            DownLeftVectorBar: "\u2956",
            DownRightTeeVector: "\u295f",
            DownRightVector: "\u21c1",
            DownRightVectorBar: "\u2957",
            DownTee: "\u22a4",
            DownTeeArrow: "\u21a7",
            drbkarow: "\u2910",
            drcorn: "\u231f",
            drcrop: "\u230c",
            Dscr: "\ud835\udc9f",
            dscr: "\ud835\udcb9",
            DScy: "\u0405",
            dscy: "\u0455",
            dsol: "\u29f6",
            Dstrok: "\u0110",
            dstrok: "\u0111",
            dtdot: "\u22f1",
            dtri: "\u25bf",
            dtrif: "\u25be",
            duarr: "\u21f5",
            duhar: "\u296f",
            dwangle: "\u29a6",
            DZcy: "\u040f",
            dzcy: "\u045f",
            dzigrarr: "\u27ff",
            Eacute: "\xc9",
            eacute: "\xe9",
            easter: "\u2a6e",
            Ecaron: "\u011a",
            ecaron: "\u011b",
            ecir: "\u2256",
            Ecirc: "\xca",
            ecirc: "\xea",
            ecolon: "\u2255",
            Ecy: "\u042d",
            ecy: "\u044d",
            eDDot: "\u2a77",
            Edot: "\u0116",
            eDot: "\u2251",
            edot: "\u0117",
            ee: "\u2147",
            efDot: "\u2252",
            Efr: "\ud835\udd08",
            efr: "\ud835\udd22",
            eg: "\u2a9a",
            Egrave: "\xc8",
            egrave: "\xe8",
            egs: "\u2a96",
            egsdot: "\u2a98",
            el: "\u2a99",
            Element: "\u2208",
            elinters: "\u23e7",
            ell: "\u2113",
            els: "\u2a95",
            elsdot: "\u2a97",
            Emacr: "\u0112",
            emacr: "\u0113",
            empty: "\u2205",
            emptyset: "\u2205",
            EmptySmallSquare: "\u25fb",
            emptyv: "\u2205",
            EmptyVerySmallSquare: "\u25ab",
            emsp: "\u2003",
            emsp13: "\u2004",
            emsp14: "\u2005",
            ENG: "\u014a",
            eng: "\u014b",
            ensp: "\u2002",
            Eogon: "\u0118",
            eogon: "\u0119",
            Eopf: "\ud835\udd3c",
            eopf: "\ud835\udd56",
            epar: "\u22d5",
            eparsl: "\u29e3",
            eplus: "\u2a71",
            epsi: "\u03b5",
            Epsilon: "\u0395",
            epsilon: "\u03b5",
            epsiv: "\u03f5",
            eqcirc: "\u2256",
            eqcolon: "\u2255",
            eqsim: "\u2242",
            eqslantgtr: "\u2a96",
            eqslantless: "\u2a95",
            Equal: "\u2a75",
            equals: "=",
            EqualTilde: "\u2242",
            equest: "\u225f",
            Equilibrium: "\u21cc",
            equiv: "\u2261",
            equivDD: "\u2a78",
            eqvparsl: "\u29e5",
            erarr: "\u2971",
            erDot: "\u2253",
            Escr: "\u2130",
            escr: "\u212f",
            esdot: "\u2250",
            Esim: "\u2a73",
            esim: "\u2242",
            Eta: "\u0397",
            eta: "\u03b7",
            ETH: "\xd0",
            eth: "\xf0",
            Euml: "\xcb",
            euml: "\xeb",
            euro: "\u20ac",
            excl: "!",
            exist: "\u2203",
            Exists: "\u2203",
            expectation: "\u2130",
            ExponentialE: "\u2147",
            exponentiale: "\u2147",
            fallingdotseq: "\u2252",
            Fcy: "\u0424",
            fcy: "\u0444",
            female: "\u2640",
            ffilig: "\ufb03",
            fflig: "\ufb00",
            ffllig: "\ufb04",
            Ffr: "\ud835\udd09",
            ffr: "\ud835\udd23",
            filig: "\ufb01",
            FilledSmallSquare: "\u25fc",
            FilledVerySmallSquare: "\u25aa",
            fjlig: "fj",
            flat: "\u266d",
            fllig: "\ufb02",
            fltns: "\u25b1",
            fnof: "\u0192",
            Fopf: "\ud835\udd3d",
            fopf: "\ud835\udd57",
            ForAll: "\u2200",
            forall: "\u2200",
            fork: "\u22d4",
            forkv: "\u2ad9",
            Fouriertrf: "\u2131",
            fpartint: "\u2a0d",
            frac12: "\xbd",
            frac13: "\u2153",
            frac14: "\xbc",
            frac15: "\u2155",
            frac16: "\u2159",
            frac18: "\u215b",
            frac23: "\u2154",
            frac25: "\u2156",
            frac34: "\xbe",
            frac35: "\u2157",
            frac38: "\u215c",
            frac45: "\u2158",
            frac56: "\u215a",
            frac58: "\u215d",
            frac78: "\u215e",
            frasl: "\u2044",
            frown: "\u2322",
            Fscr: "\u2131",
            fscr: "\ud835\udcbb",
            gacute: "\u01f5",
            Gamma: "\u0393",
            gamma: "\u03b3",
            Gammad: "\u03dc",
            gammad: "\u03dd",
            gap: "\u2a86",
            Gbreve: "\u011e",
            gbreve: "\u011f",
            Gcedil: "\u0122",
            Gcirc: "\u011c",
            gcirc: "\u011d",
            Gcy: "\u0413",
            gcy: "\u0433",
            Gdot: "\u0120",
            gdot: "\u0121",
            gE: "\u2267",
            ge: "\u2265",
            gEl: "\u2a8c",
            gel: "\u22db",
            geq: "\u2265",
            geqq: "\u2267",
            geqslant: "\u2a7e",
            ges: "\u2a7e",
            gescc: "\u2aa9",
            gesdot: "\u2a80",
            gesdoto: "\u2a82",
            gesdotol: "\u2a84",
            gesl: "\u22db\ufe00",
            gesles: "\u2a94",
            Gfr: "\ud835\udd0a",
            gfr: "\ud835\udd24",
            Gg: "\u22d9",
            gg: "\u226b",
            ggg: "\u22d9",
            gimel: "\u2137",
            GJcy: "\u0403",
            gjcy: "\u0453",
            gl: "\u2277",
            gla: "\u2aa5",
            glE: "\u2a92",
            glj: "\u2aa4",
            gnap: "\u2a8a",
            gnapprox: "\u2a8a",
            gnE: "\u2269",
            gne: "\u2a88",
            gneq: "\u2a88",
            gneqq: "\u2269",
            gnsim: "\u22e7",
            Gopf: "\ud835\udd3e",
            gopf: "\ud835\udd58",
            grave: "`",
            GreaterEqual: "\u2265",
            GreaterEqualLess: "\u22db",
            GreaterFullEqual: "\u2267",
            GreaterGreater: "\u2aa2",
            GreaterLess: "\u2277",
            GreaterSlantEqual: "\u2a7e",
            GreaterTilde: "\u2273",
            Gscr: "\ud835\udca2",
            gscr: "\u210a",
            gsim: "\u2273",
            gsime: "\u2a8e",
            gsiml: "\u2a90",
            Gt: "\u226b",
            GT: ">",
            gt: ">",
            gtcc: "\u2aa7",
            gtcir: "\u2a7a",
            gtdot: "\u22d7",
            gtlPar: "\u2995",
            gtquest: "\u2a7c",
            gtrapprox: "\u2a86",
            gtrarr: "\u2978",
            gtrdot: "\u22d7",
            gtreqless: "\u22db",
            gtreqqless: "\u2a8c",
            gtrless: "\u2277",
            gtrsim: "\u2273",
            gvertneqq: "\u2269\ufe00",
            gvnE: "\u2269\ufe00",
            Hacek: "\u02c7",
            hairsp: "\u200a",
            half: "\xbd",
            hamilt: "\u210b",
            HARDcy: "\u042a",
            hardcy: "\u044a",
            hArr: "\u21d4",
            harr: "\u2194",
            harrcir: "\u2948",
            harrw: "\u21ad",
            Hat: "^",
            hbar: "\u210f",
            Hcirc: "\u0124",
            hcirc: "\u0125",
            hearts: "\u2665",
            heartsuit: "\u2665",
            hellip: "\u2026",
            hercon: "\u22b9",
            Hfr: "\u210c",
            hfr: "\ud835\udd25",
            HilbertSpace: "\u210b",
            hksearow: "\u2925",
            hkswarow: "\u2926",
            hoarr: "\u21ff",
            homtht: "\u223b",
            hookleftarrow: "\u21a9",
            hookrightarrow: "\u21aa",
            Hopf: "\u210d",
            hopf: "\ud835\udd59",
            horbar: "\u2015",
            HorizontalLine: "\u2500",
            Hscr: "\u210b",
            hscr: "\ud835\udcbd",
            hslash: "\u210f",
            Hstrok: "\u0126",
            hstrok: "\u0127",
            HumpDownHump: "\u224e",
            HumpEqual: "\u224f",
            hybull: "\u2043",
            hyphen: "\u2010",
            Iacute: "\xcd",
            iacute: "\xed",
            ic: "\u2063",
            Icirc: "\xce",
            icirc: "\xee",
            Icy: "\u0418",
            icy: "\u0438",
            Idot: "\u0130",
            IEcy: "\u0415",
            iecy: "\u0435",
            iexcl: "\xa1",
            iff: "\u21d4",
            Ifr: "\u2111",
            ifr: "\ud835\udd26",
            Igrave: "\xcc",
            igrave: "\xec",
            ii: "\u2148",
            iiiint: "\u2a0c",
            iiint: "\u222d",
            iinfin: "\u29dc",
            iiota: "\u2129",
            IJlig: "\u0132",
            ijlig: "\u0133",
            Im: "\u2111",
            Imacr: "\u012a",
            imacr: "\u012b",
            image: "\u2111",
            ImaginaryI: "\u2148",
            imagline: "\u2110",
            imagpart: "\u2111",
            imath: "\u0131",
            imof: "\u22b7",
            imped: "\u01b5",
            Implies: "\u21d2",
            in: "\u2208",
            incare: "\u2105",
            infin: "\u221e",
            infintie: "\u29dd",
            inodot: "\u0131",
            Int: "\u222c",
            int: "\u222b",
            intcal: "\u22ba",
            integers: "\u2124",
            Integral: "\u222b",
            intercal: "\u22ba",
            Intersection: "\u22c2",
            intlarhk: "\u2a17",
            intprod: "\u2a3c",
            InvisibleComma: "\u2063",
            InvisibleTimes: "\u2062",
            IOcy: "\u0401",
            iocy: "\u0451",
            Iogon: "\u012e",
            iogon: "\u012f",
            Iopf: "\ud835\udd40",
            iopf: "\ud835\udd5a",
            Iota: "\u0399",
            iota: "\u03b9",
            iprod: "\u2a3c",
            iquest: "\xbf",
            Iscr: "\u2110",
            iscr: "\ud835\udcbe",
            isin: "\u2208",
            isindot: "\u22f5",
            isinE: "\u22f9",
            isins: "\u22f4",
            isinsv: "\u22f3",
            isinv: "\u2208",
            it: "\u2062",
            Itilde: "\u0128",
            itilde: "\u0129",
            Iukcy: "\u0406",
            iukcy: "\u0456",
            Iuml: "\xcf",
            iuml: "\xef",
            Jcirc: "\u0134",
            jcirc: "\u0135",
            Jcy: "\u0419",
            jcy: "\u0439",
            Jfr: "\ud835\udd0d",
            jfr: "\ud835\udd27",
            jmath: "\u0237",
            Jopf: "\ud835\udd41",
            jopf: "\ud835\udd5b",
            Jscr: "\ud835\udca5",
            jscr: "\ud835\udcbf",
            Jsercy: "\u0408",
            jsercy: "\u0458",
            Jukcy: "\u0404",
            jukcy: "\u0454",
            Kappa: "\u039a",
            kappa: "\u03ba",
            kappav: "\u03f0",
            Kcedil: "\u0136",
            kcedil: "\u0137",
            Kcy: "\u041a",
            kcy: "\u043a",
            Kfr: "\ud835\udd0e",
            kfr: "\ud835\udd28",
            kgreen: "\u0138",
            KHcy: "\u0425",
            khcy: "\u0445",
            KJcy: "\u040c",
            kjcy: "\u045c",
            Kopf: "\ud835\udd42",
            kopf: "\ud835\udd5c",
            Kscr: "\ud835\udca6",
            kscr: "\ud835\udcc0",
            lAarr: "\u21da",
            Lacute: "\u0139",
            lacute: "\u013a",
            laemptyv: "\u29b4",
            lagran: "\u2112",
            Lambda: "\u039b",
            lambda: "\u03bb",
            Lang: "\u27ea",
            lang: "\u27e8",
            langd: "\u2991",
            langle: "\u27e8",
            lap: "\u2a85",
            Laplacetrf: "\u2112",
            laquo: "\xab",
            Larr: "\u219e",
            lArr: "\u21d0",
            larr: "\u2190",
            larrb: "\u21e4",
            larrbfs: "\u291f",
            larrfs: "\u291d",
            larrhk: "\u21a9",
            larrlp: "\u21ab",
            larrpl: "\u2939",
            larrsim: "\u2973",
            larrtl: "\u21a2",
            lat: "\u2aab",
            lAtail: "\u291b",
            latail: "\u2919",
            late: "\u2aad",
            lates: "\u2aad\ufe00",
            lBarr: "\u290e",
            lbarr: "\u290c",
            lbbrk: "\u2772",
            lbrace: "{",
            lbrack: "[",
            lbrke: "\u298b",
            lbrksld: "\u298f",
            lbrkslu: "\u298d",
            Lcaron: "\u013d",
            lcaron: "\u013e",
            Lcedil: "\u013b",
            lcedil: "\u013c",
            lceil: "\u2308",
            lcub: "{",
            Lcy: "\u041b",
            lcy: "\u043b",
            ldca: "\u2936",
            ldquo: "\u201c",
            ldquor: "\u201e",
            ldrdhar: "\u2967",
            ldrushar: "\u294b",
            ldsh: "\u21b2",
            lE: "\u2266",
            le: "\u2264",
            LeftAngleBracket: "\u27e8",
            LeftArrow: "\u2190",
            Leftarrow: "\u21d0",
            leftarrow: "\u2190",
            LeftArrowBar: "\u21e4",
            LeftArrowRightArrow: "\u21c6",
            leftarrowtail: "\u21a2",
            LeftCeiling: "\u2308",
            LeftDoubleBracket: "\u27e6",
            LeftDownTeeVector: "\u2961",
            LeftDownVector: "\u21c3",
            LeftDownVectorBar: "\u2959",
            LeftFloor: "\u230a",
            leftharpoondown: "\u21bd",
            leftharpoonup: "\u21bc",
            leftleftarrows: "\u21c7",
            LeftRightArrow: "\u2194",
            Leftrightarrow: "\u21d4",
            leftrightarrow: "\u2194",
            leftrightarrows: "\u21c6",
            leftrightharpoons: "\u21cb",
            leftrightsquigarrow: "\u21ad",
            LeftRightVector: "\u294e",
            LeftTee: "\u22a3",
            LeftTeeArrow: "\u21a4",
            LeftTeeVector: "\u295a",
            leftthreetimes: "\u22cb",
            LeftTriangle: "\u22b2",
            LeftTriangleBar: "\u29cf",
            LeftTriangleEqual: "\u22b4",
            LeftUpDownVector: "\u2951",
            LeftUpTeeVector: "\u2960",
            LeftUpVector: "\u21bf",
            LeftUpVectorBar: "\u2958",
            LeftVector: "\u21bc",
            LeftVectorBar: "\u2952",
            lEg: "\u2a8b",
            leg: "\u22da",
            leq: "\u2264",
            leqq: "\u2266",
            leqslant: "\u2a7d",
            les: "\u2a7d",
            lescc: "\u2aa8",
            lesdot: "\u2a7f",
            lesdoto: "\u2a81",
            lesdotor: "\u2a83",
            lesg: "\u22da\ufe00",
            lesges: "\u2a93",
            lessapprox: "\u2a85",
            lessdot: "\u22d6",
            lesseqgtr: "\u22da",
            lesseqqgtr: "\u2a8b",
            LessEqualGreater: "\u22da",
            LessFullEqual: "\u2266",
            LessGreater: "\u2276",
            lessgtr: "\u2276",
            LessLess: "\u2aa1",
            lesssim: "\u2272",
            LessSlantEqual: "\u2a7d",
            LessTilde: "\u2272",
            lfisht: "\u297c",
            lfloor: "\u230a",
            Lfr: "\ud835\udd0f",
            lfr: "\ud835\udd29",
            lg: "\u2276",
            lgE: "\u2a91",
            lHar: "\u2962",
            lhard: "\u21bd",
            lharu: "\u21bc",
            lharul: "\u296a",
            lhblk: "\u2584",
            LJcy: "\u0409",
            ljcy: "\u0459",
            Ll: "\u22d8",
            ll: "\u226a",
            llarr: "\u21c7",
            llcorner: "\u231e",
            Lleftarrow: "\u21da",
            llhard: "\u296b",
            lltri: "\u25fa",
            Lmidot: "\u013f",
            lmidot: "\u0140",
            lmoust: "\u23b0",
            lmoustache: "\u23b0",
            lnap: "\u2a89",
            lnapprox: "\u2a89",
            lnE: "\u2268",
            lne: "\u2a87",
            lneq: "\u2a87",
            lneqq: "\u2268",
            lnsim: "\u22e6",
            loang: "\u27ec",
            loarr: "\u21fd",
            lobrk: "\u27e6",
            LongLeftArrow: "\u27f5",
            Longleftarrow: "\u27f8",
            longleftarrow: "\u27f5",
            LongLeftRightArrow: "\u27f7",
            Longleftrightarrow: "\u27fa",
            longleftrightarrow: "\u27f7",
            longmapsto: "\u27fc",
            LongRightArrow: "\u27f6",
            Longrightarrow: "\u27f9",
            longrightarrow: "\u27f6",
            looparrowleft: "\u21ab",
            looparrowright: "\u21ac",
            lopar: "\u2985",
            Lopf: "\ud835\udd43",
            lopf: "\ud835\udd5d",
            loplus: "\u2a2d",
            lotimes: "\u2a34",
            lowast: "\u2217",
            lowbar: "_",
            LowerLeftArrow: "\u2199",
            LowerRightArrow: "\u2198",
            loz: "\u25ca",
            lozenge: "\u25ca",
            lozf: "\u29eb",
            lpar: "(",
            lparlt: "\u2993",
            lrarr: "\u21c6",
            lrcorner: "\u231f",
            lrhar: "\u21cb",
            lrhard: "\u296d",
            lrm: "\u200e",
            lrtri: "\u22bf",
            lsaquo: "\u2039",
            Lscr: "\u2112",
            lscr: "\ud835\udcc1",
            Lsh: "\u21b0",
            lsh: "\u21b0",
            lsim: "\u2272",
            lsime: "\u2a8d",
            lsimg: "\u2a8f",
            lsqb: "[",
            lsquo: "\u2018",
            lsquor: "\u201a",
            Lstrok: "\u0141",
            lstrok: "\u0142",
            Lt: "\u226a",
            LT: "<",
            lt: "<",
            ltcc: "\u2aa6",
            ltcir: "\u2a79",
            ltdot: "\u22d6",
            lthree: "\u22cb",
            ltimes: "\u22c9",
            ltlarr: "\u2976",
            ltquest: "\u2a7b",
            ltri: "\u25c3",
            ltrie: "\u22b4",
            ltrif: "\u25c2",
            ltrPar: "\u2996",
            lurdshar: "\u294a",
            luruhar: "\u2966",
            lvertneqq: "\u2268\ufe00",
            lvnE: "\u2268\ufe00",
            macr: "\xaf",
            male: "\u2642",
            malt: "\u2720",
            maltese: "\u2720",
            Map: "\u2905",
            map: "\u21a6",
            mapsto: "\u21a6",
            mapstodown: "\u21a7",
            mapstoleft: "\u21a4",
            mapstoup: "\u21a5",
            marker: "\u25ae",
            mcomma: "\u2a29",
            Mcy: "\u041c",
            mcy: "\u043c",
            mdash: "\u2014",
            mDDot: "\u223a",
            measuredangle: "\u2221",
            MediumSpace: "\u205f",
            Mellintrf: "\u2133",
            Mfr: "\ud835\udd10",
            mfr: "\ud835\udd2a",
            mho: "\u2127",
            micro: "\xb5",
            mid: "\u2223",
            midast: "*",
            midcir: "\u2af0",
            middot: "\xb7",
            minus: "\u2212",
            minusb: "\u229f",
            minusd: "\u2238",
            minusdu: "\u2a2a",
            MinusPlus: "\u2213",
            mlcp: "\u2adb",
            mldr: "\u2026",
            mnplus: "\u2213",
            models: "\u22a7",
            Mopf: "\ud835\udd44",
            mopf: "\ud835\udd5e",
            mp: "\u2213",
            Mscr: "\u2133",
            mscr: "\ud835\udcc2",
            mstpos: "\u223e",
            Mu: "\u039c",
            mu: "\u03bc",
            multimap: "\u22b8",
            mumap: "\u22b8",
            nabla: "\u2207",
            Nacute: "\u0143",
            nacute: "\u0144",
            nang: "\u2220\u20d2",
            nap: "\u2249",
            napE: "\u2a70\u0338",
            napid: "\u224b\u0338",
            napos: "\u0149",
            napprox: "\u2249",
            natur: "\u266e",
            natural: "\u266e",
            naturals: "\u2115",
            nbsp: "\xa0",
            nbump: "\u224e\u0338",
            nbumpe: "\u224f\u0338",
            ncap: "\u2a43",
            Ncaron: "\u0147",
            ncaron: "\u0148",
            Ncedil: "\u0145",
            ncedil: "\u0146",
            ncong: "\u2247",
            ncongdot: "\u2a6d\u0338",
            ncup: "\u2a42",
            Ncy: "\u041d",
            ncy: "\u043d",
            ndash: "\u2013",
            ne: "\u2260",
            nearhk: "\u2924",
            neArr: "\u21d7",
            nearr: "\u2197",
            nearrow: "\u2197",
            nedot: "\u2250\u0338",
            NegativeMediumSpace: "\u200b",
            NegativeThickSpace: "\u200b",
            NegativeThinSpace: "\u200b",
            NegativeVeryThinSpace: "\u200b",
            nequiv: "\u2262",
            nesear: "\u2928",
            nesim: "\u2242\u0338",
            NestedGreaterGreater: "\u226b",
            NestedLessLess: "\u226a",
            NewLine: "\n",
            nexist: "\u2204",
            nexists: "\u2204",
            Nfr: "\ud835\udd11",
            nfr: "\ud835\udd2b",
            ngE: "\u2267\u0338",
            nge: "\u2271",
            ngeq: "\u2271",
            ngeqq: "\u2267\u0338",
            ngeqslant: "\u2a7e\u0338",
            nges: "\u2a7e\u0338",
            nGg: "\u22d9\u0338",
            ngsim: "\u2275",
            nGt: "\u226b\u20d2",
            ngt: "\u226f",
            ngtr: "\u226f",
            nGtv: "\u226b\u0338",
            nhArr: "\u21ce",
            nharr: "\u21ae",
            nhpar: "\u2af2",
            ni: "\u220b",
            nis: "\u22fc",
            nisd: "\u22fa",
            niv: "\u220b",
            NJcy: "\u040a",
            njcy: "\u045a",
            nlArr: "\u21cd",
            nlarr: "\u219a",
            nldr: "\u2025",
            nlE: "\u2266\u0338",
            nle: "\u2270",
            nLeftarrow: "\u21cd",
            nleftarrow: "\u219a",
            nLeftrightarrow: "\u21ce",
            nleftrightarrow: "\u21ae",
            nleq: "\u2270",
            nleqq: "\u2266\u0338",
            nleqslant: "\u2a7d\u0338",
            nles: "\u2a7d\u0338",
            nless: "\u226e",
            nLl: "\u22d8\u0338",
            nlsim: "\u2274",
            nLt: "\u226a\u20d2",
            nlt: "\u226e",
            nltri: "\u22ea",
            nltrie: "\u22ec",
            nLtv: "\u226a\u0338",
            nmid: "\u2224",
            NoBreak: "\u2060",
            NonBreakingSpace: "\xa0",
            Nopf: "\u2115",
            nopf: "\ud835\udd5f",
            Not: "\u2aec",
            not: "\xac",
            NotCongruent: "\u2262",
            NotCupCap: "\u226d",
            NotDoubleVerticalBar: "\u2226",
            NotElement: "\u2209",
            NotEqual: "\u2260",
            NotEqualTilde: "\u2242\u0338",
            NotExists: "\u2204",
            NotGreater: "\u226f",
            NotGreaterEqual: "\u2271",
            NotGreaterFullEqual: "\u2267\u0338",
            NotGreaterGreater: "\u226b\u0338",
            NotGreaterLess: "\u2279",
            NotGreaterSlantEqual: "\u2a7e\u0338",
            NotGreaterTilde: "\u2275",
            NotHumpDownHump: "\u224e\u0338",
            NotHumpEqual: "\u224f\u0338",
            notin: "\u2209",
            notindot: "\u22f5\u0338",
            notinE: "\u22f9\u0338",
            notinva: "\u2209",
            notinvb: "\u22f7",
            notinvc: "\u22f6",
            NotLeftTriangle: "\u22ea",
            NotLeftTriangleBar: "\u29cf\u0338",
            NotLeftTriangleEqual: "\u22ec",
            NotLess: "\u226e",
            NotLessEqual: "\u2270",
            NotLessGreater: "\u2278",
            NotLessLess: "\u226a\u0338",
            NotLessSlantEqual: "\u2a7d\u0338",
            NotLessTilde: "\u2274",
            NotNestedGreaterGreater: "\u2aa2\u0338",
            NotNestedLessLess: "\u2aa1\u0338",
            notni: "\u220c",
            notniva: "\u220c",
            notnivb: "\u22fe",
            notnivc: "\u22fd",
            NotPrecedes: "\u2280",
            NotPrecedesEqual: "\u2aaf\u0338",
            NotPrecedesSlantEqual: "\u22e0",
            NotReverseElement: "\u220c",
            NotRightTriangle: "\u22eb",
            NotRightTriangleBar: "\u29d0\u0338",
            NotRightTriangleEqual: "\u22ed",
            NotSquareSubset: "\u228f\u0338",
            NotSquareSubsetEqual: "\u22e2",
            NotSquareSuperset: "\u2290\u0338",
            NotSquareSupersetEqual: "\u22e3",
            NotSubset: "\u2282\u20d2",
            NotSubsetEqual: "\u2288",
            NotSucceeds: "\u2281",
            NotSucceedsEqual: "\u2ab0\u0338",
            NotSucceedsSlantEqual: "\u22e1",
            NotSucceedsTilde: "\u227f\u0338",
            NotSuperset: "\u2283\u20d2",
            NotSupersetEqual: "\u2289",
            NotTilde: "\u2241",
            NotTildeEqual: "\u2244",
            NotTildeFullEqual: "\u2247",
            NotTildeTilde: "\u2249",
            NotVerticalBar: "\u2224",
            npar: "\u2226",
            nparallel: "\u2226",
            nparsl: "\u2afd\u20e5",
            npart: "\u2202\u0338",
            npolint: "\u2a14",
            npr: "\u2280",
            nprcue: "\u22e0",
            npre: "\u2aaf\u0338",
            nprec: "\u2280",
            npreceq: "\u2aaf\u0338",
            nrArr: "\u21cf",
            nrarr: "\u219b",
            nrarrc: "\u2933\u0338",
            nrarrw: "\u219d\u0338",
            nRightarrow: "\u21cf",
            nrightarrow: "\u219b",
            nrtri: "\u22eb",
            nrtrie: "\u22ed",
            nsc: "\u2281",
            nsccue: "\u22e1",
            nsce: "\u2ab0\u0338",
            Nscr: "\ud835\udca9",
            nscr: "\ud835\udcc3",
            nshortmid: "\u2224",
            nshortparallel: "\u2226",
            nsim: "\u2241",
            nsime: "\u2244",
            nsimeq: "\u2244",
            nsmid: "\u2224",
            nspar: "\u2226",
            nsqsube: "\u22e2",
            nsqsupe: "\u22e3",
            nsub: "\u2284",
            nsubE: "\u2ac5\u0338",
            nsube: "\u2288",
            nsubset: "\u2282\u20d2",
            nsubseteq: "\u2288",
            nsubseteqq: "\u2ac5\u0338",
            nsucc: "\u2281",
            nsucceq: "\u2ab0\u0338",
            nsup: "\u2285",
            nsupE: "\u2ac6\u0338",
            nsupe: "\u2289",
            nsupset: "\u2283\u20d2",
            nsupseteq: "\u2289",
            nsupseteqq: "\u2ac6\u0338",
            ntgl: "\u2279",
            Ntilde: "\xd1",
            ntilde: "\xf1",
            ntlg: "\u2278",
            ntriangleleft: "\u22ea",
            ntrianglelefteq: "\u22ec",
            ntriangleright: "\u22eb",
            ntrianglerighteq: "\u22ed",
            Nu: "\u039d",
            nu: "\u03bd",
            num: "#",
            numero: "\u2116",
            numsp: "\u2007",
            nvap: "\u224d\u20d2",
            nVDash: "\u22af",
            nVdash: "\u22ae",
            nvDash: "\u22ad",
            nvdash: "\u22ac",
            nvge: "\u2265\u20d2",
            nvgt: ">\u20d2",
            nvHarr: "\u2904",
            nvinfin: "\u29de",
            nvlArr: "\u2902",
            nvle: "\u2264\u20d2",
            nvlt: "<\u20d2",
            nvltrie: "\u22b4\u20d2",
            nvrArr: "\u2903",
            nvrtrie: "\u22b5\u20d2",
            nvsim: "\u223c\u20d2",
            nwarhk: "\u2923",
            nwArr: "\u21d6",
            nwarr: "\u2196",
            nwarrow: "\u2196",
            nwnear: "\u2927",
            Oacute: "\xd3",
            oacute: "\xf3",
            oast: "\u229b",
            ocir: "\u229a",
            Ocirc: "\xd4",
            ocirc: "\xf4",
            Ocy: "\u041e",
            ocy: "\u043e",
            odash: "\u229d",
            Odblac: "\u0150",
            odblac: "\u0151",
            odiv: "\u2a38",
            odot: "\u2299",
            odsold: "\u29bc",
            OElig: "\u0152",
            oelig: "\u0153",
            ofcir: "\u29bf",
            Ofr: "\ud835\udd12",
            ofr: "\ud835\udd2c",
            ogon: "\u02db",
            Ograve: "\xd2",
            ograve: "\xf2",
            ogt: "\u29c1",
            ohbar: "\u29b5",
            ohm: "\u03a9",
            oint: "\u222e",
            olarr: "\u21ba",
            olcir: "\u29be",
            olcross: "\u29bb",
            oline: "\u203e",
            olt: "\u29c0",
            Omacr: "\u014c",
            omacr: "\u014d",
            Omega: "\u03a9",
            omega: "\u03c9",
            Omicron: "\u039f",
            omicron: "\u03bf",
            omid: "\u29b6",
            ominus: "\u2296",
            Oopf: "\ud835\udd46",
            oopf: "\ud835\udd60",
            opar: "\u29b7",
            OpenCurlyDoubleQuote: "\u201c",
            OpenCurlyQuote: "\u2018",
            operp: "\u29b9",
            oplus: "\u2295",
            Or: "\u2a54",
            or: "\u2228",
            orarr: "\u21bb",
            ord: "\u2a5d",
            order: "\u2134",
            orderof: "\u2134",
            ordf: "\xaa",
            ordm: "\xba",
            origof: "\u22b6",
            oror: "\u2a56",
            orslope: "\u2a57",
            orv: "\u2a5b",
            oS: "\u24c8",
            Oscr: "\ud835\udcaa",
            oscr: "\u2134",
            Oslash: "\xd8",
            oslash: "\xf8",
            osol: "\u2298",
            Otilde: "\xd5",
            otilde: "\xf5",
            Otimes: "\u2a37",
            otimes: "\u2297",
            otimesas: "\u2a36",
            Ouml: "\xd6",
            ouml: "\xf6",
            ovbar: "\u233d",
            OverBar: "\u203e",
            OverBrace: "\u23de",
            OverBracket: "\u23b4",
            OverParenthesis: "\u23dc",
            par: "\u2225",
            para: "\xb6",
            parallel: "\u2225",
            parsim: "\u2af3",
            parsl: "\u2afd",
            part: "\u2202",
            PartialD: "\u2202",
            Pcy: "\u041f",
            pcy: "\u043f",
            percnt: "%",
            period: ".",
            permil: "\u2030",
            perp: "\u22a5",
            pertenk: "\u2031",
            Pfr: "\ud835\udd13",
            pfr: "\ud835\udd2d",
            Phi: "\u03a6",
            phi: "\u03c6",
            phiv: "\u03d5",
            phmmat: "\u2133",
            phone: "\u260e",
            Pi: "\u03a0",
            pi: "\u03c0",
            pitchfork: "\u22d4",
            piv: "\u03d6",
            planck: "\u210f",
            planckh: "\u210e",
            plankv: "\u210f",
            plus: "+",
            plusacir: "\u2a23",
            plusb: "\u229e",
            pluscir: "\u2a22",
            plusdo: "\u2214",
            plusdu: "\u2a25",
            pluse: "\u2a72",
            PlusMinus: "\xb1",
            plusmn: "\xb1",
            plussim: "\u2a26",
            plustwo: "\u2a27",
            pm: "\xb1",
            Poincareplane: "\u210c",
            pointint: "\u2a15",
            Popf: "\u2119",
            popf: "\ud835\udd61",
            pound: "\xa3",
            Pr: "\u2abb",
            pr: "\u227a",
            prap: "\u2ab7",
            prcue: "\u227c",
            prE: "\u2ab3",
            pre: "\u2aaf",
            prec: "\u227a",
            precapprox: "\u2ab7",
            preccurlyeq: "\u227c",
            Precedes: "\u227a",
            PrecedesEqual: "\u2aaf",
            PrecedesSlantEqual: "\u227c",
            PrecedesTilde: "\u227e",
            preceq: "\u2aaf",
            precnapprox: "\u2ab9",
            precneqq: "\u2ab5",
            precnsim: "\u22e8",
            precsim: "\u227e",
            Prime: "\u2033",
            prime: "\u2032",
            primes: "\u2119",
            prnap: "\u2ab9",
            prnE: "\u2ab5",
            prnsim: "\u22e8",
            prod: "\u220f",
            Product: "\u220f",
            profalar: "\u232e",
            profline: "\u2312",
            profsurf: "\u2313",
            prop: "\u221d",
            Proportion: "\u2237",
            Proportional: "\u221d",
            propto: "\u221d",
            prsim: "\u227e",
            prurel: "\u22b0",
            Pscr: "\ud835\udcab",
            pscr: "\ud835\udcc5",
            Psi: "\u03a8",
            psi: "\u03c8",
            puncsp: "\u2008",
            Qfr: "\ud835\udd14",
            qfr: "\ud835\udd2e",
            qint: "\u2a0c",
            Qopf: "\u211a",
            qopf: "\ud835\udd62",
            qprime: "\u2057",
            Qscr: "\ud835\udcac",
            qscr: "\ud835\udcc6",
            quaternions: "\u210d",
            quatint: "\u2a16",
            quest: "?",
            questeq: "\u225f",
            QUOT: '"',
            quot: '"',
            rAarr: "\u21db",
            race: "\u223d\u0331",
            Racute: "\u0154",
            racute: "\u0155",
            radic: "\u221a",
            raemptyv: "\u29b3",
            Rang: "\u27eb",
            rang: "\u27e9",
            rangd: "\u2992",
            range: "\u29a5",
            rangle: "\u27e9",
            raquo: "\xbb",
            Rarr: "\u21a0",
            rArr: "\u21d2",
            rarr: "\u2192",
            rarrap: "\u2975",
            rarrb: "\u21e5",
            rarrbfs: "\u2920",
            rarrc: "\u2933",
            rarrfs: "\u291e",
            rarrhk: "\u21aa",
            rarrlp: "\u21ac",
            rarrpl: "\u2945",
            rarrsim: "\u2974",
            Rarrtl: "\u2916",
            rarrtl: "\u21a3",
            rarrw: "\u219d",
            rAtail: "\u291c",
            ratail: "\u291a",
            ratio: "\u2236",
            rationals: "\u211a",
            RBarr: "\u2910",
            rBarr: "\u290f",
            rbarr: "\u290d",
            rbbrk: "\u2773",
            rbrace: "}",
            rbrack: "]",
            rbrke: "\u298c",
            rbrksld: "\u298e",
            rbrkslu: "\u2990",
            Rcaron: "\u0158",
            rcaron: "\u0159",
            Rcedil: "\u0156",
            rcedil: "\u0157",
            rceil: "\u2309",
            rcub: "}",
            Rcy: "\u0420",
            rcy: "\u0440",
            rdca: "\u2937",
            rdldhar: "\u2969",
            rdquo: "\u201d",
            rdquor: "\u201d",
            rdsh: "\u21b3",
            Re: "\u211c",
            real: "\u211c",
            realine: "\u211b",
            realpart: "\u211c",
            reals: "\u211d",
            rect: "\u25ad",
            REG: "\xae",
            reg: "\xae",
            ReverseElement: "\u220b",
            ReverseEquilibrium: "\u21cb",
            ReverseUpEquilibrium: "\u296f",
            rfisht: "\u297d",
            rfloor: "\u230b",
            Rfr: "\u211c",
            rfr: "\ud835\udd2f",
            rHar: "\u2964",
            rhard: "\u21c1",
            rharu: "\u21c0",
            rharul: "\u296c",
            Rho: "\u03a1",
            rho: "\u03c1",
            rhov: "\u03f1",
            RightAngleBracket: "\u27e9",
            RightArrow: "\u2192",
            Rightarrow: "\u21d2",
            rightarrow: "\u2192",
            RightArrowBar: "\u21e5",
            RightArrowLeftArrow: "\u21c4",
            rightarrowtail: "\u21a3",
            RightCeiling: "\u2309",
            RightDoubleBracket: "\u27e7",
            RightDownTeeVector: "\u295d",
            RightDownVector: "\u21c2",
            RightDownVectorBar: "\u2955",
            RightFloor: "\u230b",
            rightharpoondown: "\u21c1",
            rightharpoonup: "\u21c0",
            rightleftarrows: "\u21c4",
            rightleftharpoons: "\u21cc",
            rightrightarrows: "\u21c9",
            rightsquigarrow: "\u219d",
            RightTee: "\u22a2",
            RightTeeArrow: "\u21a6",
            RightTeeVector: "\u295b",
            rightthreetimes: "\u22cc",
            RightTriangle: "\u22b3",
            RightTriangleBar: "\u29d0",
            RightTriangleEqual: "\u22b5",
            RightUpDownVector: "\u294f",
            RightUpTeeVector: "\u295c",
            RightUpVector: "\u21be",
            RightUpVectorBar: "\u2954",
            RightVector: "\u21c0",
            RightVectorBar: "\u2953",
            ring: "\u02da",
            risingdotseq: "\u2253",
            rlarr: "\u21c4",
            rlhar: "\u21cc",
            rlm: "\u200f",
            rmoust: "\u23b1",
            rmoustache: "\u23b1",
            rnmid: "\u2aee",
            roang: "\u27ed",
            roarr: "\u21fe",
            robrk: "\u27e7",
            ropar: "\u2986",
            Ropf: "\u211d",
            ropf: "\ud835\udd63",
            roplus: "\u2a2e",
            rotimes: "\u2a35",
            RoundImplies: "\u2970",
            rpar: ")",
            rpargt: "\u2994",
            rppolint: "\u2a12",
            rrarr: "\u21c9",
            Rrightarrow: "\u21db",
            rsaquo: "\u203a",
            Rscr: "\u211b",
            rscr: "\ud835\udcc7",
            Rsh: "\u21b1",
            rsh: "\u21b1",
            rsqb: "]",
            rsquo: "\u2019",
            rsquor: "\u2019",
            rthree: "\u22cc",
            rtimes: "\u22ca",
            rtri: "\u25b9",
            rtrie: "\u22b5",
            rtrif: "\u25b8",
            rtriltri: "\u29ce",
            RuleDelayed: "\u29f4",
            ruluhar: "\u2968",
            rx: "\u211e",
            Sacute: "\u015a",
            sacute: "\u015b",
            sbquo: "\u201a",
            Sc: "\u2abc",
            sc: "\u227b",
            scap: "\u2ab8",
            Scaron: "\u0160",
            scaron: "\u0161",
            sccue: "\u227d",
            scE: "\u2ab4",
            sce: "\u2ab0",
            Scedil: "\u015e",
            scedil: "\u015f",
            Scirc: "\u015c",
            scirc: "\u015d",
            scnap: "\u2aba",
            scnE: "\u2ab6",
            scnsim: "\u22e9",
            scpolint: "\u2a13",
            scsim: "\u227f",
            Scy: "\u0421",
            scy: "\u0441",
            sdot: "\u22c5",
            sdotb: "\u22a1",
            sdote: "\u2a66",
            searhk: "\u2925",
            seArr: "\u21d8",
            searr: "\u2198",
            searrow: "\u2198",
            sect: "\xa7",
            semi: ";",
            seswar: "\u2929",
            setminus: "\u2216",
            setmn: "\u2216",
            sext: "\u2736",
            Sfr: "\ud835\udd16",
            sfr: "\ud835\udd30",
            sfrown: "\u2322",
            sharp: "\u266f",
            SHCHcy: "\u0429",
            shchcy: "\u0449",
            SHcy: "\u0428",
            shcy: "\u0448",
            ShortDownArrow: "\u2193",
            ShortLeftArrow: "\u2190",
            shortmid: "\u2223",
            shortparallel: "\u2225",
            ShortRightArrow: "\u2192",
            ShortUpArrow: "\u2191",
            shy: "\xad",
            Sigma: "\u03a3",
            sigma: "\u03c3",
            sigmaf: "\u03c2",
            sigmav: "\u03c2",
            sim: "\u223c",
            simdot: "\u2a6a",
            sime: "\u2243",
            simeq: "\u2243",
            simg: "\u2a9e",
            simgE: "\u2aa0",
            siml: "\u2a9d",
            simlE: "\u2a9f",
            simne: "\u2246",
            simplus: "\u2a24",
            simrarr: "\u2972",
            slarr: "\u2190",
            SmallCircle: "\u2218",
            smallsetminus: "\u2216",
            smashp: "\u2a33",
            smeparsl: "\u29e4",
            smid: "\u2223",
            smile: "\u2323",
            smt: "\u2aaa",
            smte: "\u2aac",
            smtes: "\u2aac\ufe00",
            SOFTcy: "\u042c",
            softcy: "\u044c",
            sol: "/",
            solb: "\u29c4",
            solbar: "\u233f",
            Sopf: "\ud835\udd4a",
            sopf: "\ud835\udd64",
            spades: "\u2660",
            spadesuit: "\u2660",
            spar: "\u2225",
            sqcap: "\u2293",
            sqcaps: "\u2293\ufe00",
            sqcup: "\u2294",
            sqcups: "\u2294\ufe00",
            Sqrt: "\u221a",
            sqsub: "\u228f",
            sqsube: "\u2291",
            sqsubset: "\u228f",
            sqsubseteq: "\u2291",
            sqsup: "\u2290",
            sqsupe: "\u2292",
            sqsupset: "\u2290",
            sqsupseteq: "\u2292",
            squ: "\u25a1",
            Square: "\u25a1",
            square: "\u25a1",
            SquareIntersection: "\u2293",
            SquareSubset: "\u228f",
            SquareSubsetEqual: "\u2291",
            SquareSuperset: "\u2290",
            SquareSupersetEqual: "\u2292",
            SquareUnion: "\u2294",
            squarf: "\u25aa",
            squf: "\u25aa",
            srarr: "\u2192",
            Sscr: "\ud835\udcae",
            sscr: "\ud835\udcc8",
            ssetmn: "\u2216",
            ssmile: "\u2323",
            sstarf: "\u22c6",
            Star: "\u22c6",
            star: "\u2606",
            starf: "\u2605",
            straightepsilon: "\u03f5",
            straightphi: "\u03d5",
            strns: "\xaf",
            Sub: "\u22d0",
            sub: "\u2282",
            subdot: "\u2abd",
            subE: "\u2ac5",
            sube: "\u2286",
            subedot: "\u2ac3",
            submult: "\u2ac1",
            subnE: "\u2acb",
            subne: "\u228a",
            subplus: "\u2abf",
            subrarr: "\u2979",
            Subset: "\u22d0",
            subset: "\u2282",
            subseteq: "\u2286",
            subseteqq: "\u2ac5",
            SubsetEqual: "\u2286",
            subsetneq: "\u228a",
            subsetneqq: "\u2acb",
            subsim: "\u2ac7",
            subsub: "\u2ad5",
            subsup: "\u2ad3",
            succ: "\u227b",
            succapprox: "\u2ab8",
            succcurlyeq: "\u227d",
            Succeeds: "\u227b",
            SucceedsEqual: "\u2ab0",
            SucceedsSlantEqual: "\u227d",
            SucceedsTilde: "\u227f",
            succeq: "\u2ab0",
            succnapprox: "\u2aba",
            succneqq: "\u2ab6",
            succnsim: "\u22e9",
            succsim: "\u227f",
            SuchThat: "\u220b",
            Sum: "\u2211",
            sum: "\u2211",
            sung: "\u266a",
            Sup: "\u22d1",
            sup: "\u2283",
            sup1: "\xb9",
            sup2: "\xb2",
            sup3: "\xb3",
            supdot: "\u2abe",
            supdsub: "\u2ad8",
            supE: "\u2ac6",
            supe: "\u2287",
            supedot: "\u2ac4",
            Superset: "\u2283",
            SupersetEqual: "\u2287",
            suphsol: "\u27c9",
            suphsub: "\u2ad7",
            suplarr: "\u297b",
            supmult: "\u2ac2",
            supnE: "\u2acc",
            supne: "\u228b",
            supplus: "\u2ac0",
            Supset: "\u22d1",
            supset: "\u2283",
            supseteq: "\u2287",
            supseteqq: "\u2ac6",
            supsetneq: "\u228b",
            supsetneqq: "\u2acc",
            supsim: "\u2ac8",
            supsub: "\u2ad4",
            supsup: "\u2ad6",
            swarhk: "\u2926",
            swArr: "\u21d9",
            swarr: "\u2199",
            swarrow: "\u2199",
            swnwar: "\u292a",
            szlig: "\xdf",
            Tab: "\t",
            target: "\u2316",
            Tau: "\u03a4",
            tau: "\u03c4",
            tbrk: "\u23b4",
            Tcaron: "\u0164",
            tcaron: "\u0165",
            Tcedil: "\u0162",
            tcedil: "\u0163",
            Tcy: "\u0422",
            tcy: "\u0442",
            tdot: "\u20db",
            telrec: "\u2315",
            Tfr: "\ud835\udd17",
            tfr: "\ud835\udd31",
            there4: "\u2234",
            Therefore: "\u2234",
            therefore: "\u2234",
            Theta: "\u0398",
            theta: "\u03b8",
            thetasym: "\u03d1",
            thetav: "\u03d1",
            thickapprox: "\u2248",
            thicksim: "\u223c",
            ThickSpace: "\u205f\u200a",
            thinsp: "\u2009",
            ThinSpace: "\u2009",
            thkap: "\u2248",
            thksim: "\u223c",
            THORN: "\xde",
            thorn: "\xfe",
            Tilde: "\u223c",
            tilde: "\u02dc",
            TildeEqual: "\u2243",
            TildeFullEqual: "\u2245",
            TildeTilde: "\u2248",
            times: "\xd7",
            timesb: "\u22a0",
            timesbar: "\u2a31",
            timesd: "\u2a30",
            tint: "\u222d",
            toea: "\u2928",
            top: "\u22a4",
            topbot: "\u2336",
            topcir: "\u2af1",
            Topf: "\ud835\udd4b",
            topf: "\ud835\udd65",
            topfork: "\u2ada",
            tosa: "\u2929",
            tprime: "\u2034",
            TRADE: "\u2122",
            trade: "\u2122",
            triangle: "\u25b5",
            triangledown: "\u25bf",
            triangleleft: "\u25c3",
            trianglelefteq: "\u22b4",
            triangleq: "\u225c",
            triangleright: "\u25b9",
            trianglerighteq: "\u22b5",
            tridot: "\u25ec",
            trie: "\u225c",
            triminus: "\u2a3a",
            TripleDot: "\u20db",
            triplus: "\u2a39",
            trisb: "\u29cd",
            tritime: "\u2a3b",
            trpezium: "\u23e2",
            Tscr: "\ud835\udcaf",
            tscr: "\ud835\udcc9",
            TScy: "\u0426",
            tscy: "\u0446",
            TSHcy: "\u040b",
            tshcy: "\u045b",
            Tstrok: "\u0166",
            tstrok: "\u0167",
            twixt: "\u226c",
            twoheadleftarrow: "\u219e",
            twoheadrightarrow: "\u21a0",
            Uacute: "\xda",
            uacute: "\xfa",
            Uarr: "\u219f",
            uArr: "\u21d1",
            uarr: "\u2191",
            Uarrocir: "\u2949",
            Ubrcy: "\u040e",
            ubrcy: "\u045e",
            Ubreve: "\u016c",
            ubreve: "\u016d",
            Ucirc: "\xdb",
            ucirc: "\xfb",
            Ucy: "\u0423",
            ucy: "\u0443",
            udarr: "\u21c5",
            Udblac: "\u0170",
            udblac: "\u0171",
            udhar: "\u296e",
            ufisht: "\u297e",
            Ufr: "\ud835\udd18",
            ufr: "\ud835\udd32",
            Ugrave: "\xd9",
            ugrave: "\xf9",
            uHar: "\u2963",
            uharl: "\u21bf",
            uharr: "\u21be",
            uhblk: "\u2580",
            ulcorn: "\u231c",
            ulcorner: "\u231c",
            ulcrop: "\u230f",
            ultri: "\u25f8",
            Umacr: "\u016a",
            umacr: "\u016b",
            uml: "\xa8",
            UnderBar: "_",
            UnderBrace: "\u23df",
            UnderBracket: "\u23b5",
            UnderParenthesis: "\u23dd",
            Union: "\u22c3",
            UnionPlus: "\u228e",
            Uogon: "\u0172",
            uogon: "\u0173",
            Uopf: "\ud835\udd4c",
            uopf: "\ud835\udd66",
            UpArrow: "\u2191",
            Uparrow: "\u21d1",
            uparrow: "\u2191",
            UpArrowBar: "\u2912",
            UpArrowDownArrow: "\u21c5",
            UpDownArrow: "\u2195",
            Updownarrow: "\u21d5",
            updownarrow: "\u2195",
            UpEquilibrium: "\u296e",
            upharpoonleft: "\u21bf",
            upharpoonright: "\u21be",
            uplus: "\u228e",
            UpperLeftArrow: "\u2196",
            UpperRightArrow: "\u2197",
            Upsi: "\u03d2",
            upsi: "\u03c5",
            upsih: "\u03d2",
            Upsilon: "\u03a5",
            upsilon: "\u03c5",
            UpTee: "\u22a5",
            UpTeeArrow: "\u21a5",
            upuparrows: "\u21c8",
            urcorn: "\u231d",
            urcorner: "\u231d",
            urcrop: "\u230e",
            Uring: "\u016e",
            uring: "\u016f",
            urtri: "\u25f9",
            Uscr: "\ud835\udcb0",
            uscr: "\ud835\udcca",
            utdot: "\u22f0",
            Utilde: "\u0168",
            utilde: "\u0169",
            utri: "\u25b5",
            utrif: "\u25b4",
            uuarr: "\u21c8",
            Uuml: "\xdc",
            uuml: "\xfc",
            uwangle: "\u29a7",
            vangrt: "\u299c",
            varepsilon: "\u03f5",
            varkappa: "\u03f0",
            varnothing: "\u2205",
            varphi: "\u03d5",
            varpi: "\u03d6",
            varpropto: "\u221d",
            vArr: "\u21d5",
            varr: "\u2195",
            varrho: "\u03f1",
            varsigma: "\u03c2",
            varsubsetneq: "\u228a\ufe00",
            varsubsetneqq: "\u2acb\ufe00",
            varsupsetneq: "\u228b\ufe00",
            varsupsetneqq: "\u2acc\ufe00",
            vartheta: "\u03d1",
            vartriangleleft: "\u22b2",
            vartriangleright: "\u22b3",
            Vbar: "\u2aeb",
            vBar: "\u2ae8",
            vBarv: "\u2ae9",
            Vcy: "\u0412",
            vcy: "\u0432",
            VDash: "\u22ab",
            Vdash: "\u22a9",
            vDash: "\u22a8",
            vdash: "\u22a2",
            Vdashl: "\u2ae6",
            Vee: "\u22c1",
            vee: "\u2228",
            veebar: "\u22bb",
            veeeq: "\u225a",
            vellip: "\u22ee",
            Verbar: "\u2016",
            verbar: "|",
            Vert: "\u2016",
            vert: "|",
            VerticalBar: "\u2223",
            VerticalLine: "|",
            VerticalSeparator: "\u2758",
            VerticalTilde: "\u2240",
            VeryThinSpace: "\u200a",
            Vfr: "\ud835\udd19",
            vfr: "\ud835\udd33",
            vltri: "\u22b2",
            vnsub: "\u2282\u20d2",
            vnsup: "\u2283\u20d2",
            Vopf: "\ud835\udd4d",
            vopf: "\ud835\udd67",
            vprop: "\u221d",
            vrtri: "\u22b3",
            Vscr: "\ud835\udcb1",
            vscr: "\ud835\udccb",
            vsubnE: "\u2acb\ufe00",
            vsubne: "\u228a\ufe00",
            vsupnE: "\u2acc\ufe00",
            vsupne: "\u228b\ufe00",
            Vvdash: "\u22aa",
            vzigzag: "\u299a",
            Wcirc: "\u0174",
            wcirc: "\u0175",
            wedbar: "\u2a5f",
            Wedge: "\u22c0",
            wedge: "\u2227",
            wedgeq: "\u2259",
            weierp: "\u2118",
            Wfr: "\ud835\udd1a",
            wfr: "\ud835\udd34",
            Wopf: "\ud835\udd4e",
            wopf: "\ud835\udd68",
            wp: "\u2118",
            wr: "\u2240",
            wreath: "\u2240",
            Wscr: "\ud835\udcb2",
            wscr: "\ud835\udccc",
            xcap: "\u22c2",
            xcirc: "\u25ef",
            xcup: "\u22c3",
            xdtri: "\u25bd",
            Xfr: "\ud835\udd1b",
            xfr: "\ud835\udd35",
            xhArr: "\u27fa",
            xharr: "\u27f7",
            Xi: "\u039e",
            xi: "\u03be",
            xlArr: "\u27f8",
            xlarr: "\u27f5",
            xmap: "\u27fc",
            xnis: "\u22fb",
            xodot: "\u2a00",
            Xopf: "\ud835\udd4f",
            xopf: "\ud835\udd69",
            xoplus: "\u2a01",
            xotime: "\u2a02",
            xrArr: "\u27f9",
            xrarr: "\u27f6",
            Xscr: "\ud835\udcb3",
            xscr: "\ud835\udccd",
            xsqcup: "\u2a06",
            xuplus: "\u2a04",
            xutri: "\u25b3",
            xvee: "\u22c1",
            xwedge: "\u22c0",
            Yacute: "\xdd",
            yacute: "\xfd",
            YAcy: "\u042f",
            yacy: "\u044f",
            Ycirc: "\u0176",
            ycirc: "\u0177",
            Ycy: "\u042b",
            ycy: "\u044b",
            yen: "\xa5",
            Yfr: "\ud835\udd1c",
            yfr: "\ud835\udd36",
            YIcy: "\u0407",
            yicy: "\u0457",
            Yopf: "\ud835\udd50",
            yopf: "\ud835\udd6a",
            Yscr: "\ud835\udcb4",
            yscr: "\ud835\udcce",
            YUcy: "\u042e",
            yucy: "\u044e",
            Yuml: "\u0178",
            yuml: "\xff",
            Zacute: "\u0179",
            zacute: "\u017a",
            Zcaron: "\u017d",
            zcaron: "\u017e",
            Zcy: "\u0417",
            zcy: "\u0437",
            Zdot: "\u017b",
            zdot: "\u017c",
            zeetrf: "\u2128",
            ZeroWidthSpace: "\u200b",
            Zeta: "\u0396",
            zeta: "\u03b6",
            Zfr: "\u2128",
            zfr: "\ud835\udd37",
            ZHcy: "\u0416",
            zhcy: "\u0436",
            zigrarr: "\u21dd",
            Zopf: "\u2124",
            zopf: "\ud835\udd6b",
            Zscr: "\ud835\udcb5",
            zscr: "\ud835\udccf",
            zwj: "\u200d",
            zwnj: "\u200c"
        }),
        e.entityMap = e.HTML_ENTITIES
    },
    3969: function(t, e, r) {
        var n = r(1146);
        n.DOMImplementation,
        n.XMLSerializer,
        e.DOMParser = r(6129).DOMParser
    },
    6925: function(t, e, r) {
        var n = r(2167).NAMESPACE
          , i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
          , a = new RegExp("[\\-\\.0-9" + i.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]")
          , o = new RegExp("^" + i.source + a.source + "*(?::" + i.source + a.source + "*)?$");
        function s(t, e) {
            this.message = t,
            this.locator = e,
            Error.captureStackTrace && Error.captureStackTrace(this, s)
        }
        function u() {}
        function c(t, e) {
            return e.lineNumber = t.lineNumber,
            e.columnNumber = t.columnNumber,
            e
        }
        function l(t, e, r, i, a, o) {
            function s(t, e, n) {
                r.attributeNames.hasOwnProperty(t) && o.fatalError("Attribute " + t + " redefined"),
                r.addValue(t, e.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, a), n)
            }
            for (var u, c = ++e, l = 0; ; ) {
                var f = t.charAt(c);
                switch (f) {
                case "=":
                    if (1 === l)
                        u = t.slice(e, c),
                        l = 3;
                    else {
                        if (2 !== l)
                            throw new Error("attribute equal must after attrName");
                        l = 3
                    }
                    break;
                case "'":
                case '"':
                    if (3 === l || 1 === l) {
                        if (1 === l && (o.warning('attribute value must after "="'),
                        u = t.slice(e, c)),
                        e = c + 1,
                        !((c = t.indexOf(f, e)) > 0))
                            throw new Error("attribute value no end '" + f + "' match");
                        s(u, h = t.slice(e, c), e - 1),
                        l = 5
                    } else {
                        if (4 != l)
                            throw new Error('attribute value must after "="');
                        s(u, h = t.slice(e, c), e),
                        o.warning('attribute "' + u + '" missed start quot(' + f + ")!!"),
                        e = c + 1,
                        l = 5
                    }
                    break;
                case "/":
                    switch (l) {
                    case 0:
                        r.setTagName(t.slice(e, c));
                    case 5:
                    case 6:
                    case 7:
                        l = 7,
                        r.closed = !0;
                    case 4:
                    case 1:
                        break;
                    case 2:
                        r.closed = !0;
                        break;
                    default:
                        throw new Error("attribute invalid close char('/')")
                    }
                    break;
                case "":
                    return o.error("unexpected end of input"),
                    0 == l && r.setTagName(t.slice(e, c)),
                    c;
                case ">":
                    switch (l) {
                    case 0:
                        r.setTagName(t.slice(e, c));
                    case 5:
                    case 6:
                    case 7:
                        break;
                    case 4:
                    case 1:
                        "/" === (h = t.slice(e, c)).slice(-1) && (r.closed = !0,
                        h = h.slice(0, -1));
                    case 2:
                        2 === l && (h = u),
                        4 == l ? (o.warning('attribute "' + h + '" missed quot(")!'),
                        s(u, h, e)) : (n.isHTML(i[""]) && h.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + h + '" missed value!! "' + h + '" instead!!'),
                        s(h, h, e));
                        break;
                    case 3:
                        throw new Error("attribute value missed!!")
                    }
                    return c;
                case "\x80":
                    f = " ";
                default:
                    if (f <= " ")
                        switch (l) {
                        case 0:
                            r.setTagName(t.slice(e, c)),
                            l = 6;
                            break;
                        case 1:
                            u = t.slice(e, c),
                            l = 2;
                            break;
                        case 4:
                            var h = t.slice(e, c);
                            o.warning('attribute "' + h + '" missed quot(")!!'),
                            s(u, h, e);
                        case 5:
                            l = 6
                        }
                    else
                        switch (l) {
                        case 2:
                            r.tagName;
                            n.isHTML(i[""]) && u.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + u + '" missed value!! "' + u + '" instead2!!'),
                            s(u, u, e),
                            e = c,
                            l = 1;
                            break;
                        case 5:
                            o.warning('attribute space is required"' + u + '"!!');
                        case 6:
                            l = 1,
                            e = c;
                            break;
                        case 3:
                            l = 4,
                            e = c;
                            break;
                        case 7:
                            throw new Error("elements closed character '/' and '>' must be connected to")
                        }
                }
                c++
            }
        }
        function f(t, e, r) {
            for (var i = t.tagName, a = null, o = t.length; o--; ) {
                var s = t[o]
                  , u = s.qName
                  , c = s.value;
                if ((p = u.indexOf(":")) > 0)
                    var l = s.prefix = u.slice(0, p)
                      , f = u.slice(p + 1)
                      , h = "xmlns" === l && f;
                else
                    f = u,
                    l = null,
                    h = "xmlns" === u && "";
                s.localName = f,
                !1 !== h && (null == a && (a = {},
                d(r, r = {})),
                r[h] = a[h] = c,
                s.uri = n.XMLNS,
                e.startPrefixMapping(h, c))
            }
            for (o = t.length; o--; ) {
                (l = (s = t[o]).prefix) && ("xml" === l && (s.uri = n.XML),
                "xmlns" !== l && (s.uri = r[l || ""]))
            }
            var p;
            (p = i.indexOf(":")) > 0 ? (l = t.prefix = i.slice(0, p),
            f = t.localName = i.slice(p + 1)) : (l = null,
            f = t.localName = i);
            var g = t.uri = r[l || ""];
            if (e.startElement(g, f, i, t),
            !t.closed)
                return t.currentNSMap = r,
                t.localNSMap = a,
                !0;
            if (e.endElement(g, f, i),
            a)
                for (l in a)
                    Object.prototype.hasOwnProperty.call(a, l) && e.endPrefixMapping(l)
        }
        function h(t, e, r, n, i) {
            if (/^(?:script|textarea)$/i.test(r)) {
                var a = t.indexOf("</" + r + ">", e)
                  , o = t.substring(e + 1, a);
                if (/[&<]/.test(o))
                    return /^script$/i.test(r) ? (i.characters(o, 0, o.length),
                    a) : (o = o.replace(/&#?\w+;/g, n),
                    i.characters(o, 0, o.length),
                    a)
            }
            return e + 1
        }
        function p(t, e, r, n) {
            var i = n[r];
            return null == i && ((i = t.lastIndexOf("</" + r + ">")) < e && (i = t.lastIndexOf("</" + r)),
            n[r] = i),
            i < e
        }
        function d(t, e) {
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }
        function g(t, e, r, n) {
            switch (t.charAt(e + 2)) {
            case "-":
                return "-" === t.charAt(e + 3) ? (i = t.indexOf("--\x3e", e + 4)) > e ? (r.comment(t, e + 4, i - e - 4),
                i + 3) : (n.error("Unclosed comment"),
                -1) : -1;
            default:
                if ("CDATA[" == t.substr(e + 3, 6)) {
                    var i = t.indexOf("]]>", e + 9);
                    return r.startCDATA(),
                    r.characters(t, e + 9, i - e - 9),
                    r.endCDATA(),
                    i + 3
                }
                var a = function(t, e) {
                    var r, n = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                    i.lastIndex = e,
                    i.exec(t);
                    for (; r = i.exec(t); )
                        if (n.push(r),
                        r[1])
                            return n
                }(t, e)
                  , o = a.length;
                if (o > 1 && /!doctype/i.test(a[0][0])) {
                    var s = a[1][0]
                      , u = !1
                      , c = !1;
                    o > 3 && (/^public$/i.test(a[2][0]) ? (u = a[3][0],
                    c = o > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (c = a[3][0]));
                    var l = a[o - 1];
                    return r.startDTD(s, u, c),
                    r.endDTD(),
                    l.index + l[0].length
                }
            }
            return -1
        }
        function m(t, e, r) {
            var n = t.indexOf("?>", e);
            if (n) {
                var i = t.substring(e, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                if (i) {
                    i[0].length;
                    return r.processingInstruction(i[1], i[2]),
                    n + 2
                }
                return -1
            }
            return -1
        }
        function b() {
            this.attributeNames = {}
        }
        s.prototype = new Error,
        s.prototype.name = s.name,
        u.prototype = {
            parse: function(t, e, r) {
                var i = this.domBuilder;
                i.startDocument(),
                d(e, e = {}),
                function(t, e, r, i, a) {
                    function o(t) {
                        if (t > 65535) {
                            var e = 55296 + ((t -= 65536) >> 10)
                              , r = 56320 + (1023 & t);
                            return String.fromCharCode(e, r)
                        }
                        return String.fromCharCode(t)
                    }
                    function u(t) {
                        var e = t.slice(1, -1);
                        return Object.hasOwnProperty.call(r, e) ? r[e] : "#" === e.charAt(0) ? o(parseInt(e.substr(1).replace("x", "0x"))) : (a.error("entity not found:" + t),
                        t)
                    }
                    function d(e) {
                        if (e > A) {
                            var r = t.substring(A, e).replace(/&#?\w+;/g, u);
                            T && y(A),
                            i.characters(r, 0, e - A),
                            A = e
                        }
                    }
                    function y(e, r) {
                        for (; e >= w && (r = E.exec(t)); )
                            v = r.index,
                            w = v + r[0].length,
                            T.lineNumber++;
                        T.columnNumber = e - v + 1
                    }
                    var v = 0
                      , w = 0
                      , E = /.*(?:\r\n?|\n)|.*$/g
                      , T = i.locator
                      , S = [{
                        currentNSMap: e
                    }]
                      , N = {}
                      , A = 0;
                    for (; ; ) {
                        try {
                            var D = t.indexOf("<", A);
                            if (D < 0) {
                                if (!t.substr(A).match(/^\s*$/)) {
                                    var x = i.doc
                                      , C = x.createTextNode(t.substr(A));
                                    x.appendChild(C),
                                    i.currentElement = C
                                }
                                return
                            }
                            switch (D > A && d(D),
                            t.charAt(D + 1)) {
                            case "/":
                                var R = t.indexOf(">", D + 3)
                                  , O = t.substring(D + 2, R).replace(/[ \t\n\r]+$/g, "")
                                  , I = S.pop();
                                R < 0 ? (O = t.substring(D + 2).replace(/[\s<].*/, ""),
                                a.error("end tag name: " + O + " is not complete:" + I.tagName),
                                R = D + 1 + O.length) : O.match(/\s</) && (O = O.replace(/[\s<].*/, ""),
                                a.error("end tag name: " + O + " maybe not complete"),
                                R = D + 1 + O.length);
                                var L = I.localNSMap
                                  , U = I.tagName == O;
                                if (U || I.tagName && I.tagName.toLowerCase() == O.toLowerCase()) {
                                    if (i.endElement(I.uri, I.localName, O),
                                    L)
                                        for (var M in L)
                                            Object.prototype.hasOwnProperty.call(L, M) && i.endPrefixMapping(M);
                                    U || a.fatalError("end tag name: " + O + " is not match the current start tagName:" + I.tagName)
                                } else
                                    S.push(I);
                                R++;
                                break;
                            case "?":
                                T && y(D),
                                R = m(t, D, i);
                                break;
                            case "!":
                                T && y(D),
                                R = g(t, D, i, a);
                                break;
                            default:
                                T && y(D);
                                var P = new b
                                  , q = S[S.length - 1].currentNSMap
                                  , k = (R = l(t, D, P, q, u, a),
                                P.length);
                                if (!P.closed && p(t, R, P.tagName, N) && (P.closed = !0,
                                r.nbsp || a.warning("unclosed xml attribute")),
                                T && k) {
                                    for (var B = c(T, {}), X = 0; X < k; X++) {
                                        var _ = P[X];
                                        y(_.offset),
                                        _.locator = c(T, {})
                                    }
                                    i.locator = B,
                                    f(P, i, q) && S.push(P),
                                    i.locator = T
                                } else
                                    f(P, i, q) && S.push(P);
                                n.isHTML(P.uri) && !P.closed ? R = h(t, R, P.tagName, u, i) : R++
                            }
                        } catch (G) {
                            if (G instanceof s)
                                throw G;
                            a.error("element parse error: " + G),
                            R = -1
                        }
                        R > A ? A = R : d(Math.max(D, A) + 1)
                    }
                }(t, e, r, i, this.errorHandler),
                i.endDocument()
            }
        },
        b.prototype = {
            setTagName: function(t) {
                if (!o.test(t))
                    throw new Error("invalid tagName:" + t);
                this.tagName = t
            },
            addValue: function(t, e, r) {
                if (!o.test(t))
                    throw new Error("invalid attribute:" + t);
                this.attributeNames[t] = this.length,
                this[this.length++] = {
                    qName: t,
                    value: e,
                    offset: r
                }
            },
            length: 0,
            getLocalName: function(t) {
                return this[t].localName
            },
            getLocator: function(t) {
                return this[t].locator
            },
            getQName: function(t) {
                return this[t].qName
            },
            getURI: function(t) {
                return this[t].uri
            },
            getValue: function(t) {
                return this[t].value
            }
        },
        e.XMLReader = u,
        e.ParseError = s
    },
    9742: function(t, e) {
        "use strict";
        e.byteLength = function(t) {
            var e = u(t)
              , r = e[0]
              , n = e[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        e.toByteArray = function(t) {
            var e, r, a = u(t), o = a[0], s = a[1], c = new i(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, o, s)), l = 0, f = s > 0 ? o - 4 : o;
            for (r = 0; r < f; r += 4)
                e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)],
                c[l++] = e >> 16 & 255,
                c[l++] = e >> 8 & 255,
                c[l++] = 255 & e;
            2 === s && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4,
            c[l++] = 255 & e);
            1 === s && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2,
            c[l++] = e >> 8 & 255,
            c[l++] = 255 & e);
            return c
        }
        ,
        e.fromByteArray = function(t) {
            for (var e, n = t.length, i = n % 3, a = [], o = 16383, s = 0, u = n - i; s < u; s += o)
                a.push(c(t, s, s + o > u ? u : s + o));
            1 === i ? (e = t[n - 1],
            a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
            a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
            return a.join("")
        }
        ;
        for (var r = [], n = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = a.length; o < s; ++o)
            r[o] = a[o],
            n[a.charCodeAt(o)] = o;
        function u(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e),
            [r, r === e ? 0 : 4 - r % 4]
        }
        function c(t, e, n) {
            for (var i, a, o = [], s = e; s < n; s += 3)
                i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
                o.push(r[(a = i) >> 18 & 63] + r[a >> 12 & 63] + r[a >> 6 & 63] + r[63 & a]);
            return o.join("")
        }
        n["-".charCodeAt(0)] = 62,
        n["_".charCodeAt(0)] = 63
    },
    8764: function(t, e, r) {
        "use strict";
        var n = r(9742)
          , i = r(645)
          , a = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        e.Buffer = u,
        e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return u.alloc(+t)
        }
        ,
        e.INSPECT_MAX_BYTES = 50;
        var o = 2147483647;
        function s(t) {
            if (t > o)
                throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var e = new Uint8Array(t);
            return Object.setPrototypeOf(e, u.prototype),
            e
        }
        function u(t, e, r) {
            if ("number" === typeof t) {
                if ("string" === typeof e)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return f(t)
            }
            return c(t, e, r)
        }
        function c(t, e, r) {
            if ("string" === typeof t)
                return function(t, e) {
                    "string" === typeof e && "" !== e || (e = "utf8");
                    if (!u.isEncoding(e))
                        throw new TypeError("Unknown encoding: " + e);
                    var r = 0 | g(t, e)
                      , n = s(r)
                      , i = n.write(t, e);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(t, e);
            if (ArrayBuffer.isView(t))
                return h(t);
            if (null == t)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            if (H(t, ArrayBuffer) || t && H(t.buffer, ArrayBuffer))
                return p(t, e, r);
            if ("undefined" !== typeof SharedArrayBuffer && (H(t, SharedArrayBuffer) || t && H(t.buffer, SharedArrayBuffer)))
                return p(t, e, r);
            if ("number" === typeof t)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t)
                return u.from(n, e, r);
            var i = function(t) {
                if (u.isBuffer(t)) {
                    var e = 0 | d(t.length)
                      , r = s(e);
                    return 0 === r.length || t.copy(r, 0, 0, e),
                    r
                }
                if (void 0 !== t.length)
                    return "number" !== typeof t.length || V(t.length) ? s(0) : h(t);
                if ("Buffer" === t.type && Array.isArray(t.data))
                    return h(t.data)
            }(t);
            if (i)
                return i;
            if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive])
                return u.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
        }
        function l(t) {
            if ("number" !== typeof t)
                throw new TypeError('"size" argument must be of type number');
            if (t < 0)
                throw new RangeError('The value "' + t + '" is invalid for option "size"')
        }
        function f(t) {
            return l(t),
            s(t < 0 ? 0 : 0 | d(t))
        }
        function h(t) {
            for (var e = t.length < 0 ? 0 : 0 | d(t.length), r = s(e), n = 0; n < e; n += 1)
                r[n] = 255 & t[n];
            return r
        }
        function p(t, e, r) {
            if (e < 0 || t.byteLength < e)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            var n;
            return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,e) : new Uint8Array(t,e,r),
            Object.setPrototypeOf(n, u.prototype),
            n
        }
        function d(t) {
            if (t >= o)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
            return 0 | t
        }
        function g(t, e) {
            if (u.isBuffer(t))
                return t.length;
            if (ArrayBuffer.isView(t) || H(t, ArrayBuffer))
                return t.byteLength;
            if ("string" !== typeof t)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
            var r = t.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r)
                return 0;
            for (var i = !1; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return X(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return _(t).length;
                default:
                    if (i)
                        return n ? -1 : X(t).length;
                    e = ("" + e).toLowerCase(),
                    i = !0
                }
        }
        function m(t, e, r) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0),
            e > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (e >>>= 0))
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return I(this, e, r);
                case "utf8":
                case "utf-8":
                    return x(this, e, r);
                case "ascii":
                    return R(this, e, r);
                case "latin1":
                case "binary":
                    return O(this, e, r);
                case "base64":
                    return D(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return L(this, e, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    n = !0
                }
        }
        function b(t, e, r) {
            var n = t[e];
            t[e] = t[r],
            t[r] = n
        }
        function y(t, e, r, n, i) {
            if (0 === t.length)
                return -1;
            if ("string" === typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            V(r = +r) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length) {
                if (i)
                    return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" === typeof e && (e = u.from(e, n)),
            u.isBuffer(e))
                return 0 === e.length ? -1 : v(t, e, r, n, i);
            if ("number" === typeof e)
                return e &= 255,
                "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : v(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function v(t, e, r, n, i) {
            var a, o = 1, s = t.length, u = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                o = 2,
                s /= 2,
                u /= 2,
                r /= 2
            }
            function c(t, e) {
                return 1 === o ? t[e] : t.readUInt16BE(e * o)
            }
            if (i) {
                var l = -1;
                for (a = r; a < s; a++)
                    if (c(t, a) === c(e, -1 === l ? 0 : a - l)) {
                        if (-1 === l && (l = a),
                        a - l + 1 === u)
                            return l * o
                    } else
                        -1 !== l && (a -= a - l),
                        l = -1
            } else
                for (r + u > s && (r = s - u),
                a = r; a >= 0; a--) {
                    for (var f = !0, h = 0; h < u; h++)
                        if (c(t, a + h) !== c(e, h)) {
                            f = !1;
                            break
                        }
                    if (f)
                        return a
                }
            return -1
        }
        function w(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var a = e.length;
            n > a / 2 && (n = a / 2);
            for (var o = 0; o < n; ++o) {
                var s = parseInt(e.substr(2 * o, 2), 16);
                if (V(s))
                    return o;
                t[r + o] = s
            }
            return o
        }
        function E(t, e, r, n) {
            return G(X(e, t.length - r), t, r, n)
        }
        function T(t, e, r, n) {
            return G(function(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, n)
        }
        function S(t, e, r, n) {
            return T(t, e, r, n)
        }
        function N(t, e, r, n) {
            return G(_(e), t, r, n)
        }
        function A(t, e, r, n) {
            return G(function(t, e) {
                for (var r, n, i, a = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
                    n = (r = t.charCodeAt(o)) >> 8,
                    i = r % 256,
                    a.push(i),
                    a.push(n);
                return a
            }(e, t.length - r), t, r, n)
        }
        function D(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
        }
        function x(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r; ) {
                var a, o, s, u, c = t[i], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + f <= r)
                    switch (f) {
                    case 1:
                        c < 128 && (l = c);
                        break;
                    case 2:
                        128 === (192 & (a = t[i + 1])) && (u = (31 & c) << 6 | 63 & a) > 127 && (l = u);
                        break;
                    case 3:
                        a = t[i + 1],
                        o = t[i + 2],
                        128 === (192 & a) && 128 === (192 & o) && (u = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4:
                        a = t[i + 1],
                        o = t[i + 2],
                        s = t[i + 3],
                        128 === (192 & a) && 128 === (192 & o) && 128 === (192 & s) && (u = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                    }
                null === l ? (l = 65533,
                f = 1) : l > 65535 && (l -= 65536,
                n.push(l >>> 10 & 1023 | 55296),
                l = 56320 | 1023 & l),
                n.push(l),
                i += f
            }
            return function(t) {
                var e = t.length;
                if (e <= C)
                    return String.fromCharCode.apply(String, t);
                var r = ""
                  , n = 0;
                for (; n < e; )
                    r += String.fromCharCode.apply(String, t.slice(n, n += C));
                return r
            }(n)
        }
        e.kMaxLength = o,
        u.TYPED_ARRAY_SUPPORT = function() {
            try {
                var t = new Uint8Array(1)
                  , e = {
                    foo: function() {
                        return 42
                    }
                };
                return Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
            } catch (r) {
                return !1
            }
        }(),
        u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this))
                    return this.byteOffset
            }
        }),
        u.poolSize = 8192,
        u.from = function(t, e, r) {
            return c(t, e, r)
        }
        ,
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        u.alloc = function(t, e, r) {
            return function(t, e, r) {
                return l(t),
                t <= 0 ? s(t) : void 0 !== e ? "string" === typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
            }(t, e, r)
        }
        ,
        u.allocUnsafe = function(t) {
            return f(t)
        }
        ,
        u.allocUnsafeSlow = function(t) {
            return f(t)
        }
        ,
        u.isBuffer = function(t) {
            return null != t && !0 === t._isBuffer && t !== u.prototype
        }
        ,
        u.compare = function(t, e) {
            if (H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            H(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t === e)
                return 0;
            for (var r = t.length, n = e.length, i = 0, a = Math.min(r, n); i < a; ++i)
                if (t[i] !== e[i]) {
                    r = t[i],
                    n = e[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        u.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        u.concat = function(t, e) {
            if (!Array.isArray(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
                return u.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0,
                r = 0; r < t.length; ++r)
                    e += t[r].length;
            var n = u.allocUnsafe(e)
              , i = 0;
            for (r = 0; r < t.length; ++r) {
                var a = t[r];
                if (H(a, Uint8Array) && (a = u.from(a)),
                !u.isBuffer(a))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, i),
                i += a.length
            }
            return n
        }
        ,
        u.byteLength = g,
        u.prototype._isBuffer = !0,
        u.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2)
                b(this, e, e + 1);
            return this
        }
        ,
        u.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
                b(this, e, e + 3),
                b(this, e + 1, e + 2);
            return this
        }
        ,
        u.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
                b(this, e, e + 7),
                b(this, e + 1, e + 6),
                b(this, e + 2, e + 5),
                b(this, e + 3, e + 4);
            return this
        }
        ,
        u.prototype.toString = function() {
            var t = this.length;
            return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : m.apply(this, arguments)
        }
        ,
        u.prototype.toLocaleString = u.prototype.toString,
        u.prototype.equals = function(t) {
            if (!u.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t)
        }
        ,
        u.prototype.inspect = function() {
            var t = ""
              , r = e.INSPECT_MAX_BYTES;
            return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
        }
        ,
        a && (u.prototype[a] = u.prototype.inspect),
        u.prototype.compare = function(t, e, r, n, i) {
            if (H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
            if (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && e >= r)
                return 0;
            if (n >= i)
                return -1;
            if (e >= r)
                return 1;
            if (this === t)
                return 0;
            for (var a = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (e >>>= 0), s = Math.min(a, o), c = this.slice(n, i), l = t.slice(e, r), f = 0; f < s; ++f)
                if (c[f] !== l[f]) {
                    a = c[f],
                    o = l[f];
                    break
                }
            return a < o ? -1 : o < a ? 1 : 0
        }
        ,
        u.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }
        ,
        u.prototype.indexOf = function(t, e, r) {
            return y(this, t, e, r, !0)
        }
        ,
        u.prototype.lastIndexOf = function(t, e, r) {
            return y(this, t, e, r, !1)
        }
        ,
        u.prototype.write = function(t, e, r, n) {
            if (void 0 === e)
                n = "utf8",
                r = this.length,
                e = 0;
            else if (void 0 === r && "string" === typeof e)
                n = e,
                r = this.length,
                e = 0;
            else {
                if (!isFinite(e))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e >>>= 0,
                isFinite(r) ? (r >>>= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || r > i) && (r = i),
            t.length > 0 && (r < 0 || e < 0) || e > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var a = !1; ; )
                switch (n) {
                case "hex":
                    return w(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return E(this, t, e, r);
                case "ascii":
                    return T(this, t, e, r);
                case "latin1":
                case "binary":
                    return S(this, t, e, r);
                case "base64":
                    return N(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, t, e, r);
                default:
                    if (a)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    a = !0
                }
        }
        ,
        u.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var C = 4096;
        function R(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i)
                n += String.fromCharCode(127 & t[i]);
            return n
        }
        function O(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i)
                n += String.fromCharCode(t[i]);
            return n
        }
        function I(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", a = e; a < r; ++a)
                i += F[t[a]];
            return i
        }
        function L(t, e, r) {
            for (var n = t.slice(e, r), i = "", a = 0; a < n.length; a += 2)
                i += String.fromCharCode(n[a] + 256 * n[a + 1]);
            return i
        }
        function U(t, e, r) {
            if (t % 1 !== 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + e > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function M(t, e, r, n, i, a) {
            if (!u.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < a)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length)
                throw new RangeError("Index out of range")
        }
        function P(t, e, r, n, i, a) {
            if (r + n > t.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function q(t, e, r, n, a) {
            return e = +e,
            r >>>= 0,
            a || P(t, 0, r, 4),
            i.write(t, e, r, n, 23, 4),
            r + 4
        }
        function k(t, e, r, n, a) {
            return e = +e,
            r >>>= 0,
            a || P(t, 0, r, 8),
            i.write(t, e, r, n, 52, 8),
            r + 8
        }
        u.prototype.slice = function(t, e) {
            var r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
            var n = this.subarray(t, e);
            return Object.setPrototypeOf(n, u.prototype),
            n
        }
        ,
        u.prototype.readUIntLE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || U(t, e, this.length);
            for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                n += this[t + a] * i;
            return n
        }
        ,
        u.prototype.readUIntBE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || U(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                n += this[t + --e] * i;
            return n
        }
        ,
        u.prototype.readUInt8 = function(t, e) {
            return t >>>= 0,
            e || U(t, 1, this.length),
            this[t]
        }
        ,
        u.prototype.readUInt16LE = function(t, e) {
            return t >>>= 0,
            e || U(t, 2, this.length),
            this[t] | this[t + 1] << 8
        }
        ,
        u.prototype.readUInt16BE = function(t, e) {
            return t >>>= 0,
            e || U(t, 2, this.length),
            this[t] << 8 | this[t + 1]
        }
        ,
        u.prototype.readUInt32LE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }
        ,
        u.prototype.readUInt32BE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }
        ,
        u.prototype.readIntLE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || U(t, e, this.length);
            for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                n += this[t + a] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)),
            n
        }
        ,
        u.prototype.readIntBE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || U(t, e, this.length);
            for (var n = e, i = 1, a = this[t + --n]; n > 0 && (i *= 256); )
                a += this[t + --n] * i;
            return a >= (i *= 128) && (a -= Math.pow(2, 8 * e)),
            a
        }
        ,
        u.prototype.readInt8 = function(t, e) {
            return t >>>= 0,
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }
        ,
        u.prototype.readInt16LE = function(t, e) {
            t >>>= 0,
            e || U(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        u.prototype.readInt16BE = function(t, e) {
            t >>>= 0,
            e || U(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        u.prototype.readInt32LE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }
        ,
        u.prototype.readInt32BE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }
        ,
        u.prototype.readFloatLE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            i.read(this, t, !0, 23, 4)
        }
        ,
        u.prototype.readFloatBE = function(t, e) {
            return t >>>= 0,
            e || U(t, 4, this.length),
            i.read(this, t, !1, 23, 4)
        }
        ,
        u.prototype.readDoubleLE = function(t, e) {
            return t >>>= 0,
            e || U(t, 8, this.length),
            i.read(this, t, !0, 52, 8)
        }
        ,
        u.prototype.readDoubleBE = function(t, e) {
            return t >>>= 0,
            e || U(t, 8, this.length),
            i.read(this, t, !1, 52, 8)
        }
        ,
        u.prototype.writeUIntLE = function(t, e, r, n) {
            (t = +t,
            e >>>= 0,
            r >>>= 0,
            n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , a = 0;
            for (this[e] = 255 & t; ++a < r && (i *= 256); )
                this[e + a] = t / i & 255;
            return e + r
        }
        ,
        u.prototype.writeUIntBE = function(t, e, r, n) {
            (t = +t,
            e >>>= 0,
            r >>>= 0,
            n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , a = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
                this[e + i] = t / a & 255;
            return e + r
        }
        ,
        u.prototype.writeUInt8 = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 1, 255, 0),
            this[e] = 255 & t,
            e + 1
        }
        ,
        u.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 2, 65535, 0),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            e + 2
        }
        ,
        u.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 2, 65535, 0),
            this[e] = t >>> 8,
            this[e + 1] = 255 & t,
            e + 2
        }
        ,
        u.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 4, 4294967295, 0),
            this[e + 3] = t >>> 24,
            this[e + 2] = t >>> 16,
            this[e + 1] = t >>> 8,
            this[e] = 255 & t,
            e + 4
        }
        ,
        u.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 4, 4294967295, 0),
            this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t,
            e + 4
        }
        ,
        u.prototype.writeIntLE = function(t, e, r, n) {
            if (t = +t,
            e >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                M(this, t, e, r, i - 1, -i)
            }
            var a = 0
              , o = 1
              , s = 0;
            for (this[e] = 255 & t; ++a < r && (o *= 256); )
                t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1),
                this[e + a] = (t / o >> 0) - s & 255;
            return e + r
        }
        ,
        u.prototype.writeIntBE = function(t, e, r, n) {
            if (t = +t,
            e >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                M(this, t, e, r, i - 1, -i)
            }
            var a = r - 1
              , o = 1
              , s = 0;
            for (this[e + a] = 255 & t; --a >= 0 && (o *= 256); )
                t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1),
                this[e + a] = (t / o >> 0) - s & 255;
            return e + r
        }
        ,
        u.prototype.writeInt8 = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            this[e] = 255 & t,
            e + 1
        }
        ,
        u.prototype.writeInt16LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 2, 32767, -32768),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            e + 2
        }
        ,
        u.prototype.writeInt16BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 2, 32767, -32768),
            this[e] = t >>> 8,
            this[e + 1] = 255 & t,
            e + 2
        }
        ,
        u.prototype.writeInt32LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 4, 2147483647, -2147483648),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            this[e + 2] = t >>> 16,
            this[e + 3] = t >>> 24,
            e + 4
        }
        ,
        u.prototype.writeInt32BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || M(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t,
            e + 4
        }
        ,
        u.prototype.writeFloatLE = function(t, e, r) {
            return q(this, t, e, !0, r)
        }
        ,
        u.prototype.writeFloatBE = function(t, e, r) {
            return q(this, t, e, !1, r)
        }
        ,
        u.prototype.writeDoubleLE = function(t, e, r) {
            return k(this, t, e, !0, r)
        }
        ,
        u.prototype.writeDoubleBE = function(t, e, r) {
            return k(this, t, e, !1, r)
        }
        ,
        u.prototype.copy = function(t, e, r, n) {
            if (!u.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === t.length || 0 === this.length)
                return 0;
            if (e < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
            var i = n - r;
            if (this === t && "function" === typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(e, r, n);
            else if (this === t && r < e && e < n)
                for (var a = i - 1; a >= 0; --a)
                    t[a + e] = this[a + r];
            else
                Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
            return i
        }
        ,
        u.prototype.fill = function(t, e, r, n) {
            if ("string" === typeof t) {
                if ("string" === typeof e ? (n = e,
                e = 0,
                r = this.length) : "string" === typeof r && (n = r,
                r = this.length),
                void 0 !== n && "string" !== typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" === typeof n && !u.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                    var i = t.charCodeAt(0);
                    ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                }
            } else
                "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= e)
                return this;
            var a;
            if (e >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            t || (t = 0),
            "number" === typeof t)
                for (a = e; a < r; ++a)
                    this[a] = t;
            else {
                var o = u.isBuffer(t) ? t : u.from(t, n)
                  , s = o.length;
                if (0 === s)
                    throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (a = 0; a < r - e; ++a)
                    this[a + e] = o[a % s]
            }
            return this
        }
        ;
        var B = /[^+/0-9A-Za-z-_]/g;
        function X(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, a = [], o = 0; o < n; ++o) {
                if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === n) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && a.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (e -= 3) > -1 && a.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((e -= 1) < 0)
                        break;
                    a.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    a.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return a
        }
        function _(t) {
            return n.toByteArray(function(t) {
                if ((t = (t = t.split("=")[0]).trim().replace(B, "")).length < 2)
                    return "";
                for (; t.length % 4 !== 0; )
                    t += "=";
                return t
            }(t))
        }
        function G(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
                e[i + r] = t[i];
            return i
        }
        function H(t, e) {
            return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
        }
        function V(t) {
            return t !== t
        }
        var F = function() {
            for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r)
                for (var n = 16 * r, i = 0; i < 16; ++i)
                    e[n + i] = t[r] + t[i];
            return e
        }()
    },
    2605: function(t, e, r) {
        "use strict";
        function n(t, e) {
            if (e.length < t)
                throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present")
        }
        function i(t) {
            n(1, arguments);
            var e = Object.prototype.toString.call(t);
            return t instanceof Date || "object" === typeof t && "[object Date]" === e ? new Date(t.getTime()) : "number" === typeof t || "[object Number]" === e ? new Date(t) : ("string" !== typeof t && "[object String]" !== e || "undefined" === typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),
            console.warn((new Error).stack)),
            new Date(NaN))
        }
        function a(t) {
            n(1, arguments);
            var e = i(t);
            return !isNaN(e)
        }
        r.d(e, {
            Z: function() {
                return Z
            }
        });
        var o = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXWeeks: {
                one: "about 1 week",
                other: "about {{count}} weeks"
            },
            xWeeks: {
                one: "1 week",
                other: "{{count}} weeks"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        };
        function s(t) {
            return function(e) {
                var r = e || {}
                  , n = r.width ? String(r.width) : t.defaultWidth;
                return t.formats[n] || t.formats[t.defaultWidth]
            }
        }
        var u = {
            date: s({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: s({
                formats: {
                    full: "h:mm:ss a zzzz",
                    long: "h:mm:ss a z",
                    medium: "h:mm:ss a",
                    short: "h:mm a"
                },
                defaultWidth: "full"
            }),
            dateTime: s({
                formats: {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: "{{date}}, {{time}}",
                    short: "{{date}}, {{time}}"
                },
                defaultWidth: "full"
            })
        }
          , c = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };
        function l(t) {
            return function(e, r) {
                var n, i = r || {};
                if ("formatting" === (i.context ? String(i.context) : "standalone") && t.formattingValues) {
                    var a = t.defaultFormattingWidth || t.defaultWidth
                      , o = i.width ? String(i.width) : a;
                    n = t.formattingValues[o] || t.formattingValues[a]
                } else {
                    var s = t.defaultWidth
                      , u = i.width ? String(i.width) : t.defaultWidth;
                    n = t.values[u] || t.values[s]
                }
                return n[t.argumentCallback ? t.argumentCallback(e) : e]
            }
        }
        function f(t) {
            return function(e, r) {
                var n = String(e)
                  , i = r || {}
                  , a = i.width
                  , o = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth]
                  , s = n.match(o);
                if (!s)
                    return null;
                var u, c = s[0], l = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth];
                return u = "[object Array]" === Object.prototype.toString.call(l) ? function(t, e) {
                    for (var r = 0; r < t.length; r++)
                        if (e(t[r]))
                            return r
                }(l, (function(t) {
                    return t.test(c)
                }
                )) : function(t, e) {
                    for (var r in t)
                        if (t.hasOwnProperty(r) && e(t[r]))
                            return r
                }(l, (function(t) {
                    return t.test(c)
                }
                )),
                u = t.valueCallback ? t.valueCallback(u) : u,
                {
                    value: u = i.valueCallback ? i.valueCallback(u) : u,
                    rest: n.slice(c.length)
                }
            }
        }
        var h, p = {
            code: "en-US",
            formatDistance: function(t, e, r) {
                var n;
                return r = r || {},
                n = "string" === typeof o[t] ? o[t] : 1 === e ? o[t].one : o[t].other.replace("{{count}}", e),
                r.addSuffix ? r.comparison > 0 ? "in " + n : n + " ago" : n
            },
            formatLong: u,
            formatRelative: function(t, e, r, n) {
                return c[t]
            },
            localize: {
                ordinalNumber: function(t, e) {
                    var r = Number(t)
                      , n = r % 100;
                    if (n > 20 || n < 10)
                        switch (n % 10) {
                        case 1:
                            return r + "st";
                        case 2:
                            return r + "nd";
                        case 3:
                            return r + "rd"
                        }
                    return r + "th"
                },
                era: l({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: l({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(t) {
                        return Number(t) - 1
                    }
                }),
                month: l({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    defaultWidth: "wide"
                }),
                day: l({
                    values: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: l({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            },
            match: {
                ordinalNumber: (h = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function(t) {
                        return parseInt(t, 10)
                    }
                },
                function(t, e) {
                    var r = String(t)
                      , n = e || {}
                      , i = r.match(h.matchPattern);
                    if (!i)
                        return null;
                    var a = i[0]
                      , o = r.match(h.parsePattern);
                    if (!o)
                        return null;
                    var s = h.valueCallback ? h.valueCallback(o[0]) : o[0];
                    return {
                        value: s = n.valueCallback ? n.valueCallback(s) : s,
                        rest: r.slice(a.length)
                    }
                }
                ),
                era: f({
                    matchPatterns: {
                        narrow: /^(b|a)/i,
                        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                        wide: /^(before christ|before common era|anno domini|common era)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/^b/i, /^(a|c)/i]
                    },
                    defaultParseWidth: "any"
                }),
                quarter: f({
                    matchPatterns: {
                        narrow: /^[1234]/i,
                        abbreviated: /^q[1234]/i,
                        wide: /^[1234](th|st|nd|rd)? quarter/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/1/i, /2/i, /3/i, /4/i]
                    },
                    defaultParseWidth: "any",
                    valueCallback: function(t) {
                        return t + 1
                    }
                }),
                month: f({
                    matchPatterns: {
                        narrow: /^[jfmasond]/i,
                        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                    },
                    defaultParseWidth: "any"
                }),
                day: f({
                    matchPatterns: {
                        narrow: /^[smtwf]/i,
                        short: /^(su|mo|tu|we|th|fr|sa)/i,
                        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                    },
                    defaultParseWidth: "any"
                }),
                dayPeriod: f({
                    matchPatterns: {
                        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                    },
                    defaultMatchWidth: "any",
                    parsePatterns: {
                        any: {
                            am: /^a/i,
                            pm: /^p/i,
                            midnight: /^mi/i,
                            noon: /^no/i,
                            morning: /morning/i,
                            afternoon: /afternoon/i,
                            evening: /evening/i,
                            night: /night/i
                        }
                    },
                    defaultParseWidth: "any"
                })
            },
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        };
        function d(t) {
            if (null === t || !0 === t || !1 === t)
                return NaN;
            var e = Number(t);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }
        function g(t, e) {
            n(2, arguments);
            var r = i(t).getTime()
              , a = d(e);
            return new Date(r + a)
        }
        function m(t, e) {
            n(2, arguments);
            var r = d(e);
            return g(t, -r)
        }
        function b(t, e) {
            for (var r = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < e; )
                n = "0" + n;
            return r + n
        }
        var y = {
            y: function(t, e) {
                var r = t.getUTCFullYear()
                  , n = r > 0 ? r : 1 - r;
                return b("yy" === e ? n % 100 : n, e.length)
            },
            M: function(t, e) {
                var r = t.getUTCMonth();
                return "M" === e ? String(r + 1) : b(r + 1, 2)
            },
            d: function(t, e) {
                return b(t.getUTCDate(), e.length)
            },
            a: function(t, e) {
                var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return r.toUpperCase();
                case "aaa":
                    return r;
                case "aaaaa":
                    return r[0];
                case "aaaa":
                default:
                    return "am" === r ? "a.m." : "p.m."
                }
            },
            h: function(t, e) {
                return b(t.getUTCHours() % 12 || 12, e.length)
            },
            H: function(t, e) {
                return b(t.getUTCHours(), e.length)
            },
            m: function(t, e) {
                return b(t.getUTCMinutes(), e.length)
            },
            s: function(t, e) {
                return b(t.getUTCSeconds(), e.length)
            },
            S: function(t, e) {
                var r = e.length
                  , n = t.getUTCMilliseconds();
                return b(Math.floor(n * Math.pow(10, r - 3)), e.length)
            }
        }
          , v = 864e5;
        function w(t) {
            n(1, arguments);
            var e = 1
              , r = i(t)
              , a = r.getUTCDay()
              , o = (a < e ? 7 : 0) + a - e;
            return r.setUTCDate(r.getUTCDate() - o),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
        function E(t) {
            n(1, arguments);
            var e = i(t)
              , r = e.getUTCFullYear()
              , a = new Date(0);
            a.setUTCFullYear(r + 1, 0, 4),
            a.setUTCHours(0, 0, 0, 0);
            var o = w(a)
              , s = new Date(0);
            s.setUTCFullYear(r, 0, 4),
            s.setUTCHours(0, 0, 0, 0);
            var u = w(s);
            return e.getTime() >= o.getTime() ? r + 1 : e.getTime() >= u.getTime() ? r : r - 1
        }
        function T(t) {
            n(1, arguments);
            var e = E(t)
              , r = new Date(0);
            r.setUTCFullYear(e, 0, 4),
            r.setUTCHours(0, 0, 0, 0);
            var i = w(r);
            return i
        }
        var S = 6048e5;
        function N(t, e) {
            n(1, arguments);
            var r = e || {}
              , a = r.locale
              , o = a && a.options && a.options.weekStartsOn
              , s = null == o ? 0 : d(o)
              , u = null == r.weekStartsOn ? s : d(r.weekStartsOn);
            if (!(u >= 0 && u <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var c = i(t)
              , l = c.getUTCDay()
              , f = (l < u ? 7 : 0) + l - u;
            return c.setUTCDate(c.getUTCDate() - f),
            c.setUTCHours(0, 0, 0, 0),
            c
        }
        function A(t, e) {
            n(1, arguments);
            var r = i(t, e)
              , a = r.getUTCFullYear()
              , o = e || {}
              , s = o.locale
              , u = s && s.options && s.options.firstWeekContainsDate
              , c = null == u ? 1 : d(u)
              , l = null == o.firstWeekContainsDate ? c : d(o.firstWeekContainsDate);
            if (!(l >= 1 && l <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var f = new Date(0);
            f.setUTCFullYear(a + 1, 0, l),
            f.setUTCHours(0, 0, 0, 0);
            var h = N(f, e)
              , p = new Date(0);
            p.setUTCFullYear(a, 0, l),
            p.setUTCHours(0, 0, 0, 0);
            var g = N(p, e);
            return r.getTime() >= h.getTime() ? a + 1 : r.getTime() >= g.getTime() ? a : a - 1
        }
        function D(t, e) {
            n(1, arguments);
            var r = e || {}
              , i = r.locale
              , a = i && i.options && i.options.firstWeekContainsDate
              , o = null == a ? 1 : d(a)
              , s = null == r.firstWeekContainsDate ? o : d(r.firstWeekContainsDate)
              , u = A(t, e)
              , c = new Date(0);
            c.setUTCFullYear(u, 0, s),
            c.setUTCHours(0, 0, 0, 0);
            var l = N(c, e);
            return l
        }
        var x = 6048e5;
        var C = "midnight"
          , R = "noon"
          , O = "morning"
          , I = "afternoon"
          , L = "evening"
          , U = "night";
        function M(t, e) {
            var r = t > 0 ? "-" : "+"
              , n = Math.abs(t)
              , i = Math.floor(n / 60)
              , a = n % 60;
            if (0 === a)
                return r + String(i);
            var o = e || "";
            return r + String(i) + o + b(a, 2)
        }
        function P(t, e) {
            return t % 60 === 0 ? (t > 0 ? "-" : "+") + b(Math.abs(t) / 60, 2) : q(t, e)
        }
        function q(t, e) {
            var r = e || ""
              , n = t > 0 ? "-" : "+"
              , i = Math.abs(t);
            return n + b(Math.floor(i / 60), 2) + r + b(i % 60, 2)
        }
        var k = {
            G: function(t, e, r) {
                var n = t.getUTCFullYear() > 0 ? 1 : 0;
                switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(n, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(n, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return r.era(n, {
                        width: "wide"
                    })
                }
            },
            y: function(t, e, r) {
                if ("yo" === e) {
                    var n = t.getUTCFullYear()
                      , i = n > 0 ? n : 1 - n;
                    return r.ordinalNumber(i, {
                        unit: "year"
                    })
                }
                return y.y(t, e)
            },
            Y: function(t, e, r, n) {
                var i = A(t, n)
                  , a = i > 0 ? i : 1 - i;
                return "YY" === e ? b(a % 100, 2) : "Yo" === e ? r.ordinalNumber(a, {
                    unit: "year"
                }) : b(a, e.length)
            },
            R: function(t, e) {
                return b(E(t), e.length)
            },
            u: function(t, e) {
                return b(t.getUTCFullYear(), e.length)
            },
            Q: function(t, e, r) {
                var n = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "Q":
                    return String(n);
                case "QQ":
                    return b(n, 2);
                case "Qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            q: function(t, e, r) {
                var n = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "q":
                    return String(n);
                case "qq":
                    return b(n, 2);
                case "qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            M: function(t, e, r) {
                var n = t.getUTCMonth();
                switch (e) {
                case "M":
                case "MM":
                    return y.M(t, e);
                case "Mo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            L: function(t, e, r) {
                var n = t.getUTCMonth();
                switch (e) {
                case "L":
                    return String(n + 1);
                case "LL":
                    return b(n + 1, 2);
                case "Lo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            w: function(t, e, r, a) {
                var o = function(t, e) {
                    n(1, arguments);
                    var r = i(t)
                      , a = N(r, e).getTime() - D(r, e).getTime();
                    return Math.round(a / x) + 1
                }(t, a);
                return "wo" === e ? r.ordinalNumber(o, {
                    unit: "week"
                }) : b(o, e.length)
            },
            I: function(t, e, r) {
                var a = function(t) {
                    n(1, arguments);
                    var e = i(t)
                      , r = w(e).getTime() - T(e).getTime();
                    return Math.round(r / S) + 1
                }(t);
                return "Io" === e ? r.ordinalNumber(a, {
                    unit: "week"
                }) : b(a, e.length)
            },
            d: function(t, e, r) {
                return "do" === e ? r.ordinalNumber(t.getUTCDate(), {
                    unit: "date"
                }) : y.d(t, e)
            },
            D: function(t, e, r) {
                var a = function(t) {
                    n(1, arguments);
                    var e = i(t)
                      , r = e.getTime();
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                    var a = e.getTime()
                      , o = r - a;
                    return Math.floor(o / v) + 1
                }(t);
                return "Do" === e ? r.ordinalNumber(a, {
                    unit: "dayOfYear"
                }) : b(a, e.length)
            },
            E: function(t, e, r) {
                var n = t.getUTCDay();
                switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            e: function(t, e, r, n) {
                var i = t.getUTCDay()
                  , a = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "e":
                    return String(a);
                case "ee":
                    return b(a, 2);
                case "eo":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            c: function(t, e, r, n) {
                var i = t.getUTCDay()
                  , a = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "c":
                    return String(a);
                case "cc":
                    return b(a, e.length);
                case "co":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            i: function(t, e, r) {
                var n = t.getUTCDay()
                  , i = 0 === n ? 7 : n;
                switch (e) {
                case "i":
                    return String(i);
                case "ii":
                    return b(i, e.length);
                case "io":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            a: function(t, e, r) {
                var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return r.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return r.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return r.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return r.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            b: function(t, e, r) {
                var n, i = t.getUTCHours();
                switch (n = 12 === i ? R : 0 === i ? C : i / 12 >= 1 ? "pm" : "am",
                e) {
                case "b":
                case "bb":
                    return r.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return r.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return r.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return r.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            B: function(t, e, r) {
                var n, i = t.getUTCHours();
                switch (n = i >= 17 ? L : i >= 12 ? I : i >= 4 ? O : U,
                e) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return r.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            h: function(t, e, r) {
                if ("ho" === e) {
                    var n = t.getUTCHours() % 12;
                    return 0 === n && (n = 12),
                    r.ordinalNumber(n, {
                        unit: "hour"
                    })
                }
                return y.h(t, e)
            },
            H: function(t, e, r) {
                return "Ho" === e ? r.ordinalNumber(t.getUTCHours(), {
                    unit: "hour"
                }) : y.H(t, e)
            },
            K: function(t, e, r) {
                var n = t.getUTCHours() % 12;
                return "Ko" === e ? r.ordinalNumber(n, {
                    unit: "hour"
                }) : b(n, e.length)
            },
            k: function(t, e, r) {
                var n = t.getUTCHours();
                return 0 === n && (n = 24),
                "ko" === e ? r.ordinalNumber(n, {
                    unit: "hour"
                }) : b(n, e.length)
            },
            m: function(t, e, r) {
                return "mo" === e ? r.ordinalNumber(t.getUTCMinutes(), {
                    unit: "minute"
                }) : y.m(t, e)
            },
            s: function(t, e, r) {
                return "so" === e ? r.ordinalNumber(t.getUTCSeconds(), {
                    unit: "second"
                }) : y.s(t, e)
            },
            S: function(t, e) {
                return y.S(t, e)
            },
            X: function(t, e, r, n) {
                var i = (n._originalDate || t).getTimezoneOffset();
                if (0 === i)
                    return "Z";
                switch (e) {
                case "X":
                    return P(i);
                case "XXXX":
                case "XX":
                    return q(i);
                case "XXXXX":
                case "XXX":
                default:
                    return q(i, ":")
                }
            },
            x: function(t, e, r, n) {
                var i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "x":
                    return P(i);
                case "xxxx":
                case "xx":
                    return q(i);
                case "xxxxx":
                case "xxx":
                default:
                    return q(i, ":")
                }
            },
            O: function(t, e, r, n) {
                var i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + M(i, ":");
                case "OOOO":
                default:
                    return "GMT" + q(i, ":")
                }
            },
            z: function(t, e, r, n) {
                var i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + M(i, ":");
                case "zzzz":
                default:
                    return "GMT" + q(i, ":")
                }
            },
            t: function(t, e, r, n) {
                var i = n._originalDate || t;
                return b(Math.floor(i.getTime() / 1e3), e.length)
            },
            T: function(t, e, r, n) {
                return b((n._originalDate || t).getTime(), e.length)
            }
        };
        function B(t, e) {
            switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
            }
        }
        function X(t, e) {
            switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
            }
        }
        var _ = {
            p: X,
            P: function(t, e) {
                var r, n = t.match(/(P+)(p+)?/), i = n[1], a = n[2];
                if (!a)
                    return B(t, e);
                switch (i) {
                case "P":
                    r = e.dateTime({
                        width: "short"
                    });
                    break;
                case "PP":
                    r = e.dateTime({
                        width: "medium"
                    });
                    break;
                case "PPP":
                    r = e.dateTime({
                        width: "long"
                    });
                    break;
                case "PPPP":
                default:
                    r = e.dateTime({
                        width: "full"
                    })
                }
                return r.replace("{{date}}", B(i, e)).replace("{{time}}", X(a, e))
            }
        };
        function G(t) {
            var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
            return e.setUTCFullYear(t.getFullYear()),
            t.getTime() - e.getTime()
        }
        var H = ["D", "DD"]
          , V = ["YY", "YYYY"];
        function F(t) {
            return -1 !== H.indexOf(t)
        }
        function j(t) {
            return -1 !== V.indexOf(t)
        }
        function z(t, e, r) {
            if ("YYYY" === t)
                throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
            if ("YY" === t)
                throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
            if ("D" === t)
                throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
            if ("DD" === t)
                throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"))
        }
        var Y = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , $ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
          , K = /^'([^]*?)'?$/
          , W = /''/g
          , Q = /[a-zA-Z]/;
        function Z(t, e, r) {
            n(2, arguments);
            var o = String(e)
              , s = r || {}
              , u = s.locale || p
              , c = u.options && u.options.firstWeekContainsDate
              , l = null == c ? 1 : d(c)
              , f = null == s.firstWeekContainsDate ? l : d(s.firstWeekContainsDate);
            if (!(f >= 1 && f <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var h = u.options && u.options.weekStartsOn
              , g = null == h ? 0 : d(h)
              , b = null == s.weekStartsOn ? g : d(s.weekStartsOn);
            if (!(b >= 0 && b <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!u.localize)
                throw new RangeError("locale must contain localize property");
            if (!u.formatLong)
                throw new RangeError("locale must contain formatLong property");
            var y = i(t);
            if (!a(y))
                throw new RangeError("Invalid time value");
            var v = G(y)
              , w = m(y, v)
              , E = {
                firstWeekContainsDate: f,
                weekStartsOn: b,
                locale: u,
                _originalDate: y
            }
              , T = o.match($).map((function(t) {
                var e = t[0];
                return "p" === e || "P" === e ? (0,
                _[e])(t, u.formatLong, E) : t
            }
            )).join("").match(Y).map((function(r) {
                if ("''" === r)
                    return "'";
                var n = r[0];
                if ("'" === n)
                    return J(r);
                var i = k[n];
                if (i)
                    return !s.useAdditionalWeekYearTokens && j(r) && z(r, e, t),
                    !s.useAdditionalDayOfYearTokens && F(r) && z(r, e, t),
                    i(w, r, u.localize, E);
                if (n.match(Q))
                    throw new RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                return r
            }
            )).join("");
            return T
        }
        function J(t) {
            return t.match(K)[1].replace(W, "'")
        }
    },
    9144: function(t, e, r) {
        var n, i = "undefined" !== typeof r.g ? r.g : "undefined" !== typeof window ? window : {}, a = r(7579);
        "undefined" !== typeof document ? n = document : (n = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = i["__GLOBAL_DOCUMENT_CACHE@4"] = a),
        t.exports = n
    },
    8908: function(t, e, r) {
        var n;
        n = "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : {},
        t.exports = n
    },
    645: function(t, e) {
        e.read = function(t, e, r, n, i) {
            var a, o, s = 8 * i - n - 1, u = (1 << s) - 1, c = u >> 1, l = -7, f = r ? i - 1 : 0, h = r ? -1 : 1, p = t[e + f];
            for (f += h,
            a = p & (1 << -l) - 1,
            p >>= -l,
            l += s; l > 0; a = 256 * a + t[e + f],
            f += h,
            l -= 8)
                ;
            for (o = a & (1 << -l) - 1,
            a >>= -l,
            l += n; l > 0; o = 256 * o + t[e + f],
            f += h,
            l -= 8)
                ;
            if (0 === a)
                a = 1 - c;
            else {
                if (a === u)
                    return o ? NaN : 1 / 0 * (p ? -1 : 1);
                o += Math.pow(2, n),
                a -= c
            }
            return (p ? -1 : 1) * o * Math.pow(2, a - n)
        }
        ,
        e.write = function(t, e, r, n, i, a) {
            var o, s, u, c = 8 * a - i - 1, l = (1 << c) - 1, f = l >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : a - 1, d = n ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
            o = l) : (o = Math.floor(Math.log(e) / Math.LN2),
            e * (u = Math.pow(2, -o)) < 1 && (o--,
            u *= 2),
            (e += o + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (o++,
            u /= 2),
            o + f >= l ? (s = 0,
            o = l) : o + f >= 1 ? (s = (e * u - 1) * Math.pow(2, i),
            o += f) : (s = e * Math.pow(2, f - 1) * Math.pow(2, i),
            o = 0)); i >= 8; t[r + p] = 255 & s,
            p += d,
            s /= 256,
            i -= 8)
                ;
            for (o = o << i | s,
            c += i; c > 0; t[r + p] = 255 & o,
            p += d,
            o /= 256,
            c -= 8)
                ;
            t[r + p - d] |= 128 * g
        }
    },
    7376: function(t) {
        t.exports = function(t) {
            if (!t)
                return !1;
            var r = e.call(t);
            return "[object Function]" === r || "function" === typeof t && "[object RegExp]" !== r || "undefined" !== typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        }
        ;
        var e = Object.prototype.toString
    },
    7537: function(t, e) {
        function r(t) {
            if (t && "object" === typeof t) {
                var e = t.which || t.keyCode || t.charCode;
                e && (t = e)
            }
            if ("number" === typeof t)
                return o[t];
            var r, a = String(t);
            return (r = n[a.toLowerCase()]) ? r : (r = i[a.toLowerCase()]) || (1 === a.length ? a.charCodeAt(0) : void 0)
        }
        r.isEventKey = function(t, e) {
            if (t && "object" === typeof t) {
                var r = t.which || t.keyCode || t.charCode;
                if (null === r || void 0 === r)
                    return !1;
                if ("string" === typeof e) {
                    var a;
                    if (a = n[e.toLowerCase()])
                        return a === r;
                    if (a = i[e.toLowerCase()])
                        return a === r
                } else if ("number" === typeof e)
                    return e === r;
                return !1
            }
        }
        ;
        var n = (e = t.exports = r).code = e.codes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }
          , i = e.aliases = {
            windows: 91,
            "\u21e7": 16,
            "\u2325": 18,
            "\u2303": 17,
            "\u2318": 91,
            ctl: 17,
            control: 17,
            option: 18,
            pause: 19,
            break: 19,
            caps: 20,
            return: 13,
            escape: 27,
            spc: 32,
            spacebar: 32,
            pgup: 33,
            pgdn: 34,
            ins: 45,
            del: 46,
            cmd: 91
        };
        for (a = 97; a < 123; a++)
            n[String.fromCharCode(a)] = a - 32;
        for (var a = 48; a < 58; a++)
            n[a - 48] = a;
        for (a = 1; a < 13; a++)
            n["f" + a] = a + 111;
        for (a = 0; a < 10; a++)
            n["numpad " + a] = a + 96;
        var o = e.names = e.title = {};
        for (a in n)
            o[n[a]] = a;
        for (var s in i)
            n[s] = i[s]
    },
    4329: function(t, e, r) {
        "use strict";
        r.d(e, {
            _b: function() {
                return m
            }
        });
        var n = function() {
            function t() {
                this.listeners = {}
            }
            var e = t.prototype;
            return e.on = function(t, e) {
                this.listeners[t] || (this.listeners[t] = []),
                this.listeners[t].push(e)
            }
            ,
            e.off = function(t, e) {
                if (!this.listeners[t])
                    return !1;
                var r = this.listeners[t].indexOf(e);
                return this.listeners[t] = this.listeners[t].slice(0),
                this.listeners[t].splice(r, 1),
                r > -1
            }
            ,
            e.trigger = function(t) {
                var e = this.listeners[t];
                if (e)
                    if (2 === arguments.length)
                        for (var r = e.length, n = 0; n < r; ++n)
                            e[n].call(this, arguments[1]);
                    else
                        for (var i = Array.prototype.slice.call(arguments, 1), a = e.length, o = 0; o < a; ++o)
                            e[o].apply(this, i)
            }
            ,
            e.dispose = function() {
                this.listeners = {}
            }
            ,
            e.pipe = function(t) {
                this.on("data", (function(e) {
                    t.push(e)
                }
                ))
            }
            ,
            t
        }()
          , i = r(7462)
          , a = r(8908)
          , o = r.n(a)
          , s = r(8764).Buffer;
        function u(t) {
            for (var e, r = (e = t,
            o().atob ? o().atob(e) : s.from(e, "base64").toString("binary")), n = new Uint8Array(r.length), i = 0; i < r.length; i++)
                n[i] = r.charCodeAt(i);
            return n
        }
        class c extends n {
            constructor() {
                super(),
                this.buffer = ""
            }
            push(t) {
                let e;
                for (this.buffer += t,
                e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n"))
                    this.trigger("data", this.buffer.substring(0, e)),
                    this.buffer = this.buffer.substring(e + 1)
            }
        }
        const l = String.fromCharCode(9)
          , f = function(t) {
            const e = /([0-9.]*)?@?([0-9.]*)?/.exec(t || "")
              , r = {};
            return e[1] && (r.length = parseInt(e[1], 10)),
            e[2] && (r.offset = parseInt(e[2], 10)),
            r
        }
          , h = function(t) {
            const e = {};
            if (!t)
                return e;
            const r = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'));
            let n, i = r.length;
            for (; i--; )
                "" !== r[i] && (n = /([^=]*)=(.*)/.exec(r[i]).slice(1),
                n[0] = n[0].replace(/^\s+|\s+$/g, ""),
                n[1] = n[1].replace(/^\s+|\s+$/g, ""),
                n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"),
                e[n[0]] = n[1]);
            return e
        };
        class p extends n {
            constructor() {
                super(),
                this.customParsers = [],
                this.tagMappers = []
            }
            push(t) {
                let e, r;
                if (0 === (t = t.trim()).length)
                    return;
                if ("#" !== t[0])
                    return void this.trigger("data", {
                        type: "uri",
                        uri: t
                    });
                this.tagMappers.reduce(((e,r)=>{
                    const n = r(t);
                    return n === t ? e : e.concat([n])
                }
                ), [t]).forEach((t=>{
                    for (let e = 0; e < this.customParsers.length; e++)
                        if (this.customParsers[e].call(this, t))
                            return;
                    if (0 === t.indexOf("#EXT"))
                        if (t = t.replace("\r", ""),
                        e = /^#EXTM3U/.exec(t),
                        e)
                            this.trigger("data", {
                                type: "tag",
                                tagType: "m3u"
                            });
                        else {
                            if (e = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "inf"
                                },
                                e[1] && (r.duration = parseFloat(e[1])),
                                e[2] && (r.title = e[2]),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "targetduration"
                                },
                                e[1] && (r.duration = parseInt(e[1], 10)),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-VERSION:([0-9.]*)?/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "version"
                                },
                                e[1] && (r.version = parseInt(e[1], 10)),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "media-sequence"
                                },
                                e[1] && (r.number = parseInt(e[1], 10)),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "discontinuity-sequence"
                                },
                                e[1] && (r.number = parseInt(e[1], 10)),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "playlist-type"
                                },
                                e[1] && (r.playlistType = e[1]),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-BYTERANGE:(.*)?$/.exec(t),
                            e)
                                return r = (0,
                                i.Z)(f(e[1]), {
                                    type: "tag",
                                    tagType: "byterange"
                                }),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t),
                            e)
                                return r = {
                                    type: "tag",
                                    tagType: "allow-cache"
                                },
                                e[1] && (r.allowed = !/NO/.test(e[1])),
                                void this.trigger("data", r);
                            if (e = /^#EXT-X-MAP:(.*)$/.exec(t),
                            e) {
                                if (r = {
                                    type: "tag",
                                    tagType: "map"
                                },
                                e[1]) {
                                    const t = h(e[1]);
                                    t.URI && (r.uri = t.URI),
                                    t.BYTERANGE && (r.byterange = f(t.BYTERANGE))
                                }
                                this.trigger("data", r)
                            } else if (e = /^#EXT-X-STREAM-INF:(.*)$/.exec(t),
                            e) {
                                if (r = {
                                    type: "tag",
                                    tagType: "stream-inf"
                                },
                                e[1]) {
                                    if (r.attributes = h(e[1]),
                                    r.attributes.RESOLUTION) {
                                        const t = r.attributes.RESOLUTION.split("x")
                                          , e = {};
                                        t[0] && (e.width = parseInt(t[0], 10)),
                                        t[1] && (e.height = parseInt(t[1], 10)),
                                        r.attributes.RESOLUTION = e
                                    }
                                    r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = parseInt(r.attributes.BANDWIDTH, 10)),
                                    r.attributes["FRAME-RATE"] && (r.attributes["FRAME-RATE"] = parseFloat(r.attributes["FRAME-RATE"])),
                                    r.attributes["PROGRAM-ID"] && (r.attributes["PROGRAM-ID"] = parseInt(r.attributes["PROGRAM-ID"], 10))
                                }
                                this.trigger("data", r)
                            } else {
                                if (e = /^#EXT-X-MEDIA:(.*)$/.exec(t),
                                e)
                                    return r = {
                                        type: "tag",
                                        tagType: "media"
                                    },
                                    e[1] && (r.attributes = h(e[1])),
                                    void this.trigger("data", r);
                                if (e = /^#EXT-X-ENDLIST/.exec(t),
                                e)
                                    this.trigger("data", {
                                        type: "tag",
                                        tagType: "endlist"
                                    });
                                else if (e = /^#EXT-X-DISCONTINUITY/.exec(t),
                                e)
                                    this.trigger("data", {
                                        type: "tag",
                                        tagType: "discontinuity"
                                    });
                                else {
                                    if (e = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "program-date-time"
                                        },
                                        e[1] && (r.dateTimeString = e[1],
                                        r.dateTimeObject = new Date(e[1])),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-KEY:(.*)$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "key"
                                        },
                                        e[1] && (r.attributes = h(e[1]),
                                        r.attributes.IV && ("0x" === r.attributes.IV.substring(0, 2).toLowerCase() && (r.attributes.IV = r.attributes.IV.substring(2)),
                                        r.attributes.IV = r.attributes.IV.match(/.{8}/g),
                                        r.attributes.IV[0] = parseInt(r.attributes.IV[0], 16),
                                        r.attributes.IV[1] = parseInt(r.attributes.IV[1], 16),
                                        r.attributes.IV[2] = parseInt(r.attributes.IV[2], 16),
                                        r.attributes.IV[3] = parseInt(r.attributes.IV[3], 16),
                                        r.attributes.IV = new Uint32Array(r.attributes.IV))),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-START:(.*)$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "start"
                                        },
                                        e[1] && (r.attributes = h(e[1]),
                                        r.attributes["TIME-OFFSET"] = parseFloat(r.attributes["TIME-OFFSET"]),
                                        r.attributes.PRECISE = /YES/.test(r.attributes.PRECISE)),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "cue-out-cont"
                                        },
                                        e[1] ? r.data = e[1] : r.data = "",
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-CUE-OUT:(.*)?$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "cue-out"
                                        },
                                        e[1] ? r.data = e[1] : r.data = "",
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-CUE-IN:(.*)?$/.exec(t),
                                    e)
                                        return r = {
                                            type: "tag",
                                            tagType: "cue-in"
                                        },
                                        e[1] ? r.data = e[1] : r.data = "",
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-SKIP:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "skip"
                                        },
                                        r.attributes = h(e[1]),
                                        r.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (r.attributes["SKIPPED-SEGMENTS"] = parseInt(r.attributes["SKIPPED-SEGMENTS"], 10)),
                                        r.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (r.attributes["RECENTLY-REMOVED-DATERANGES"] = r.attributes["RECENTLY-REMOVED-DATERANGES"].split(l)),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-PART:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "part"
                                        },
                                        r.attributes = h(e[1]),
                                        ["DURATION"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                        }
                                        )),
                                        ["INDEPENDENT", "GAP"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/.test(r.attributes[t]))
                                        }
                                        )),
                                        r.attributes.hasOwnProperty("BYTERANGE") && (r.attributes.byterange = f(r.attributes.BYTERANGE)),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "server-control"
                                        },
                                        r.attributes = h(e[1]),
                                        ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                        }
                                        )),
                                        ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/.test(r.attributes[t]))
                                        }
                                        )),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-PART-INF:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "part-inf"
                                        },
                                        r.attributes = h(e[1]),
                                        ["PART-TARGET"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                        }
                                        )),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "preload-hint"
                                        },
                                        r.attributes = h(e[1]),
                                        ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach((function(t) {
                                            if (r.attributes.hasOwnProperty(t)) {
                                                r.attributes[t] = parseInt(r.attributes[t], 10);
                                                const e = "BYTERANGE-LENGTH" === t ? "length" : "offset";
                                                r.attributes.byterange = r.attributes.byterange || {},
                                                r.attributes.byterange[e] = r.attributes[t],
                                                delete r.attributes[t]
                                            }
                                        }
                                        )),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t),
                                    e && e[1])
                                        return r = {
                                            type: "tag",
                                            tagType: "rendition-report"
                                        },
                                        r.attributes = h(e[1]),
                                        ["LAST-MSN", "LAST-PART"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseInt(r.attributes[t], 10))
                                        }
                                        )),
                                        void this.trigger("data", r);
                                    if (e = /^#EXT-X-DATERANGE:(.*)$/.exec(t),
                                    e && e[1]) {
                                        r = {
                                            type: "tag",
                                            tagType: "daterange"
                                        },
                                        r.attributes = h(e[1]),
                                        ["ID", "CLASS"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = String(r.attributes[t]))
                                        }
                                        )),
                                        ["START-DATE", "END-DATE"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = new Date(r.attributes[t]))
                                        }
                                        )),
                                        ["DURATION", "PLANNED-DURATION"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                        }
                                        )),
                                        ["END-ON-NEXT"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/i.test(r.attributes[t]))
                                        }
                                        )),
                                        ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach((function(t) {
                                            r.attributes.hasOwnProperty(t) && (r.attributes[t] = r.attributes[t].toString(16))
                                        }
                                        ));
                                        const t = /^X-([A-Z]+-)+[A-Z]+$/;
                                        for (const e in r.attributes) {
                                            if (!t.test(e))
                                                continue;
                                            const n = /[0-9A-Fa-f]{6}/g.test(r.attributes[e])
                                              , i = /^\d+(\.\d+)?$/.test(r.attributes[e]);
                                            r.attributes[e] = n ? r.attributes[e].toString(16) : i ? parseFloat(r.attributes[e]) : String(r.attributes[e])
                                        }
                                        this.trigger("data", r)
                                    } else if (e = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(t),
                                    e)
                                        this.trigger("data", {
                                            type: "tag",
                                            tagType: "independent-segments"
                                        });
                                    else {
                                        if (e = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(t),
                                        e)
                                            return r = {
                                                type: "tag",
                                                tagType: "content-steering"
                                            },
                                            r.attributes = h(e[1]),
                                            void this.trigger("data", r);
                                        this.trigger("data", {
                                            type: "tag",
                                            data: t.slice(4)
                                        })
                                    }
                                }
                            }
                        }
                    else
                        this.trigger("data", {
                            type: "comment",
                            text: t.slice(1)
                        })
                }
                ))
            }
            addParser({expression: t, customType: e, dataParser: r, segment: n}) {
                "function" !== typeof r && (r = t=>t),
                this.customParsers.push((i=>{
                    if (t.exec(i))
                        return this.trigger("data", {
                            type: "custom",
                            data: r(i),
                            customType: e,
                            segment: n
                        }),
                        !0
                }
                ))
            }
            addTagMapper({expression: t, map: e}) {
                this.tagMappers.push((r=>t.test(r) ? e(r) : r))
            }
        }
        const d = function(t) {
            const e = {};
            return Object.keys(t).forEach((function(r) {
                var n;
                e[(n = r,
                n.toLowerCase().replace(/-(\w)/g, (t=>t[1].toUpperCase())))] = t[r]
            }
            )),
            e
        }
          , g = function(t) {
            const {serverControl: e, targetDuration: r, partTargetDuration: n} = t;
            if (!e)
                return;
            const i = "#EXT-X-SERVER-CONTROL"
              , a = "holdBack"
              , o = "partHoldBack"
              , s = r && 3 * r
              , u = n && 2 * n;
            r && !e.hasOwnProperty(a) && (e[a] = s,
            this.trigger("info", {
                message: `${i} defaulting HOLD-BACK to targetDuration * 3 (${s}).`
            })),
            s && e[a] < s && (this.trigger("warn", {
                message: `${i} clamping HOLD-BACK (${e[a]}) to targetDuration * 3 (${s})`
            }),
            e[a] = s),
            n && !e.hasOwnProperty(o) && (e[o] = 3 * n,
            this.trigger("info", {
                message: `${i} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[o]}).`
            })),
            n && e[o] < u && (this.trigger("warn", {
                message: `${i} clamping PART-HOLD-BACK (${e[o]}) to partTargetDuration * 2 (${u}).`
            }),
            e[o] = u)
        };
        class m extends n {
            constructor() {
                super(),
                this.lineStream = new c,
                this.parseStream = new p,
                this.lineStream.pipe(this.parseStream),
                this.lastProgramDateTime = null;
                const t = this
                  , e = [];
                let r, n, a = {}, o = !1;
                const s = function() {}
                  , l = {
                    AUDIO: {},
                    VIDEO: {},
                    "CLOSED-CAPTIONS": {},
                    SUBTITLES: {}
                };
                let f = 0;
                this.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    dateRanges: [],
                    segments: []
                };
                let h = 0
                  , m = 0;
                const b = {};
                this.on("end", (()=>{
                    a.uri || !a.parts && !a.preloadHints || (!a.map && r && (a.map = r),
                    !a.key && n && (a.key = n),
                    a.timeline || "number" !== typeof f || (a.timeline = f),
                    this.manifest.preloadSegment = a)
                }
                )),
                this.parseStream.on("data", (function(c) {
                    let p, y;
                    ({
                        tag() {
                            ({
                                version() {
                                    c.version && (this.manifest.version = c.version)
                                },
                                "allow-cache"() {
                                    this.manifest.allowCache = c.allowed,
                                    "allowed"in c || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }),
                                    this.manifest.allowCache = !0)
                                },
                                byterange() {
                                    const t = {};
                                    "length"in c && (a.byterange = t,
                                    t.length = c.length,
                                    "offset"in c || (c.offset = h)),
                                    "offset"in c && (a.byterange = t,
                                    t.offset = c.offset),
                                    h = t.offset + t.length
                                },
                                endlist() {
                                    this.manifest.endList = !0
                                },
                                inf() {
                                    "mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })),
                                    "discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })),
                                    c.title && (a.title = c.title),
                                    c.duration > 0 && (a.duration = c.duration),
                                    0 === c.duration && (a.duration = .01,
                                    this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })),
                                    this.manifest.segments = e
                                },
                                key() {
                                    if (c.attributes)
                                        if ("NONE" !== c.attributes.METHOD)
                                            if (c.attributes.URI) {
                                                if ("com.apple.streamingkeydelivery" === c.attributes.KEYFORMAT)
                                                    return this.manifest.contentProtection = this.manifest.contentProtection || {},
                                                    void (this.manifest.contentProtection["com.apple.fps.1_0"] = {
                                                        attributes: c.attributes
                                                    });
                                                if ("com.microsoft.playready" === c.attributes.KEYFORMAT)
                                                    return this.manifest.contentProtection = this.manifest.contentProtection || {},
                                                    void (this.manifest.contentProtection["com.microsoft.playready"] = {
                                                        uri: c.attributes.URI
                                                    });
                                                if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === c.attributes.KEYFORMAT) {
                                                    return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(c.attributes.METHOD) ? void this.trigger("warn", {
                                                        message: "invalid key method provided for Widevine"
                                                    }) : ("SAMPLE-AES-CENC" === c.attributes.METHOD && this.trigger("warn", {
                                                        message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                                    }),
                                                    "data:text/plain;base64," !== c.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                                                        message: "invalid key URI provided for Widevine"
                                                    }) : c.attributes.KEYID && "0x" === c.attributes.KEYID.substring(0, 2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {},
                                                    void (this.manifest.contentProtection["com.widevine.alpha"] = {
                                                        attributes: {
                                                            schemeIdUri: c.attributes.KEYFORMAT,
                                                            keyId: c.attributes.KEYID.substring(2)
                                                        },
                                                        pssh: u(c.attributes.URI.split(",")[1])
                                                    })) : void this.trigger("warn", {
                                                        message: "invalid key ID provided for Widevine"
                                                    }))
                                                }
                                                c.attributes.METHOD || this.trigger("warn", {
                                                    message: "defaulting key method to AES-128"
                                                }),
                                                n = {
                                                    method: c.attributes.METHOD || "AES-128",
                                                    uri: c.attributes.URI
                                                },
                                                "undefined" !== typeof c.attributes.IV && (n.iv = c.attributes.IV)
                                            } else
                                                this.trigger("warn", {
                                                    message: "ignoring key declaration without URI"
                                                });
                                        else
                                            n = null;
                                    else
                                        this.trigger("warn", {
                                            message: "ignoring key declaration without attribute list"
                                        })
                                },
                                "media-sequence"() {
                                    isFinite(c.number) ? this.manifest.mediaSequence = c.number : this.trigger("warn", {
                                        message: "ignoring invalid media sequence: " + c.number
                                    })
                                },
                                "discontinuity-sequence"() {
                                    isFinite(c.number) ? (this.manifest.discontinuitySequence = c.number,
                                    f = c.number) : this.trigger("warn", {
                                        message: "ignoring invalid discontinuity sequence: " + c.number
                                    })
                                },
                                "playlist-type"() {
                                    /VOD|EVENT/.test(c.playlistType) ? this.manifest.playlistType = c.playlistType : this.trigger("warn", {
                                        message: "ignoring unknown playlist type: " + c.playlist
                                    })
                                },
                                map() {
                                    r = {},
                                    c.uri && (r.uri = c.uri),
                                    c.byterange && (r.byterange = c.byterange),
                                    n && (r.key = n)
                                },
                                "stream-inf"() {
                                    this.manifest.playlists = e,
                                    this.manifest.mediaGroups = this.manifest.mediaGroups || l,
                                    c.attributes ? (a.attributes || (a.attributes = {}),
                                    (0,
                                    i.Z)(a.attributes, c.attributes)) : this.trigger("warn", {
                                        message: "ignoring empty stream-inf attributes"
                                    })
                                },
                                media() {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l,
                                    !(c.attributes && c.attributes.TYPE && c.attributes["GROUP-ID"] && c.attributes.NAME))
                                        return void this.trigger("warn", {
                                            message: "ignoring incomplete or missing media group"
                                        });
                                    const t = this.manifest.mediaGroups[c.attributes.TYPE];
                                    t[c.attributes["GROUP-ID"]] = t[c.attributes["GROUP-ID"]] || {},
                                    p = t[c.attributes["GROUP-ID"]],
                                    y = {
                                        default: /yes/i.test(c.attributes.DEFAULT)
                                    },
                                    y.default ? y.autoselect = !0 : y.autoselect = /yes/i.test(c.attributes.AUTOSELECT),
                                    c.attributes.LANGUAGE && (y.language = c.attributes.LANGUAGE),
                                    c.attributes.URI && (y.uri = c.attributes.URI),
                                    c.attributes["INSTREAM-ID"] && (y.instreamId = c.attributes["INSTREAM-ID"]),
                                    c.attributes.CHARACTERISTICS && (y.characteristics = c.attributes.CHARACTERISTICS),
                                    c.attributes.FORCED && (y.forced = /yes/i.test(c.attributes.FORCED)),
                                    p[c.attributes.NAME] = y
                                },
                                discontinuity() {
                                    f += 1,
                                    a.discontinuity = !0,
                                    this.manifest.discontinuityStarts.push(e.length)
                                },
                                "program-date-time"() {
                                    "undefined" === typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = c.dateTimeString,
                                    this.manifest.dateTimeObject = c.dateTimeObject),
                                    a.dateTimeString = c.dateTimeString,
                                    a.dateTimeObject = c.dateTimeObject;
                                    const {lastProgramDateTime: t} = this;
                                    this.lastProgramDateTime = new Date(c.dateTimeString).getTime(),
                                    null === t && this.manifest.segments.reduceRight(((t,e)=>(e.programDateTime = t - 1e3 * e.duration,
                                    e.programDateTime)), this.lastProgramDateTime)
                                },
                                targetduration() {
                                    !isFinite(c.duration) || c.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid target duration: " + c.duration
                                    }) : (this.manifest.targetDuration = c.duration,
                                    g.call(this, this.manifest))
                                },
                                start() {
                                    c.attributes && !isNaN(c.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                        timeOffset: c.attributes["TIME-OFFSET"],
                                        precise: c.attributes.PRECISE
                                    } : this.trigger("warn", {
                                        message: "ignoring start declaration without appropriate attribute list"
                                    })
                                },
                                "cue-out"() {
                                    a.cueOut = c.data
                                },
                                "cue-out-cont"() {
                                    a.cueOutCont = c.data
                                },
                                "cue-in"() {
                                    a.cueIn = c.data
                                },
                                skip() {
                                    this.manifest.skip = d(c.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-SKIP", c.attributes, ["SKIPPED-SEGMENTS"])
                                },
                                part() {
                                    o = !0;
                                    const t = this.manifest.segments.length
                                      , e = d(c.attributes);
                                    a.parts = a.parts || [],
                                    a.parts.push(e),
                                    e.byterange && (e.byterange.hasOwnProperty("offset") || (e.byterange.offset = m),
                                    m = e.byterange.offset + e.byterange.length);
                                    const r = a.parts.length - 1;
                                    this.warnOnMissingAttributes_(`#EXT-X-PART #${r} for segment #${t}`, c.attributes, ["URI", "DURATION"]),
                                    this.manifest.renditionReports && this.manifest.renditionReports.forEach(((t,e)=>{
                                        t.hasOwnProperty("lastPart") || this.trigger("warn", {
                                            message: `#EXT-X-RENDITION-REPORT #${e} lacks required attribute(s): LAST-PART`
                                        })
                                    }
                                    ))
                                },
                                "server-control"() {
                                    const t = this.manifest.serverControl = d(c.attributes);
                                    t.hasOwnProperty("canBlockReload") || (t.canBlockReload = !1,
                                    this.trigger("info", {
                                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                                    })),
                                    g.call(this, this.manifest),
                                    t.canSkipDateranges && !t.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                                        message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                                    })
                                },
                                "preload-hint"() {
                                    const t = this.manifest.segments.length
                                      , e = d(c.attributes)
                                      , r = e.type && "PART" === e.type;
                                    a.preloadHints = a.preloadHints || [],
                                    a.preloadHints.push(e),
                                    e.byterange && (e.byterange.hasOwnProperty("offset") || (e.byterange.offset = r ? m : 0,
                                    r && (m = e.byterange.offset + e.byterange.length)));
                                    const n = a.preloadHints.length - 1;
                                    if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${n} for segment #${t}`, c.attributes, ["TYPE", "URI"]),
                                    e.type)
                                        for (let i = 0; i < a.preloadHints.length - 1; i++) {
                                            const r = a.preloadHints[i];
                                            r.type && (r.type === e.type && this.trigger("warn", {
                                                message: `#EXT-X-PRELOAD-HINT #${n} for segment #${t} has the same TYPE ${e.type} as preload hint #${i}`
                                            }))
                                        }
                                },
                                "rendition-report"() {
                                    const t = d(c.attributes);
                                    this.manifest.renditionReports = this.manifest.renditionReports || [],
                                    this.manifest.renditionReports.push(t);
                                    const e = this.manifest.renditionReports.length - 1
                                      , r = ["LAST-MSN", "URI"];
                                    o && r.push("LAST-PART"),
                                    this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${e}`, c.attributes, r)
                                },
                                "part-inf"() {
                                    this.manifest.partInf = d(c.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-PART-INF", c.attributes, ["PART-TARGET"]),
                                    this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                                    g.call(this, this.manifest)
                                },
                                daterange() {
                                    this.manifest.dateRanges.push(d(c.attributes));
                                    const t = this.manifest.dateRanges.length - 1;
                                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${t}`, c.attributes, ["ID", "START-DATE"]);
                                    const e = this.manifest.dateRanges[t];
                                    e.endDate && e.startDate && new Date(e.endDate) < new Date(e.startDate) && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"
                                    }),
                                    e.duration && e.duration < 0 && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE DURATION must not be negative"
                                    }),
                                    e.plannedDuration && e.plannedDuration < 0 && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"
                                    });
                                    const r = !!e.endOnNext;
                                    if (r && !e.class && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"
                                    }),
                                    r && (e.duration || e.endDate) && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"
                                    }),
                                    e.duration && e.endDate) {
                                        const r = e.startDate.getTime() + 1e3 * e.duration;
                                        this.manifest.dateRanges[t].endDate = new Date(r)
                                    }
                                    if (b[e.id]) {
                                        for (const r in b[e.id])
                                            if (e[r] && JSON.stringify(b[e.id][r]) !== JSON.stringify(e[r])) {
                                                this.trigger("warn", {
                                                    message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"
                                                });
                                                break
                                            }
                                        const t = this.manifest.dateRanges.findIndex((t=>t.id === e.id));
                                        this.manifest.dateRanges[t] = (0,
                                        i.Z)(this.manifest.dateRanges[t], e),
                                        b[e.id] = (0,
                                        i.Z)(b[e.id], e),
                                        this.manifest.dateRanges.pop()
                                    } else
                                        b[e.id] = e
                                },
                                "independent-segments"() {
                                    this.manifest.independentSegments = !0
                                },
                                "content-steering"() {
                                    this.manifest.contentSteering = d(c.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", c.attributes, ["SERVER-URI"])
                                }
                            }[c.tagType] || s).call(t)
                        },
                        uri() {
                            a.uri = c.uri,
                            e.push(a),
                            this.manifest.targetDuration && !("duration"in a) && (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }),
                            a.duration = this.manifest.targetDuration),
                            n && (a.key = n),
                            a.timeline = f,
                            r && (a.map = r),
                            m = 0,
                            null !== this.lastProgramDateTime && (a.programDateTime = this.lastProgramDateTime,
                            this.lastProgramDateTime += 1e3 * a.duration),
                            a = {}
                        },
                        comment() {},
                        custom() {
                            c.segment ? (a.custom = a.custom || {},
                            a.custom[c.customType] = c.data) : (this.manifest.custom = this.manifest.custom || {},
                            this.manifest.custom[c.customType] = c.data)
                        }
                    })[c.type].call(t)
                }
                ))
            }
            warnOnMissingAttributes_(t, e, r) {
                const n = [];
                r.forEach((function(t) {
                    e.hasOwnProperty(t) || n.push(t)
                }
                )),
                n.length && this.trigger("warn", {
                    message: `${t} lacks required attribute(s): ${n.join(", ")}`
                })
            }
            push(t) {
                this.lineStream.push(t)
            }
            end() {
                this.lineStream.push("\n"),
                this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", {
                    message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"
                }),
                this.lastProgramDateTime = null,
                this.trigger("end")
            }
            addParser(t) {
                this.parseStream.addParser(t)
            }
            addTagMapper(t) {
                this.parseStream.addTagMapper(t)
            }
        }
    },
    7627: function(t, e, r) {
        "use strict";
        r.d(e, {
            jp: function() {
                return A
            },
            mm: function() {
                return I
            },
            Qc: function() {
                return st
            },
            LG: function() {
                return ut
            }
        });
        var n = r(779)
          , i = r(8908)
          , a = r.n(i)
          , o = r(8764).Buffer;
        function s(t) {
            for (var e, r = (e = t,
            a().atob ? a().atob(e) : o.from(e, "base64").toString("binary")), n = new Uint8Array(r.length), i = 0; i < r.length; i++)
                n[i] = r.charCodeAt(i);
            return n
        }
        var u = r(3969);
        const c = t=>!!t && "object" === typeof t
          , l = (...t)=>t.reduce(((t,e)=>("object" !== typeof e || Object.keys(e).forEach((r=>{
            Array.isArray(t[r]) && Array.isArray(e[r]) ? t[r] = t[r].concat(e[r]) : c(t[r]) && c(e[r]) ? t[r] = l(t[r], e[r]) : t[r] = e[r]
        }
        )),
        t)), {})
          , f = t=>Object.keys(t).map((e=>t[e]))
          , h = t=>t.reduce(((t,e)=>t.concat(e)), [])
          , p = t=>{
            if (!t.length)
                return [];
            const e = [];
            for (let r = 0; r < t.length; r++)
                e.push(t[r]);
            return e
        }
        ;
        var d = "INVALID_NUMBER_OF_PERIOD"
          , g = "DASH_EMPTY_MANIFEST"
          , m = "DASH_INVALID_XML"
          , b = "NO_BASE_URL"
          , y = "SEGMENT_TIME_UNSPECIFIED"
          , v = "UNSUPPORTED_UTC_TIMING_SCHEME";
        const w = ({baseUrl: t="", source: e="", range: r="", indexRange: i=""})=>{
            const o = {
                uri: e,
                resolvedUri: (0,
                n.Z)(t || "", e)
            };
            if (r || i) {
                const t = (r || i).split("-");
                let e, n = a().BigInt ? a().BigInt(t[0]) : parseInt(t[0], 10), s = a().BigInt ? a().BigInt(t[1]) : parseInt(t[1], 10);
                n < Number.MAX_SAFE_INTEGER && "bigint" === typeof n && (n = Number(n)),
                s < Number.MAX_SAFE_INTEGER && "bigint" === typeof s && (s = Number(s)),
                e = "bigint" === typeof s || "bigint" === typeof n ? a().BigInt(s) - a().BigInt(n) + a().BigInt(1) : s - n + 1,
                "bigint" === typeof e && e < Number.MAX_SAFE_INTEGER && (e = Number(e)),
                o.byterange = {
                    length: e,
                    offset: n
                }
            }
            return o
        }
          , E = t=>(t && "number" !== typeof t && (t = parseInt(t, 10)),
        isNaN(t) ? null : t)
          , T = {
            static(t) {
                const {duration: e, timescale: r=1, sourceDuration: n, periodDuration: i} = t
                  , a = E(t.endNumber)
                  , o = e / r;
                return "number" === typeof a ? {
                    start: 0,
                    end: a
                } : "number" === typeof i ? {
                    start: 0,
                    end: i / o
                } : {
                    start: 0,
                    end: n / o
                }
            },
            dynamic(t) {
                const {NOW: e, clientOffset: r, availabilityStartTime: n, timescale: i=1, duration: a, periodStart: o=0, minimumUpdatePeriod: s=0, timeShiftBufferDepth: u=1 / 0} = t
                  , c = E(t.endNumber)
                  , l = (e + r) / 1e3
                  , f = n + o
                  , h = l + s - f
                  , p = Math.ceil(h * i / a)
                  , d = Math.floor((l - f - u) * i / a)
                  , g = Math.floor((l - f) * i / a);
                return {
                    start: Math.max(0, d),
                    end: "number" === typeof c ? c : Math.min(p, g)
                }
            }
        }
          , S = t=>{
            const {type: e, duration: r, timescale: n=1, periodDuration: i, sourceDuration: a} = t
              , {start: o, end: s} = T[e](t)
              , u = ((t,e)=>{
                const r = [];
                for (let n = t; n < e; n++)
                    r.push(n);
                return r
            }
            )(o, s).map((t=>e=>{
                const {duration: r, timescale: n=1, periodStart: i, startNumber: a=1} = t;
                return {
                    number: a + e,
                    duration: r / n,
                    timeline: i,
                    time: e * r
                }
            }
            )(t));
            if ("static" === e) {
                const t = u.length - 1
                  , e = "number" === typeof i ? i : a;
                u[t].duration = e - r / n * t
            }
            return u
        }
          , N = t=>{
            const {baseUrl: e, initialization: r={}, sourceDuration: n, indexRange: i="", periodStart: a, presentationTime: o, number: s=0, duration: u} = t;
            if (!e)
                throw new Error(b);
            const c = w({
                baseUrl: e,
                source: r.sourceURL,
                range: r.range
            })
              , l = w({
                baseUrl: e,
                source: e,
                indexRange: i
            });
            if (l.map = c,
            u) {
                const e = S(t);
                e.length && (l.duration = e[0].duration,
                l.timeline = e[0].timeline)
            } else
                n && (l.duration = n,
                l.timeline = a);
            return l.presentationTime = o || a,
            l.number = s,
            [l]
        }
          , A = (t,e,r)=>{
            const n = t.sidx.map ? t.sidx.map : null
              , i = t.sidx.duration
              , o = t.timeline || 0
              , s = t.sidx.byterange
              , u = s.offset + s.length
              , c = e.timescale
              , l = e.references.filter((t=>1 !== t.referenceType))
              , f = []
              , h = t.endList ? "static" : "dynamic"
              , p = t.sidx.timeline;
            let d, g = p, m = t.mediaSequence || 0;
            d = "bigint" === typeof e.firstOffset ? a().BigInt(u) + e.firstOffset : u + e.firstOffset;
            for (let b = 0; b < l.length; b++) {
                const t = e.references[b]
                  , s = t.referencedSize
                  , u = t.subsegmentDuration;
                let l;
                l = "bigint" === typeof d ? d + a().BigInt(s) - a().BigInt(1) : d + s - 1;
                const y = N({
                    baseUrl: r,
                    timescale: c,
                    timeline: o,
                    periodStart: p,
                    presentationTime: g,
                    number: m,
                    duration: u,
                    sourceDuration: i,
                    indexRange: `${d}-${l}`,
                    type: h
                })[0];
                n && (y.map = n),
                f.push(y),
                d += "bigint" === typeof d ? a().BigInt(s) : s,
                g += u / c,
                m++
            }
            return t.segments = f,
            t
        }
          , D = ["AUDIO", "SUBTITLES"]
          , x = t=>{
            return (e = t,
            r = ({timeline: t})=>t,
            f(e.reduce(((t,e)=>(e.forEach((e=>{
                t[r(e)] = e
            }
            )),
            t)), {}))).sort(((t,e)=>t.timeline > e.timeline ? 1 : -1));
            var e, r
        }
          , C = t=>{
            let e = [];
            var r, n;
            return r = t,
            n = (t,r,n,i)=>{
                e = e.concat(t.playlists || [])
            }
            ,
            D.forEach((function(t) {
                for (var e in r.mediaGroups[t])
                    for (var i in r.mediaGroups[t][e]) {
                        var a = r.mediaGroups[t][e][i];
                        n(a, t, e, i)
                    }
            }
            )),
            e
        }
          , R = ({playlist: t, mediaSequence: e})=>{
            t.mediaSequence = e,
            t.segments.forEach(((e,r)=>{
                e.number = t.mediaSequence + r
            }
            ))
        }
          , O = ({oldManifest: t, newManifest: e})=>{
            const r = t.playlists.concat(C(t))
              , n = e.playlists.concat(C(e));
            return e.timelineStarts = x([t.timelineStarts, e.timelineStarts]),
            (({oldPlaylists: t, newPlaylists: e, timelineStarts: r})=>{
                e.forEach((e=>{
                    e.discontinuitySequence = r.findIndex((function({timeline: t}) {
                        return t === e.timeline
                    }
                    ));
                    const n = ((t,e)=>{
                        for (let r = 0; r < t.length; r++)
                            if (t[r].attributes.NAME === e)
                                return t[r];
                        return null
                    }
                    )(t, e.attributes.NAME);
                    if (!n)
                        return;
                    if (e.sidx)
                        return;
                    const i = e.segments[0]
                      , a = n.segments.findIndex((function(t) {
                        return Math.abs(t.presentationTime - i.presentationTime) < .016666666666666666
                    }
                    ));
                    if (-1 === a)
                        return R({
                            playlist: e,
                            mediaSequence: n.mediaSequence + n.segments.length
                        }),
                        e.segments[0].discontinuity = !0,
                        e.discontinuityStarts.unshift(0),
                        void ((!n.segments.length && e.timeline > n.timeline || n.segments.length && e.timeline > n.segments[n.segments.length - 1].timeline) && e.discontinuitySequence--);
                    n.segments[a].discontinuity && !i.discontinuity && (i.discontinuity = !0,
                    e.discontinuityStarts.unshift(0),
                    e.discontinuitySequence--),
                    R({
                        playlist: e,
                        mediaSequence: n.segments[a].number
                    })
                }
                ))
            }
            )({
                oldPlaylists: r,
                newPlaylists: n,
                timelineStarts: e.timelineStarts
            }),
            e
        }
          , I = t=>t && t.uri + "-" + (t=>{
            let e;
            return e = "bigint" === typeof t.offset || "bigint" === typeof t.length ? a().BigInt(t.offset) + a().BigInt(t.length) - a().BigInt(1) : t.offset + t.length - 1,
            `${t.offset}-${e}`
        }
        )(t.byterange)
          , L = t=>{
            const e = t.reduce((function(t, e) {
                return t[e.attributes.baseUrl] || (t[e.attributes.baseUrl] = []),
                t[e.attributes.baseUrl].push(e),
                t
            }
            ), {});
            let r = [];
            return Object.values(e).forEach((t=>{
                const e = f(t.reduce(((t,e)=>{
                    const r = e.attributes.id + (e.attributes.lang || "");
                    return t[r] ? (e.segments && (e.segments[0] && (e.segments[0].discontinuity = !0),
                    t[r].segments.push(...e.segments)),
                    e.attributes.contentProtection && (t[r].attributes.contentProtection = e.attributes.contentProtection)) : (t[r] = e,
                    t[r].attributes.timelineStarts = []),
                    t[r].attributes.timelineStarts.push({
                        start: e.attributes.periodStart,
                        timeline: e.attributes.periodStart
                    }),
                    t
                }
                ), {}));
                r = r.concat(e)
            }
            )),
            r.map((t=>{
                var e, r;
                return t.discontinuityStarts = (e = t.segments || [],
                r = "discontinuity",
                e.reduce(((t,e,n)=>(e[r] && t.push(n),
                t)), [])),
                t
            }
            ))
        }
          , U = (t,e)=>{
            const r = I(t.sidx)
              , n = r && e[r] && e[r].sidx;
            return n && A(t, n, t.sidx.resolvedUri),
            t
        }
          , M = (t,e={})=>{
            if (!Object.keys(e).length)
                return t;
            for (const r in t)
                t[r] = U(t[r], e);
            return t
        }
          , P = ({attributes: t, segments: e, sidx: r, discontinuityStarts: n})=>{
            const i = {
                attributes: {
                    NAME: t.id,
                    AUDIO: "audio",
                    SUBTITLES: "subs",
                    RESOLUTION: {
                        width: t.width,
                        height: t.height
                    },
                    CODECS: t.codecs,
                    BANDWIDTH: t.bandwidth,
                    "PROGRAM-ID": 1
                },
                uri: "",
                endList: "static" === t.type,
                timeline: t.periodStart,
                resolvedUri: t.baseUrl || "",
                targetDuration: t.duration,
                discontinuityStarts: n,
                timelineStarts: t.timelineStarts,
                segments: e
            };
            return t.frameRate && (i.attributes["FRAME-RATE"] = t.frameRate),
            t.contentProtection && (i.contentProtection = t.contentProtection),
            t.serviceLocation && (i.attributes.serviceLocation = t.serviceLocation),
            r && (i.sidx = r),
            i
        }
          , q = ({attributes: t})=>"video/mp4" === t.mimeType || "video/webm" === t.mimeType || "video" === t.contentType
          , k = ({attributes: t})=>"audio/mp4" === t.mimeType || "audio/webm" === t.mimeType || "audio" === t.contentType
          , B = ({attributes: t})=>"text/vtt" === t.mimeType || "text" === t.contentType
          , X = t=>t ? Object.keys(t).reduce(((e,r)=>{
            const n = t[r];
            return e.concat(n.playlists)
        }
        ), []) : []
          , _ = ({dashPlaylists: t, locations: e, contentSteering: r, sidxMapping: n={}, previousManifest: i, eventStream: a})=>{
            if (!t.length)
                return {};
            const {sourceDuration: o, type: s, suggestedPresentationDelay: u, minimumUpdatePeriod: c} = t[0].attributes
              , l = L(t.filter(q)).map(P)
              , f = L(t.filter(k))
              , h = L(t.filter(B))
              , p = t.map((t=>t.attributes.captionServices)).filter(Boolean)
              , d = {
                allowCache: !0,
                discontinuityStarts: [],
                segments: [],
                endList: !0,
                mediaGroups: {
                    AUDIO: {},
                    VIDEO: {},
                    "CLOSED-CAPTIONS": {},
                    SUBTITLES: {}
                },
                uri: "",
                duration: o,
                playlists: M(l, n)
            };
            c >= 0 && (d.minimumUpdatePeriod = 1e3 * c),
            e && (d.locations = e),
            r && (d.contentSteering = r),
            "dynamic" === s && (d.suggestedPresentationDelay = u),
            a && a.length > 0 && (d.eventStream = a);
            const g = 0 === d.playlists.length
              , m = f.length ? ((t,e={},r=!1)=>{
                let n;
                const i = t.reduce(((t,i)=>{
                    const a = i.attributes.role && i.attributes.role.value || ""
                      , o = i.attributes.lang || "";
                    let s = i.attributes.label || "main";
                    if (o && !i.attributes.label) {
                        const t = a ? ` (${a})` : "";
                        s = `${i.attributes.lang}${t}`
                    }
                    t[s] || (t[s] = {
                        language: o,
                        autoselect: !0,
                        default: "main" === a,
                        playlists: [],
                        uri: ""
                    });
                    const u = U((({attributes: t, segments: e, sidx: r, mediaSequence: n, discontinuitySequence: i, discontinuityStarts: a},o)=>{
                        const s = {
                            attributes: {
                                NAME: t.id,
                                BANDWIDTH: t.bandwidth,
                                CODECS: t.codecs,
                                "PROGRAM-ID": 1
                            },
                            uri: "",
                            endList: "static" === t.type,
                            timeline: t.periodStart,
                            resolvedUri: t.baseUrl || "",
                            targetDuration: t.duration,
                            discontinuitySequence: i,
                            discontinuityStarts: a,
                            timelineStarts: t.timelineStarts,
                            mediaSequence: n,
                            segments: e
                        };
                        return t.contentProtection && (s.contentProtection = t.contentProtection),
                        t.serviceLocation && (s.attributes.serviceLocation = t.serviceLocation),
                        r && (s.sidx = r),
                        o && (s.attributes.AUDIO = "audio",
                        s.attributes.SUBTITLES = "subs"),
                        s
                    }
                    )(i, r), e);
                    return t[s].playlists.push(u),
                    "undefined" === typeof n && "main" === a && (n = i,
                    n.default = !0),
                    t
                }
                ), {});
                n || (i[Object.keys(i)[0]].default = !0);
                return i
            }
            )(f, n, g) : null
              , b = h.length ? ((t,e={})=>t.reduce(((t,r)=>{
                const n = r.attributes.label || r.attributes.lang || "text";
                return t[n] || (t[n] = {
                    language: n,
                    default: !1,
                    autoselect: !1,
                    playlists: [],
                    uri: ""
                }),
                t[n].playlists.push(U((({attributes: t, segments: e, mediaSequence: r, discontinuityStarts: n, discontinuitySequence: i})=>{
                    "undefined" === typeof e && (e = [{
                        uri: t.baseUrl,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        duration: t.sourceDuration,
                        number: 0
                    }],
                    t.duration = t.sourceDuration);
                    const a = {
                        NAME: t.id,
                        BANDWIDTH: t.bandwidth,
                        "PROGRAM-ID": 1
                    };
                    t.codecs && (a.CODECS = t.codecs);
                    const o = {
                        attributes: a,
                        uri: "",
                        endList: "static" === t.type,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        targetDuration: t.duration,
                        timelineStarts: t.timelineStarts,
                        discontinuityStarts: n,
                        discontinuitySequence: i,
                        mediaSequence: r,
                        segments: e
                    };
                    return t.serviceLocation && (o.attributes.serviceLocation = t.serviceLocation),
                    o
                }
                )(r), e)),
                t
            }
            ), {}))(h, n) : null
              , y = l.concat(X(m), X(b))
              , v = y.map((({timelineStarts: t})=>t));
            var w, E;
            return d.timelineStarts = x(v),
            w = y,
            E = d.timelineStarts,
            w.forEach((t=>{
                t.mediaSequence = 0,
                t.discontinuitySequence = E.findIndex((function({timeline: e}) {
                    return e === t.timeline
                }
                )),
                t.segments && t.segments.forEach(((t,e)=>{
                    t.number = e
                }
                ))
            }
            )),
            m && (d.mediaGroups.AUDIO.audio = m),
            b && (d.mediaGroups.SUBTITLES.subs = b),
            p.length && (d.mediaGroups["CLOSED-CAPTIONS"].cc = p.reduce(((t,e)=>e ? (e.forEach((e=>{
                const {channel: r, language: n} = e;
                t[n] = {
                    autoselect: !1,
                    default: !1,
                    instreamId: r,
                    language: n
                },
                e.hasOwnProperty("aspectRatio") && (t[n].aspectRatio = e.aspectRatio),
                e.hasOwnProperty("easyReader") && (t[n].easyReader = e.easyReader),
                e.hasOwnProperty("3D") && (t[n]["3D"] = e["3D"])
            }
            )),
            t) : t), {})),
            i ? O({
                oldManifest: i,
                newManifest: d
            }) : d
        }
          , G = (t,e,r)=>{
            const {NOW: n, clientOffset: i, availabilityStartTime: a, timescale: o=1, periodStart: s=0, minimumUpdatePeriod: u=0} = t
              , c = (n + i) / 1e3 + u - (a + s);
            return Math.ceil((c * o - e) / r)
        }
          , H = (t,e)=>{
            const {type: r, minimumUpdatePeriod: n=0, media: i="", sourceDuration: a, timescale: o=1, startNumber: s=1, periodStart: u} = t
              , c = [];
            let l = -1;
            for (let f = 0; f < e.length; f++) {
                const h = e[f]
                  , p = h.d
                  , d = h.r || 0
                  , g = h.t || 0;
                let m;
                if (l < 0 && (l = g),
                g && g > l && (l = g),
                d < 0) {
                    const s = f + 1;
                    m = s === e.length ? "dynamic" === r && n > 0 && i.indexOf("$Number$") > 0 ? G(t, l, p) : (a * o - l) / p : (e[s].t - l) / p
                } else
                    m = d + 1;
                const b = s + c.length + m;
                let y = s + c.length;
                for (; y < b; )
                    c.push({
                        number: y,
                        duration: p / o,
                        time: l,
                        timeline: u
                    }),
                    l += p,
                    y++
            }
            return c
        }
          , V = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g
          , F = (t,e)=>t.replace(V, (t=>(e,r,n,i)=>{
            if ("$$" === e)
                return "$";
            if ("undefined" === typeof t[r])
                return e;
            const a = "" + t[r];
            return "RepresentationID" === r ? a : (i = n ? parseInt(i, 10) : 1,
            a.length >= i ? a : `${new Array(i - a.length + 1).join("0")}${a}`)
        }
        )(e))
          , j = (t,e)=>{
            const r = {
                RepresentationID: t.id,
                Bandwidth: t.bandwidth || 0
            }
              , {initialization: i={
                sourceURL: "",
                range: ""
            }} = t
              , a = w({
                baseUrl: t.baseUrl,
                source: F(i.sourceURL, r),
                range: i.range
            });
            return ((t,e)=>t.duration || e ? t.duration ? S(t) : H(t, e) : [{
                number: t.startNumber || 1,
                duration: t.sourceDuration,
                time: 0,
                timeline: t.periodStart
            }])(t, e).map((e=>{
                r.Number = e.number,
                r.Time = e.time;
                const i = F(t.media || "", r)
                  , o = t.timescale || 1
                  , s = t.presentationTimeOffset || 0
                  , u = t.periodStart + (e.time - s) / o;
                return {
                    uri: i,
                    timeline: e.timeline,
                    duration: e.duration,
                    resolvedUri: (0,
                    n.Z)(t.baseUrl || "", i),
                    map: a,
                    number: e.number,
                    presentationTime: u
                }
            }
            ))
        }
          , z = (t,e)=>{
            const {duration: r, segmentUrls: n=[], periodStart: i} = t;
            if (!r && !e || r && e)
                throw new Error(y);
            const a = n.map((e=>((t,e)=>{
                const {baseUrl: r, initialization: n={}} = t
                  , i = w({
                    baseUrl: r,
                    source: n.sourceURL,
                    range: n.range
                })
                  , a = w({
                    baseUrl: r,
                    source: e.media,
                    range: e.mediaRange
                });
                return a.map = i,
                a
            }
            )(t, e)));
            let o;
            r && (o = S(t)),
            e && (o = H(t, e));
            return o.map(((e,r)=>{
                if (a[r]) {
                    const n = a[r]
                      , o = t.timescale || 1
                      , s = t.presentationTimeOffset || 0;
                    return n.timeline = e.timeline,
                    n.duration = e.duration,
                    n.number = e.number,
                    n.presentationTime = i + (e.time - s) / o,
                    n
                }
            }
            )).filter((t=>t))
        }
          , Y = ({attributes: t, segmentInfo: e})=>{
            let r, n;
            e.template ? (n = j,
            r = l(t, e.template)) : e.base ? (n = N,
            r = l(t, e.base)) : e.list && (n = z,
            r = l(t, e.list));
            const i = {
                attributes: t
            };
            if (!n)
                return i;
            const a = n(r, e.segmentTimeline);
            if (r.duration) {
                const {duration: t, timescale: e=1} = r;
                r.duration = t / e
            } else
                a.length ? r.duration = a.reduce(((t,e)=>Math.max(t, Math.ceil(e.duration))), 0) : r.duration = 0;
            return i.attributes = r,
            i.segments = a,
            e.base && r.indexRange && (i.sidx = a[0],
            i.segments = []),
            i
        }
          , $ = (t,e)=>p(t.childNodes).filter((({tagName: t})=>t === e))
          , K = t=>t.textContent.trim()
          , W = t=>{
            const e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
            if (!e)
                return 0;
            const [r,n,i,a,o,s] = e.slice(1);
            return 31536e3 * parseFloat(r || 0) + 2592e3 * parseFloat(n || 0) + 86400 * parseFloat(i || 0) + 3600 * parseFloat(a || 0) + 60 * parseFloat(o || 0) + parseFloat(s || 0)
        }
          , Q = {
            mediaPresentationDuration: t=>W(t),
            availabilityStartTime(t) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = t) && (e += "Z"),
                Date.parse(e) / 1e3;
                var e
            },
            minimumUpdatePeriod: t=>W(t),
            suggestedPresentationDelay: t=>W(t),
            type: t=>t,
            timeShiftBufferDepth: t=>W(t),
            start: t=>W(t),
            width: t=>parseInt(t, 10),
            height: t=>parseInt(t, 10),
            bandwidth: t=>parseInt(t, 10),
            frameRate: t=>(t=>parseFloat(t.split("/").reduce(((t,e)=>t / e))))(t),
            startNumber: t=>parseInt(t, 10),
            timescale: t=>parseInt(t, 10),
            presentationTimeOffset: t=>parseInt(t, 10),
            duration(t) {
                const e = parseInt(t, 10);
                return isNaN(e) ? W(t) : e
            },
            d: t=>parseInt(t, 10),
            t: t=>parseInt(t, 10),
            r: t=>parseInt(t, 10),
            presentationTime: t=>parseInt(t, 10),
            DEFAULT: t=>t
        }
          , Z = t=>t && t.attributes ? p(t.attributes).reduce(((t,e)=>{
            const r = Q[e.name] || Q.DEFAULT;
            return t[e.name] = r(e.value),
            t
        }
        ), {}) : {}
          , J = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
            "urn:mpeg:dash:mp4protection:2011": "mp4protection"
        }
          , tt = (t,e)=>e.length ? h(t.map((function(t) {
            return e.map((function(e) {
                const r = K(e)
                  , i = (0,
                n.Z)(t.baseUrl, r)
                  , a = l(Z(e), {
                    baseUrl: i
                });
                return i !== r && !a.serviceLocation && t.serviceLocation && (a.serviceLocation = t.serviceLocation),
                a
            }
            ))
        }
        ))) : t
          , et = t=>{
            const e = $(t, "SegmentTemplate")[0]
              , r = $(t, "SegmentList")[0]
              , n = r && $(r, "SegmentURL").map((t=>l({
                tag: "SegmentURL"
            }, Z(t))))
              , i = $(t, "SegmentBase")[0]
              , a = r || e
              , o = a && $(a, "SegmentTimeline")[0]
              , s = r || i || e
              , u = s && $(s, "Initialization")[0]
              , c = e && Z(e);
            c && u ? c.initialization = u && Z(u) : c && c.initialization && (c.initialization = {
                sourceURL: c.initialization
            });
            const f = {
                template: c,
                segmentTimeline: o && $(o, "S").map((t=>Z(t))),
                list: r && l(Z(r), {
                    segmentUrls: n,
                    initialization: Z(u)
                }),
                base: i && l(Z(i), {
                    initialization: Z(u)
                })
            };
            return Object.keys(f).forEach((t=>{
                f[t] || delete f[t]
            }
            )),
            f
        }
          , rt = t=>h($(t.node, "EventStream").map((e=>{
            const r = Z(e)
              , n = r.schemeIdUri;
            return $(e, "Event").map((e=>{
                const i = Z(e)
                  , a = i.presentationTime || 0
                  , o = r.timescale || 1
                  , s = i.duration || 0
                  , u = a / o + t.attributes.start;
                return {
                    schemeIdUri: n,
                    value: r.value,
                    id: i.id,
                    start: u,
                    end: u + s / o,
                    messageData: K(e) || i.messageData,
                    contentEncoding: r.contentEncoding,
                    presentationTimeOffset: r.presentationTimeOffset || 0
                }
            }
            ))
        }
        )))
          , nt = (t,e,r)=>n=>{
            const i = Z(n)
              , a = tt(e, $(n, "BaseURL"))
              , o = $(n, "Role")[0]
              , u = {
                role: Z(o)
            };
            let c = l(t, i, u);
            const f = $(n, "Accessibility")[0]
              , p = (t=>{
                if ("urn:scte:dash:cc:cea-608:2015" === t.schemeIdUri)
                    return ("string" !== typeof t.value ? [] : t.value.split(";")).map((t=>{
                        let e, r;
                        return r = t,
                        /^CC\d=/.test(t) ? [e,r] = t.split("=") : /^CC\d$/.test(t) && (e = t),
                        {
                            channel: e,
                            language: r
                        }
                    }
                    ));
                if ("urn:scte:dash:cc:cea-708:2015" === t.schemeIdUri)
                    return ("string" !== typeof t.value ? [] : t.value.split(";")).map((t=>{
                        const e = {
                            channel: void 0,
                            language: void 0,
                            aspectRatio: 1,
                            easyReader: 0,
                            "3D": 0
                        };
                        if (/=/.test(t)) {
                            const [r,n=""] = t.split("=");
                            e.channel = r,
                            e.language = t,
                            n.split(",").forEach((t=>{
                                const [r,n] = t.split(":");
                                "lang" === r ? e.language = n : "er" === r ? e.easyReader = Number(n) : "war" === r ? e.aspectRatio = Number(n) : "3D" === r && (e["3D"] = Number(n))
                            }
                            ))
                        } else
                            e.language = t;
                        return e.channel && (e.channel = "SERVICE" + e.channel),
                        e
                    }
                    ))
            }
            )(Z(f));
            p && (c = l(c, {
                captionServices: p
            }));
            const d = $(n, "Label")[0];
            if (d && d.childNodes.length) {
                const t = d.childNodes[0].nodeValue.trim();
                c = l(c, {
                    label: t
                })
            }
            const g = $(n, "ContentProtection").reduce(((t,e)=>{
                const r = Z(e);
                r.schemeIdUri && (r.schemeIdUri = r.schemeIdUri.toLowerCase());
                const n = J[r.schemeIdUri];
                if (n) {
                    t[n] = {
                        attributes: r
                    };
                    const i = $(e, "cenc:pssh")[0];
                    if (i) {
                        const e = K(i);
                        t[n].pssh = e && s(e)
                    }
                }
                return t
            }
            ), {});
            Object.keys(g).length && (c = l(c, {
                contentProtection: g
            }));
            const m = et(n)
              , b = $(n, "Representation")
              , y = l(r, m);
            return h(b.map(((t,e,r)=>n=>{
                const i = $(n, "BaseURL")
                  , a = tt(e, i)
                  , o = l(t, Z(n))
                  , s = et(n);
                return a.map((t=>({
                    segmentInfo: l(r, s),
                    attributes: l(o, t)
                })))
            }
            )(c, a, y)))
        }
          , it = (t,e)=>(r,n)=>{
            const i = tt(e, $(r.node, "BaseURL"))
              , a = l(t, {
                periodStart: r.attributes.start
            });
            "number" === typeof r.attributes.duration && (a.periodDuration = r.attributes.duration);
            const o = $(r.node, "AdaptationSet")
              , s = et(r.node);
            return h(o.map(nt(a, i, s)))
        }
          , at = (t,e)=>{
            if (t.length > 1 && e({
                type: "warn",
                message: "The MPD manifest should contain no more than one ContentSteering tag"
            }),
            !t.length)
                return null;
            const r = l({
                serverURL: K(t[0])
            }, Z(t[0]));
            return r.queryBeforeStart = "true" === r.queryBeforeStart,
            r
        }
          , ot = t=>{
            if ("" === t)
                throw new Error(g);
            const e = new u.DOMParser;
            let r, n;
            try {
                r = e.parseFromString(t, "application/xml"),
                n = r && "MPD" === r.documentElement.tagName ? r.documentElement : null
            } catch (i) {}
            if (!n || n && n.getElementsByTagName("parsererror").length > 0)
                throw new Error(m);
            return n
        }
          , st = (t,e={})=>{
            const r = ((t,e={})=>{
                const {manifestUri: r="", NOW: n=Date.now(), clientOffset: i=0, eventHandler: a=function() {}
                } = e
                  , o = $(t, "Period");
                if (!o.length)
                    throw new Error(d);
                const s = $(t, "Location")
                  , u = Z(t)
                  , c = tt([{
                    baseUrl: r
                }], $(t, "BaseURL"))
                  , l = $(t, "ContentSteering");
                u.type = u.type || "static",
                u.sourceDuration = u.mediaPresentationDuration || 0,
                u.NOW = n,
                u.clientOffset = i,
                s.length && (u.locations = s.map(K));
                const f = [];
                return o.forEach(((t,e)=>{
                    const r = Z(t)
                      , n = f[e - 1];
                    r.start = (({attributes: t, priorPeriodAttributes: e, mpdType: r})=>"number" === typeof t.start ? t.start : e && "number" === typeof e.start && "number" === typeof e.duration ? e.start + e.duration : e || "static" !== r ? null : 0)({
                        attributes: r,
                        priorPeriodAttributes: n ? n.attributes : null,
                        mpdType: u.type
                    }),
                    f.push({
                        node: t,
                        attributes: r
                    })
                }
                )),
                {
                    locations: u.locations,
                    contentSteeringInfo: at(l, a),
                    representationInfo: h(f.map(it(u, c))),
                    eventStream: h(f.map(rt))
                }
            }
            )(ot(t), e)
              , n = r.representationInfo.map(Y);
            return _({
                dashPlaylists: n,
                locations: r.locations,
                contentSteering: r.contentSteeringInfo,
                sidxMapping: e.sidxMapping,
                previousManifest: e.previousManifest,
                eventStream: r.eventStream
            })
        }
          , ut = t=>(t=>{
            const e = $(t, "UTCTiming")[0];
            if (!e)
                return null;
            const r = Z(e);
            switch (r.schemeIdUri) {
            case "urn:mpeg:dash:utc:http-head:2014":
            case "urn:mpeg:dash:utc:http-head:2012":
                r.method = "HEAD";
                break;
            case "urn:mpeg:dash:utc:http-xsdate:2014":
            case "urn:mpeg:dash:utc:http-iso:2014":
            case "urn:mpeg:dash:utc:http-xsdate:2012":
            case "urn:mpeg:dash:utc:http-iso:2012":
                r.method = "GET";
                break;
            case "urn:mpeg:dash:utc:direct:2014":
            case "urn:mpeg:dash:utc:direct:2012":
                r.method = "DIRECT",
                r.value = Date.parse(r.value);
                break;
            case "urn:mpeg:dash:utc:http-ntp:2014":
            case "urn:mpeg:dash:utc:ntp:2014":
            case "urn:mpeg:dash:utc:sntp:2014":
            default:
                throw new Error(v)
            }
            return r
        }
        )(ot(t))
    },
    4221: function(t, e, r) {
        var n = r(6894).getUint64;
        t.exports = function(t) {
            var e = new DataView(t.buffer,t.byteOffset,t.byteLength)
              , r = {
                version: t[0],
                flags: new Uint8Array(t.subarray(1, 4)),
                references: [],
                referenceId: e.getUint32(4),
                timescale: e.getUint32(8)
            }
              , i = 12;
            0 === r.version ? (r.earliestPresentationTime = e.getUint32(i),
            r.firstOffset = e.getUint32(i + 4),
            i += 8) : (r.earliestPresentationTime = n(t.subarray(i)),
            r.firstOffset = n(t.subarray(i + 8)),
            i += 16),
            i += 2;
            var a = e.getUint16(i);
            for (i += 2; a > 0; i += 12,
            a--)
                r.references.push({
                    referenceType: (128 & t[i]) >>> 7,
                    referencedSize: 2147483647 & e.getUint32(i),
                    subsegmentDuration: e.getUint32(i + 4),
                    startsWithSap: !!(128 & t[i + 8]),
                    sapType: (112 & t[i + 8]) >>> 4,
                    sapDeltaTime: 268435455 & e.getUint32(i + 8)
                });
            return r
        }
    },
    1489: function(t) {
        var e, r, n, i, a, o, s, u = 9e4;
        e = function(t) {
            return t * u
        }
        ,
        r = function(t, e) {
            return t * e
        }
        ,
        n = function(t) {
            return t / u
        }
        ,
        i = function(t, e) {
            return t / e
        }
        ,
        a = function(t, r) {
            return e(i(t, r))
        }
        ,
        o = function(t, e) {
            return r(n(t), e)
        }
        ,
        s = function(t, e, r) {
            return n(r ? t : t - e)
        }
        ,
        t.exports = {
            ONE_SECOND_IN_TS: u,
            secondsToVideoTs: e,
            secondsToAudioTs: r,
            videoTsToSeconds: n,
            audioTsToSeconds: i,
            audioTsToVideoTs: a,
            videoTsToAudioTs: o,
            metadataTsToSeconds: s
        }
    },
    6894: function(t) {
        var e = Math.pow(2, 32);
        t.exports = {
            getUint64: function(t) {
                var r, n = new DataView(t.buffer,t.byteOffset,t.byteLength);
                return n.getBigUint64 ? (r = n.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(r) : r : n.getUint32(0) * e + n.getUint32(4)
            },
            MAX_UINT32: e
        }
    },
    2857: function() {},
    9008: function(t, e, r) {
        t.exports = r(639)
    },
    5974: function(t) {
        t.exports = function(t, e) {
            var r, n = null;
            try {
                r = JSON.parse(t, e)
            } catch (i) {
                n = i
            }
            return [n, r]
        }
    },
    9945: function(t) {
        !function(e) {
            var r = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/
              , n = /^(?=([^\/?#]*))\1([^]*)$/
              , i = /(?:\/|^)\.(?=\/)/g
              , a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g
              , o = {
                buildAbsoluteURL: function(t, e, r) {
                    if (r = r || {},
                    t = t.trim(),
                    !(e = e.trim())) {
                        if (!r.alwaysNormalize)
                            return t;
                        var i = o.parseURL(t);
                        if (!i)
                            throw new Error("Error trying to parse base URL.");
                        return i.path = o.normalizePath(i.path),
                        o.buildURLFromParts(i)
                    }
                    var a = o.parseURL(e);
                    if (!a)
                        throw new Error("Error trying to parse relative URL.");
                    if (a.scheme)
                        return r.alwaysNormalize ? (a.path = o.normalizePath(a.path),
                        o.buildURLFromParts(a)) : e;
                    var s = o.parseURL(t);
                    if (!s)
                        throw new Error("Error trying to parse base URL.");
                    if (!s.netLoc && s.path && "/" !== s.path[0]) {
                        var u = n.exec(s.path);
                        s.netLoc = u[1],
                        s.path = u[2]
                    }
                    s.netLoc && !s.path && (s.path = "/");
                    var c = {
                        scheme: s.scheme,
                        netLoc: a.netLoc,
                        path: null,
                        params: a.params,
                        query: a.query,
                        fragment: a.fragment
                    };
                    if (!a.netLoc && (c.netLoc = s.netLoc,
                    "/" !== a.path[0]))
                        if (a.path) {
                            var l = s.path
                              , f = l.substring(0, l.lastIndexOf("/") + 1) + a.path;
                            c.path = o.normalizePath(f)
                        } else
                            c.path = s.path,
                            a.params || (c.params = s.params,
                            a.query || (c.query = s.query));
                    return null === c.path && (c.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
                    o.buildURLFromParts(c)
                },
                parseURL: function(t) {
                    var e = r.exec(t);
                    return e ? {
                        scheme: e[1] || "",
                        netLoc: e[2] || "",
                        path: e[3] || "",
                        params: e[4] || "",
                        query: e[5] || "",
                        fragment: e[6] || ""
                    } : null
                },
                normalizePath: function(t) {
                    for (t = t.split("").reverse().join("").replace(i, ""); t.length !== (t = t.replace(a, "")).length; )
                        ;
                    return t.split("").reverse().join("")
                },
                buildURLFromParts: function(t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            };
            t.exports = o
        }()
    },
    3407: function(t, e, r) {
        var n = r(8908)
          , i = t.exports = {
            WebVTT: r(3706),
            VTTCue: r(2230),
            VTTRegion: r(3710)
        };
        n.vttjs = i,
        n.WebVTT = i.WebVTT;
        var a = i.VTTCue
          , o = i.VTTRegion
          , s = n.VTTCue
          , u = n.VTTRegion;
        i.shim = function() {
            n.VTTCue = a,
            n.VTTRegion = o
        }
        ,
        i.restore = function() {
            n.VTTCue = s,
            n.VTTRegion = u
        }
        ,
        n.VTTCue || i.shim()
    },
    3706: function(t, e, r) {
        var n = r(9144)
          , i = Object.create || function() {
            function t() {}
            return function(e) {
                if (1 !== arguments.length)
                    throw new Error("Object.create shim only accepts one parameter.");
                return t.prototype = e,
                new t
            }
        }();
        function a(t, e) {
            this.name = "ParsingError",
            this.code = t.code,
            this.message = e || t.message
        }
        function o(t) {
            function e(t, e, r, n) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | n) / 1e3
            }
            var r = t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
            return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
        }
        function s() {
            this.values = i(null)
        }
        function u(t, e, r, n) {
            var i = n ? t.split(n) : [t];
            for (var a in i)
                if ("string" === typeof i[a]) {
                    var o = i[a].split(r);
                    if (2 === o.length)
                        e(o[0].trim(), o[1].trim())
                }
        }
        function c(t, e, r) {
            var n = t;
            function i() {
                var e = o(t);
                if (null === e)
                    throw new a(a.Errors.BadTimeStamp,"Malformed timestamp: " + n);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
                e
            }
            function c() {
                t = t.replace(/^\s+/, "")
            }
            if (c(),
            e.startTime = i(),
            c(),
            "--\x3e" !== t.substr(0, 3))
                throw new a(a.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
            t = t.substr(3),
            c(),
            e.endTime = i(),
            c(),
            function(t, e) {
                var n = new s;
                u(t, (function(t, e) {
                    switch (t) {
                    case "region":
                        for (var i = r.length - 1; i >= 0; i--)
                            if (r[i].id === e) {
                                n.set(t, r[i].region);
                                break
                            }
                        break;
                    case "vertical":
                        n.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        var a = e.split(",")
                          , o = a[0];
                        n.integer(t, o),
                        n.percent(t, o) && n.set("snapToLines", !1),
                        n.alt(t, o, ["auto"]),
                        2 === a.length && n.alt("lineAlign", a[1], ["start", "center", "end"]);
                        break;
                    case "position":
                        a = e.split(","),
                        n.percent(t, a[0]),
                        2 === a.length && n.alt("positionAlign", a[1], ["start", "center", "end"]);
                        break;
                    case "size":
                        n.percent(t, e);
                        break;
                    case "align":
                        n.alt(t, e, ["start", "center", "end", "left", "right"])
                    }
                }
                ), /:/, /\s/),
                e.region = n.get("region", null),
                e.vertical = n.get("vertical", "");
                try {
                    e.line = n.get("line", "auto")
                } catch (i) {}
                e.lineAlign = n.get("lineAlign", "start"),
                e.snapToLines = n.get("snapToLines", !0),
                e.size = n.get("size", 100);
                try {
                    e.align = n.get("align", "center")
                } catch (i) {
                    e.align = n.get("align", "middle")
                }
                try {
                    e.position = n.get("position", "auto")
                } catch (i) {
                    e.position = n.get("position", {
                        start: 0,
                        left: 0,
                        center: 50,
                        middle: 50,
                        end: 100,
                        right: 100
                    }, e.align)
                }
                e.positionAlign = n.get("positionAlign", {
                    start: "start",
                    left: "start",
                    center: "center",
                    middle: "center",
                    end: "end",
                    right: "end"
                }, e.align)
            }(t, e)
        }
        a.prototype = i(Error.prototype),
        a.prototype.constructor = a,
        a.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            },
            BadTimeStamp: {
                code: 1,
                message: "Malformed time stamp."
            }
        },
        s.prototype = {
            set: function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            },
            get: function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            },
            has: function(t) {
                return t in this.values
            },
            alt: function(t, e, r) {
                for (var n = 0; n < r.length; ++n)
                    if (e === r[n]) {
                        this.set(t, e);
                        break
                    }
            },
            integer: function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            },
            percent: function(t, e) {
                return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e),
                !0)
            }
        };
        var l = n.createElement && n.createElement("textarea")
          , f = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        }
          , h = {
            white: "rgba(255,255,255,1)",
            lime: "rgba(0,255,0,1)",
            cyan: "rgba(0,255,255,1)",
            red: "rgba(255,0,0,1)",
            yellow: "rgba(255,255,0,1)",
            magenta: "rgba(255,0,255,1)",
            blue: "rgba(0,0,255,1)",
            black: "rgba(0,0,0,1)"
        }
          , p = {
            v: "title",
            lang: "lang"
        }
          , d = {
            rt: "ruby"
        };
        function g(t, e) {
            function r() {
                if (!e)
                    return null;
                var t, r = e.match(/^([^<]*)(<[^>]*>?)?/);
                return t = r[1] ? r[1] : r[2],
                e = e.substr(t.length),
                t
            }
            function n(t, e) {
                return !d[e.localName] || d[e.localName] === t.localName
            }
            function i(e, r) {
                var n = f[e];
                if (!n)
                    return null;
                var i = t.document.createElement(n)
                  , a = p[e];
                return a && r && (i[a] = r.trim()),
                i
            }
            for (var a, s, u = t.document.createElement("div"), c = u, g = []; null !== (a = r()); )
                if ("<" !== a[0])
                    c.appendChild(t.document.createTextNode((s = a,
                    l.innerHTML = s,
                    s = l.textContent,
                    l.textContent = "",
                    s)));
                else {
                    if ("/" === a[1]) {
                        g.length && g[g.length - 1] === a.substr(2).replace(">", "") && (g.pop(),
                        c = c.parentNode);
                        continue
                    }
                    var m, b = o(a.substr(1, a.length - 2));
                    if (b) {
                        m = t.document.createProcessingInstruction("timestamp", b),
                        c.appendChild(m);
                        continue
                    }
                    var y = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                    if (!y)
                        continue;
                    if (!(m = i(y[1], y[3])))
                        continue;
                    if (!n(c, m))
                        continue;
                    if (y[2]) {
                        var v = y[2].split(".");
                        v.forEach((function(t) {
                            var e = /^bg_/.test(t)
                              , r = e ? t.slice(3) : t;
                            if (h.hasOwnProperty(r)) {
                                var n = e ? "background-color" : "color"
                                  , i = h[r];
                                m.style[n] = i
                            }
                        }
                        )),
                        m.className = v.join(" ")
                    }
                    g.push(y[1]),
                    c.appendChild(m),
                    c = m
                }
            return u
        }
        var m = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
        function b(t) {
            for (var e = 0; e < m.length; e++) {
                var r = m[e];
                if (t >= r[0] && t <= r[1])
                    return !0
            }
            return !1
        }
        function y(t) {
            var e = []
              , r = "";
            if (!t || !t.childNodes)
                return "ltr";
            function n(t, e) {
                for (var r = e.childNodes.length - 1; r >= 0; r--)
                    t.push(e.childNodes[r])
            }
            function i(t) {
                if (!t || !t.length)
                    return null;
                var e = t.pop()
                  , r = e.textContent || e.innerText;
                if (r) {
                    var a = r.match(/^.*(\n|\r)/);
                    return a ? (t.length = 0,
                    a[0]) : r
                }
                return "ruby" === e.tagName ? i(t) : e.childNodes ? (n(t, e),
                i(t)) : void 0
            }
            for (n(e, t); r = i(e); )
                for (var a = 0; a < r.length; a++)
                    if (b(r.charCodeAt(a)))
                        return "rtl";
            return "ltr"
        }
        function v() {}
        function w(t, e, r) {
            v.call(this),
            this.cue = e,
            this.cueDiv = g(t, e.text);
            var n = {
                color: "rgba(255, 255, 255, 1)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline",
                writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                unicodeBidi: "plaintext"
            };
            this.applyStyles(n, this.cueDiv),
            this.div = t.document.createElement("div"),
            n = {
                direction: y(this.cueDiv),
                writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                unicodeBidi: "plaintext",
                textAlign: "middle" === e.align ? "center" : e.align,
                font: r.font,
                whiteSpace: "pre-line",
                position: "absolute"
            },
            this.applyStyles(n),
            this.div.appendChild(this.cueDiv);
            var i = 0;
            switch (e.positionAlign) {
            case "start":
            case "line-left":
                i = e.position;
                break;
            case "center":
                i = e.position - e.size / 2;
                break;
            case "end":
            case "line-right":
                i = e.position - e.size
            }
            "" === e.vertical ? this.applyStyles({
                left: this.formatStyle(i, "%"),
                width: this.formatStyle(e.size, "%")
            }) : this.applyStyles({
                top: this.formatStyle(i, "%"),
                height: this.formatStyle(e.size, "%")
            }),
            this.move = function(t) {
                this.applyStyles({
                    top: this.formatStyle(t.top, "px"),
                    bottom: this.formatStyle(t.bottom, "px"),
                    left: this.formatStyle(t.left, "px"),
                    right: this.formatStyle(t.right, "px"),
                    height: this.formatStyle(t.height, "px"),
                    width: this.formatStyle(t.width, "px")
                })
            }
        }
        function E(t) {
            var e, r, n, i;
            if (t.div) {
                r = t.div.offsetHeight,
                n = t.div.offsetWidth,
                i = t.div.offsetTop;
                var a = (a = t.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
                t = t.div.getBoundingClientRect(),
                e = a ? Math.max(a[0] && a[0].height || 0, t.height / a.length) : 0
            }
            this.left = t.left,
            this.right = t.right,
            this.top = t.top || i,
            this.height = t.height || r,
            this.bottom = t.bottom || i + (t.height || r),
            this.width = t.width || n,
            this.lineHeight = void 0 !== e ? e : t.lineHeight
        }
        function T(t, e, r, n) {
            var i = new E(e)
              , a = e.cue
              , o = function(t) {
                if ("number" === typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100))
                    return t.line;
                if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement)
                    return -1;
                for (var e = t.track, r = e.textTrackList, n = 0, i = 0; i < r.length && r[i] !== e; i++)
                    "showing" === r[i].mode && n++;
                return -1 * ++n
            }(a)
              , s = [];
            if (a.snapToLines) {
                var u;
                switch (a.vertical) {
                case "":
                    s = ["+y", "-y"],
                    u = "height";
                    break;
                case "rl":
                    s = ["+x", "-x"],
                    u = "width";
                    break;
                case "lr":
                    s = ["-x", "+x"],
                    u = "width"
                }
                var c = i.lineHeight
                  , l = c * Math.round(o)
                  , f = r[u] + c
                  , h = s[0];
                Math.abs(l) > f && (l = l < 0 ? -1 : 1,
                l *= Math.ceil(f / c) * c),
                o < 0 && (l += "" === a.vertical ? r.height : r.width,
                s = s.reverse()),
                i.move(h, l)
            } else {
                var p = i.lineHeight / r.height * 100;
                switch (a.lineAlign) {
                case "center":
                    o -= p / 2;
                    break;
                case "end":
                    o -= p
                }
                switch (a.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(o, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(o, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(o, "%")
                    })
                }
                s = ["+y", "-x", "+x", "-y"],
                i = new E(e)
            }
            var d = function(t, e) {
                for (var i, a = new E(t), o = 1, s = 0; s < e.length; s++) {
                    for (; t.overlapsOppositeAxis(r, e[s]) || t.within(r) && t.overlapsAny(n); )
                        t.move(e[s]);
                    if (t.within(r))
                        return t;
                    var u = t.intersectPercentage(r);
                    o > u && (i = new E(t),
                    o = u),
                    t = new E(a)
                }
                return i || a
            }(i, s);
            e.move(d.toCSSCompatValues(r))
        }
        function S() {}
        v.prototype.applyStyles = function(t, e) {
            for (var r in e = e || this.div,
            t)
                t.hasOwnProperty(r) && (e.style[r] = t[r])
        }
        ,
        v.prototype.formatStyle = function(t, e) {
            return 0 === t ? 0 : t + e
        }
        ,
        w.prototype = i(v.prototype),
        w.prototype.constructor = w,
        E.prototype.move = function(t, e) {
            switch (e = void 0 !== e ? e : this.lineHeight,
            t) {
            case "+x":
                this.left += e,
                this.right += e;
                break;
            case "-x":
                this.left -= e,
                this.right -= e;
                break;
            case "+y":
                this.top += e,
                this.bottom += e;
                break;
            case "-y":
                this.top -= e,
                this.bottom -= e
            }
        }
        ,
        E.prototype.overlaps = function(t) {
            return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
        }
        ,
        E.prototype.overlapsAny = function(t) {
            for (var e = 0; e < t.length; e++)
                if (this.overlaps(t[e]))
                    return !0;
            return !1
        }
        ,
        E.prototype.within = function(t) {
            return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
        }
        ,
        E.prototype.overlapsOppositeAxis = function(t, e) {
            switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
            }
        }
        ,
        E.prototype.intersectPercentage = function(t) {
            return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
        }
        ,
        E.prototype.toCSSCompatValues = function(t) {
            return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width
            }
        }
        ,
        E.getSimpleBoxPosition = function(t) {
            var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0
              , r = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0
              , n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
            return {
                left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
                right: t.right,
                top: t.top || n,
                height: t.height || e,
                bottom: t.bottom || n + (t.height || e),
                width: t.width || r
            }
        }
        ,
        S.StringDecoder = function() {
            return {
                decode: function(t) {
                    if (!t)
                        return "";
                    if ("string" !== typeof t)
                        throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }
        ,
        S.convertCueToDOMTree = function(t, e) {
            return t && e ? g(t, e) : null
        }
        ;
        S.processCues = function(t, e, r) {
            if (!t || !e || !r)
                return null;
            for (; r.firstChild; )
                r.removeChild(r.firstChild);
            var n = t.document.createElement("div");
            if (n.style.position = "absolute",
            n.style.left = "0",
            n.style.right = "0",
            n.style.top = "0",
            n.style.bottom = "0",
            n.style.margin = "1.5%",
            r.appendChild(n),
            function(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState)
                        return !0;
                return !1
            }(e)) {
                var i = []
                  , a = E.getSimpleBoxPosition(n)
                  , o = {
                    font: Math.round(.05 * a.height * 100) / 100 + "px sans-serif"
                };
                !function() {
                    for (var r, s, u = 0; u < e.length; u++)
                        s = e[u],
                        r = new w(t,s,o),
                        n.appendChild(r.div),
                        T(0, r, a, i),
                        s.displayState = r.div,
                        i.push(E.getSimpleBoxPosition(r))
                }()
            } else
                for (var s = 0; s < e.length; s++)
                    n.appendChild(e[s].displayState)
        }
        ,
        S.Parser = function(t, e, r) {
            r || (r = e,
            e = {}),
            e || (e = {}),
            this.window = t,
            this.vttjs = e,
            this.state = "INITIAL",
            this.buffer = "",
            this.decoder = r || new TextDecoder("utf8"),
            this.regionList = []
        }
        ,
        S.Parser.prototype = {
            reportOrThrowError: function(t) {
                if (!(t instanceof a))
                    throw t;
                this.onparsingerror && this.onparsingerror(t)
            },
            parse: function(t) {
                var e = this;
                function r() {
                    for (var t = e.buffer, r = 0; r < t.length && "\r" !== t[r] && "\n" !== t[r]; )
                        ++r;
                    var n = t.substr(0, r);
                    return "\r" === t[r] && ++r,
                    "\n" === t[r] && ++r,
                    e.buffer = t.substr(r),
                    n
                }
                function n(t) {
                    t.match(/X-TIMESTAMP-MAP/) ? u(t, (function(t, r) {
                        switch (t) {
                        case "X-TIMESTAMP-MAP":
                            !function(t) {
                                var r = new s;
                                u(t, (function(t, e) {
                                    switch (t) {
                                    case "MPEGT":
                                        r.integer(t + "S", e);
                                        break;
                                    case "LOCA":
                                        r.set(t + "L", o(e))
                                    }
                                }
                                ), /[^\d]:/, /,/),
                                e.ontimestampmap && e.ontimestampmap({
                                    MPEGTS: r.get("MPEGTS"),
                                    LOCAL: r.get("LOCAL")
                                })
                            }(r)
                        }
                    }
                    ), /=/) : u(t, (function(t, r) {
                        switch (t) {
                        case "Region":
                            !function(t) {
                                var r = new s;
                                if (u(t, (function(t, e) {
                                    switch (t) {
                                    case "id":
                                        r.set(t, e);
                                        break;
                                    case "width":
                                        r.percent(t, e);
                                        break;
                                    case "lines":
                                        r.integer(t, e);
                                        break;
                                    case "regionanchor":
                                    case "viewportanchor":
                                        var n = e.split(",");
                                        if (2 !== n.length)
                                            break;
                                        var i = new s;
                                        if (i.percent("x", n[0]),
                                        i.percent("y", n[1]),
                                        !i.has("x") || !i.has("y"))
                                            break;
                                        r.set(t + "X", i.get("x")),
                                        r.set(t + "Y", i.get("y"));
                                        break;
                                    case "scroll":
                                        r.alt(t, e, ["up"])
                                    }
                                }
                                ), /=/, /\s/),
                                r.has("id")) {
                                    var n = new (e.vttjs.VTTRegion || e.window.VTTRegion);
                                    n.width = r.get("width", 100),
                                    n.lines = r.get("lines", 3),
                                    n.regionAnchorX = r.get("regionanchorX", 0),
                                    n.regionAnchorY = r.get("regionanchorY", 100),
                                    n.viewportAnchorX = r.get("viewportanchorX", 0),
                                    n.viewportAnchorY = r.get("viewportanchorY", 100),
                                    n.scroll = r.get("scroll", ""),
                                    e.onregion && e.onregion(n),
                                    e.regionList.push({
                                        id: r.get("id"),
                                        region: n
                                    })
                                }
                            }(r)
                        }
                    }
                    ), /:/)
                }
                t && (e.buffer += e.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var i;
                    if ("INITIAL" === e.state) {
                        if (!/\r\n|\n/.test(e.buffer))
                            return this;
                        var l = (i = r()).match(/^WEBVTT([ \t].*)?$/);
                        if (!l || !l[0])
                            throw new a(a.Errors.BadSignature);
                        e.state = "HEADER"
                    }
                    for (var f = !1; e.buffer; ) {
                        if (!/\r\n|\n/.test(e.buffer))
                            return this;
                        switch (f ? f = !1 : i = r(),
                        e.state) {
                        case "HEADER":
                            /:/.test(i) ? n(i) : i || (e.state = "ID");
                            continue;
                        case "NOTE":
                            i || (e.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(i)) {
                                e.state = "NOTE";
                                break
                            }
                            if (!i)
                                continue;
                            e.cue = new (e.vttjs.VTTCue || e.window.VTTCue)(0,0,"");
                            try {
                                e.cue.align = "center"
                            } catch (p) {
                                e.cue.align = "middle"
                            }
                            if (e.state = "CUE",
                            -1 === i.indexOf("--\x3e")) {
                                e.cue.id = i;
                                continue
                            }
                        case "CUE":
                            try {
                                c(i, e.cue, e.regionList)
                            } catch (p) {
                                e.reportOrThrowError(p),
                                e.cue = null,
                                e.state = "BADCUE";
                                continue
                            }
                            e.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var h = -1 !== i.indexOf("--\x3e");
                            if (!i || h && (f = !0)) {
                                e.oncue && e.oncue(e.cue),
                                e.cue = null,
                                e.state = "ID";
                                continue
                            }
                            e.cue.text && (e.cue.text += "\n"),
                            e.cue.text += i.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                            continue;
                        case "BADCUE":
                            i || (e.state = "ID");
                            continue
                        }
                    }
                } catch (p) {
                    e.reportOrThrowError(p),
                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                    e.cue = null,
                    e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(),
                    (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n",
                    t.parse()),
                    "INITIAL" === t.state)
                        throw new a(a.Errors.BadSignature)
                } catch (e) {
                    t.reportOrThrowError(e)
                }
                return t.onflush && t.onflush(),
                this
            }
        },
        t.exports = S
    },
    2230: function(t) {
        var e = {
            "": 1,
            lr: 1,
            rl: 1
        }
          , r = {
            start: 1,
            center: 1,
            end: 1,
            left: 1,
            right: 1,
            auto: 1,
            "line-left": 1,
            "line-right": 1
        };
        function n(t) {
            return "string" === typeof t && (!!r[t.toLowerCase()] && t.toLowerCase())
        }
        function i(t, r, i) {
            this.hasBeenReset = !1;
            var a = ""
              , o = !1
              , s = t
              , u = r
              , c = i
              , l = null
              , f = ""
              , h = !0
              , p = "auto"
              , d = "start"
              , g = "auto"
              , m = "auto"
              , b = 100
              , y = "center";
            Object.defineProperties(this, {
                id: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        a = "" + t
                    }
                },
                pauseOnExit: {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        o = !!t
                    }
                },
                startTime: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        if ("number" !== typeof t)
                            throw new TypeError("Start time must be set to a number.");
                        s = t,
                        this.hasBeenReset = !0
                    }
                },
                endTime: {
                    enumerable: !0,
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        if ("number" !== typeof t)
                            throw new TypeError("End time must be set to a number.");
                        u = t,
                        this.hasBeenReset = !0
                    }
                },
                text: {
                    enumerable: !0,
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        c = "" + t,
                        this.hasBeenReset = !0
                    }
                },
                region: {
                    enumerable: !0,
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        l = t,
                        this.hasBeenReset = !0
                    }
                },
                vertical: {
                    enumerable: !0,
                    get: function() {
                        return f
                    },
                    set: function(t) {
                        var r = function(t) {
                            return "string" === typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
                        }(t);
                        if (!1 === r)
                            throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                        f = r,
                        this.hasBeenReset = !0
                    }
                },
                snapToLines: {
                    enumerable: !0,
                    get: function() {
                        return h
                    },
                    set: function(t) {
                        h = !!t,
                        this.hasBeenReset = !0
                    }
                },
                line: {
                    enumerable: !0,
                    get: function() {
                        return p
                    },
                    set: function(t) {
                        if ("number" !== typeof t && "auto" !== t)
                            throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                        p = t,
                        this.hasBeenReset = !0
                    }
                },
                lineAlign: {
                    enumerable: !0,
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        var e = n(t);
                        e ? (d = e,
                        this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.")
                    }
                },
                position: {
                    enumerable: !0,
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Position must be between 0 and 100.");
                        g = t,
                        this.hasBeenReset = !0
                    }
                },
                positionAlign: {
                    enumerable: !0,
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        var e = n(t);
                        e ? (m = e,
                        this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.")
                    }
                },
                size: {
                    enumerable: !0,
                    get: function() {
                        return b
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Size must be between 0 and 100.");
                        b = t,
                        this.hasBeenReset = !0
                    }
                },
                align: {
                    enumerable: !0,
                    get: function() {
                        return y
                    },
                    set: function(t) {
                        var e = n(t);
                        if (!e)
                            throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                        y = e,
                        this.hasBeenReset = !0
                    }
                }
            }),
            this.displayState = void 0
        }
        i.prototype.getCueAsHTML = function() {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }
        ,
        t.exports = i
    },
    3710: function(t) {
        var e = {
            "": !0,
            up: !0
        };
        function r(t) {
            return "number" === typeof t && t >= 0 && t <= 100
        }
        t.exports = function() {
            var t = 100
              , n = 3
              , i = 0
              , a = 100
              , o = 0
              , s = 100
              , u = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (!r(e))
                            throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        if ("number" !== typeof t)
                            throw new TypeError("Lines must be set to a number.");
                        n = t
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if (!r(t))
                            throw new Error("RegionAnchorX must be between 0 and 100.");
                        a = t
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (!r(t))
                            throw new Error("RegionAnchorY must be between 0 and 100.");
                        i = t
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        if (!r(t))
                            throw new Error("ViewportAnchorY must be between 0 and 100.");
                        s = t
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        if (!r(t))
                            throw new Error("ViewportAnchorX must be between 0 and 100.");
                        o = t
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        var r = function(t) {
                            return "string" === typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
                        }(t);
                        !1 === r ? console.warn("Scroll: an invalid or illegal string was specified.") : u = r
                    }
                }
            })
        }
    },
    7462: function(t, e, r) {
        "use strict";
        function n() {
            return (n = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
        r.d(e, {
            Z: function() {
                return n
            }
        })
    },
    5785: function(t, e, r) {
        "use strict";
        function n(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function i(t) {
            return function(t) {
                if (Array.isArray(t))
                    return n(t)
            }(t) || function(t) {
                if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" === typeof t)
                        return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        r.d(e, {
            Z: function() {
                return i
            }
        })
    }
}]);