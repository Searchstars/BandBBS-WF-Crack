(function(e) {
    function t(t) {
        for (var i, r, s = t[0], c = t[1], l = t[2], u = 0, f = []; u < s.length; u++)
            r = s[u],
            o[r] && f.push(o[r][0]),
            o[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        d && d(t);
        while (f.length)
            f.shift()();
        return a.push.apply(a, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (i = !1)
            }
            i && (a.splice(t--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var i = {}
      , o = {
        index: 0
    }
      , a = [];
    function r(e) {
        return s.p + "/BandBBS-WF-Crack/h5/static/js/" + ({
            "pages-Bluetooth-Bluetooth": "pages-Bluetooth-Bluetooth",
            "pages-about-about": "pages-about-about",
            "pages-about-adDetail": "pages-about-adDetail",
            "pages-about-declaration-declaration": "pages-about-declaration-declaration",
            "pages-about-donate-donate": "pages-about-donate-donate",
            "pages-about-donate_apply-donate_apply": "pages-about-donate_apply-donate_apply",
            "pages-about-downloadHistory-downloadHistory": "pages-about-downloadHistory-downloadHistory",
            "pages-about-favourite-favourite": "pages-about-favourite-favourite",
            "pages-about-help-help": "pages-about-help-help",
            "pages-about-installed-installed": "pages-about-installed-installed",
            "pages-about-myBin-myBin": "pages-about-myBin-myBin",
            "pages-about-notice": "pages-about-notice",
            "pages-about-setting-setting": "pages-about-setting-setting",
            "pages-about-updateHistory-updateHistory": "pages-about-updateHistory-updateHistory",
            "pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy": "pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy",
            "pages-about-uploadBin-uploadBin": "pages-about-uploadBin-uploadBin",
            "pages-index-index": "pages-index-index",
            "pages-res-resdiy": "pages-res-resdiy",
            "pages-basis-basis": "pages-basis-basis",
            "pages-detail-detail~pages-res-resDetail": "pages-detail-detail~pages-res-resDetail",
            "pages-detail-detail": "pages-detail-detail",
            "pages-res-resDetail": "pages-res-resDetail",
            "pages-download-download": "pages-download-download",
            "pages-res-resList": "pages-res-resList",
            "pages-tags-cloud-cloud": "pages-tags-cloud-cloud",
            "pages-tags-detail-detail": "pages-tags-detail-detail",
            "pages-tags-list-list": "pages-tags-list-list",
            "pages-update-index": "pages-update-index"
        }[e] || e) + "." + {
            "pages-Bluetooth-Bluetooth": "8c57c27d",
            "pages-about-about": "c4be8b81",
            "pages-about-adDetail": "ae0770e0",
            "pages-about-declaration-declaration": "7e478228",
            "pages-about-donate-donate": "65943849",
            "pages-about-donate_apply-donate_apply": "a47714ff",
            "pages-about-downloadHistory-downloadHistory": "9d054fe6",
            "pages-about-favourite-favourite": "fbc092d0",
            "pages-about-help-help": "dea3a710",
            "pages-about-installed-installed": "b0eb43bd",
            "pages-about-myBin-myBin": "cafb0242",
            "pages-about-notice": "4c23f374",
            "pages-about-setting-setting": "84b7d6f6",
            "pages-about-updateHistory-updateHistory": "240b38c8",
            "pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy": "634f6ab1",
            "pages-about-uploadBin-uploadBin": "77da69f9",
            "pages-index-index": "07f3e50e",
            "pages-res-resdiy": "1c969472",
            "pages-basis-basis": "c4d1f595",
            "pages-detail-detail~pages-res-resDetail": "a9d24ec1",
            "pages-detail-detail": "bda0e8e3",
            "pages-res-resDetail": "97c7ee94",
            "pages-download-download": "ef7b879d",
            "pages-res-resList": "e172d756",
            "pages-tags-cloud-cloud": "d37633c1",
            "pages-tags-detail-detail": "2945d5d4",
            "pages-tags-list-list": "8a8c696c",
            "pages-update-index": "472b10c3"
        }[e] + ".js"
    }
    function s(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var t = []
          , n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise(function(t, i) {
                    n = o[e] = [t, i]
                }
                );
                t.push(n[2] = i);
                var a, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                s.nc && c.setAttribute("nonce", s.nc),
                c.src = r(e),
                a = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , a = t && t.target && t.target.src
                              , r = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + a + ")");
                            r.type = i,
                            r.request = a,
                            n[1](r)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = a,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = i,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                s.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "/h5/",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var u = 0; u < c.length; u++)
        t(c[u]);
    var d = l;
    a.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("e4ad")
    },
    "018f": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, ".tools[data-v-d60740be]{padding-top:50px;padding-bottom:60px}.cu-item[data-v-d60740be]{background:#fff;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eee}.cu-item .content[data-v-d60740be]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}", ""])
    },
    "0865": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("821e")
          , o = n("e660");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("a885");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
        t["default"] = s.exports
    },
    "0add": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, "uni-image[data-v-12361250]{height:120px;width:120px}.content[data-v-12361250]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.hint[data-v-12361250]{display:block;text-align:center}", ""])
    },
    1086: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("a481"),
        n("6b54"),
        n("87b3"),
        n("34ef"),
        n("386d");
        var o = i(n("8992"))
          , a = {
            components: {
                cmdProgress: o.default
            },
            data: function() {
                return {
                    txtMsg: "查找设备",
                    txtMsg2: "",
                    txtMsg3: "",
                    percent: 0,
                    state: 0,
                    searchtime: 0,
                    checkbgtime: 0,
                    modalName: "",
                    deviceId: "",
                    deviceName: "",
                    fwtype: 0,
                    serviceId: "00001530-0000-3512-2118-0009AF100700",
                    characteristicId: "00001531-0000-3512-2118-0009AF100700",
                    characteristicIdData: "00001532-0000-3512-2118-0009AF100700",
                    fileDownloadUrl: "",
                    crcCode: "",
                    fwBuff: [],
                    errFlag: !1,
                    persent: 0,
                    sendArray: [],
                    sendArrayIndex: 0,
                    sending: !1,
                    working: !1,
                    maxLength: 1,
                    deviceArray: [],
                    switchA: !0
                }
            },
            methods: {
                show: function(e) {
                    this.modalName = "Modal";
                    var t = this;
                    setTimeout(function() {
                        t.init(e)
                    }, 100)
                },
                close: function() {
                    console.log("close"),
                    this.modalName = ""
                },
                init: function(e) {
                    this.deviceId = uni.getStorageSync("CONNECT_DEVICE"),
                    this.fileDownloadUrl = "",
                    this.crcCode = "",
                    this.fwBuff = [],
                    this.errFlag = !1,
                    this.persent = 0,
                    this.sendArray = new Array,
                    this.sendArrayIndex = 0,
                    this.sending = !1,
                    this.working = !1,
                    this.maxLength = 1,
                    this.state = 0,
                    this.searchtime = 0,
                    this.percent = 0,
                    this.deviceArray = new Array,
                    this.txtMsg = "查找设备",
                    this.txtMsg2 = "",
                    this.txtMsg3 = "",
                    this.checkbgtime = 0,
                    this.fileDownloadUrl = e;
                    var t = this;
                    this.blue_util.setProcessCb = function(e) {
                        t.percent = e
                    }
                    ,
                    this.blue_util.deviceId ? this.connectDevice() : this.state = 0
                },
                errorMsg: function(e) {
                    uni.showToast({
                        title: e,
                        duration: 3e3,
                        icon: "none"
                    }),
                    console.log(e);
                    var t = this;
                    setTimeout(function() {
                        t.close()
                    }, 100)
                },
                onProgressClick: function() {
                    0 == this.state ? this.search() : 4 == this.state && this.downloadFile()
                },
                SwitchA: function(e) {
                    this.switchA = e.detail.value
                },
                ab2hex: function(e) {
                    var t = Array.prototype.map.call(new Uint8Array(e), function(e) {
                        return ("00" + e.toString(16)).slice(-2)
                    });
                    return t.join("")
                },
                ab2bytes: function(e) {
                    var t = Array.prototype.map.call(new Uint8Array(e), function(e) {
                        return e
                    });
                    return t
                },
                search: function() {
                    this.deviceId = "";
                    var e = this;
                    this.txtMsg = "查找设备",
                    this.txtMsg2 = "",
                    this.blue_util.connect(function() {
                        e.connectDevice()
                    })
                },
                connectDevice: function() {
                    this.serviceId,
                    this.characteristicId;
                    var e = this;
                    this.percent = 0,
                    this.state = 4,
                    this.deviceId = this.blue_util.deviceId,
                    this.deviceName = this.blue_util.deviceName,
                    e.txtMsg = "点击安装",
                    e.txtMsg2 = ""
                },
                startUpload: function() {
                    this.txtMsg = "安装中";
                    var e = this;
                    this.blue_util.install(this.switchA, function() {
                        uni.showToast({
                            title: "安装成功",
                            duration: 2e3,
                            icon: "none"
                        }),
                        e.state = 6,
                        e.close()
                    }, function() {
                        e.errorMsg("安装失败,请取消极速安装后重试")
                    })
                },
                downloadFile: function() {
                    var e = this
                      , t = this;
                    this.txtMsg = "下载中",
                    this.state = 5;
                    var n = this.fileDownloadUrl.replace("http://watchface.private.pingx.tech/", "https://res.mibandtool.club/");
                    this.$http.ajax({
                        path: n + "&test=1",
                        type: "get",
                        useBaseUrl: !1
                    }).then(function(i) {
                        e.$http.ajax({
                            path: n,
                            type: "get",
                            useBaseUrl: !1,
                            responseType: "arraybuffer"
                        }).then(function(e) {
                            var n = new Uint8Array(e);
                            t.blue_util.initByteArray(t.switchA, n),
                            t.txtMsg = "安装中",
                            setTimeout(function() {
                                t.startUpload()
                            }, 100)
                        }, function(e) {
                            console.log(e),
                            t.connectDevice(),
                            t.errorMsg("文件下载失败")
                        })
                    }, function(e) {
                        console.log(e),
                        t.connectDevice(),
                        t.errorMsg("文件下载失败")
                    })
                }
            }
        };
        t.default = a
    },
    "167b": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "tools"
            }, [n("v-uni-view", {
                staticClass: "cu-bar bg-white"
            }, [n("v-uni-view", {
                staticClass: "action border-title"
            }, [n("v-uni-text", {
                staticClass: "text-xl text-bold"
            }, [e._v("其他工具/教程")]), n("v-uni-text", {
                staticClass: "bg-grey",
                staticStyle: {
                    width: "2rem"
                }
            })], 1)], 1), e.tools && e.tools.length > 0 ? n("v-uni-view", e._l(e.tools, function(t, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "cu-item",
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.openUrl(t.linkurl)
                        }
                    }
                }, [n("v-uni-view", {
                    staticClass: "content padding-tb-sm"
                }, [n("v-uni-view", [n("v-uni-text", {
                    staticClass: "text-blue margin-right-xs"
                }), e._v(e._s(t.title))], 1), n("v-uni-view", {
                    staticClass: "text-gray text-sm"
                }, [n("v-uni-text", {
                    staticClass: "margin-right-xs"
                }), e._v(e._s(t.content))], 1)], 1), n("v-uni-view", {
                    staticClass: "action"
                }, [n("v-uni-text", {
                    staticClass: "lg text-gray cuIcon-right"
                })], 1)], 1)
            }), 1) : e._e(), n("tki-file-manager", {
                ref: "filemanager",
                on: {
                    result: function(t) {
                        t = e.$handleEvent(t),
                        e.resultPath(t)
                    }
                }
            })], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "167d": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, ".bbs[data-v-acada98a]{padding-top:50px;padding-bottom:60px}", ""])
    },
    1962: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "cmd-progress cmd-progress-default",
                class: e.setStatusClass
            }, ["circle" == e.type || "dashboard" == e.type ? [n("v-uni-view", {
                staticClass: "cmd-progress cmd-progress-default",
                class: e.setStatusClass
            }, [n("v-uni-view", {
                staticClass: "cmd-progress-inner",
                style: e.setCircleStyle
            }, [n("svg", {
                staticClass: "cmd-progress-circle",
                attrs: {
                    viewBox: "0 0 100 100"
                }
            }, [n("path", {
                staticClass: "cmd-progress-circle-trail",
                style: e.setCircleTrailStyle,
                attrs: {
                    d: e.setCirclePath,
                    stroke: "#f3f3f3",
                    "stroke-linecap": e.strokeShape,
                    "stroke-width": e.strokeWidth,
                    "fill-opacity": "0"
                }
            }), n("path", {
                staticClass: "cmd-progress-circle-path",
                style: e.setCirclePathStyle,
                attrs: {
                    d: e.setCirclePath,
                    "stroke-linecap": e.strokeShape,
                    "stroke-width": e.strokeWidth,
                    "fill-opacity": "0"
                }
            })]), e.showInfo && !e.custom ? [n("v-uni-text", {
                staticClass: "cmd-progress-text",
                attrs: {
                    title: e.setFormat
                }
            }, ["success" != e.status && "exception" != e.status && e.setProgress < 100 ? [e._v(e._s(e.setFormat))] : e._e(), "exception" == e.status ? n("svg", {
                attrs: {
                    viewBox: "64 64 896 896",
                    "data-icon": "close",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true"
                }
            }, [n("path", {
                attrs: {
                    d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                }
            })]) : e._e(), "success" == e.status || 100 == e.setProgress ? n("svg", {
                style: {
                    color: e.strokeColor ? e.strokeColor : ""
                },
                attrs: {
                    viewBox: "64 64 896 896",
                    "data-icon": "check",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true"
                }
            }, [n("path", {
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            })]) : e._e()], 2)] : [n("v-uni-view", {
                staticClass: "cmd-progress-custom"
            }, [e._t("default")], 2)]], 2)], 1)] : e._e(), "line" == e.type ? [n("v-uni-view", {
                staticClass: "cmd-progress-outer"
            }, [n("v-uni-view", {
                staticClass: "cmd-progress-inner",
                style: {
                    "border-radius": "square" == e.strokeShape ? 0 : "100px"
                }
            }, [n("v-uni-view", {
                staticClass: "cmd-progress-bg",
                style: e.setLineStyle
            }), e.successPercent ? n("v-uni-view", {
                staticClass: "cmd-progress-success-bg",
                style: e.setLineSuccessStyle
            }) : e._e()], 1)], 1), e.showInfo && !e.custom ? [n("v-uni-text", {
                staticClass: "cmd-progress-text",
                attrs: {
                    title: e.setFormat
                }
            }, ["success" != e.status && "exception" != e.status && e.setProgress < 100 ? [e._v(e._s(e.setFormat))] : e._e(), "exception" == e.status ? n("svg", {
                attrs: {
                    viewBox: "64 64 896 896",
                    "data-icon": "close-circle",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true"
                }
            }, [n("path", {
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                }
            })]) : e._e(), "success" == e.status || 100 == e.setProgress ? n("svg", {
                style: {
                    color: e.strokeColor ? e.strokeColor : ""
                },
                attrs: {
                    viewBox: "64 64 896 896",
                    "data-icon": "check-circle",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true"
                }
            }, [n("path", {
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                }
            })]) : e._e()], 2)] : [n("v-uni-view", {
                staticClass: "cmd-progress-custom"
            }, [e._t("default")], 2)]] : e._e()], 2)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "1c02": function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("28a5");
        var o = i(n("f499"));
        n("262f"),
        n("7f7f");
        var a = i(n("e814"));
        n("6b54"),
        n("87b3"),
        n("34ef"),
        n("386d");
        var r = i(n("8992"))
          , s = {
            components: {
                cmdProgress: r.default
            },
            data: function() {
                return {
                    txtMsg: "查找设备",
                    txtMsg2: "",
                    txtMsg3: "",
                    percent: 0,
                    state: 0,
                    searchtime: 0,
                    checkbgtime: 0,
                    modalName: "",
                    deviceId: "",
                    fwtype: 0,
                    serviceId: "00001530-0000-3512-2118-0009AF100700",
                    characteristicId: "00001531-0000-3512-2118-0009AF100700",
                    characteristicIdData: "00001532-0000-3512-2118-0009AF100700",
                    fileDownloadUrl: "",
                    crcCode: "",
                    fwBuff: [],
                    errFlag: !1,
                    persent: 0,
                    sendArray: [],
                    sendArrayIndex: 0,
                    sending: !1,
                    working: !1,
                    maxLength: 1,
                    deviceArray: []
                }
            },
            methods: {
                show: function(e) {
                    this.modalName = "Modal";
                    var t = this;
                    setTimeout(function() {
                        t.init(e)
                    }, 100)
                },
                close: function() {
                    console.log("close"),
                    this.modalName = "",
                    wx.setKeepScreenOn({
                        keepScreenOn: !1
                    }),
                    wx.closeBluetoothAdapter({
                        success: function(e) {
                            console.log(e)
                        }
                    })
                },
                init: function(e) {
                    this.deviceId = uni.getStorageSync("CONNECT_DEVICE"),
                    this.fileDownloadUrl = "",
                    this.crcCode = "",
                    this.fwBuff = [],
                    this.errFlag = !1,
                    this.persent = 0,
                    this.sendArray = new Array,
                    this.sendArrayIndex = 0,
                    this.sending = !1,
                    this.working = !1,
                    this.maxLength = 1,
                    this.state = 0,
                    this.searchtime = 0,
                    this.percent = 0,
                    this.deviceArray = new Array,
                    this.txtMsg = "查找设备",
                    this.txtMsg2 = "",
                    this.txtMsg3 = "",
                    this.checkbgtime = 0,
                    this.fileDownloadUrl = e,
                    wx.setKeepScreenOn({
                        keepScreenOn: !0
                    });
                    var t = this;
                    this.deviceId && "" != this.deviceId ? wx.openBluetoothAdapter({
                        success: function(e) {
                            t.connectDevice(t.deviceId)
                        },
                        fail: function() {
                            t.errorMsg("无法获取蓝牙适配器")
                        }
                    }) : this.search()
                },
                errorMsg: function(e) {
                    uni.showToast({
                        title: e,
                        duration: 3e3,
                        icon: "none"
                    }),
                    console.log(e);
                    var t = this;
                    setTimeout(function() {
                        t.close()
                    }, 100)
                },
                onProgressClick: function() {
                    0 == this.state ? this.search() : 4 == this.state && this.downloadFile()
                },
                ab2hex: function(e) {
                    var t = Array.prototype.map.call(new Uint8Array(e), function(e) {
                        return ("00" + e.toString(16)).slice(-2)
                    });
                    return t.join("")
                },
                ab2bytes: function(e) {
                    var t = Array.prototype.map.call(new Uint8Array(e), function(e) {
                        return e
                    });
                    return t
                },
                search: function() {
                    this.deviceId = "";
                    var e = this;
                    this.txtMsg = "查找设备",
                    this.txtMsg2 = "",
                    wx.setKeepScreenOn({
                        keepScreenOn: !0
                    }),
                    e.state = 1,
                    wx.openBluetoothAdapter({
                        success: function(t) {
                            wx.startBluetoothDevicesDiscovery({
                                success: function(t) {
                                    console.log(t),
                                    e.searchtime = 0,
                                    e.timeInterval()
                                },
                                fail: function() {
                                    e.errorMsg("蓝牙搜索异常")
                                }
                            })
                        },
                        fail: function() {
                            e.errorMsg("无法获取蓝牙适配器")
                        }
                    })
                },
                timeInterval: function() {
                    var e = this;
                    this.searchtime < 20 && !this.deviceId ? (this.searchtime = this.searchtime + 1,
                    this.txtMsg2 = this.searchtime + "s",
                    this.percent = (0,
                    a.default)(100 * this.searchtime / 20),
                    wx.getBluetoothDevices({
                        success: function(t) {
                            if (console.log(t),
                            wx.hideLoading(),
                            t.devices)
                                for (var n = 0; n < t.devices.length; n++)
                                    "Mi Smart Band 4" == t.devices[n].name && e.addDevices(t.devices[n])
                        }
                    }),
                    setTimeout(function() {
                        e.timeInterval()
                    }, 1e3)) : (this.deviceId || (this.searchtime = 0,
                    this.txtMsg = "重新查找设备",
                    this.txtMsg2 = "",
                    this.state = 0,
                    wx.stopBluetoothDevicesDiscovery({
                        success: function(e) {
                            console.log(e)
                        }
                    })),
                    this.percent = 0)
                },
                checkFwBg: function() {
                    if (this.working)
                        console.log("working");
                    else if (this.checkbgtime < 15) {
                        this.checkbgtime = this.checkbgtime + 1;
                        var e = this;
                        setTimeout(function() {
                            e.checkFwBg()
                        }, 1e3)
                    } else
                        this.errorMsg("连接失败，请打开小米运动并将其服务常驻后台")
                },
                addDevices: function(e) {
                    if (e) {
                        var t = !1;
                        if (this.deviceArray)
                            for (var n = 0; n < this.deviceArray.length; n++)
                                this.deviceArray[n].deviceId == e.deviceId && (t = !0);
                        t || this.deviceArray.push(e)
                    }
                },
                connectDevice: function(e) {
                    var t = this.serviceId
                      , n = this.characteristicId
                      , i = this;
                    this.percent = 0,
                    this.state = 4,
                    wx.stopBluetoothDevicesDiscovery({
                        success: function(e) {
                            console.log(e)
                        }
                    }),
                    wx.createBLEConnection({
                        deviceId: e,
                        success: function(o) {
                            wx.showToast({
                                title: "连接设备成功",
                                icon: "success",
                                duration: 1e3
                            }),
                            wx.getBLEDeviceServices({
                                deviceId: e,
                                success: function(o) {
                                    console.log("device services:", o.services),
                                    wx.getBLEDeviceCharacteristics({
                                        deviceId: e,
                                        serviceId: t,
                                        success: function(o) {
                                            console.log("device getBLEDeviceCharacteristics:", o.characteristics),
                                            wx.notifyBLECharacteristicValueChange({
                                                state: !0,
                                                deviceId: e,
                                                serviceId: t,
                                                characteristicId: n,
                                                success: function(t) {
                                                    i.txtMsg = "点击安装",
                                                    i.txtMsg2 = "",
                                                    i.deviceId = e,
                                                    uni.setStorageSync("CONNECT_DEVICE", e),
                                                    console.log("notifyBLECharacteristicValueChange success", t.errMsg),
                                                    wx.onBLECharacteristicValueChange(function(e) {
                                                        console.log("characteristic ".concat(e.characteristicId, " has changed, now is ").concat(e.value)),
                                                        console.log(i.ab2hex(e.value)),
                                                        n.toLowerCase() == e.characteristicId.toLowerCase() && i.onFWValueChange(i.ab2bytes(e.value))
                                                    })
                                                }
                                            })
                                        },
                                        fail: function(e) {
                                            console.log(e),
                                            uni.setStorageSync("CONNECT_DEVICE", null),
                                            i.errorMsg("连接设备异常")
                                        }
                                    })
                                }
                            })
                        },
                        fail: function() {
                            uni.setStorageSync("CONNECT_DEVICE", null),
                            i.errorMsg("连接设备异常")
                        }
                    })
                },
                onFWValueChange: function(e) {
                    var t = e[0]
                      , n = e[1]
                      , i = e[2]
                      , o = this;
                    if (16 == t && 1 == i)
                        if (1 == n) {
                            if (o.working)
                                return;
                            o.working = !0,
                            o.sendFWData()
                        } else
                            3 == n ? o.sendCheckSum() : 4 == n && (console.log("success"),
                            console.log("receive fwchange code 3"),
                            wx.showToast({
                                title: "安装成功",
                                duration: 2e3,
                                icon: "none"
                            }),
                            this.state = 6,
                            this.close());
                    else
                        console.log("upload error"),
                        this.errFlag = !0,
                        this.errorMsg("同步失败")
                },
                sendFWData: function() {
                    var e = [3, 1];
                    this.sendDataOnce(this.serviceId, this.characteristicId, e);
                    var t = this.fwBuff
                      , n = 180
                      , i = (0,
                    a.default)(t.length / n);
                    console.log("data length=" + t.length);
                    this.maxLength = i;
                    for (var o = 0; o < i; o++) {
                        if (this.errFlag)
                            return void console.log("send error:" + o + "/" + i);
                        var r = o * n;
                        this.sendDataOnce(this.serviceId, this.characteristicIdData, null, r, n),
                        o > 0 && o % 100 == 0 && this.sendDataOnce(this.serviceId, this.characteristicId, [0])
                    }
                    var s = i * n;
                    if (s < t.length) {
                        var c = s
                          , l = t.length - s;
                        this.sendDataOnce(this.serviceId, this.characteristicIdData, null, c, l)
                    }
                    this.sendDataOnce(this.serviceId, this.characteristicId, [0])
                },
                sendDataOnce: function(e, t, n, i, o) {
                    n ? this.sendArray.push({
                        serviceId: e,
                        characteristicId: t,
                        arry: n
                    }) : this.sendArray.push({
                        serviceId: e,
                        characteristicId: t,
                        startIndex: i,
                        count: o
                    });
                    var a = this;
                    this.sending || setTimeout(function() {
                        a.doSendData()
                    }, 0)
                },
                doSendData: function() {
                    if (!this.sending)
                        if (this.sendArray.length > 0 && this.sendArrayIndex < this.sendArray.length) {
                            this.sending = !0;
                            var e = this.sendArray[this.sendArrayIndex]
                              , t = e.serviceId
                              , n = e.characteristicId
                              , i = e.arry;
                            if (!i) {
                                var r = e.startIndex
                                  , s = e.count;
                                console.log("startIndex :" + r),
                                console.log("count :" + s),
                                i = new Array;
                                for (var c = 0; c < s; c++)
                                    i.push(this.fwBuff[r + c])
                            }
                            for (var l = new ArrayBuffer(i.length), u = new DataView(l), d = 0; d < i.length; d++)
                                u.setUint8(d, i[d]);
                            var f = this;
                            console.log("sendData :" + this.ab2hex(l)),
                            console.log(t),
                            console.log(n),
                            console.log(f.deviceId),
                            wx.writeBLECharacteristicValue({
                                deviceId: f.deviceId,
                                serviceId: t,
                                characteristicId: n,
                                value: l,
                                success: function(e) {
                                    if (f.sending = !1,
                                    f.sendArrayIndex = f.sendArrayIndex + 1,
                                    f.working) {
                                        var t = f.sendArray.length
                                          , n = f.sendArrayIndex
                                          , i = (0,
                                        a.default)(100 * n / t);
                                        f.percent != i && (f.txtMsg2 = (0,
                                        a.default)(100 * n / t) + "%",
                                        f.percent = (0,
                                        a.default)(100 * n / t))
                                    }
                                    f.doSendData()
                                },
                                fail: function(e) {
                                    f.sending = !1,
                                    f.sendArray = [],
                                    console.log((0,
                                    o.default)(e))
                                }
                            })
                        } else
                            this.sendArray = new Array,
                            this.sendArrayIndex = 0,
                            console.log("发送结束")
                },
                sendWF: function(e) {
                    1 == this.checkFW(e) && (this.fwBuff = e,
                    this.startUploadFw())
                },
                checkFW: function(e) {
                    return console.log("checkFW"),
                    e.length > 10 && 72 == e[0] && 77 == e[1] && 68 == e[2] && 73 == e[3] && 65 == e[4] && 76 == e[5] ? (this.fwtype = 8,
                    1) : e.length > 20 && 78 == e[13] && 69 == e[14] && 82 == e[15] && 69 == e[16] && 83 == e[17] ? (this.fwtype = 130,
                    1) : 0
                },
                getCrc: function(e) {
                    var t = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"
                      , n = 0
                      , i = 0
                      , o = 0;
                    n ^= -1;
                    for (var a = 0, r = e.length; a < r; a++)
                        i = 255 & (n ^ e[a]),
                        o = "0x" + t.substr(9 * i, 8),
                        n = n >>> 8 ^ o;
                    return -1 ^ n
                },
                startUpload: function(e) {
                    e && (this.crcCode = this.getCrc(e),
                    console.log("crcCode =" + this.crcCode),
                    console.log("sendWF"),
                    this.txtMsg = "安装中",
                    this.sendWF(e))
                },
                startUploadFw: function() {
                    console.log("startUpload");
                    var e = this.fwBuff.length
                      , t = this.crcCode
                      , n = [1, this.fwtype, e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
                    this.errFlag = !1,
                    this.checkbgtime = 0,
                    this.checkFwBg(),
                    this.sendDataOnce(this.serviceId, this.characteristicId, n)
                },
                sendCheckSum: function() {
                    var e = this.crcCode
                      , t = [4, e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 4095];
                    console.log("sendCheckSum :" + e),
                    this.sendDataOnce(this.serviceId, this.characteristicId, t)
                },
                downloadFile: function() {
                    var e = this
                      , t = this;
                    this.txtMsg = "下载中",
                    this.state = 5,
                    this.$http.ajax({
                        path: this.fileDownloadUrl + "&test=1",
                        type: "get",
                        useBaseUrl: !1
                    }).then(function(n) {
                        var i = e.fileDownloadUrl.split("?")[0]
                          , o = wx.downloadFile({
                            url: i,
                            success: function(e) {
                                if (console.log(e),
                                200 === e.statusCode) {
                                    t.txtMsg = "处理中",
                                    t.txtMsg2 = "",
                                    console.log(e);
                                    try {
                                        for (var n = wx.getFileSystemManager(), i = n.readFileSync(e.tempFilePath), o = new Array(i.byteLength), a = new DataView(i), r = 0; r < i.byteLength; r++)
                                            o[r] = a.getUint8(r);
                                        i = null,
                                        t.txtMsg = "安装中",
                                        setTimeout(function() {
                                            t.startUpload(o)
                                        }, 100)
                                    } catch (s) {
                                        console.log(s),
                                        t.errorMsg("文件下载失败")
                                    }
                                } else
                                    t.errorMsg("文件下载失败")
                            },
                            fail: function(e) {
                                console.log(e),
                                t.errorMsg("文件下载失败")
                            }
                        });
                        o.onProgressUpdate(function(e) {
                            t.txtMsg2 = e.progress + "%",
                            t.percent = e.progress
                        })
                    }, function(e) {
                        console.log(e),
                        t.errorMsg("文件下载失败")
                    })
                }
            }
        };
        t.default = s
    },
    "1e19": function(e, t, n) {
        "use strict";
        n("a481"),
        function() {
            var e = null !== t && "number" != typeof t.nodeType ? t : "undefined" != typeof self ? self : $.global
              , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function i(e) {
                this.message = e
            }
            (i.prototype = new Error).name = "InvalidCharacterError",
            e.btoa || (e.btoa = function(e) {
                for (var t, o, a = String(e), r = 0, s = n, c = ""; a.charAt(0 | r) || (s = "=",
                r % 1); c += s.charAt(63 & t >> 8 - r % 1 * 8)) {
                    if (255 < (o = a.charCodeAt(r += .75)))
                        throw new i("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    t = t << 8 | o
                }
                return c
            }
            ),
            e.atob || (e.atob = function(e) {
                var t = String(e).replace(/[=]+$/, "");
                if (t.length % 4 == 1)
                    throw new i("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var o, a, r = 0, s = 0, c = ""; a = t.charAt(s++); ~a && (o = r % 4 ? 64 * o + a : a,
                r++ % 4) ? c += String.fromCharCode(255 & o >> (-2 * r & 6)) : 0)
                    a = n.indexOf(a);
                return c
            }
            )
        }()
    },
    2523: function(e, t, n) {
        var i = n("89f9");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("3a0cd95a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "29a1": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3720")
          , o = n("ca8f");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "14d7d146", null);
        t["default"] = s.exports
    },
    "2c96": function(e, t, n) {
        "use strict";
        var i = n("be97")
          , o = n.n(i);
        o.a
    },
    "2f66": function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("7f7f");
        var o = i(n("c7a5"))
          , a = {}
          , r = {}
          , s = {}
          , c = 0;
        a.openActionSheet = function(e, t, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            r = n,
            s = i;
            var c = [];
            c.push(r.explore.retween),
            c.push(r.explore.screenshot),
            c.push(r.share.add_favourite),
            o && c.push(r.explore.report);
            var l = s.isManagerFun();
            l && c.push("标记分类"),
            uni.showActionSheet({
                itemList: c,
                success: function(n) {
                    switch (n.tapIndex) {
                    case 0:
                        a.textShare(e, t);
                        break;
                    case 1:
                        uni.showToast({
                            icon: "none",
                            title: r.explore.screenshot_hint
                        });
                        break;
                    case 2:
                        s.isLoginFun() ? s.$http.ajax({
                            path: "favourite/add",
                            type: "post",
                            data: {
                                id: e,
                                nickname: t.nickname,
                                name: t.name,
                                preview: t.preview,
                                type: t.type
                            }
                        }).then(function(e) {
                            uni.showToast({
                                title: r.share.add_success
                            })
                        }) : uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        });
                        break;
                    case 3:
                        a.report(e, t);
                        break;
                    case 4:
                        setTimeout(function() {
                            a.dotag(e, t)
                        }, 10);
                        break
                    }
                },
                fail: function(e) {
                    console.log(e.errMsg)
                }
            })
        }
        ,
        a.report = function(e, t) {
            uni.showModal({
                title: r.explore.report,
                content: r.explore.report_hint,
                success: function(t) {
                    t.confirm ? (s.$http.ajax({
                        path: "watchface/report",
                        type: "post",
                        data: {
                            id: e
                        }
                    }).then(function(e) {}),
                    uni.showToast({
                        icon: "none",
                        title: r.explore.report_success
                    })) : t.cancel && console.log("用户点击取消")
                }
            })
        }
        ,
        a.textShare = function(e, t) {
            var n = [];
            n.push(r.share.copyLink);
            var i = "【" + r.share.hint_1 + t.name + " @" + t.nickname + "】http://watchface.pingx.tech/h5/#/pages/detail/detail?id=" + e + " " + r.share.hint_2 + "₳" + o.default.encrypt(e) + "₳" + r.share.hint_3;
            uni.showActionSheet({
                itemList: n,
                success: function(e) {
                    switch (e.tapIndex) {
                    case 0:
                        uni.setClipboardData({
                            data: i,
                            success: function() {
                                uni.showToast({
                                    icon: "none",
                                    title: r.share.copySuccess
                                })
                            }
                        }),
                        uni.setStorageSync("share_token", i);
                        break
                    }
                },
                fail: function(e) {
                    console.log(e.errMsg)
                }
            })
        }
        ,
        a.dotag = function(e, t) {
            for (var n = s.getTagsListFun(), i = [], o = 0; o < 4; o++) {
                var r = o + 1 + 4 * c;
                n[r] ? i.push(n[r].name) : i.push("无")
            }
            i.push("上一页"),
            i.push("下一页"),
            uni.showActionSheet({
                itemList: i,
                success: function(i) {
                    if (4 == i.tapIndex)
                        c -= 1,
                        c < 0 && (c = 0),
                        a.dotag(e, t);
                    else if (5 == i.tapIndex)
                        c += 1,
                        a.dotag(e, t);
                    else {
                        var o = i.tapIndex + 1 + 4 * c;
                        if (n[o]) {
                            var r = n[o].id;
                            s.$http.ajax({
                                path: "watchface/updateTagById/" + e + "/" + r,
                                type: "get"
                            }).then(function(e) {}),
                            uni.showToast({
                                icon: "none",
                                title: "标记分类成功" + n[o].name
                            })
                        }
                    }
                },
                fail: function(e) {
                    console.log(e.errMsg)
                }
            })
        }
        ;
        var l = a;
        t.default = l
    },
    "327d": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("167b")
          , o = n("e72b");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("2c96");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "3ea7c220", null);
        t["default"] = s.exports
    },
    3347: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("966f")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    "34ac": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("f05d")
          , o = n("51ec");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "aea9c530", null);
        t["default"] = s.exports
    },
    3716: function(e, t, n) {
        var i = n("167d");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("3468528d", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    3720: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-modal",
                class: "Modal" == e.modalName ? "show" : ""
            }, [n("v-uni-view", {
                staticClass: "cu-load load-modal"
            }, [n("v-uni-view", {
                staticClass: "bg-white",
                staticStyle: {
                    "border-radius": "20upx"
                }
            }, [5 != e.state ? n("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end",
                staticStyle: {
                    "border-radius": "20upx"
                }
            }, [n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.close(t)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-close text-red"
            })], 1)], 1) : e._e(), n("v-uni-view", {
                staticClass: "padding-xl"
            }, [n("cmd-progress", {
                attrs: {
                    type: "circle",
                    percent: e.percent,
                    custom: "",
                    width: 150
                },
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.onProgressClick(t)
                    }
                }
            }, [n("v-uni-view", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [n("v-uni-view", {
                staticStyle: {
                    "font-size": "30upx"
                }
            }, [e._v(e._s(e.txtMsg))]), n("v-uni-view", {
                staticStyle: {
                    "font-size": "50upx",
                    "font-weight": "500",
                    "line-height": "50upx"
                }
            }, [e._v(e._s(e.txtMsg2))]), n("v-uni-view", {
                staticStyle: {
                    "font-size": "30upx",
                    "font-weight": "50"
                }
            }, [e._v(e._s(e.txtMsg3))])], 1)], 1), e.deviceId ? e._e() : n("v-uni-view", {
                staticClass: "cu-list menu"
            }, e._l(e.deviceArray, function(t, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "cu-item"
                }, [n("v-uni-view", {
                    staticClass: "content",
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.connectDevice(t.deviceId)
                        }
                    }
                }, [n("v-uni-text", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "font-size": "20upx"
                    }
                }, [e._v(e._s(t.deviceId))])], 1)], 1)
            }), 1), 0 == e.state || 1 == e.state ? n("v-uni-view", [n("v-uni-text", {
                staticClass: "text-grey",
                staticStyle: {
                    "font-size": "20upx"
                }
            }, [e._v("如搜索不到设备，请在小米运动中打开手环的蓝牙广播")])], 1) : e._e(), 4 == e.state || 5 == e.state ? n("v-uni-view", [n("v-uni-text", {
                staticClass: "text-grey",
                staticStyle: {
                    "font-size": "20upx"
                }
            }, [e._v("如安装不成功，请确认小米运动的后台运行权限")])], 1) : e._e()], 1)], 1)], 1)], 1)], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    3908: function(e, t, n) {
        "use strict";
        e.exports = {
            message: {
                app: {},
                index: {
                    search: "搜索錶盤主題",
                    announcement: "公告",
                    token: "檢測到分享口令",
                    token_hint: "是否跳轉到分享的錶盤詳情頁",
                    free_title: "免費軟件聲明",
                    free_hint: "該軟件完全免費，凡是出售該軟件的都是騙子！！！"
                },
                imageTool: {
                    choose: "重選",
                    close: "關閉",
                    rotate: "旋轉",
                    preview: "預覽",
                    upload: "上傳"
                },
                tabbar: {
                    make: "製作",
                    explore: "探索",
                    tool: "工具",
                    bandBBS: "資源",
                    about: "關於"
                },
                make: {
                    select_basis: "選擇底包",
                    select_basis_hint: "請選擇",
                    choose: "選擇錶盤圖片",
                    work_name: "名稱",
                    work_name_placeholder: "給你的錶盤取個名字吧",
                    work_desc: "簡介",
                    work_desc_placeholder: "簡單介紹下你的作品吧",
                    share: "分享錶盤",
                    time_setting: "時間設置",
                    unfinished: "開發中...",
                    step_setting: "步數設置",
                    plus_setting: "心率設置",
                    submit: "提交製作",
                    download: "下載地址",
                    download_hint: "請在底部選擇安裝方式",
                    empty_name_alert: "請填寫錶盤名字",
                    empty_img_alert: "請選擇錶盤圖片",
                    processing: "打包中...",
                    copied: "已複製到剪切板",
                    empty_watchface: "空白錶盤 (只有背景圖片)",
                    customs_json: "自定義 JSON",
                    json_error: "JSON 格式錯誤",
                    load_json: "加載底包 JSON",
                    custom_ele: "自定義元素",
                    auto_replace: "自動下載並替換官方Bin",
                    cancel: "取消",
                    background: "背景圖片",
                    select: "選擇",
                    basis_ele: "底包元素",
                    display: "顯示",
                    hide: "隱藏",
                    lock: "鎖定",
                    custom_ele_side: "自定義元素",
                    add: "添加",
                    confirm: "確定",
                    close: "關閉",
                    showOrHide: "是否顯示",
                    align_left: "左對齊",
                    center: "居中",
                    align_right: "右對齊",
                    custom_com: "選擇自定義組件",
                    select_color: "選擇顏色",
                    remove: "移除",
                    x: "X坐標",
                    y: "Y坐標",
                    scale: "縮放",
                    share_hint: "分享請先登錄，提交錶盤後，在關於-我的錶盤設置分享",
                    color_diy: "顏色 DIY",
                    dync_pic: "動態圖",
                    select_custom_ele: "請選擇修改的元素",
                    fps_delay: "幀間隔",
                    packed_color_count: "256色打包模式（減小打包體積，如打包不成功，請禁用此選項）",
                    anti_aliasing: "抗鋸齒（256色打包模式下，有效較少鋸齒，如打包後有遮擋，請禁用此選項）",
                    select_gif_hint: "請先選擇gif圖片",
                    confirm_submit: "確認提交",
                    hint_1: "選擇的底包，不支持此選項",
                    hint_2: "請先選擇底包",
                    hint_3: "打包失敗，請稍後重試",
                    hint_4: "請至少選擇一項",
                    hint_5: "圖片不能大於3M",
                    hint_6: "圖片處理中，請稍後",
                    hint_7: "圖片處理成功",
                    hint_8: "圖片處理失敗，請稍後再試",
                    donate_now: "捐贈我們",
                    ios_hint: "iOS用戶請點此跳轉至Safari下載"
                },
                explore: {
                    nav: ["最新上傳", "最多下載", "試試手氣", "編輯推薦"],
                    download: "下載",
                    processing: "下載中...",
                    loading: "加載中...",
                    download_option_1: "添加到我的錶盤",
                    download_option_2: "自動下載並替換官方Bin",
                    download_option_3: "下載",
                    download_option_4: "取消",
                    download_option_5: "自動替換官方bin(Amazfit)",
                    report: "舉報",
                    report_hint: "是否舉報當前內容",
                    report_success: "舉報成功",
                    share: "海報分享",
                    retween: "轉發分享",
                    screenshot: "截屏分享",
                    screenshot_hint: "請手動截圖",
                    bluetooth: "通過藍牙安裝"
                },
                about: {
                    login: "登錄",
                    tutorial: "使用教程",
                    update: "檢查更新",
                    app_download: "APP 下載",
                    web_tool: "網頁版製作器",
                    update_history: "更新歷史",
                    help: "幫助中心",
                    notice: "免責聲明",
                    aboutUs: "關於我們",
                    feedback: "意見反饋",
                    myWatchface: "我的錶盤",
                    setting: "設置選項",
                    setNickname: "設置昵稱",
                    setNicknameHint: "請輸入你的昵稱",
                    uuidLogin: "設備ID登錄",
                    qqLogin: "QQ登錄",
                    wechatLogin: "微信登錄",
                    hint_1: "暫不支持",
                    hint_2: "目前H5只支持設備ID登錄",
                    hint_3: "註冊失敗",
                    hint_4: "無法獲取設備ID",
                    hint_5: "請填寫昵稱",
                    hint_6: "註冊成功",
                    genrated_before: "累計已生成",
                    genrated_after: "個錶盤",
                    ios_shortcut: "IOS 安裝通道",
                    donate: "成為捐贈者",
                    installed: "已安裝表盤",
                    loginFirst: "請先登錄",
                    comingsoon: "敬請期待",
                    donor: "捐贈者",
                    favourite: "我的收藏",
                    firmware_install: "固件安裝",
                    tags: "分類歸檔",
                    tagsCloud: "收藏列表",
                    addFavourite: "收藏"
                },
                basis: {
                    back: "返回",
                    title: "選擇底包",
                    confirm: "選擇",
                    orgin: "默認",
                    upload_basis: "上傳底包"
                },
                tools: {
                    title: "APP內置工具",
                    tools_1: "自動替換官方Bin",
                    tools_1_desc: "選擇本地的一個Bin文件，可以自動替換官方的Bin。替換後，直接在對應APP同步對應的錶盤即可，免去手動替換的麻煩。該功能只支持安卓版APP。建議在內部存儲選擇bin文件",
                    tools_2: "在線解包",
                    tools_2_desc: "手機上傳即可解包",
                    tools_3: "在線打包",
                    tools_3_desc: "手機上傳即可打包",
                    MiBandTools: "米環4工具",
                    online_unpack_pack: "在線打包/解包工具",
                    online_unpack_pack_hint: "網頁版錶盤打包/解包工具，適用於深度DIY用戶",
                    heyplus: "黑加工具",
                    hint_1: "自動替換對應資源文件，無需手動操作。替換的目錄為Android/data/com.ryeex.flash/cache/firmware/設備號/固件版本號/",
                    huami: "華米GTR 47mm工具",
                    huami_2: "華米智能手錶青春版工具",
                    bluetooth: "固件升級",
                    bluetooth_desc: "通過藍牙直接刷入手環的錶盤、資源包、字庫"
                },
                aboutus: {
                    authors: "開發者信息",
                    blog: "博客",
                    bandBBS: "米壇社區",
                    desc: "國內的小米手環資源分享社區，成立於2019.3.23日，致力於分享優秀的原創資源和優秀教程。打造一個屬於你腕上的精彩世界！",
                    qq_group: "QQ群",
                    copy: "複製群號",
                    profile: "米壇主頁",
                    oneclick: "一鍵加群",
                    logoauthors: "Logo 設計",
                    weibo: "微博"
                },
                help: {
                    hint_1: "重要提示",
                    hint_1_desc: "刷環有風險，DIY需謹慎！",
                    hint_2: "自製錶盤怎麼用？",
                    hint_2_desc: "APP自帶自動下載替換官方Bin功能，但是某些情況下，會有兼容性的問題，可以手動下載自製錶盤bin文件來替換「內部存儲設備Androiddatacom.xiaomi.hm.healthfileswatch_skin_local」文件夾里的bin文件，文件名要和替換前一樣，在同一目錄下的用文本編輯器打開infos.xml，查看被替換的錶盤名字，最後到小米運動APP同步對應的錶盤即可。",
                    hint_2_desc_2: "替換錶盤Bin之前，必須至少同步過一款官方錶盤，因為這樣文件夾內才有下載的錶盤文件",
                    hint_3: "在哪可以下載更多製作精良的錶盤？",
                    hint_3_desc: "你可以去米壇論壇資源區尋找，也可以加入以下的群，群文件有分享。還可以了解大神們最新的開發進度和消息。",
                    hint_4: "為什麼APP有時候崩潰，不穩定？",
                    hint_4_desc: "開發組精力和財力有限，做不到兼容每一台手機，以及無法專門購買高性能服務器。如果有問題可以加群或者在米壇反饋。如果APP不能使用，可以使用網頁版製作器，與APP同步更新。",
                    hint_5: "為什麼官方錶盤的時間圖片不透明？",
                    hint_5_desc: "因為米環官方沒想過你會改背景圖。但是，開發組會慢慢完善這部分內容，處理成背景透明的素材。",
                    hint_6: "我想換回官方錶盤怎麼做",
                    hint_6_desc: "如果是沒有被替換過文件的錶盤，在小米運動APP同步錶盤即可。如果是被替換過Bin的錶盤，清空文件夾：內部存儲設備Androiddatacom.xiaomi.hm.healthfileswatch_skin_local，最後打開小米運動APP同步錶盤就會自動下載官方的Bin啦。",
                    hint_7: "iOS可以改錶盤么？",
                    hint_7_desc: "可以製作。開發組也提供了IOS越獄版APP安裝包，需要越獄才能使用。沒有上架Apple store是因為開發組精力有限，同時也沒有具備相關的開發設備和條件。可以使用開發組提供的網頁版工具，網頁版工具功能與APP相差無幾，並且與APP同步更新。",
                    hint_8: "為什麼有的錶盤下載之後也顯示添加成功了，然後在我的錶盤裏面找不到？",
                    hint_8_desc: "部分動態錶盤會有此問題，實際上bin已經添加到錶盤目錄了，由於小米運動APP不識別該bin文件，導致在列表中找不到，識別原理尚不清楚。只能用第二種替換bin方法來安裝先。",
                    hint_9: "爲什麽無法藍牙同步表盤/資源包/字庫？",
                    hint_9_desc: "在使用APP的固件升級功能時，小米運動APP需要打開駐留在後台運行，否則會刷入失敗",
                    hint_10: "小米運動APP更新到4.0.8版本後，我的表盤沒有了",
                    hint_10_desc: "可以使用自動替換bin來刷入表盤。還可以下載舊版本（4.0.7）小米運動會刷入舊的固件，我的表盤功能也能夠使用： http://t.cn/AiRk7ZmC"
                },
                mybin: {
                    myBin: "我的錶盤",
                    upload: "上傳",
                    share: "分享",
                    cancelShare: "取消",
                    delete: "刪除",
                    downloadHistory: "下載歷史",
                    clear: "清空",
                    block: "封禁",
                    normal: "正常",
                    download: "次下載",
                    revewing: "審核中",
                    share_hint: "未分享",
                    delete_success: "刪除成功",
                    delete_ask: "是否刪除",
                    delete_ask_title: "刪除"
                },
                uploadBin: {
                    upload: "上傳錶盤",
                    static_pic: "靜態預覽圖",
                    dyna_pic: "動態預覽圖",
                    select_bin: "Bin文件選擇",
                    choosed: "已選擇",
                    submit: "上傳",
                    hint_1: "文件類型錯誤",
                    hint_1_content: "請選擇Bin類型的錶盤文件",
                    hint_2: "選擇文件失敗",
                    hint_2_content: "最近/下載文件列表選擇文件可能有BUG，請嘗試通過內部存儲選擇文件",
                    hint_3: "請選擇bin文件",
                    upload_success: "上傳成功",
                    upload_success_hint: "已添加到我的錶盤列表",
                    upload_fail: "上傳失敗",
                    watchface_type: "錶盤類型"
                },
                dialog: {
                    addToMyWatchFace: {
                        title: "暫不支持",
                        content: "目前只支持小米手環4"
                    },
                    loginDialog: {
                        wating: "打開QQ中..."
                    }
                },
                watchType: {
                    MiBand7: "小米手環7"
                },
                setting: {
                    language: "語言",
                    logout: "註銷",
                    success: "成功"
                },
                update: {
                    desc: "更新摘要",
                    size: "更新大小",
                    market: "第三方市場下載",
                    update_now: "立即更新",
                    check: "檢查更新",
                    hint: "提示",
                    restart: "應用將重啟以完成更新",
                    update_unfinish: "更新尚未完成",
                    update_unfinish_hint: "您已下載更新包，但是還沒有完成安裝，請問是否要繼續安裝更新包呢？",
                    loading: "正在加載",
                    unkown: "未知",
                    none: "無",
                    no_update: "未找到發行版本",
                    find_update: "發現新版本",
                    newest: "當前是最新版了",
                    beta: "公測版",
                    release: "正式版",
                    cannt_find_url: "未找到下載地址",
                    process: "下載進度"
                },
                fileHelper: {
                    downloading: "下載中...",
                    file_type_error: "文件類型錯誤",
                    select_bin_hint: "請選擇Bin類型的錶盤文件",
                    not_support: "功能不支持",
                    not_support_hint: "該功能只支持安卓APP",
                    bin_not_found: "沒有找到已下載的官方Bin",
                    bin_not_found_hint: "查找官方bin失敗，沒有可供替換的bin，請至少同步一款官方錶盤",
                    replace_success: "替換成功",
                    replace_success_hint: "成功自動替換文件，請前往對應APP，同步以下錶盤即可完成自定義",
                    search_fail: "查找失敗",
                    search_fail_hint: "查找官方bin失敗，沒有可供替換的bin，請至少同步一款官方錶盤",
                    replace_fail: "替換失敗",
                    replace_fail_hint: "請手動替換錶盤",
                    download_fail: "下載資源失敗",
                    added_success: "添加成功",
                    added_success_hint: "請到小米運動APP - 我的錶盤同步錶盤 （如果沒發現，返回小米運動APP錶盤主界面重新進入我的錶盤試試）",
                    added_fail: "添加失敗",
                    download_fail_hint: "下載失敗，文件可能已被封禁",
                    get_dir_fail: "獲取目錄失敗",
                    get_dir_fail_hint: "請確保您已安裝對應APP，並且至少同步一款官方錶盤",
                    proceing: "執行中"
                },
                detail: {
                    title: "錶盤詳情",
                    Tutorials: "錶盤使用教程",
                    hint_1: "點擊下載按鈕會出現幾個選項，只選一種方法即可，推薦選第一個：",
                    hint_2: "【添加到我的錶盤】：添加成功後，會把當前的錶盤添加到小米運動APP-我的錶盤中，最後到我的錶盤中同步新添加的錶盤即可。",
                    hint_3: "【自動替換bin】：自動替換一個已下載的錶盤為當前的錶盤，然後根據替換提示去小米運動APP-錶盤中心同步提示的名字的錶盤即可。",
                    hint_4: "【下載】：直接下載bin文件，可以手動去到對應的目錄進行手動替換bin。",
                    hint_5: "更多問題請前往【關於】-【幫助中心】",
                    hint_6: "網頁版只能使用【下載】",
                    hint_7: "錶盤自定義工具",
                    hint_8: "打開APP",
                    hint_9: "【通過藍牙安裝】：省去其他步驟，直接通過藍牙同步表盤。需要小米運動APP在後台運行。"
                },
                share: {
                    qq_share: "QQ分享",
                    copyLink: "複製鏈接",
                    copySuccess: "複製成功",
                    shareSuccess: "分享成功",
                    hint_1: "錶盤分享：",
                    hint_2: "點擊鏈接，再選擇瀏覽器咑閞；或椱ァ製這段描述",
                    hint_3: "後到👉◇錶盤自定義工具👈",
                    add_favourite: "收藏錶盤",
                    add_success: "收藏成功"
                },
                updateHistory: {
                    u0729_1: "1. 新增華米GTR錶盤自定義功能，需在軟件上方先切換至GTR模塊；",
                    u0729_2: "(1). 支持數字錶盤、指針錶盤的編輯，實時預覽，編輯完成後一鍵打包下載或者替換至APP目錄；",
                    u0729_3: "(2). 支持GTR錶盤分享；",
                    u0729_4: "(3). 支持下載分享的錶盤文件，支持將錶盤文件一鍵替換至APP目錄；",
                    u0729_5: "2. 新增黑加手環，一鍵下載並替換資源包；",
                    u0806_1: "1. APP 正式改名為：錶盤自定義工具 （已經支持多種手環和手錶）",
                    u0806_2: "2. 在選擇底包的界面可以上傳自己的底包",
                    u0806_3: "3. 優化界面；",
                    u0806_4: "4. 增加設置界面；",
                    u0806_5: "5. 增加一種登錄方式，使用設備ID為賬號，如果選用該方式，請允許相關權限；",
                    u0806_6: "6. 完善翻譯。",
                    u0806_7: "7. 修復下載歷史沒有圖片的問題",
                    u0806_8: "8. 修復無法從最近選擇bin文件的BUG",
                    u0806_9: "9. 增加錶盤詳情頁，點擊錶盤圖片即可進入",
                    u0806_10: "10. 增加QQ分享，在錶盤詳情頁可以把錶盤轉發到QQ",
                    u0806_11: "11. 增加鏈接分享，在錶盤詳情頁可以複製鏈接和口令。複製描述後，打開APP可以直接跳轉到該錶盤。點擊鏈接可以打開H5版錶盤詳情",
                    u0806_12: "12. 支持網頁鏈接直接打開APP",
                    u0806_13: "13. 完善常見問題的內容",
                    u0907_1: "1. 增加通過藍牙同步米環4的錶盤、資源包、字庫",
                    u0907_2: "2. 增加查看和刪除已下載的錶盤",
                    u0907_3: "3. 增加小米手環、黑加手環資源包列表(因小米運動客戶端更新到4.0.8，導致資源包無法使用，建議將小米運動降級至4.0.7，否則資源包無法使用。我們會儘快適配新版本)",
                    u0907_4: "4. 支持資源包預覽",
                    u0907_5: "5. 增加捐贈入口",
                    u0907_6: "6. 增加錶盤收藏功能",
                    u0907_7: "7. 修復上傳文件選擇後沒有反應的BUG",
                    u0907_8: "8. 修復我的錶盤右滑無法刪除的BUG",
                    u0907_9: "9. 增加錶盤製作自定義元素X/Y位置微調功能",
                    u0907_10: "10. 優化元素調整界面表現",
                    u0907_11: "11. 修復正常錶盤顯示被封禁的狀態異常",
                    u0907_12: "12. 廢除懸浮廣告",
                    u0907_13: "13. 完善英文"
                },
                donation: {
                    apply_btn: "申請捐贈者",
                    alipay: "支付寶",
                    wechat: "微信",
                    title1: "捐贈說明",
                    content1: "錶盤自定義工具是免費的軟件。捐贈是完全自願的，如果你喜歡我們的軟件，請考慮捐贈支持我們。",
                    conetnt1_1: "請在右上角點擊申請捐贈者即可獲取捐贈者功能",
                    content1_2: "藍牙安裝功能因開發組精力有限，可能不適配所有手機，請先點擊【試用捐贈者功能】按鈕，並確認該功能是否適配您的機型。",
                    title2: "捐贈者功能",
                    content2_1: "捐贈",
                    content2_2: "壹次性捐贈15元（包括15元）以上",
                    content2_3: "即可獲得下面功能並且無時間限制：",
                    item1: "1. 支持APP內管理小米運動目錄下面的錶盤 (僅限安卓APP)",
                    item2: "2. 支持藍牙直接同步錶盤，資源包，字庫 (僅限安卓APP，微信小程序只支持同步表盤)",
                    item3: "3. 捐贈者作品可以優先上編輯推薦",
                    item4: "4. 捐贈者分享的錶盤會有明顯的標識",
                    item5: "5. 捐贈者可以收藏喜歡的錶盤",
                    item6: "6. 更多高級功能陸續添加中...",
                    title3: "資金用途",
                    title3_1: "軟件開發",
                    content3_1: "目前的開發工作包括添加新功能、修復問題、改善軟件在各個平台上的表現等。",
                    title3_2: "軟件維護",
                    content3_2: "為了保證軟件的使用速度和穩定性還需要支付高昂的服務器費用和CDN費用。",
                    title3_3: "硬件購置",
                    content3_3: "為了支持更多的智能手錶、手環，我們使用一部分資金來購置各種開發測試用的硬件。",
                    trade_no: "單號",
                    contact: "聯繫方式（可選）",
                    apply: "提交申請",
                    trade_no_hint: "支付寶、微信、Paypal轉賬產生的單號",
                    trade_no_empty: "請填寫單號",
                    apply_success: "申請成功",
                    donationFirst: "請先成為捐贈者才能使用該功能",
                    donationFirst_hint: "提示",
                    donationFirst_cancel: "取消",
                    donationFirst_confirm: "前往捐贈",
                    open: "打開",
                    try_feature: "試用捐贈者功能",
                    try_feature_hint: "試用一天的捐贈者功能，一天後恢復",
                    try_cancel: "取消",
                    try_confirm: "確定",
                    try_success: "申請成功",
                    try_hint_1: "您已是捐贈者",
                    try_hint_2: "捐贈者功能試用中",
                    try_hint_3: "捐贈者功能試用已過期",
                    only_donation: "該功能僅限捐贈者使用",
                    review_time: "審核時間：支付寶渠道約20分鐘，微信渠道約1到2天。如超過審核時間仍未獲得捐贈者頭銜，請確認訂單號並重新提交申請。",
                    save: "保存到相冊"
                },
                resource: {
                    mihuan4: "小米手環4普通版",
                    resource_pack: "資源包",
                    content: "更多的不一樣，源自資源包定製",
                    mihuan4NFC: "小米手環4NFC版",
                    heyplus: "黑加手環",
                    select_res: "選擇資源",
                    res_detail: "資源詳情",
                    preview_and_install: "預覽&安裝",
                    preview: "預覽",
                    auto_replace: "自動替換",
                    comment: "論壇內下載",
                    notice: "注意事項",
                    notce_item_1: "請確認該資源版本，固件版本與手環當前版本一致，否則刷入無效",
                    notice_item_2: "請確實該資源是否適用於您的設備，小米手環4/小米手環4NFC的資源包不通用",
                    notice_item_3: "刷後如不滿意，可再次刷官方包回退",
                    notice_tiem_4: "刷機有風險，請自行評估與承擔風險，本APP概不負責",
                    donwloading: "資源包下載中，請稍後",
                    replace_success: "替換成功"
                },
                bluetooth: {
                    firmware_install: "固件安裝",
                    forMiBand4: "小米手環4錶盤/資源包/字庫安裝"
                }
            }
        }
    },
    "3ae7": function(e, t, n) {
        "use strict";
        var i = n("288e")
          , o = i(n("d847"));
        n("2fdb"),
        n("a481"),
        n("4917"),
        n("55dd");
        var a = i(n("e814"))
          , r = i(n("4aa6"));
        n("7f7f"),
        n("28a5");
        var s = i(n("5176"));
        n("6762"),
        n("c5f6"),
        n("ac6a");
        var c = i(n("a4bb"))
          , l = i(n("f499"))
          , u = i(n("a745"));
        n("6b54"),
        n("87b3"),
        /*!
* vue-i18n v8.10.0
* (c) 2019 kazuya kawaguchi
* Released under the MIT License.
*/
        function(t, n) {
            e.exports = n()
        }(0, function() {
            var e = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher"];
            function t(e, t) {
                "undefined" !== typeof console && (console.warn("[vue-i18n] " + e),
                t && console.warn(t.stack))
            }
            function n(e) {
                return null !== e && "object" === typeof e
            }
            var i = Object.prototype.toString
              , d = "[object Object]";
            function f(e) {
                return i.call(e) === d
            }
            function g(e) {
                return null === e || void 0 === e
            }
            function h() {
                var e = []
                  , t = arguments.length;
                while (t--)
                    e[t] = arguments[t];
                var i = null
                  , o = null;
                return 1 === e.length ? n(e[0]) || (0,
                u.default)(e[0]) ? o = e[0] : "string" === typeof e[0] && (i = e[0]) : 2 === e.length && ("string" === typeof e[0] && (i = e[0]),
                (n(e[1]) || (0,
                u.default)(e[1])) && (o = e[1])),
                {
                    locale: i,
                    params: o
                }
            }
            function p(e) {
                return JSON.parse((0,
                l.default)(e))
            }
            function b(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1)
                        return e.splice(n, 1)
                }
            }
            var m = Object.prototype.hasOwnProperty;
            function w(e, t) {
                return m.call(e, t)
            }
            function v(e) {
                for (var t = arguments, i = Object(e), o = 1; o < arguments.length; o++) {
                    var a = t[o];
                    if (void 0 !== a && null !== a) {
                        var r = void 0;
                        for (r in a)
                            w(a, r) && (n(a[r]) ? i[r] = v(i[r], a[r]) : i[r] = a[r])
                    }
                }
                return i
            }
            function y(e, t) {
                if (e === t)
                    return !0;
                var i = n(e)
                  , o = n(t);
                if (!i || !o)
                    return !i && !o && String(e) === String(t);
                try {
                    var a = (0,
                    u.default)(e)
                      , r = (0,
                    u.default)(t);
                    if (a && r)
                        return e.length === t.length && e.every(function(e, n) {
                            return y(e, t[n])
                        });
                    if (a || r)
                        return !1;
                    var s = (0,
                    c.default)(e)
                      , l = (0,
                    c.default)(t);
                    return s.length === l.length && s.every(function(n) {
                        return y(e[n], t[n])
                    })
                } catch (d) {
                    return !1
                }
            }
            function x(e) {
                e.prototype.hasOwnProperty("$i18n") || Object.defineProperty(e.prototype, "$i18n", {
                    get: function() {
                        return this._i18n
                    }
                }),
                e.prototype.$t = function(e) {
                    var t = []
                      , n = arguments.length - 1;
                    while (n-- > 0)
                        t[n] = arguments[n + 1];
                    var i = this.$i18n;
                    return i._t.apply(i, [e, i.locale, i._getMessages(), this].concat(t))
                }
                ,
                e.prototype.$tc = function(e, t) {
                    var n = []
                      , i = arguments.length - 2;
                    while (i-- > 0)
                        n[i] = arguments[i + 2];
                    var o = this.$i18n;
                    return o._tc.apply(o, [e, o.locale, o._getMessages(), this, t].concat(n))
                }
                ,
                e.prototype.$te = function(e, t) {
                    var n = this.$i18n;
                    return n._te(e, n.locale, n._getMessages(), t)
                }
                ,
                e.prototype.$d = function(e) {
                    var t, n = [], i = arguments.length - 1;
                    while (i-- > 0)
                        n[i] = arguments[i + 1];
                    return (t = this.$i18n).d.apply(t, [e].concat(n))
                }
                ,
                e.prototype.$n = function(e) {
                    var t, n = [], i = arguments.length - 1;
                    while (i-- > 0)
                        n[i] = arguments[i + 1];
                    return (t = this.$i18n).n.apply(t, [e].concat(n))
                }
            }
            var k, C = {
                beforeCreate: function() {
                    var e = this.$options;
                    if (e.i18n = e.i18n || (e.__i18n ? {} : null),
                    e.i18n)
                        if (e.i18n instanceof ge) {
                            if (e.__i18n)
                                try {
                                    var n = {};
                                    e.__i18n.forEach(function(e) {
                                        n = v(n, JSON.parse(e))
                                    }),
                                    (0,
                                    c.default)(n).forEach(function(t) {
                                        e.i18n.mergeLocaleMessage(t, n[t])
                                    })
                                } catch (o) {
                                    t("Cannot parse locale messages via custom blocks.", o)
                                }
                            this._i18n = e.i18n,
                            this._i18nWatcher = this._i18n.watchI18nData(),
                            this._i18n.subscribeDataChanging(this),
                            this._subscribing = !0
                        } else if (f(e.i18n)) {
                            if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof ge && (e.i18n.root = this.$root,
                            e.i18n.formatter = this.$root.$i18n.formatter,
                            e.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale,
                            e.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn,
                            e.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn,
                            e.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules,
                            e.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent),
                            e.__i18n)
                                try {
                                    var i = {};
                                    e.__i18n.forEach(function(e) {
                                        i = v(i, JSON.parse(e))
                                    }),
                                    e.i18n.messages = i
                                } catch (o) {
                                    t("Cannot parse locale messages via custom blocks.", o)
                                }
                            this._i18n = new ge(e.i18n),
                            this._i18nWatcher = this._i18n.watchI18nData(),
                            this._i18n.subscribeDataChanging(this),
                            this._subscribing = !0,
                            (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale())
                        } else
                            t("Cannot be interpreted 'i18n' option.");
                    else
                        this.$root && this.$root.$i18n && this.$root.$i18n instanceof ge ? (this._i18n = this.$root.$i18n,
                        this._i18n.subscribeDataChanging(this),
                        this._subscribing = !0) : e.parent && e.parent.$i18n && e.parent.$i18n instanceof ge && (this._i18n = e.parent.$i18n,
                        this._i18n.subscribeDataChanging(this),
                        this._subscribing = !0)
                },
                beforeDestroy: function() {
                    if (this._i18n) {
                        var e = this;
                        this.$nextTick(function() {
                            e._subscribing && (e._i18n.unsubscribeDataChanging(e),
                            delete e._subscribing),
                            e._i18nWatcher && (e._i18nWatcher(),
                            e._i18n.destroyVM(),
                            delete e._i18nWatcher),
                            e._localeWatcher && (e._localeWatcher(),
                            delete e._localeWatcher),
                            e._i18n = null
                        })
                    }
                }
            }, A = {
                name: "i18n",
                functional: !0,
                props: {
                    tag: {
                        type: String,
                        default: "span"
                    },
                    path: {
                        type: String,
                        required: !0
                    },
                    locale: {
                        type: String
                    },
                    places: {
                        type: [Array, Object]
                    }
                },
                render: function(e, n) {
                    var i = n.props
                      , o = n.data
                      , a = n.children
                      , r = n.parent
                      , s = r.$i18n;
                    if (a = (a || []).filter(function(e) {
                        return e.tag || (e.text = e.text.trim())
                    }),
                    !s)
                        return t("Cannot find VueI18n instance!"),
                        a;
                    var l = i.path
                      , d = i.locale
                      , f = {}
                      , g = i.places || {}
                      , h = (0,
                    u.default)(g) ? g.length > 0 : (0,
                    c.default)(g).length > 0
                      , p = a.every(function(e) {
                        if (e.data && e.data.attrs) {
                            var t = e.data.attrs.place;
                            return "undefined" !== typeof t && "" !== t
                        }
                    });
                    return h && a.length > 0 && !p && t("If places prop is set, all child elements must have place prop set."),
                    (0,
                    u.default)(g) ? g.forEach(function(e, t) {
                        f[t] = e
                    }) : (0,
                    c.default)(g).forEach(function(e) {
                        f[e] = g[e]
                    }),
                    a.forEach(function(e, t) {
                        var n = p ? "" + e.data.attrs.place : "" + t;
                        f[n] = e
                    }),
                    e(i.tag, o, s.i(l, d, f))
                }
            }, E = {
                name: "i18n-n",
                functional: !0,
                props: {
                    tag: {
                        type: String,
                        default: "span"
                    },
                    value: {
                        type: Number,
                        required: !0
                    },
                    format: {
                        type: [String, Object]
                    },
                    locale: {
                        type: String
                    }
                },
                render: function(i, o) {
                    var a = o.props
                      , r = o.parent
                      , l = o.data
                      , u = r.$i18n;
                    if (!u)
                        return t("Cannot find VueI18n instance!"),
                        null;
                    var d = null
                      , f = null;
                    "string" === typeof a.format ? d = a.format : n(a.format) && (a.format.key && (d = a.format.key),
                    f = (0,
                    c.default)(a.format).reduce(function(t, n) {
                        var i;
                        return e.includes(n) ? (0,
                        s.default)({}, t, (i = {},
                        i[n] = a.format[n],
                        i)) : t
                    }, null));
                    var g = a.locale || u.locale
                      , h = u._ntp(a.value, g, d, f)
                      , p = h.map(function(e, t) {
                        var n, i = l.scopedSlots && l.scopedSlots[e.type];
                        return i ? i((n = {},
                        n[e.type] = e.value,
                        n.index = t,
                        n.parts = h,
                        n)) : e.value
                    });
                    return i(a.tag, {
                        attrs: l.attrs,
                        class: l["class"],
                        staticClass: l.staticClass
                    }, p)
                }
            };
            function _(e, t, n) {
                I(e, n) && T(e, t, n)
            }
            function B(e, t, n, i) {
                if (I(e, n)) {
                    var o = n.context.$i18n;
                    S(e, n) && y(t.value, t.oldValue) && y(e._localeMessage, o.getLocaleMessage(o.locale)) || T(e, t, n)
                }
            }
            function D(e, n, i, o) {
                var a = i.context;
                if (a) {
                    var r = i.context.$i18n || {};
                    n.modifiers.preserve || r.preserveDirectiveContent || (e.textContent = ""),
                    e._vt = void 0,
                    delete e["_vt"],
                    e._locale = void 0,
                    delete e["_locale"],
                    e._localeMessage = void 0,
                    delete e["_localeMessage"]
                } else
                    t("Vue instance does not exists in VNode context")
            }
            function I(e, n) {
                var i = n.context;
                return i ? !!i.$i18n || (t("VueI18n instance does not exists in Vue instance"),
                !1) : (t("Vue instance does not exists in VNode context"),
                !1)
            }
            function S(e, t) {
                var n = t.context;
                return e._locale === n.$i18n.locale
            }
            function T(e, n, i) {
                var o, a, r = n.value, s = F(r), c = s.path, l = s.locale, u = s.args, d = s.choice;
                if (c || l || u)
                    if (c) {
                        var f = i.context;
                        e._vt = e.textContent = d ? (o = f.$i18n).tc.apply(o, [c, d].concat(P(l, u))) : (a = f.$i18n).t.apply(a, [c].concat(P(l, u))),
                        e._locale = f.$i18n.locale,
                        e._localeMessage = f.$i18n.getLocaleMessage(f.$i18n.locale)
                    } else
                        t("`path` is required in v-t directive");
                else
                    t("value type not supported")
            }
            function F(e) {
                var t, n, i, o;
                return "string" === typeof e ? t = e : f(e) && (t = e.path,
                n = e.locale,
                i = e.args,
                o = e.choice),
                {
                    path: t,
                    locale: n,
                    args: i,
                    choice: o
                }
            }
            function P(e, t) {
                var n = [];
                return e && n.push(e),
                t && ((0,
                u.default)(t) || f(t)) && n.push(t),
                n
            }
            function M(e) {
                if (M.installed && e === k)
                    t("already installed.");
                else {
                    M.installed = !0,
                    k = e;
                    var n = k.version && Number(k.version.split(".")[0]) || -1;
                    if (n < 2)
                        t("vue-i18n (" + M.version + ") need to use Vue 2.0 or later (Vue: " + k.version + ").");
                    else {
                        x(k),
                        k.mixin(C),
                        k.directive("t", {
                            bind: _,
                            update: B,
                            unbind: D
                        }),
                        k.component(A.name, A),
                        k.component(E.name, E);
                        var i = k.config.optionMergeStrategies;
                        i.i18n = function(e, t) {
                            return void 0 === t ? e : t
                        }
                    }
                }
            }
            var L = function() {
                this._caches = (0,
                r.default)(null)
            };
            L.prototype.interpolate = function(e, t) {
                if (!t)
                    return [e];
                var n = this._caches[e];
                return n || (n = U(e),
                this._caches[e] = n),
                R(n, t)
            }
            ;
            var z = /^(?:\d)+/
              , O = /^(?:\w)+/;
            function U(e) {
                var t = []
                  , n = 0
                  , i = "";
                while (n < e.length) {
                    var o = e[n++];
                    if ("{" === o) {
                        i && t.push({
                            type: "text",
                            value: i
                        }),
                        i = "";
                        var a = "";
                        o = e[n++];
                        while (void 0 !== o && "}" !== o)
                            a += o,
                            o = e[n++];
                        var r = "}" === o
                          , s = z.test(a) ? "list" : r && O.test(a) ? "named" : "unknown";
                        t.push({
                            value: a,
                            type: s
                        })
                    } else
                        "%" === o ? "{" !== e[n] && (i += o) : i += o
                }
                return i && t.push({
                    type: "text",
                    value: i
                }),
                t
            }
            function R(e, i) {
                var o = []
                  , r = 0
                  , s = (0,
                u.default)(i) ? "list" : n(i) ? "named" : "unknown";
                if ("unknown" === s)
                    return o;
                while (r < e.length) {
                    var c = e[r];
                    switch (c.type) {
                    case "text":
                        o.push(c.value);
                        break;
                    case "list":
                        o.push(i[(0,
                        a.default)(c.value, 10)]);
                        break;
                    case "named":
                        "named" === s ? o.push(i[c.value]) : t("Type of token '" + c.type + "' and format of value '" + s + "' don't match!");
                        break;
                    case "unknown":
                        t("Detect 'unknown' type of token!");
                        break
                    }
                    r++
                }
                return o
            }
            var N = 0
              , j = 1
              , H = 2
              , G = 3
              , Q = 0
              , V = 1
              , Y = 2
              , W = 3
              , X = 4
              , J = 5
              , q = 6
              , K = 7
              , Z = 8
              , $ = [];
            $[Q] = {
                ws: [Q],
                ident: [W, N],
                "[": [X],
                eof: [K]
            },
            $[V] = {
                ws: [V],
                ".": [Y],
                "[": [X],
                eof: [K]
            },
            $[Y] = {
                ws: [Y],
                ident: [W, N],
                0: [W, N],
                number: [W, N]
            },
            $[W] = {
                ident: [W, N],
                0: [W, N],
                number: [W, N],
                ws: [V, j],
                ".": [Y, j],
                "[": [X, j],
                eof: [K, j]
            },
            $[X] = {
                "'": [J, N],
                '"': [q, N],
                "[": [X, H],
                "]": [V, G],
                eof: Z,
                else: [X, N]
            },
            $[J] = {
                "'": [X, N],
                eof: Z,
                else: [J, N]
            },
            $[q] = {
                '"': [X, N],
                eof: Z,
                else: [q, N]
            };
            var ee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
            function te(e) {
                return ee.test(e)
            }
            function ne(e) {
                var t = e.charCodeAt(0)
                  , n = e.charCodeAt(e.length - 1);
                return t !== n || 34 !== t && 39 !== t ? e : e.slice(1, -1)
            }
            function ie(e) {
                if (void 0 === e || null === e)
                    return "eof";
                var t = e.charCodeAt(0);
                switch (t) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                    return e;
                case 95:
                case 36:
                case 45:
                    return "ident";
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
                }
                return "ident"
            }
            function oe(e) {
                var t = e.trim();
                return ("0" !== e.charAt(0) || !isNaN(e)) && (te(t) ? ne(t) : "*" + t)
            }
            function ae(e) {
                var t, n, i, o, a, r, s, c = [], l = -1, u = Q, d = 0, f = [];
                function g() {
                    var t = e[l + 1];
                    if (u === J && "'" === t || u === q && '"' === t)
                        return l++,
                        i = "\\" + t,
                        f[N](),
                        !0
                }
                f[j] = function() {
                    void 0 !== n && (c.push(n),
                    n = void 0)
                }
                ,
                f[N] = function() {
                    void 0 === n ? n = i : n += i
                }
                ,
                f[H] = function() {
                    f[N](),
                    d++
                }
                ,
                f[G] = function() {
                    if (d > 0)
                        d--,
                        u = X,
                        f[N]();
                    else {
                        if (d = 0,
                        n = oe(n),
                        !1 === n)
                            return !1;
                        f[j]()
                    }
                }
                ;
                while (null !== u)
                    if (l++,
                    t = e[l],
                    "\\" !== t || !g()) {
                        if (o = ie(t),
                        s = $[u],
                        a = s[o] || s["else"] || Z,
                        a === Z)
                            return;
                        if (u = a[0],
                        r = f[a[1]],
                        r && (i = a[2],
                        i = void 0 === i ? t : i,
                        !1 === r()))
                            return;
                        if (u === K)
                            return c
                    }
            }
            var re = function() {
                this._cache = (0,
                r.default)(null)
            };
            re.prototype.parsePath = function(e) {
                var t = this._cache[e];
                return t || (t = ae(e),
                t && (this._cache[e] = t)),
                t || []
            }
            ,
            re.prototype.getPathValue = function(e, t) {
                if (!n(e))
                    return null;
                var i = this.parsePath(t);
                if (0 === i.length)
                    return null;
                var o = i.length
                  , a = e
                  , r = 0;
                while (r < o) {
                    var s = a[i[r]];
                    if (void 0 === s)
                        return null;
                    a = s,
                    r++
                }
                return a
            }
            ;
            var se, ce = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g, le = /^@(?:\.([a-z]+))?:/, ue = /[()]/g, de = {
                upper: function(e) {
                    return e.toLocaleUpperCase()
                },
                lower: function(e) {
                    return e.toLocaleLowerCase()
                }
            }, fe = new L, ge = function(e) {
                var t = this;
                void 0 === e && (e = {}),
                !k && "undefined" !== typeof window && window.Vue && M(window.Vue);
                var n = e.locale || "en-US"
                  , i = e.fallbackLocale || "en-US"
                  , o = e.messages || {}
                  , a = e.dateTimeFormats || {}
                  , r = e.numberFormats || {};
                this._vm = null,
                this._formatter = e.formatter || fe,
                this._missing = e.missing || null,
                this._root = e.root || null,
                this._sync = void 0 === e.sync || !!e.sync,
                this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot,
                this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && !!e.silentTranslationWarn,
                this._silentFallbackWarn = void 0 !== e.silentFallbackWarn && !!e.silentFallbackWarn,
                this._dateTimeFormatters = {},
                this._numberFormatters = {},
                this._path = new re,
                this._dataListeners = [],
                this._preserveDirectiveContent = void 0 !== e.preserveDirectiveContent && !!e.preserveDirectiveContent,
                this.pluralizationRules = e.pluralizationRules || {},
                this._exist = function(e, n) {
                    return !(!e || !n) && (!g(t._path.getPathValue(e, n)) || !!e[n])
                }
                ,
                this._initVM({
                    locale: n,
                    fallbackLocale: i,
                    messages: o,
                    dateTimeFormats: a,
                    numberFormats: r
                })
            }, he = {
                vm: {
                    configurable: !0
                },
                messages: {
                    configurable: !0
                },
                dateTimeFormats: {
                    configurable: !0
                },
                numberFormats: {
                    configurable: !0
                },
                availableLocales: {
                    configurable: !0
                },
                locale: {
                    configurable: !0
                },
                fallbackLocale: {
                    configurable: !0
                },
                missing: {
                    configurable: !0
                },
                formatter: {
                    configurable: !0
                },
                silentTranslationWarn: {
                    configurable: !0
                },
                silentFallbackWarn: {
                    configurable: !0
                },
                preserveDirectiveContent: {
                    configurable: !0
                }
            };
            return ge.prototype._initVM = function(e) {
                var t = k.config.silent;
                k.config.silent = !0,
                this._vm = new k({
                    data: e
                }),
                k.config.silent = t
            }
            ,
            ge.prototype.destroyVM = function() {
                this._vm.$destroy()
            }
            ,
            ge.prototype.subscribeDataChanging = function(e) {
                this._dataListeners.push(e)
            }
            ,
            ge.prototype.unsubscribeDataChanging = function(e) {
                b(this._dataListeners, e)
            }
            ,
            ge.prototype.watchI18nData = function() {
                var e = this;
                return this._vm.$watch("$data", function() {
                    var t = e._dataListeners.length;
                    while (t--)
                        k.nextTick(function() {
                            e._dataListeners[t] && e._dataListeners[t].$forceUpdate()
                        })
                }, {
                    deep: !0
                })
            }
            ,
            ge.prototype.watchLocale = function() {
                if (!this._sync || !this._root)
                    return null;
                var e = this._vm;
                return this._root.$i18n.vm.$watch("locale", function(t) {
                    e.$set(e, "locale", t),
                    e.$forceUpdate()
                }, {
                    immediate: !0
                })
            }
            ,
            he.vm.get = function() {
                return this._vm
            }
            ,
            he.messages.get = function() {
                return p(this._getMessages())
            }
            ,
            he.dateTimeFormats.get = function() {
                return p(this._getDateTimeFormats())
            }
            ,
            he.numberFormats.get = function() {
                return p(this._getNumberFormats())
            }
            ,
            he.availableLocales.get = function() {
                return (0,
                c.default)(this.messages).sort()
            }
            ,
            he.locale.get = function() {
                return this._vm.locale
            }
            ,
            he.locale.set = function(e) {
                this._vm.$set(this._vm, "locale", e)
            }
            ,
            he.fallbackLocale.get = function() {
                return this._vm.fallbackLocale
            }
            ,
            he.fallbackLocale.set = function(e) {
                this._vm.$set(this._vm, "fallbackLocale", e)
            }
            ,
            he.missing.get = function() {
                return this._missing
            }
            ,
            he.missing.set = function(e) {
                this._missing = e
            }
            ,
            he.formatter.get = function() {
                return this._formatter
            }
            ,
            he.formatter.set = function(e) {
                this._formatter = e
            }
            ,
            he.silentTranslationWarn.get = function() {
                return this._silentTranslationWarn
            }
            ,
            he.silentTranslationWarn.set = function(e) {
                this._silentTranslationWarn = e
            }
            ,
            he.silentFallbackWarn.get = function() {
                return this._silentFallbackWarn
            }
            ,
            he.silentFallbackWarn.set = function(e) {
                this._silentFallbackWarn = e
            }
            ,
            he.preserveDirectiveContent.get = function() {
                return this._preserveDirectiveContent
            }
            ,
            he.preserveDirectiveContent.set = function(e) {
                this._preserveDirectiveContent = e
            }
            ,
            ge.prototype._getMessages = function() {
                return this._vm.messages
            }
            ,
            ge.prototype._getDateTimeFormats = function() {
                return this._vm.dateTimeFormats
            }
            ,
            ge.prototype._getNumberFormats = function() {
                return this._vm.numberFormats
            }
            ,
            ge.prototype._warnDefault = function(e, n, i, o, a) {
                if (!g(i))
                    return i;
                if (this._missing) {
                    var r = this._missing.apply(null, [e, n, o, a]);
                    if ("string" === typeof r)
                        return r
                } else
                    this._silentTranslationWarn || t("Cannot translate the value of keypath '" + n + "'. Use the value of keypath as default.");
                return n
            }
            ,
            ge.prototype._isFallbackRoot = function(e) {
                return !e && !g(this._root) && this._fallbackRoot
            }
            ,
            ge.prototype._isSilentFallback = function(e) {
                return this._silentFallbackWarn && (this._isFallbackRoot() || e !== this.fallbackLocale)
            }
            ,
            ge.prototype._interpolate = function(e, n, i, o, a, r, s) {
                if (!n)
                    return null;
                var c, l = this._path.getPathValue(n, i);
                if ((0,
                u.default)(l) || f(l))
                    return l;
                if (g(l)) {
                    if (!f(n))
                        return null;
                    if (c = n[i],
                    "string" !== typeof c)
                        return this._silentTranslationWarn || this._isSilentFallback(e) || t("Value of key '" + i + "' is not a string!"),
                        null
                } else {
                    if ("string" !== typeof l)
                        return this._silentTranslationWarn || this._isSilentFallback(e) || t("Value of key '" + i + "' is not a string!"),
                        null;
                    c = l
                }
                return (c.indexOf("@:") >= 0 || c.indexOf("@.") >= 0) && (c = this._link(e, n, c, o, "raw", r, s)),
                this._render(c, a, r, i)
            }
            ,
            ge.prototype._link = function(e, n, i, o, a, r, s) {
                var c = i
                  , l = c.match(ce);
                for (var d in l)
                    if (l.hasOwnProperty(d)) {
                        var f = l[d]
                          , g = f.match(le)
                          , h = g[0]
                          , p = g[1]
                          , b = f.replace(h, "").replace(ue, "");
                        if (s.includes(b))
                            return t('Circular reference found. "' + f + '" is already visited in the chain of ' + s.reverse().join(" <- ")),
                            c;
                        s.push(b);
                        var m = this._interpolate(e, n, b, o, "raw" === a ? "string" : a, "raw" === a ? void 0 : r, s);
                        if (this._isFallbackRoot(m)) {
                            if (this._silentTranslationWarn || t("Fall back to translate the link placeholder '" + b + "' with root locale."),
                            !this._root)
                                throw Error("unexpected error");
                            var w = this._root.$i18n;
                            m = w._translate(w._getMessages(), w.locale, w.fallbackLocale, b, o, a, r)
                        }
                        m = this._warnDefault(e, b, m, o, (0,
                        u.default)(r) ? r : [r]),
                        de.hasOwnProperty(p) && (m = de[p](m)),
                        s.pop(),
                        c = m ? c.replace(f, m) : c
                    }
                return c
            }
            ,
            ge.prototype._render = function(e, t, n, i) {
                var o = this._formatter.interpolate(e, n, i);
                return o || (o = fe.interpolate(e, n, i)),
                "string" === t ? o.join("") : o
            }
            ,
            ge.prototype._translate = function(e, n, i, o, a, r, s) {
                var c = this._interpolate(n, e[n], o, a, r, s, [o]);
                return g(c) ? (c = this._interpolate(i, e[i], o, a, r, s, [o]),
                g(c) ? null : (this._silentTranslationWarn || this._silentFallbackWarn || t("Fall back to translate the keypath '" + o + "' with '" + i + "' locale."),
                c)) : c
            }
            ,
            ge.prototype._t = function(e, n, i, o) {
                var a, r = [], s = arguments.length - 4;
                while (s-- > 0)
                    r[s] = arguments[s + 4];
                if (!e)
                    return "";
                var c = h.apply(void 0, r)
                  , l = c.locale || n
                  , u = this._translate(i, l, this.fallbackLocale, e, o, "string", c.params);
                if (this._isFallbackRoot(u)) {
                    if (this._silentTranslationWarn || this._silentFallbackWarn || t("Fall back to translate the keypath '" + e + "' with root locale."),
                    !this._root)
                        throw Error("unexpected error");
                    return (a = this._root).$t.apply(a, [e].concat(r))
                }
                return this._warnDefault(l, e, u, o, r)
            }
            ,
            ge.prototype.t = function(e) {
                var t, n = [], i = arguments.length - 1;
                while (i-- > 0)
                    n[i] = arguments[i + 1];
                return (t = this)._t.apply(t, [e, this.locale, this._getMessages(), null].concat(n))
            }
            ,
            ge.prototype._i = function(e, n, i, o, a) {
                var r = this._translate(i, n, this.fallbackLocale, e, o, "raw", a);
                if (this._isFallbackRoot(r)) {
                    if (this._silentTranslationWarn || t("Fall back to interpolate the keypath '" + e + "' with root locale."),
                    !this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.i(e, n, a)
                }
                return this._warnDefault(n, e, r, o, [a])
            }
            ,
            ge.prototype.i = function(e, t, n) {
                return e ? ("string" !== typeof t && (t = this.locale),
                this._i(e, t, this._getMessages(), null, n)) : ""
            }
            ,
            ge.prototype._tc = function(e, t, n, i, o) {
                var a, r = [], c = arguments.length - 5;
                while (c-- > 0)
                    r[c] = arguments[c + 5];
                if (!e)
                    return "";
                void 0 === o && (o = 1);
                var l = {
                    count: o,
                    n: o
                }
                  , u = h.apply(void 0, r);
                return u.params = (0,
                s.default)(l, u.params),
                r = null === u.locale ? [u.params] : [u.locale, u.params],
                this.fetchChoice((a = this)._t.apply(a, [e, t, n, i].concat(r)), o)
            }
            ,
            ge.prototype.fetchChoice = function(e, t) {
                if (!e && "string" !== typeof e)
                    return null;
                var n = e.split("|");
                return t = this.getChoiceIndex(t, n.length),
                n[t] ? n[t].trim() : e
            }
            ,
            ge.prototype.getChoiceIndex = function(e, t) {
                var n = function(e, t) {
                    return e = Math.abs(e),
                    2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
                };
                return this.locale in this.pluralizationRules ? this.pluralizationRules[this.locale].apply(this, [e, t]) : n(e, t)
            }
            ,
            ge.prototype.tc = function(e, t) {
                var n, i = [], o = arguments.length - 2;
                while (o-- > 0)
                    i[o] = arguments[o + 2];
                return (n = this)._tc.apply(n, [e, this.locale, this._getMessages(), null, t].concat(i))
            }
            ,
            ge.prototype._te = function(e, t, n) {
                var i = []
                  , o = arguments.length - 3;
                while (o-- > 0)
                    i[o] = arguments[o + 3];
                var a = h.apply(void 0, i).locale || t;
                return this._exist(n[a], e)
            }
            ,
            ge.prototype.te = function(e, t) {
                return this._te(e, this.locale, this._getMessages(), t)
            }
            ,
            ge.prototype.getLocaleMessage = function(e) {
                return p(this._vm.messages[e] || {})
            }
            ,
            ge.prototype.setLocaleMessage = function(e, t) {
                this._vm.$set(this._vm.messages, e, t)
            }
            ,
            ge.prototype.mergeLocaleMessage = function(e, t) {
                this._vm.$set(this._vm.messages, e, v(this._vm.messages[e] || {}, t))
            }
            ,
            ge.prototype.getDateTimeFormat = function(e) {
                return p(this._vm.dateTimeFormats[e] || {})
            }
            ,
            ge.prototype.setDateTimeFormat = function(e, t) {
                this._vm.$set(this._vm.dateTimeFormats, e, t)
            }
            ,
            ge.prototype.mergeDateTimeFormat = function(e, t) {
                this._vm.$set(this._vm.dateTimeFormats, e, v(this._vm.dateTimeFormats[e] || {}, t))
            }
            ,
            ge.prototype._localizeDateTime = function(e, n, i, o, a) {
                var r = n
                  , s = o[r];
                if ((g(s) || g(s[a])) && (this._silentTranslationWarn || t("Fall back to '" + i + "' datetime formats from '" + n + " datetime formats."),
                r = i,
                s = o[r]),
                g(s) || g(s[a]))
                    return null;
                var c = s[a]
                  , l = r + "__" + a
                  , u = this._dateTimeFormatters[l];
                return u || (u = this._dateTimeFormatters[l] = new Intl.DateTimeFormat(r,c)),
                u.format(e)
            }
            ,
            ge.prototype._d = function(e, n, i) {
                if (!ge.availabilities.dateTimeFormat)
                    return t("Cannot format a Date value due to not supported Intl.DateTimeFormat."),
                    "";
                if (!i)
                    return new Intl.DateTimeFormat(n).format(e);
                var o = this._localizeDateTime(e, n, this.fallbackLocale, this._getDateTimeFormats(), i);
                if (this._isFallbackRoot(o)) {
                    if (this._silentTranslationWarn || t("Fall back to datetime localization of root: key '" + i + "' ."),
                    !this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.d(e, i, n)
                }
                return o || ""
            }
            ,
            ge.prototype.d = function(e) {
                var t = []
                  , i = arguments.length - 1;
                while (i-- > 0)
                    t[i] = arguments[i + 1];
                var o = this.locale
                  , a = null;
                return 1 === t.length ? "string" === typeof t[0] ? a = t[0] : n(t[0]) && (t[0].locale && (o = t[0].locale),
                t[0].key && (a = t[0].key)) : 2 === t.length && ("string" === typeof t[0] && (a = t[0]),
                "string" === typeof t[1] && (o = t[1])),
                this._d(e, o, a)
            }
            ,
            ge.prototype.getNumberFormat = function(e) {
                return p(this._vm.numberFormats[e] || {})
            }
            ,
            ge.prototype.setNumberFormat = function(e, t) {
                this._vm.$set(this._vm.numberFormats, e, t)
            }
            ,
            ge.prototype.mergeNumberFormat = function(e, t) {
                this._vm.$set(this._vm.numberFormats, e, v(this._vm.numberFormats[e] || {}, t))
            }
            ,
            ge.prototype._getNumberFormatter = function(e, n, i, o, a, r) {
                var c = n
                  , l = o[c];
                if ((g(l) || g(l[a])) && (this._silentTranslationWarn || t("Fall back to '" + i + "' number formats from '" + n + " number formats."),
                c = i,
                l = o[c]),
                g(l) || g(l[a]))
                    return null;
                var u, d = l[a];
                if (r)
                    u = new Intl.NumberFormat(c,(0,
                    s.default)({}, d, r));
                else {
                    var f = c + "__" + a;
                    u = this._numberFormatters[f],
                    u || (u = this._numberFormatters[f] = new Intl.NumberFormat(c,d))
                }
                return u
            }
            ,
            ge.prototype._n = function(e, n, i, o) {
                if (!ge.availabilities.numberFormat)
                    return t("Cannot format a Number value due to not supported Intl.NumberFormat."),
                    "";
                if (!i) {
                    var a = o ? new Intl.NumberFormat(n,o) : new Intl.NumberFormat(n);
                    return a.format(e)
                }
                var r = this._getNumberFormatter(e, n, this.fallbackLocale, this._getNumberFormats(), i, o)
                  , c = r && r.format(e);
                if (this._isFallbackRoot(c)) {
                    if (this._silentTranslationWarn || t("Fall back to number localization of root: key '" + i + "' ."),
                    !this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.n(e, (0,
                    s.default)({}, {
                        key: i,
                        locale: n
                    }, o))
                }
                return c || ""
            }
            ,
            ge.prototype.n = function(t) {
                var i = []
                  , o = arguments.length - 1;
                while (o-- > 0)
                    i[o] = arguments[o + 1];
                var a = this.locale
                  , r = null
                  , l = null;
                return 1 === i.length ? "string" === typeof i[0] ? r = i[0] : n(i[0]) && (i[0].locale && (a = i[0].locale),
                i[0].key && (r = i[0].key),
                l = (0,
                c.default)(i[0]).reduce(function(t, n) {
                    var o;
                    return e.includes(n) ? (0,
                    s.default)({}, t, (o = {},
                    o[n] = i[0][n],
                    o)) : t
                }, null)) : 2 === i.length && ("string" === typeof i[0] && (r = i[0]),
                "string" === typeof i[1] && (a = i[1])),
                this._n(t, a, r, l)
            }
            ,
            ge.prototype._ntp = function(e, n, i, o) {
                if (!ge.availabilities.numberFormat)
                    return t("Cannot format to parts a Number value due to not supported Intl.NumberFormat."),
                    [];
                if (!i) {
                    var a = o ? new Intl.NumberFormat(n,o) : new Intl.NumberFormat(n);
                    return a.formatToParts(e)
                }
                var r = this._getNumberFormatter(e, n, this.fallbackLocale, this._getNumberFormats(), i, o)
                  , s = r && r.formatToParts(e);
                if (this._isFallbackRoot(s)) {
                    if (this._silentTranslationWarn || t("Fall back to format number to parts of root: key '" + i + "' ."),
                    !this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n._ntp(e, n, i, o)
                }
                return s || []
            }
            ,
            (0,
            o.default)(ge.prototype, he),
            Object.defineProperty(ge, "availabilities", {
                get: function() {
                    if (!se) {
                        var e = "undefined" !== typeof Intl;
                        se = {
                            dateTimeFormat: e && "undefined" !== typeof Intl.DateTimeFormat,
                            numberFormat: e && "undefined" !== typeof Intl.NumberFormat
                        }
                    }
                    return se
                }
            }),
            ge.install = M,
            ge.version = "8.10.0",
            ge
        })
    },
    "3cf1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            data: function() {
                return {
                    StatusBar: 20,
                    CustomBar: 60
                }
            },
            name: "cu-custom",
            computed: {
                style: function() {
                    var e = this.StatusBar
                      , t = this.CustomBar
                      , n = this.bgImage
                      , i = "height:".concat(t, "px;padding-top:").concat(e, "px;");
                    return this.bgImage && (i = "".concat(i, "background-image:url(").concat(n, ");")),
                    i
                }
            },
            props: {
                bgColor: {
                    type: String,
                    default: ""
                },
                isBack: {
                    type: [Boolean, String],
                    default: !1
                },
                bgImage: {
                    type: String,
                    default: ""
                }
            },
            methods: {
                BackPage: function() {
                    uni.navigateBack({
                        delta: 1
                    })
                }
            }
        };
        t.default = i
    },
    "3f8f": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "tki-file-manager",
            props: {},
            data: function() {
                return {}
            },
            methods: {
                _openFile: function() {
                    uni.showModal({
                        title: "提示",
                        content: "仅支持Android平台",
                        success: function(e) {}
                    })
                }
            },
            onLoad: function() {}
        };
        t.default = i
    },
    4130: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-modal",
                class: "Modal" == e.modalName ? "show" : ""
            }, [n("v-uni-view", {
                staticClass: "cu-load load-modal"
            }, [n("v-uni-view", {
                staticClass: "bg-white",
                staticStyle: {
                    "border-radius": "20upx"
                }
            }, [n("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end",
                staticStyle: {
                    "border-radius": "20upx"
                }
            }, [e.deviceName ? n("v-uni-view", {
                staticClass: "content"
            }, [n("v-uni-text", {
                staticClass: "text-grey",
                staticStyle: {
                    "font-size": "20upx"
                }
            }, [e._v(e._s(e.deviceName))])], 1) : e._e(), 5 != e.state ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.close(t)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-close text-red"
            })], 1) : e._e()], 1), n("v-uni-view", {
                staticStyle: {
                    "padding-top": "0rem",
                    "padding-left": "3rem",
                    "padding-right": "3rem"
                }
            }, [n("v-uni-view", {
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.onProgressClick(t)
                    }
                }
            }, [n("cmd-progress", {
                attrs: {
                    type: "circle",
                    percent: e.percent,
                    custom: "",
                    width: 150
                }
            }, [n("v-uni-view", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [n("v-uni-view", {
                staticStyle: {
                    "font-size": "30upx"
                }
            }, [e._v(e._s(e.txtMsg))]), n("v-uni-view", {
                staticStyle: {
                    "font-size": "50upx",
                    "font-weight": "500",
                    "line-height": "50upx"
                }
            }, [e._v(e._s(e.txtMsg2))]), n("v-uni-view", {
                staticStyle: {
                    "font-size": "30upx",
                    "font-weight": "50"
                }
            }, [e._v(e._s(e.txtMsg3))])], 1)], 1)], 1), n("v-uni-view", [n("v-uni-view", {
                staticClass: "title"
            }, [e._v("极速安装")]), n("v-uni-switch", {
                class: e.switchA ? "checked" : "",
                attrs: {
                    checked: !!e.switchA
                },
                on: {
                    change: function(t) {
                        t = e.$handleEvent(t),
                        e.SwitchA(t)
                    }
                }
            })], 1)], 1), 0 == e.state || 1 == e.state ? n("v-uni-view", [n("v-uni-text", {
                staticClass: "text-grey",
                staticStyle: {
                    "font-size": "20upx"
                }
            }, [e._v("如搜索不到设备，请在Zepplife中打开手环的蓝牙广播并打开手机定位")])], 1) : e._e(), 4 == e.state || 5 == e.state ? n("v-uni-view", [n("v-uni-text", {
                staticClass: "text-grey",
                staticStyle: {
                    "font-size": "20upx"
                }
            }, [e._v("安装过程中请勿切换软件到后台；如安装不成功，请确认Zepplife的后台运行权限")])], 1) : e._e()], 1)], 1)], 1)], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "43d4": function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("f499"))
          , a = i(n("e814"))
          , r = i(n("795b"))
          , s = i(n("fd15"))
          , c = i(n("be70"))
          , l = {
            components: {
                empty: s.default,
                installMethodDialog: c.default
            },
            data: function() {
                return {
                    TabCur: 0,
                    TabCurSub: 0,
                    tagsList: [],
                    scrollLeft: 0,
                    page: 1,
                    page_size: 10,
                    list: [],
                    modalName: "",
                    download_url: "",
                    download_item: {},
                    isSearchMode: !1,
                    keyword: "",
                    isLoading: !0,
                    type: "mi7",
                    shareItem: {},
                    subtagShow: !1
                }
            },
            mounted: function() {
                this.tagsList = this.getTagsListFun(),
                this.refresh()
            },
            methods: {
                refresh: function() {
                    try {
                        this.type = "mi7"
                    } catch (e) {
                        this.type = "mi7"
                    }
                    this.page = 1,
                    this.page_size = 10,
                    this.getList()
                },
                tabSelect: function(e) {
                    this.TabCur = e.currentTarget.dataset.id,
                    this.scrollLeft = 60 * (e.currentTarget.dataset.id - 1),
                    this.isSearchMode = !1,
                    this.page = 1,
                    this.page_size = 10,
                    this.list = [],
                    this.isLoading = !1,
                    this.getList()
                },
                tabSubSelect: function(e) {
                    this.TabCurSub = e.currentTarget.dataset.id,
                    this.scrollLeft = 60 * (e.currentTarget.dataset.id - 1),
                    this.isSearchMode = !1,
                    this.page = 1,
                    this.page_size = 10,
                    this.list = [],
                    this.isLoading = !1,
                    this.getList()
                },
                getList: function() {
                    var e = this;
                    if (3 != this.TabCur)
                        if (2 != this.TabCur) {
                            this.isLoading = !0;
                            var t = this.tagsList[this.TabCurSub].id;
                            this.$http.ajax({
                                path: "watchface/listbytag/" + this.TabCur + "/" + this.page + "/" + this.page_size + "/" + t,
                                type: "get"
                            }).then(function(t) {
                                for (var n in t)
                                    t[n].createdAt = e.getCreatedAt(t[n].createdAt);
                                e.isLoading = !1,
                                1 == e.page ? e.list = t : e.list = e.list.concat(t)
                            })
                        } else
                            this.getRecommends()
                },
                getRecommends: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = this.tagsList[this.TabCurSub].id;
                    this.$http.ajax({
                        path: "watchface/list/recommendsbytag/" + this.page + "/" + this.page_size + "/" + t,
                        type: "get"
                    }).then(function(t) {
                        for (var n in t)
                            t[n].createdAt = e.getCreatedAt(t[n].createdAt);
                        e.isLoading = !1,
                        1 == e.page ? e.list = t : e.list = e.list.concat(t)
                    })
                },
                loadImg: function(e, t) {
                    return new r.default(function(n, i) {
                        var o = new Image;
                        o.src = t,
                        o.onload = function() {
                            n(e)
                        }
                        ,
                        o.onerror = function() {
                            i("error")
                        }
                    }
                    )
                },
                getCreatedAt: function(e) {
                    var t = new Date(e)
                      , n = (t.getFullYear(),
                    t.getMonth() + 1)
                      , i = t.getDate()
                      , o = (t.getHours(),
                    t.getMinutes(),
                    t.getSeconds(),
                    this.addZero(n) + "-" + this.addZero(i));
                    return o
                },
                addZero: function(e) {
                    return (0,
                    a.default)(e) < 10 && (e = "0" + e),
                    e
                },
                nextPage: function() {
                    this.isLoading || (this.isSearchMode ? (this.page += 1,
                    this.getSearchWatchfaceList()) : (this.page += 1,
                    this.getList()))
                },
                searchWatchface: function(e) {
                    e.length >= 1 && (this.isLoading = !0,
                    this.isSearchMode = !0,
                    this.keyword = e,
                    this.list = [],
                    this.page = 1,
                    this.getSearchWatchfaceList())
                },
                getSearchWatchfaceList: function() {
                    var e = this;
                    this.isLoading = !0,
                    this.$http.ajax({
                        path: "watchface/searchForPage",
                        type: "post",
                        data: {
                            keyword: this.keyword,
                            page: this.page
                        }
                    }).then(function(t) {
                        for (var n in e.isLoading = !1,
                        t)
                            t[n].createdAt = e.getCreatedAt(t[n].createdAt);
                        1 == e.page ? e.list = t : e.list = e.list.concat(t)
                    })
                },
                download: function(e, t) {
                    var n = this;
                    uni.showLoading(),
                    this.download_item = t,
                    this.$http.ajax({
                        path: "watchface/download",
                        type: "post",
                        title: this.i18n.explore.processing,
                        data: {
                            id: e
                        }
                    }).then(function(e) {
                        uni.hideLoading(),
                        n.download_url = e,
                        n.modalName = "Modal",
                        uni.getStorage({
                            key: "downloadHistroy",
                            success: function(e) {
                                console.log(e.data);
                                var n = e.data
                                  , i = JSON.parse((0,
                                o.default)(t));
                                i.time = (new Date).getMonth() + 1 + "-" + (new Date).getDate(),
                                n.unshift(i),
                                uni.setStorage({
                                    key: "downloadHistroy",
                                    data: n
                                })
                            },
                            fail: function(e) {
                                var n = []
                                  , i = JSON.parse((0,
                                o.default)(t));
                                i.time = (new Date).getMonth() + 1 + "-" + (new Date).getDate(),
                                n.push(i),
                                uni.setStorage({
                                    key: "downloadHistroy",
                                    data: n
                                })
                            }
                        }),
                        uni.setClipboardData({
                            data: e
                        })
                    })
                },
                hideModal: function() {
                    this.modalName = ""
                },
                previewPhoto: function(e) {
                    var t = [e];
                    uni.previewImage({
                        current: 0,
                        urls: t
                    })
                },
                report: function(e, t) {
                    var n = this;
                    uni.showModal({
                        title: this.i18n.explore.report,
                        content: this.i18n.explore.report_hint,
                        success: function(t) {
                            t.confirm ? (n.$http.ajax({
                                path: "watchface/report",
                                type: "post",
                                data: {
                                    id: e
                                }
                            }).then(function(e) {}),
                            uni.showToast({
                                icon: "none",
                                title: n.i18n.explore.report_success
                            })) : t.cancel && console.log("用户点击取消")
                        }
                    })
                },
                closeUpload: function(e, t) {
                    var n = this;
                    uni.showModal({
                        title: "审核确认",
                        content: "确定将该条设置成审核不通过？",
                        success: function(t) {
                            t.confirm ? n.$http.ajax({
                                path: "manager/closeUpload",
                                type: "post",
                                data: {
                                    id: e
                                }
                            }).then(function(e) {
                                uni.showToast({
                                    icon: "none",
                                    title: "审核成功"
                                })
                            }) : t.cancel && console.log("用户点击取消")
                        }
                    })
                },
                openMore: function(e, t) {
                    this.$share.openActionSheet(e, t, this.i18n, this, !0)
                },
                hidePosterModal: function() {
                    this.showPoster = ""
                },
                goToWatchfaceDetail: function(e, t) {
                    try {
                        uni.setStorageSync("watchface_detail", t)
                    } catch (n) {}
                    uni.navigateTo({
                        url: "/pages/detail/detail?id=" + e
                    })
                },
                showSubTag: function() {
                    this.subtagShow ? this.subtagShow = !1 : (this.tagsList = this.getTagsListFun(),
                    this.subtagShow = !0)
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                },
                getDeviceWidthView: function() {
                    return 96
                },
                getDeviceWidthView2: function() {
                    return 120
                },
                getDeviceHeightView: function() {
                    return 245
                }
            }
        };
        t.default = l
    },
    "4b66": function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RQ = t.req = void 0;
        var o = i(n("a8db"))
          , a = i(n("cebc"))
          , r = i(n("5176"));
        n("96cf");
        var s = i(n("3b8d"))
          , c = i(n("795b"))
          , l = i(n("d225"))
          , u = i(n("b0b4"))
          , d = i(n("85f2"))
          , f = ""
          , g = !1
          , h = {
            isreq: !0,
            url: "",
            baseData: {},
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            type: "GET",
            dataType: "json",
            responseType: "text",
            beforeSend: function(e) {
                return e
            },
            beforeFinsh: function(e) {
                return e
            }
        }
          , p = {
            url: "",
            baseData: {},
            header: {
                "content-type": "multipart/form-data;"
            }
        }
          , b = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e, t, n) {}
              , n = function(n) {
                var i = e[n];
                (0,
                d.default)(e, n, {
                    enumerable: !0,
                    get: function() {
                        return this["HHYANG_".concat(n)]
                    },
                    set: function(e) {
                        t(n, e, this["HHYANG_".concat(n)]),
                        this["HHYANG_".concat(n)] = e
                    }
                }),
                e[n] = i
            };
            for (var i in e)
                n(i)
        };
        b(h),
        b(p);
        var m = function() {
            function e(t) {
                (0,
                l.default)(this, e),
                this.platform = this.platformChunk(),
                this.defaultReq = h,
                this.defaultUp = p
            }
            return (0,
            u.default)(e, [{
                key: "ajax",
                value: function() {
                    for (var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.path, i = void 0 === n ? "" : n, l = t.title, u = void 0 !== l && l, d = t.header, f = void 0 === d ? this.defaultReq.header : d, g = t.data, h = void 0 === g ? {} : g, p = t.type, b = void 0 === p ? this.defaultReq.type : p, m = t.dataType, w = void 0 === m ? this.defaultReq.dataType : m, v = t.responseType, y = void 0 === v ? this.defaultReq.responseType : v, x = (t.finshFun,
                    t.abortFun), k = void 0 === x ? function(e) {}
                    : x, C = t.useBaseUrl, A = void 0 === C || C, E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), B = 1; B < E; B++)
                        _[B - 1] = arguments[B];
                    return new c.default(function() {
                        var t = (0,
                        s.default)(regeneratorRuntime.mark(function t(n, c) {
                            var l, d, g, p;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (e.defaultReq.isreq) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", c("要想使用ajax，请开放isreq 设置为true"));
                                    case 2:
                                        return (0,
                                        r.default)(h, e.defaultReq.baseData),
                                        "string" === typeof f && (f = {
                                            "content-type": f
                                        }),
                                        l = "",
                                        l = A ? e.defaultReq.url + i : i,
                                        d = {
                                            url: l,
                                            method: b,
                                            dataType: w,
                                            responseType: y,
                                            data: h,
                                            header: f
                                        },
                                        t.next = 9,
                                        e.defaultReq.beforeSend(d);
                                    case 9:
                                        if (g = t.sent,
                                        g) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return", c((0,
                                        r.default)(d, {
                                            beforeClose: !0
                                        })));
                                    case 12:
                                        u && uni.showLoading({
                                            title: u,
                                            mask: !0
                                        }),
                                        p = uni.request((0,
                                        a.default)({}, d, {
                                            complete: function() {
                                                var t = (0,
                                                s.default)(regeneratorRuntime.mark(function t() {
                                                    var i, a, s, l, d, f = arguments;
                                                    return regeneratorRuntime.wrap(function(t) {
                                                        while (1)
                                                            switch (t.prev = t.next) {
                                                            case 0:
                                                                if (i = f.length > 0 && void 0 !== f[0] ? f[0] : {},
                                                                a = i.statusCode,
                                                                s = (0,
                                                                o.default)(i, ["statusCode"]),
                                                                l = (0,
                                                                r.default)({
                                                                    extra: _
                                                                }, s, {
                                                                    statusCode: a
                                                                }),
                                                                200 != a) {
                                                                    t.next = 9;
                                                                    break
                                                                }
                                                                return t.next = 5,
                                                                e.defaultReq.beforeFinsh(l);
                                                            case 5:
                                                                d = t.sent,
                                                                d && n(d),
                                                                t.next = 10;
                                                                break;
                                                            case 9:
                                                                c(l);
                                                            case 10:
                                                                u && uni.hideLoading();
                                                            case 11:
                                                            case "end":
                                                                return t.stop()
                                                            }
                                                    }, t, this)
                                                }));
                                                function i() {
                                                    return t.apply(this, arguments)
                                                }
                                                return i
                                            }()
                                        })),
                                        k(d, p);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "ajaxFile",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = t.path
                      , i = void 0 === n ? "" : n
                      , a = t.title
                      , r = void 0 !== a && a
                      , s = t.header
                      , l = void 0 === s ? this.defaultUp.header : s
                      , u = t.filePath
                      , d = void 0 === u ? "" : u
                      , f = t.fileName
                      , g = void 0 === f ? "" : f
                      , h = t.extra
                      , p = void 0 === h ? {} : h
                      , b = t.reload
                      , m = void 0 === b ? function(e) {}
                    : b
                      , w = t._isFirst
                      , v = void 0 === w || w
                      , y = t._autoClose
                      , x = void 0 === y || y;
                    return new c.default(function(t, n) {
                        r && v && uni.showLoading({
                            title: r,
                            mask: !0
                        });
                        var a = uni.uploadFile({
                            url: e.defaultUp.url + i,
                            filePath: d,
                            name: g,
                            header: l,
                            formData: p,
                            complete: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , i = e.statusCode
                                  , a = void 0 === i ? 0 : i
                                  , s = (0,
                                o.default)(e, ["statusCode"]);
                                return r && x && uni.hideLoading(),
                                200 == a ? t(s) : n(s)
                            }
                        });
                        m(a)
                    }
                    )
                }
            }, {
                key: "downFiles",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.abort
                      , n = void 0 === t ? function() {}
                    : t
                      , i = e.path
                      , s = void 0 === i ? "" : i
                      , l = e.title
                      , u = void 0 !== l && l
                      , d = e.index
                      , f = void 0 === d ? 0 : d
                      , g = (0,
                    o.default)(e, ["abort", "path", "title", "index"]);
                    return new c.default(function(e, t) {
                        s || t("请选设置请求路径"),
                        u && uni.showLoading({
                            title: u,
                            mask: !0
                        });
                        var i = uni.downloadFile((0,
                        a.default)({
                            url: s
                        }, g, {
                            complete: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , i = n.statusCode
                                  , s = void 0 === i ? 0 : i
                                  , c = (0,
                                o.default)(n, ["statusCode"]);
                                return u && uni.hideLoading(),
                                200 === s ? e((0,
                                r.default)({}, (0,
                                a.default)({
                                    statusCode: s,
                                    params: g
                                }, c))) : t(c)
                            }
                        }));
                        n(i, (0,
                        a.default)({
                            abort: n,
                            path: s,
                            title: u,
                            index: f
                        }, g))
                    }
                    )
                }
            }, {
                key: "proxy",
                value: function(e, t) {
                    b(e, t)
                }
            }, {
                key: "platformChunk",
                value: function() {
                    return "undefined" == typeof plus ? 1 : 0
                }
            }, {
                key: "baseuUrl",
                set: function(e) {
                    f = e,
                    h.url = e,
                    p.url = e
                },
                get: function() {
                    return f
                }
            }, {
                key: "isUpOpenDown",
                set: function(e) {
                    g = e
                },
                get: function() {
                    return g
                }
            }]),
            e
        }()
          , w = new m;
        t.req = w;
        var v = m;
        t.RQ = v
    },
    "4c25": function(e, t, n) {
        "use strict";
        e.exports = {
            message: {
                app: {},
                index: {
                    search: "搜索表盘主题",
                    announcement: "公告",
                    token: "检测到分享口令",
                    token_hint: "是否跳转到分享的表盘详情页",
                    free_title: "免费软件声明",
                    free_hint: "该软件完全免费，凡是出售该软件的都是骗子！！！"
                },
                imageTool: {
                    choose: "重选",
                    close: "关闭",
                    rotate: "旋转",
                    preview: "预览",
                    upload: "上传"
                },
                tabbar: {
                    make: "制作",
                    explore: "探索",
                    tool: "工具",
                    bandBBS: "资源",
                    about: "关于"
                },
                make: {
                    select_basis: "选择底包",
                    select_basis_hint: "请选择",
                    choose: "选择表盘图片",
                    work_name: "名称",
                    work_name_placeholder: "给你的表盘取个名字吧",
                    work_desc: "简介",
                    work_desc_placeholder: "简单介绍下你的作品吧",
                    share: "分享表盘",
                    time_setting: "时间设置",
                    unfinished: "开发中...",
                    step_setting: "步数设置",
                    plus_setting: "心率设置",
                    submit: "提交制作",
                    download: "下载地址",
                    download_hint: "请在底部选择安裝方式",
                    empty_name_alert: "请填写表盘名字",
                    empty_img_alert: "请选择表盘图片",
                    processing: "打包中...",
                    copied: "已复制到剪切板",
                    empty_watchface: "空白表盘 (只有背景图片)",
                    customs_json: "自定义 JSON",
                    json_error: "JSON 格式错误",
                    load_json: "加载底包 JSON",
                    custom_ele: "自定义元素",
                    auto_replace: "自动下载并替换官方Bin",
                    cancel: "取消",
                    background: "背景图片",
                    select: "选择",
                    basis_ele: "底包元素",
                    display: "显示",
                    hide: "隐藏",
                    lock: "锁定",
                    custom_ele_side: "自定义元素",
                    add: "添加",
                    confirm: "确定",
                    close: "关闭",
                    showOrHide: "是否显示",
                    align_left: "左对齐",
                    center: "居中",
                    align_right: "右对齐",
                    custom_com: "选择自定义组件",
                    select_color: "选择颜色",
                    remove: "移除",
                    x: "X坐标",
                    y: "Y坐标",
                    scale: "缩放",
                    share_hint: "分享请先登录，提交表盘后，在关于-我的表盘设置分享",
                    color_diy: "颜色 DIY",
                    dync_pic: "动态图",
                    select_custom_ele: "请选择修改的元素",
                    fps_delay: "帧间隔",
                    packed_color_count: "256色打包模式（减小打包体积，如打包不成功，请禁用此选项）",
                    anti_aliasing: "抗锯齿（256色打包模式下，有效较少锯齿，如打包后有遮挡，请禁用此选项）",
                    select_gif_hint: "请先选择gif图片",
                    confirm_submit: "确认提交",
                    hint_1: "选择的底包，不支持此选项",
                    hint_2: "请先选择底包",
                    hint_3: "打包失败，请稍后重试",
                    hint_4: "请至少选择一项",
                    hint_5: "图片不能大于3M",
                    hint_6: "图片处理中，请稍后",
                    hint_7: "图片处理成功",
                    hint_8: "图片处理失败，请稍后再试",
                    donate_now: "捐赠我们",
                    ios_hint: "iOS用户请点此跳转至Safari下载"
                },
                explore: {
                    nav: ["最新上传", "最多下载", "编辑推荐"],
                    download: "下载",
                    processing: "下载中...",
                    loading: "加载中...",
                    download_option_1: "添加到我的表盘",
                    download_option_2: "自动下载并替换官方Bin",
                    download_option_3: "下载",
                    download_option_4: "取消",
                    download_option_5: "自动替换官方bin(Amazfit)",
                    report: "举报",
                    report_hint: "是否举报当前内容",
                    report_success: "举报成功",
                    share: "海报分享",
                    retween: "转发分享",
                    screenshot: "截屏分享",
                    screenshot_hint: "请手动截图",
                    bluetooth: "蓝牙一键同步"
                },
                about: {
                    login: "登录",
                    tutorial: "使用教程",
                    update: "检查更新",
                    app_download: "APP 下载",
                    web_tool: "网页版制作器",
                    update_history: "更新历史",
                    help: "帮助中心",
                    notice: "免责声明",
                    aboutUs: "关于我们",
                    feedback: "意见反馈",
                    myWatchface: "我的表盘",
                    setting: "设置选项",
                    setNickname: "设置昵称",
                    setNicknameHint: "请输入你的昵称",
                    uuidLogin: "设备ID登录",
                    qqLogin: "QQ登录",
                    wechatLogin: "微信登录",
                    hint_1: "暂不支持",
                    hint_2: "目前H5只支持设备ID登录",
                    hint_3: "注册失败",
                    hint_4: "无法获取设备ID",
                    hint_5: "请填写昵称",
                    hint_6: "注册成功",
                    genrated_before: "累计已生成",
                    genrated_after: "个表盘",
                    ios_shortcut: "IOS 安装通道",
                    donate: "成为捐赠者",
                    installed: "已安装表盘",
                    loginFirst: "请先登录",
                    comingsoon: "敬请期待",
                    donor: "捐赠者",
                    favourite: "我的收藏",
                    firmware_install: "固件安装",
                    tags: "分类归档",
                    tagsCloud: "收藏列表",
                    addFavourite: "收藏"
                },
                basis: {
                    back: "返回",
                    title: "选择底包",
                    confirm: "选择",
                    orgin: "默认",
                    upload_basis: "上传底包"
                },
                tools: {
                    title: "APP内置工具",
                    tools_1: "自动替换官方Bin",
                    tools_1_desc: "选择本地的一个Bin文件，可以自动替换官方的Bin。替换后，直接在对应APP同步对应的表盘即可，免去手动替换的麻烦。该功能只支持安卓版APP。建议在内部存储选择bin文件",
                    tools_2: "在线解包",
                    tools_2_desc: "手机上传即可解包",
                    tools_3: "在线打包",
                    tools_3_desc: "手机上传即可打包",
                    MiBandTools: "米环4工具",
                    online_unpack_pack: "在线打包/解包工具",
                    online_unpack_pack_hint: "网页版表盘打包/解包工具，适用于深度DIY用户",
                    heyplus: "黑加工具",
                    hint_1: "自动替换对应资源文件，无需手动操作。替换的目录为Android/data/com.ryeex.flash/cache/firmware/设备号/固件版本号/",
                    huami: "华米GTR 47mm工具",
                    huami_2: "华米智能手表青春版工具",
                    bluetooth: "固件升级",
                    bluetooth_desc: "通过蓝牙直接刷入手环的表盘、资源包、字库"
                },
                aboutus: {
                    authors: "开发者信息",
                    blog: "博客",
                    bandBBS: "米坛社区",
                    desc: "国内的小米手环资源分享社区，成立于2019.3.23日，致力于分享优秀的原创资源和优秀教程。打造一个属于你腕上的精彩世界！",
                    qq_group: "QQ群",
                    copy: "复制群号",
                    profile: "米坛主页",
                    oneclick: "一键加群",
                    logoauthors: "Logo 设计",
                    weibo: "微博"
                },
                help: {
                    hint_1: "重要提示",
                    hint_1_desc: "刷环有风险，DIY需谨慎！",
                    hint_2: "自制表盘怎么用？",
                    hint_2_desc: "APP自带自动下载替换官方Bin功能，但是某些情况下，会有兼容性的问题，可以手动下载自制表盘bin文件来替换“内部存储设备Androiddatacom.xiaomi.hm.health\fileswatch_skin_local”文件夹里的bin文件，文件名要和替换前一样，在同一目录下的用文本编辑器打开infos.xml，查看被替换的表盘名字，最后到小米运动APP同步对应的表盘即可。",
                    hint_2_desc_2: "替换表盘Bin之前，必须至少同步过一款官方表盘，因为这样文件夹内才有下载的表盘文件",
                    hint_3: "在哪可以下载更多制作精良的表盘？",
                    hint_3_desc: "你可以去米坛论坛资源区寻找，也可以加入以下的群，群文件有分享。还可以了解大神们最新的开发进度和消息。",
                    hint_4: "为什么APP有时候崩溃，不稳定？",
                    hint_4_desc: "开发组精力和财力有限，做不到兼容每一台手机，以及无法专门购买高性能服务器。如果有问题可以加群或者在米坛反馈。如果APP不能使用，可以使用网页版制作器，与APP同步更新。",
                    hint_5: "为什么官方表盘的时间图片不透明？",
                    hint_5_desc: "因为米环官方没想过你会改背景图。但是，开发组会慢慢完善这部分内容，处理成背景透明的素材。",
                    hint_6: "我想换回官方表盘怎么做",
                    hint_6_desc: "如果是没有被替换过文件的表盘，在小米运动APP同步表盘即可。如果是被替换过Bin的表盘，清空文件夹：内部存储设备Androiddatacom.xiaomi.hm.health\fileswatch_skin_local，最后打开小米运动APP同步表盘就会自动下载官方的Bin啦。",
                    hint_7: "iOS可以改表盘么？",
                    hint_7_desc: "可以制作和安装。首先在苹果商店安装【AmazTools】，然后在网页版下载想要的表盘，再点击表盘【下载窗口】的【跳转到Safari下载】，然后使用【AmazTools】打开进行刷环操作即可。开发组也提供了IOS越狱版APP安装包，需要越狱才能使用。没有上架Apple store是因为开发组精力有限，同时也没有具备相关的开发设备和条件。可以使用开发组提供的网页版工具，网页版工具功能与APP相差无几，并且与APP同步更新。",
                    hint_8: "为什么有的表盘下载之后也显示添加成功了，然后在我的表盘里面找不到？",
                    hint_8_desc: "部分动态表盘会有此问题，实际上bin已经添加到表盘目录了，由于小米运动APP不识别该bin文件，导致在列表中找不到，识别原理尚不清楚。只能用第二种替换bin方法来安装先。",
                    hint_9: "为什么无法蓝牙同步表盘/资源包/字库？",
                    hint_9_desc: "在使用APP的固件升级功能时，小米运动APP需要打开驻留在后台运行，否则会刷入失败",
                    hint_10: "小米运动APP更新到4.0.8版本后，我的表盘没有了",
                    hint_10_desc: "可以使用自动替换bin来刷入表盘。还可以下载旧版本（4.0.7）小米运动会刷入旧的固件，我的表盘功能也能够使用： http://t.cn/AiRk7ZmC"
                },
                mybin: {
                    myBin: "我的表盘",
                    upload: "上传",
                    share: "分享",
                    cancelShare: "取消",
                    delete: "删除",
                    downloadHistory: "下载历史",
                    clear: "清空",
                    block: "封禁",
                    normal: "正常",
                    download: "次下载",
                    revewing: "审核中",
                    share_hint: "未分享",
                    delete_success: "删除成功",
                    delete_ask: "是否删除",
                    delete_ask_title: "删除"
                },
                uploadBin: {
                    upload: "上传表盘",
                    static_pic: "静态预览图",
                    dyna_pic: "动态预览图",
                    select_bin: "Bin文件选择",
                    choosed: "已选择",
                    submit: "上传",
                    hint_1: "文件类型错误",
                    hint_1_content: "请选择Bin类型的表盘文件",
                    hint_2: "选择文件失败",
                    hint_2_content: "最近/下载文件列表选择文件可能有BUG，请尝试通过内部存储选择文件",
                    hint_3: "请选择bin文件",
                    upload_success: "上传成功",
                    upload_success_hint: "已添加到我的表盘列表",
                    upload_fail: "上传失败",
                    watchface_type: "表盘类型"
                },
                dialog: {
                    addToMyWatchFace: {
                        title: "暂不支持",
                        content: "目前只支持小米手环4"
                    },
                    loginDialog: {
                        wating: "打开QQ中..."
                    }
                },
                watchType: {
                    MiBand7: "小米手环7"
                },
                setting: {
                    language: "语言",
                    logout: "注销",
                    success: "成功"
                },
                update: {
                    desc: "更新摘要",
                    size: "更新大小",
                    market: "第三方市场下载",
                    update_now: "立即更新",
                    check: "检查更新",
                    hint: "提示",
                    restart: "应用将重启以完成更新",
                    update_unfinish: "更新尚未完成",
                    update_unfinish_hint: "您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？",
                    loading: "正在加载",
                    unkown: "未知",
                    none: "无",
                    no_update: "未找到发行版本",
                    find_update: "发现新版本",
                    newest: "当前是最新版了",
                    beta: "公测版",
                    release: "正式版",
                    cannt_find_url: "未找到下载地址",
                    process: "下载进度"
                },
                fileHelper: {
                    downloading: "下载中...",
                    file_type_error: "文件类型错误",
                    select_bin_hint: "请选择Bin类型的表盘文件",
                    not_support: "功能不支持",
                    not_support_hint: "该功能只支持安卓APP",
                    bin_not_found: "没有找到已下载的官方Bin",
                    bin_not_found_hint: "查找官方bin失败，没有可供替换的bin，请至少同步一款官方表盘",
                    replace_success: "替换成功",
                    replace_success_hint: "成功自动替换文件，请前往对应APP，同步以下表盘即可完成自定义",
                    search_fail: "查找失败",
                    search_fail_hint: "查找官方bin失败，没有可供替换的bin，请至少同步一款官方表盘",
                    replace_fail: "替换失败",
                    replace_fail_hint: "请手动替换表盘",
                    download_fail: "下载资源失败",
                    added_success: "添加成功",
                    added_success_hint: "请到小米运动APP - 我的表盘同步表盘 （如果没发现，返回小米运动APP表盘主界面重新进入我的表盘试试）",
                    added_fail: "添加失败",
                    download_fail_hint: "下载失败，文件可能已被封禁",
                    get_dir_fail: "获取目录失败",
                    get_dir_fail_hint: "请确保您已安装对应APP，并且至少同步一款官方表盘",
                    proceing: "执行中"
                },
                detail: {
                    title: "表盘详情",
                    Tutorials: "表盘使用教程",
                    hint_1: "点击下载按钮会出现几个选项，只选一种方法即可，推荐选第一个：",
                    hint_2: "【添加到我的表盘】：添加成功后，会把当前的表盘添加到小米运动APP-我的表盘中，最后到我的表盘中同步新添加的表盘即可。",
                    hint_3: "【自动替换bin】：自动替换一个已下载的表盘为当前的表盘，然后根据替换提示去小米运动APP-表盘中心同步提示的名字的表盘即可。",
                    hint_4: "【下载】：直接下载bin文件，可以手动去到对应的目录进行手动替换bin。",
                    hint_5: "更多问题请前往【关于】-【帮助中心】",
                    hint_6: "网页版只能使用【下载】",
                    hint_7: "表盘自定义工具",
                    hint_8: "在APP中打开",
                    hint_9: "【蓝牙一键同步】：省去其他步骤，直接通过蓝牙同步表盘。需要小米运动/Amazfit在后台运行。"
                },
                share: {
                    qq_share: "QQ分享",
                    copyLink: "复制链接",
                    copySuccess: "复制成功",
                    shareSuccess: "分享成功",
                    hint_1: "表盘分享：",
                    hint_2: "点击链接，再选择浏览器咑閞；或椱ァ製这段描述",
                    hint_3: "后到👉◇表盘自定义工具👈",
                    add_favourite: "收藏表盘",
                    add_success: "收藏成功"
                },
                updateHistory: {
                    u0729_1: "1. 新增华米GTR表盘自定义功能，需在软件上方先切换至GTR模块；",
                    u0729_2: "(1). 支持数字表盘、指针表盘的编辑，实时预览，编辑完成后一键打包下载或者替换至APP目录；",
                    u0729_3: "(2). 支持GTR表盘分享；",
                    u0729_4: "(3). 支持下载分享的表盘文件，支持将表盘文件一键替换至APP目录；",
                    u0729_5: "2. 新增黑加手环，一键下载并替换资源包；",
                    u0806_1: "1. APP 正式改名为：表盘自定义工具 （已经支持多种手环和手表）",
                    u0806_2: "2. 在选择底包的界面可以上传自己的底包",
                    u0806_3: "3. 优化界面",
                    u0806_4: "4. 增加设置界面",
                    u0806_5: "5. 增加一种登录方式，使用设备ID为账号，如果选用该方式，请允许相关权限；",
                    u0806_6: "6. 完善翻译。",
                    u0806_7: "7. 修复下载历史没有图片的问题",
                    u0806_8: "8. 修复无法从最近选择bin文件的BUG",
                    u0806_9: "9. 增加表盘详情页，点击表盘图片即可进入",
                    u0806_10: "10. 增加QQ分享，在表盘详情页可以把表盘转发到QQ",
                    u0806_11: "11. 增加链接分享，在表盘详情页可以复制链接和口令。复制描述后，打开APP可以直接跳转到该表盘。点击链接可以打开H5版表盘详情",
                    u0806_12: "12. 支持网页链接直接打开APP",
                    u0806_13: "13. 完善常见问题的内容",
                    u0907_1: "1. 增加通过蓝牙同步米环4的表盘、资源包、字库",
                    u0907_2: "2. 增加查看和删除已下载的表盘",
                    u0907_3: "3. 增加小米手环、黑加手环资源包列表(因小米运动客户端更新到4.0.8，导致资源包无法使用，建议将小米运动降级至4.0.7，否则资源包无法使用。我们会尽快适配新版本)",
                    u0907_4: "4. 支持资源包预览",
                    u0907_5: "5. 增加捐赠入口",
                    u0907_6: "6. 增加表盘收藏功能",
                    u0907_7: "7. 修复上传文件选择后没有反应的BUG",
                    u0907_8: "8. 修复我的表盘右滑无法删除的BUG",
                    u0907_9: "9. 增加表盘制作自定义元素X/Y位置微调功能",
                    u0907_10: "10. 优化元素调整界面表现",
                    u0907_11: "11. 修复正常表盘显示被封禁的状态异常",
                    u0907_12: "12. 废除悬浮广告",
                    u0907_13: "13. 完善英文"
                },
                donation: {
                    apply_btn: "申请捐赠者",
                    alipay: "支付宝",
                    wechat: "微信",
                    title1: "捐赠说明",
                    content1: "表盘自定义工具是免费的软件。捐赠是完全自愿的，如果你喜欢我们的软件，请考虑捐赠支持我们。",
                    conetnt1_1: "请在右上角点击申请捐赠者即可获取捐赠者功能",
                    content1_2: "蓝牙安装功能因开发组精力有限，可能不适配所有手机，请先点击【试用捐赠者功能】按钮，并确认该功能是否适配您的机型。",
                    title2: "捐赠者功能",
                    content2_1: "捐赠",
                    content2_2: "一次性捐赠15元（包括15元）以上",
                    content2_3: "即可获得下面功能并且无时间限制：",
                    item1: "1. 支持APP内管理小米运动目录下面的表盘 (仅限安卓APP)",
                    item2: "2. 支持蓝牙直接同步表盘，资源包，字库 (仅限安卓APP，微信小程序只支持同步表盘)",
                    item3: "3. 捐赠者作品可以优先上编辑推荐",
                    item4: "4. 捐赠者分享的表盘会有明显的标识",
                    item5: "5. 捐赠者可以收藏喜欢的表盘",
                    item6: "6. 更多高级功能陆续添加中...",
                    title3: "资金用途",
                    title3_1: "软件开发",
                    content3_1: "目前的开发工作包括添加新功能、修复问题、改善软件在各个平台上的表现等。",
                    title3_2: "软件维护",
                    content3_2: "为了保证软件的使用速度和稳定性还需要支付高昂的服务器费用和CDN费用。",
                    title3_3: "硬件购置",
                    content3_3: "为了支持更多的智能手表、手环，我们使用一部分资金来购置各种开发测试用的硬件。",
                    trade_no: "单号",
                    contact: "联系方式（可选）",
                    apply: "提交申请",
                    trade_no_hint: "支付宝、微信、Paypal转账产生的单号",
                    trade_no_empty: "请填写单号",
                    apply_success: "申请成功",
                    donationFirst: "请先成为捐赠者才能使用该功能",
                    donationFirst_hint: "提示",
                    donationFirst_cancel: "取消",
                    donationFirst_confirm: "前往捐赠",
                    open: "打开",
                    try_feature: "试用捐赠者功能",
                    try_feature_hint: "试用一天的捐赠者功能，一天后恢复",
                    try_cancel: "取消",
                    try_confirm: "确定",
                    try_success: "申请成功",
                    try_hint_1: "您已是捐赠者",
                    try_hint_2: "捐赠者功能试用中",
                    try_hint_3: "捐赠者功能试用已过期",
                    only_donation: "该功能仅限捐赠者使用",
                    review_time: "审核时间：支付宝渠道约20分钟，微信渠道约1到2天。如超过审核时间仍未获得捐赠者头衔，请确认订单号并重新提交申请。",
                    save: "保存到相册"
                },
                resource: {
                    mihuan4: "小米手环4普通版",
                    resource_pack: "资源包",
                    content: "更多的不一样，源自资源包定制",
                    mihuan4NFC: "小米手环4NFC版",
                    heyplus: "黑加手环",
                    select_res: "选择资源",
                    res_detail: "资源详情",
                    preview_and_install: "预览&安装",
                    preview: "预览",
                    auto_replace: "自动替换",
                    comment: "论坛内下载",
                    notice: "注意事项",
                    notce_item_1: "请确认该资源版本，固件版本与手环当前版本一致，否则刷入无效",
                    notice_item_2: "请确实该资源是否适用于您的设备，小米手环4/小米手环4NFC的资源包不通用",
                    notice_item_3: "刷后如不满意，可再次刷官方包回退",
                    notice_tiem_4: "刷机有风险，请自行评估与承担风险，本APP概不负责",
                    donwloading: "资源包下载中，请稍后",
                    replace_success: "替换成功"
                },
                bluetooth: {
                    firmware_install: "固件安装",
                    forMiBand4: "小米手环4表盘/资源包/字库安装"
                }
            }
        }
    },
    "4c5e": function(e, t, n) {
        "use strict";
        e.exports = {
            message: {
                index: {
                    search: "Search watchface",
                    announcement: "Announcement",
                    token: "Shared token detected",
                    token_hint: "Jump to the shared watchface detail page ?",
                    free_title: "Free Software",
                    free_hint: "This software is completely free. All the people who sell this software are scammers! ! !"
                },
                imageTool: {
                    choose: "choose",
                    close: "close",
                    rotate: "rotate",
                    preview: "preview",
                    upload: "OK"
                },
                tabbar: {
                    make: "DESIGN",
                    explore: "EXPLORE",
                    tool: "TOOLS",
                    bandBBS: "RESOURCE",
                    about: "ABOUT"
                },
                make: {
                    select_basis: "Select watchface",
                    select_basis_hint: "select",
                    choose: "Select image",
                    work_name: "Name",
                    work_name_placeholder: "Give your watchface a name.",
                    work_desc: "Intro",
                    work_desc_placeholder: "Briefly introduce your watchface.",
                    share: "Share",
                    time_setting: "Time Settings",
                    unfinished: "Coming soon...",
                    step_setting: "Step Setting",
                    plus_setting: "Heart Rate Setting",
                    submit: "Submit",
                    download: "Download ways",
                    download_hint: "Please choose one way to download the bin",
                    empty_name_alert: "Please fill in the name",
                    empty_img_alert: "Please select one image",
                    processing: "Packing...",
                    copied: "copied!",
                    empty_watchface: "Blank watchface (only background image)",
                    customs_json: "Custom JSON",
                    json_error: "JSON format error",
                    load_json: "Load Watchface Json",
                    custom_ele: "elements",
                    auto_replace: "Automatic download and replace",
                    cancel: "Cancel",
                    background: "Background image",
                    select: "Select",
                    basis_ele: "Watchface elements",
                    display: "Show",
                    hide: "Hide",
                    lock: "Lock",
                    custom_ele_side: "elements",
                    add: "Add",
                    confirm: "Confirm",
                    close: "Close",
                    showOrHide: "Visible",
                    align_left: "Align left",
                    center: "Center",
                    align_right: "Align right",
                    custom_com: "Custom component",
                    select_color: "Color",
                    remove: "Remove",
                    x: "X",
                    y: "Y",
                    scale: "SCALE",
                    share_hint: "You need to log in to share",
                    color_diy: "Custom color",
                    dync_pic: "GIF",
                    select_custom_ele: "Please select an element",
                    fps_delay: "Frame interval",
                    packed_color_count: "256-color mode (reducing the packing volume. If the packaging is not successful, please disable this option)",
                    anti_aliasing: "Anti-aliasing (effectively less jagged in 256-color packing mode. If the elements are stacked after packing, disable this option)",
                    select_gif_hint: "Please select gif image first",
                    confirm_submit: "Submit",
                    hint_1: "This option is not supported for the selected watchface",
                    hint_2: "Please select the watchface first.",
                    hint_3: "Packaging failed, please try again later",
                    hint_4: "Please select at least one item",
                    hint_5: "Image cannot be larger than 3Mb",
                    hint_6: "Image processing...",
                    hint_7: "Successful processing",
                    hint_8: "Image processing failed, please try again later",
                    donate_now: "Donate Now",
                    ios_hint: "iOS user click here to download"
                },
                explore: {
                    nav: ["Latest upload", "Top Downloads", "Random", "Recommend"],
                    download: "Download",
                    processing: "Downloading...",
                    loading: "Loading...",
                    download_option_1: "Add to my band displays",
                    download_option_2: "Download and replace",
                    download_option_3: "Direct download",
                    download_option_4: "Cancel",
                    download_option_5: "Download and replace(for Amazfit)",
                    report: "Report",
                    report_hint: "Report this watchface",
                    report_success: "Report success",
                    share: "Share poster",
                    retween: "Share with friends",
                    screenshot: "Share screenshots",
                    screenshot_hint: "Please take a screenshot",
                    bluetooth: "Synchronization by Bluetooth"
                },
                about: {
                    login: "Login",
                    tutorial: "Tutorial",
                    update: "Check Update",
                    app_download: "APP Download",
                    web_tool: "Web version",
                    update_history: "Update History",
                    help: "Help",
                    notice: "Terms of Use",
                    aboutUs: "About Us",
                    feedback: "Feedback",
                    myWatchface: "My Watchface",
                    setting: "Setting",
                    setNickname: "Set your nickname",
                    setNicknameHint: "Please input your nickname",
                    uuidLogin: "Device ID Login",
                    qqLogin: "QQ Login",
                    wechatLogin: "WeChat Login",
                    hint_1: "Not support",
                    hint_2: "Currently H5 only supports device ID login.",
                    hint_3: "Registration failed",
                    hint_4: "Unable to get device ID",
                    hint_5: "Please fill in nickname",
                    hint_6: "Registration success",
                    genrated_before: "Total ",
                    genrated_after: " watchfaces generated",
                    ios_shortcut: "IOS Shortcut",
                    donate: "Donate",
                    installed: "Installed Watchface",
                    loginFirst: "Please login first",
                    comingsoon: "Coming soon",
                    donor: "Donor",
                    favourite: "Favourites",
                    firmware_install: "Firmware Installer",
                    tags: "Tags",
                    tagsCloud: "Favourites",
                    addFavourite: "Mark"
                },
                basis: {
                    back: "Back",
                    title: "Select watchface",
                    confirm: "Select",
                    orgin: "default",
                    upload_basis: "Upload"
                },
                tools: {
                    title: "APP Tools",
                    tools_1: "Automatically replace Bin file",
                    tools_1_desc: "Select a local Bin file to automatically replace the official Bin. After the replacement, the corresponding dial can be synchronized directly in the Xiaomi Sports APP, eliminating the trouble of manual replacement. This feature only supports the Android app.",
                    tools_2: "Online Unpacking",
                    tools_2_desc: "Upload a bin file to unpack",
                    tools_3: "Online Packaging",
                    tools_3_desc: "Upload the zip file to package",
                    MiBandTools: "Mi Band 4 Tools",
                    online_unpack_pack: "Online Unpacking/Online Packaging",
                    online_unpack_pack_hint: "Web version of the watchface bin file packaging / unpacking tool for DIY users",
                    heyplus: "HeyPlus Tools",
                    hint_1: "Automatically replace the corresponding bin resource file without manual operation. The replaced directory is Android/data/com.ryeex.flash/cache/firmware/{device number}/{firmware version number}/",
                    huami: "AMAZFIT GTR 47mm Tools",
                    huami_2: "AMAZFIT Verge Lite Tools",
                    bluetooth: "Firmware Installer",
                    bluetooth_desc: "Directly upgrade the band's wathcface, resource pack, font library via Bluetooth"
                },
                aboutus: {
                    authors: "Developers",
                    blog: "Blog",
                    bandBBS: "BandBBS",
                    desc: "Xiaomi Watchface Resource Sharing Community, established on March 23, 2019, is dedicated to sharing excellent original resources and excellent tutorials. Create a wonderful world that belongs to your smart band！",
                    qq_group: "QQ Group",
                    copy: "Copy",
                    profile: "Profile",
                    oneclick: "Join",
                    logoauthors: "Logo Design",
                    weibo: "Weibo"
                },
                help: {
                    hint_1: "Important!",
                    hint_1_desc: "DIY needs to be cautious!",
                    hint_2: "How to use the watchface?",
                    hint_2_desc: 'The APP has the function of automatically installing the dial (cannot be automatically synchronized).You can manually download the bin file to replace the bin file in the "Internal Storage DeviceAndroiddatacom.xiaomi.hm.health\fileswatch_skin_local" folder. The file name should be the same as before the replacement. Open infos.xml in a text editor in the same directory to see the name of the replaced watchface. Finally, go to the Xiaomi Sports APP to synchronize the watchface.',
                    hint_2_desc_2: "Before replacing the watcface Bin, you must have synchronized at least one official watcface. This way you can see the downloaded watcface file in the folder.",
                    hint_3: "Where can I download more well-made watchfaces?",
                    hint_3_desc: "You can go to https://www.bandbbs.cn/. You can also join the following QQ group. You can also learn about the latest development progress and news of the software.",
                    hint_4: "Why does the app sometimes crash?",
                    hint_4_desc: "The development team has limited energy and financial resources. Can't be compatible with every mobile phone. The development team cannot specifically purchase high-performance servers. If you have questions, you can feedback to the QQ group or forum. If the app is not available, you can use the web version of the software.",
                    hint_5: "Why is the material of the watchface not transparent?",
                    hint_5_desc: "Because the Mihuan official did not think that you will change the background picture.",
                    hint_6: "How to change back to the official watchface?",
                    hint_6_desc: "If the watchface has been replaced, you can empty the following folder: internal storage device Androiddatacom.xiaomi.hm.health\fileswatch_skin_local.",
                    hint_7: "Can iOS design the watchface?",
                    hint_7_desc: "You can use the web version of software for production.",
                    hint_8: "Why I can't find watchface in My band displays after addedd successful?",
                    hint_8_desc: "Some dynamic watchface may have this problem. In fact, bin file has been successfully added to the dial directory. Since the Xiaomi Sports APP does not recognize the bin file. We are still not clear about the identification mechanism. You can use the second replacement bin method to install first.",
                    hint_9: "Why can't I synchronize my watchface/resource pack/font via Bluetooth?",
                    hint_9_desc: "When using the firmware upgrade function of the APP, the Xiaomi Sports APP needs to open and reside in the background, otherwise it will fail to update.",
                    hint_10: "After XiaoMi sports app was updated to version 4.0.8, my watch displays was gone.",
                    hint_10_desc: "You can use automatic replacement bin. You can also download the old version (4.0.7) Xiaomi Sports: http://t.cn/AiRk7ZmC"
                },
                mybin: {
                    myBin: "My Watchface",
                    upload: "Upload",
                    share: "Share",
                    cancelShare: "Cancel",
                    delete: "Delete",
                    downloadHistory: "History",
                    clear: "Clear",
                    block: "Block",
                    normal: "Pass",
                    download: " downloads",
                    revewing: "Under Review",
                    share_hint: "Private",
                    delete_success: "Delete successed",
                    delete_ask: "Delete ?",
                    delete_ask_title: "Delete"
                },
                uploadBin: {
                    upload: "Upload Watchface",
                    static_pic: "Static preview",
                    dyna_pic: "Dynamic preview",
                    select_bin: "Select one bin file",
                    choosed: "Choosed",
                    submit: "Upload",
                    hint_1: "File type error",
                    hint_1_content: "Please select the Bin file of watchface",
                    hint_2: "Failed to select file",
                    hint_2_content: "The recent/download file list selection file may have a bug. Please try to select files via internal storage",
                    hint_3: "Please select one bin file",
                    upload_success: "Upload success",
                    upload_success_hint: "Successfully added to my watchface list",
                    upload_fail: "Upload failed",
                    watchface_type: "Watchface Type"
                },
                dialog: {
                    addToMyWatchFace: {
                        title: "Not support",
                        content: "Currently only supports Mi smart band 4"
                    },
                    loginDialog: {
                        wating: "Open QQ ..."
                    }
                },
                watchType: {
                    MiBand7: "Mi Band 7"
                },
                setting: {
                    language: "language",
                    logout: "Logout",
                    success: "Success"
                },
                update: {
                    desc: "Update summary",
                    size: "Update size",
                    market: "Application market",
                    update_now: "Update now",
                    check: "Check for updates",
                    hint: "Hint",
                    restart: "The app will restart to complete the update",
                    update_unfinish: "Update not completed",
                    update_unfinish_hint: "You have downloaded the update package, but have not completed the installation. Do you want to continue to install the update package?",
                    loading: "loading",
                    unkown: "unknown",
                    none: "None",
                    no_update: "Release not found",
                    find_update: "Discover new version",
                    newest: "Currently the latest version",
                    beta: "Beta",
                    release: "Release",
                    cannt_find_url: "Download url not found",
                    process: "Download progress "
                },
                fileHelper: {
                    downloading: "downloading...",
                    file_type_error: "File type error",
                    select_bin_hint: "Please select the one Bin file",
                    not_support: "Not supported",
                    not_support_hint: "This feature only supports Android app",
                    bin_not_found: "Unable to find the official Bin file",
                    bin_not_found_hint: "Finding the official bin failed, there is no bin to replace. Please synchronize at least one official watch display",
                    replace_success: "Replacement success",
                    replace_success_hint: "Successfully replaced the file. Please go to the corresponding app. Synchronize the following watch display name to complete customization",
                    search_fail: "Find failure",
                    search_fail_hint: "Finding the official bin failed, there is no bin to replace. Please synchronize at least one official watch display",
                    replace_fail: "Replacement failed",
                    replace_fail_hint: "Please manually replace the watchface",
                    download_fail: "Download resource failed",
                    added_success: "Added successfully",
                    added_success_hint: "Please go to the Xiaomi Sports App - My band displays and  Synchronized the added watchface(If you don't find it, return to the Xiaomi Sports APP main interface and re-enter My band displays)",
                    added_fail: "Add failed",
                    download_fail_hint: "Download failed, file may have been banned",
                    get_dir_fail: "Failed to get directory",
                    get_dir_fail_hint: "Make sure you have the app installed and sync at least one official band display",
                    proceing: "processing"
                },
                detail: {
                    title: "Watchface Details",
                    Tutorials: "Watchface tutorial",
                    hint_1: "Clicking the download button will pop up a few options. Just select one method. Recommend the first one:",
                    hint_2: "Add to my band displays: the software will add the current watchface to the Xiaomi Sports app - Add to my band displays.",
                    hint_3: "Download and replace: automatically replaces a downloaded watchface with the current watchface, and then according to the replacement prompt, go to the watchface of the name of the Xiaomi Sports APP-Band displays and Sync watchface.",
                    hint_4: "Download: Download the bin file directly.",
                    hint_5: "For more questions, please go to [About]-[Tutorial]",
                    hint_6: "Web version can only use [Download]",
                    hint_7: "Watchface Editor",
                    hint_8: "open APP",
                    hint_9: "Synchronization by Bluetooth：Synchronize the watchface directly via Bluetooth. Need Xiaomi Sports APP to run in the background."
                },
                share: {
                    qq_share: "QQ Share",
                    copyLink: "Copy Link",
                    copySuccess: "Copied!",
                    shareSuccess: "Share success",
                    hint_1: "Watchface share: ",
                    hint_2: "Click link to open；or copy this text",
                    hint_3: " and back to👉◇WFedit Master👈",
                    add_favourite: "Add to Favourites",
                    add_success: "Success"
                },
                updateHistory: {
                    u0729_1: "1. Added AMAZFIT GTR watch customization function. You need to switch to GTR module first on the software.",
                    u0729_2: "(1). Supported digital watchface, pointer editing, real-time preview, one-click package download and replace to APP directory after editing；",
                    u0729_3: "(2). Supported GTR watchface sharing；",
                    u0729_4: "(3). Supported to download and share the watchface file, support one-click replacement of the watchface file to the APP directory;",
                    u0729_5: "2. Added Heyplus bands support. And one-click download and replace the watchface file",
                    u0806_1: "1. APP renamed: WFeditor",
                    u0806_2: "2. Supported customize watchface in design",
                    u0806_3: "3. Improved UI",
                    u0806_4: "4. Added settings",
                    u0806_5: "5. Supported  device id login",
                    u0806_6: "6. Improved translation (about 95% English)",
                    u0806_7: "7. Fixed images didn't display in download history",
                    u0806_8: "8. Fixed File selector cannot select file from [recent]",
                    u0806_9: "9. Added watachface detail page",
                    u0806_10: "10. Supported QQ share",
                    u0806_11: "11. Supported link share",
                    u0806_12: "12. Supported open APP by Web WFeditor",
                    u0806_13: "13. Improved FAQ content",
                    u0907_1: "1. Added support to install watchface, resource pack, font via Bluetooth",
                    u0907_2: "2. Added support for installed watchface management",
                    u0907_3: "3. Added List for Miband 4 / HeyPlus Band resource pack",
                    u0907_4: "4. Added support for resource pack preview",
                    u0907_5: "5. Added donation",
                    u0907_6: "6. Added favourites",
                    u0907_7: "7. Fixed bug when choose file",
                    u0907_8: "8. Fixed bug that cannot delete the watchface in my watchface page",
                    u0907_9: "9. Improved custom elements X/Y position adjustment",
                    u0907_10: "10. Improved UI",
                    u0907_11: "11. Fixed block bug on my watchface page",
                    u0907_12: "12. Removed suspended ads",
                    u0907_13: "13. Improved translations"
                },
                donation: {
                    apply_btn: "Apply",
                    alipay: "Alipay",
                    wechat: "WeChat",
                    title1: "Donation Instructions",
                    content1: "The WFedit Master is free software. Donations are completely voluntary. If you like our software, please consider donating to support us.",
                    conetnt1_1: "Please apply for a donor in the upper right corner to get the donor function.",
                    content1_2: "The Bluetooth installation function may not be compatible with all mobile phones. Please click the [Start Pro Trial] button first and confirm whether the function is suitable for your mobile phone.",
                    title2: "Donor function",
                    content2_1: "Donate",
                    content2_2: "$2.10 (including $2.10) or more",
                    content2_3: "You will get the following features and no time limit:",
                    item1: "1. Support for managing downloaded watchface in internal storage (Android apps only)",
                    item2: "2. Support direct synchronization watchface, resource package, font library by Bluetooth (Android APP only)",
                    item3: "3. Donor works will be recommended first",
                    item4: "4. The watchface shared by the donor will be highlighted",
                    item5: "5. Support add to favourites",
                    item6: "6. More advanced features are being added one after another...",
                    title3: "Use of Funds",
                    title3_1: "Software Development",
                    content3_1: "Current development efforts include adding new features, fixing problems, and improving the performance of the software on various platforms.",
                    title3_2: "Software Maintenance",
                    content3_2: "In order to ensure the speed and stability of the software, it also requires high server fees and CDN fees.",
                    title3_3: "Hardware purchase",
                    content3_3: "In order to support more smart watches and bracelets, we use a portion of the funds to purchase various hardware for development testing.",
                    trade_no: "Trade No.",
                    contact: "Contact (optional)",
                    apply: "Submit",
                    trade_no_hint: "The number generated by Alipay, WeChat, Paypal transfer",
                    trade_no_empty: "Please fill the Trade No.",
                    apply_success: "Apply success",
                    donationFirst: "Please become a donor before you can use this feature.",
                    donationFirst_hint: "Hint",
                    donationFirst_cancel: "Cancel",
                    donationFirst_confirm: "Donate",
                    open: "Open",
                    try_feature: "Start Pro Trial",
                    try_feature_hint: "Try pro function one day",
                    try_cancel: "Cancel",
                    try_confirm: "Confirm",
                    try_success: "Pro trial actived",
                    try_hint_1: "You are already a donor",
                    try_hint_2: "Pro function is actived",
                    try_hint_3: "Pro feature trial has expired",
                    only_donation: "Request for Pro function",
                    review_time: "Time: 10 minutes to 2 days",
                    save: "Save to Photos Album"
                },
                resource: {
                    mihuan4: "Mi Band 4",
                    resource_pack: "Resource Pack",
                    content: "Resource pack customization brings more exciting",
                    mihuan4NFC: "Mi Band 4 NFC",
                    heyplus: "HeyPlus Band",
                    select_res: "Select Resource",
                    res_detail: "Resource Detail",
                    preview_and_install: "Preview&Install",
                    preview: "Preview",
                    auto_replace: "Automatic Replace",
                    comment: "Download in BBS",
                    notice: "NOTES",
                    notce_item_1: "Please confirm the resource version. The firmware version needs to be the same as the current version of the band, otherwise the upgrade will be invalid.",
                    notice_item_2: "Please make sure that the resource is suitable for your device. The resource package of MiBand 4/MiBand 4NFC is not compatible.",
                    notice_item_3: "Upgrade the official package can be rolled back",
                    notice_tiem_4: "The upgrade is risky. Please assess and take risks yourself. We are not responsible for use.",
                    donwloading: "Downloading",
                    replace_success: "Replace success"
                },
                bluetooth: {
                    firmware_install: "Firmware Installer",
                    forMiBand4: "MiBand 4 watchface/resource pack/font install"
                }
            }
        }
    },
    "51ec": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3cf1")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    5440: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("de6d"))
          , a = {
            components: {
                tkiFileManager: o.default
            },
            data: function() {
                return {
                    path: "",
                    modalName: "",
                    heyResList: [],
                    baseHeyUrl: "http://118.25.85.118:8080/",
                    heyVersion: "",
                    currentSelectType: "mi7",
                    tools: []
                }
            },
            created: function() {
                var e = this;
                this.$http.ajax({
                    path: "config/json/mi7_tools",
                    type: "get"
                }).then(function(t) {
                    e.tools = t
                })
            },
            methods: {
                openUrl: function(e) {
                    window.location.href = e
                },
                comingSoon: function() {
                    uni.showToast({
                        title: "敬请期待",
                        icon: "none"
                    })
                },
                openFile: function(e) {
                    uni.showToast({
                        icon: "none",
                        title: "该功能只支持APP"
                    }),
                    setTimeout(function() {
                        window.location.href = "https://www.coolapk.com/apk/tech.pingx.watchface"
                    }, 2e3)
                },
                resultPath: function(e) {
                    e ? (console.log(e),
                    this.$fileHelper.oepnBinFileAndReplace(e, this.currentSelectType),
                    this.path = e) : uni.showModal({
                        title: "选择文件失败",
                        content: "最近/下载文件列表选择文件可能有BUG，请尝试通过内部存储选择文件",
                        showCancel: !1
                    })
                },
                hideModal: function() {
                    this.modalName = ""
                },
                goToFW: function() {
                    if (this.isLoginFun()) {
                        console.log("打开安装页面");
                        var e = plus.android.runtimeMainActivity()
                          , t = plus.android.importClass("android.content.Intent")
                          , n = plus.android.importClass("com.givemefive.ble.BLEActivity")
                          , i = new t(e,n.class);
                        e.startActivity(i)
                    } else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                goToEbook: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            console.log("打开安装页面");
                            var e = plus.android.runtimeMainActivity()
                              , t = plus.android.importClass("android.content.Intent")
                              , n = plus.android.importClass("com.givemefive.ble.EBookActivity")
                              , i = new t(e,n.class);
                            i.putExtra("limitMac", this.isLoginFun()),
                            e.startActivity(i)
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                goToKcb: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            console.log("打开安装页面");
                            var e = plus.android.runtimeMainActivity()
                              , t = plus.android.importClass("android.content.Intent")
                              , n = plus.android.importClass("com.givemefive.ble.KcbActivity")
                              , i = new t(e,n.class);
                            i.putExtra("limitMac", this.isLoginFun()),
                            e.startActivity(i)
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                goToPicture: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            console.log("打开安装页面");
                            var e = plus.android.runtimeMainActivity()
                              , t = plus.android.importClass("android.content.Intent")
                              , n = plus.android.importClass("com.givemefive.ble.PictureActivity")
                              , i = new t(e,n.class);
                            i.putExtra("limitMac", this.isLoginFun()),
                            e.startActivity(i)
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                donationProtect: function() {
                    uni.showModal({
                        title: this.i18n.donation.donationFirst_hint,
                        content: this.i18n.donation.donationFirst,
                        confirmText: this.i18n.donation.donationFirst_confirm,
                        cancelText: this.i18n.donation.donationFirst_cancel,
                        success: function(e) {
                            e.confirm ? uni.navigateTo({
                                url: "/pages/about/donate/donate"
                            }) : e.cancel
                        }
                    })
                },
                goToBLETool: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            console.log("打开安装页面");
                            var e = plus.android.runtimeMainActivity()
                              , t = plus.android.importClass("android.content.Intent")
                              , n = plus.android.importClass("com.givemefive.ble.BLEActivityMi7")
                              , i = new t(e,n.class);
                            i.putExtra("limitMac", this.isLoginFun()),
                            e.startActivity(i)
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                goToBLEToolMan: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            console.log("打开安装页面");
                            var e = plus.android.runtimeMainActivity()
                              , t = plus.android.importClass("android.content.Intent")
                              , n = plus.android.importClass("com.givemefive.ble.BLEActivityMi7Man")
                              , i = new t(e,n.class);
                            i.putExtra("limitMac", this.isLoginFun()),
                            e.startActivity(i)
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                }
            }
        };
        t.default = a
    },
    "5d8b": function(e, t, n) {
        var i = n("c1eb");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("74bdfe0a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6104: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-modal",
                class: "Modal" == e.modalName ? "show" : ""
            }, [n("v-uni-view", {
                staticClass: "cu-dialog"
            }, [n("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end"
            }, [n("v-uni-view", {
                staticClass: "content"
            }, [e._v(e._s(e.i18n.make.download))]), n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.hideModal(t)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-close text-red"
            })], 1)], 1), n("v-uni-view", {
                staticClass: "padding-xl"
            }, [n("v-uni-text", {
                staticStyle: {
                    display: "block",
                    "margin-bottom": "20px"
                }
            }, [e._v(e._s(e.i18n.make.download_hint))])], 1), n("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end",
                staticStyle: {
                    width: "100%"
                }
            }, [n("v-uni-view", {
                staticStyle: {
                    width: "100%",
                    padding: "10px"
                }
            }, [n("v-uni-button", {
                staticClass: "cu-btn block bg-gradual-purple lg",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.bluetoothForIOS(t)
                    }
                }
            }, [e._v(e._s(e.i18n.explore.bluetooth))]), n("v-uni-button", {
                staticClass: "cu-btn block bg-gray margin-tb-sm lg",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.hideModal(t)
                    }
                }
            }, [e._v(e._s(e.i18n.make.cancel))])], 1)], 1)], 1)], 1), n("ble-dialog", {
                ref: "bledialog"
            }), n("ble-dialog-ios", {
                ref: "bledialogios"
            })], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    6444: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "explore"
            }, [n("v-uni-scroll-view", {
                staticClass: "bg-white nav text-center",
                attrs: {
                    "scroll-x": ""
                }
            }, [e._l(e.i18n.explore.nav, function(t, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "cu-item",
                    class: i == e.TabCur ? "text-blue cur" : "",
                    attrs: {
                        "data-id": i
                    },
                    on: {
                        click: function(t) {
                            t = e.$handleEvent(t),
                            e.tabSelect(t)
                        }
                    }
                }, [e._v(e._s(t))])
            }), n("v-uni-view", {
                staticClass: "cu-item",
                staticStyle: {
                    float: "right"
                },
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.showSubTag(t)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "lg cuIcon-filter",
                class: e.subtagShow ? "text-orange" : "text-gray"
            })], 1)], 2), n("v-uni-scroll-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.subtagShow,
                    expression: "subtagShow"
                }],
                staticClass: "bg-white nav text-center padding-sm radius shadow bg-white",
                staticStyle: {
                    "margin-top": "90upx"
                },
                attrs: {
                    "scroll-x": ""
                }
            }, e._l(e.tagsList, function(t, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "cu-tag round",
                    class: i == e.TabCurSub ? "bg-orange" : "line-orange",
                    attrs: {
                        "data-id": i
                    },
                    on: {
                        click: function(t) {
                            t = e.$handleEvent(t),
                            e.tabSubSelect(t)
                        }
                    }
                }, [e._v(e._s(t.name))])
            }), 1), n("v-uni-view", {
                staticClass: "list"
            }, e._l(e.list, function(t, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "cu-card case",
                    style: [{
                        width: "250upx"
                    }]
                }, [n("v-uni-view", {
                    staticClass: "cu-item shadow",
                    class: ["1" == t.donation ? "donation" : "non-donation"],
                    staticStyle: {
                        margin: "3px",
                        position: "relative"
                    }
                }, ["1" == t.donation ? n("v-uni-image", {
                    staticStyle: {
                        position: "absolute",
                        width: "35px",
                        height: "35px",
                        top: "0",
                        right: "0",
                        "z-index": "3"
                    },
                    attrs: {
                        src: "../../static/donation_top_right.png",
                        mode: "aspectFill"
                    }
                }) : e._e(), n("v-uni-view", {
                    staticClass: "image img-view",
                    class: ["1" == t.donation ? "donation-img-bg" : ""],
                    style: [{
                        width: "235upx",
                        height: "597upx"
                    }]
                }, [n("v-uni-image", {
                    staticClass: "watchface-img",
                    staticStyle: {
                        "border-radius": "117upx"
                    },
                    attrs: {
                        src: t.preview,
                        mode: "widthFix",
                        "lazy-load": !0
                    },
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.goToWatchfaceDetail(t.id, t)
                        }
                    }
                })], 1), n("v-uni-view", {
                    staticClass: "cu-list"
                }, [n("v-uni-view", {
                    staticClass: "cu-item padding-xs"
                }, [n("v-uni-view", {
                    staticClass: "content flex-sub",
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.goToWatchfaceDetail(t.id, t)
                        }
                    }
                }, [n("v-uni-view", {
                    staticStyle: {
                        "font-size": "14px",
                        height: "20px",
                        display: "block",
                        "overflow-x": "auto",
                        "white-space": "nowrap"
                    }
                }, [e._v(e._s(t.name))]), t.nickname ? n("v-uni-view", {
                    staticClass: "text-sm",
                    staticStyle: {
                        "overflow-x": "auto",
                        "white-space": "nowrap",
                        color: "#607D8B",
                        height: "18px",
                        display: "flex",
                        "align-items": "center"
                    }
                }, ["1" == t.donation ? n("v-uni-image", {
                    staticStyle: {
                        height: "14px",
                        width: "14px",
                        "margin-right": "6px"
                    },
                    attrs: {
                        src: "../../static/donation.png",
                        mode: "aspectFill"
                    }
                }) : e._e(), e._v("@" + e._s(t.nickname))], 1) : n("v-uni-view", {
                    staticClass: "text-sm text-cut"
                }, [e._v("@匿名")]), n("v-uni-text", {
                    staticClass: "desc text-grey"
                }, [e._v(e._s(t.desc))]), n("v-uni-view", {
                    staticClass: "text-gray text-sm flex justify-between"
                }, [e._v(e._s(t.createdAt)), n("v-uni-view", {
                    staticClass: "text-gray text-sm"
                }, [n("v-uni-text", {
                    staticClass: "cuIcon-pulldown margin-lr-xs"
                }), e._v(e._s(t.downloadTimes))], 1)], 1)], 1), n("v-uni-view", {
                    staticClass: "flex"
                }, [n("v-uni-button", {
                    staticClass: "cu-btn block line-white",
                    staticStyle: {
                        "margin-top": "10px",
                        padding: "0",
                        "padding-left": "6px",
                        "padding-right": "6px",
                        "margin-right": "8px"
                    },
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.openMore(t.id, t)
                        }
                    }
                }, [n("v-uni-image", {
                    staticStyle: {
                        width: "16px",
                        height: "16px"
                    },
                    attrs: {
                        src: "../../static/more.png",
                        mode: ""
                    }
                })], 1), n("v-uni-button", {
                    staticClass: "cu-btn block line-orange",
                    staticStyle: {
                        "margin-top": "10px",
                        padding: "0",
                        flex: "1"
                    },
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.download(t.id, t)
                        }
                    }
                }, [n("v-uni-text", {
                    staticClass: "cuIcon-pulldown"
                }), e._v(e._s(e.i18n.explore.download))], 1)], 1)], 1)], 1)], 1)], 1)
            }), 1), 3 == e.TabCur ? n("v-uni-view", {
                staticClass: "list"
            }) : e._e(), e.isLoading ? n("v-uni-view", {
                staticClass: "cu-load bg-blue loading",
                staticStyle: {
                    "margin-bottom": "50px"
                }
            }) : e._e(), n("install-method-dialog", {
                attrs: {
                    modalName: e.modalName,
                    download_item: e.download_item,
                    download_url: e.download_url
                },
                on: {
                    close: function(t) {
                        t = e.$handleEvent(t),
                        e.hideModal()
                    }
                }
            })], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    6483: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("4130")
          , o = n("8d80");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "d2b64de2", null);
        t["default"] = s.exports
    },
    "6a6a": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, '/*\n  ColorUi for uniApp  v2.1.6 | by 文晓港 2019-05-31 10:44:24\n  仅供学习交流，如作它用所承受的法律责任一概与作者无关  \n  \n  *使用ColorUi开发扩展与插件时，请注明基于ColorUi开发 \n  \n  （QQ交流群：240787041）\n*/\n\n/* ==================\n        初始化\n ==================== */body{background-color:#f1f1f1;font-size:%?28?%;color:#333;font-family:Helvetica Neue,Helvetica,sans-serif}uni-button,uni-image,uni-input,uni-label,uni-navigator,uni-scroll-view,uni-swiper,uni-textarea,uni-view{-webkit-box-sizing:border-box;box-sizing:border-box}.round{border-radius:%?5000?%}.radius{border-radius:%?6?%}\n\n/* ==================\n          图片\n ==================== */uni-image{max-width:100%;display:inline-block;position:relative;z-index:0}uni-image.loading:before{content:"";background-color:#f5f5f5;display:block;position:absolute;width:100%;height:100%;z-index:-2}uni-image.loading:after{content:"\\E7F1";font-family:cuIcon;position:absolute;top:0;left:0;width:%?32?%;height:%?32?%;line-height:%?32?%;right:0;bottom:0;z-index:-1;font-size:%?32?%;margin:auto;color:#ccc;-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:block}.response{width:100%}\n\n/* ==================\n         开关\n ==================== */uni-checkbox,uni-radio,uni-switch{position:relative}uni-switch:after,uni-switch:before{font-family:cuIcon;content:"\\E645";position:absolute;color:#fff!important;top:0;left:%?0?%;font-size:%?26?%;line-height:26px;width:50%;text-align:center;pointer-events:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;z-index:9;bottom:0;height:26px;margin:auto}uni-switch:before{content:"\\E646";right:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);left:auto}uni-switch.checked:after,uni-switch[checked]:after{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}uni-switch.checked:before,uni-switch[checked]:before{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}\n\nuni-checkbox:before,uni-radio:before{font-family:cuIcon;content:"\\E645";position:absolute;color:#fff!important;top:50%;margin-top:-8px;right:5px;font-size:%?32?%;line-height:16px;pointer-events:none;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;z-index:9}uni-checkbox .uni-checkbox-input,uni-checkbox .wx-checkbox-input,uni-radio .uni-radio-input,uni-radio .wx-radio-input{margin:0;width:24px;height:24px}uni-checkbox.round .uni-checkbox-input,uni-checkbox.round .wx-checkbox-input{border-radius:%?100?%}\n\nuni-switch[checked]:before{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}uni-switch .uni-switch-input,uni-switch .wx-switch-input{border:none;padding:0 24px;width:48px;height:26px;margin:0;border-radius:%?100?%}uni-switch .uni-switch-input:not([class*=bg-]),uni-switch .wx-switch-input:not([class*=bg-]){background:#8799a3!important}uni-switch .uni-switch-input:after,uni-switch .wx-switch-input:after{margin:auto;width:26px;height:26px;border-radius:%?100?%;left:%?0?%;top:%?0?%;bottom:%?0?%;position:absolute;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);-webkit-transition:all .1s ease-in-out 0s;-o-transition:all .1s ease-in-out 0s;transition:all .1s ease-in-out 0s}uni-switch .uni-switch-input.uni-switch-input-checked:after,uni-switch .wx-switch-input.wx-switch-input-checked:after{margin:auto;left:22px;-webkit-box-shadow:none;box-shadow:none;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}uni-radio-group{display:inline-block}uni-switch.radius .uni-switch-input,uni-switch.radius .uni-switch-input:after,uni-switch.radius .uni-switch-input:before,uni-switch.radius .wx-switch-input,uni-switch.radius .wx-switch-input:after,uni-switch.radius .wx-switch-input:before{border-radius:%?10?%}uni-checkbox .uni-checkbox-input:before,uni-checkbox .wx-checkbox-input:before,uni-radio.radio:before,uni-radio .uni-radio-input:before,uni-radio .wx-radio-input:before,uni-switch .uni-switch-input:before,uni-switch .wx-switch-input:before{display:none}uni-radio.radio .uni-radio-input-checked:after,uni-radio.radio[checked]:after{content:"";background-color:rgba(0,0,0,0);display:block;position:absolute;width:8px;height:8px;z-index:999;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;border-radius:%?200?%;\n\tborder:7px solid #fff!important;\n\t\n\n\t}.switch-sex:after{content:"\\E71C"}.switch-sex:before{content:"\\E71A"}.switch-sex .uni-switch-input,.switch-sex .wx-switch-input{background:#e54d42!important;border-color:#e54d42!important}.switch-sex.checked .uni-switch-input,.switch-sex[checked] .wx-switch-input{background:#0081ff!important;border-color:#0081ff!important}uni-checkbox.red.checked .uni-checkbox-input,uni-checkbox.red[checked] .wx-checkbox-input,uni-radio.red.checked .uni-radio-input,uni-radio.red[checked] .wx-radio-input,uni-switch.red.checked .uni-switch-input.uni-switch-input-checked,uni-switch.red[checked] .wx-switch-input.wx-switch-input-checked{background-color:#e54d42!important;border-color:#e54d42!important;color:#fff!important}uni-checkbox.orange.checked .uni-checkbox-input,uni-checkbox.orange[checked] .wx-checkbox-input,uni-radio.orange.checked .uni-radio-input,uni-radio.orange[checked] .wx-radio-input,uni-switch.orange.checked .uni-switch-input,uni-switch.orange[checked] .wx-switch-input{background-color:#f37b1d!important;border-color:#f37b1d!important;color:#fff!important}uni-checkbox.yellow.checked .uni-checkbox-input,uni-checkbox.yellow[checked] .wx-checkbox-input,uni-radio.yellow.checked .uni-radio-input,uni-radio.yellow[checked] .wx-radio-input,uni-switch.yellow.checked .uni-switch-input,uni-switch.yellow[checked] .wx-switch-input{background-color:#fbbd08!important;border-color:#fbbd08!important;color:#333!important}uni-checkbox.olive.checked .uni-checkbox-input,uni-checkbox.olive[checked] .wx-checkbox-input,uni-radio.olive.checked .uni-radio-input,uni-radio.olive[checked] .wx-radio-input,uni-switch.olive.checked .uni-switch-input,uni-switch.olive[checked] .wx-switch-input{background-color:#8dc63f!important;border-color:#8dc63f!important;color:#fff!important}uni-checkbox.checked .uni-checkbox-input,uni-checkbox.green.checked .uni-checkbox-input,uni-checkbox.green[checked] .wx-checkbox-input,uni-checkbox[checked] .wx-checkbox-input,uni-radio.checked .uni-radio-input,uni-radio.green.checked .uni-radio-input,uni-radio.green[checked] .wx-radio-input,uni-radio[checked] .wx-radio-input,uni-switch.checked .uni-switch-input,uni-switch.green.checked .uni-switch-input,uni-switch.green[checked] .wx-switch-input,uni-switch[checked] .wx-switch-input{background-color:#39b54a!important;border-color:#39b54a!important;color:#fff!important;border-color:#39b54a!important}uni-checkbox.cyan.checked .uni-checkbox-input,uni-checkbox.cyan[checked] .wx-checkbox-input,uni-radio.cyan.checked .uni-radio-input,uni-radio.cyan[checked] .wx-radio-input,uni-switch.cyan.checked .uni-switch-input,uni-switch.cyan[checked] .wx-switch-input{background-color:#1cbbb4!important;border-color:#1cbbb4!important;color:#fff!important}uni-checkbox.blue.checked .uni-checkbox-input,uni-checkbox.blue[checked] .wx-checkbox-input,uni-radio.blue.checked .uni-radio-input,uni-radio.blue[checked] .wx-radio-input,uni-switch.blue.checked .uni-switch-input,uni-switch.blue[checked] .wx-switch-input{background-color:#0081ff!important;border-color:#0081ff!important;color:#fff!important}uni-checkbox.purple.checked .uni-checkbox-input,uni-checkbox.purple[checked] .wx-checkbox-input,uni-radio.purple.checked .uni-radio-input,uni-radio.purple[checked] .wx-radio-input,uni-switch.purple.checked .uni-switch-input,uni-switch.purple[checked] .wx-switch-input{background-color:#6739b6!important;border-color:#6739b6!important;color:#fff!important}uni-checkbox.mauve.checked .uni-checkbox-input,uni-checkbox.mauve[checked] .wx-checkbox-input,uni-radio.mauve.checked .uni-radio-input,uni-radio.mauve[checked] .wx-radio-input,uni-switch.mauve.checked .uni-switch-input,uni-switch.mauve[checked] .wx-switch-input{background-color:#9c26b0!important;border-color:#9c26b0!important;color:#fff!important}uni-checkbox.pink.checked .uni-checkbox-input,uni-checkbox.pink[checked] .wx-checkbox-input,uni-radio.pink.checked .uni-radio-input,uni-radio.pink[checked] .wx-radio-input,uni-switch.pink.checked .uni-switch-input,uni-switch.pink[checked] .wx-switch-input{background-color:#e03997!important;border-color:#e03997!important;color:#fff!important}uni-checkbox.brown.checked .uni-checkbox-input,uni-checkbox.brown[checked] .wx-checkbox-input,uni-radio.brown.checked .uni-radio-input,uni-radio.brown[checked] .wx-radio-input,uni-switch.brown.checked .uni-switch-input,uni-switch.brown[checked] .wx-switch-input{background-color:#a5673f!important;border-color:#a5673f!important;color:#fff!important}uni-checkbox.grey.checked .uni-checkbox-input,uni-checkbox.grey[checked] .wx-checkbox-input,uni-radio.grey.checked .uni-radio-input,uni-radio.grey[checked] .wx-radio-input,uni-switch.grey.checked .uni-switch-input,uni-switch.grey[checked] .wx-switch-input{background-color:#8799a3!important;border-color:#8799a3!important;color:#fff!important}uni-checkbox.gray.checked .uni-checkbox-input,uni-checkbox.gray[checked] .wx-checkbox-input,uni-radio.gray.checked .uni-radio-input,uni-radio.gray[checked] .wx-radio-input,uni-switch.gray.checked .uni-switch-input,uni-switch.gray[checked] .wx-switch-input{background-color:#f0f0f0!important;border-color:#f0f0f0!important;color:#333!important}uni-checkbox.black.checked .uni-checkbox-input,uni-checkbox.black[checked] .wx-checkbox-input,uni-radio.black.checked .uni-radio-input,uni-radio.black[checked] .wx-radio-input,uni-switch.black.checked .uni-switch-input,uni-switch.black[checked] .wx-switch-input{background-color:#333!important;border-color:#333!important;color:#fff!important}uni-checkbox.white.checked .uni-checkbox-input,uni-checkbox.white[checked] .wx-checkbox-input,uni-radio.white.checked .uni-radio-input,uni-radio.white[checked] .wx-radio-input,uni-switch.white.checked .uni-switch-input,uni-switch.white[checked] .wx-switch-input{background-color:#fff!important;border-color:#fff!important;color:#333!important}\n\n/* ==================\n          边框\n ==================== */\n\n/* -- 实线 -- */.dashed,.dashed-bottom,.dashed-left,.dashed-right,.dashed-top,.solid,.solid-bottom,.solid-left,.solid-right,.solid-top,.solids,.solids-bottom,.solids-left,.solids-right,.solids-top{position:relative}.dashed-bottom:after,.dashed-left:after,.dashed-right:after,.dashed-top:after,.dashed:after,.solid-bottom:after,.solid-left:after,.solid-right:after,.solid-top:after,.solid:after,.solids-bottom:after,.solids-left:after,.solids-right:after,.solids-top:after,.solids:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box}.solid:after{border:%?1?% solid rgba(0,0,0,.1)}.solid-top:after{border-top:%?1?% solid rgba(0,0,0,.1)}.solid-right:after{border-right:%?1?% solid rgba(0,0,0,.1)}.solid-bottom:after{border-bottom:%?1?% solid rgba(0,0,0,.1)}.solid-left:after{border-left:%?1?% solid rgba(0,0,0,.1)}.solids:after{border:%?8?% solid #eee}.solids-top:after{border-top:%?8?% solid #eee}.solids-right:after{border-right:%?8?% solid #eee}.solids-bottom:after{border-bottom:%?8?% solid #eee}.solids-left:after{border-left:%?8?% solid #eee}\n\n/* -- 虚线 -- */.dashed:after{border:%?1?% dashed #ddd}.dashed-top:after{border-top:%?1?% dashed #ddd}.dashed-right:after{border-right:%?1?% dashed #ddd}.dashed-bottom:after{border-bottom:%?1?% dashed #ddd}.dashed-left:after{border-left:%?1?% dashed #ddd}\n\n/* -- 阴影 -- */.shadow[class*=white]{--ShadowSize:0 %?1?% %?6?%}.shadow-lg{--ShadowSize:%?0?% %?40?% %?100?% %?0?%}.shadow-warp{position:relative;-webkit-box-shadow:0 0 %?10?% rgba(0,0,0,.1);box-shadow:0 0 %?10?% rgba(0,0,0,.1)}.shadow-warp:after,.shadow-warp:before{position:absolute;content:"";top:%?20?%;bottom:%?30?%;left:%?20?%;width:50%;-webkit-box-shadow:0 %?30?% %?20?% rgba(0,0,0,.2);box-shadow:0 %?30?% %?20?% rgba(0,0,0,.2);-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);z-index:-1}.shadow-warp:after{right:%?20?%;left:auto;-webkit-transform:rotate(3deg);-ms-transform:rotate(3deg);transform:rotate(3deg)}.shadow-blur{position:relative}.shadow-blur:before{content:"";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}\n\n/* ==================\n          按钮\n ==================== */.cu-btn{position:relative;border:%?0?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?30?%;font-size:%?28?%;height:%?64?%;line-height:1;text-align:center;text-decoration:none;overflow:visible;margin-left:0;-webkit-transform:translate(%?0?%,%?0?%);-ms-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);margin-right:0}.cu-btn:after{display:none}.cu-btn:not([class*=bg-]){background-color:#f0f0f0}.cu-btn[class*=line]{background-color:rgba(0,0,0,0)}.cu-btn[class*=line]:after{content:" ";display:block;width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%;z-index:1;pointer-events:none}.cu-btn.round[class*=line]:after{border-radius:%?1000?%}.cu-btn[class*=lines]:after{border:%?6?% solid currentColor}.cu-btn[class*=bg-]:after{display:none}.cu-btn.sm{padding:0 %?20?%;font-size:%?20?%;height:%?48?%}.cu-btn.lg{padding:0 %?40?%;font-size:%?32?%;height:%?80?%}.cu-btn.cuIcon.sm{width:%?48?%;height:%?48?%}.cu-btn.cuIcon{width:%?64?%;height:%?64?%;border-radius:%?500?%;padding:0}uni-button.cuIcon.lg{width:%?80?%;height:%?80?%}.cu-btn.shadow-blur:before{top:%?4?%;left:%?4?%;-webkit-filter:blur(%?6?%);filter:blur(%?6?%);opacity:.6}.cu-btn.button-hover{-webkit-transform:translate(%?1?%,%?1?%);-ms-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}.block{display:block}.cu-btn.block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.cu-btn[disabled]{opacity:.6;color:#fff}\n\n/* ==================\n          徽章\n ==================== */.cu-tag{font-size:%?24?%;vertical-align:middle;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?0?% %?16?%;height:%?48?%;font-family:Helvetica Neue,Helvetica,sans-serif;white-space:nowrap}.cu-tag:not([class*=bg]):not([class*=line]){background-color:#f1f1f1}.cu-tag[class*=line-]:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:inherit;z-index:1;pointer-events:none}.cu-tag.radius[class*=line]:after{border-radius:%?12?%}.cu-tag.round[class*=line]:after{border-radius:%?1000?%}.cu-tag[class*=line-]:after{border-radius:0}.cu-tag+.cu-tag{margin-left:%?10?%}.cu-tag.sm{font-size:%?20?%;padding:%?0?% %?12?%;height:%?32?%}.cu-capsule{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.cu-capsule+.cu-capsule{margin-left:%?10?%}.cu-capsule .cu-tag{margin:0}.cu-capsule .cu-tag[class*=line-]:last-child:after{border-left:%?0?% solid rgba(0,0,0,0)}.cu-capsule .cu-tag[class*=line-]:first-child:after{border-right:%?0?% solid rgba(0,0,0,0)}.cu-capsule.radius .cu-tag:first-child{border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%}.cu-capsule.radius .cu-tag:last-child:after,.cu-capsule.radius .cu-tag[class*=line-]{border-top-right-radius:%?12?%;border-bottom-right-radius:%?12?%}.cu-capsule.round .cu-tag:first-child{border-top-left-radius:%?200?%;border-bottom-left-radius:%?200?%;text-indent:%?4?%}.cu-capsule.round .cu-tag:last-child,.cu-capsule.round .cu-tag:last-child:after{border-top-right-radius:%?200?%;border-bottom-right-radius:%?200?%;text-indent:%?-4?%}.cu-tag.badge{border-radius:%?200?%;position:absolute;top:%?-10?%;right:%?-10?%;font-size:%?20?%;padding:%?0?% %?10?%;height:%?28?%;color:#fff}.cu-tag.badge:not([class*=bg-]){background-color:#dd514c}.cu-tag:empty:not([class*=cuIcon-]){padding:%?0?%;width:%?16?%;height:%?16?%;top:%?-4?%;right:%?-4?%}.cu-tag[class*=cuIcon-]{width:%?32?%;height:%?32?%;top:%?-4?%;right:%?-4?%}\n\n/* ==================\n          头像\n ==================== */.cu-avatar{font-variant:small-caps;margin:0;padding:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#ccc;color:#fff;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;background-size:cover;background-position:50%;vertical-align:middle;font-size:1.5em}.cu-avatar.sm{width:%?48?%;height:%?48?%;font-size:1em}.cu-avatar.lg{width:%?96?%;height:%?96?%;font-size:2em}.cu-avatar.xl{width:%?128?%;height:%?128?%;font-size:2.5em}.cu-avatar .avatar-text{font-size:.4em}.cu-avatar-group{direction:rtl;unicode-bidi:bidi-override;padding:0 %?10?% 0 %?40?%;display:inline-block}.cu-avatar-group .cu-avatar{margin-left:%?-30?%;border:%?4?% solid #f1f1f1;vertical-align:middle}.cu-avatar-group .cu-avatar.sm{margin-left:%?-20?%;border:%?1?% solid #f1f1f1}\n\n/* ==================\n         进度条\n ==================== */.cu-progress{overflow:hidden;height:%?28?%;background-color:#ebeef5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.cu-progress+uni-text,.cu-progress+uni-view{line-height:1}.cu-progress.xs{height:%?10?%}.cu-progress.sm{height:%?20?%}.cu-progress uni-view{width:0;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-items:flex-end;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;font-size:%?20?%;color:#fff;-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.cu-progress uni-text{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?20?%;color:#333;text-indent:%?10?%}.cu-progress.text-progress{padding-right:%?60?%}.cu-progress.striped uni-view{background-image:-o-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 50%,hsla(0,0%,100%,.15) 50%,hsla(0,0%,100%,.15) 75%,rgba(0,0,0,0) 75%,rgba(0,0,0,0));background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,rgba(0,0,0,0) 0,rgba(0,0,0,0));background-size:%?72?% %?72?%}.cu-progress.active uni-view{-webkit-animation:progress-stripes 2s linear infinite;animation:progress-stripes 2s linear infinite}@-webkit-keyframes progress-stripes{0%{background-position:%?72?% 0}to{background-position:0 0}}@keyframes progress-stripes{0%{background-position:%?72?% 0}to{background-position:0 0}}\n\n/* ==================\n          加载\n ==================== */.cu-load{display:block;line-height:3em;text-align:center}.cu-load:before{font-family:cuIcon;display:inline-block;margin-right:%?6?%}.cu-load.loading:before{content:"\\E67A";-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear}.cu-load.loading:after{content:"\\52A0\\8F7D\\4E2D..."}.cu-load.over:before{content:"\\E64A"}.cu-load.over:after{content:"\\6CA1\\6709\\66F4\\591A\\4E86"}.cu-load.erro:before{content:"\\E658"}.cu-load.erro:after{content:"\\52A0\\8F7D\\5931\\8D25"}.cu-load.load-cuIcon:before{font-size:%?32?%}.cu-load.load-cuIcon:after{display:none}.cu-load.load-cuIcon.over{display:none}.cu-load.load-modal{position:fixed;top:0;right:0;bottom:%?140?%;left:0;margin:auto;width:%?260?%;height:%?260?%;background-color:#fff;border-radius:%?10?%;-webkit-box-shadow:0 0 %?0?% %?2000?% rgba(0,0,0,.5);box-shadow:0 0 %?0?% %?2000?% rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%;z-index:9999;line-height:2.4em}.cu-load.load-modal [class*=cuIcon-]{font-size:%?60?%}.cu-load.load-modal uni-image{width:%?70?%;height:%?70?%}.cu-load.load-modal:after{content:"";position:absolute;background-color:#fff;border-radius:50%;width:%?200?%;height:%?200?%;font-size:10px;border-top:%?6?% solid rgba(0,0,0,.05);border-right:%?6?% solid rgba(0,0,0,.05);border-bottom:%?6?% solid rgba(0,0,0,.05);border-left:%?6?% solid #f37b1d;-webkit-animation:cuIcon-spin 1s infinite linear;animation:cuIcon-spin 1s infinite linear;z-index:-1}.load-progress{pointer-events:none;top:0;position:fixed;width:100%;left:0;z-index:2000}.load-progress.hide{display:none}.load-progress .load-progress-bar{position:relative;width:100%;height:%?4?%;overflow:hidden;-webkit-transition:all .2s ease 0s;-o-transition:all .2s ease 0s;transition:all .2s ease 0s}.load-progress .load-progress-spinner{position:absolute;top:%?10?%;right:%?10?%;z-index:2000;display:block}.load-progress .load-progress-spinner:after{content:"";display:block;width:%?24?%;height:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid %?4?% rgba(0,0,0,0);border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:load-progress-spinner .4s linear infinite;animation:load-progress-spinner .4s linear infinite}@-webkit-keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n\n/* ==================\n          列表\n ==================== */.grayscale{-webkit-filter:grayscale(1);filter:grayscale(1)}.cu-list+.cu-list{margin-top:%?30?%}.cu-list>.cu-item{-webkit-transition:all .6s ease-in-out 0s;-o-transition:all .6s ease-in-out 0s;transition:all .6s ease-in-out 0s;-webkit-transform:translateX(%?0?%);-ms-transform:translateX(%?0?%);transform:translateX(%?0?%)}.cu-list>.cu-item.move-cur{-webkit-transform:translateX(%?-260?%);-ms-transform:translateX(%?-260?%);transform:translateX(%?-260?%)}.cu-list>.cu-item .move{position:absolute;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?260?%;height:100%;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}.cu-list>.cu-item .move uni-view{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-list.menu-avatar{overflow:hidden}.cu-list.menu-avatar>.cu-item{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:%?10?%;height:%?140?%;background-color:#fff;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-list.menu-avatar>.cu-item>.cu-avatar{position:absolute;left:%?30?%}.cu-list.menu-avatar>.cu-item .flex .text-cut{max-width:%?510?%}.cu-list.menu-avatar>.cu-item .content{position:absolute;left:%?146?%;width:calc(100% - %?96?% - %?60?% - %?120?% - %?20?%);line-height:1.6em}.cu-list.menu-avatar>.cu-item .content.flex-sub{width:calc(100% - %?96?% - %?60?% - %?20?%)}.cu-list.menu-avatar>.cu-item .content>uni-view:first-child{font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-list.menu-avatar>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu-avatar>.cu-item .action{width:%?100?%;text-align:center}.cu-list.menu-avatar>.cu-item .action uni-view+uni-view{margin-top:%?10?%}.cu-list.menu-avatar.comment>.cu-item .content{position:relative;left:0;width:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.cu-list.menu-avatar.comment>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;height:auto}.cu-list.menu-avatar.comment .cu-avatar{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.cu-list.menu>.cu-item{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 %?30?%;min-height:%?100?%;background-color:#fff;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-list.menu>.cu-item:last-child:after{border:none}.cu-list.menu-avatar>.cu-item:after,.cu-list.menu>.cu-item:after{position:absolute;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:200%;height:200%;border-bottom:%?1?% solid #ddd;border-radius:inherit;content:" ";-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.menu>.cu-item.grayscale{background-color:#f5f5f5}.cu-list.menu>.cu-item.cur{background-color:#fcf7e9}.cu-list.menu>.cu-item.arrow{padding-right:%?90?%}.cu-list.menu>.cu-item.arrow:before{position:absolute;top:0;right:%?30?%;bottom:0;display:block;margin:auto;width:%?30?%;height:%?30?%;color:#8799a3;content:"\\E6A3";text-align:center;font-size:%?34?%;font-family:cuIcon;line-height:%?30?%}.cu-list.menu>.cu-item uni-button.content{padding:0;background-color:rgba(0,0,0,0);-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.cu-list.menu>.cu-item uni-button.content:after{display:none}.cu-list.menu>.cu-item .cu-avatar-group .cu-avatar{border-color:#fff}.cu-list.menu>.cu-item .content>uni-view:first-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-list.menu>.cu-item .content>uni-text[class*=cuIcon]{display:inline-block;margin-right:%?10?%;width:1.6em;text-align:center}.cu-list.menu>.cu-item .content>uni-image{display:inline-block;margin-right:%?10?%;width:1.6em;height:1.6em;vertical-align:middle}.cu-list.menu>.cu-item .content{font-size:%?30?%;line-height:1.6em;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.cu-list.menu>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu>.cu-item .action .cu-tag:empty{right:%?10?%}.cu-list.menu{display:block;overflow:hidden}.cu-list.menu.sm-border>.cu-item:after{left:%?30?%;width:calc(200% - %?120?%)}.cu-list.grid>.cu-item{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% 0 %?30?%;-webkit-transition-duration:0s;-o-transition-duration:0s;transition-duration:0s;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.cu-list.grid>.cu-item:after{position:absolute;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:200%;height:200%;border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);border-radius:inherit;content:" ";-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.grid>.cu-item uni-text{display:block;margin-top:%?10?%;color:#888;font-size:%?26?%;line-height:%?40?%}.cu-list.grid>.cu-item [class*=cuIcon]{position:relative;display:block;margin-top:%?20?%;width:100%;font-size:%?48?%}.cu-list.grid>.cu-item .cu-tag{right:auto;left:50%;margin-left:%?20?%}.cu-list.grid{background-color:#fff;text-align:center}.cu-list.grid.no-border>.cu-item{padding-top:%?10?%;padding-bottom:%?20?%}.cu-list.grid.no-border>.cu-item:after{border:none}.cu-list.grid.no-border{padding:%?20?% %?10?%}.cu-list.grid.col-3>.cu-item:nth-child(3n):after,.cu-list.grid.col-4>.cu-item:nth-child(4n):after,.cu-list.grid.col-5>.cu-item:nth-child(5n):after{border-right-width:0}.cu-list.card-menu{overflow:hidden;margin-right:%?30?%;margin-left:%?30?%;border-radius:%?20?%}\n\n/* ==================\n          操作条\n ==================== */.cu-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:%?100?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.cu-bar .action{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:100%}.cu-bar .action.border-title{position:relative;top:%?-10?%}.cu-bar .action.border-title uni-text[class*=bg-]:last-child{position:absolute;bottom:-.5rem;min-width:2rem;height:%?6?%;left:0}.cu-bar .action.sub-title{position:relative;top:-.2rem}.cu-bar .action.sub-title uni-text{position:relative;z-index:1}.cu-bar .action.sub-title uni-text[class*=bg-]:last-child{position:absolute;display:inline-block;bottom:-.2rem;border-radius:%?6?%;width:100%;height:.6rem;left:.6rem;opacity:.3;z-index:0}.cu-bar .action.sub-title uni-text[class*=text-]:last-child{position:absolute;display:inline-block;bottom:-.7rem;left:.5rem;opacity:.2;z-index:0;text-align:right;font-weight:900;font-size:%?36?%}.cu-bar.justify-center .action.border-title uni-text:last-child,.cu-bar.justify-center .action.sub-title uni-text:last-child{left:0;right:0;margin:auto;text-align:center}.cu-bar .action:first-child{margin-left:%?30?%;font-size:%?30?%}.cu-bar .action uni-text.text-cut{text-align:left;width:100%}.cu-bar .cu-avatar:first-child{margin-left:%?20?%}.cu-bar .action:first-child>uni-text[class*=cuIcon-]{margin-left:-.3em;margin-right:.3em}.cu-bar .action:last-child{margin-right:%?30?%}.cu-bar .action>uni-text[class*=cuIcon-],.cu-bar .action>uni-view[class*=cuIcon-]{font-size:%?36?%}.cu-bar .action>uni-text[class*=cuIcon-]+uni-text[class*=cuIcon-]{margin-left:.5em}.cu-bar .content{position:absolute;text-align:center;width:calc(100% - %?340?%);left:0;right:0;bottom:0;top:0;margin:auto;height:%?60?%;font-size:%?32?%;line-height:%?60?%;cursor:none;pointer-events:none;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.cu-bar.ios .content{bottom:7px;height:30px;font-size:%?32?%;line-height:30px}.cu-bar.btn-group{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.cu-bar.btn-group uni-button{padding:%?20?% %?32?%}.cu-bar.btn-group uni-button{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin:0 %?20?%;max-width:50%}.cu-bar .search-form{background-color:#f5f5f5;line-height:%?64?%;height:%?64?%;font-size:%?24?%;color:#333;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:0 %?30?%}.cu-bar .search-form+.action{margin-right:%?30?%}.cu-bar .search-form uni-input{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-right:%?30?%;height:%?64?%;line-height:%?64?%;font-size:%?26?%;background-color:rgba(0,0,0,0)}.cu-bar .search-form [class*=cuIcon-]{margin:0 .5em 0 .8em}.cu-bar .search-form [class*=cuIcon-]:before{top:%?0?%}.cu-bar.fixed,.nav.fixed{position:fixed;width:100%;top:0;z-index:1024;-webkit-box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1);box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.cu-bar.foot{position:fixed;width:100%;bottom:0;z-index:1024;-webkit-box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1);box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar{padding:0;height:calc(%?100?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.cu-tabbar-height{min-height:%?100?%;height:calc(%?100?% + env(safe-area-inset-bottom) / 2)}.cu-bar.tabbar.shadow{-webkit-box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1);box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar .action{font-size:%?22?%;position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;background-color:inherit;overflow:initial}.cu-bar.tabbar.shop .action{width:%?140?%;-webkit-box-flex:initial;-webkit-flex:initial;-ms-flex:initial;flex:initial}.cu-bar.tabbar .action.add-action{position:relative;z-index:2;padding-top:%?50?%}.cu-bar.tabbar .action.add-action [class*=cuIcon-]{position:absolute;width:%?70?%;z-index:2;height:%?70?%;border-radius:50%;line-height:%?70?%;font-size:%?50?%;top:%?-35?%;left:0;right:0;margin:auto;padding:0}.cu-bar.tabbar .action.add-action:after{content:"";position:absolute;width:%?100?%;height:%?100?%;top:%?-50?%;left:0;right:0;margin:auto;-webkit-box-shadow:0 %?-3?% %?8?% rgba(0,0,0,.08);box-shadow:0 %?-3?% %?8?% rgba(0,0,0,.08);border-radius:%?50?%;background-color:inherit;z-index:0}.cu-bar.tabbar .action.add-action:before{content:"";position:absolute;width:%?100?%;height:%?30?%;bottom:%?30?%;left:0;right:0;margin:auto;background-color:inherit;z-index:1}.cu-bar.tabbar .btn-group{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 %?10?%}.cu-bar.tabbar uni-button.action:after{border:0}.cu-bar.tabbar .action [class*=cuIcon-]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?40?%}.cu-bar.tabbar .action .cuIcon-cu-image{margin:0 auto}.cu-bar.tabbar .action .cuIcon-cu-image uni-image{width:%?50?%;height:%?50?%;display:inline-block}.cu-bar.tabbar .submit{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative;-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}.cu-bar.tabbar .submit:last-child{-webkit-box-flex:2.6;-webkit-flex:2.6;-ms-flex:2.6;flex:2.6}.cu-bar.tabbar .submit+.submit{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2}.cu-bar.tabbar.border .action:before{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;border-right:%?1?% solid rgba(0,0,0,.1);z-index:3}.cu-bar.tabbar.border .action:last-child:before{display:none}.cu-bar.input{padding-right:%?20?%;background-color:#fff}.cu-bar.input uni-input{overflow:initial;line-height:%?64?%;height:%?64?%;min-height:%?64?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;margin:0 %?20?%}.cu-bar.input .action{margin-left:%?20?%}.cu-bar.input .action [class*=cuIcon-]{font-size:%?48?%}.cu-bar.input uni-input+.action{margin-right:%?20?%;margin-left:%?0?%}.cu-bar.input .action:first-child [class*=cuIcon-]{margin-left:%?0?%}.cu-custom{display:block;position:relative}.cu-custom .cu-bar .content{width:calc(100% - %?440?%)}\n\n.cu-custom .cu-bar .content uni-image{height:%?60?%;width:%?240?%}.cu-custom .cu-bar{min-height:0;\n\t\n\t-webkit-box-shadow:%?0?% %?0?% %?0?%;box-shadow:%?0?% %?0?% %?0?%;z-index:999}.cu-custom .cu-bar .border-custom{position:relative;background:rgba(0,0,0,.15);border-radius:%?1000?%;height:30px}.cu-custom .cu-bar .border-custom:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;border:%?1?% solid #fff;opacity:.5}.cu-custom .cu-bar .border-custom:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.6;background-color:#fff}.cu-custom .cu-bar .border-custom uni-text{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin:auto!important;text-align:center;font-size:%?34?%}\n\n/* ==================\n         导航栏\n ==================== */.nav{white-space:nowrap}::-webkit-scrollbar{display:none}.nav .cu-item{height:%?90?%;display:inline-block;line-height:%?90?%;margin:0 %?10?%;padding:0 %?20?%}.nav .cu-item.cur{border-bottom:%?4?% solid}\n\n/* ==================\n         时间轴\n ==================== */.cu-timeline{display:block;background-color:#fff}.cu-timeline .cu-time{width:%?120?%;text-align:center;padding:%?20?% 0;font-size:%?26?%;color:#888;display:block}.cu-timeline>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;position:relative;display:block;z-index:0}.cu-timeline>.cu-item:not([class*=text-]){color:#ccc}.cu-timeline>.cu-item:after{content:"";display:block;position:absolute;width:%?1?%;background-color:#ddd;left:%?60?%;height:100%;top:0;z-index:8}.cu-timeline>.cu-item:before{font-family:cuIcon;display:block;position:absolute;top:%?36?%;z-index:9;background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item:not([class*=cuIcon-]):before{content:"\\E763"}.cu-timeline>.cu-item[class*=cuIcon-]:before{background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item>.content{padding:%?30?%;border-radius:%?6?%;display:block;line-height:1.6}.cu-timeline>.cu-item>.content:not([class*=bg-]){background-color:#f1f1f1;color:#333}.cu-timeline>.cu-item>.content+.content{margin-top:%?20?%}\n\n/* ==================\n         聊天\n ==================== */.cu-chat{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.cu-chat .cu-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?30?% %?30?% %?70?%;position:relative}.cu-chat .cu-item>.cu-avatar{width:%?80?%;height:%?80?%}.cu-chat .cu-item>.main{max-width:calc(100% - %?260?%);margin:0 %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-chat .cu-item>uni-image{height:%?320?%}.cu-chat .cu-item>.main .content{padding:%?20?%;border-radius:%?6?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;max-width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;position:relative;min-height:%?80?%;line-height:%?40?%;text-align:left}.cu-chat .cu-item>.main .content:not([class*=bg-]){background-color:#fff;color:#333}.cu-chat .cu-item .date{position:absolute;font-size:%?24?%;color:#8799a3;width:calc(100% - %?320?%);bottom:%?20?%;left:%?160?%}.cu-chat .cu-item .action{padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cu-chat .cu-item>.main .content:after{content:"";top:%?27?%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:100;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit}.cu-chat .cu-item.self>.main .content:after{left:auto;right:%?-12?%}.cu-chat .cu-item>.main .content:before{content:"";top:%?30?%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:-1;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit;-webkit-filter:blur(%?5?%);filter:blur(%?5?%);opacity:.3}.cu-chat .cu-item>.main .content:not([class*=bg-]):before{background-color:#333;opacity:.1}.cu-chat .cu-item.self>.main .content:before{left:auto;right:%?-12?%}.cu-chat .cu-item.self{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;text-align:right}.cu-chat .cu-info{display:inline-block;margin:%?20?% auto;font-size:%?24?%;padding:%?8?% %?12?%;background-color:rgba(0,0,0,.2);border-radius:%?6?%;color:#fff;max-width:%?400?%;line-height:1.4}\n\n/* ==================\n         卡片\n ==================== */.cu-card{display:block;overflow:hidden}.cu-card>.cu-item{display:block;background-color:#fff;overflow:hidden;border-radius:%?10?%;margin:%?30?%}.cu-card>.cu-item.shadow-blur{overflow:initial}.cu-card.no-card>.cu-item{margin:%?0?%;border-radius:%?0?%}.cu-card .grid.grid-square{margin-bottom:%?-20?%}.cu-card.case .image{position:relative}.cu-card.case .image uni-image{width:100%}.cu-card.case .image .cu-tag{position:absolute;right:0;top:0}.cu-card.case .image .cu-bar{position:absolute;bottom:0;width:100%;background-color:rgba(0,0,0,0);padding:%?0?% %?30?%}.cu-card.case.no-card .image{margin:%?30?% %?30?% 0;overflow:hidden;border-radius:%?10?%}.cu-card.dynamic{display:block}.cu-card.dynamic>.cu-item{display:block;background-color:#fff;overflow:hidden}.cu-card.dynamic>.cu-item>.text-content{padding:0 %?30?% 0;max-height:6.4em;overflow:hidden;font-size:%?30?%;margin-bottom:%?20?%}.cu-card.dynamic>.cu-item .square-img{width:100%;height:%?200?%;border-radius:%?6?%}.cu-card.dynamic>.cu-item .only-img{width:100%;height:%?320?%;border-radius:%?6?%}\n\n/* card.dynamic>.cu-item .comment {\n  padding: 20upx;\n  background-color: #f1f1f1;\n  margin: 0 30upx 30upx;\n  border-radius: 6upx;\n} */.cu-card.article{display:block}.cu-card.article>.cu-item{padding-bottom:%?30?%}.cu-card.article>.cu-item .title{font-size:%?30?%;font-weight:900;color:#333;line-height:%?100?%;padding:0 %?30?%}.cu-card.article>.cu-item .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 %?30?%}.cu-card.article>.cu-item .content>uni-image{width:%?240?%;height:6.4em;margin-right:%?20?%;border-radius:%?6?%}.cu-card.article>.cu-item .content .desc{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.cu-card.article>.cu-item .content .text-content{font-size:%?28?%;color:#888;height:4.8em;overflow:hidden}\n\n/* ==================\n         表单\n ==================== */.cu-form-group{background-color:#fff;padding:%?1?% %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:%?100?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.cu-form-group+.cu-form-group{border-top:%?1?% solid #eee}.cu-form-group .title{text-align:justify;padding-right:%?30?%;font-size:%?30?%;position:relative;height:%?60?%;line-height:%?60?%}.cu-form-group uni-input{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#555;padding-right:%?20?%}.cu-form-group>uni-text[class*=cuIcon-]{font-size:%?36?%;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.cu-form-group uni-textarea{margin:%?32?% 0 %?30?%;height:4.6em;width:100%;line-height:1.2em;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;padding:0}.cu-form-group.align-start .title{height:1em;margin-top:%?32?%;line-height:1em}.cu-form-group uni-picker{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-right:%?40?%;overflow:hidden;position:relative}.cu-form-group uni-picker .picker{line-height:%?100?%;font-size:%?28?%;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;text-align:right}.cu-form-group uni-picker:after{font-family:cuIcon;display:block;content:"\\E6A3";position:absolute;font-size:%?34?%;color:#8799a3;line-height:%?100?%;width:%?60?%;text-align:center;top:0;bottom:0;right:%?-20?%;margin:auto}.cu-form-group uni-textarea[disabled],.cu-form-group uni-textarea[disabled] .placeholder{color:rgba(0,0,0,0)}\n\n/* ==================\n         模态窗口\n ==================== */.cu-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1110;opacity:0;outline:0;text-align:center;-ms-transform:scale(1.185);-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:%?2000?%;perspective:%?2000?%;background:rgba(0,0,0,.6);-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;pointer-events:none}.cu-modal:before{content:"\\200B";display:inline-block;height:100%;vertical-align:middle}.cu-modal.show{opacity:1;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s;-ms-transform:scale(1);-webkit-transform:scale(1);transform:scale(1);overflow-x:hidden;overflow-y:auto;pointer-events:auto}.cu-dialog{position:relative;display:inline-block;vertical-align:middle;margin-left:auto;margin-right:auto;width:%?680?%;max-width:100%;background-color:#f8f8f8;border-radius:%?10?%;overflow:hidden}.cu-modal.bottom-modal:before{vertical-align:bottom}.cu-modal.bottom-modal .cu-dialog{width:100%;border-radius:0}.cu-modal.bottom-modal{margin-bottom:%?-1000?%}.cu-modal.bottom-modal.show{margin-bottom:0}.cu-modal.drawer-modal{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.cu-modal.drawer-modal .cu-dialog{height:100%;min-width:%?200?%;border-radius:0;margin:initial;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.cu-modal.drawer-modal.justify-start .cu-dialog{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.cu-modal.drawer-modal.justify-end .cu-dialog{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}.cu-modal.drawer-modal.show .cu-dialog{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.cu-modal .cu-dialog>.cu-bar:first-child .action{min-width:%?100?%;margin-right:0;min-height:%?100?%}\n\n/* ==================\n         轮播\n ==================== */uni-swiper .a-swiper-dot{display:inline-block;width:%?16?%;height:%?16?%;background:rgba(0,0,0,.3);border-radius:50%;vertical-align:middle}uni-swiper[class*=-dot] .a-swiper-dots,uni-swiper[class*=-dot] .uni-swiper-dots,uni-swiper[class*=-dot] .wx-swiper-dots{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}uni-swiper.square-dot .a-swiper-dot,uni-swiper.square-dot .uni-swiper-dot,uni-swiper.square-dot .wx-swiper-dot{background-color:#fff;opacity:.4;width:%?10?%;height:%?10?%;border-radius:%?20?%;margin:0 %?8?%!important}uni-swiper.square-dot .a-swiper-dot.a-swiper-dot-active,uni-swiper.square-dot .uni-swiper-dot.uni-swiper-dot-active,uni-swiper.square-dot .wx-swiper-dot.wx-swiper-dot-active{opacity:1;width:%?30?%}uni-swiper.round-dot .a-swiper-dot,uni-swiper.round-dot .uni-swiper-dot,uni-swiper.round-dot .wx-swiper-dot{width:%?10?%;height:%?10?%;position:relative;margin:%?4?% %?8?%!important}uni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active:after,uni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active:after,uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active:after{content:"";position:absolute;width:%?10?%;height:%?10?%;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;background-color:#fff;border-radius:%?20?%}uni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active,uni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active,uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active{width:%?18?%;height:%?18?%}.screen-swiper{min-height:%?375?%}.screen-swiper uni-image,.screen-swiper uni-video,.swiper-item uni-image,.swiper-item uni-video{width:100%;display:block;height:100%;margin:0;pointer-events:none}.card-swiper{height:%?420?%!important}.card-swiper uni-swiper-item{width:%?610?%!important;left:%?70?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?40?% %?0?% %?70?%;overflow:initial}.card-swiper uni-swiper-item .swiper-item{width:100%;display:block;height:100%;border-radius:%?10?%;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);-webkit-transition:all .2s ease-in 0s;-o-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item{-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:all .2s ease-in 0s;-o-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s}.tower-swiper{height:%?420?%;position:relative;max-width:%?750?%;overflow:hidden}.tower-swiper .tower-item{position:absolute;width:%?300?%;height:%?380?%;top:0;bottom:0;left:50%;margin:auto;-webkit-transition:all .2s ease-in 0s;-o-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s;opacity:1}.tower-swiper .tower-item.none{opacity:0}.tower-swiper .tower-item .swiper-item{width:100%;height:100%;border-radius:%?6?%;overflow:hidden}\n\n/* ==================\n          步骤条\n ==================== */.cu-steps{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}uni-scroll-view.cu-steps{display:block;white-space:nowrap}uni-scroll-view.cu-steps .cu-item{display:inline-block}.cu-steps .cu-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;position:relative;min-width:%?100?%}.cu-steps .cu-item:not([class*=text-]){color:#8799a3}.cu-steps .cu-item .num,.cu-steps .cu-item [class*=cuIcon-]{display:block;font-size:%?40?%;line-height:%?80?%}.cu-steps .cu-item:after,.cu-steps .cu-item:before,.cu-steps.steps-arrow .cu-item:after,.cu-steps.steps-arrow .cu-item:before{content:"";display:block;position:absolute;height:0;width:calc(100% - %?80?%);border-bottom:1px solid #ccc;left:calc(0px - (100% - %?80?%) / 2);top:%?40?%;z-index:0}.cu-steps.steps-arrow .cu-item:after,.cu-steps.steps-arrow .cu-item:before{content:"\\E6A3";font-family:cuIcon;height:%?30?%;border-bottom-width:0;line-height:%?30?%;top:0;bottom:0;margin:auto;color:#ccc}.cu-steps.steps-bottom .cu-item:after,.cu-steps.steps-bottom .cu-item:before{bottom:%?40?%;top:auto}.cu-steps .cu-item:after{border-bottom:1px solid currentColor;width:0;-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*=text-]:after{width:calc(100% - %?80?%);color:currentColor}.cu-steps .cu-item:first-child:after,.cu-steps .cu-item:first-child:before{display:none}.cu-steps .cu-item .num{width:%?40?%;height:%?40?%;border-radius:50%;line-height:%?40?%;margin:%?20?% auto;font-size:%?24?%;border:1px solid currentColor;position:relative;overflow:hidden}.cu-steps .cu-item[class*=text-] .num{background-color:currentColor}.cu-steps .cu-item .num:after,.cu-steps .cu-item .num:before{content:attr(data-index);position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;-webkit-transform:translateY(%?0?%);-ms-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*=text-] .num:before{-webkit-transform:translateY(%?-40?%);-ms-transform:translateY(%?-40?%);transform:translateY(%?-40?%);color:#fff}.cu-steps .cu-item .num:after{-webkit-transform:translateY(%?40?%);-ms-transform:translateY(%?40?%);transform:translateY(%?40?%);color:#fff;-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*=text-] .num:after{content:"\\E645";font-family:cuIcon;color:#fff;-webkit-transform:translateY(%?0?%);-ms-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*=text-] .num.err:after{content:"\\E646"}\n\n/* ==================\n          布局\n ==================== */\n\n/*  -- flex弹性布局 -- */.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.basis-xs{-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%}.basis-sm{-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%}.basis-df{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.basis-lg{-webkit-flex-basis:60%;-ms-flex-preferred-size:60%;flex-basis:60%}.basis-xl{-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%}.flex-sub{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-twice{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2}.flex-treble{-webkit-box-flex:3;-webkit-flex:3;-ms-flex:3;flex:3}.flex-direction{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.self-center{-webkit-align-self:flex-center;-ms-flex-item-align:flex-center;align-self:flex-center}.self-end{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.self-stretch{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}.align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}\n\n/* grid布局 */.grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.grid.grid-square{overflow:hidden}.grid.grid-square .cu-tag{position:absolute;right:0;top:0;border-bottom-left-radius:%?6?%;padding:%?6?% %?12?%;height:auto;background-color:rgba(0,0,0,.5)}.grid.grid-square>uni-view>uni-text[class*=cuIcon-]{font-size:%?52?%;position:absolute;color:#8799a3;margin:auto;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.grid.grid-square>uni-view{margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?6?%;position:relative;overflow:hidden}.grid.grid-square>uni-view.bg-img uni-image{width:100%;height:100%;position:absolute}.grid.col-1.grid-square>uni-view{padding-bottom:100%;height:0;margin-right:0}.grid.col-2.grid-square>uni-view{padding-bottom:calc((100% - %?20?%)/2);height:0;width:calc((100% - %?20?%)/2)}.grid.col-3.grid-square>uni-view{padding-bottom:calc((100% - %?40?%)/3);height:0;width:calc((100% - %?40?%)/3)}.grid.col-4.grid-square>uni-view{padding-bottom:calc((100% - %?60?%)/4);height:0;width:calc((100% - %?60?%)/4)}.grid.col-5.grid-square>uni-view{padding-bottom:calc((100% - %?80?%)/5);height:0;width:calc((100% - %?80?%)/5)}.grid.col-2.grid-square>uni-view:nth-child(2n),.grid.col-3.grid-square>uni-view:nth-child(3n),.grid.col-4.grid-square>uni-view:nth-child(4n),.grid.col-5.grid-square>uni-view:nth-child(5n){margin-right:0}.grid.col-1>uni-view{width:100%}.grid.col-2>uni-view{width:50%}.grid.col-3>uni-view{width:33.33%}.grid.col-4>uni-view{width:25%}.grid.col-5>uni-view{width:20%}\n\n/*  -- 内外边距 -- */.margin-0{margin:0}.margin-xs{margin:%?10?%}.margin-sm{margin:%?20?%}.margin{margin:%?30?%}.margin-lg{margin:%?40?%}.margin-xl{margin:%?50?%}.margin-top-xs{margin-top:%?10?%}.margin-top-sm{margin-top:%?20?%}.margin-top{margin-top:%?30?%}.margin-top-lg{margin-top:%?40?%}.margin-top-xl{margin-top:%?50?%}.margin-right-xs{margin-right:%?10?%}.margin-right-sm{margin-right:%?20?%}.margin-right{margin-right:%?30?%}.margin-right-lg{margin-right:%?40?%}.margin-right-xl{margin-right:%?50?%}.margin-bottom-xs{margin-bottom:%?10?%}.margin-bottom-sm{margin-bottom:%?20?%}.margin-bottom{margin-bottom:%?30?%}.margin-bottom-lg{margin-bottom:%?40?%}.margin-bottom-xl{margin-bottom:%?50?%}.margin-left-xs{margin-left:%?10?%}.margin-left-sm{margin-left:%?20?%}.margin-left{margin-left:%?30?%}.margin-left-lg{margin-left:%?40?%}.margin-left-xl{margin-left:%?50?%}.margin-lr-xs{margin-left:%?10?%;margin-right:%?10?%}.margin-lr-sm{margin-left:%?20?%;margin-right:%?20?%}.margin-lr{margin-left:%?30?%;margin-right:%?30?%}.margin-lr-lg{margin-left:%?40?%;margin-right:%?40?%}.margin-lr-xl{margin-left:%?50?%;margin-right:%?50?%}.margin-tb-xs{margin-top:%?10?%;margin-bottom:%?10?%}.margin-tb-sm{margin-top:%?20?%;margin-bottom:%?20?%}.margin-tb{margin-top:%?30?%;margin-bottom:%?30?%}.margin-tb-lg{margin-top:%?40?%;margin-bottom:%?40?%}.margin-tb-xl{margin-top:%?50?%;margin-bottom:%?50?%}.padding-0{padding:0}.padding-xs{padding:%?10?%}.padding-sm{padding:%?20?%}.padding{padding:%?30?%}.padding-lg{padding:%?40?%}.padding-xl{padding:%?50?%}.padding-top-xs{padding-top:%?10?%}.padding-top-sm{padding-top:%?20?%}.padding-top{padding-top:%?30?%}.padding-top-lg{padding-top:%?40?%}.padding-top-xl{padding-top:%?50?%}.padding-right-xs{padding-right:%?10?%}.padding-right-sm{padding-right:%?20?%}.padding-right{padding-right:%?30?%}.padding-right-lg{padding-right:%?40?%}.padding-right-xl{padding-right:%?50?%}.padding-bottom-xs{padding-bottom:%?10?%}.padding-bottom-sm{padding-bottom:%?20?%}.padding-bottom{padding-bottom:%?30?%}.padding-bottom-lg{padding-bottom:%?40?%}.padding-bottom-xl{padding-bottom:%?50?%}.padding-left-xs{padding-left:%?10?%}.padding-left-sm{padding-left:%?20?%}.padding-left{padding-left:%?30?%}.padding-left-lg{padding-left:%?40?%}.padding-left-xl{padding-left:%?50?%}.padding-lr-xs{padding-left:%?10?%;padding-right:%?10?%}.padding-lr-sm{padding-left:%?20?%;padding-right:%?20?%}.padding-lr{padding-left:%?30?%;padding-right:%?30?%}.padding-lr-lg{padding-left:%?40?%;padding-right:%?40?%}.padding-lr-xl{padding-left:%?50?%;padding-right:%?50?%}.padding-tb-xs{padding-top:%?10?%;padding-bottom:%?10?%}.padding-tb-sm{padding-top:%?20?%;padding-bottom:%?20?%}.padding-tb{padding-top:%?30?%;padding-bottom:%?30?%}.padding-tb-lg{padding-top:%?40?%;padding-bottom:%?40?%}.padding-tb-xl{padding-top:%?50?%;padding-bottom:%?50?%}\n\n/* -- 浮动 --  */.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}.fl{float:left}.fr{float:right}\n\n/* ==================\n          背景\n ==================== */.line-red:after,.lines-red:after{border-color:#e54d42}.line-orange:after,.lines-orange:after{border-color:#f37b1d}.line-yellow:after,.lines-yellow:after{border-color:#fbbd08}.line-olive:after,.lines-olive:after{border-color:#8dc63f}.line-green:after,.lines-green:after{border-color:#39b54a}.line-cyan:after,.lines-cyan:after{border-color:#1cbbb4}.line-blue:after,.lines-blue:after{border-color:#0081ff}.line-purple:after,.lines-purple:after{border-color:#6739b6}.line-mauve:after,.lines-mauve:after{border-color:#9c26b0}.line-pink:after,.lines-pink:after{border-color:#e03997}.line-brown:after,.lines-brown:after{border-color:#a5673f}.line-grey:after,.lines-grey:after{border-color:#8799a3}.line-gray:after,.lines-gray:after{border-color:#aaa}.line-black:after,.lines-black:after{border-color:#333}.line-white:after,.lines-white:after{border-color:#fff}.bg-red{background-color:#e54d42;color:#fff}.bg-orange{background-color:#f37b1d;color:#fff}.bg-yellow{background-color:#fbbd08;color:#333}.bg-olive{background-color:#8dc63f;color:#fff}.bg-green{background-color:#39b54a;color:#fff}.bg-cyan{background-color:#1cbbb4;color:#fff}.bg-blue{background-color:#0081ff;color:#fff}.bg-purple{background-color:#6739b6;color:#fff}.bg-mauve{background-color:#9c26b0;color:#fff}.bg-pink{background-color:#e03997;color:#fff}.bg-brown{background-color:#a5673f;color:#fff}.bg-grey{background-color:#8799a3;color:#fff}.bg-gray{background-color:#f0f0f0;color:#333}.bg-black{background-color:#333;color:#fff}.bg-white{background-color:#fff;color:#666}.bg-shadeTop{background-image:-webkit-gradient(linear,left top,left bottom,from(#000),to(rgba(0,0,0,.01)));background-image:-o-linear-gradient(#000,rgba(0,0,0,.01));background-image:linear-gradient(#000,rgba(0,0,0,.01));color:#fff}.bg-shadeBottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.01)),to(#000));background-image:-o-linear-gradient(rgba(0,0,0,.01),#000);background-image:linear-gradient(rgba(0,0,0,.01),#000);color:#fff}.bg-red.light{color:#e54d42;background-color:#fadbd9}.bg-orange.light{color:#f37b1d;background-color:#fde6d2}.bg-yellow.light{color:#fbbd08;background-color:rgba(254,242,206,.82)}.bg-olive.light{color:#8dc63f;background-color:#e8f4d9}.bg-green.light{color:#39b54a;background-color:#d7f0db}.bg-cyan.light{color:#1cbbb4;background-color:#d2f1f0}.bg-blue.light{color:#0081ff;background-color:#cce6ff}.bg-purple.light{color:#6739b6;background-color:#e1d7f0}.bg-mauve.light{color:#9c26b0;background-color:#ebd4ef}.bg-pink.light{color:#e03997;background-color:#f9d7ea}.bg-brown.light{color:#a5673f;background-color:#ede1d9}.bg-grey.light{color:#8799a3;background-color:#e7ebed}.bg-gradual-red{background-image:-o-linear-gradient(45deg,#f43f3b,#ec008c);background-image:linear-gradient(45deg,#f43f3b,#ec008c);color:#fff}.bg-gradual-orange{background-image:-o-linear-gradient(45deg,#ff9700,#ed1c24);background-image:linear-gradient(45deg,#ff9700,#ed1c24);color:#fff}.bg-gradual-green{background-image:-o-linear-gradient(45deg,#39b54a,#8dc63f);background-image:linear-gradient(45deg,#39b54a,#8dc63f);color:#fff}.bg-gradual-purple{background-image:-o-linear-gradient(45deg,#9000ff,#5e00ff);background-image:linear-gradient(45deg,#9000ff,#5e00ff);color:#fff}.bg-gradual-pink{background-image:-o-linear-gradient(45deg,#ec008c,#6739b6);background-image:linear-gradient(45deg,#ec008c,#6739b6);color:#fff}.bg-gradual-blue{background-image:-o-linear-gradient(45deg,#0081ff,#1cbbb4);background-image:linear-gradient(45deg,#0081ff,#1cbbb4);color:#fff}.shadow[class*=-red]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2);box-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.shadow[class*=-orange]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2);box-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.shadow[class*=-yellow]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2);box-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.shadow[class*=-olive]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2);box-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.shadow[class*=-green]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2);box-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.shadow[class*=-cyan]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2);box-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.shadow[class*=-blue]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2);box-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.shadow[class*=-purple]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2);box-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.shadow[class*=-mauve]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2);box-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.shadow[class*=-pink]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2);box-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.shadow[class*=-brown]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2);box-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.shadow[class*=-grey]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2);box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*=-gray]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2);box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*=-black]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2);box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.shadow[class*=-white]{-webkit-box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2);box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.text-shadow[class*=-red]{text-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.text-shadow[class*=-orange]{text-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.text-shadow[class*=-yellow]{text-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.text-shadow[class*=-olive]{text-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.text-shadow[class*=-green]{text-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.text-shadow[class*=-cyan]{text-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.text-shadow[class*=-blue]{text-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.text-shadow[class*=-purple]{text-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.text-shadow[class*=-mauve]{text-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.text-shadow[class*=-pink]{text-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.text-shadow[class*=-brown]{text-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.text-shadow[class*=-grey]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*=-gray]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*=-black]{text-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.bg-img{background-size:cover;background-position:50%;background-repeat:no-repeat}.bg-mask{background-color:#333;position:relative}.bg-mask:after{content:"";border-radius:inherit;width:100%;height:100%;display:block;background-color:rgba(0,0,0,.4);position:absolute;left:0;right:0;bottom:0;top:0}.bg-mask uni-cover-view,.bg-mask uni-view{z-index:5;position:relative}.bg-video{position:relative}.bg-video uni-video{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;z-index:0;pointer-events:none}\n\n/* ==================\n          文本\n ==================== */.text-xs{font-size:%?20?%}.text-sm{font-size:%?24?%}.text-df{font-size:%?28?%}.text-lg{font-size:%?32?%}.text-xl{font-size:%?36?%}.text-xxl{font-size:%?44?%}.text-sl{font-size:%?80?%}.text-xsl{font-size:%?120?%}.text-Abc{text-transform:Capitalize}.text-ABC{text-transform:Uppercase}.text-abc{text-transform:Lowercase}.text-price:before{content:"\\A5";font-size:80%;margin-right:%?4?%}.text-cut{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.text-bold{font-weight:700}.text-center{text-align:center}.text-content{line-height:1.6}.text-left{text-align:left}.text-right{text-align:right}.line-red,.lines-red,.text-red{color:#e54d42}.line-orange,.lines-orange,.text-orange{color:#f37b1d}.line-yellow,.lines-yellow,.text-yellow{color:#fbbd08}.line-olive,.lines-olive,.text-olive{color:#8dc63f}.line-green,.lines-green,.text-green{color:#39b54a}.line-cyan,.lines-cyan,.text-cyan{color:#1cbbb4}.line-blue,.lines-blue,.text-blue{color:#0081ff}.line-purple,.lines-purple,.text-purple{color:#6739b6}.line-mauve,.lines-mauve,.text-mauve{color:#9c26b0}.line-pink,.lines-pink,.text-pink{color:#e03997}.line-brown,.lines-brown,.text-brown{color:#a5673f}.line-grey,.lines-grey,.text-grey{color:#8799a3}.line-gray,.lines-gray,.text-gray{color:#aaa}.line-black,.lines-black,.text-black{color:#333}.line-white,.lines-white,.text-white{color:#fff}@-webkit-keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.cuIconfont-spin{-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:inline-block}.cuIconfont-pulse{-webkit-animation:cuIcon-spin 1s infinite steps(8);animation:cuIcon-spin 1s infinite steps(8);display:inline-block}[class*=cuIcon-]{font-family:cuIcon;font-size:inherit;font-style:normal}@font-face{font-family:cuIcon;src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831);\n\t/* IE9*/src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831) format("truetype"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont) format("svg")\n\t/* iOS 4.1- */}.cuIcon-appreciate:before{content:"\\E644"}.cuIcon-check:before{content:"\\E645"}.cuIcon-close:before{content:"\\E646"}.cuIcon-edit:before{content:"\\E649"}.cuIcon-emoji:before{content:"\\E64A"}.cuIcon-favorfill:before{content:"\\E64B"}.cuIcon-favor:before{content:"\\E64C"}.cuIcon-loading:before{content:"\\E64F"}.cuIcon-locationfill:before{content:"\\E650"}.cuIcon-location:before{content:"\\E651"}.cuIcon-phone:before{content:"\\E652"}.cuIcon-roundcheckfill:before{content:"\\E656"}.cuIcon-roundcheck:before{content:"\\E657"}.cuIcon-roundclosefill:before{content:"\\E658"}.cuIcon-roundclose:before{content:"\\E659"}.cuIcon-roundrightfill:before{content:"\\E65A"}.cuIcon-roundright:before{content:"\\E65B"}.cuIcon-search:before{content:"\\E65C"}.cuIcon-taxi:before{content:"\\E65D"}.cuIcon-timefill:before{content:"\\E65E"}.cuIcon-time:before{content:"\\E65F"}.cuIcon-unfold:before{content:"\\E661"}.cuIcon-warnfill:before{content:"\\E662"}.cuIcon-warn:before{content:"\\E663"}.cuIcon-camerafill:before{content:"\\E664"}.cuIcon-camera:before{content:"\\E665"}.cuIcon-commentfill:before{content:"\\E666"}.cuIcon-comment:before{content:"\\E667"}.cuIcon-likefill:before{content:"\\E668"}.cuIcon-like:before{content:"\\E669"}.cuIcon-notificationfill:before{content:"\\E66A"}.cuIcon-notification:before{content:"\\E66B"}.cuIcon-order:before{content:"\\E66C"}.cuIcon-samefill:before{content:"\\E66D"}.cuIcon-same:before{content:"\\E66E"}.cuIcon-deliver:before{content:"\\E671"}.cuIcon-evaluate:before{content:"\\E672"}.cuIcon-pay:before{content:"\\E673"}.cuIcon-send:before{content:"\\E675"}.cuIcon-shop:before{content:"\\E676"}.cuIcon-ticket:before{content:"\\E677"}.cuIcon-back:before{content:"\\E679"}.cuIcon-cascades:before{content:"\\E67C"}.cuIcon-discover:before{content:"\\E67E"}.cuIcon-list:before{content:"\\E682"}.cuIcon-more:before{content:"\\E684"}.cuIcon-scan:before{content:"\\E689"}.cuIcon-settings:before{content:"\\E68A"}.cuIcon-questionfill:before{content:"\\E690"}.cuIcon-question:before{content:"\\E691"}.cuIcon-shopfill:before{content:"\\E697"}.cuIcon-form:before{content:"\\E699"}.cuIcon-pic:before{content:"\\E69B"}.cuIcon-filter:before{content:"\\E69C"}.cuIcon-footprint:before{content:"\\E69D"}.cuIcon-top:before{content:"\\E69E"}.cuIcon-pulldown:before{content:"\\E69F"}.cuIcon-pullup:before{content:"\\E6A0"}.cuIcon-right:before{content:"\\E6A3"}.cuIcon-refresh:before{content:"\\E6A4"}.cuIcon-moreandroid:before{content:"\\E6A5"}.cuIcon-deletefill:before{content:"\\E6A6"}.cuIcon-refund:before{content:"\\E6AC"}.cuIcon-cart:before{content:"\\E6AF"}.cuIcon-qrcode:before{content:"\\E6B0"}.cuIcon-remind:before{content:"\\E6B2"}.cuIcon-delete:before{content:"\\E6B4"}.cuIcon-profile:before{content:"\\E6B7"}.cuIcon-home:before{content:"\\E6B8"}.cuIcon-cartfill:before{content:"\\E6B9"}.cuIcon-discoverfill:before{content:"\\E6BA"}.cuIcon-homefill:before{content:"\\E6BB"}.cuIcon-message:before{content:"\\E6BC"}.cuIcon-addressbook:before{content:"\\E6BD"}.cuIcon-link:before{content:"\\E6BF"}.cuIcon-lock:before{content:"\\E6C0"}.cuIcon-unlock:before{content:"\\E6C2"}.cuIcon-vip:before{content:"\\E6C3"}.cuIcon-weibo:before{content:"\\E6C4"}.cuIcon-activity:before{content:"\\E6C5"}.cuIcon-friendaddfill:before{content:"\\E6C9"}.cuIcon-friendadd:before{content:"\\E6CA"}.cuIcon-friendfamous:before{content:"\\E6CB"}.cuIcon-friend:before{content:"\\E6CC"}.cuIcon-goods:before{content:"\\E6CD"}.cuIcon-selection:before{content:"\\E6CE"}.cuIcon-explore:before{content:"\\E6D2"}.cuIcon-present:before{content:"\\E6D3"}.cuIcon-squarecheckfill:before{content:"\\E6D4"}.cuIcon-square:before{content:"\\E6D5"}.cuIcon-squarecheck:before{content:"\\E6D6"}.cuIcon-round:before{content:"\\E6D7"}.cuIcon-roundaddfill:before{content:"\\E6D8"}.cuIcon-roundadd:before{content:"\\E6D9"}.cuIcon-add:before{content:"\\E6DA"}.cuIcon-notificationforbidfill:before{content:"\\E6DB"}.cuIcon-explorefill:before{content:"\\E6DD"}.cuIcon-fold:before{content:"\\E6DE"}.cuIcon-game:before{content:"\\E6DF"}.cuIcon-redpacket:before{content:"\\E6E0"}.cuIcon-selectionfill:before{content:"\\E6E1"}.cuIcon-similar:before{content:"\\E6E2"}.cuIcon-appreciatefill:before{content:"\\E6E3"}.cuIcon-infofill:before{content:"\\E6E4"}.cuIcon-info:before{content:"\\E6E5"}.cuIcon-forwardfill:before{content:"\\E6EA"}.cuIcon-forward:before{content:"\\E6EB"}.cuIcon-rechargefill:before{content:"\\E6EC"}.cuIcon-recharge:before{content:"\\E6ED"}.cuIcon-vipcard:before{content:"\\E6EE"}.cuIcon-voice:before{content:"\\E6EF"}.cuIcon-voicefill:before{content:"\\E6F0"}.cuIcon-friendfavor:before{content:"\\E6F1"}.cuIcon-wifi:before{content:"\\E6F2"}.cuIcon-share:before{content:"\\E6F3"}.cuIcon-wefill:before{content:"\\E6F4"}.cuIcon-we:before{content:"\\E6F5"}.cuIcon-lightauto:before{content:"\\E6F6"}.cuIcon-lightforbid:before{content:"\\E6F7"}.cuIcon-lightfill:before{content:"\\E6F8"}.cuIcon-camerarotate:before{content:"\\E6F9"}.cuIcon-light:before{content:"\\E6FA"}.cuIcon-barcode:before{content:"\\E6FB"}.cuIcon-flashlightclose:before{content:"\\E6FC"}.cuIcon-flashlightopen:before{content:"\\E6FD"}.cuIcon-searchlist:before{content:"\\E6FE"}.cuIcon-service:before{content:"\\E6FF"}.cuIcon-sort:before{content:"\\E700"}.cuIcon-down:before{content:"\\E703"}.cuIcon-mobile:before{content:"\\E704"}.cuIcon-mobilefill:before{content:"\\E705"}.cuIcon-copy:before{content:"\\E706"}.cuIcon-countdownfill:before{content:"\\E707"}.cuIcon-countdown:before{content:"\\E708"}.cuIcon-noticefill:before{content:"\\E709"}.cuIcon-notice:before{content:"\\E70A"}.cuIcon-upstagefill:before{content:"\\E70E"}.cuIcon-upstage:before{content:"\\E70F"}.cuIcon-babyfill:before{content:"\\E710"}.cuIcon-baby:before{content:"\\E711"}.cuIcon-brandfill:before{content:"\\E712"}.cuIcon-brand:before{content:"\\E713"}.cuIcon-choicenessfill:before{content:"\\E714"}.cuIcon-choiceness:before{content:"\\E715"}.cuIcon-clothesfill:before{content:"\\E716"}.cuIcon-clothes:before{content:"\\E717"}.cuIcon-creativefill:before{content:"\\E718"}.cuIcon-creative:before{content:"\\E719"}.cuIcon-female:before{content:"\\E71A"}.cuIcon-keyboard:before{content:"\\E71B"}.cuIcon-male:before{content:"\\E71C"}.cuIcon-newfill:before{content:"\\E71D"}.cuIcon-new:before{content:"\\E71E"}.cuIcon-pullleft:before{content:"\\E71F"}.cuIcon-pullright:before{content:"\\E720"}.cuIcon-rankfill:before{content:"\\E721"}.cuIcon-rank:before{content:"\\E722"}.cuIcon-bad:before{content:"\\E723"}.cuIcon-cameraadd:before{content:"\\E724"}.cuIcon-focus:before{content:"\\E725"}.cuIcon-friendfill:before{content:"\\E726"}.cuIcon-cameraaddfill:before{content:"\\E727"}.cuIcon-apps:before{content:"\\E729"}.cuIcon-paintfill:before{content:"\\E72A"}.cuIcon-paint:before{content:"\\E72B"}.cuIcon-picfill:before{content:"\\E72C"}.cuIcon-refresharrow:before{content:"\\E72D"}.cuIcon-colorlens:before{content:"\\E6E6"}.cuIcon-markfill:before{content:"\\E730"}.cuIcon-mark:before{content:"\\E731"}.cuIcon-presentfill:before{content:"\\E732"}.cuIcon-repeal:before{content:"\\E733"}.cuIcon-album:before{content:"\\E734"}.cuIcon-peoplefill:before{content:"\\E735"}.cuIcon-people:before{content:"\\E736"}.cuIcon-servicefill:before{content:"\\E737"}.cuIcon-repair:before{content:"\\E738"}.cuIcon-file:before{content:"\\E739"}.cuIcon-repairfill:before{content:"\\E73A"}.cuIcon-taoxiaopu:before{content:"\\E73B"}.cuIcon-weixin:before{content:"\\E612"}.cuIcon-attentionfill:before{content:"\\E73C"}.cuIcon-attention:before{content:"\\E73D"}.cuIcon-commandfill:before{content:"\\E73E"}.cuIcon-command:before{content:"\\E73F"}.cuIcon-communityfill:before{content:"\\E740"}.cuIcon-community:before{content:"\\E741"}.cuIcon-read:before{content:"\\E742"}.cuIcon-calendar:before{content:"\\E74A"}.cuIcon-cut:before{content:"\\E74B"}.cuIcon-magic:before{content:"\\E74C"}.cuIcon-backwardfill:before{content:"\\E74D"}.cuIcon-playfill:before{content:"\\E74F"}.cuIcon-stop:before{content:"\\E750"}.cuIcon-tagfill:before{content:"\\E751"}.cuIcon-tag:before{content:"\\E752"}.cuIcon-group:before{content:"\\E753"}.cuIcon-all:before{content:"\\E755"}.cuIcon-backdelete:before{content:"\\E756"}.cuIcon-hotfill:before{content:"\\E757"}.cuIcon-hot:before{content:"\\E758"}.cuIcon-post:before{content:"\\E759"}.cuIcon-radiobox:before{content:"\\E75B"}.cuIcon-rounddown:before{content:"\\E75C"}.cuIcon-upload:before{content:"\\E75D"}.cuIcon-writefill:before{content:"\\E760"}.cuIcon-write:before{content:"\\E761"}.cuIcon-radioboxfill:before{content:"\\E763"}.cuIcon-punch:before{content:"\\E764"}.cuIcon-shake:before{content:"\\E765"}.cuIcon-move:before{content:"\\E768"}.cuIcon-safe:before{content:"\\E769"}.cuIcon-activityfill:before{content:"\\E775"}.cuIcon-crownfill:before{content:"\\E776"}.cuIcon-crown:before{content:"\\E777"}.cuIcon-goodsfill:before{content:"\\E778"}.cuIcon-messagefill:before{content:"\\E779"}.cuIcon-profilefill:before{content:"\\E77A"}.cuIcon-sound:before{content:"\\E77B"}.cuIcon-sponsorfill:before{content:"\\E77C"}.cuIcon-sponsor:before{content:"\\E77D"}.cuIcon-upblock:before{content:"\\E77E"}.cuIcon-weblock:before{content:"\\E77F"}.cuIcon-weunblock:before{content:"\\E780"}.cuIcon-my:before{content:"\\E78B"}.cuIcon-myfill:before{content:"\\E78C"}.cuIcon-emojifill:before{content:"\\E78D"}.cuIcon-emojiflashfill:before{content:"\\E78E"}.cuIcon-flashbuyfill:before{content:"\\E78F"}.cuIcon-text:before{content:"\\E791"}.cuIcon-goodsfavor:before{content:"\\E794"}.cuIcon-musicfill:before{content:"\\E795"}.cuIcon-musicforbidfill:before{content:"\\E796"}.cuIcon-card:before{content:"\\E624"}.cuIcon-triangledownfill:before{content:"\\E79B"}.cuIcon-triangleupfill:before{content:"\\E79C"}.cuIcon-roundleftfill-copy:before{content:"\\E79E"}.cuIcon-font:before{content:"\\E76A"}.cuIcon-title:before{content:"\\E82F"}.cuIcon-recordfill:before{content:"\\E7A4"}.cuIcon-record:before{content:"\\E7A6"}.cuIcon-cardboardfill:before{content:"\\E7A9"}.cuIcon-cardboard:before{content:"\\E7AA"}.cuIcon-formfill:before{content:"\\E7AB"}.cuIcon-coin:before{content:"\\E7AC"}.cuIcon-cardboardforbid:before{content:"\\E7AF"}.cuIcon-circlefill:before{content:"\\E7B0"}.cuIcon-circle:before{content:"\\E7B1"}.cuIcon-attentionforbid:before{content:"\\E7B2"}.cuIcon-attentionforbidfill:before{content:"\\E7B3"}.cuIcon-attentionfavorfill:before{content:"\\E7B4"}.cuIcon-attentionfavor:before{content:"\\E7B5"}.cuIcon-titles:before{content:"\\E701"}.cuIcon-icloading:before{content:"\\E67A"}.cuIcon-full:before{content:"\\E7BC"}.cuIcon-mail:before{content:"\\E7BD"}.cuIcon-peoplelist:before{content:"\\E7BE"}.cuIcon-goodsnewfill:before{content:"\\E7BF"}.cuIcon-goodsnew:before{content:"\\E7C0"}.cuIcon-medalfill:before{content:"\\E7C1"}.cuIcon-medal:before{content:"\\E7C2"}.cuIcon-newsfill:before{content:"\\E7C3"}.cuIcon-newshotfill:before{content:"\\E7C4"}.cuIcon-newshot:before{content:"\\E7C5"}.cuIcon-news:before{content:"\\E7C6"}.cuIcon-videofill:before{content:"\\E7C7"}.cuIcon-video:before{content:"\\E7C8"}.cuIcon-exit:before{content:"\\E7CB"}.cuIcon-skinfill:before{content:"\\E7CC"}.cuIcon-skin:before{content:"\\E7CD"}.cuIcon-moneybagfill:before{content:"\\E7CE"}.cuIcon-usefullfill:before{content:"\\E7CF"}.cuIcon-usefull:before{content:"\\E7D0"}.cuIcon-moneybag:before{content:"\\E7D1"}.cuIcon-redpacket_fill:before{content:"\\E7D3"}.cuIcon-subscription:before{content:"\\E7D4"}.cuIcon-loading1:before{content:"\\E633"}.cuIcon-github:before{content:"\\E692"}.cuIcon-global:before{content:"\\E7EB"}.cuIcon-settingsfill:before{content:"\\E6AB"}.cuIcon-back_android:before{content:"\\E7ED"}.cuIcon-expressman:before{content:"\\E7EF"}.cuIcon-evaluate_fill:before{content:"\\E7F0"}.cuIcon-group_fill:before{content:"\\E7F5"}.cuIcon-play_forward_fill:before{content:"\\E7F6"}.cuIcon-deliver_fill:before{content:"\\E7F7"}.cuIcon-notice_forbid_fill:before{content:"\\E7F8"}.cuIcon-fork:before{content:"\\E60C"}.cuIcon-pick:before{content:"\\E7FA"}.cuIcon-wenzi:before{content:"\\E6A7"}.cuIcon-ellipse:before{content:"\\E600"}.cuIcon-qr_code:before{content:"\\E61B"}.cuIcon-dianhua:before{content:"\\E64D"}.cuIcon-cuIcon:before{content:"\\E602"}.cuIcon-loading2:before{content:"\\E7F1"}.cuIcon-btn:before{content:"\\E601"}', ""])
    },
    "6a87": function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n("288e")
              , i = t(n("5176"))
              , o = t(n("e143"));
            e["____9395939____"] = !0,
            delete e["____9395939____"],
            e.__uniConfig = {
                globalStyle: {
                    "mp-alipay": {
                        transparentTitle: "always",
                        allowsBounceVertical: "NO"
                    },
                    navigationBarBackgroundColor: "#0081ff",
                    navigationBarTitleText: "表盘自定义工具",
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white"
                },
                usingComponts: !0,
                condition: {
                    current: 0,
                    list: []
                }
            },
            e.__uniConfig.router = {
                mode: "hash",
                base: "/h5/"
            },
            e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 3e3
            },
            e.__uniConfig.debug = !1,
            e.__uniConfig.networkTimeout = {
                request: 12e4,
                connectSocket: 6e3,
                uploadFile: 12e4,
                downloadFile: 12e4
            },
            e.__uniConfig.sdkConfigs = {},
            e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",
            e.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            o.default.component("pages-index-index", function(e) {
                var t = {
                    component: Promise.all([n.e("pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy"), n.e("pages-index-index")]).then(function() {
                        return e(n("0cf1"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-make-make", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("a68f"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-explore-explore", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("a67d"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-about", function(e) {
                var t = {
                    component: n.e("pages-about-about").then(function() {
                        return e(n("37f8"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-wkiwi-user-wkiwi-user", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("e826"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-download-download", function(e) {
                var t = {
                    component: n.e("pages-download-download").then(function() {
                        return e(n("0087"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-update-index", function(e) {
                var t = {
                    component: n.e("pages-update-index").then(function() {
                        return e(n("1d2b"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-basis-basis", function(e) {
                var t = {
                    component: n.e("pages-basis-basis").then(function() {
                        return e(n("1fd9"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-tools-tools", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("327d"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-bandBBS-bandBBS", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("ed13"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-updateHistory-updateHistory", function(e) {
                var t = {
                    component: n.e("pages-about-updateHistory-updateHistory").then(function() {
                        return e(n("25a9"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-notice", function(e) {
                var t = {
                    component: n.e("pages-about-notice").then(function() {
                        return e(n("7f28"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-adDetail", function(e) {
                var t = {
                    component: n.e("pages-about-adDetail").then(function() {
                        return e(n("bb38"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-declaration-declaration", function(e) {
                var t = {
                    component: n.e("pages-about-declaration-declaration").then(function() {
                        return e(n("dd26"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-help-help", function(e) {
                var t = {
                    component: n.e("pages-about-help-help").then(function() {
                        return e(n("bfef"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-myBin-myBin", function(e) {
                var t = {
                    component: n.e("pages-about-myBin-myBin").then(function() {
                        return e(n("bb70"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-uploadBin-uploadBin", function(e) {
                var t = {
                    component: Promise.all([n.e("pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy"), n.e("pages-about-uploadBin-uploadBin")]).then(function() {
                        return e(n("a60d"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-downloadHistory-downloadHistory", function(e) {
                var t = {
                    component: n.e("pages-about-downloadHistory-downloadHistory").then(function() {
                        return e(n("d9fc"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-setting-setting", function(e) {
                var t = {
                    component: n.e("pages-about-setting-setting").then(function() {
                        return e(n("fe23"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-detail-detail", function(e) {
                var t = {
                    component: Promise.all([n.e("pages-detail-detail~pages-res-resDetail"), n.e("pages-detail-detail")]).then(function() {
                        return e(n("41fe"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-Bluetooth-Bluetooth", function(e) {
                var t = {
                    component: n.e("pages-Bluetooth-Bluetooth").then(function() {
                        return e(n("e169"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-res-resPage", function(e) {
                var t = {
                    component: Promise.resolve().then(function() {
                        return e(n("bb64"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-res-resList", function(e) {
                var t = {
                    component: n.e("pages-res-resList").then(function() {
                        return e(n("14db"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-res-resDetail", function(e) {
                var t = {
                    component: Promise.all([n.e("pages-detail-detail~pages-res-resDetail"), n.e("pages-res-resDetail")]).then(function() {
                        return e(n("0bbc"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-res-resdiy", function(e) {
                var t = {
                    component: Promise.all([n.e("pages-about-uploadBin-uploadBin~pages-index-index~pages-res-resdiy"), n.e("pages-res-resdiy")]).then(function() {
                        return e(n("7c6b"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-donate-donate", function(e) {
                var t = {
                    component: n.e("pages-about-donate-donate").then(function() {
                        return e(n("18dd"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-donate_apply-donate_apply", function(e) {
                var t = {
                    component: n.e("pages-about-donate_apply-donate_apply").then(function() {
                        return e(n("0c58"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-installed-installed", function(e) {
                var t = {
                    component: n.e("pages-about-installed-installed").then(function() {
                        return e(n("6871"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-about-favourite-favourite", function(e) {
                var t = {
                    component: n.e("pages-about-favourite-favourite").then(function() {
                        return e(n("b588"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-tags-list-list", function(e) {
                var t = {
                    component: n.e("pages-tags-list-list").then(function() {
                        return e(n("e6b2"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-tags-detail-detail", function(e) {
                var t = {
                    component: n.e("pages-tags-detail-detail").then(function() {
                        return e(n("18d2"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            o.default.component("pages-tags-cloud-cloud", function(e) {
                var t = {
                    component: n.e("pages-tags-cloud-cloud").then(function() {
                        return e(n("1343"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }),
            e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {})
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 44
                }
            }, {
                path: "/pages/make/make",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-make-make", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-make-make",
                    isNVue: !1,
                    pagePath: "pages/make/make",
                    windowTop: 44
                }
            }, {
                path: "/pages/explore/explore",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-explore-explore", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-explore-explore",
                    isNVue: !1,
                    pagePath: "pages/explore/explore",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/about",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-about", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-about",
                    isNVue: !1,
                    pagePath: "pages/about/about",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/wkiwi-user/wkiwi-user",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-wkiwi-user-wkiwi-user", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-wkiwi-user-wkiwi-user",
                    isNVue: !1,
                    pagePath: "pages/about/wkiwi-user/wkiwi-user",
                    windowTop: 44
                }
            }, {
                path: "/pages/download/download",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-download-download", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-download-download",
                    isNVue: !1,
                    pagePath: "pages/download/download",
                    windowTop: 44
                }
            }, {
                path: "/pages/update/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "软件更新",
                                navigationBarBackgroundColor: "#007AFF",
                                navigationBarTextStyle: "white",
                                enablePullDownRefresh: !0,
                                titleNView: {
                                    backgroundColor: "#007AFF"
                                },
                                pullToRefresh: {
                                    support: !0,
                                    color: "#007AFF",
                                    style: "circle"
                                }
                            })
                        }, [e("pages-update-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-update-index",
                    isNVue: !1,
                    pagePath: "pages/update/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/basis/basis",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-basis-basis", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-basis-basis",
                    isNVue: !1,
                    pagePath: "pages/basis/basis",
                    windowTop: 44
                }
            }, {
                path: "/pages/tools/tools",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-tools-tools", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-tools-tools",
                    isNVue: !1,
                    pagePath: "pages/tools/tools",
                    windowTop: 44
                }
            }, {
                path: "/pages/bandBBS/bandBBS",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {
                                titleNView: {}
                            })
                        }, [e("pages-bandBBS-bandBBS", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-bandBBS-bandBBS",
                    isNVue: !1,
                    pagePath: "pages/bandBBS/bandBBS",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/updateHistory/updateHistory",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-updateHistory-updateHistory", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-updateHistory-updateHistory",
                    isNVue: !1,
                    pagePath: "pages/about/updateHistory/updateHistory",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/notice",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-notice", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-notice",
                    isNVue: !1,
                    pagePath: "pages/about/notice",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/adDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-adDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-adDetail",
                    isNVue: !1,
                    pagePath: "pages/about/adDetail",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/declaration/declaration",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-declaration-declaration", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-declaration-declaration",
                    isNVue: !1,
                    pagePath: "pages/about/declaration/declaration",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/help/help",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-help-help", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-help-help",
                    isNVue: !1,
                    pagePath: "pages/about/help/help",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/myBin/myBin",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-myBin-myBin", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-myBin-myBin",
                    isNVue: !1,
                    pagePath: "pages/about/myBin/myBin",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/uploadBin/uploadBin",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-uploadBin-uploadBin", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-uploadBin-uploadBin",
                    isNVue: !1,
                    pagePath: "pages/about/uploadBin/uploadBin",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/downloadHistory/downloadHistory",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-downloadHistory-downloadHistory", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-downloadHistory-downloadHistory",
                    isNVue: !1,
                    pagePath: "pages/about/downloadHistory/downloadHistory",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/setting/setting",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-setting-setting", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-setting-setting",
                    isNVue: !1,
                    pagePath: "pages/about/setting/setting",
                    windowTop: 44
                }
            }, {
                path: "/pages/detail/detail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-detail-detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-detail-detail",
                    isNVue: !1,
                    pagePath: "pages/detail/detail",
                    windowTop: 44
                }
            }, {
                path: "/pages/Bluetooth/Bluetooth",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-Bluetooth-Bluetooth", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-Bluetooth-Bluetooth",
                    isNVue: !1,
                    pagePath: "pages/Bluetooth/Bluetooth",
                    windowTop: 44
                }
            }, {
                path: "/pages/res/resPage",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-res-resPage", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-res-resPage",
                    isNVue: !1,
                    pagePath: "pages/res/resPage",
                    windowTop: 44
                }
            }, {
                path: "/pages/res/resList",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-res-resList", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-res-resList",
                    isNVue: !1,
                    pagePath: "pages/res/resList",
                    windowTop: 44
                }
            }, {
                path: "/pages/res/resDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-res-resDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-res-resDetail",
                    isNVue: !1,
                    pagePath: "pages/res/resDetail",
                    windowTop: 44
                }
            }, {
                path: "/pages/res/resdiy",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-res-resdiy", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-res-resdiy",
                    isNVue: !1,
                    pagePath: "pages/res/resdiy",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/donate/donate",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-donate-donate", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-donate-donate",
                    isNVue: !1,
                    pagePath: "pages/about/donate/donate",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/donate_apply/donate_apply",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-donate_apply-donate_apply", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-donate_apply-donate_apply",
                    isNVue: !1,
                    pagePath: "pages/about/donate_apply/donate_apply",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/installed/installed",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-installed-installed", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-installed-installed",
                    isNVue: !1,
                    pagePath: "pages/about/installed/installed",
                    windowTop: 44
                }
            }, {
                path: "/pages/about/favourite/favourite",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-about-favourite-favourite", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-about-favourite-favourite",
                    isNVue: !1,
                    pagePath: "pages/about/favourite/favourite",
                    windowTop: 44
                }
            }, {
                path: "/pages/tags/list/list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-tags-list-list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-tags-list-list",
                    isNVue: !1,
                    pagePath: "pages/tags/list/list",
                    windowTop: 44
                }
            }, {
                path: "/pages/tags/detail/detail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-tags-detail-detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-tags-detail-detail",
                    isNVue: !1,
                    pagePath: "pages/tags/detail/detail",
                    windowTop: 44
                }
            }, {
                path: "/pages/tags/cloud/cloud",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0,
                            i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-tags-cloud-cloud", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-tags-cloud-cloud",
                    isNVue: !1,
                    pagePath: "pages/tags/cloud/cloud",
                    windowTop: 44
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }]
        }
        ).call(this, n("c8ba"))
    },
    "6ec0": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, "uni-page-body[data-v-35f71bca]{background-color:#f1f1f1;font-size:%?30?%}.content[data-v-35f71bca]{padding-top:50px;padding-bottom:60px}.header[data-v-35f71bca]{background:#fff;height:220px;padding-bottom:%?110?%}.header .bg[data-v-35f71bca]{width:100%;height:%?200?%;padding-top:%?100?%;background-image:-webkit-linear-gradient(45deg,#0081ff,#1cbbb4);background-image:-o-linear-gradient(45deg,#0081ff,#1cbbb4);background-image:linear-gradient(45deg,#0081ff,#1cbbb4)}.box[data-v-35f71bca]{width:%?650?%;height:%?280?%;border-radius:%?20?%;margin:0 auto;background:#fff;-webkit-box-shadow:0 %?5?% %?20?% %?0?% rgba(0,0,150,.2);box-shadow:0 %?5?% %?20?% %?0?% rgba(0,0,150,.2)}.box .box-hd[data-v-35f71bca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.box .box-hd .avator[data-v-35f71bca]{width:%?160?%;height:%?160?%;background:#fff;border:%?5?% solid #fff;border-radius:50%;margin-top:%?-80?%;overflow:hidden}.box .box-hd .avator img[data-v-35f71bca]{width:100%;height:100%}.box .box-hd .phone-number[data-v-35f71bca]{width:100%;text-align:center}.box .box-bd[data-v-35f71bca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.box .box-bd .item[data-v-35f71bca]{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-right:1px solid #f1f1f1;margin:%?15?% 0}.box .box-bd .item[data-v-35f71bca]:last-child{border:none}.box .box-bd .item .icon[data-v-35f71bca]{width:%?60?%;height:%?60?%}.box .box-bd .item .icon img[data-v-35f71bca]{width:100%;height:100%}.box .box-bd .item .text[data-v-35f71bca]{width:100%;text-align:center;margin-top:%?10?%}.list-content[data-v-35f71bca]{background:#fff}.list[data-v-35f71bca]{width:100%;border-bottom:%?15?% solid #f1f1f1;background:#fff}.list[data-v-35f71bca]:last-child{border:none}.list .li[data-v-35f71bca]{width:100%;height:%?100?%;padding:0 4%;border-bottom:1px solid #f3f3f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .li img[data-v-35f71bca]{width:25px;height:25px}.list .li.noborder[data-v-35f71bca]{border-bottom:0}.list .li .icon[data-v-35f71bca]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-35f71bca]{width:%?50?%;height:%?50?%}.list .li .text[data-v-35f71bca]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-35f71bca]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?40?%;height:%?40?%}.login-option[data-v-35f71bca]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.login-option uni-text[data-v-35f71bca]{display:block}.login-option img[data-v-35f71bca]{height:40px;width:40px}.username[data-v-35f71bca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.donation-bage[data-v-35f71bca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.donation-bage .donation-bage-img[data-v-35f71bca]{height:20px;width:20px}.donation-bage uni-text[data-v-35f71bca]{background:#f9b86b;color:#fff;padding-left:4px;padding-right:4px;border-radius:4px;margin-right:4px;position:relative;left:-4px}.wx-login-btn[data-v-35f71bca]{display:block;width:140px;font-size:14px;margin:0 auto}body.?%PAGE?%[data-v-35f71bca]{background-color:#f1f1f1}", ""])
    },
    "6f7c": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("a481"),
        n("6b54"),
        n("87b3");
        var i = {
            md5: function(e) {
                var t = function(e) {
                    var t, n, o, a, r, s, p, b, m, w = Array(), v = 7, y = 12, x = 17, k = 22, C = 5, A = 9, E = 14, _ = 20, B = 4, D = 11, I = 16, S = 23, T = 6, F = 10, P = 15, M = 21;
                    for (e = h(e),
                    w = f(e),
                    s = 1732584193,
                    p = 4023233417,
                    b = 2562383102,
                    m = 271733878,
                    t = 0; t < w.length; t += 16)
                        n = s,
                        o = p,
                        a = b,
                        r = m,
                        s = c(s, p, b, m, w[t + 0], v, 3614090360),
                        m = c(m, s, p, b, w[t + 1], y, 3905402710),
                        b = c(b, m, s, p, w[t + 2], x, 606105819),
                        p = c(p, b, m, s, w[t + 3], k, 3250441966),
                        s = c(s, p, b, m, w[t + 4], v, 4118548399),
                        m = c(m, s, p, b, w[t + 5], y, 1200080426),
                        b = c(b, m, s, p, w[t + 6], x, 2821735955),
                        p = c(p, b, m, s, w[t + 7], k, 4249261313),
                        s = c(s, p, b, m, w[t + 8], v, 1770035416),
                        m = c(m, s, p, b, w[t + 9], y, 2336552879),
                        b = c(b, m, s, p, w[t + 10], x, 4294925233),
                        p = c(p, b, m, s, w[t + 11], k, 2304563134),
                        s = c(s, p, b, m, w[t + 12], v, 1804603682),
                        m = c(m, s, p, b, w[t + 13], y, 4254626195),
                        b = c(b, m, s, p, w[t + 14], x, 2792965006),
                        p = c(p, b, m, s, w[t + 15], k, 1236535329),
                        s = l(s, p, b, m, w[t + 1], C, 4129170786),
                        m = l(m, s, p, b, w[t + 6], A, 3225465664),
                        b = l(b, m, s, p, w[t + 11], E, 643717713),
                        p = l(p, b, m, s, w[t + 0], _, 3921069994),
                        s = l(s, p, b, m, w[t + 5], C, 3593408605),
                        m = l(m, s, p, b, w[t + 10], A, 38016083),
                        b = l(b, m, s, p, w[t + 15], E, 3634488961),
                        p = l(p, b, m, s, w[t + 4], _, 3889429448),
                        s = l(s, p, b, m, w[t + 9], C, 568446438),
                        m = l(m, s, p, b, w[t + 14], A, 3275163606),
                        b = l(b, m, s, p, w[t + 3], E, 4107603335),
                        p = l(p, b, m, s, w[t + 8], _, 1163531501),
                        s = l(s, p, b, m, w[t + 13], C, 2850285829),
                        m = l(m, s, p, b, w[t + 2], A, 4243563512),
                        b = l(b, m, s, p, w[t + 7], E, 1735328473),
                        p = l(p, b, m, s, w[t + 12], _, 2368359562),
                        s = u(s, p, b, m, w[t + 5], B, 4294588738),
                        m = u(m, s, p, b, w[t + 8], D, 2272392833),
                        b = u(b, m, s, p, w[t + 11], I, 1839030562),
                        p = u(p, b, m, s, w[t + 14], S, 4259657740),
                        s = u(s, p, b, m, w[t + 1], B, 2763975236),
                        m = u(m, s, p, b, w[t + 4], D, 1272893353),
                        b = u(b, m, s, p, w[t + 7], I, 4139469664),
                        p = u(p, b, m, s, w[t + 10], S, 3200236656),
                        s = u(s, p, b, m, w[t + 13], B, 681279174),
                        m = u(m, s, p, b, w[t + 0], D, 3936430074),
                        b = u(b, m, s, p, w[t + 3], I, 3572445317),
                        p = u(p, b, m, s, w[t + 6], S, 76029189),
                        s = u(s, p, b, m, w[t + 9], B, 3654602809),
                        m = u(m, s, p, b, w[t + 12], D, 3873151461),
                        b = u(b, m, s, p, w[t + 15], I, 530742520),
                        p = u(p, b, m, s, w[t + 2], S, 3299628645),
                        s = d(s, p, b, m, w[t + 0], T, 4096336452),
                        m = d(m, s, p, b, w[t + 7], F, 1126891415),
                        b = d(b, m, s, p, w[t + 14], P, 2878612391),
                        p = d(p, b, m, s, w[t + 5], M, 4237533241),
                        s = d(s, p, b, m, w[t + 12], T, 1700485571),
                        m = d(m, s, p, b, w[t + 3], F, 2399980690),
                        b = d(b, m, s, p, w[t + 10], P, 4293915773),
                        p = d(p, b, m, s, w[t + 1], M, 2240044497),
                        s = d(s, p, b, m, w[t + 8], T, 1873313359),
                        m = d(m, s, p, b, w[t + 15], F, 4264355552),
                        b = d(b, m, s, p, w[t + 6], P, 2734768916),
                        p = d(p, b, m, s, w[t + 13], M, 1309151649),
                        s = d(s, p, b, m, w[t + 4], T, 4149444226),
                        m = d(m, s, p, b, w[t + 11], F, 3174756917),
                        b = d(b, m, s, p, w[t + 2], P, 718787259),
                        p = d(p, b, m, s, w[t + 9], M, 3951481745),
                        s = i(s, n),
                        p = i(p, o),
                        b = i(b, a),
                        m = i(m, r);
                    var L = g(s) + g(p) + g(b) + g(m);
                    return L.toLowerCase()
                }
                  , n = function(e, t) {
                    return e << t | e >>> 32 - t
                }
                  , i = function(e, t) {
                    var n, i, o, a, r;
                    return o = 2147483648 & e,
                    a = 2147483648 & t,
                    n = 1073741824 & e,
                    i = 1073741824 & t,
                    r = (1073741823 & e) + (1073741823 & t),
                    n & i ? 2147483648 ^ r ^ o ^ a : n | i ? 1073741824 & r ? 3221225472 ^ r ^ o ^ a : 1073741824 ^ r ^ o ^ a : r ^ o ^ a
                }
                  , o = function(e, t, n) {
                    return e & t | ~e & n
                }
                  , a = function(e, t, n) {
                    return e & n | t & ~n
                }
                  , r = function(e, t, n) {
                    return e ^ t ^ n
                }
                  , s = function(e, t, n) {
                    return t ^ (e | ~n)
                }
                  , c = function(e, t, a, r, s, c, l) {
                    return e = i(e, i(i(o(t, a, r), s), l)),
                    i(n(e, c), t)
                }
                  , l = function(e, t, o, r, s, c, l) {
                    return e = i(e, i(i(a(t, o, r), s), l)),
                    i(n(e, c), t)
                }
                  , u = function(e, t, o, a, s, c, l) {
                    return e = i(e, i(i(r(t, o, a), s), l)),
                    i(n(e, c), t)
                }
                  , d = function(e, t, o, a, r, c, l) {
                    return e = i(e, i(i(s(t, o, a), r), l)),
                    i(n(e, c), t)
                }
                  , f = function(e) {
                    var t, n = e.length, i = n + 8, o = (i - i % 64) / 64, a = 16 * (o + 1), r = Array(a - 1), s = 0, c = 0;
                    while (c < n)
                        t = (c - c % 4) / 4,
                        s = c % 4 * 8,
                        r[t] = r[t] | e.charCodeAt(c) << s,
                        c++;
                    return t = (c - c % 4) / 4,
                    s = c % 4 * 8,
                    r[t] = r[t] | 128 << s,
                    r[a - 2] = n << 3,
                    r[a - 1] = n >>> 29,
                    r
                }
                  , g = function(e) {
                    var t, n, i = "", o = "";
                    for (n = 0; n <= 3; n++)
                        t = e >>> 8 * n & 255,
                        o = "0" + t.toString(16),
                        i += o.substr(o.length - 2, 2);
                    return i
                }
                  , h = function(e) {
                    e = e.toString().replace(/\x0d\x0a/g, "\n");
                    for (var t = "", n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                        t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                        t += String.fromCharCode(i >> 6 & 63 | 128),
                        t += String.fromCharCode(63 & i | 128))
                    }
                    return t
                };
                return t(e)
            }
        }
          , o = i;
        t.default = o
    },
    "725e": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "content"
            }, [i("v-uni-view", {
                staticClass: "header"
            }, [i("v-uni-view", {
                staticClass: "bg"
            }, [i("v-uni-view", {
                staticClass: "box"
            }, [i("v-uni-view", {
                staticClass: "box-hd name-box",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.openLoginDialog(t)
                    }
                }
            }, [e.userInfo.figureurl_qq ? i("v-uni-view", {
                staticClass: "avator"
            }, [i("img", {
                attrs: {
                    src: e.userInfo.figureurl_qq
                }
            })]) : i("v-uni-view", {
                staticClass: "avator"
            }, [i("img", {
                attrs: {
                    src: "static/logo.png"
                }
            })]), e.userInfo.nickname ? i("v-uni-view", {
                staticClass: "phone-number username"
            }, [e.isDonateFlag ? i("v-uni-view", {
                staticClass: "donation-bage",
                staticStyle: {
                    height: "20px"
                }
            }, [i("img", {
                staticClass: "donation-bage-img",
                attrs: {
                    src: "static/donation.png"
                }
            }), i("v-uni-text", {
                staticStyle: {
                    height: "20px"
                }
            }, [e._v(e._s(e.i18n.about.donor))])], 1) : e._e(), e._v(e._s(e.userInfo.nickname))], 1) : i("v-uni-view", {
                staticClass: "phone-number"
            }, [e._v(e._s(e.i18n.about.login) + " >")])], 1), i("v-uni-view", {
                staticClass: "box-bd"
            }, [i("v-uni-view", {
                staticClass: "item",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToFavourite(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/message.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.about.favourite))])], 1), i("v-uni-view", {
                staticClass: "item",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.myBin(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/favorite.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.about.myWatchface))])], 1), i("v-uni-view", {
                staticClass: "item",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.downloadHistory(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/service.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.mybin.downloadHistory))])], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "list-content"
            }, [i("v-uni-view", {
                staticClass: "list"
            }, [i("v-uni-view", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToMitan(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/tabbar/bandBBS.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.aboutus.bandBBS))]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "li ",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.donate()
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/donate.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v("捐赠开发者")]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "li ",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.tryDonationFeature()
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/feature.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.donation.try_feature))]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "li ",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToHelp()
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/help.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.about.help))]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "li ",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToSetting(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/setting.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.about.setting))]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "li ",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToAboutUs(t)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("img", {
                attrs: {
                    src: "static/wkiwi-user/about.png"
                }
            })]), i("v-uni-view", {
                staticClass: "text"
            }, [e._v(e._s(e.i18n.about.aboutUs))]), i("img", {
                staticClass: "to",
                attrs: {
                    src: "static/wkiwi-user/to.png"
                }
            })], 1)], 1)], 1), i("v-uni-text", {
                staticStyle: {
                    color: "rgb(177, 177, 177)",
                    "text-align": "center",
                    "margin-top": "10px",
                    display: "block"
                }
            }, [e._v(e._s(e.i18n.about.genrated_before) + e._s(e.watchface_count) + e._s(e.i18n.about.genrated_after))]), i("v-uni-view", {
                staticClass: "cu-modal bottom-modal",
                class: "show" == e.loginDialog ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog"
            }, [i("v-uni-view", {
                staticClass: "cu-bar bg-white"
            }, [i("v-uni-view", {
                staticClass: "action text-green"
            }), i("v-uni-view", {
                staticClass: "action text-blue",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.hideLoginDialog(t)
                    }
                }
            }, [e._v(e._s(e.i18n.make.cancel))])], 1), i("v-uni-view", {
                staticClass: "padding-xl flex"
            }, [i("v-uni-view", {
                staticClass: "login-option",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.MitanLogin()
                    }
                }
            }, [i("img", {
                attrs: {
                    src: n("9b16"),
                    mode: "aspectFill"
                }
            }), i("v-uni-text", [e._v("米坛账号登录")])], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "show" == e.registerDialog ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog"
            }, [i("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end"
            }, [i("v-uni-view", {
                staticClass: "content"
            }, [e._v("米坛登录")]), i("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.hideRegisterDialog(t)
                    }
                }
            }, [i("v-uni-text", {
                staticClass: "cuIcon-close text-red"
            })], 1)], 1), i("v-uni-view", {
                staticClass: "padding-xl",
                staticStyle: {
                    "padding-bottom": "10px"
                }
            }, [i("v-uni-view", {
                staticClass: "cu-form-group margin-top"
            }, [i("v-uni-input", {
                attrs: {
                    placeholder: "米坛账号",
                    name: "input"
                },
                model: {
                    value: e.registerName,
                    callback: function(t) {
                        e.registerName = t
                    },
                    expression: "registerName"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "padding-xl",
                staticStyle: {
                    "padding-top": "0px",
                    "padding-bottom": "10px"
                }
            }, [i("v-uni-view", {
                staticClass: "cu-form-group"
            }, [i("v-uni-input", {
                attrs: {
                    placeholder: "密码",
                    name: "input"
                },
                model: {
                    value: e.registerPassword,
                    callback: function(t) {
                        e.registerPassword = t
                    },
                    expression: "registerPassword"
                }
            })], 1)], 1), i("v-uni-view", {
                staticStyle: {
                    "padding-top": "5px",
                    "padding-bottom": "5px"
                }
            }, [i("a", {
                staticStyle: {
                    color: "#0063b5"
                },
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.openUrl("https://www.bandbbs.cn/")
                    }
                }
            }, [e._v("没有账号？去注册")])]), i("v-uni-view", {
                staticClass: "cu-bar bg-white justify-end"
            }, [i("v-uni-view", {
                staticClass: "action"
            }, [i("v-uni-button", {
                staticClass: "cu-btn line-green text-green",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.hideRegisterDialog(t)
                    }
                }
            }, [e._v(e._s(e.i18n.make.cancel))]), i("v-uni-button", {
                staticClass: "cu-btn bg-green margin-left",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.confirmRegister(t)
                    }
                }
            }, [e._v(e._s(e.i18n.make.confirm))])], 1)], 1)], 1)], 1)], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "821e": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("App", {
                attrs: {
                    keepAliveInclude: e.keepAliveInclude
                }
            })
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "832b": function(e, t, n) {
        "use strict";
        (function(t) {
            var i = n("288e")
              , o = i(n("5176"));
            n("6b54"),
            n("87b3"),
            n("ac6a");
            var a = i(n("4d16"))
              , r = i(n("061b"))
              , s = i(n("5d58"))
              , c = i(n("4aa6"))
              , l = i(n("d5ca"))
              , u = i(n("67bb"))
              , d = i(n("85f2"));
            !function(n, i) {
                try {
                    t.ClipboardJS = i()
                } catch (i) {}
                e.exports = i()
            }(0, function() {
                return function(e) {
                    var t = {};
                    function n(i) {
                        if (t[i])
                            return t[i].exports;
                        var o = t[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return e[i].call(o.exports, o, o.exports, n),
                        o.l = !0,
                        o.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.d = function(e, t, i) {
                        n.o(e, t) || (0,
                        d.default)(e, t, {
                            enumerable: !0,
                            get: i
                        })
                    }
                    ,
                    n.r = function(e) {
                        "undefined" != typeof u.default && l.default && (0,
                        d.default)(e, l.default, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    n.t = function(e, t) {
                        if (1 & t && (e = n(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var i = (0,
                        c.default)(null);
                        if (n.r(i),
                        Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var o in e)
                                n.d(i, o, function(t) {
                                    return e[t]
                                }
                                .bind(null, o));
                        return i
                    }
                    ,
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, "a", t),
                        t
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n.p = "",
                    n(n.s = 0)
                }([function(e, t, n) {
                    var i = "function" == typeof u.default && "symbol" == typeof s.default ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : typeof e
                    }
                      , o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value"in i && (i.writable = !0),
                                (0,
                                d.default)(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                        }
                    }()
                      , l = h(n(1))
                      , f = h(n(3))
                      , g = h(n(4));
                    function h(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var p = function(e) {
                        function t(e, n) {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var i = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || (0,
                            r.default)(t)).call(this));
                            return i.resolveOptions(n),
                            i.listenClick(e),
                            i
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = (0,
                            c.default)(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            t && (a.default ? (0,
                            a.default)(e, t) : e.__proto__ = t)
                        }(t, f.default),
                        o(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                                this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                                this.text = "function" == typeof e.text ? e.text : this.defaultText,
                                this.container = "object" === i(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(e) {
                                var t = this;
                                this.listener = (0,
                                g.default)(e, "click", function(e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null),
                                this.clipboardAction = new l.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(e) {
                                return b("action", e) || "copy"
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(e) {
                                var t = b("target", e);
                                if (t)
                                    return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function(e) {
                                return b("text", e) || this.text
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(),
                                this.clipboardAction && (this.clipboardAction.destroy(),
                                this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                  , t = "string" == typeof e ? [e] : e
                                  , n = !!document.queryCommandSupported;
                                return t.forEach(function(e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }),
                                n
                            }
                        }]),
                        t
                    }();
                    function b(e, t) {
                        var n = "data-clipboard-" + e
                          , i = t && "function" === typeof t.hasAttribute;
                        if (i && t.hasAttribute(n))
                            return t.getAttribute(n)
                    }
                    e.exports = p
                }
                , function(e, t, n) {
                    var i, o = "function" == typeof u.default && "symbol" == typeof s.default ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : typeof e
                    }
                    , a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value"in i && (i.writable = !0),
                                (0,
                                d.default)(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                        }
                    }(), r = n(2), c = (i = r) && i.__esModule ? i : {
                        default: i
                    }, l = function() {
                        function t(e) {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            this.resolveOptions(e),
                            this.initSelection()
                        }
                        return a(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action,
                                this.container = e.container,
                                this.emitter = e.emitter,
                                this.target = e.target,
                                this.text = e.text,
                                this.trigger = e.trigger,
                                this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var e = this
                                  , t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(),
                                this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }
                                ,
                                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                                this.fakeElem = document.createElement("textarea"),
                                this.fakeElem.style.fontSize = "12pt",
                                this.fakeElem.style.border = "0",
                                this.fakeElem.style.padding = "0",
                                this.fakeElem.style.margin = "0",
                                this.fakeElem.style.position = "absolute",
                                this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px",
                                this.fakeElem.setAttribute("readonly", ""),
                                this.fakeElem.value = this.text,
                                this.container.appendChild(this.fakeElem),
                                this.selectedText = (0,
                                c.default)(this.fakeElem),
                                this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                                this.fakeHandler = null,
                                this.fakeHandlerCallback = null),
                                this.fakeElem && (this.container.removeChild(this.fakeElem),
                                this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0,
                                c.default)(this.target),
                                this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.trigger && this.trigger.focus(),
                                window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e,
                                "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]),
                        t
                    }();
                    e.exports = l
                }
                , function(e, t) {
                    e.exports = function(e) {
                        var t;
                        if ("SELECT" === e.nodeName)
                            e.focus(),
                            t = e.value;
                        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                            var n = e.hasAttribute("readonly");
                            n || e.setAttribute("readonly", ""),
                            e.select(),
                            e.setSelectionRange(0, e.value.length),
                            n || e.removeAttribute("readonly"),
                            t = e.value
                        } else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var i = window.getSelection()
                              , o = document.createRange();
                            o.selectNodeContents(e),
                            i.removeAllRanges(),
                            i.addRange(o),
                            t = i.toString()
                        }
                        return t
                    }
                }
                , function(e, t) {
                    function n() {}
                    n.prototype = {
                        on: function(e, t, n) {
                            var i = this.e || (this.e = {});
                            return (i[e] || (i[e] = [])).push({
                                fn: t,
                                ctx: n
                            }),
                            this
                        },
                        once: function(e, t, n) {
                            var i = this;
                            function o() {
                                i.off(e, o),
                                t.apply(n, arguments)
                            }
                            return o._ = t,
                            this.on(e, o, n)
                        },
                        emit: function(e) {
                            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++)
                                n[i].fn.apply(n[i].ctx, t);
                            return this
                        },
                        off: function(e, t) {
                            var n = this.e || (this.e = {})
                              , i = n[e]
                              , o = [];
                            if (i && t)
                                for (var a = 0, r = i.length; a < r; a++)
                                    i[a].fn !== t && i[a].fn._ !== t && o.push(i[a]);
                            return o.length ? n[e] = o : delete n[e],
                            this
                        }
                    },
                    e.exports = n
                }
                , function(e, t, n) {
                    var i = n(5)
                      , o = n(6);
                    e.exports = function(e, t, n) {
                        if (!e && !t && !n)
                            throw new Error("Missing required arguments");
                        if (!i.string(t))
                            throw new TypeError("Second argument must be a String");
                        if (!i.fn(n))
                            throw new TypeError("Third argument must be a Function");
                        if (i.node(e))
                            return f = t,
                            g = n,
                            (d = e).addEventListener(f, g),
                            {
                                destroy: function() {
                                    d.removeEventListener(f, g)
                                }
                            };
                        if (i.nodeList(e))
                            return c = e,
                            l = t,
                            u = n,
                            Array.prototype.forEach.call(c, function(e) {
                                e.addEventListener(l, u)
                            }),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(c, function(e) {
                                        e.removeEventListener(l, u)
                                    })
                                }
                            };
                        if (i.string(e))
                            return a = e,
                            r = t,
                            s = n,
                            o(document.body, a, r, s);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        var a, r, s, c, l, u, d, f, g
                    }
                }
                , function(e, t) {
                    t.node = function(e) {
                        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                    }
                    ,
                    t.nodeList = function(e) {
                        var n = Object.prototype.toString.call(e);
                        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
                    }
                    ,
                    t.string = function(e) {
                        return "string" == typeof e || e instanceof String
                    }
                    ,
                    t.fn = function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    }
                }
                , function(e, t, n) {
                    var i = n(7);
                    function o(e, t, n, o, a) {
                        var r = function(e, t, n, o) {
                            return function(n) {
                                n.delegateTarget = i(n.target, t),
                                n.delegateTarget && o.call(e, n)
                            }
                        }
                        .apply(this, arguments);
                        return e.addEventListener(n, r, a),
                        {
                            destroy: function() {
                                e.removeEventListener(n, r, a)
                            }
                        }
                    }
                    e.exports = function(e, t, n, i, a) {
                        return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                        Array.prototype.map.call(e, function(e) {
                            return o(e, t, n, i, a)
                        }))
                    }
                }
                , function(e, t) {
                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                        var n = Element.prototype;
                        n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
                    }
                    e.exports = function(e, t) {
                        for (; e && 9 !== e.nodeType; ) {
                            if ("function" == typeof e.matches && e.matches(t))
                                return e;
                            e = e.parentNode
                        }
                    }
                }
                ])
            });
            var f = {
                isFunction: function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object Function]" == t
                },
                isObject: function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object Object]" == t
                },
                isString: function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object String]" == t
                }
            };
            uni.setClipboardData = function(e) {
                var t = function() {}
                  , n = {
                    data: null,
                    event: null,
                    success: t,
                    fail: t,
                    complete: t
                };
                e && f.isObject(e) && (n = (0,
                o.default)({}, n, e)),
                e && f.isString(e) && (n = (0,
                o.default)({}, n, {
                    data: e
                }));
                var i = n.data
                  , a = n.success || t
                  , r = n.fail || t
                  , s = n.complete || t
                  , c = n.event || window.event || {}
                  , l = new ClipboardJS(".null",{
                    text: function() {
                        return i
                    }
                });
                l.on("success", function(e) {
                    a && f.isFunction(a) && a(e),
                    s && f.isFunction(s) && s(),
                    l.off("error"),
                    l.off("success"),
                    l.destroy()
                }),
                l.on("error", function(e) {
                    r && f.isFunction(r) && r(e),
                    s && f.isFunction(s) && s(),
                    l.off("error"),
                    l.off("success"),
                    l.destroy()
                }),
                l.onClick(c)
            }
        }
        ).call(this, n("c8ba"))
    },
    8873: function(e, t, n) {
        var i = n("018f");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("3f591c9f", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    8992: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1962")
          , o = n("f050");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("8ebd");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "1332e932", null);
        t["default"] = s.exports
    },
    "89f9": function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, '.explore[data-v-6e39933c]{padding-bottom:60px}uni-image[data-v-6e39933c]{will-change:transform}.nav[data-v-6e39933c]{position:fixed;width:100%;z-index:998;top:50px}.list[data-v-6e39933c]{padding-top:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.list .desc[data-v-6e39933c]{word-break:break-all;height:38px;display:block;overflow-x:hidden;overflow-y:scroll;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:12px}.list .watchface-img[data-v-6e39933c]{width:auto;height:auto}.img-view[data-v-6e39933c]{padding:%?40?% %?20?%;background-image:url("http://watchface.public.pingx.tech/photo-loading%20(1).png");background-repeat:no-repeat;background-position:50%;background-size:50px 50px}.donation[data-v-6e39933c]{border:2px solid gold}.non-donation[data-v-6e39933c]{border:2px dashed #fff}.donation-img-bg[data-v-6e39933c]{background:#faebd7}.nav .tag[data-v-6e39933c]{height:%?60?%;line-height:%?60?%}', ""])
    },
    "8a1e": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "content"
            }, [n("v-uni-image", {
                attrs: {
                    src: "/static/images/dev.gif",
                    mode: "aspectFill"
                }
            }), n("v-uni-text", {
                staticClass: "hint"
            }, [e._v("全速开发中...")])], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "8c38": function(e, t, n) {
        "use strict";
        var i = n("d92b")
          , o = n.n(i);
        o.a
    },
    "8d80": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1086")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    "8ebd": function(e, t, n) {
        "use strict";
        var i = n("5d8b")
          , o = n.n(i);
        o.a
    },
    "8f14": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "tools"
            }, [e.resAdList && e.resAdList.length > 0 ? n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-bar bg-white solid-bottom margin-top"
            }, [n("v-uni-view", {
                staticClass: "action"
            }, [n("v-uni-text", {
                staticClass: "cuIcon-title text-orange "
            }), e._v("公告板")], 1)], 1), n("v-uni-view", {
                staticClass: "cu-list menu"
            }, e._l(e.resAdList, function(t, i) {
                return t.show ? n("v-uni-view", {
                    key: i,
                    staticClass: "cu-item arrow",
                    on: {
                        click: function(n) {
                            n = e.$handleEvent(n),
                            e.selectAD(t)
                        }
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-text", {
                    staticClass: "cuIcon-circlefill text-grey"
                }), n("v-uni-text", {
                    staticClass: "text-grey"
                }, [e._v(e._s(t.title))])], 1)], 1) : e._e()
            }), 1)], 1) : e._e(), n("v-uni-view", {
                staticClass: "cu-bar bg-white solid-bottom margin-top"
            }, [n("v-uni-view", {
                staticClass: "action"
            }, [n("v-uni-text", {
                staticClass: "cuIcon-title text-orange "
            }), e._v("小米手环7")], 1)], 1), n("v-uni-view", {
                staticClass: "cu-list menu-avatar"
            }, [n("v-uni-view", {
                staticClass: "cu-item",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToUploadBin()
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cu-avatar round lg",
                staticStyle: {
                    height: "100upx",
                    width: "100upx",
                    overflow: "hidden"
                }
            }, [n("v-uni-image", {
                staticStyle: {
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    src: "static/mi7app/wf_upload.png"
                }
            })], 1), n("v-uni-view", {
                staticClass: "content"
            }, [n("v-uni-view", {
                staticClass: "text-grey"
            }, [e._v("表盘/小程序上传")]), n("v-uni-view", {
                staticClass: "text-gray text-sm flex"
            }, [n("v-uni-view", {
                staticClass: "text-cut"
            }, [e._v("上传并分享您觉得好的表盘/小程序")])], 1)], 1), n("v-uni-view", {
                staticClass: "action"
            })], 1)], 1), n("v-uni-view", {
                staticClass: "cu-list menu-avatar"
            }, [n("v-uni-view", {
                staticClass: "cu-item",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.goToWfMake()
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cu-avatar round lg",
                staticStyle: {
                    height: "100upx",
                    width: "100upx",
                    overflow: "hidden"
                }
            }, [n("v-uni-image", {
                staticStyle: {
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    src: "static/mi7app/wf_edit.png"
                }
            })], 1), n("v-uni-view", {
                staticClass: "content"
            }, [n("v-uni-view", {
                staticClass: "text-grey"
            }, [e._v("自定义表盘制作")]), n("v-uni-view", {
                staticClass: "text-gray text-sm flex"
            }, [n("v-uni-view", {
                staticClass: "text-cut"
            }, [e._v("在手机上制作专属表盘")])], 1)], 1), n("v-uni-view", {
                staticClass: "action"
            })], 1)], 1)], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    9041: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3f8f")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    "92d3": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            data: function() {
                return {}
            }
        };
        t.default = i
    },
    "966f": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            components: {},
            data: function() {
                return {
                    path: "",
                    modalName: "",
                    resAdList: []
                }
            },
            onLoad: function() {
                var e = this;
                this.$http.ajax({
                    path: "config/json/ad_res_mi7",
                    type: "get"
                }).then(function(t) {
                    e.resAdList = t
                })
            },
            methods: {
                openUrl: function(e) {
                    window.location.href = e
                },
                comingSoon: function() {
                    uni.showToast({
                        title: this.i18n.about.comingsoon,
                        icon: "none"
                    })
                },
                openPage: function(e) {
                    if ("mi4_resdiy" == e || "mi5_resdiy" == e) {
                        var t = uni.getStorageSync("openid");
                        if (!t || void 0 == t.length)
                            return void uni.showToast({
                                title: "请先登录",
                                icon: "none"
                            });
                        var n = "mi4";
                        "mi5_resdiy" == e && (n = "mi5"),
                        uni.setStorageSync("select_device_type", n),
                        uni.navigateTo({
                            url: "/pages/res/resdiy"
                        })
                    } else
                        uni.navigateTo({
                            url: "/pages/res/resList?type=res&device=" + e
                        })
                },
                openFont: function(e) {
                    uni.navigateTo({
                        url: "/pages/res/resList?type=font&device=" + e
                    })
                },
                hideModal: function() {
                    this.modalName = ""
                },
                selectAD: function(e) {
                    uni.setStorageSync("AD_INFO", e),
                    uni.navigateTo({
                        url: "/pages/about/adDetail"
                    })
                },
                goToUploadBin: function() {
                    this.isLoginFun() ? uni.navigateTo({
                        url: "../about/uploadBin/uploadBin"
                    }) : uni.showToast({
                        icon: "none",
                        title: "请先登录"
                    })
                },
                goToWfMake: function() {
                    if (this.isLoginFun()) {
                        var e = !1;
                        this.isDonateFun() && (e = !0);
                        var t = plus.android.runtimeMainActivity()
                          , n = plus.android.importClass("android.content.Intent")
                          , i = plus.android.importClass("com.givemefive.ble.design.DesignActivity")
                          , o = new n(t,i.class);
                        o.putExtra("limitMac", this.isLoginFun()),
                        o.putExtra("baseUrl", this.baseUrl),
                        o.putExtra("donate", e),
                        t.startActivity(o)
                    } else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                }
            }
        };
        t.default = i
    },
    "96f3": function(e, t, n) {
        var i = n("6a6a");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("445e3702", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9b16": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "9c21": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view")
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    "9de9": function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "bbs"
            }, [n("v-uni-web-view", {
                attrs: {
                    src: "https://www.bandbbs.cn/"
                }
            })], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    a4dc: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("f499"))
          , a = {
            data: function() {
                return {
                    userInfo: {},
                    openid: null,
                    loginDialog: "",
                    registerDialog: "",
                    registerUUID: "",
                    registerName: "",
                    registerPassword: "",
                    watchface_count: "n",
                    refreshDonate: !1,
                    isDonateFlag: !1,
                    mac: ""
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                },
                isDonate: function() {
                    return this.isDonateFun()
                }
            },
            mounted: function() {
                var e = this;
                uni.getStorage({
                    key: "login",
                    success: function(t) {
                        e.userInfo = t.data
                    },
                    fail: function() {
                        e.userInfo = {}
                    }
                }),
                uni.getStorage({
                    key: "openid",
                    success: function(t) {
                        e.openid = t.data
                    },
                    fail: function() {
                        e.openid = null
                    }
                }),
                this.isDonateFlag = this.isDonateFun(),
                this.getTotalWatchface()
            },
            methods: {
                QQlogin: function() {
                    uni.showModal({
                        title: this.i18n.about.hint_1,
                        content: this.i18n.about.hint_2
                    })
                },
                MitanLogin: function() {
                    this.hideLoginDialog(),
                    this.registerDialog = "show"
                },
                openLoginDialog: function() {
                    try {
                        var e = uni.getStorageSync("login");
                        if (e)
                            return;
                        this.loginDialog = "show"
                    } catch (t) {
                        this.loginDialog = "show"
                    }
                },
                hideLoginDialog: function() {
                    this.loginDialog = ""
                },
                UUIDlogin: function() {
                    this.hideLoginDialog(),
                    this.registerUUID = this.$fileHelper.getUUID2(),
                    this.registerDialog = "show"
                },
                hideRegisterDialog: function() {
                    this.registerDialog = ""
                },
                confirmRegister: function() {
                    var e = this;
                    return "" == this.registerName ? (e.hideRegisterDialog(),
                    void uni.showModal({
                        title: "登录失败",
                        content: "请输入米坛账号"
                    })) : "" == this.registerPassword ? (e.hideRegisterDialog(),
                    void uni.showModal({
                        title: "登录失败",
                        content: "请输入密码"
                    })) : (e.hideRegisterDialog(),
                    void e.$http.ajax({
                        path: "watchface/my/loginMitan",
                        type: "post",
                        data: {
                            name: this.registerName,
                            password: this.registerPassword
                        }
                    }).then(function(t) {
                        console.log((0,
                        o.default)(t)),
                        t.nickName = t.nickname,
                        t.openid = t.openid,
                        uni.setStorage({
                            key: "openid",
                            data: t.openid
                        }),
                        uni.setStorage({
                            key: "limitMac",
                            data: t.limitMac
                        }),
                        e.userInfo = t,
                        uni.setStorage({
                            key: "login",
                            data: t
                        }),
                        e.getDonationInfo(),
                        e.hideRegisterDialog(),
                        uni.hideLoading()
                    }).catch(function(t) {
                        e.hideRegisterDialog(),
                        uni.showToast({
                            title: "登录失败",
                            icon: "none"
                        })
                    }))
                },
                getTotalWatchface: function() {
                    var e = this;
                    this.$http.ajax({
                        path: "watchface/total/genrated",
                        type: "post"
                    }).then(function(t) {
                        e.watchface_count = t
                    }).catch(function(t) {
                        e.watchface_count = "n"
                    })
                },
                goToKuAn: function() {
                    this.openUrl("https://www.coolapk.com/apk/tech.pingx.watchface")
                },
                goToUpdateHistory: function() {
                    uni.navigateTo({
                        url: "/pages/about/updateHistory/updateHistory"
                    })
                },
                goToDecalaration: function() {
                    uni.navigateTo({
                        url: "/pages/about/declaration/declaration"
                    })
                },
                goToHelp: function() {
                    uni.navigateTo({
                        url: "/pages/about/help/help"
                    })
                },
                myBin: function() {
                    null != this.openid ? uni.navigateTo({
                        url: "/pages/about/myBin/myBin"
                    }) : uni.showToast({
                        icon: "none",
                        title: this.i18n.about.loginFirst
                    })
                },
                changeSkin: function() {
                    uni.navigateTo({
                        url: "/pages/about/skin-change/skin-change"
                    })
                },
                comingSoon: function() {
                    uni.showToast({
                        title: this.i18n.about.comingsoon,
                        icon: "none"
                    })
                },
                goToWebView: function() {
                    this.openUrl("https://www.kindyear.cn/archives/319")
                },
                goToMitan: function() {
                    this.openUrl("https://www.bandbbs.cn/")
                },
                goToUpdate: function() {
                    uni.navigateTo({
                        url: "../update/index"
                    })
                },
                goToFeedback: function() {
                    this.openUrl("https://www.bandbbs.cn/index.php?forums/%E7%B1%B3%E7%8E%AF4%E8%A1%A8%E7%9B%98%E7%94%9F%E6%88%90%E5%99%A8.35/")
                },
                goToBlog: function() {
                    this.openUrl("https://pingxonline.com/")
                },
                goToLuntan: function() {
                    this.openUrl("https://www.bandbbs.cn/index.php")
                },
                goToWebTool: function() {
                    this.openUrl("http://watchface.pingx.tech")
                },
                goToAboutUs: function() {
                    uni.navigateTo({
                        url: "/pages/about/about"
                    })
                },
                openUrl: function(e) {
                    window.location.href = e
                },
                openInnerUrl: function(e) {},
                downloadHistory: function() {
                    uni.navigateTo({
                        url: "/pages/about/downloadHistory/downloadHistory"
                    })
                },
                goToSetting: function() {
                    uni.navigateTo({
                        url: "/pages/about/setting/setting"
                    })
                },
                goToBluetooth: function() {
                    this.isDonateFun() ? uni.navigateTo({
                        url: "/pages/Bluetooth/Bluetooth"
                    }) : this.donationProtect()
                },
                donate: function() {
                    uni.navigateTo({
                        url: "/pages/about/donate/donate"
                    })
                },
                installed: function() {
                    this.isDonateFun() ? uni.navigateTo({
                        url: "/pages/about/installed/installed"
                    }) : this.donationProtect()
                },
                donationProtect: function() {
                    uni.showModal({
                        title: this.i18n.donation.donationFirst_hint,
                        content: this.i18n.donation.donationFirst,
                        confirmText: this.i18n.donation.donationFirst_confirm,
                        cancelText: this.i18n.donation.donationFirst_cancel,
                        success: function(e) {
                            e.confirm ? uni.navigateTo({
                                url: "../about/donate/donate"
                            }) : e.cancel
                        }
                    })
                },
                tryDonationFeature: function() {
                    var e = uni.getStorageSync("donation");
                    if (e) {
                        if ("1" == e)
                            return void uni.showToast({
                                icon: "none",
                                title: this.i18n.donation.try_hint_1
                            });
                        if ("2" == e)
                            return void uni.showToast({
                                icon: "none",
                                title: this.i18n.donation.try_hint_2
                            });
                        if ("3" == e)
                            return void uni.showToast({
                                icon: "none",
                                title: this.i18n.donation.try_hint_3
                            })
                    }
                    var t = this;
                    uni.showModal({
                        title: this.i18n.donation.try_feature,
                        content: this.i18n.donation.try_feature_hint,
                        confirmText: this.i18n.donation.try_confirm,
                        cancelText: this.i18n.donation.try_cancel,
                        success: function(e) {
                            e.confirm ? t.$http.ajax({
                                path: "member/donation/try",
                                type: "post",
                                data: t.submit
                            }).then(function(e) {
                                "0" != e && 0 != e || (uni.setStorageSync("donation", "2"),
                                uni.showToast({
                                    title: t.i18n.donation.try_success
                                }))
                            }) : e.cancel
                        }
                    })
                },
                goToFavourite: function() {
                    null != this.openid ? uni.navigateTo({
                        url: "/pages/about/favourite/favourite"
                    }) : uni.showToast({
                        icon: "none",
                        title: this.i18n.about.loginFirst
                    })
                },
                clearBleDevice: function() {
                    uni.setStorageSync("CONNECT_DEVICE", null),
                    uni.showToast({
                        title: "清除成功",
                        duration: 2e3,
                        icon: "none"
                    })
                },
                goToTags: function() {
                    uni.navigateTo({
                        url: "/pages/tags/list/list"
                    })
                },
                onGotUserInfo: function(e) {},
                getDonationInfo: function() {
                    var e = this
                      , t = uni.getStorageSync("openid");
                    uni.getStorageSync("donation");
                    t && void 0 != t.length ? (this.refreshDonate = !0,
                    this.$http.ajax({
                        path: "member/is/donation",
                        type: "get"
                    }).then(function(t) {
                        uni.setStorageSync("donation", t),
                        e.refreshDonate = !1,
                        e.isDonateFlag = e.isDonateFun()
                    })) : uni.setStorage({
                        key: "donation",
                        data: null
                    })
                }
            }
        };
        t.default = a
    },
    a67d: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6444")
          , o = n("ce47");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("bc5a");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "6e39933c", null);
        t["default"] = s.exports
    },
    a68f: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view")
        }
          , o = []
          , a = n("2877")
          , r = {}
          , s = Object(a["a"])(r, i, o, !1, null, null, null);
        t["default"] = s.exports
    },
    a885: function(e, t, n) {
        "use strict";
        var i = n("96f3")
          , o = n.n(i);
        o.a
    },
    acc3: function(e, t, n) {
        "use strict";
        var i = n("3716")
          , o = n.n(i);
        o.a
    },
    b131: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e037")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    b387: function(e, t, n) {
        "use strict";
        var i = n("8873")
          , o = n.n(i);
        o.a
    },
    bb64: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("8f14")
          , o = n("3347");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("b387");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "d60740be", null);
        t["default"] = s.exports
    },
    bc5a: function(e, t, n) {
        "use strict";
        var i = n("2523")
          , o = n.n(i);
        o.a
    },
    be70: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6104")
          , o = n("b131");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "13a02bb9", null);
        t["default"] = s.exports
    },
    be97: function(e, t, n) {
        var i = n("cdcc");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("3a21f2b5", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c1eb: function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, '.cmd-progress[data-v-1332e932]{font-family:Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:%?28?%;font-variant:tabular-nums;line-height:1.5;color:rgba(0,0,0,.65);-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-block}.cmd-progress-line[data-v-1332e932]{width:100%;font-size:%?28?%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cmd-progress-outer[data-v-1332e932]{display:inline-block;width:100%;margin-right:0;padding-right:0}.cmd-progress-show-info .cmd-progress-outer[data-v-1332e932]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.cmd-progress-inner[data-v-1332e932]{display:inline-block;width:100%;background-color:#f5f5f5;border-radius:%?200?%;vertical-align:middle;position:relative}.cmd-progress-circle-trail[data-v-1332e932]{stroke:#f5f5f5}.cmd-progress-circle-path[data-v-1332e932]{stroke:#1890ff;-webkit-animation:appear .3s;animation:appear .3s}.cmd-progress-bg[data-v-1332e932],.cmd-progress-success-bg[data-v-1332e932]{background-color:#1890ff;-webkit-transition:all .4s cubic-bezier(.08,.82,.17,1) 0s;-o-transition:all .4s cubic-bezier(.08,.82,.17,1) 0s;transition:all .4s cubic-bezier(.08,.82,.17,1) 0s;position:relative}.cmd-progress-success-bg[data-v-1332e932]{background-color:#52c41a;position:absolute;top:0;left:0}.cmd-progress-custom[data-v-1332e932]{max-width:50%;margin-left:%?16?%;vertical-align:middle;display:inline-block;white-space:normal;word-wrap:break-word;word-break:break-all;line-height:1}.cmd-progress-text[data-v-1332e932]{min-width:%?60?%;text-align:left;margin-left:%?16?%;vertical-align:middle;display:inline-block;white-space:normal;color:rgba(0,0,0,.45);line-height:1}.cmd-progress-status-active .cmd-progress-bg[data-v-1332e932]:before{content:"";opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;border-radius:%?20?%;-webkit-animation:cmd-progress-active-data-v-1332e932 2.4s cubic-bezier(.23,1,.32,1) infinite;animation:cmd-progress-active-data-v-1332e932 2.4s cubic-bezier(.23,1,.32,1) infinite}.cmd-progress-status-exception .cmd-progress-bg[data-v-1332e932]{background-color:#f5222d}.cmd-progress-status-exception .cmd-progress-text[data-v-1332e932]{color:#f5222d}.cmd-progress-status-exception .cmd-progress-circle-path[data-v-1332e932]{stroke:#f5222d}.cmd-progress-status-success .cmd-progress-bg[data-v-1332e932]{background-color:#52c41a}.cmd-progress-status-success .cmd-progress-text[data-v-1332e932]{color:#52c41a}.cmd-progress-status-success .cmd-progress-circle-path[data-v-1332e932]{stroke:#52c41a}.cmd-progress-circle .cmd-progress-inner[data-v-1332e932]{position:relative;line-height:1;background-color:rgba(0,0,0,0)}.cmd-progress-circle .cmd-progress-custom[data-v-1332e932]{display:block;position:absolute;line-height:1;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:25%;right:25%;margin:0;overflow:hidden;white-space:normal;word-wrap:break-word;word-break:break-all}.cmd-progress-circle .cmd-progress-text[data-v-1332e932]{display:block;position:absolute;width:100%;text-align:center;line-height:1;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;margin:0;color:rgba(0,0,0,.65);white-space:normal}.cmd-progress-circle .cmd-progress-status-exception .cmd-progress-text[data-v-1332e932]{color:#f5222d}.cmd-progress-circle .cmd-progress-status-success .cmd-progress-text[data-v-1332e932]{color:#52c41a}@-webkit-keyframes cmd-progress-active-data-v-1332e932{0%{opacity:.1;width:0}20%{opacity:.5;width:0}to{opacity:0;width:100%}}@keyframes cmd-progress-active-data-v-1332e932{0%{opacity:.1;width:0}20%{opacity:.5;width:0}to{opacity:0;width:100%}}', ""])
    },
    c7a5: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        i(n("1e19"));
        var o = {
            encrypt: function(e) {
                return window.btoa(e)
            },
            decrypt: function(e) {
                return window.atob(e)
            }
        }
          , a = o;
        t.default = a
    },
    c988: function(e, t, n) {
        "use strict";
        var i, o, a = n("288e"), r = a(n("795b"));
        n("63d9"),
        n("6c7b"),
        n("4917");
        var s = a(n("268f"));
        n("7f7f"),
        n("55dd"),
        n("ac6a"),
        n("6b54"),
        n("87b3"),
        function(a, r, s) {
            "undefined" != typeof window && n("3c35") ? (i = s,
            o = "function" === typeof i ? i.call(t, n, t, e) : i,
            void 0 === o || (e.exports = o)) : e.exports ? e.exports = s() : r.exports ? r.exports = s() : r.Fingerprint2 = s()
        }(0, void 0, function() {
            var e = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3],
                n[2] += n[3] >>> 16,
                n[3] &= 65535,
                n[2] += e[2] + t[2],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[1] += e[1] + t[1],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[0] += e[0] + t[0],
                n[0] &= 65535,
                [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }
              , t = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3],
                n[2] += n[3] >>> 16,
                n[3] &= 65535,
                n[2] += e[2] * t[3],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[2] += e[3] * t[2],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[1] += e[1] * t[3],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[1] += e[2] * t[2],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[1] += e[3] * t[1],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
                n[0] &= 65535,
                [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }
              , n = function(e, t) {
                return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
                [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }
              , i = function(e, t) {
                return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }
              , o = function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }
              , a = function(e) {
                return e = o(e, [0, e[0] >>> 1]),
                e = t(e, [4283543511, 3981806797]),
                e = o(e, [0, e[0] >>> 1]),
                e = t(e, [3301882366, 444984403]),
                o(e, [0, e[0] >>> 1])
            }
              , c = function(r, s) {
                s = s || 0;
                for (var c = (r = r || "").length % 16, l = r.length - c, u = [0, s], d = [0, s], f = [0, 0], g = [0, 0], h = [2277735313, 289559509], p = [1291169091, 658871167], b = 0; b < l; b += 16)
                    f = [255 & r.charCodeAt(b + 4) | (255 & r.charCodeAt(b + 5)) << 8 | (255 & r.charCodeAt(b + 6)) << 16 | (255 & r.charCodeAt(b + 7)) << 24, 255 & r.charCodeAt(b) | (255 & r.charCodeAt(b + 1)) << 8 | (255 & r.charCodeAt(b + 2)) << 16 | (255 & r.charCodeAt(b + 3)) << 24],
                    g = [255 & r.charCodeAt(b + 12) | (255 & r.charCodeAt(b + 13)) << 8 | (255 & r.charCodeAt(b + 14)) << 16 | (255 & r.charCodeAt(b + 15)) << 24, 255 & r.charCodeAt(b + 8) | (255 & r.charCodeAt(b + 9)) << 8 | (255 & r.charCodeAt(b + 10)) << 16 | (255 & r.charCodeAt(b + 11)) << 24],
                    f = t(f, h),
                    f = n(f, 31),
                    f = t(f, p),
                    u = o(u, f),
                    u = n(u, 27),
                    u = e(u, d),
                    u = e(t(u, [0, 5]), [0, 1390208809]),
                    g = t(g, p),
                    g = n(g, 33),
                    g = t(g, h),
                    d = o(d, g),
                    d = n(d, 31),
                    d = e(d, u),
                    d = e(t(d, [0, 5]), [0, 944331445]);
                switch (f = [0, 0],
                g = [0, 0],
                c) {
                case 15:
                    g = o(g, i([0, r.charCodeAt(b + 14)], 48));
                case 14:
                    g = o(g, i([0, r.charCodeAt(b + 13)], 40));
                case 13:
                    g = o(g, i([0, r.charCodeAt(b + 12)], 32));
                case 12:
                    g = o(g, i([0, r.charCodeAt(b + 11)], 24));
                case 11:
                    g = o(g, i([0, r.charCodeAt(b + 10)], 16));
                case 10:
                    g = o(g, i([0, r.charCodeAt(b + 9)], 8));
                case 9:
                    g = o(g, [0, r.charCodeAt(b + 8)]),
                    g = t(g, p),
                    g = n(g, 33),
                    g = t(g, h),
                    d = o(d, g);
                case 8:
                    f = o(f, i([0, r.charCodeAt(b + 7)], 56));
                case 7:
                    f = o(f, i([0, r.charCodeAt(b + 6)], 48));
                case 6:
                    f = o(f, i([0, r.charCodeAt(b + 5)], 40));
                case 5:
                    f = o(f, i([0, r.charCodeAt(b + 4)], 32));
                case 4:
                    f = o(f, i([0, r.charCodeAt(b + 3)], 24));
                case 3:
                    f = o(f, i([0, r.charCodeAt(b + 2)], 16));
                case 2:
                    f = o(f, i([0, r.charCodeAt(b + 1)], 8));
                case 1:
                    f = o(f, [0, r.charCodeAt(b)]),
                    f = t(f, h),
                    f = n(f, 31),
                    f = t(f, p),
                    u = o(u, f)
                }
                return u = o(u, [0, r.length]),
                d = o(d, [0, r.length]),
                u = e(u, d),
                d = e(d, u),
                u = a(u),
                d = a(d),
                u = e(u, d),
                d = e(d, u),
                ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
            }
              , l = {
                preprocessor: null,
                audio: {
                    timeout: 1e3,
                    excludeIOS11: !0
                },
                fonts: {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    userDefinedFonts: [],
                    extendedJsFonts: !1
                },
                screen: {
                    detectScreenOrientation: !0
                },
                plugins: {
                    sortPluginsFor: [/palemoon/i],
                    excludeIE: !1
                },
                extraComponents: [],
                excludes: {
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0
                },
                NOT_AVAILABLE: "not available",
                ERROR: "error",
                EXCLUDED: "excluded"
            }
              , u = function(e, t) {
                if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
                    e.forEach(t);
                else if (e.length === +e.length)
                    for (var n = 0, i = e.length; n < i; n++)
                        t(e[n], n, e);
                else
                    for (var o in e)
                        e.hasOwnProperty(o) && t(e[o], o, e)
            }
              , d = function(e, t) {
                var n = [];
                return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (u(e, function(e, i, o) {
                    n.push(t(e, i, o))
                }),
                n)
            }
              , f = function() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
            }
              , g = function(e) {
                var t = [window.screen.width, window.screen.height];
                return e.screen.detectScreenOrientation && t.sort().reverse(),
                t
            }
              , h = function(e) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var t = [window.screen.availHeight, window.screen.availWidth];
                    return e.screen.detectScreenOrientation && t.sort().reverse(),
                    t
                }
                return e.NOT_AVAILABLE
            }
              , p = function(e) {
                if (null == navigator.plugins)
                    return e.NOT_AVAILABLE;
                for (var t = [], n = 0, i = navigator.plugins.length; n < i; n++)
                    navigator.plugins[n] && t.push(navigator.plugins[n]);
                return m(e) && (t = t.sort(function(e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                })),
                d(t, function(e) {
                    var t = d(e, function(e) {
                        return [e.type, e.suffixes]
                    });
                    return [e.name, e.description, t]
                })
            }
              , b = function(e) {
                var t = [];
                return s.default && (0,
                s.default)(window, "ActiveXObject") || "ActiveXObject"in window ? t = d(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(t) {
                    try {
                        return new window.ActiveXObject(t),
                        t
                    } catch (t) {
                        return e.ERROR
                    }
                }) : t.push(e.NOT_AVAILABLE),
                navigator.plugins && (t = t.concat(p(e))),
                t
            }
              , m = function(e) {
                for (var t = !1, n = 0, i = e.plugins.sortPluginsFor.length; n < i; n++) {
                    var o = e.plugins.sortPluginsFor[n];
                    if (navigator.userAgent.match(o)) {
                        t = !0;
                        break
                    }
                }
                return t
            }
              , w = function(e) {
                try {
                    return !!window.sessionStorage
                } catch (l) {
                    return e.ERROR
                }
            }
              , v = function(e) {
                try {
                    return !!window.localStorage
                } catch (l) {
                    return e.ERROR
                }
            }
              , y = function(e) {
                try {
                    return !!window.indexedDB
                } catch (l) {
                    return e.ERROR
                }
            }
              , x = function(e) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
            }
              , k = function(e) {
                return navigator.cpuClass || e.NOT_AVAILABLE
            }
              , C = function(e) {
                return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
            }
              , A = function(e) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
            }
              , E = function() {
                var e, t = 0;
                void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    e = !0
                } catch (t) {
                    e = !1
                }
                return [t, e, "ontouchstart"in window]
            }
              , _ = function(e) {
                var t = []
                  , n = document.createElement("canvas");
                n.width = 2e3,
                n.height = 200,
                n.style.display = "inline";
                var i = n.getContext("2d");
                return i.rect(0, 0, 10, 10),
                i.rect(2, 2, 6, 6),
                t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
                i.textBaseline = "alphabetic",
                i.fillStyle = "#f60",
                i.fillRect(125, 1, 62, 20),
                i.fillStyle = "#069",
                e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
                i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                i.fillStyle = "rgba(102, 204, 0, 0.2)",
                i.font = "18pt Arial",
                i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                i.globalCompositeOperation = "multiply",
                i.fillStyle = "rgb(255,0,255)",
                i.beginPath(),
                i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                i.closePath(),
                i.fill(),
                i.fillStyle = "rgb(0,255,255)",
                i.beginPath(),
                i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                i.closePath(),
                i.fill(),
                i.fillStyle = "rgb(255,255,0)",
                i.beginPath(),
                i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                i.closePath(),
                i.fill(),
                i.fillStyle = "rgb(255,0,255)",
                i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                i.fill("evenodd"),
                n.toDataURL && t.push("canvas fp:" + n.toDataURL()),
                t
            }
              , B = function() {
                var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1),
                    e.enable(e.DEPTH_TEST),
                    e.depthFunc(e.LEQUAL),
                    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                    "[" + t[0] + ", " + t[1] + "]"
                };
                if (!(e = N()))
                    return null;
                var n = []
                  , i = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, i);
                var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW),
                i.itemSize = 3,
                i.numItems = 3;
                var a = e.createProgram()
                  , r = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
                e.compileShader(r);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
                e.compileShader(s),
                e.attachShader(a, r),
                e.attachShader(a, s),
                e.linkProgram(a),
                e.useProgram(a),
                a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"),
                a.offsetUniform = e.getUniformLocation(a, "uniformOffset"),
                e.enableVertexAttribArray(a.vertexPosArray),
                e.vertexAttribPointer(a.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0),
                e.uniform2f(a.offsetUniform, 1, 1),
                e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
                try {
                    n.push(e.canvas.toDataURL())
                } catch (t) {}
                n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")),
                n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
                n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
                n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
                n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                n.push("webgl max anisotropy:" + function(e) {
                    var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (t) {
                        var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === n && (n = 2),
                        n
                    }
                    return null
                }(e)),
                n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
                n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
                n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
                n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
                n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
                n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
                n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
                n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
                n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
                n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
                n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
                n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
                n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                n.push("webgl version:" + e.getParameter(e.VERSION));
                try {
                    var c = e.getExtension("WEBGL_debug_renderer_info");
                    c && (n.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)),
                    n.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                } catch (t) {}
                return e.getShaderPrecisionFormat && u(["FLOAT", "INT"], function(t) {
                    u(["VERTEX", "FRAGMENT"], function(i) {
                        u(["HIGH", "MEDIUM", "LOW"], function(o) {
                            u(["precision", "rangeMin", "rangeMax"], function(a) {
                                var r = e.getShaderPrecisionFormat(e[i + "_SHADER"], e[o + "_" + t])[a];
                                "precision" !== a && (a = "precision " + a);
                                var s = ["webgl ", i.toLowerCase(), " shader ", o.toLowerCase(), " ", t.toLowerCase(), " ", a, ":", r].join("");
                                n.push(s)
                            })
                        })
                    })
                }),
                n
            }
              , D = function() {
                try {
                    var e = N()
                      , t = e.getExtension("WEBGL_debug_renderer_info");
                    return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                } catch (e) {
                    return null
                }
            }
              , I = function() {
                var e = document.createElement("div");
                e.innerHTML = "&nbsp;";
                var t = !(e.className = "adsbox");
                try {
                    document.body.appendChild(e),
                    t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                    document.body.removeChild(e)
                } catch (e) {
                    t = !1
                }
                return t
            }
              , S = function() {
                if (void 0 !== navigator.languages)
                    try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                            return !0
                    } catch (l) {
                        return !0
                    }
                return !1
            }
              , T = function() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
            }
              , F = function() {
                var e, t = navigator.userAgent.toLowerCase(), n = navigator.oscpu, i = navigator.platform.toLowerCase();
                if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other",
                ("ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                    return !0;
                if (void 0 !== n) {
                    if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e)
                        return !0;
                    if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e)
                        return !0;
                    if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                        return !0;
                    if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e))
                        return !0
                }
                return 0 <= i.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= i.indexOf("linux") || 0 <= i.indexOf("android") || 0 <= i.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= i.indexOf("mac") || 0 <= i.indexOf("ipad") || 0 <= i.indexOf("ipod") || 0 <= i.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (i.indexOf("win") < 0 && i.indexOf("linux") < 0 && i.indexOf("mac") < 0 && i.indexOf("iphone") < 0 && i.indexOf("ipad") < 0) !== ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
            }
              , P = function() {
                var e, t = navigator.userAgent.toLowerCase(), n = navigator.productSub;
                if (("Chrome" === (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n)
                    return !0;
                var i, o = eval.toString().length;
                if (37 === o && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                    return !0;
                if (39 === o && "Internet Explorer" !== e && "Other" !== e)
                    return !0;
                if (33 === o && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                    return !0;
                try {
                    throw "a"
                } catch (e) {
                    try {
                        e.toSource(),
                        i = !0
                    } catch (e) {
                        i = !1
                    }
                }
                return i && "Firefox" !== e && "Other" !== e
            }
              , M = function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            }
              , L = function() {
                if (!M())
                    return !1;
                var e = N();
                return !!window.WebGLRenderingContext && !!e
            }
              , z = function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            }
              , O = function() {
                return void 0 !== window.swfobject
            }
              , U = function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            }
              , R = function(e, t) {
                var n = "___fp_swf_loaded";
                window[n] = function(t) {
                    e(t)
                }
                ;
                var i, o, a = t.fonts.swfContainerId;
                (o = document.createElement("div")).setAttribute("id", i.fonts.swfContainerId),
                document.body.appendChild(o);
                var r = {
                    onReady: n
                };
                window.swfobject.embedSWF(t.fonts.swfPath, a, "1", "1", "9.0.0", !1, r, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            }
              , N = function() {
                var e = document.createElement("canvas")
                  , t = null;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (e) {}
                return t || (t = null),
                t
            }
              , j = [{
                key: "userAgent",
                getData: function(e) {
                    e(navigator.userAgent)
                }
            }, {
                key: "webdriver",
                getData: function(e, t) {
                    e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                }
            }, {
                key: "language",
                getData: function(e, t) {
                    e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                }
            }, {
                key: "colorDepth",
                getData: function(e, t) {
                    e(window.screen.colorDepth || t.NOT_AVAILABLE)
                }
            }, {
                key: "deviceMemory",
                getData: function(e, t) {
                    e(navigator.deviceMemory || t.NOT_AVAILABLE)
                }
            }, {
                key: "pixelRatio",
                getData: function(e, t) {
                    e(window.devicePixelRatio || t.NOT_AVAILABLE)
                }
            }, {
                key: "hardwareConcurrency",
                getData: function(e, t) {
                    e(x(t))
                }
            }, {
                key: "screenResolution",
                getData: function(e, t) {
                    e(g(t))
                }
            }, {
                key: "availableScreenResolution",
                getData: function(e, t) {
                    e(h(t))
                }
            }, {
                key: "timezoneOffset",
                getData: function(e) {
                    e((new Date).getTimezoneOffset())
                }
            }, {
                key: "timezone",
                getData: function(e, t) {
                    window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "sessionStorage",
                getData: function(e, t) {
                    e(w(t))
                }
            }, {
                key: "localStorage",
                getData: function(e, t) {
                    e(v(t))
                }
            }, {
                key: "indexedDb",
                getData: function(e, t) {
                    e(y(t))
                }
            }, {
                key: "addBehavior",
                getData: function(e) {
                    e(!(!document.body || !document.body.addBehavior))
                }
            }, {
                key: "openDatabase",
                getData: function(e) {
                    e(!!window.openDatabase)
                }
            }, {
                key: "cpuClass",
                getData: function(e, t) {
                    e(k(t))
                }
            }, {
                key: "platform",
                getData: function(e, t) {
                    e(C(t))
                }
            }, {
                key: "doNotTrack",
                getData: function(e, t) {
                    e(A(t))
                }
            }, {
                key: "plugins",
                getData: function(e, t) {
                    z() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(b(t)) : e(p(t))
                }
            }, {
                key: "canvas",
                getData: function(e, t) {
                    M() ? e(_(t)) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webgl",
                getData: function(e, t) {
                    L() ? e(B()) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webglVendorAndRenderer",
                getData: function(e) {
                    L() ? e(D()) : e()
                }
            }, {
                key: "adBlock",
                getData: function(e) {
                    e(I())
                }
            }, {
                key: "hasLiedLanguages",
                getData: function(e) {
                    e(S())
                }
            }, {
                key: "hasLiedResolution",
                getData: function(e) {
                    e(T())
                }
            }, {
                key: "hasLiedOs",
                getData: function(e) {
                    e(F())
                }
            }, {
                key: "hasLiedBrowser",
                getData: function(e) {
                    e(P())
                }
            }, {
                key: "touchSupport",
                getData: function(e) {
                    e(E())
                }
            }, {
                key: "fonts",
                getData: function(e, t) {
                    var n = ["monospace", "sans-serif", "serif"]
                      , i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    t.fonts.extendedJsFonts && (i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])),
                    i = (i = i.concat(t.fonts.userDefinedFonts)).filter(function(e, t) {
                        return i.indexOf(e) === t
                    });
                    var o = document.getElementsByTagName("body")[0]
                      , a = document.createElement("div")
                      , r = document.createElement("div")
                      , s = {}
                      , c = {}
                      , l = function() {
                        var e = document.createElement("span");
                        return e.style.position = "absolute",
                        e.style.left = "-9999px",
                        e.style.fontSize = "72px",
                        e.style.fontStyle = "normal",
                        e.style.fontWeight = "normal",
                        e.style.letterSpacing = "normal",
                        e.style.lineBreak = "auto",
                        e.style.lineHeight = "normal",
                        e.style.textTransform = "none",
                        e.style.textAlign = "left",
                        e.style.textDecoration = "none",
                        e.style.textShadow = "none",
                        e.style.whiteSpace = "normal",
                        e.style.wordBreak = "normal",
                        e.style.wordSpacing = "normal",
                        e.innerHTML = "mmmmmmmmmmlli",
                        e
                    }
                      , u = function(e) {
                        for (var t = !1, i = 0; i < n.length; i++)
                            if (t = e[i].offsetWidth !== s[n[i]] || e[i].offsetHeight !== c[n[i]])
                                return t;
                        return t
                    }
                      , d = function() {
                        for (var e = [], t = 0, i = n.length; t < i; t++) {
                            var o = l();
                            o.style.fontFamily = n[t],
                            a.appendChild(o),
                            e.push(o)
                        }
                        return e
                    }();
                    o.appendChild(a);
                    for (var f = 0, g = n.length; f < g; f++)
                        s[n[f]] = d[f].offsetWidth,
                        c[n[f]] = d[f].offsetHeight;
                    var h = function() {
                        for (var e, t, o, a = {}, s = 0, c = i.length; s < c; s++) {
                            for (var u = [], d = 0, f = n.length; d < f; d++) {
                                var g = (e = i[s],
                                t = n[d],
                                o = void 0,
                                (o = l()).style.fontFamily = "'" + e + "'," + t,
                                o);
                                r.appendChild(g),
                                u.push(g)
                            }
                            a[i[s]] = u
                        }
                        return a
                    }();
                    o.appendChild(r);
                    for (var p = [], b = 0, m = i.length; b < m; b++)
                        u(h[i[b]]) && p.push(i[b]);
                    o.removeChild(r),
                    o.removeChild(a),
                    e(p)
                },
                pauseBefore: !0
            }, {
                key: "fontsFlash",
                getData: function(e, t) {
                    return O() ? U() ? t.fonts.swfPath ? void R(function(t) {
                        e(t)
                    }, t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                },
                pauseBefore: !0
            }, {
                key: "audio",
                getData: function(e, t) {
                    var n = t.audio;
                    if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                        return e(t.EXCLUDED);
                    var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == i)
                        return e(t.NOT_AVAILABLE);
                    var o = new i(1,44100,44100)
                      , a = o.createOscillator();
                    a.type = "triangle",
                    a.frequency.setValueAtTime(1e4, o.currentTime);
                    var r = o.createDynamicsCompressor();
                    u([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function(e) {
                        void 0 !== r[e[0]] && "function" == typeof r[e[0]].setValueAtTime && r[e[0]].setValueAtTime(e[1], o.currentTime)
                    }),
                    a.connect(r),
                    r.connect(o.destination),
                    a.start(0),
                    o.startRendering();
                    var s = setTimeout(function() {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                        o.oncomplete = function() {}
                        ,
                        o = null,
                        e("audioTimeout")
                    }, n.timeout);
                    o.oncomplete = function(t) {
                        var n;
                        try {
                            clearTimeout(s),
                            n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                                return e + Math.abs(t)
                            }, 0).toString(),
                            a.disconnect(),
                            r.disconnect()
                        } catch (t) {
                            return void e(t)
                        }
                        e(n)
                    }
                }
            }, {
                key: "enumerateDevices",
                getData: function(e, t) {
                    if (!f())
                        return e(t.NOT_AVAILABLE);
                    navigator.mediaDevices.enumerateDevices().then(function(t) {
                        e(t.map(function(e) {
                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                        }))
                    }).catch(function(t) {
                        e(t)
                    })
                }
            }]
              , H = function(e) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
            };
            return H.get = function(e, t) {
                t ? e || (e = {}) : (t = e,
                e = {}),
                function(e, t) {
                    var n, i;
                    if (null != t)
                        for (i in t)
                            null == (n = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n)
                }(e, l),
                e.components = e.extraComponents.concat(j);
                var n = {
                    data: [],
                    addPreprocessedComponent: function(t, i) {
                        "function" == typeof e.preprocessor && (i = e.preprocessor(t, i)),
                        n.data.push({
                            key: t,
                            value: i
                        })
                    }
                }
                  , i = -1
                  , o = function o(a) {
                    if ((i += 1) >= e.components.length)
                        t(n.data);
                    else {
                        var r = e.components[i];
                        if (e.excludes[r.key])
                            o(!1);
                        else {
                            if (!a && r.pauseBefore)
                                return i -= 1,
                                void setTimeout(function() {
                                    o(!0)
                                }, 1);
                            try {
                                r.getData(function(e) {
                                    n.addPreprocessedComponent(r.key, e),
                                    o(!1)
                                }, e)
                            } catch (a) {
                                n.addPreprocessedComponent(r.key, String(a)),
                                o(!1)
                            }
                        }
                    }
                };
                o(!1)
            }
            ,
            H.getPromise = function(e) {
                return new r.default(function(t, n) {
                    H.get(e, t)
                }
                )
            }
            ,
            H.getV18 = function(e, t) {
                return null == t && (t = e,
                e = {}),
                H.get(e, function(n) {
                    for (var i = [], o = 0; o < n.length; o++) {
                        var a = n[o];
                        if (a.value === (e.NOT_AVAILABLE || "not available"))
                            i.push({
                                key: a.key,
                                value: "unknown"
                            });
                        else if ("plugins" === a.key)
                            i.push({
                                key: "plugins",
                                value: d(a.value, function(e) {
                                    var t = d(e[2], function(e) {
                                        return e.join ? e.join("~") : e
                                    }).join(",");
                                    return [e[0], e[1], t].join("::")
                                })
                            });
                        else if (-1 !== ["canvas", "webgl"].indexOf(a.key))
                            i.push({
                                key: a.key,
                                value: a.value.join("~")
                            });
                        else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(a.key)) {
                            if (!a.value)
                                continue;
                            i.push({
                                key: a.key,
                                value: 1
                            })
                        } else
                            a.value ? i.push(a.value.join ? {
                                key: a.key,
                                value: a.value.join(";")
                            } : a) : i.push({
                                key: a.key,
                                value: a.value
                            })
                    }
                    var r = c(d(i, function(e) {
                        return e.value
                    }).join("~~~"), 31);
                    t(r, i)
                })
            }
            ,
            H.x64hash128 = c,
            H.VERSION = "2.1.0",
            H
        })
    },
    ca8f: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1c02")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    cdcc: function(e, t, n) {
        t = e.exports = n("2350")(!1),
        t.push([e.i, ".tools[data-v-3ea7c220]{padding-top:50px;padding-bottom:60px}.cu-item[data-v-3ea7c220]{background:#fff;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eee}.cu-item .content[data-v-3ea7c220]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}", ""])
    },
    ce47: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("43d4")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    cee5: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            uni.request({
                url: n + "watchface/version/id",
                method: "GET",
                success: function(i) {
                    if (200 === i.statusCode && i.data) {
                        var o = i.data.data
                          , a = o.latest.id
                          , r = o.latest.method;
                        a ? e != a && "force" === r ? (console.log("确认强制更新，正在取得地址"),
                        uni.request({
                            url: n + "watchface/version/info",
                            method: "GET",
                            success: function(e) {
                                if (200 === e.statusCode) {
                                    console.log("地址请求成功");
                                    var t = e.data.data
                                      , n = t.latest.info.iosLink
                                      , i = t.latest.info.androidLink
                                      , o = ""
                                      , a = !1;
                                    if ("android" === plus.os.name.toLowerCase() ? (console.log("安卓系统"),
                                    i && "#" !== i ? (console.log("发现下载地址"),
                                    i.match(RegExp(/.wgt/)) ? (console.log("确认wgt热更新包"),
                                    o = i,
                                    a = !0) : console.log("安卓推荐.wgt强制更新，.apk的强制更新请您自行修改程序")) : console.log("下载地址是空的，无法继续")) : (console.log("苹果系统"),
                                    n && "#" !== n ? (console.log("发现下载地址"),
                                    n.match(RegExp(/.wgt/)) ? (console.log("确认wgt热更新包"),
                                    o = n,
                                    a = !0) : console.log("苹果只支持.wgt强制更新")) : console.log("下载地址是空的，无法继续")),
                                    a) {
                                        console.log("任务开始");
                                        var r = uni.downloadFile({
                                            url: o,
                                            success: function(e) {
                                                200 === e.statusCode && (console.log("保存安装包"),
                                                uni.saveFile({
                                                    tempFilePath: e.tempFilePath,
                                                    success: function(e) {
                                                        var t = e.savedFilePath;
                                                        uni.setStorage({
                                                            key: "updated",
                                                            data: {
                                                                completed: !1,
                                                                packgePath: t
                                                            },
                                                            success: function() {
                                                                console.log("成功保存记录")
                                                            }
                                                        }),
                                                        console.log("任务完成，关闭下载任务，下一次启动应用时将安装更新"),
                                                        r.abort(),
                                                        r = null
                                                    }
                                                }))
                                            }
                                        })
                                    } else
                                        console.log("下载地址未准备，无法开启下载任务")
                                }
                            }
                        })) : e < a ? (console.log("检测到更新"),
                        uni.showModal({
                            title: "发现新版本",
                            content: "有新版本可用 (版本id:" + a + ")，请问您是否更新？",
                            success: function(e) {
                                e.confirm ? uni.navigateTo({
                                    url: t
                                }) : e.cancel && console.log("取消")
                            }
                        })) : console.log("现在是最新版本") : console.log("当前没有发行版本")
                    }
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.checkUpdater = i,
        n("3b2b"),
        n("4917"),
        n("7f7f")
    },
    d1f9: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e0ad")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    d8af: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("7f7f"),
        n("96cf");
        var o = i(n("3b8d"));
        n("6b54"),
        n("87b3");
        var a = i(n("e814"));
        n("34ef");
        var r = {
            deviceName: "",
            deviceId: "",
            installCb1: "",
            installCb2: "",
            setProcessCb: "",
            BLUE_OBJ: {
                characteristic1: "",
                characteristic2: "",
                byteArray: [],
                process: 0,
                crcArray: [],
                dataMap: {},
                sizeArray: [],
                fastFlag: !0
            },
            downLoadFile: function(e) {
                var t = this
                  , n = new XMLHttpRequest;
                n.open("GET", e, !0),
                n.responseType = "arraybuffer",
                n.onload = function(e) {
                    var i = n.response
                      , o = new Uint8Array(i);
                    t.initByteArray(o)
                }
                ,
                n.send()
            },
            initByteArray: function(e, t) {
                this.fastFlag = e,
                this.BLUE_OBJ.byteArray = t,
                this.process = 0,
                this.setProcess(0),
                this.BLUE_OBJ.crcArray = this.getCrc(this.BLUE_OBJ.byteArray);
                var n = this.BLUE_OBJ.byteArray.length;
                this.BLUE_OBJ.sizeArray = [n >> 0 & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255],
                this.BLUE_OBJ.dataMap = this.splitFileData()
            },
            splitFileData: function() {
                var e = 20;
                this.fastFlag && (e = 244);
                for (var t = 8192, n = this.BLUE_OBJ.byteArray, i = {}, o = (0,
                a.default)(n.length / t) + 1, r = 0, s = 0, c = 0; c < o; c++) {
                    var l = t * c
                      , u = t * (c + 1);
                    u > n.length && (u = n.length);
                    var d = u - l
                      , f = [r]
                      , g = [s >> 0 & 255, s >> 8 & 255]
                      , h = [g[0]]
                      , p = [g[1]]
                      , b = "10D40" + this.ab2bytes(f) + "0" + this.ab2bytes(h) + this.ab2bytes(p) + "00";
                    r += 2,
                    r >= 16 && (r = 0,
                    s += 1);
                    var m = [];
                    i[b] = m;
                    for (var w = (0,
                    a.default)(d / e) + 1, v = 0; v < w; v++) {
                        var y = e * v
                          , x = e * (v + 1);
                        x > d && (x = d);
                        for (var k = x - y, C = [], A = 0; A < k; A++)
                            l + y + A >= n.length ? alert("超过大小") : C.push(n[l + y + A]);
                        m.push(C)
                    }
                }
                return i
            },
            setProcess: function(e) {
                if (this.setProcessCb) {
                    var t = (0,
                    a.default)(100 * e / this.BLUE_OBJ.byteArray.length);
                    this.setProcessCb(t)
                }
            },
            ab2bytes: function(e) {
                return Array.prototype.map.call(new Uint8Array(e), function(e) {
                    return ("00" + e.toString(16)).slice(-2)
                }).join("").toUpperCase()
            },
            getCrc: function(e) {
                var t = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"
                  , n = 0
                  , i = 0
                  , o = 0;
                n ^= -1;
                for (var a = 0, r = e.length; a < r; a++)
                    i = 255 & (n ^ e[a]),
                    o = "0x" + t.substr(9 * i, 8),
                    n = n >>> 8 ^ o;
                var s = -1 ^ n;
                return [s >> 0 & 255, s >> 8 & 255, s >> 16 & 255, s >> 24 & 255]
            },
            onFwChange: function() {
                var e = (0,
                o.default)(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                try {
                                    "10D001050020" == t ? this.sendData(this.BLUE_OBJ.characteristic1, [209]) : "10D10100" == t ? (n = [210, 8, 255, 0, 0, 0, 255, 0, 0, 0, 0, 32, 0, 255],
                                    n[2] = this.BLUE_OBJ.sizeArray[0],
                                    n[3] = this.BLUE_OBJ.sizeArray[1],
                                    n[4] = this.BLUE_OBJ.sizeArray[2],
                                    n[5] = this.BLUE_OBJ.sizeArray[3],
                                    n[6] = this.BLUE_OBJ.crcArray[0],
                                    n[7] = this.BLUE_OBJ.crcArray[1],
                                    n[8] = this.BLUE_OBJ.crcArray[2],
                                    n[9] = this.BLUE_OBJ.crcArray[3],
                                    this.sendData(this.BLUE_OBJ.characteristic1, n)) : 0 == t.indexOf("10D201") ? this.sendData(this.BLUE_OBJ.characteristic1, [211, 1]) : "10D301" == t ? this.sendFwData(this.BLUE_OBJ.characteristic2, "10D40000000000", 0) : 0 == t.indexOf("10D4") ? this.BLUE_OBJ.dataMap[t] ? this.sendFwData(this.BLUE_OBJ.characteristic2, t, 0) : this.sendData(this.BLUE_OBJ.characteristic1, [213]) : 0 == t.indexOf("10D501") ? this.sendData(this.BLUE_OBJ.characteristic1, [214]) : "10D601" == t ? this.installCb1 && this.installCb1() : this.installCb2 && this.installCb2()
                                } catch (i) {
                                    alert(i)
                                }
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            sendData: function() {
                var e = (0,
                o.default)(regeneratorRuntime.mark(function e(t, n) {
                    return regeneratorRuntime.wrap(function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.writeValue(new Uint8Array(n));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            sendFwData: function() {
                var e = (0,
                o.default)(regeneratorRuntime.mark(function e(t, n, i) {
                    var o, a, r;
                    return regeneratorRuntime.wrap(function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                try {
                                    o = this.BLUE_OBJ.dataMap[n],
                                    a = this,
                                    r = o[i],
                                    r && (this.BLUE_OBJ.process += r.length,
                                    this.setProcess(this.BLUE_OBJ.process),
                                    t.writeValue(new Uint8Array(r)).then(function(e) {
                                        setTimeout(function() {
                                            a.sendFwData(t, n, i + 1)
                                        }, 2)
                                    }))
                                } catch (s) {}
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                function t(t, n, i) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            connect: function() {
                var e = (0,
                o.default)(regeneratorRuntime.mark(function e(t) {
                    var n, i, o, a;
                    return regeneratorRuntime.wrap(function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!("bluetooth"in navigator)) {
                                    e.next = 30;
                                    break
                                }
                                return e.prev = 1,
                                e.next = 4,
                                navigator.bluetooth.requestDevice({
                                    filters: [{
                                        namePrefix: "Xiaomi"
                                    }, {
                                        namePrefix: "Amazfit"
                                    }]
                                });
                            case 4:
                                return n = e.sent,
                                e.next = 7,
                                n.gatt.connect();
                            case 7:
                                return i = e.sent,
                                e.next = 10,
                                i.getPrimaryService("00001530-0000-3512-2118-0009AF100700");
                            case 10:
                                return o = e.sent,
                                e.next = 13,
                                o.getCharacteristic("00001531-0000-3512-2118-0009AF100700");
                            case 13:
                                return this.BLUE_OBJ.characteristic1 = e.sent,
                                a = this,
                                this.BLUE_OBJ.characteristic1.addEventListener("characteristicvaluechanged", function(e) {
                                    var t = a.ab2bytes(e.target.value.buffer);
                                    a.onFwChange(t)
                                }),
                                this.BLUE_OBJ.characteristic1.startNotifications(),
                                e.next = 19,
                                o.getCharacteristic("00001532-0000-3512-2118-0009AF100700");
                            case 19:
                                this.BLUE_OBJ.characteristic2 = e.sent,
                                n.addEventListener("gattserverdisconnected", function() {
                                    a.onDisconnected()
                                }),
                                this.deviceName = n.name,
                                this.deviceId = n.id,
                                t && t(),
                                e.next = 28;
                                break;
                            case 26:
                                e.prev = 26,
                                e.t0 = e["catch"](1);
                            case 28:
                                e.next = 31;
                                break;
                            case 30:
                                alert("不支持bluetooth");
                            case 31:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[1, 26]])
                }));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            install: function(e, t, n) {
                this.installCb1 = t,
                this.installCb2 = n,
                this.sendData(this.BLUE_OBJ.characteristic1, [208])
            },
            onDisconnected: function() {
                this.deviceName = "",
                this.deviceId = ""
            }
        }
          , s = r;
        t.default = s
    },
    d92b: function(e, t, n) {
        var i = n("0add");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("4565d3a4", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    daf9: function(e, t, n) {
        var i = n("6ec0");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("40229012", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    dd6d: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("92d3")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    de6d: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("9c21")
          , o = n("9041");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
        t["default"] = s.exports
    },
    dfeb: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("e143"))
          , a = (n("cee5"),
        {
            onLaunch: function() {
                uni.getSystemInfo({
                    success: function(e) {
                        o.default.prototype.StatusBar = e.statusBarHeight,
                        "android" == e.platform ? o.default.prototype.CustomBar = e.statusBarHeight + 50 : o.default.prototype.CustomBar = e.statusBarHeight + 45;
                        try {
                            uni.getStorageSync("lang")
                        } catch (e) {
                            var t = "chs";
                            switch (e.language) {
                            case "zh":
                                t = "chs";
                                break;
                            case "en":
                                t = "en";
                                break
                            }
                            uni.setStorage({
                                key: "lang",
                                data: t
                            })
                        }
                    }
                }),
                o.default.prototype.ColorList = [{
                    title: "嫣红",
                    name: "red",
                    color: "#e54d42"
                }, {
                    title: "桔橙",
                    name: "orange",
                    color: "#f37b1d"
                }, {
                    title: "明黄",
                    name: "yellow",
                    color: "#fbbd08"
                }, {
                    title: "橄榄",
                    name: "olive",
                    color: "#8dc63f"
                }, {
                    title: "森绿",
                    name: "green",
                    color: "#39b54a"
                }, {
                    title: "天青",
                    name: "cyan",
                    color: "#1cbbb4"
                }, {
                    title: "海蓝",
                    name: "blue",
                    color: "#0081ff"
                }, {
                    title: "姹紫",
                    name: "purple",
                    color: "#6739b6"
                }, {
                    title: "木槿",
                    name: "mauve",
                    color: "#9c26b0"
                }, {
                    title: "桃粉",
                    name: "pink",
                    color: "#e03997"
                }, {
                    title: "棕褐",
                    name: "brown",
                    color: "#a5673f"
                }, {
                    title: "玄灰",
                    name: "grey",
                    color: "#8799a3"
                }, {
                    title: "草灰",
                    name: "gray",
                    color: "#aaaaaa"
                }, {
                    title: "墨黑",
                    name: "black",
                    color: "#333333"
                }, {
                    title: "雅白",
                    name: "white",
                    color: "#ffffff"
                }]
            },
            onShow: function() {
                console.log("App Show"),
                console.log("APP 启动完毕")
            },
            onHide: function() {
                console.log("App Hide")
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                }
            }
        });
        t.default = a
    },
    e037: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("f499"));
        n("96cf");
        var a = i(n("3b8d"));
        n("7f7f");
        var r = i(n("29a1"))
          , s = i(n("6483"))
          , c = {
            components: {
                bleDialog: r.default,
                bleDialogIos: s.default
            },
            props: {
                download_item: {
                    type: Object
                },
                download_url: {
                    type: String,
                    default: ""
                },
                modalName: {
                    type: String
                }
            },
            data: function() {
                return {
                    type: ""
                }
            },
            mounted: function() {
                try {
                    var e = uni.getStorageSync("currentType");
                    this.type = e
                } catch (t) {
                    this.type = "mi4"
                }
            },
            methods: {
                addToMyWatchFace: function() {
                    "mi4" == this.download_item.type ? this.$fileHelper.startAddToMyWatchface(this.download_item.name, this.download_url, this.download_item.preview, !1, this.download_item.type) : uni.showModal({
                        title: this.i18n.dialog.addToMyWatchFace.title,
                        content: this.i18n.dialog.addToMyWatchFace.content,
                        showCancel: !1
                    })
                },
                autoReplaceBin: function(e) {
                    uni.showToast({
                        icon: "none",
                        title: "该功能只支持APP"
                    }),
                    setTimeout(function() {
                        window.location.href = "https://www.coolapk.com/apk/tech.pingx.watchface"
                    }, 2e3)
                },
                openBrowser: function() {
                    "gts" != this.download_item.type ? window.location.href = this.download_url : uni.showModal({
                        title: this.i18n.dialog.addToMyWatchFace.title,
                        content: this.i18n.dialog.addToMyWatchFace.title,
                        showCancel: !1
                    })
                },
                hideModal: function() {
                    this.$emit("close")
                },
                bluetooth: function() {
                    var e = (0,
                    a.default)(regeneratorRuntime.mark(function e() {
                        var t, n, i, a, r, s;
                        return regeneratorRuntime.wrap(function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isLoginFun()) {
                                        e.next = 24;
                                        break
                                    }
                                    return uni.showLoading({
                                        title: this.i18n.fileHelper.downloading
                                    }),
                                    e.prev = 2,
                                    e.next = 5,
                                    this.$fileHelper.downloadFile(this.download_url);
                                case 5:
                                    t = e.sent,
                                    console.log("bin_path=" + t),
                                    n = plus.io.convertLocalFileSystemURL(t),
                                    console.log("path_trans=" + n),
                                    i = plus.android.runtimeMainActivity(),
                                    a = plus.android.importClass("android.content.Intent"),
                                    r = plus.android.importClass("com.givemefive.ble.BLEActivity"),
                                    s = new a(i,r.class),
                                    s.putExtra("filepath", n),
                                    uni.hideLoading(),
                                    i.startActivity(s),
                                    e.next = 22;
                                    break;
                                case 18:
                                    e.prev = 18,
                                    e.t0 = e["catch"](2),
                                    uni.hideLoading(),
                                    uni.showModal({
                                        title: "error",
                                        content: (0,
                                        o.default)(e.t0)
                                    });
                                case 22:
                                    e.next = 25;
                                    break;
                                case 24:
                                    uni.showToast({
                                        icon: "none",
                                        title: "请先登录"
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[2, 18]])
                    }));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                bluetoothForWx: function() {
                    this.hideModal(),
                    this.isDonateFun() ? this.$refs.bledialog.show(this.download_url) : this.donationProtect()
                },
                bluetoothForIOS: function() {
                    this.hideModal(),
                    this.isDonateFun() ? this.$refs.bledialogios.show(this.download_url) : this.donationProtect()
                },
                donationProtect: function() {
                    uni.showModal({
                        title: this.i18n.donation.donationFirst_hint,
                        content: this.i18n.donation.donationFirst,
                        confirmText: this.i18n.donation.donationFirst_confirm,
                        cancelText: this.i18n.donation.donationFirst_cancel,
                        success: function(e) {
                            e.confirm ? uni.navigateTo({
                                url: "/pages/about/donate/donate"
                            }) : e.cancel
                        }
                    })
                },
                installMi7: function() {
                    if (this.isLoginFun()) {
                        uni.showLoading({
                            title: this.i18n.fileHelper.downloading
                        });
                        try {
                            this.$fileHelper.downFileAndSaveMi7(this.download_url, function(e) {
                                console.log("bin_path=" + e);
                                var t = plus.io.convertLocalFileSystemURL(e);
                                console.log("path_trans=" + t);
                                var n = plus.android.runtimeMainActivity()
                                  , i = plus.android.importClass("android.content.Intent")
                                  , o = plus.android.importClass("com.givemefive.ble.BLEActivity")
                                  , a = new i(n,o.class);
                                a.putExtra("filepath", t),
                                uni.hideLoading(),
                                n.startActivity(a)
                            })
                        } catch (e) {
                            uni.hideLoading(),
                            uni.showModal({
                                title: "error",
                                content: (0,
                                o.default)(e)
                            })
                        }
                    } else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                },
                installMi7Ble: function() {
                    if (this.isLoginFun())
                        if (this.isDonateFun()) {
                            uni.showLoading({
                                title: this.i18n.fileHelper.downloading
                            });
                            try {
                                var e = this;
                                this.$fileHelper.downFileAndSaveMi7(this.download_url, function(t) {
                                    console.log("bin_path=" + t);
                                    var n = plus.io.convertLocalFileSystemURL(t);
                                    console.log("path_trans=" + n);
                                    var i = plus.android.runtimeMainActivity()
                                      , o = plus.android.importClass("android.content.Intent")
                                      , a = plus.android.importClass("com.givemefive.ble.BLEActivityMi7")
                                      , r = new o(i,a.class);
                                    r.putExtra("filepath", n),
                                    r.putExtra("limitMac", e.isLoginFun()),
                                    uni.hideLoading(),
                                    i.startActivity(r)
                                })
                            } catch (t) {
                                uni.hideLoading(),
                                uni.showModal({
                                    title: "error",
                                    content: (0,
                                    o.default)(t)
                                })
                            }
                        } else
                            this.donationProtect();
                    else
                        uni.showToast({
                            icon: "none",
                            title: "请先登录"
                        })
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                }
            }
        };
        t.default = c
    },
    e0ad: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            data: function() {
                return {}
            }
        };
        t.default = i
    },
    e4ad: function(e, t, n) {
        "use strict";
        var i = n("288e")
          , o = i(n("cebc"));
        n("cadf"),
        n("551c"),
        n("097d"),
        n("6a87"),
        n("1c31");
        var a = i(n("e143"))
          , r = i(n("0865"));
        n("832b");
        var s = i(n("3ae7"))
          , c = i(n("4c5e"))
          , l = i(n("4c25"))
          , u = i(n("3908"))
          , d = i(n("6f7c"))
          , f = i(n("d8af"))
          , g = i(n("a68f"))
          , h = i(n("a67d"))
          , p = i(n("327d"))
          , b = i(n("ed13"))
          , m = i(n("e826"))
          , w = i(n("34ac"))
          , v = i(n("bb64"))
          , y = n("4b66")
          , x = i(n("ef1b"))
          , k = i(n("c7a5"))
          , C = i(n("2f66"))
          , A = {
            id: 2001
        };
        a.default.prototype.$current = A,
        a.default.use(s.default);
        var E = new s.default({
            locale: "chs",
            messages: {
                en: c.default,
                chs: l.default,
                cht: u.default
            }
        });
        a.default.prototype._i18n = E,
        a.default.component("make", g.default),
        a.default.component("explore", h.default),
        a.default.component("tools", p.default),
        a.default.component("bandBBS", b.default),
        a.default.component("about", m.default),
        a.default.component("cu-custom", w.default),
        a.default.component("respage", v.default),
        console.log("生产环境"),
        y.req.baseuUrl = "http://192.168.1.247/",
        a.default.prototype.baseUrlMake = "http://res.mibandtool.club:8081/",
        a.default.prototype.baseUrl = y.req.baseuUrl,
        a.default.prototype.blue_util = f.default,
        a.default.prototype.managerMode = !1;
        var _ = !1;
        a.default.prototype.wfEditorMode = _,
        _ && (y.req.baseuUrl = "http://localhost:9082/",
        a.default.prototype.baseUrl = y.req.baseuUrl),
        y.req.defaultReq.beforeSend = function(e) {
            try {
                var t = uni.getStorageSync("login")
                  , n = uni.getStorageSync("openid");
                t && void 0 != n.length && (e.header.openId = n,
                e.header.nickName = encodeURI(t.nickname))
            } catch (r) {}
            try {
                var i = uni.getStorageSync("lang");
            } catch (r) {
            }
            try {
                var a = (new Date).getTime() + "";
            } catch (r) {}
            return e
        }
        ,
        y.req.defaultReq.beforeFinsh = function(e) {
            if (console.log("拦截响应"),
            !e.data || "" == e.data)
                return "success";
            var t = e.data.code;
            if (!t && 0 != t)
                return e.data;
            switch (t) {
            case 0:
                return e.data.data;
            case -1:
                throw uni.showToast({
                    icon: "none",
                    title: e.data.msg
                }),
                e.data.msg;
            case 9999:
                throw uni.showToast({
                    icon: "none",
                    title: e.data.msg
                }),
                e.data.msg
            }
        }
        ,
        y.req.defaultReq.type = "POST",
        a.default.prototype.$http = y.req,
        a.default.prototype.isDonateFun = function() {
            var e = uni.getStorageSync("donation");
            return "1" == e || "2" == e || 1 == e || 2 == e
        }
        ,
        a.default.prototype.isLoginFun = function() {
            var e = uni.getStorageSync("openid");
            return e
        }
        ,
        a.default.prototype.getMac = function() {
            var e = uni.getStorageSync("limitMac");
            return e
        }
        ;
        var B = {
            managers: {},
            tags: [{
                id: 9999,
                name: "全部"
            }]
        };
        a.default.prototype.setConfigs = function(e) {
            B = e
        }
        ,
        a.default.prototype.isManagerFun = function() {
            var e = uni.getStorageSync("openid");
            return B.managers[e]
        }
        ,
        a.default.prototype.getTagsListFun = function() {
            return B.tags
        }
        ,
        a.default.prototype.$fileHelper = x.default,
        uni.setStorageSync("currentType", "mi7");
        var D = uni.getStorageSync("currentType");
        if (D || (D = "mi7",
        uni.setStorageSync("currentType", D)),
        _ && (D = "gts",
        uni.setStorageSync("currentType", D)),
        a.default.prototype.type_storage = D,
        a.default.prototype.$encryptor = k.default,
        a.default.prototype.$share = C.default,
        a.default.config.productionTip = !1,
        r.default.mpType = "app",
        navigator.userAgent.indexOf(" ") > 0) {
            var I = new a.default((0,
            o.default)({
                i18n: E
            }, r.default));
            I.$mount()
        } else
            alert("请在AppStore中安装应用Bluefy，并使用该应用访问本网站")
    },
    e660: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("dfeb")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    e72b: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("5440")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    e826: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("725e")
          , o = n("f921");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("e940");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "35f71bca", null);
        t["default"] = s.exports
    },
    e940: function(e, t, n) {
        "use strict";
        var i = n("daf9")
          , o = n.n(i);
        o.a
    },
    ed13: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("9de9")
          , o = n("d1f9");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("acc3");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "acada98a", null);
        t["default"] = s.exports
    },
    ef1b: function(e, t, n) {
        "use strict";
        var i = n("288e");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("28a5");
        var o = i(n("795b"));
        n("a481"),
        n("4917");
        var a = i(n("c988"))
          , r = {}
          , s = null;
        r.replaceOfficeBinPromise = function(e, t) {}
        ,
        r.getXmlName = function(e) {
            var t = /(<name\>).+(\<\/name\>)/
              , n = e.match(t);
            return n[0].replace("<name>", "").replace("</name>", "")
        }
        ,
        r.copyFileToAim = function(e, t, n, i, o) {}
        ,
        r.getUUID = function() {
            return new o.default(function(e, t) {
                window.requestIdleCallback ? requestIdleCallback(function() {
                    a.default.getV18(function(t, n) {
                        e(t)
                    })
                }) : setTimeout(function() {
                    a.default.getV18(function(t, n) {
                        e(t)
                    })
                }, 500)
            }
            )
        }
        ,
        r.getUUID2 = function() {
            var e, t, n = !0, i = 36, o = 16, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = [];
            if (o = o || a.length,
            n)
                for (r[8] = r[13] = r[18] = r[23] = "-",
                r[14] = "4",
                e = 0; e < i; e++)
                    r[e] || (t = 0 | 16 * Math.random(),
                    r[e] = a[19 == e ? 3 & t | 8 : t]);
            else
                for (e = 0; e < i; e++)
                    r[e] = a[0 | Math.random() * o];
            return r.join("")
        }
        ,
        r.downFileAndSaveMi7 = function(e, t) {
            uni.showLoading({
                title: s.fileHelper.downloading
            }),
            uni.downloadFile({
                url: e,
                success: function(e) {
                    200 === e.statusCode && (console.log("下载成功"),
                    uni.saveFile({
                        tempFilePath: e.tempFilePath,
                        success: function(e) {
                            var n = e.savedFilePath;
                            uni.hideLoading(),
                            console.log("保存路径：" + n),
                            t(n)
                        }
                    }))
                }
            })
        }
        ;
        var c = r;
        t.default = c
    },
    f050: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("fb90")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    f05d: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-custom",
                style: [{
                    height: e.CustomBar + "px"
                }]
            }, [n("v-uni-view", {
                staticClass: "cu-bar fixed",
                class: ["" != e.bgImage ? "none-bg text-white bg-img" : "", e.bgColor],
                style: e.style
            }, [e.isBack ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        t = e.$handleEvent(t),
                        e.BackPage(t)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-back"
            }), e._t("backText")], 2) : e._e(), n("v-uni-view", {
                staticClass: "content",
                style: [{
                    top: e.StatusBar + "px"
                }]
            }, [e._t("content")], 2), e._t("right")], 2)], 1)], 1)
        }
          , o = [];
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        })
    },
    f921: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a4dc")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(a);
        t["default"] = o.a
    },
    fb90: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("c5f6"),
        n("6762"),
        n("2fdb");
        var i = {
            name: "cmd-progress",
            props: {
                type: {
                    validator: function(e) {
                        return ["line", "circle", "dashboard"].includes(e)
                    },
                    default: "line"
                },
                percent: {
                    type: Number,
                    default: 0
                },
                successPercent: {
                    type: Number,
                    default: 0
                },
                showInfo: {
                    type: Boolean,
                    default: !0
                },
                custom: {
                    type: Boolean,
                    default: !1
                },
                status: {
                    validator: function(e) {
                        return ["normal", "success", "exception", "active"].includes(e)
                    },
                    default: "normal"
                },
                strokeWidth: {
                    type: Number,
                    default: 6
                },
                strokeColor: {
                    type: String,
                    default: ""
                },
                strokeShape: {
                    validator: function(e) {
                        return ["round", "square"].includes(e)
                    },
                    default: "round"
                },
                width: {
                    type: Number,
                    default: 80
                },
                gapDegree: {
                    type: Number,
                    default: 0
                },
                gapPosition: {
                    validator: function(e) {
                        return ["top", "bottom", "left", "right"].includes(e)
                    },
                    default: "top"
                }
            },
            computed: {
                setFormat: function() {
                    return "".concat(this.setProgress, "%")
                },
                setProgress: function() {
                    var e = this.percent;
                    return !this.percent || this.percent < 0 ? e = 0 : this.percent >= 100 && (e = 100),
                    e
                },
                setCircleStyle: function() {
                    return "width: ".concat(this.width, "px;\n\t\t\t\theight: ").concat(this.width, "px;\n\t\t\t\tfontSize: ").concat(.15 * this.width + 6, "px;")
                },
                setCircleTrailStyle: function() {
                    var e = 50 - this.strokeWidth / 2
                      , t = 2 * Math.PI * e
                      , n = this.gapDegree || "dashboard" === this.type && 75;
                    return "stroke-dasharray: ".concat(t - (n || 0), "px, ").concat(t, "px;\n\t\t\t\tstroke-dashoffset: -").concat((n || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s;")
                },
                setCirclePathStyle: function() {
                    var e = 50 - this.strokeWidth / 2
                      , t = 2 * Math.PI * e
                      , n = this.gapDegree || "dashboard" === this.type && 75;
                    return "stroke: ".concat(this.strokeColor, ";\n\t\t\t\tstroke-dasharray: ").concat(this.setProgress / 100 * (t - (n || 0)), "px, ").concat(t, "px;\n\t\t\t\tstroke-dashoffset: -").concat((n || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s;")
                },
                setCirclePath: function() {
                    var e = 50 - this.strokeWidth / 2
                      , t = 0
                      , n = -e
                      , i = 0
                      , o = -2 * e
                      , a = ("dashboard" === this.type ? "bottom" : this.gapPosition) || "top";
                    switch (a) {
                    case "left":
                        t = -e,
                        n = 0,
                        i = 2 * e,
                        o = 0;
                        break;
                    case "right":
                        t = e,
                        n = 0,
                        i = -2 * e,
                        o = 0;
                        break;
                    case "bottom":
                        n = e,
                        o = 2 * e;
                        break;
                    default:
                        break
                    }
                    return "M 50,50 m ".concat(t, ",").concat(n, " a ").concat(e, ",").concat(e, " 0 1 1 ").concat(i, ",").concat(-o, " a ").concat(e, ",").concat(e, " 0 1 1 ").concat(-i, ",").concat(o)
                },
                setLineStyle: function() {
                    return "width: ".concat(this.setProgress, "%;\n\t\t\t\theight: ").concat(this.strokeWidth, "px;\n\t\t\t\tbackground: ").concat(this.strokeColor, ";\n\t\t\t\tborder-radius: ").concat("square" === this.strokeShape ? 0 : "100px", ";")
                },
                setLineSuccessStyle: function() {
                    var e = this.successPercent;
                    return !this.successPercent || this.successPercent < 0 || this.setProgress < this.successPercent ? e = 0 : this.successPercent >= 100 && (e = 100),
                    "width: ".concat(e, "%;\n\t\t\t\theight: ").concat(this.strokeWidth, "px;\n\t\t\t\tborder-radius: ").concat("square" === this.strokeShape ? 0 : "100px", ";")
                },
                setStatusClass: function() {
                    var e = [];
                    return "exception" == this.status && e.push("cmd-progress-status-exception"),
                    ("success" == this.status || this.setProgress >= 100) && e.push("cmd-progress-status-success"),
                    "active" == this.status && e.push("cmd-progress-status-active"),
                    this.showInfo && e.push("cmd-progress-show-info"),
                    "line" === this.type && e.push("cmd-progress-line"),
                    "circle" !== this.type && "dashboard" !== this.type || e.push("cmd-progress-circle"),
                    e.push("cmd-progress-status-normal"),
                    e
                }
            }
        };
        t.default = i
    },
    fd15: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("8a1e")
          , o = n("dd6d");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(a);
        n("8c38");
        var r = n("2877")
          , s = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "12361250", null);
        t["default"] = s.exports
    }
});
