function localStorageSupport() {
    return"localStorage"in window && window.localStorage !== null
}
function animationHover(n, t) {
    n = $(n);
    n.hover(function () {
	n.addClass("animated " + t)
    }, function () {
	window.setTimeout(function () {
	    n.removeClass("animated " + t)
	}, 2e3)
    })
}
function SmoothlyMenu() {
    !$("body").hasClass("mini-navbar") || $("body").hasClass("body-small") ? ($("#side-menu").hide(), setTimeout(function () {
	$("#side-menu").fadeIn(500)
    }, 100)) : $("body").hasClass("fixed-sidebar") ? ($("#side-menu").hide(), setTimeout(function () {
	$("#side-menu").fadeIn(500)
    }, 300)) : $("#side-menu").removeAttr("style")
}
function WinMove() {
    $("[class*=col]").sortable({handle: ".ibox-title", connectWith: "[class*=col]", tolerance: "pointer", forcePlaceholderSize: !0, opacity: .8}).disableSelection()
}
$(document).ready(function () {
    function n() {
	var i = $("body > #wrapper").height() - 61, n, t;
	$(".sidebard-panel").css("min-height", i + "px");
	n = $("nav.navbar-default").height();
	t = $("#page-wrapper").height();
	n > t && $("#page-wrapper").css("min-height", n + "px");
	n < t && $("#page-wrapper").css("min-height", $(window).height() + "px");
	$("body").hasClass("fixed-nav") && $("#page-wrapper").css("min-height", $(window).height() - 60 + "px")
    }
    $(this).width() < 769 ? $("body").addClass("body-small") : $("body").removeClass("body-small");
    $("#side-menu").metisMenu();
    $(".collapse-link").click(function () {
	var n = $(this).closest("div.ibox"), t = $(this).find("i"), i = n.find("div.ibox-content");
	i.slideToggle(200);
	t.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
	n.toggleClass("").toggleClass("border-bottom");
	setTimeout(function () {
	    n.resize();
	    n.find("[id^=map-]").resize()
	}, 50)
    });
    $(".close-link").click(function () {
	var n = $(this).closest("div.ibox");
	n.remove()
    });
    $(".fullscreen-link").click(function () {
	var n = $(this).closest("div.ibox"), t = $(this).find("i");
	$("body").toggleClass("fullscreen-ibox-mode");
	t.toggleClass("fa-expand").toggleClass("fa-compress");
	n.toggleClass("fullscreen");
	setTimeout(function () {
	    $(window).trigger("resize")
	}, 100)
    });
    $(".close-canvas-menu").click(function () {
	$("body").toggleClass("mini-navbar");
	SmoothlyMenu()
    });
    $(".right-sidebar-toggle").click(function () {
	$("#right-sidebar").toggleClass("sidebar-open")
    });
    $(".sidebar-container").slimScroll({height: "100%", railOpacity: .4, wheelStep: 10});
    $(".open-small-chat").click(function () {
	$(this).children().toggleClass("fa-comments").toggleClass("fa-remove");
	$(".small-chat-box").toggleClass("active")
    });
    $(".small-chat-box .content").slimScroll({height: "234px", railOpacity: .4});
    $(".check-link").click(function () {
	var n = $(this).find("i"), t = $(this).next("span");
	return n.toggleClass("fa-check-square").toggleClass("fa-square-o"), t.toggleClass("todo-completed"), !1
    });
    $(".navbar-minimalize").click(function () {
	$("body").toggleClass("mini-navbar");
	SmoothlyMenu()
    });
    $(".tooltip-demo").tooltip({selector: "[data-toggle=tooltip]", container: "body"});
    $(".modal").appendTo("body");
    n();
    $(window).bind("load", function () {
	$("body").hasClass("fixed-sidebar") && $(".sidebar-collapse").slimScroll({height: "100%", railOpacity: .9})
    });
    $(window).scroll(function () {
	$(window).scrollTop() > 0 && !$("body").hasClass("fixed-nav") ? $("#right-sidebar").addClass("sidebar-top") : $("#right-sidebar").removeClass("sidebar-top")
    });
    $(window).bind("load resize scroll", function () {
	$("body").hasClass("body-small") || n()
    });
    $("[data-toggle=popover]").popover();
    $(".full-height-scroll").slimscroll({height: "100%"})
});
$(window).bind("resize", function () {
    $(this).width() < 769 ? $("body").addClass("body-small") : $("body").removeClass("body-small")
});
$(document).ready(function () {
    if (localStorageSupport) {
	var t = localStorage.getItem("collapse_menu"), i = localStorage.getItem("fixedsidebar"), r = localStorage.getItem("fixednavbar"), u = localStorage.getItem("boxedlayout"), f = localStorage.getItem("fixedfooter"), n = $("body");
	i == "on" && (n.addClass("fixed-sidebar"), $(".sidebar-collapse").slimScroll({height: "100%", railOpacity: .9}));
	t == "on" && (n.hasClass("fixed-sidebar") ? n.hasClass("body-small") || n.addClass("mini-navbar") : n.hasClass("body-small") || n.addClass("mini-navbar"));
	r == "on" && ($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"), n.addClass("fixed-nav"));
	u == "on" && n.addClass("boxed-layout");
	f == "on" && $(".footer").addClass("fixed")
    }
}), function () {
    var nt, ct, lt, at, vt, yt, pt, wt, a, n, bt, kt, tt, dt, gt, o, ni, r, v, y, it, s, p, ti, rt, ut, f, ii, u, t, w, ft, ri, h, et, b, i, e, ot, c, k, st, d, g, ui, fi, ht, hi, ei, l = [].slice, oi = {}.hasOwnProperty, si = function (n, t) {
	function r() {
	    this.constructor = n
	}
	for (var i in t)
	    oi.call(t, i) && (n[i] = t[i]);
	return r.prototype = t.prototype, n.prototype = new r, n.__super__ = t.prototype, n
    }, ci = [].indexOf || function (n) {
	for (var t = 0, i = this.length; i > t; t++)
	    if (t in this && this[t] === n)
		return t;
	return-1
    };
    for (it = {catchupTime:100, initialRate:.03, minTime:250, ghostTime:100, maxProgressPerFrame:20, easeFactor:1.25, startOnPageLoad:!0, restartOnPushState:!0, restartOnRequestAfter:500, target:"body", elements:{checkInterval:100, selectors:["body"]}, eventLag:{minSamples:10, sampleCount:3, lagThreshold:3}, ajax:{trackMethods:["GET"], trackWebSockets:!0, ignoreURLs:[]}}, u = function () {
	var n;
	return null != (n = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? n : +new Date
    }, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == w && (w = function (n) {
	return setTimeout(n, 50)
    }, y = function (n) {
	return clearTimeout(n)
    }), ri = function (n) {
	var t, i;
	return t = u(), (i = function () {
	    var r;
	    return r = u() - t, r >= 33 ? (t = u(), n(r, function () {
		return w(i)
	    })) : setTimeout(i, 33 - r)
	})()
    }, ft = function () {
	var i, t, n;
	return n = arguments[0], t = arguments[1], i = 3 <= arguments.length ? l.call(arguments, 2) : [], "function" == typeof n[t] ? n[t].apply(n, i) : n[t]
    }, s = function () {
	var n, t, r, f, i, u, e;
	for (t = arguments[0], f = 2 <= arguments.length?l.call(arguments, 1):[], u = 0, e = f.length; e > u; u++)
	    if (r = f[u])
		for (n in r)
		    oi.call(r, n) && (i = r[n], null != t[n] && "object" == typeof t[n] && null != i && "object" == typeof i ? s(t[n], i) : t[n] = i);
	return t
    }, ni = function (n) {
	var i, r, u, t, f;
	for (r = i = 0, t = 0, f = n.length; f > t; t++)
	    u = n[t], r += Math.abs(u), i++;
	return r / i
    }, ti = function (n, t) {
	var i, r, u;
	if (null == n && (n = "options"), null == t && (t = !0), u = document.querySelector("[data-pace-" + n + "]")) {
	    if (i = u.getAttribute("data-pace-" + n), !t)
		return i;
	    try {
		return JSON.parse(i)
	    } catch (f) {
		return r = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
	    }
	}
    }, pt = function () {
	function n() {
	}
	return n.prototype.on = function (n, t, i, r) {
	    var u;
	    return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (u = this.bindings)[n] && (u[n] = []), this.bindings[n].push({handler: t, ctx: i, once: r})
	}, n.prototype.once = function (n, t, i) {
	    return this.on(n, t, i, !0)
	}, n.prototype.off = function (n, t) {
	    var i, u, r;
	    if (null != (null != (u = this.bindings) ? u[n] : void 0)) {
		if (null == t)
		    return delete this.bindings[n];
		for (i = 0, r = []; i < this.bindings[n].length; )
		    r.push(this.bindings[n][i].handler === t ? this.bindings[n].splice(i, 1) : i++);
		return r
	    }
	}, n.prototype.trigger = function () {
	    var f, r, n, e, t, o, s, i, u;
	    if (n = arguments[0], f = 2 <= arguments.length ? l.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
		for (t = 0, u = []; t < this.bindings[n].length; )
		    i = this.bindings[n][t], e = i.handler, r = i.ctx, o = i.once, e.apply(null != r ? r : this, f), u.push(o ? this.bindings[n].splice(t, 1) : t++);
		return u
	    }
	}, n
    }(), n = window.Pace || {}, window.Pace = n, s(n, pt.prototype), t = n.options = s({}, it, window.paceOptions, ti()), ht = ["ajax", "document", "eventLag", "elements"], d = 0, ui = ht.length; ui > d; d++)
	i = ht[d], t[i] === !0 && (t[i] = it[i]);
    a = function (n) {
	function t() {
	    return hi = t.__super__.constructor.apply(this, arguments)
	}
	return si(t, n), t
    }(Error);
    ct = function () {
	function n() {
	    this.progress = 0
	}
	return n.prototype.getElement = function () {
	    var n;
	    if (null == this.el) {
		if (n = document.querySelector(t.target), !n)
		    throw new a;
		this.el = document.createElement("div");
		this.el.className = "pace pace-active";
		document.body.className = document.body.className.replace(/pace-done/g, "");
		document.body.className += " pace-running";
		this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"><\/div>\n<\/div>\n<div class="pace-activity"><\/div>';
		null != n.firstChild ? n.insertBefore(this.el, n.firstChild) : n.appendChild(this.el)
	    }
	    return this.el
	}, n.prototype.finish = function () {
	    var n;
	    return n = this.getElement(), n.className = n.className.replace("pace-active", ""), n.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
	}, n.prototype.update = function (n) {
	    return this.progress = n, this.render()
	}, n.prototype.destroy = function () {
	    try {
		this.getElement().parentNode.removeChild(this.getElement())
	    } catch (n) {
		a = n
	    }
	    return this.el = void 0
	}, n.prototype.render = function () {
	    var n, f, i, e, r, o, u;
	    if (null == document.querySelector(t.target))
		return!1;
	    for (n = this.getElement(), e = "translate3d(" + this.progress + "%, 0, 0)", u = ["webkitTransform", "msTransform", "transform"], r = 0, o = u.length; o > r; r++)
		f = u[r], n.children[0].style[f] = e;
	    return(!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (n.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), n.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
	}, n.prototype.done = function () {
	    return this.progress >= 100
	}, n
    }();
    wt = function () {
	function n() {
	    this.bindings = {}
	}
	return n.prototype.trigger = function (n, t) {
	    var f, i, e, r, u;
	    if (null != this.bindings[n]) {
		for (r = this.bindings[n], u = [], i = 0, e = r.length; e > i; i++)
		    f = r[i], u.push(f.call(this, t));
		return u
	    }
	}, n.prototype.on = function (n, t) {
	    var i;
	    return null == (i = this.bindings)[n] && (i[n] = []), this.bindings[n].push(t)
	}, n
    }();
    st = window.XMLHttpRequest;
    k = window.XDomainRequest;
    c = window.WebSocket;
    p = function (n, t) {
	var f, i, r, u = [];
	for (i in t.prototype)
	    try {
		r = t.prototype[i];
		u.push(null == n[i] && "function" != typeof r ? n[i] = r : void 0)
	    } catch (e) {
		f = e
	    }
	return u
    };
    f = [];
    n.ignore = function () {
	var n, t, i;
	return t = arguments[0], n = 2 <= arguments.length ? l.call(arguments, 1) : [], f.unshift("ignore"), i = t.apply(null, n), f.shift(), i
    };
    n.track = function () {
	var n, t, i;
	return t = arguments[0], n = 2 <= arguments.length ? l.call(arguments, 1) : [], f.unshift("track"), i = t.apply(null, n), f.shift(), i
    };
    b = function (n) {
	var i;
	return(null == n && (n = "GET"), "track" === f[0]) ? "force" : !f.length && t.ajax && ("socket" === n && t.ajax.trackWebSockets || (i = n.toUpperCase(), ci.call(t.ajax.trackMethods, i) >= 0)) ? !0 : !1
    };
    bt = function (n) {
	function i() {
	    var n, r = this;
	    i.__super__.constructor.apply(this, arguments);
	    n = function (n) {
		var t;
		return t = n.open, n.open = function (i, u) {
		    return b(i) && r.trigger("request", {type: i, url: u, request: n}), t.apply(n, arguments)
		}
	    };
	    window.XMLHttpRequest = function (t) {
		var i;
		return i = new st(t), n(i), i
	    };
	    try {
		p(window.XMLHttpRequest, st)
	    } catch (u) {
	    }
	    if (null != k) {
		window.XDomainRequest = function () {
		    var t;
		    return t = new k, n(t), t
		};
		try {
		    p(window.XDomainRequest, k)
		} catch (u) {
		}
	    }
	    if (null != c && t.ajax.trackWebSockets) {
		window.WebSocket = function (n, t) {
		    var i;
		    return i = null != t ? new c(n, t) : new c(n), b("socket") && r.trigger("request", {type: "socket", url: n, protocols: t, request: i}), i
		};
		try {
		    p(window.WebSocket, c)
		} catch (u) {
		}
	    }
	}
	return si(i, n), i
    }(wt);
    g = null;
    rt = function () {
	return null == g && (g = new bt), g
    };
    et = function (n) {
	var i, r, f, u;
	for (u = t.ajax.ignoreURLs, r = 0, f = u.length; f > r; r++)
	    if (i = u[r], "string" == typeof i) {
		if (-1 !== n.indexOf(i))
		    return!0
	    } else if (i.test(n))
		return!0;
	return!1
    };
    rt().on("request", function (r) {
	var u, o, f, e, s;
	return e = r.type, f = r.request, s = r.url, et(s) ? void 0 : n.running || t.restartOnRequestAfter === !1 && "force" !== b(e) ? void 0 : (o = arguments, u = t.restartOnRequestAfter || 0, "boolean" == typeof u && (u = 0), setTimeout(function () {
	    var c, t, s, h, r, u;
	    if (c = "socket" === e ? f.readyState < 2 : 0 < (h = f.readyState) && 4 > h) {
		for (n.restart(), r = n.sources, u = [], t = 0, s = r.length; s > t; t++) {
		    if (i = r[t], i instanceof nt) {
			i.watch.apply(i, o);
			break
		    }
		    u.push(void 0)
		}
		return u
	    }
	}, u))
    });
    nt = function () {
	function n() {
	    var n = this;
	    this.elements = [];
	    rt().on("request", function () {
		return n.watch.apply(n, arguments)
	    })
	}
	return n.prototype.watch = function (n) {
	    var t, i, r, u;
	    return r = n.type, t = n.request, u = n.url, et(u) ? void 0 : (i = "socket" === r ? new dt(t) : new gt(t), this.elements.push(i))
	}, n
    }();
    gt = function () {
	function n(n) {
	    var f, o, i, e, r, u, t = this;
	    if (this.progress = 0, null != window.ProgressEvent)
		for (o = null, n.addEventListener("progress", function (n) {
		    return t.progress = n.lengthComputable ? 100 * n.loaded / n.total : t.progress + (100 - t.progress) / 2
		}, !1), u = ["load", "abort", "timeout", "error"], i = 0, e = u.length; e > i; i++)
		    f = u[i], n.addEventListener(f, function () {
			return t.progress = 100
		    }, !1);
	    else
		r = n.onreadystatechange, n.onreadystatechange = function () {
		    var i;
		    return 0 === (i = n.readyState) || 4 === i ? t.progress = 100 : 3 === n.readyState && (t.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
		}
	}
	return n
    }();
    dt = function () {
	function n(n) {
	    var r, t, u, i, f = this;
	    for (this.progress = 0, i = ["error", "open"], t = 0, u = i.length; u > t; t++)
		r = i[t], n.addEventListener(r, function () {
		    return f.progress = 100
		}, !1)
	}
	return n
    }();
    at = function () {
	function n(n) {
	    var r, t, u, i;
	    for (null == n && (n = {}), this.elements = [], null == n.selectors && (n.selectors = []), i = n.selectors, t = 0, u = i.length; u > t; t++)
		r = i[t], this.elements.push(new vt(r))
	}
	return n
    }();
    vt = function () {
	function n(n) {
	    this.selector = n;
	    this.progress = 0;
	    this.check()
	}
	return n.prototype.check = function () {
	    var n = this;
	    return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
		return n.check()
	    }, t.elements.checkInterval)
	}, n.prototype.done = function () {
	    return this.progress = 100
	}, n
    }();
    lt = function () {
	function n() {
	    var n, i, t = this;
	    this.progress = null != (i = this.states[document.readyState]) ? i : 100;
	    n = document.onreadystatechange;
	    document.onreadystatechange = function () {
		return null != t.states[document.readyState] && (t.progress = t.states[document.readyState]), "function" == typeof n ? n.apply(null, arguments) : void 0
	    }
	}
	return n.prototype.states = {loading: 0, interactive: 50, complete: 100}, n
    }();
    yt = function () {
	function n() {
	    var i, f, r, e, n, o = this;
	    this.progress = 0;
	    i = 0;
	    n = [];
	    e = 0;
	    r = u();
	    f = setInterval(function () {
		var s;
		return s = u() - r - 50, r = u(), n.push(s), n.length > t.eventLag.sampleCount && n.shift(), i = ni(n), ++e >= t.eventLag.minSamples && i < t.eventLag.lagThreshold ? (o.progress = 100, clearInterval(f)) : o.progress = 300 / (i + 3)
	    }, 50)
	}
	return n
    }();
    tt = function () {
	function n(n) {
	    this.source = n;
	    this.last = this.sinceLastUpdate = 0;
	    this.rate = t.initialRate;
	    this.catchup = 0;
	    this.progress = this.lastProgress = 0;
	    null != this.source && (this.progress = ft(this.source, "progress"))
	}
	return n.prototype.tick = function (n, i) {
	    var r;
	    return null == i && (i = ft(this.source, "progress")), i >= 100 && (this.done = !0), i === this.last ? this.sinceLastUpdate += n : (this.sinceLastUpdate && (this.rate = (i - this.last) / this.sinceLastUpdate), this.catchup = (i - this.progress) / t.catchupTime, this.sinceLastUpdate = 0, this.last = i), i > this.progress && (this.progress += this.catchup * n), r = 1 - Math.pow(this.progress / 100, t.easeFactor), this.progress += r * this.rate * n, this.progress = Math.min(this.lastProgress + t.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
	}, n
    }();
    e = null;
    h = null;
    r = null;
    ot = null;
    o = null;
    v = null;
    n.running = !1;
    ut = function () {
	if (t.restartOnPushState)
	    return n.restart()
    };
    null != window.history.pushState && (fi = window.history.pushState, window.history.pushState = function () {
	return ut(), fi.apply(window.history, arguments)
    });
    null != window.history.replaceState && (ei = window.history.replaceState, window.history.replaceState = function () {
	return ut(), ei.apply(window.history, arguments)
    });
    kt = {ajax: nt, elements: at, document: lt, eventLag: yt};
    (ii = function () {
	var u, f, o, l, a, s, v, c;
	for (n.sources = e = [], s = ["ajax", "elements", "document", "eventLag"], f = 0, l = s.length; l > f; f++)
	    u = s[f], t[u] !== !1 && e.push(new kt[u](t[u]));
	for (c = null != (v = t.extraSources)?v:[], o = 0, a = c.length; a > o; o++)
	    i = c[o], e.push(new i(t));
	return n.bar = r = new ct, h = [], ot = new tt
    })();
    n.stop = function () {
	return n.trigger("stop"), n.running = !1, r.destroy(), v = !0, null != o && ("function" == typeof y && y(o), o = null), ii()
    };
    n.restart = function () {
	return n.trigger("restart"), n.stop(), n.start()
    };
    n.go = function () {
	var f;
	return n.running = !0, r.render(), f = u(), v = !1, o = ri(function (o, s) {
	    var nt, p, w, it, b, c, l, et, a, y, k, d, g, rt, ut, ft;
	    for (et = 100 - r.progress, p = k = 0, w = !0, c = d = 0, rt = e.length; rt > d; c = ++d)
		for (i = e[c], y = null != h[c]?h[c]:h[c] = [], b = null != (ft = i.elements)?ft:[i], l = g = 0, ut = b.length; ut > g; l = ++g)
		    it = b[l], a = null != y[l] ? y[l] : y[l] = new tt(it), w &= a.done, a.done || (p++, k += a.tick(o));
	    return nt = k / p, r.update(ot.tick(o, nt)), r.done() || w || v ? (r.update(100), n.trigger("done"), setTimeout(function () {
		return r.finish(), n.running = !1, n.trigger("hide")
	    }, Math.max(t.ghostTime, Math.max(t.minTime - (u() - f), 0)))) : s()
	})
    };
    n.start = function (i) {
	s(t, i);
	n.running = !0;
	try {
	    r.render()
	} catch (u) {
	    a = u
	}
	return document.querySelector(".pace") ? (n.trigger("start"), n.go()) : setTimeout(n.start, 50)
    };
    "function" == typeof define && define.amd ? define(function () {
	return n
    }) : "object" == typeof exports ? module.exports = n : t.startOnPageLoad && n.start()
}.call(this), function () {
    var n, f, t, i, r, u = function (n, t) {
	return function () {
	    return n.apply(t, arguments)
	}
    }, e = [].indexOf || function (n) {
	for (var t = 0, i = this.length; i > t; t++)
	    if (t in this && this[t] === n)
		return t;
	return-1
    };
    f = function () {
	function n() {
	}
	return n.prototype.extend = function (n, t) {
	    var i, r;
	    for (i in t)
		r = t[i], null == n[i] && (n[i] = r);
	    return n
	}, n.prototype.isMobile = function (n) {
	    return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
	}, n.prototype.addEvent = function (n, t, i) {
	    return null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
	}, n.prototype.removeEvent = function (n, t, i) {
	    return null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
	}, n.prototype.innerHeight = function () {
	    return"innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
	}, n
    }();
    t = this.WeakMap || this.MozWeakMap || (t = function () {
	function n() {
	    this.keys = [];
	    this.values = []
	}
	return n.prototype.get = function (n) {
	    var t, u, i, f, r;
	    for (r = this.keys, t = i = 0, f = r.length; f > i; t = ++i)
		if (u = r[t], u === n)
		    return this.values[t]
	}, n.prototype.set = function (n, t) {
	    var i, f, r, e, u;
	    for (u = this.keys, i = r = 0, e = u.length; e > r; i = ++r)
		if (f = u[i], f === n)
		    return void(this.values[i] = t);
	    return this.keys.push(n), this.values.push(t)
	}, n
    }());
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function () {
	function n() {
	    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
	    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
	}
	return n.notSupported = !0, n.prototype.observe = function () {
	}, n
    }());
    i = this.getComputedStyle || function (n) {
	return this.getPropertyValue = function (t) {
	    var i;
	    return"float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function (n, t) {
		return t.toUpperCase()
	    }), (null != (i = n.currentStyle) ? i[t] : void 0) || null
	}, this
    };
    r = /(\-([a-z]){1})/g;
    this.WOW = function () {
	function r(n) {
	    null == n && (n = {});
	    this.scrollCallback = u(this.scrollCallback, this);
	    this.scrollHandler = u(this.scrollHandler, this);
	    this.start = u(this.start, this);
	    this.scrolled = !0;
	    this.config = this.util().extend(n, this.defaults);
	    this.animationNameCache = new t
	}
	return r.prototype.defaults = {boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0}, r.prototype.init = function () {
	    var n;
	    return this.element = window.document.documentElement, "interactive" === (n = document.readyState) || "complete" === n ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
	}, r.prototype.start = function () {
	    var t, i, u, r;
	    if (this.stopped = !1, this.boxes = function () {
		var n, u, i, r;
		for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], n = 0, u = i.length; u > n; n++)
		    t = i[n], r.push(t);
		return r
	    }.call(this), this.all = function () {
		var n, u, i, r;
		for (i = this.boxes, r = [], n = 0, u = i.length; u > n; n++)
		    t = i[n], r.push(t);
		return r
	    }.call(this), this.boxes.length)
		if (this.disabled())
		    this.resetStyle();
		else
		    for (r = this.boxes, i = 0, u = r.length; u > i; i++)
			t = r[i], this.applyStyle(t, !0);
	    return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new n(function (n) {
		return function (t) {
		    var u, f, i, e, r;
		    for (r = [], i = 0, e = t.length; e > i; i++)
			f = t[i], r.push(function () {
			    var n, r, t, i;
			    for (t = f.addedNodes || [], i = [], n = 0, r = t.length; r > n; n++)
				u = t[n], i.push(this.doSync(u));
			    return i
			}.call(n));
		    return r
		}
	    }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
	}, r.prototype.stop = function () {
	    return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
	}, r.prototype.sync = function () {
	    if (n.notSupported)
		return this.doSync(this.element)
	}, r.prototype.doSync = function (n) {
	    var t, i, f, u, r;
	    if (null == n && (n = this.element), 1 === n.nodeType) {
		for (n = n.parentNode || n, u = n.querySelectorAll("." + this.config.boxClass), r = [], i = 0, f = u.length; f > i; i++)
		    t = u[i], e.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
		return r
	    }
	}, r.prototype.show = function (n) {
	    return this.applyStyle(n), n.className = "" + n.className + " " + this.config.animateClass
	}, r.prototype.applyStyle = function (n, t) {
	    var i, r, u;
	    return r = n.getAttribute("data-wow-duration"), i = n.getAttribute("data-wow-delay"), u = n.getAttribute("data-wow-iteration"), this.animate(function (f) {
		return function () {
		    return f.customStyle(n, t, r, i, u)
		}
	    }(this))
	}, r.prototype.animate = function () {
	    return"requestAnimationFrame"in window ? function (n) {
		return window.requestAnimationFrame(n)
	    } : function (n) {
		return n()
	    }
	}(), r.prototype.resetStyle = function () {
	    var r, n, u, t, i;
	    for (t = this.boxes, i = [], n = 0, u = t.length; u > n; n++)
		r = t[n], i.push(r.style.visibility = "visible");
	    return i
	}, r.prototype.customStyle = function (n, t, i, r, u) {
	    return t && this.cacheAnimationName(n), n.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(n.style, {animationDuration: i}), r && this.vendorSet(n.style, {animationDelay: r}), u && this.vendorSet(n.style, {animationIterationCount: u}), this.vendorSet(n.style, {animationName: t ? "none" : this.cachedAnimationName(n)}), n
	}, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (n, t) {
	    var i, r, u, f = [];
	    for (i in t)
		r = t[i], n["" + i] = r, f.push(function () {
		    var t, o, f, e;
		    for (f = this.vendors, e = [], t = 0, o = f.length; o > t; t++)
			u = f[t], e.push(n["" + u + i.charAt(0).toUpperCase() + i.substr(1)] = r);
		    return e
		}.call(this));
	    return f
	}, r.prototype.vendorCSS = function (n, t) {
	    var r, f, o, u, s, e;
	    for (f = i(n), r = f.getPropertyCSSValue(t), e = this.vendors, u = 0, s = e.length; s > u; u++)
		o = e[u], r = r || f.getPropertyCSSValue("-" + o + "-" + t);
	    return r
	}, r.prototype.animationName = function (n) {
	    var t;
	    try {
		t = this.vendorCSS(n, "animation-name").cssText
	    } catch (r) {
		t = i(n).getPropertyValue("animation-name")
	    }
	    return"none" === t ? "" : t
	}, r.prototype.cacheAnimationName = function (n) {
	    return this.animationNameCache.set(n, this.animationName(n))
	}, r.prototype.cachedAnimationName = function (n) {
	    return this.animationNameCache.get(n)
	}, r.prototype.scrollHandler = function () {
	    return this.scrolled = !0
	}, r.prototype.scrollCallback = function () {
	    var n;
	    if (this.scrolled && !(this.scrolled = !1, this.boxes = function () {
		var t, u, i, r;
		for (i = this.boxes, r = [], t = 0, u = i.length; u > t; t++)
		    n = i[t], n && (this.isVisible(n) ? this.show(n) : r.push(n));
		return r
	    }.call(this), this.boxes.length || this.config.live))
		return this.stop()
	}, r.prototype.offsetTop = function (n) {
	    for (var t; void 0 === n.offsetTop; )
		n = n.parentNode;
	    for (t = n.offsetTop; n = n.offsetParent; )
		t += n.offsetTop;
	    return t
	}, r.prototype.isVisible = function (n) {
	    var r, u, t, f, i;
	    return u = n.getAttribute("data-wow-offset") || this.config.offset, i = window.pageYOffset, f = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - u, t = this.offsetTop(n), r = t + n.clientHeight, f >= t && r >= i
	}, r.prototype.util = function () {
	    return null != this._util ? this._util : this._util = new f
	}, r.prototype.disabled = function () {
	    return!this.config.mobile && this.util().isMobile(navigator.userAgent)
	}, r
    }()
}.call(this)