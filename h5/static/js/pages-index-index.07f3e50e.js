(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "0cf1": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("0f42")
          , i = a("a623");
        for (var s in i)
            "default" !== s && function(t) {
                a.d(e, t, function() {
                    return i[t]
                })
            }(s);
        a("42ae");
        var o = a("2877")
          , r = Object(o["a"])(i["default"], n["a"], n["b"], !1, null, "138d2d7a", null);
        e["default"] = r.exports
    },
    "0f42": function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", [t.wfEditorModeCp ? t._e() : a("v-uni-view", {
                staticClass: "cu-bar search bg-gradual-blue",
                class: "make" == t.PageCur ? "makeclass" : "",
                style: t.padtop
            }, [a("v-uni-view", {
                staticClass: "search-form round",
                class: "make" == t.PageCur ? "makeclassBox" : ""
            }, [a("v-uni-text", {
                staticClass: "cuIcon-search"
            }), a("v-uni-input", {
                class: "make" == t.PageCur ? "makeclassBox" : "",
                attrs: {
                    "adjust-position": !1,
                    type: "text",
                    placeholder: t.i18n.index.search,
                    "confirm-type": "search"
                },
                on: {
                    focus: function(e) {
                        e = t.$handleEvent(e),
                        t.InputFocus(e)
                    },
                    blur: function(e) {
                        e = t.$handleEvent(e),
                        t.InputBlur(e)
                    },
                    confirm: function(e) {
                        e = t.$handleEvent(e),
                        t.InputConfirm(e)
                    }
                },
                model: {
                    value: t.search_keyword,
                    callback: function(e) {
                        t.search_keyword = e
                    },
                    expression: "search_keyword"
                }
            })], 1), a("v-uni-view", {
                staticClass: "action"
            }, [a("v-uni-picker", {
                attrs: {
                    value: t.typeIndex,
                    range: t.typeList
                },
                on: {
                    change: function(e) {
                        e = t.$handleEvent(e),
                        t.pickType(e)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "uni-input"
            }, [t._v(t._s(t.typeList[t.typeIndex]))])], 1), a("v-uni-text", {
                staticClass: "cuIcon-triangledownfill"
            })], 1)], 1), "explore" == t.PageCur ? a("explore", {
                ref: "explore"
            }) : t._e(), "tool" == t.PageCur ? a("tools") : t._e(), "about" == t.PageCur ? a("about") : t._e(), "bandBBS" == t.PageCur ? a("respage") : t._e(), t.wfEditorModeCp ? t._e() : a("v-uni-view", {
                staticClass: "cu-bar tabbar bg-white shadow foot"
            }, [a("v-uni-view", {
                staticClass: "action",
                attrs: {
                    "data-cur": "explore"
                },
                on: {
                    click: function(e) {
                        e = t.$handleEvent(e),
                        t.NavChange(e)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, [a("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/component" + ["explore" == t.PageCur ? "_cur" : ""] + ".png"
                }
            })], 1), a("v-uni-view", {
                class: "explore" == t.PageCur ? "text-green" : "text-gray"
            }, [t._v(t._s(t.i18n.tabbar.explore))])], 1), a("v-uni-view", {
                staticClass: "action",
                attrs: {
                    "data-cur": "tool"
                },
                on: {
                    click: function(e) {
                        e = t.$handleEvent(e),
                        t.NavChange(e)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, [a("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/tool" + ["tool" == t.PageCur ? "_cur" : ""] + ".png"
                }
            })], 1), a("v-uni-view", {
                class: "tool" == t.PageCur ? "text-green" : "text-gray"
            }, [t._v(t._s(t.i18n.tabbar.tool))])], 1), a("v-uni-view", {
                staticClass: "action",
                attrs: {
                    "data-cur": "about"
                },
                on: {
                    click: function(e) {
                        e = t.$handleEvent(e),
                        t.NavChange(e)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, [a("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/plugin" + ["about" == t.PageCur ? "_cur" : ""] + ".png"
                }
            })], 1), a("v-uni-view", {
                class: "about" == t.PageCur ? "text-green" : "text-gray"
            }, [t._v(t._s(t.i18n.tabbar.about))])], 1)], 1)], 1)
        }
          , i = [];
        a.d(e, "a", function() {
            return n
        }),
        a.d(e, "b", function() {
            return i
        })
    },
    2025: function(t, e, a) {
        "use strict";
        var n = a("288e");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = n(a("85c9"))
          , s = {
            components: {
                avatar: i.default
            },
            data: function() {
                return {
                    PageCur: "explore",
                    InputBottom: 0,
                    typeIndex: 0,
                    search_keyword: "",
                    currentType: "mi7"
                }
            },
            onShow: function() {
                var t = this;
                uni.getStorage({
                    key: "select-basis",
                    success: function(e) {
                        "mi5" == t.currentType ? t.$refs.makerNew && (t.$refs.makerNew.setBasis(e.data),
                        uni.removeStorage({
                            key: "select-basis",
                            success: function(t) {
                                console.log("success")
                            }
                        })) : t.$refs.maker && (t.$refs.maker.setBasis(e.data),
                        uni.removeStorage({
                            key: "select-basis",
                            success: function(t) {
                                console.log("success")
                            }
                        }))
                    }
                }),
                this.wfEditorMode || this.getDonationInfo()
            },
            onLoad: function() {
                var t = this;
                uni.getStorage({
                    key: "lang",
                    success: function(e) {
                        t._i18n.locale = e.data,
                        t.target_lang = e.data
                    }
                });
                var e = uni.getStorageSync("currentType");
                console.log("typeInStorage = " + e),
                this.wfEditorModeCp && (e = "gts"),
                e ? (t.currentType = e,
                t.typeIndex = 0) : (t.currentType = "mi7",
                uni.setStorageSync("currentType", t.currentType)),
                this.wfEditorMode || (this.$http.ajax({
                    path: "BandBBS-WF-Crack/notice/getShow",
                    type: "get"
                }).then(function(t) {}),
                this.$http.ajax({
                    path: "BandBBS-WF-Crack/config/json/ad",
                    type: "get"
                }).then(function(t) {}),
                this.freesoftware())
            },
            onReady: function() {
                this.triggerMakeVisible()
            },
            onReachBottom: function() {
                "explore" == this.PageCur && this.$refs.explore.nextPage()
            },
            methods: {
                NavChange: function(t) {
                    this.PageCur = t.currentTarget.dataset.cur,
                    this.triggerMakeVisible()
                },
                triggerMakeVisible: function() {
                    console.log("triggerMakeVisible")
                },
                InputFocus: function(t) {
                    this.PageCur = "explore",
                    this.InputBottom = t.detail.height
                },
                InputBlur: function(t) {
                    this.InputBottom = 0
                },
                InputConfirm: function(t) {
                    console.log(t.detail.value),
                    this.$refs.explore.searchWatchface(t.detail.value),
                    this.search_keyword = ""
                },
                pickType: function(t) {
                    switch (this.typeIndex = t.target.value,
                    this.typeList[this.typeIndex]) {
                    case this.i18n.watchType.MiBand7:
                        this.currentType = "mi7";
                        break;
                    default:
                        this.currentType = "mi7";
                        break
                    }
                    uni.setStorageSync("currentType", this.currentType),
                    "explore" == this.PageCur && this.$refs.explore.refresh()
                },
                freesoftware: function() {
                    var t = this;
                    this.$http.ajax({
                        path: "BandBBS-WF-Crack/config/json/message_open_mi7",
                        type: "get"
                    }).then(function(t) {
                        var e = t.id
                          , a = uni.getStorageSync("LAST_NOTIFY_ID");
                        e != a && t.title && t.content && uni.showModal({
                            title: t.title,
                            content: t.content,
                            showCancel: !1
                        }),
                        uni.setStorageSync("LAST_NOTIFY_ID", e)
                    }),
                    this.$http.ajax({
                        path: "BandBBS-WF-Crack/config/json/configs_mi7",
                        type: "get"
                    }).then(function(e) {
                        t.setConfigs(e)
                    })
                },
                getDonationInfo: function() {
                    var t = uni.getStorageSync("openid");
                    uni.getStorageSync("donation");
                    t && void 0 != t.length ? this.$http.ajax({
                        path: "BandBBS-WF-Crack/member/is/donation",
                        type: "get"
                    }).then(function(t) {
                        uni.setStorage({
                            key: "donation",
                            data: t
                        })
                    }) : uni.setStorage({
                        key: "donation",
                        data: null
                    })
                },
                getAvatar: function() {
                    return this.$refs.avatar
                },
                avatarUpload: function(t) {
                    "mi5" == this.currentType ? this.$refs.makerNew.myUpload(t) : this.$refs.maker.myUpload(t)
                }
            },
            computed: {
                i18n: function() {
                    return this.$t("message")
                },
                padtop: function() {
                    return ""
                },
                typeList: function() {
                    var t = [];
                    return t.push(this.i18n.watchType.MiBand7),
                    t
                },
                wfEditorModeCp: function() {
                    return this.wfEditorMode
                }
            }
        };
        e.default = s
    },
    "42ae": function(t, e, a) {
        "use strict";
        var n = a("cd04")
          , i = a.n(n);
        i.a
    },
    "7a96": function(t, e, a) {
        e = t.exports = a("2350")(!1),
        e.push([t.i, ".search[data-v-138d2d7a]{position:fixed;width:100%;z-index:999}.makeclass[data-v-138d2d7a]{\n\t}.makeclassBox[data-v-138d2d7a]{\n\t}.cu-bar .search-form.makeclassBox[data-v-138d2d7a]{\n\t}", ""])
    },
    a623: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("2025")
          , i = a.n(n);
        for (var s in n)
            "default" !== s && function(t) {
                a.d(e, t, function() {
                    return n[t]
                })
            }(s);
        e["default"] = i.a
    },
    cd04: function(t, e, a) {
        var n = a("7a96");
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var i = a("4f06").default;
        i("3efb2131", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
}]);
