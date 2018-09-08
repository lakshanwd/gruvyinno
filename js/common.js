if (!function (n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
	if (!n.document)
	    throw new Error("jQuery requires a window with a document");
	return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function (n, t) {
    function ui(n) {
	var t = n.length, r = i.type(n);
	return"function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }
    function fi(n, t, r) {
	if (i.isFunction(t))
	    return i.grep(n, function (n, i) {
		return!!t.call(n, i, n) !== r
	    });
	if (t.nodeType)
	    return i.grep(n, function (n) {
		return n === t !== r
	    });
	if ("string" == typeof t) {
	    if (ef.test(t))
		return i.filter(t, n, r);
	    t = i.filter(t, n)
	}
	return i.grep(n, function (n) {
	    return et.call(t, n) >= 0 !== r
	})
    }
    function ur(n, t) {
	while ((n = n[t]) && 1 !== n.nodeType)
	    ;
	return n
    }
    function of(n) {
	var t = ei[n] = {};
	return i.each(n.match(c) || [], function (n, i) {
	    t[i] = !0
	}), t
    }
    function ct() {
	u.removeEventListener("DOMContentLoaded", ct, !1);
	n.removeEventListener("load", ct, !1);
	i.ready()
    }
    function p() {
	Object.defineProperty(this.cache = {}, 0, {get: function () {
		return{}
	    }});
	this.expando = i.expando + Math.random()
    }
    function fr(n, t, r) {
	var u;
	if (void 0 === r && 1 === n.nodeType)
	    if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
		try {
		    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
		} catch (f) {
		}
		e.set(n, t, r)
	    } else
		r = void 0;
	return r
    }
    function at() {
	return!0
    }
    function g() {
	return!1
    }
    function hr() {
	try {
	    return u.activeElement
	} catch (n) {
	}
    }
    function vr(n, t) {
	return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function bf(n) {
	return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }
    function kf(n) {
	var t = pf.exec(n.type);
	return t ? n.type = t[1] : n.removeAttribute("type"), n
    }
    function oi(n, t) {
	for (var i = 0, u = n.length; u > i; i++)
	    r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function yr(n, t) {
	var u, c, f, s, h, l, a, o;
	if (1 === t.nodeType) {
	    if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
		delete h.handle;
		h.events = {};
		for (f in o)
		    for (u = 0, c = o[f].length; c > u; u++)
			i.event.add(t, f, o[f][u])
	    }
	    e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
	}
    }
    function o(n, t) {
	var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
	return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function df(n, t) {
	var i = t.nodeName.toLowerCase();
	"input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
    }
    function pr(t, r) {
	var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
	return u.detach(), e
    }
    function hi(n) {
	var r = u, t = si[n];
	return t || (t = pr(n, r), "none" !== t && t || (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = vt[0].contentDocument, r.write(), r.close(), t = pr(n, r), vt.detach()), si[n] = t), t
    }
    function rt(n, t, r) {
	var e, o, s, u, f = n.style;
	return r = r || yt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), ci.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u
    }
    function br(n, t) {
	return{get: function () {
		return n() ? void delete this.get : (this.get = t).apply(this, arguments)
	    }}
    }
    function gr(n, t) {
	if (t in n)
	    return t;
	for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--; )
	    if (t = dr[i] + r, t in n)
		return t;
	return u
    }
    function nu(n, t, i) {
	var r = ne.exec(t);
	return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function tu(n, t, r, u, f) {
	for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
	    "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
	return o
    }
    function iu(n, t, r) {
	var o = !0, u = "width" === t ? n.offsetWidth : n.offsetHeight, e = yt(n), s = "border-box" === i.css(n, "boxSizing", !1, e);
	if (0 >= u || null == u) {
	    if (u = rt(n, t, e), (0 > u || null == u) && (u = n.style[t]), ci.test(u))
		return u;
	    o = s && (f.boxSizingReliable() || u === n.style[t]);
	    u = parseFloat(u) || 0
	}
	return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }
    function ru(n, t) {
	for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++)
	    u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && it(u) && (o[f] = r.access(u, "olddisplay", hi(u.nodeName)))) : (s = it(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
	for (f = 0; h > f; f++)
	    u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
	return n
    }
    function s(n, t, i, r, u) {
	return new s.prototype.init(n, t, i, r, u)
    }
    function fu() {
	return setTimeout(function () {
	    nt = void 0
	}), nt = i.now()
    }
    function bt(n, t) {
	var r, u = 0, i = {height: n};
	for (t = t?1:0; 4 > u; u += 2 - t)
	    r = w[u], i["margin" + r] = i["padding" + r] = n;
	return t && (i.opacity = i.width = n), i
    }
    function eu(n, t, i) {
	for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length; e > r; r++)
	    if (u = f[r].call(i, t, n))
		return u
    }
    function fe(n, t, u) {
	var f, a, p, v, o, w, h, b, l = this, y = {}, s = n.style, c = n.nodeType && it(n), e = r.get(n, "fxshow");
	u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function () {
	    o.unqueued || w()
	}), o.unqueued++, l.always(function () {
	    l.always(function () {
		o.unqueued--;
		i.queue(n, "fx").length || o.empty.fire()
	    })
	}));
	1 === n.nodeType && ("height"in t || "width"in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || hi(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
	u.overflow && (s.overflow = "hidden", l.always(function () {
	    s.overflow = u.overflow[0];
	    s.overflowX = u.overflow[1];
	    s.overflowY = u.overflow[2]
	}));
	for (f in t)
	    if (a = t[f], re.exec(a)) {
		if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
		    if ("show" !== a || !e || void 0 === e[f])
			continue;
		    c = !0
		}
		y[f] = e && e[f] || i.style(n, f)
	    } else
		h = void 0;
	if (i.isEmptyObject(y))
	    "inline" === ("none" === h ? hi(n.nodeName) : h) && (s.display = h);
	else {
	    e ? "hidden"in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
	    p && (e.hidden = !c);
	    c ? i(n).show() : l.done(function () {
		i(n).hide()
	    });
	    l.done(function () {
		var t;
		r.remove(n, "fxshow");
		for (t in y)
		    i.style(n, t, y[t])
	    });
	    for (f in y)
		v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
	}
    }
    function ee(n, t) {
	var r, f, e, u, o;
	for (r in n)
	    if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand"in o) {
		u = o.expand(u);
		delete n[f];
		for (r in u)
		    r in n || (n[r] = u[r], t[r] = e)
	    } else
		t[f] = e
    }
    function ou(n, t, r) {
	var h, e, o = 0, l = wt.length, f = i.Deferred().always(function () {
	    delete c.elem
	}), c = function () {
	    if (e)
		return!1;
	    for (var s = nt || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
		u.tweens[r].run(i);
	    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
	}, u = f.promise({elem: n, props: i.extend({}, t), opts: i.extend(!0, {specialEasing: {}}, r), originalProperties: t, originalOptions: r, startTime: nt || fu(), duration: r.duration, tweens: [], createTween: function (t, r) {
		var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
		return u.tweens.push(f), f
	    }, stop: function (t) {
		var i = 0, r = t ? u.tweens.length : 0;
		if (e)
		    return this;
		for (e = !0; r > i; i++)
		    u.tweens[i].run(1);
		return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
	    }}), s = u.props;
	for (ee(s, u.opts.specialEasing); l > o; o++)
	    if (h = wt[o].call(u, n, s, u.opts))
		return h;
	return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {elem: n, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function pu(n) {
	return function (t, r) {
	    "string" != typeof t && (r = t, t = "*");
	    var u, f = 0, e = t.toLowerCase().match(c) || [];
	    if (i.isFunction(r))
		while (u = e[f++])
		    "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
	}
    }
    function wu(n, t, r, u) {
	function e(s) {
	    var h;
	    return f[s] = !0, i.each(n[s] || [], function (n, i) {
		var s = i(t, r, u);
		return"string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
	    }), h
	}
	var f = {}, o = n === li;
	return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ai(n, t) {
	var r, u, f = i.ajaxSettings.flatOptions || {};
	for (r in t)
	    void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
	return u && i.extend(!0, n, u), n
    }
    function ae(n, t, i) {
	for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
	    r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
	if (e)
	    for (u in s)
		if (s[u] && s[u].test(e)) {
		    r.unshift(u);
		    break
		}
	if (r[0]in i)
	    f = r[0];
	else {
	    for (u in i) {
		if (!r[0] || n.converters[u + " " + r[0]]) {
		    f = u;
		    break
		}
		o || (o = u)
	    }
	    f = f || o
	}
	if (f)
	    return(f !== r[0] && r.unshift(f), i[f])
    }
    function ve(n, t, i, r) {
	var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
	if (c[1])
	    for (f in n.converters)
		o[f.toLowerCase()] = n.converters[f];
	for (u = c.shift(); u; )
	    if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
		if ("*" === u)
		    u = e;
		else if ("*" !== e && e !== u) {
		    if (f = o[e + " " + u] || o["* " + u], !f)
			for (h in o)
			    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
				f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
				break
			    }
		    if (f !== !0)
			if (f && n.throws)
			    t = f(t);
			else
			    try {
				t = f(t)
			    } catch (l) {
				return{state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u}
			    }
		}
	return{state: "success", data: t}
    }
    function vi(n, t, r, u) {
	var f;
	if (i.isArray(t))
	    i.each(t, function (t, i) {
		r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
	    });
	else if (r || "object" !== i.type(t))
	    u(n, t);
	else
	    for (f in t)
		vi(n + "[" + f + "]", t[f], r, u)
    }
    function ku(n) {
	return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
    }
    var k = [], a = k.slice, bi = k.concat, ii = k.push, et = k.indexOf, ot = {}, nf = ot.toString, ri = ot.hasOwnProperty, f = {}, u = n.document, ki = "2.1.1", i = function (n, t) {
	return new i.fn.init(n, t)
    }, tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rf = /^-ms-/, uf = /-([\da-z])/gi, ff = function (n, t) {
	return t.toUpperCase()
    }, y, st, nr, tr, ir, rr, c, ei, ht, l, d, vt, si, oe, su, tt, hu, kt, cu, dt, gt, yi, ti, pi, wi, du, gu;
    i.fn = i.prototype = {jquery: ki, constructor: i, selector: "", length: 0, toArray: function () {
	    return a.call(this)
	}, get: function (n) {
	    return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
	}, pushStack: function (n) {
	    var t = i.merge(this.constructor(), n);
	    return t.prevObject = this, t.context = this.context, t
	}, each: function (n, t) {
	    return i.each(this, n, t)
	}, map: function (n) {
	    return this.pushStack(i.map(this, function (t, i) {
		return n.call(t, i, t)
	    }))
	}, slice: function () {
	    return this.pushStack(a.apply(this, arguments))
	}, first: function () {
	    return this.eq(0)
	}, last: function () {
	    return this.eq(-1)
	}, eq: function (n) {
	    var i = this.length, t = +n + (0 > n ? i : 0);
	    return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
	}, end: function () {
	    return this.prevObject || this.constructor(null)
	}, push: ii, sort: k.sort, splice: k.splice};
    i.extend = i.fn.extend = function () {
	var e, f, r, t, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
	for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
	    if (null != (e = arguments[u]))
		for (f in e)
		    r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
	return n
    };
    i.extend({expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (n) {
	    throw new Error(n);
	}, noop: function () {
	}, isFunction: function (n) {
	    return"function" === i.type(n)
	}, isArray: Array.isArray, isWindow: function (n) {
	    return null != n && n === n.window
	}, isNumeric: function (n) {
	    return!i.isArray(n) && n - parseFloat(n) >= 0
	}, isPlainObject: function (n) {
	    return"object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
	}, isEmptyObject: function (n) {
	    var t;
	    for (t in n)
		return!1;
	    return!0
	}, type: function (n) {
	    return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[nf.call(n)] || "object" : typeof n
	}, globalEval: function (n) {
	    var t, r = eval;
	    n = i.trim(n);
	    n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
	}, camelCase: function (n) {
	    return n.replace(rf, "ms-").replace(uf, ff)
	}, nodeName: function (n, t) {
	    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
	}, each: function (n, t, i) {
	    var u, r = 0, f = n.length, e = ui(n);
	    if (i) {
		if (e) {
		    for (; f > r; r++)
			if (u = t.apply(n[r], i), u === !1)
			    break
		} else
		    for (r in n)
			if (u = t.apply(n[r], i), u === !1)
			    break
	    } else if (e) {
		for (; f > r; r++)
		    if (u = t.call(n[r], r, n[r]), u === !1)
			break
	    } else
		for (r in n)
		    if (u = t.call(n[r], r, n[r]), u === !1)
			break;
	    return n
	}, trim: function (n) {
	    return null == n ? "" : (n + "").replace(tf, "")
	}, makeArray: function (n, t) {
	    var r = t || [];
	    return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)), r
	}, inArray: function (n, t, i) {
	    return null == t ? -1 : et.call(t, n, i)
	}, merge: function (n, t) {
	    for (var u = +t.length, i = 0, r = n.length; u > i; i++)
		n[r++] = t[i];
	    return n.length = r, n
	}, grep: function (n, t, i) {
	    for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
		u = !t(n[r], r), u !== o && f.push(n[r]);
	    return f
	}, map: function (n, t, i) {
	    var u, r = 0, e = n.length, o = ui(n), f = [];
	    if (o)
		for (; e > r; r++)
		    u = t(n[r], r, i), null != u && f.push(u);
	    else
		for (r in n)
		    u = t(n[r], r, i), null != u && f.push(u);
	    return bi.apply([], f)
	}, guid: 1, proxy: function (n, t) {
	    var u, f, r;
	    return"string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function () {
		return n.apply(t || this, f.concat(a.call(arguments)))
	    }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
	}, now: Date.now, support: f});
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (n, t) {
	ot["[object " + t + "]"] = t.toLowerCase()
    });
    y = function (n) {
	function r(n, t, i, r) {
	    var w, h, c, v, k, y, d, l, nt, g;
	    if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n)
		return i;
	    if (1 !== (v = t.nodeType) && 9 !== v)
		return[];
	    if (a && !r) {
		if (w = sr.exec(n))
		    if (c = w[1]) {
			if (9 === v) {
			    if (h = t.getElementById(c), !h || !h.parentNode)
				return i;
			    if (h.id === c)
				return i.push(h), i
			} else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c)
			    return i.push(h), i
		    } else {
			if (w[2])
			    return b.apply(i, t.getElementsByTagName(n)), i;
			if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName)
			    return b.apply(i, t.getElementsByClassName(c)), i
		    }
		if (u.qsa && (!o || !o.test(n))) {
		    if (l = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
			for (y = et(n), (d = t.getAttribute("id"))?l = d.replace(hr, "\\$&"):t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length; k--; )
			    y[k] = l + yt(y[k]);
			nt = gt.test(n) && ii(t.parentNode) || t;
			g = y.join(",")
		    }
		    if (g)
			try {
			    return b.apply(i, nt.querySelectorAll(g)), i
			} catch (tt) {
			} finally {
			    d || t.removeAttribute("id")
			}
		}
	    }
	    return si(n.replace(at, "$1"), t, i, r)
	}
	function ni() {
	    function n(r, u) {
		return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
	    }
	    var i = [];
	    return n
	}
	function h(n) {
	    return n[f] = !0, n
	}
	function c(n) {
	    var t = e.createElement("div");
	    try {
		return!!n(t)
	    } catch (i) {
		return!1
	    } finally {
		t.parentNode && t.parentNode.removeChild(t);
		t = null
	    }
	}
	function ti(n, i) {
	    for (var u = n.split("|"), r = n.length; r--; )
		t.attrHandle[u[r]] = i
	}
	function wi(n, t) {
	    var i = t && n, r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
	    if (r)
		return r;
	    if (i)
		while (i = i.nextSibling)
		    if (i === t)
			return-1;
	    return n ? 1 : -1
	}
	function cr(n) {
	    return function (t) {
		var i = t.nodeName.toLowerCase();
		return"input" === i && t.type === n
	    }
	}
	function lr(n) {
	    return function (t) {
		var i = t.nodeName.toLowerCase();
		return("input" === i || "button" === i) && t.type === n
	    }
	}
	function tt(n) {
	    return h(function (t) {
		return t = +t, h(function (i, r) {
		    for (var u, f = n([], i.length, t), e = f.length; e--; )
			i[u = f[e]] && (i[u] = !(r[u] = i[u]))
		})
	    })
	}
	function ii(n) {
	    return n && typeof n.getElementsByTagName !== ut && n
	}
	function bi() {
	}
	function yt(n) {
	    for (var t = 0, r = n.length, i = ""; r > t; t++)
		i += n[t].value;
	    return i
	}
	function ri(n, t, i) {
	    var r = t.dir, u = i && "parentNode" === r, e = ki++;
	    return t.first ? function (t, i, f) {
		while (t = t[r])
		    if (1 === t.nodeType || u)
			return n(t, i, f)
	    } : function (t, i, o) {
		var s, h, c = [v, e];
		if (o) {
		    while (t = t[r])
			if ((1 === t.nodeType || u) && n(t, i, o))
			    return!0
		} else
		    while (t = t[r])
			if (1 === t.nodeType || u) {
			    if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e)
				return c[2] = s[2];
			    if (h[r] = c, c[2] = n(t, i, o))
				return!0
			}
	    }
	}
	function ui(n) {
	    return n.length > 1 ? function (t, i, r) {
		for (var u = n.length; u--; )
		    if (!n[u](t, i, r))
			return!1;
		return!0
	    } : n[0]
	}
	function ar(n, t, i) {
	    for (var u = 0, f = t.length; f > u; u++)
		r(n, t[u], i);
	    return i
	}
	function pt(n, t, i, r, u) {
	    for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
		(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
	    return o
	}
	function fi(n, t, i, r, u, e) {
	    return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function (f, e, o, s) {
		var l, c, a, p = [], y = [], w = e.length, k = f || ar(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : pt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
		if (i && i(v, h, o, s), r)
		    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--; )
			(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
		if (f) {
		    if (u || n) {
			if (u) {
			    for (l = [], c = h.length; c--; )
				(a = h[c]) && l.push(v[c] = a);
			    u(null, h = [], l, s)
			}
			for (c = h.length; c--; )
			    (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
		    }
		} else
		    h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
	    })
	}
	function ei(n) {
	    for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function (n) {
		return n === s
	    }, c, !0), a = ri(function (n) {
		return nt.call(s, n) > -1
	    }, c, !0), e = [function (n, t, i) {
		    return!h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
		}]; o > i; i++)
		if (u = t.relative[n[i].type])
		    e = [ri(ui(e), u)];
		else {
		    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
			for (r = ++i; o > r; r++)
			    if (t.relative[n[r].type])
				break;
			return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({value: " " === n[i - 2].type ? "*" : ""})).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
		    }
		    e.push(u)
		}
	    return ui(e)
	}
	function vr(n, i) {
	    var u = i.length > 0, f = n.length > 0, o = function (o, s, h, c, l) {
		var y, d, w, k = 0, a = "0", g = o && [], p = [], nt = ct, tt = o || f && t.find.TAG("*", l), it = v += null == nt ? 1 : Math.random() || .1, rt = tt.length;
		for (l && (ct = s !== e && s); a !== rt && null != (y = tt[a]); a++) {
		    if (f && y) {
			for (d = 0; w = n[d++]; )
			    if (w(y, s, h)) {
				c.push(y);
				break
			    }
			l && (v = it)
		    }
		    u && ((y = !w && y) && k--, o && g.push(y))
		}
		if (k += a, u && a !== k) {
		    for (d = 0; w = i[d++]; )
			w(g, p, s, h);
		    if (o) {
			if (k > 0)
			    while (a--)
				g[a] || p[a] || (p[a] = gi.call(c));
			p = pt(p)
		    }
		    b.apply(c, p);
		    l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
		}
		return l && (v = it, ct = nt), g
	    };
	    return u ? h(o) : o
	}
	var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date, s = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), li = ni(), bt = function (n, t) {
	    return n === t && (rt = !0), 0
	}, ut = "undefined", ai = -2147483648, di = {}.hasOwnProperty, w = [], gi = w.pop, nr = w.push, b = w.push, vi = w.slice, nt = w.indexOf || function (n) {
	    for (var t = 0, i = this.length; i > t; t++)
		if (this[t] === n)
		    return t;
	    return-1
	}, kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", yi = ft.replace("w", "w#"), pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]", dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)", at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"), tr = new RegExp("^" + i + "*," + i + "*"), ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"), ur = new RegExp(dt), fr = new RegExp("^" + yi + "$"), vt = {ID: new RegExp("^#(" + ft + ")"), CLASS: new RegExp("^\\.(" + ft + ")"), TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"), ATTR: new RegExp("^" + pi), PSEUDO: new RegExp("^" + dt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"), bool: new RegExp("^(?:" + kt + ")$", "i"), needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")}, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, st = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g, k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"), d = function (n, t, i) {
	    var r = "0x" + t - 65536;
	    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
	};
	try {
	    b.apply(w = vi.call(s.childNodes), s.childNodes);
	    w[s.childNodes.length].nodeType
	} catch (yr) {
	    b = {apply: w.length ? function (n, t) {
		    nr.apply(n, vi.call(t))
		} : function (n, t) {
		    for (var i = n.length, r = 0; n[i++] = t[r++]; )
			;
		    n.length = i - 1
		}}
	}
	u = r.support = {};
	oi = r.isXML = function (n) {
	    var t = n && (n.ownerDocument || n).documentElement;
	    return t ? "HTML" !== t.nodeName : !1
	};
	p = r.setDocument = function (n) {
	    var v, r = n ? n.ownerDocument || n : s, h = r.defaultView;
	    return r !== e && 9 === r.nodeType && r.documentElement ? (e = r, l = r.documentElement, a = !oi(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function () {
		p()
	    }, !1) : h.attachEvent && h.attachEvent("onunload", function () {
		p()
	    })), u.attributes = c(function (n) {
		return n.className = "i", !n.getAttribute("className")
	    }), u.getElementsByTagName = c(function (n) {
		return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
	    }), u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function (n) {
		return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
	    }), u.getById = c(function (n) {
		return l.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
	    }), u.getById ? (t.find.ID = function (n, t) {
		if (typeof t.getElementById !== ut && a) {
		    var i = t.getElementById(n);
		    return i && i.parentNode ? [i] : []
		}
	    }, t.filter.ID = function (n) {
		var t = n.replace(k, d);
		return function (n) {
		    return n.getAttribute("id") === t
		}
	    }) : (delete t.find.ID, t.filter.ID = function (n) {
		var t = n.replace(k, d);
		return function (n) {
		    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
		    return i && i.value === t
		}
	    }), t.find.TAG = u.getElementsByTagName ? function (n, t) {
		if (typeof t.getElementsByTagName !== ut)
		    return t.getElementsByTagName(n)
	    } : function (n, t) {
		var i, r = [], f = 0, u = t.getElementsByTagName(n);
		if ("*" === n) {
		    while (i = u[f++])
			1 === i.nodeType && r.push(i);
		    return r
		}
		return u
	    }, t.find.CLASS = u.getElementsByClassName && function (n, t) {
		if (typeof t.getElementsByClassName !== ut && a)
		    return t.getElementsByClassName(n)
	    }, g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) && (c(function (n) {
		n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
		n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
		n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
		n.querySelectorAll(":checked").length || o.push(":checked")
	    }), c(function (n) {
		var t = r.createElement("input");
		t.setAttribute("type", "hidden");
		n.appendChild(t).setAttribute("name", "D");
		n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
		n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
		n.querySelectorAll("*,:x");
		o.push(",.*:")
	    })), (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function (n) {
		u.disconnectedMatch = lt.call(n, "div");
		lt.call(n, "[s!='']:x");
		g.push("!=", dt)
	    }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st.test(l.compareDocumentPosition), ot = v || st.test(l.contains) ? function (n, t) {
		var r = 9 === n.nodeType ? n.documentElement : n, i = t && t.parentNode;
		return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
	    } : function (n, t) {
		if (t)
		    while (t = t.parentNode)
			if (t === n)
			    return!0;
		return!1
	    }, bt = v ? function (n, t) {
		if (n === t)
		    return rt = !0, 0;
		var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
		return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
	    } : function (n, t) {
		if (n === t)
		    return rt = !0, 0;
		var i, u = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t];
		if (!o || !h)
		    return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
		if (o === h)
		    return wi(n, t);
		for (i = n; i = i.parentNode; )
		    f.unshift(i);
		for (i = t; i = i.parentNode; )
		    e.unshift(i);
		while (f[u] === e[u])
		    u++;
		return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
	    }, r) : e
	};
	r.matches = function (n, t) {
	    return r(n, null, null, t)
	};
	r.matchesSelector = function (n, t) {
	    if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), !(!u.matchesSelector || !a || g && g.test(t) || o && o.test(t)))
		try {
		    var i = lt.call(n, t);
		    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType)
			return i
		} catch (f) {
		}
	    return r(t, e, null, [n]).length > 0
	};
	r.contains = function (n, t) {
	    return(n.ownerDocument || n) !== e && p(n), ot(n, t)
	};
	r.attr = function (n, i) {
	    (n.ownerDocument || n) !== e && p(n);
	    var f = t.attrHandle[i.toLowerCase()], r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : void 0;
	    return void 0 !== r ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
	};
	r.error = function (n) {
	    throw new Error("Syntax error, unrecognized expression: " + n);
	};
	r.uniqueSort = function (n) {
	    var r, f = [], t = 0, i = 0;
	    if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
		while (r = n[i++])
		    r === n[i] && (t = f.push(i));
		while (t--)
		    n.splice(f[t], 1)
	    }
	    return y = null, n
	};
	ht = r.getText = function (n) {
	    var r, i = "", u = 0, t = n.nodeType;
	    if (t) {
		if (1 === t || 9 === t || 11 === t) {
		    if ("string" == typeof n.textContent)
			return n.textContent;
		    for (n = n.firstChild; n; n = n.nextSibling)
			i += ht(n)
		} else if (3 === t || 4 === t)
		    return n.nodeValue
	    } else
		while (r = n[u++])
		    i += ht(r);
	    return i
	};
	t = r.selectors = {cacheLength: 50, createPseudo: h, match: vt, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (n) {
		    return n[1] = n[1].replace(k, d), n[3] = (n[3] || n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
		}, CHILD: function (n) {
		    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
		}, PSEUDO: function (n) {
		    var i, t = !n[6] && n[2];
		    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
		}}, filter: {TAG: function (n) {
		    var t = n.replace(k, d).toLowerCase();
		    return"*" === n ? function () {
			return!0
		    } : function (n) {
			return n.nodeName && n.nodeName.toLowerCase() === t
		    }
		}, CLASS: function (n) {
		    var t = hi[n + " "];
		    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function (n) {
			return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
		    })
		}, ATTR: function (n, t, i) {
		    return function (u) {
			var f = r.attr(u, n);
			return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
		    }
		}, CHILD: function (n, t, i, r, u) {
		    var s = "nth" !== n.slice(0, 3), o = "last" !== n.slice(-4), e = "of-type" === t;
		    return 1 === r && 0 === u ? function (n) {
			return!!n.parentNode
		    } : function (t, i, h) {
			var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
			if (p) {
			    if (s) {
				while (b) {
				    for (c = t; c = c[b]; )
					if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
					    return!1;
				    w = b = "only" === n && !w && "nextSibling"
				}
				return!0
			    }
			    if (w = [o ? p.firstChild : p.lastChild], o && d) {
				for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); )
				    if (1 === c.nodeType && ++l && c === t) {
					k[n] = [v, y, l];
					break
				    }
			    } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
				l = a[1];
			    else
				while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
				    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t))
					break;
			    return l -= u, l === r || l % r == 0 && l / r >= 0
			}
		    }
		}, PSEUDO: function (n, i) {
		    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
		    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function (n, t) {
			for (var r, f = u(n, i), e = f.length; e--; )
			    r = nt.call(n, f[e]), n[r] = !(t[r] = f[e])
		    }) : function (n) {
			return u(n, 0, e)
		    }) : u
		}}, pseudos: {not: h(function (n) {
		    var i = [], r = [], t = wt(n.replace(at, "$1"));
		    return t[f] ? h(function (n, i, r, u) {
			for (var e, o = t(n, null, u, []), f = n.length; f--; )
			    (e = o[f]) && (n[f] = !(i[f] = e))
		    }) : function (n, u, f) {
			return i[0] = n, t(i, null, f, r), !r.pop()
		    }
		}), has: h(function (n) {
		    return function (t) {
			return r(n, t).length > 0
		    }
		}), contains: h(function (n) {
		    return function (t) {
			return(t.textContent || t.innerText || ht(t)).indexOf(n) > -1
		    }
		}), lang: h(function (n) {
		    return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(), function (t) {
			var i;
			do
			    if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
				return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
			while ((t = t.parentNode) && 1 === t.nodeType);
			return!1
		    }
		}), target: function (t) {
		    var i = n.location && n.location.hash;
		    return i && i.slice(1) === t.id
		}, root: function (n) {
		    return n === l
		}, focus: function (n) {
		    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
		}, enabled: function (n) {
		    return n.disabled === !1
		}, disabled: function (n) {
		    return n.disabled === !0
		}, checked: function (n) {
		    var t = n.nodeName.toLowerCase();
		    return"input" === t && !!n.checked || "option" === t && !!n.selected
		}, selected: function (n) {
		    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
		}, empty: function (n) {
		    for (n = n.firstChild; n; n = n.nextSibling)
			if (n.nodeType < 6)
			    return!1;
		    return!0
		}, parent: function (n) {
		    return!t.pseudos.empty(n)
		}, header: function (n) {
		    return or.test(n.nodeName)
		}, input: function (n) {
		    return er.test(n.nodeName)
		}, button: function (n) {
		    var t = n.nodeName.toLowerCase();
		    return"input" === t && "button" === n.type || "button" === t
		}, text: function (n) {
		    var t;
		    return"input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
		}, first: tt(function () {
		    return[0]
		}), last: tt(function (n, t) {
		    return[t - 1]
		}), eq: tt(function (n, t, i) {
		    return[0 > i ? i + t : i]
		}), even: tt(function (n, t) {
		    for (var i = 0; t > i; i += 2)
			n.push(i);
		    return n
		}), odd: tt(function (n, t) {
		    for (var i = 1; t > i; i += 2)
			n.push(i);
		    return n
		}), lt: tt(function (n, t, i) {
		    for (var r = 0 > i ? i + t : i; --r >= 0; )
			n.push(r);
		    return n
		}), gt: tt(function (n, t, i) {
		    for (var r = 0 > i ? i + t : i; ++r < t; )
			n.push(r);
		    return n
		})}};
	t.pseudos.nth = t.pseudos.eq;
	for (it in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
	    t.pseudos[it] = cr(it);
	for (it in{submit:!0, reset:!0})
	    t.pseudos[it] = lr(it);
	return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, et = r.tokenize = function (n, i) {
	    var e, f, s, o, u, h, c, l = ci[n + " "];
	    if (l)
		return i ? 0 : l.slice(0);
	    for (u = n, h = [], c = t.preFilter; u; ) {
		(!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
		e = !1;
		(f = ir.exec(u)) && (e = f.shift(), s.push({value: e, type: f[0].replace(at, " ")}), u = u.slice(e.length));
		for (o in t.filter)
		    (f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({value: e, type: o, matches: f}), u = u.slice(e.length));
		if (!e)
		    break
	    }
	    return i ? u.length : u ? r.error(n) : ci(n, h).slice(0)
	}, wt = r.compile = function (n, t) {
	    var r, u = [], e = [], i = li[n + " "];
	    if (!i) {
		for (t || (t = et(n)), r = t.length; r--; )
		    i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
		i = li(n, vr(e, u));
		i.selector = n
	    }
	    return i
	}, si = r.select = function (n, i, r, f) {
	    var s, e, o, l, v, c = "function" == typeof n && n, h = !f && et(n = c.selector || n);
	    if (r = r || [], 1 === h.length) {
		if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && a && t.relative[e[1].type]) {
		    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i)
			return r;
		    c && (i = i.parentNode);
		    n = n.slice(e.shift().value.length)
		}
		for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
		    if (o = e[s], t.relative[l = o.type])
			break;
		    if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
			if (e.splice(s, 1), n = f.length && yt(e), !n)
			    return b.apply(r, f), r;
			break
		    }
		}
	    }
	    return(c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i), r
	}, u.sortStable = f.split("").sort(bt).join("") === f, u.detectDuplicates = !!rt, p(), u.sortDetached = c(function (n) {
	    return 1 & n.compareDocumentPosition(e.createElement("div"))
	}), c(function (n) {
	    return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
	}) || ti("type|href|height|width", function (n, t, i) {
	    if (!i)
		return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
	}), u.attributes && c(function (n) {
	    return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
	}) || ti("value", function (n, t, i) {
	    if (!i && "input" === n.nodeName.toLowerCase())
		return n.defaultValue
	}), c(function (n) {
	    return null == n.getAttribute("disabled")
	}) || ti(kt, function (n, t, i) {
	    var r;
	    if (!i)
		return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
	}), r
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    var di = i.expr.match.needsContext, gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ef = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
	var u = t[0];
	return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
	    return 1 === n.nodeType
	}))
    };
    i.fn.extend({find: function (n) {
	    var t, u = this.length, r = [], f = this;
	    if ("string" != typeof n)
		return this.pushStack(i(n).filter(function () {
		    for (t = 0; u > t; t++)
			if (i.contains(f[t], this))
			    return!0
		}));
	    for (t = 0; u > t; t++)
		i.find(n, f[t], r);
	    return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
	}, filter: function (n) {
	    return this.pushStack(fi(this, n || [], !1))
	}, not: function (n) {
	    return this.pushStack(fi(this, n || [], !0))
	}, is: function (n) {
	    return!!fi(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length
	}});
    nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    tr = i.fn.init = function (n, t) {
	var r, f;
	if (!n)
	    return this;
	if ("string" == typeof n) {
	    if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n), !r || !r[1] && t)
		return!t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n);
	    if (r[1]) {
		if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
		    for (r in t)
			i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
		return this
	    }
	    return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this
	}
	return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof st.ready ? st.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    tr.prototype = i.fn;
    st = i(u);
    ir = /^(?:parents|prev(?:Until|All))/;
    rr = {children: !0, contents: !0, next: !0, prev: !0};
    i.extend({dir: function (n, t, r) {
	    for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
		if (1 === n.nodeType) {
		    if (f && i(n).is(r))
			break;
		    u.push(n)
		}
	    return u
	}, sibling: function (n, t) {
	    for (var i = []; n; n = n.nextSibling)
		1 === n.nodeType && n !== t && i.push(n);
	    return i
	}});
    i.fn.extend({has: function (n) {
	    var t = i(n, this), r = t.length;
	    return this.filter(function () {
		for (var n = 0; r > n; n++)
		    if (i.contains(this, t[n]))
			return!0
	    })
	}, closest: function (n, t) {
	    for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
		for (r = this[f]; r && r !== t; r = r.parentNode)
		    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
			u.push(r);
			break
		    }
	    return this.pushStack(u.length > 1 ? i.unique(u) : u)
	}, index: function (n) {
	    return n ? "string" == typeof n ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
	}, add: function (n, t) {
	    return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
	}, addBack: function (n) {
	    return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
	}});
    i.each({parent: function (n) {
	    var t = n.parentNode;
	    return t && 11 !== t.nodeType ? t : null
	}, parents: function (n) {
	    return i.dir(n, "parentNode")
	}, parentsUntil: function (n, t, r) {
	    return i.dir(n, "parentNode", r)
	}, next: function (n) {
	    return ur(n, "nextSibling")
	}, prev: function (n) {
	    return ur(n, "previousSibling")
	}, nextAll: function (n) {
	    return i.dir(n, "nextSibling")
	}, prevAll: function (n) {
	    return i.dir(n, "previousSibling")
	}, nextUntil: function (n, t, r) {
	    return i.dir(n, "nextSibling", r)
	}, prevUntil: function (n, t, r) {
	    return i.dir(n, "previousSibling", r)
	}, siblings: function (n) {
	    return i.sibling((n.parentNode || {}).firstChild, n)
	}, children: function (n) {
	    return i.sibling(n.firstChild)
	}, contents: function (n) {
	    return n.contentDocument || i.merge([], n.childNodes)
	}}, function (n, t) {
	i.fn[n] = function (r, u) {
	    var f = i.map(this, t, r);
	    return"Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f)
	}
    });
    c = /\S+/g;
    ei = {};
    i.Callbacks = function (n) {
	n = "string" == typeof n ? ei[n] || of(n) : i.extend({}, n);
	var u, h, o, c, f, e, t = [], r = !n.once && [], l = function (i) {
	    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
		if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
		    u = !1;
		    break
		}
	    o = !1;
	    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
	}, s = {add: function () {
		if (t) {
		    var r = t.length;
		    !function e(r) {
			i.each(r, function (r, u) {
			    var f = i.type(u);
			    "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
			})
		    }(arguments);
		    o ? f = t.length : u && (c = r, l(u))
		}
		return this
	    }, remove: function () {
		return t && i.each(arguments, function (n, r) {
		    for (var u; (u = i.inArray(r, t, u)) > - 1; )
			t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
		}), this
	    }, has: function (n) {
		return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
	    }, empty: function () {
		return t = [], f = 0, this
	    }, disable: function () {
		return t = r = u = void 0, this
	    }, disabled: function () {
		return!t
	    }, lock: function () {
		return r = void 0, u || s.disable(), this
	    }, locked: function () {
		return!r
	    }, fireWith: function (n, i) {
		return!t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
	    }, fire: function () {
		return s.fireWith(this, arguments), this
	    }, fired: function () {
		return!!h
	    }};
	return s
    };
    i.extend({Deferred: function (n) {
	    var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]], f = "pending", r = {state: function () {
		    return f
		}, always: function () {
		    return t.done(arguments).fail(arguments), this
		}, then: function () {
		    var n = arguments;
		    return i.Deferred(function (f) {
			i.each(u, function (u, e) {
			    var o = i.isFunction(n[u]) && n[u];
			    t[e[1]](function () {
				var n = o && o.apply(this, arguments);
				n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
			    })
			});
			n = null
		    }).promise()
		}, promise: function (n) {
		    return null != n ? i.extend(n, r) : r
		}}, t = {};
	    return r.pipe = r.then, i.each(u, function (n, i) {
		var e = i[2], o = i[3];
		r[i[1]] = e.add;
		o && e.add(function () {
		    f = o
		}, u[1 ^ n][2].disable, u[2][2].lock);
		t[i[0]] = function () {
		    return t[i[0] + "With"](this === t ? r : this, arguments), this
		};
		t[i[0] + "With"] = e.fireWith
	    }), r.promise(t), n && n.call(t, t), t
	}, when: function (n) {
	    var t = 0, u = a.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function (n, t, i) {
		return function (r) {
		    t[n] = this;
		    i[n] = arguments.length > 1 ? a.call(arguments) : r;
		    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
		}
	    }, o, c, s;
	    if (r > 1)
		for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)
		    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
	    return e || f.resolveWith(s, u), f.promise()
	}});
    i.fn.ready = function (n) {
	return i.ready.promise().done(n), this
    };
    i.extend({isReady: !1, readyWait: 1, holdReady: function (n) {
	    n ? i.readyWait++ : i.ready(!0)
	}, ready: function (n) {
	    (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (ht.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
	}});
    i.ready.promise = function (t) {
	return ht || (ht = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ct, !1), n.addEventListener("load", ct, !1))), ht.promise(t)
    };
    i.ready.promise();
    l = i.access = function (n, t, r, u, f, e, o) {
	var s = 0, c = n.length, h = null == r;
	if ("object" === i.type(r)) {
	    f = !0;
	    for (s in r)
		i.access(n, t, s, r[s], !0, e, o)
	} else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function (n, t, r) {
	    return h.call(i(n), r)
	})), t))
	    for (; c > s; s++)
		t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
	return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    i.acceptData = function (n) {
	return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    p.uid = 1;
    p.accepts = i.acceptData;
    p.prototype = {key: function (n) {
	    if (!p.accepts(n))
		return 0;
	    var r = {}, t = n[this.expando];
	    if (!t) {
		t = p.uid++;
		try {
		    r[this.expando] = {value: t};
		    Object.defineProperties(n, r)
		} catch (u) {
		    r[this.expando] = t;
		    i.extend(n, r)
		}
	    }
	    return this.cache[t] || (this.cache[t] = {}), t
	}, set: function (n, t, r) {
	    var f, e = this.key(n), u = this.cache[e];
	    if ("string" == typeof t)
		u[t] = r;
	    else if (i.isEmptyObject(u))
		i.extend(this.cache[e], t);
	    else
		for (f in t)
		    u[f] = t[f];
	    return u
	}, get: function (n, t) {
	    var i = this.cache[this.key(n)];
	    return void 0 === t ? i : i[t]
	}, access: function (n, t, r) {
	    var u;
	    return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
	}, remove: function (n, t) {
	    var u, r, f, o = this.key(n), e = this.cache[o];
	    if (void 0 === t)
		this.cache[o] = {};
	    else
		for (i.isArray(t)?r = t.concat(t.map(i.camelCase)):(f = i.camelCase(t), (t in e)?r = [t, f]:(r = f, r = (r in e)?[r]:r.match(c) || [])), u = r.length; u--; )
		    delete e[r[u]]
	}, hasData: function (n) {
	    return!i.isEmptyObject(this.cache[n[this.expando]] || {})
	}, discard: function (n) {
	    n[this.expando] && delete this.cache[n[this.expando]]
	}};
    var r = new p, e = new p, sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, hf = /([A-Z])/g;
    i.extend({hasData: function (n) {
	    return e.hasData(n) || r.hasData(n)
	}, data: function (n, t, i) {
	    return e.access(n, t, i)
	}, removeData: function (n, t) {
	    e.remove(n, t)
	}, _data: function (n, t, i) {
	    return r.access(n, t, i)
	}, _removeData: function (n, t) {
	    r.remove(n, t)
	}});
    i.fn.extend({data: function (n, t) {
	    var o, f, s, u = this[0], h = u && u.attributes;
	    if (void 0 === n) {
		if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
		    for (o = h.length; o--; )
			h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
		    r.set(u, "hasDataAttrs", !0)
		}
		return s
	    }
	    return"object" == typeof n ? this.each(function () {
		e.set(this, n)
	    }) : l(this, function (t) {
		var r, f = i.camelCase(n);
		if (u && void 0 === t) {
		    if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = fr(u, f, void 0), void 0 !== r))
			return r
		} else
		    this.each(function () {
			var i = e.get(this, f);
			e.set(this, f, t);
			-1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t)
		    })
	    }, null, t, arguments.length > 1, null, !0)
	}, removeData: function (n) {
	    return this.each(function () {
		e.remove(this, n)
	    })
	}});
    i.extend({queue: function (n, t, u) {
	    var f;
	    if (n)
		return(t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
	}, dequeue: function (n, t) {
	    t = t || "fx";
	    var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t), o = function () {
		i.dequeue(n, t)
	    };
	    "inprogress" === u && (u = r.shift(), e--);
	    u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
	    !e && f && f.empty.fire()
	}, _queueHooks: function (n, t) {
	    var u = t + "queueHooks";
	    return r.get(n, u) || r.access(n, u, {empty: i.Callbacks("once memory").add(function () {
		    r.remove(n, [t + "queue", u])
		})})
	}});
    i.fn.extend({queue: function (n, t) {
	    var r = 2;
	    return"string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
		var r = i.queue(this, n, t);
		i._queueHooks(this, n);
		"fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
	    })
	}, dequeue: function (n) {
	    return this.each(function () {
		i.dequeue(this, n)
	    })
	}, clearQueue: function (n) {
	    return this.queue(n || "fx", [])
	}, promise: function (n, t) {
	    var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function () {
		--e || o.resolveWith(f, [f])
	    };
	    for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--; )
		u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
	    return h(), o.promise(t)
	}});
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = ["Top", "Right", "Bottom", "Left"], it = function (n, t) {
	return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }, er = /^(?:checkbox|radio)$/i;
    !function () {
	var i = u.createDocumentFragment(), n = i.appendChild(u.createElement("div")), t = u.createElement("input");
	t.setAttribute("type", "radio");
	t.setAttribute("checked", "checked");
	t.setAttribute("name", "t");
	n.appendChild(t);
	f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
	n.innerHTML = "<textarea>x<\/textarea>";
	f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    d = "undefined";
    f.focusinBubbles = "onfocusin"in n;
    var cf = /^key/, lf = /^(?:mouse|pointer|contextmenu)|click/, or = /^(?:focusinfocus|focusoutblur)$/, sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {global: {}, add: function (n, t, u, f, e) {
	    var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
	    if (a)
		for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function (t) {
		    if (typeof i !== d && i.event.triggered !== t.type)
			return i.event.dispatch.apply(n, arguments)
		}), t = (t || "").match(c) || [""], b = t.length; b--; )
		    w = sr.exec(t[b]) || [], o = g = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({type: o, origType: g, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: k.join(".")}, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0)
	}, remove: function (n, t, u, f, e) {
	    var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
	    if (y && (v = y.events)) {
		for (t = (t || "").match(c) || [""], w = t.length; w--; )
		    if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
			for (l = i.event.special[o] || {}, o = (f?l.delegateType:l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--; )
			    s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
			k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
		    } else
			for (o in v)
			    i.event.remove(n, o + t[w], u, f, !0);
		i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
	    }
	}, trigger: function (t, f, e, o) {
	    var w, s, c, b, a, v, l, p = [e || u], h = ri.call(t, "type") ? t.type : t, y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
	    if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
		if (!o && !l.noBubble && !i.isWindow(e)) {
		    for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode)
			p.push(s), c = s;
		    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
		}
		for (w = 0; (s = p[w++]) && !t.isPropagationStopped(); )
		    t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
		return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
	    }
	}, dispatch: function (n) {
	    n = i.event.fix(n);
	    var o, s, e, u, t, h = [], c = a.call(arguments), l = (r.get(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
	    if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
		for (h = i.event.handlers.call(this, n, l), o = 0; (u = h[o++]) && !n.isPropagationStopped(); )
		    for (n.currentTarget = u.elem, s = 0; (t = u.handlers[s++]) && !n.isImmediatePropagationStopped(); )
			(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
		return f.postDispatch && f.postDispatch.call(this, n), n.result
	    }
	}, handlers: function (n, t) {
	    var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
	    if (s && r.nodeType && (!n.button || "click" !== n.type))
		for (; r !== this; r = r.parentNode || this)
		    if (r.disabled !== !0 || "click" !== n.type) {
			for (u = [], e = 0; s > e; e++)
			    o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
			u.length && h.push({elem: r, handlers: u})
		    }
	    return s < t.length && h.push({elem: this, handlers: t.slice(s)}), h
	}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (n, t) {
		return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
	    }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (n, t) {
		var e, i, r, f = t.button;
		return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
	    }}, fix: function (n) {
	    if (n[i.expando])
		return n;
	    var f, e, o, r = n.type, s = n, t = this.fixHooks[r];
	    for (t || (this.fixHooks[r] = t = lf.test(r)?this.mouseHooks:cf.test(r)?this.keyHooks:{}), o = t.props?this.props.concat(t.props):this.props, n = new i.Event(s), f = o.length; f--; )
		e = o[f], n[e] = s[e];
	    return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
	}, special: {load: {noBubble: !0}, focus: {trigger: function () {
		    if (this !== hr() && this.focus)
			return(this.focus(), !1)
		}, delegateType: "focusin"}, blur: {trigger: function () {
		    if (this === hr() && this.blur)
			return(this.blur(), !1)
		}, delegateType: "focusout"}, click: {trigger: function () {
		    if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))
			return(this.click(), !1)
		}, _default: function (n) {
		    return i.nodeName(n.target, "a")
		}}, beforeunload: {postDispatch: function (n) {
		    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
		}}}, simulate: function (n, t, r, u) {
	    var f = i.extend(new i.Event, r, {type: n, isSimulated: !0, originalEvent: {}});
	    u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
	    f.isDefaultPrevented() && r.preventDefault()
	}};
    i.removeEvent = function (n, t, i) {
	n.removeEventListener && n.removeEventListener(t, i, !1)
    };
    i.Event = function (n, t) {
	return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? at : g) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g, preventDefault: function () {
	    var n = this.originalEvent;
	    this.isDefaultPrevented = at;
	    n && n.preventDefault && n.preventDefault()
	}, stopPropagation: function () {
	    var n = this.originalEvent;
	    this.isPropagationStopped = at;
	    n && n.stopPropagation && n.stopPropagation()
	}, stopImmediatePropagation: function () {
	    var n = this.originalEvent;
	    this.isImmediatePropagationStopped = at;
	    n && n.stopImmediatePropagation && n.stopImmediatePropagation();
	    this.stopPropagation()
	}};
    i.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (n, t) {
	i.event.special[n] = {delegateType: t, bindType: t, handle: function (n) {
		var u, f = this, r = n.relatedTarget, e = n.handleObj;
		return(!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
	    }}
    });
    f.focusinBubbles || i.each({focus: "focusin", blur: "focusout"}, function (n, t) {
	var u = function (n) {
	    i.event.simulate(t, n.target, i.event.fix(n), !0)
	};
	i.event.special[t] = {setup: function () {
		var i = this.ownerDocument || this, f = r.access(i, t);
		f || i.addEventListener(n, u, !0);
		r.access(i, t, (f || 0) + 1)
	    }, teardown: function () {
		var i = this.ownerDocument || this, f = r.access(i, t) - 1;
		f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
	    }}
    });
    i.fn.extend({on: function (n, t, r, u, f) {
	    var e, o;
	    if ("object" == typeof n) {
		"string" != typeof t && (r = r || t, t = void 0);
		for (o in n)
		    this.on(o, t, r, n[o], f);
		return this
	    }
	    if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1)
		u = g;
	    else if (!u)
		return this;
	    return 1 === f && (e = u, u = function (n) {
		return i().off(n), e.apply(this, arguments)
	    }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function () {
		i.event.add(this, n, u, r, t)
	    })
	}, one: function (n, t, i, r) {
	    return this.on(n, t, i, r, 1)
	}, off: function (n, t, r) {
	    var u, f;
	    if (n && n.preventDefault && n.handleObj)
		return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
	    if ("object" == typeof n) {
		for (f in n)
		    this.off(f, t, n[f]);
		return this
	    }
	    return(t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = g), this.each(function () {
		i.event.remove(this, n, r, t)
	    })
	}, trigger: function (n, t) {
	    return this.each(function () {
		i.event.trigger(n, t, this)
	    })
	}, triggerHandler: function (n, t) {
	    var r = this[0];
	    if (r)
		return i.event.trigger(n, t, r, !0)
	}});
    var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, lr = /<([\w:]+)/, af = /<|&#?\w+;/, vf = /<(?:script|style|link)/i, yf = /checked\s*(?:[^=]|=\s*.checked.)/i, ar = /^$|\/(?:java|ecma)script/i, pf = /^true\/(.*)/, wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, h = {option: [1, "<select multiple='multiple'>", "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""]};
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({clone: function (n, t, r) {
	    var u, c, s, e, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
	    if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
		for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++)
		    df(s[u], e[u]);
	    if (t)
		if (r)
		    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++)
			yr(s[u], e[u]);
		else
		    yr(n, h);
	    return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
	}, buildFragment: function (n, t, r, u) {
	    for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
		if (f = n[c], f || 0 === f)
		    if ("object" === i.type(f))
			i.merge(v, f.nodeType ? [f] : f);
		    else if (af.test(f)) {
			for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--; )
			    e = e.lastChild;
			i.merge(v, e.childNodes);
			e = s.firstChild;
			e.textContent = ""
		    } else
			v.push(t.createTextNode(f));
	    for (s.textContent = "", c = 0; f = v[c++]; )
		if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && oi(e), r))
		    for (a = 0; f = e[a++]; )
			ar.test(f.type || "") && r.push(f);
	    return s
	}, cleanData: function (n) {
	    for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) {
		if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
		    if (f.events)
			for (o in f.events)
			    h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
		    r.cache[u] && delete r.cache[u]
		}
		delete e.cache[t[e.expando]]
	    }
	}});
    i.fn.extend({text: function (n) {
	    return l(this, function (n) {
		return void 0 === n ? i.text(this) : this.empty().each(function () {
		    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n)
		})
	    }, null, n, arguments.length)
	}, append: function () {
	    return this.domManip(arguments, function (n) {
		if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
		    var t = vr(this, n);
		    t.appendChild(n)
		}
	    })
	}, prepend: function () {
	    return this.domManip(arguments, function (n) {
		if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
		    var t = vr(this, n);
		    t.insertBefore(n, t.firstChild)
		}
	    })
	}, before: function () {
	    return this.domManip(arguments, function (n) {
		this.parentNode && this.parentNode.insertBefore(n, this)
	    })
	}, after: function () {
	    return this.domManip(arguments, function (n) {
		this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
	    })
	}, remove: function (n, t) {
	    for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++)
		t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")), r.parentNode.removeChild(r));
	    return this
	}, empty: function () {
	    for (var n, t = 0; null != (n = this[t]); t++)
		1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
	    return this
	}, clone: function (n, t) {
	    return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function () {
		return i.clone(this, n, t)
	    })
	}, html: function (n) {
	    return l(this, function (n) {
		var t = this[0] || {}, r = 0, u = this.length;
		if (void 0 === n && 1 === t.nodeType)
		    return t.innerHTML;
		if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
		    n = n.replace(cr, "<$1><\/$2>");
		    try {
			for (; u > r; r++)
			    t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
			t = 0
		    } catch (f) {
		    }
		}
		t && this.empty().append(n)
	    }, null, n, arguments.length)
	}, replaceWith: function () {
	    var n = arguments[0];
	    return this.domManip(arguments, function (t) {
		n = this.parentNode;
		i.cleanData(o(this));
		n && n.replaceChild(t, this)
	    }), n && (n.length || n.nodeType) ? this : this.remove()
	}, detach: function (n) {
	    return this.remove(n, !0)
	}, domManip: function (n, t) {
	    n = bi.apply([], n);
	    var h, v, s, c, u, y, e = 0, l = this.length, w = this, b = l - 1, a = n[0], p = i.isFunction(a);
	    if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a))
		return this.each(function (i) {
		    var r = w.eq(i);
		    p && (n[0] = a.call(this, i, r.html()));
		    r.domManip(n, t)
		});
	    if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
		for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++)
		    u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
		if (c)
		    for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++)
			u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
	    }
	    return this
	}});
    i.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (n, t) {
	i.fn[n] = function (n) {
	    for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++)
		u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
	    return this.pushStack(f)
	}
    });
    si = {};
    var wr = /^margin/, ci = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), yt = function (n) {
	return n.ownerDocument.defaultView.getComputedStyle(n, null)
    };
    !function () {
	var s, o, e = u.documentElement, r = u.createElement("div"), t = u.createElement("div");
	if (t.style) {
	    t.style.backgroundClip = "content-box";
	    t.cloneNode(!0).style.backgroundClip = "";
	    f.clearCloneStyle = "content-box" === t.style.backgroundClip;
	    r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
	    r.appendChild(t);
	    function h() {
		t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
		t.innerHTML = "";
		e.appendChild(r);
		var i = n.getComputedStyle(t, null);
		s = "1%" !== i.top;
		o = "4px" === i.width;
		e.removeChild(r)
	    }
	    n.getComputedStyle && i.extend(f, {pixelPosition: function () {
		    return h(), s
		}, boxSizingReliable: function () {
		    return null == o && h(), o
		}, reliableMarginRight: function () {
		    var f, i = t.appendChild(u.createElement("div"));
		    return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), f
		}})
	}
    }();
    i.swap = function (n, t, i, r) {
	var f, u, e = {};
	for (u in t)
	    e[u] = n.style[u], n.style[u] = t[u];
	f = i.apply(n, r || []);
	for (u in t)
	    n.style[u] = e[u];
	return f
    };
    var gf = /^(none|table(?!-c[ea]).+)/, ne = new RegExp("^(" + lt + ")(.*)$", "i"), te = new RegExp("^([+-])=(" + lt + ")", "i"), ie = {position: "absolute", visibility: "hidden", display: "block"}, kr = {letterSpacing: "0", fontWeight: "400"}, dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({cssHooks: {opacity: {get: function (n, t) {
		    if (t) {
			var i = rt(n, "opacity");
			return"" === i ? "1" : i
		    }
		}}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {float: "cssFloat"}, style: function (n, t, r, u) {
	    if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
		var o, h, e, s = i.camelCase(t), c = n.style;
		return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get"in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r, "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), e && "set"in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)), void 0)
	    }
	}, css: function (n, t, r, u) {
	    var f, s, e, o = i.camelCase(t);
	    return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get"in e && (f = e.get(n, !0, r)), void 0 === f && (f = rt(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
	}});
    i.each(["height", "width"], function (n, t) {
	i.cssHooks[t] = {get: function (n, r, u) {
		if (r)
		    return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function () {
			return iu(n, t, u)
		    }) : iu(n, t, u)
	    }, set: function (n, r, u) {
		var f = u && yt(n);
		return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
	    }}
    });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function (n, t) {
	if (t)
	    return i.swap(n, {display: "inline-block"}, rt, [n, "marginRight"])
    });
    i.each({margin: "", padding: "", border: "Width"}, function (n, t) {
	i.cssHooks[n + t] = {expand: function (i) {
		for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
		    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
		return f
	    }};
	wr.test(n) || (i.cssHooks[n + t].set = nu)
    });
    i.fn.extend({css: function (n, t) {
	    return l(this, function (n, t, r) {
		var f, e, o = {}, u = 0;
		if (i.isArray(t)) {
		    for (f = yt(n), e = t.length; e > u; u++)
			o[t[u]] = i.css(n, t[u], !1, f);
		    return o
		}
		return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
	    }, n, t, arguments.length > 1)
	}, show: function () {
	    return ru(this, !0)
	}, hide: function () {
	    return ru(this)
	}, toggle: function (n) {
	    return"boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
		it(this) ? i(this).show() : i(this).hide()
	    })
	}});
    i.Tween = s;
    s.prototype = {constructor: s, init: function (n, t, r, u, f, e) {
	    this.elem = n;
	    this.prop = r;
	    this.easing = f || "swing";
	    this.options = t;
	    this.start = this.now = this.cur();
	    this.end = u;
	    this.unit = e || (i.cssNumber[r] ? "" : "px")
	}, cur: function () {
	    var n = s.propHooks[this.prop];
	    return n && n.get ? n.get(this) : s.propHooks._default.get(this)
	}, run: function (n) {
	    var r, t = s.propHooks[this.prop];
	    return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : s.propHooks._default.set(this), this
	}};
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {_default: {get: function (n) {
		var t;
		return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
	    }, set: function (n) {
		i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
	    }}};
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {set: function (n) {
	    n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
	}};
    i.easing = {linear: function (n) {
	    return n
	}, swing: function (n) {
	    return.5 - Math.cos(n * Math.PI) / 2
	}};
    i.fx = s.prototype.init;
    i.fx.step = {};
    var nt, pt, re = /^(?:toggle|show|hide)$/, uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), ue = /queueHooks$/, wt = [fe], ut = {"*": [function (n, t) {
		var f = this.createTween(n, t), s = f.cur(), r = uu.exec(t), e = r && r[3] || (i.cssNumber[n] ? "" : "px"), u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)), o = 1, h = 20;
		if (u && u[3] !== e) {
		    e = e || u[3];
		    r = r || [];
		    u = +s || 1;
		    do
			o = o || ".5", u /= o, i.style(f.elem, n, u + e);
		    while (o !== (o = f.cur() / s) && 1 !== o && --h)
		}
		return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
	    }]};
    i.Animation = i.extend(ou, {tweener: function (n, t) {
	    i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
	    for (var r, u = 0, f = n.length; f > u; u++)
		r = n[u], ut[r] = ut[r] || [], ut[r].unshift(t)
	}, prefilter: function (n, t) {
	    t ? wt.unshift(n) : wt.push(n)
	}});
    i.speed = function (n, t, r) {
	var u = n && "object" == typeof n ? i.extend({}, n) : {complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t};
	return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
	    i.isFunction(u.old) && u.old.call(this);
	    u.queue && i.dequeue(this, u.queue)
	}, u
    };
    i.fn.extend({fadeTo: function (n, t, i, r) {
	    return this.filter(it).css("opacity", 0).show().end().animate({opacity: t}, n, i, r)
	}, animate: function (n, t, u, f) {
	    var s = i.isEmptyObject(n), o = i.speed(t, u, f), e = function () {
		var t = ou(this, i.extend({}, n), o);
		(s || r.get(this, "finish")) && t.stop(!0)
	    };
	    return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
	}, stop: function (n, t, u) {
	    var f = function (n) {
		var t = n.stop;
		delete n.stop;
		t(u)
	    };
	    return"string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function () {
		var s = !0, t = null != n && n + "queueHooks", o = i.timers, e = r.get(this);
		if (t)
		    e[t] && e[t].stop && f(e[t]);
		else
		    for (t in e)
			e[t] && e[t].stop && ue.test(t) && f(e[t]);
		for (t = o.length; t--; )
		    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
		(s || !u) && i.dequeue(this, n)
	    })
	}, finish: function (n) {
	    return n !== !1 && (n = n || "fx"), this.each(function () {
		var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
		for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--; )
		    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
		for (t = 0; s > t; t++)
		    u[t] && u[t].finish && u[t].finish.call(this);
		delete e.finish
	    })
	}});
    i.each(["toggle", "show", "hide"], function (n, t) {
	var r = i.fn[t];
	i.fn[t] = function (n, i, u) {
	    return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
	}
    });
    i.each({slideDown: bt("show"), slideUp: bt("hide"), slideToggle: bt("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (n, t) {
	i.fn[n] = function (n, i, r) {
	    return this.animate(t, n, i, r)
	}
    });
    i.timers = [];
    i.fx.tick = function () {
	var r, n = 0, t = i.timers;
	for (nt = i.now(); n < t.length; n++)
	    r = t[n], r() || t[n] !== r || t.splice(n--, 1);
	t.length || i.fx.stop();
	nt = void 0
    };
    i.fx.timer = function (n) {
	i.timers.push(n);
	n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function () {
	pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function () {
	clearInterval(pt);
	pt = null
    };
    i.fx.speeds = {slow: 600, fast: 200, _default: 400};
    i.fn.delay = function (n, t) {
	return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
	    var r = setTimeout(t, n);
	    i.stop = function () {
		clearTimeout(r)
	    }
	})
    }, function () {
	var n = u.createElement("input"), t = u.createElement("select"), i = t.appendChild(u.createElement("option"));
	n.type = "checkbox";
	f.checkOn = "" !== n.value;
	f.optSelected = i.selected;
	t.disabled = !0;
	f.optDisabled = !i.disabled;
	n = u.createElement("input");
	n.value = "t";
	n.type = "radio";
	f.radioValue = "t" === n.value
    }();
    tt = i.expr.attrHandle;
    i.fn.extend({attr: function (n, t) {
	    return l(this, i.attr, n, t, arguments.length > 1)
	}, removeAttr: function (n) {
	    return this.each(function () {
		i.removeAttr(this, n)
	    })
	}});
    i.extend({attr: function (n, t, r) {
	    var u, f, e = n.nodeType;
	    if (n && 3 !== e && 8 !== e && 2 !== e)
		return typeof n.getAttribute === d ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get"in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
	}, removeAttr: function (n, t) {
	    var r, u, e = 0, f = t && t.match(c);
	    if (f && 1 === n.nodeType)
		while (r = f[e++])
		    u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
	}, attrHooks: {type: {set: function (n, t) {
		    if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
			var r = n.value;
			return n.setAttribute("type", t), r && (n.value = r), t
		    }
		}}}});
    su = {set: function (n, t, r) {
	    return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
	}};
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
	var r = tt[t] || i.find.attr;
	tt[t] = function (n, t, i) {
	    var u, f;
	    return i || (f = tt[t], tt[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, tt[t] = f), u
	}
    });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({prop: function (n, t) {
	    return l(this, i.prop, n, t, arguments.length > 1)
	}, removeProp: function (n) {
	    return this.each(function () {
		delete this[i.propFix[n] || n]
	    })
	}});
    i.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (n, t, r) {
	    var f, u, o, e = n.nodeType;
	    if (n && 3 !== e && 8 !== e && 2 !== e)
		return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
	}, propHooks: {tabIndex: {get: function (n) {
		    return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
		}}}});
    f.optSelected || (i.propHooks.selected = {get: function (n) {
	    var t = n.parentNode;
	    return t && t.parentNode && t.parentNode.selectedIndex, null
	}});
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	i.propFix[this.toLowerCase()] = this
    });
    kt = /[\t\r\n\f]/g;
    i.fn.extend({addClass: function (n) {
	    var o, t, r, u, s, f, h = "string" == typeof n && n, e = 0, l = this.length;
	    if (i.isFunction(n))
		return this.each(function (t) {
		    i(this).addClass(n.call(this, t, this.className))
		});
	    if (h)
		for (o = (n || "").match(c) || []; l > e; e++)
		    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : " ")) {
			for (s = 0; u = o[s++]; )
			    r.indexOf(" " + u + " ") < 0 && (r += u + " ");
			f = i.trim(r);
			t.className !== f && (t.className = f)
		    }
	    return this
	}, removeClass: function (n) {
	    var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n, e = 0, l = this.length;
	    if (i.isFunction(n))
		return this.each(function (t) {
		    i(this).removeClass(n.call(this, t, this.className))
		});
	    if (h)
		for (o = (n || "").match(c) || []; l > e; e++)
		    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : "")) {
			for (s = 0; u = o[s++]; )
			    while (r.indexOf(" " + u + " ") >= 0)
				r = r.replace(" " + u + " ", " ");
			f = n ? i.trim(r) : "";
			t.className !== f && (t.className = f)
		    }
	    return this
	}, toggleClass: function (n, t) {
	    var u = typeof n;
	    return"boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function (r) {
		i(this).toggleClass(n.call(this, r, this.className, t), t)
	    } : function () {
		if ("string" === u)
		    for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++]; )
			f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
		else
		    (u === d || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
	    })
	}, hasClass: function (n) {
	    for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
		if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0)
		    return!0;
	    return!1
	}});
    cu = /\r/g;
    i.fn.extend({val: function (n) {
	    var t, r, f, u = this[0];
	    return arguments.length ? (f = i.isFunction(n), this.each(function (r) {
		var u;
		1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
		    return null == n ? "" : n + ""
		})), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
	    })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get"in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0
	}});
    i.extend({valHooks: {option: {get: function (n) {
		    var t = i.find.attr(n, "value");
		    return null != t ? t : i.trim(i.text(n))
		}}, select: {get: function (n) {
		    for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
			if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
			    if (o = i(t).val(), u)
				return o;
			    h.push(o)
			}
		    return h
		}, set: function (n, t) {
		    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
			r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
		    return u || (n.selectedIndex = -1), e
		}}}});
    i.each(["radio", "checkbox"], function () {
	i.valHooks[this] = {set: function (n, t) {
		if (i.isArray(t))
		    return n.checked = i.inArray(i(n).val(), t) >= 0
	    }};
	f.checkOn || (i.valHooks[this].get = function (n) {
	    return null === n.getAttribute("value") ? "on" : n.value
	})
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
	i.fn[t] = function (n, i) {
	    return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
	}
    });
    i.fn.extend({hover: function (n, t) {
	    return this.mouseenter(n).mouseleave(t || n)
	}, bind: function (n, t, i) {
	    return this.on(n, null, t, i)
	}, unbind: function (n, t) {
	    return this.off(n, null, t)
	}, delegate: function (n, t, i, r) {
	    return this.on(t, n, i, r)
	}, undelegate: function (n, t, i) {
	    return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
	}});
    dt = i.now();
    gt = /\?/;
    i.parseJSON = function (n) {
	return JSON.parse(n + "")
    };
    i.parseXML = function (n) {
	var t, r;
	if (!n || "string" != typeof n)
	    return null;
	try {
	    r = new DOMParser;
	    t = r.parseFromString(n, "text/xml")
	} catch (u) {
	    t = void 0
	}
	return(!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
    };
    var b, v, se = /#.*$/, lu = /([?&])_=[^&]*/, he = /^(.*?):[ \t]*([^\r\n]*)$/gm, ce = /^(?:GET|HEAD)$/, le = /^\/\//, au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, vu = {}, li = {}, yu = "*/".concat("*");
    try {
	v = location.href
    } catch (ge) {
	v = u.createElement("a");
	v.href = "";
	v = v.href
    }
    b = au.exec(v.toLowerCase()) || [];
    i.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: v, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": yu, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (n, t) {
	    return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
	}, ajaxPrefilter: pu(vu), ajaxTransport: pu(li), ajax: function (n, t) {
	    function w(n, t, s, h) {
		var v, it, b, y, w, c = t;
		2 !== e && (e = 2, d && clearTimeout(d), l = void 0, k = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ae(r, u, s)), y = ve(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, b = y.error, v = !b)) : (b = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? nt.resolveWith(o, [it, c, u]) : nt.rejectWith(o, [u, c, b]), u.statusCode(p), p = void 0, a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]), tt.fireWith(o, [u, c]), a && (g.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
	    }
	    "object" == typeof n && (t = n, n = void 0);
	    t = t || {};
	    var l, f, k, y, d, s, a, h, r = i.ajaxSetup({}, t), o = r.context || r, g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, nt = i.Deferred(), tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {readyState: 0, getResponseHeader: function (n) {
		    var t;
		    if (2 === e) {
			if (!y)
			    for (y = {}; t = he.exec(k); )
				y[t[1].toLowerCase()] = t[2];
			t = y[n.toLowerCase()]
		    }
		    return null == t ? null : t
		}, getAllResponseHeaders: function () {
		    return 2 === e ? k : null
		}, setRequestHeader: function (n, t) {
		    var i = n.toLowerCase();
		    return e || (n = rt[i] = rt[i] || n, it[n] = t), this
		}, overrideMimeType: function (n) {
		    return e || (r.mimeType = n), this
		}, statusCode: function (n) {
		    var t;
		    if (n)
			if (2 > e)
			    for (t in n)
				p[t] = [p[t], n[t]];
			else
			    u.always(n[u.status]);
		    return this
		}, abort: function (n) {
		    var t = n || ut;
		    return l && l.abort(t), w(0, t), this
		}};
	    if (nt.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || v) + "").replace(se, "").replace(le, b[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === b[1] && s[2] === b[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (b[3] || ("http:" === b[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e)
		return u;
	    a = r.global;
	    a && 0 == i.active++ && i.event.trigger("ajaxStart");
	    r.type = r.type.toUpperCase();
	    r.hasContent = !ce.test(r.type);
	    f = r.url;
	    r.hasContent || (r.data && (f = r.url += (gt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
	    r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
	    (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
	    u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
	    for (h in r.headers)
		u.setRequestHeader(h, r.headers[h]);
	    if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e))
		return u.abort();
	    ut = "abort";
	    for (h in{success:1, error:1, complete:1})
		u[h](r[h]);
	    if (l = wu(li, r, t, u)) {
		u.readyState = 1;
		a && g.trigger("ajaxSend", [u, r]);
		r.async && r.timeout > 0 && (d = setTimeout(function () {
		    u.abort("timeout")
		}, r.timeout));
		try {
		    e = 1;
		    l.send(it, w)
		} catch (ft) {
		    if (!(2 > e))
			throw ft;
		    w(-1, ft)
		}
	    } else
		w(-1, "No Transport");
	    return u
	}, getJSON: function (n, t, r) {
	    return i.get(n, t, r, "json")
	}, getScript: function (n, t) {
	    return i.get(n, void 0, t, "script")
	}});
    i.each(["get", "post"], function (n, t) {
	i[t] = function (n, r, u, f) {
	    return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({url: n, type: t, dataType: f, data: r, success: u})
	}
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
	i.fn[t] = function (n) {
	    return this.on(t, n)
	}
    });
    i._evalUrl = function (n) {
	return i.ajax({url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    };
    i.fn.extend({wrapAll: function (n) {
	    var t;
	    return i.isFunction(n) ? this.each(function (t) {
		i(this).wrapAll(n.call(this, t))
	    }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
		for (var n = this; n.firstElementChild; )
		    n = n.firstElementChild;
		return n
	    }).append(this)), this)
	}, wrapInner: function (n) {
	    return this.each(i.isFunction(n) ? function (t) {
		i(this).wrapInner(n.call(this, t))
	    } : function () {
		var t = i(this), r = t.contents();
		r.length ? r.wrapAll(n) : t.append(n)
	    })
	}, wrap: function (n) {
	    var t = i.isFunction(n);
	    return this.each(function (r) {
		i(this).wrapAll(t ? n.call(this, r) : n)
	    })
	}, unwrap: function () {
	    return this.parent().each(function () {
		i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
	    }).end()
	}});
    i.expr.filters.hidden = function (n) {
	return n.offsetWidth <= 0 && n.offsetHeight <= 0
    };
    i.expr.filters.visible = function (n) {
	return!i.expr.filters.hidden(n)
    };
    var ye = /%20/g, pe = /\[\]$/, bu = /\r?\n/g, we = /^(?:submit|button|image|reset|file)$/i, be = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
	var r, u = [], f = function (n, t) {
	    t = i.isFunction(t) ? t() : null == t ? "" : t;
	    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
	};
	if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n))
	    i.each(n, function () {
		f(this.name, this.value)
	    });
	else
	    for (r in n)
		vi(r, n[r], t, f);
	return u.join("&").replace(ye, "+")
    };
    i.fn.extend({serialize: function () {
	    return i.param(this.serializeArray())
	}, serializeArray: function () {
	    return this.map(function () {
		var n = i.prop(this, "elements");
		return n ? i.makeArray(n) : this
	    }).filter(function () {
		var n = this.type;
		return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n))
	    }).map(function (n, t) {
		var r = i(this).val();
		return null == r ? null : i.isArray(r) ? i.map(r, function (n) {
		    return{name: t.name, value: n.replace(bu, "\r\n")}
		}) : {name: t.name, value: r.replace(bu, "\r\n")}
	    }).get()
	}});
    i.ajaxSettings.xhr = function () {
	try {
	    return new XMLHttpRequest
	} catch (n) {
	}
    };
    var ke = 0, ni = {}, de = {0: 200, 1223: 204}, ft = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function () {
	for (var n in ni)
	    ni[n]()
    }), f.cors = !!ft && "withCredentials"in ft, f.ajax = ft = !!ft, i.ajaxTransport(function (n) {
	var t;
	if (f.cors || ft && !n.crossDomain)
	    return{send: function (i, r) {
		    var f, u = n.xhr(), e = ++ke;
		    if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
			for (f in n.xhrFields)
			    u[f] = n.xhrFields[f];
		    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
		    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
		    for (f in i)
			u.setRequestHeader(f, i[f]);
		    t = function (n) {
			return function () {
			    t && (delete ni[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? {text: u.responseText} : void 0, u.getAllResponseHeaders()))
			}
		    };
		    u.onload = t();
		    u.onerror = t("error");
		    t = ni[e] = t("abort");
		    try {
			u.send(n.hasContent && n.data || null)
		    } catch (o) {
			if (t)
			    throw o;
		    }
		}, abort: function () {
		    t && t()
		}}
    }), i.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (n) {
		return i.globalEval(n), n
	    }}}), i.ajaxPrefilter("script", function (n) {
	void 0 === n.cache && (n.cache = !1);
	n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function (n) {
	if (n.crossDomain) {
	    var r, t;
	    return{send: function (f, e) {
		    r = i("<script>").prop({async: !0, charset: n.scriptCharset, src: n.url}).on("load error", t = function (n) {
			r.remove();
			t = null;
			n && e("error" === n.type ? 404 : 200, n.type)
		    });
		    u.head.appendChild(r[0])
		}, abort: function () {
		    t && t()
		}}
	}
    }), yi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
	    var n = yi.pop() || i.expando + "_" + dt++;
	    return this[n] = !0, n
	}}), i.ajaxPrefilter("json jsonp", function (t, r, u) {
	var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
	if (s || "jsonp" === t.dataTypes[0])
	    return(f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
		return e || i.error(f + " was not called"), e[0]
	    }, t.dataTypes[0] = "json", o = n[f], n[f] = function () {
		e = arguments
	    }, u.always(function () {
		n[f] = o;
		t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
		e && i.isFunction(o) && o(e[0]);
		e = o = void 0
	    }), "script")
    }), i.parseHTML = function (n, t, r) {
	if (!n || "string" != typeof n)
	    return null;
	"boolean" == typeof t && (r = t, t = !1);
	t = t || u;
	var f = gi.exec(n), e = !r && [];
	return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, pi = i.fn.load, i.fn.load = function (n, t, r) {
	if ("string" != typeof n && pi)
	    return pi.apply(this, arguments);
	var u, o, s, f = this, e = n.indexOf(" ");
	return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({url: n, type: o, dataType: "html", data: t}).done(function (n) {
	    s = arguments;
	    f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
	}).complete(r && function (n, t) {
	    f.each(r, s || [n.responseText, t, n])
	}), this
    }, i.expr.filters.animated = function (n) {
	return i.grep(i.timers, function (t) {
	    return n === t.elem
	}).length
    }, wi = n.document.documentElement, i.offset = {setOffset: function (n, t, r) {
	    var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
	    "static" === l && (n.style.position = "relative");
	    u = a.offset();
	    s = i.css(n, "top");
	    c = i.css(n, "left");
	    v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
	    v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
	    i.isFunction(t) && (t = t.call(n, r, u));
	    null != t.top && (f.top = t.top - u.top + h);
	    null != t.left && (f.left = t.left - u.left + o);
	    "using"in t ? t.using.call(n, f) : a.css(f)
	}}, i.fn.extend({offset: function (n) {
	    if (arguments.length)
		return void 0 === n ? this : this.each(function (t) {
		    i.offset.setOffset(this, n, t)
		});
	    var r, f, t = this[0], u = {top: 0, left: 0}, e = t && t.ownerDocument;
	    if (e)
		return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== d && (u = t.getBoundingClientRect()), f = ku(e), {top: u.top + f.pageYOffset - r.clientTop, left: u.left + f.pageXOffset - r.clientLeft}) : u
	}, position: function () {
	    if (this[0]) {
		var n, r, u = this[0], t = {top: 0, left: 0};
		return"fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {top: r.top - t.top - i.css(u, "marginTop", !0), left: r.left - t.left - i.css(u, "marginLeft", !0)}
	    }
	}, offsetParent: function () {
	    return this.map(function () {
		for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
		    n = n.offsetParent;
		return n || wi
	    })
	}}), i.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
	var u = "pageYOffset" === r;
	i.fn[t] = function (i) {
	    return l(this, function (t, i, f) {
		var e = ku(t);
		return void 0 === f ? e ? e[r] : t[i] : void(e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f)
	    }, t, i, arguments.length, null)
	}
    }), i.each(["top", "left"], function (n, t) {
	i.cssHooks[t] = br(f.pixelPosition, function (n, r) {
	    if (r)
		return(r = rt(n, t), ci.test(r) ? i(n).position()[t] + "px" : r)
	})
    }), i.each({Height: "height", Width: "width"}, function (n, t) {
	i.each({padding: "inner" + n, content: t, "": "outer" + n}, function (r, u) {
	    i.fn[u] = function (u, f) {
		var e = arguments.length && (r || "boolean" != typeof u), o = r || (u === !0 || f === !0 ? "margin" : "border");
		return l(this, function (t, r, u) {
		    var f;
		    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
		}, t, e ? u : void 0, e, null)
	    }
	})
    }), i.fn.size = function () {
	return this.length
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
	return i
    }), du = n.jQuery, gu = n.$, i.noConflict = function (t) {
	return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
    }, typeof t === d && (n.jQuery = n.$ = i), i
}), function () {
    function as(n, t) {
	return n.set(t[0], t[1]), n
    }
    function vs(n, t) {
	return n.add(t), n
    }
    function u(n, t, i) {
	var r = i.length;
	switch (r) {
	    case 0:
		return n.call(t);
	    case 1:
		return n.call(t, i[0]);
	    case 2:
		return n.call(t, i[0], i[1]);
	    case 3:
		return n.call(t, i[0], i[1], i[2])
	}
	return n.apply(t, i)
    }
    function ys(n, t, i, r) {
	for (var f = -1, e = n.length, u; ++f < e; )
	    u = n[f], t(r, u, i(u), n);
	return r
    }
    function ps(n, t) {
	for (var i = -1, u = n.length, f = -1, e = t.length, r = Array(u + e); ++i < u; )
	    r[i] = n[i];
	while (++f < e)
	    r[i++] = t[f];
	return r
    }
    function e(n, t) {
	for (var i = -1, r = n.length; ++i < r; )
	    if (t(n[i], i, n) === !1)
		break;
	return n
    }
    function ws(n, t) {
	for (var i = n.length; i--; )
	    if (t(n[i], i, n) === !1)
		break;
	return n
    }
    function hf(n, t) {
	for (var i = -1, r = n.length; ++i < r; )
	    if (!t(n[i], i, n))
		return!1;
	return!0
    }
    function nt(n, t) {
	for (var i = -1, f = n.length, e = 0, u = [], r; ++i < f; )
	    r = n[i], t(r, i, n) && (u[e++] = r);
	return u
    }
    function wr(n, t) {
	return!!n.length && ot(n, t, 0) > -1
    }
    function br(n, t, i) {
	for (var r = -1, u = n.length; ++r < u; )
	    if (i(t, n[r]))
		return!0;
	return!1
    }
    function r(n, t) {
	for (var i = -1, r = n.length, u = Array(r); ++i < r; )
	    u[i] = t(n[i], i, n);
	return u
    }
    function ft(n, t) {
	for (var i = -1, r = t.length, u = n.length; ++i < r; )
	    n[u + i] = t[i];
	return n
    }
    function et(n, t, i, r) {
	var u = -1, f = n.length;
	for (r && f && (i = n[++u]); ++u < f; )
	    i = t(i, n[u], u, n);
	return i
    }
    function bs(n, t, i, r) {
	var u = n.length;
	for (r && u && (i = n[--u]); u--; )
	    i = t(i, n[u], u, n);
	return i
    }
    function kr(n, t) {
	for (var i = -1, r = n.length; ++i < r; )
	    if (t(n[i], i, n))
		return!0;
	return!1
    }
    function pi(t, i, r) {
	for (var o = -1, h = t.length, f, u, e, s; ++o < h; )
	    f = t[o], u = i(f), u != null && (e === n ? u === u : r(u, e)) && (e = u, s = f);
	return s
    }
    function wi(n, t, i, r) {
	var u;
	return i(n, function (n, i, f) {
	    if (t(n, i, f))
		return u = r ? i : n, !1
	}), u
    }
    function bi(n, t, i) {
	for (var u = n.length, r = i ? u : -1; i?r--:++r < u; )
	    if (t(n[r], r, n))
		return r;
	return-1
    }
    function ot(n, t, i) {
	if (t !== t)
	    return wf(n, i);
	for (var r = i - 1, u = n.length; ++r < u; )
	    if (n[r] === t)
		return r;
	return-1
    }
    function ks(n, t, i, r) {
	for (var u = i - 1, f = n.length; ++u < f; )
	    if (r(n[u], t))
		return u;
	return-1
    }
    function cf(n, t, i, r, u) {
	return u(n, function (n, u, f) {
	    i = r ? (r = !1, n) : t(i, n, u, f)
	}), i
    }
    function ds(n, t) {
	var i = n.length;
	for (n.sort(t); i--; )
	    n[i] = n[i].value;
	return n
    }
    function lf(t, i) {
	for (var r, f = -1, e = t.length, u; ++f < e; )
	    u = i(t[f]), u !== n && (r = r === n ? u : r + u);
	return r
    }
    function dr(n, t) {
	for (var i = -1, r = Array(n); ++i < n; )
	    r[i] = t(i);
	return r
    }
    function af(n, t) {
	return r(t, function (t) {
	    return[t, n[t]]
	})
    }
    function gr(n) {
	return function (t) {
	    return n(t)
	}
    }
    function nu(n, t) {
	return r(t, function (t) {
	    return n[t]
	})
    }
    function vf(n, t) {
	for (var i = -1, r = n.length; ++i < r && ot(t, n[i], 0) > - 1; )
	    ;
	return i
    }
    function yf(n, t) {
	for (var i = n.length; i-- && ot(t, n[i], 0) > - 1; )
	    ;
	return i
    }
    function ki(n) {
	return n && n.Object === Object ? n : null
    }
    function pf(t, i) {
	if (t !== i) {
	    var f = t === null, e = t === n, r = t === t, o = i === null, s = i === n, u = i === i;
	    if (t > i && !o || !r || f && !s && u || e && u)
		return 1;
	    if (t < i && !f || !u || o && !e && r || s && r)
		return-1
	}
	return 0
    }
    function gs(n, t, i) {
	for (var r = -1, f = n.criteria, o = t.criteria, s = f.length, h = i.length, u, e; ++r < s; )
	    if (u = pf(f[r], o[r]), u)
		return r >= h ? u : (e = i[r], u * (e == "desc" ? -1 : 1));
	return n.index - t.index
    }
    function nh(n, t) {
	for (var i = n.length, r = 0; i--; )
	    n[i] === t && r++;
	return r
    }
    function th(n) {
	return fs[n]
    }
    function ih(n) {
	return es[n]
    }
    function rh(n) {
	return"\\" + ss[n]
    }
    function wf(n, t, i) {
	for (var f = n.length, r = t + (i ? 0 : -1), u; i?r--:++r < f; )
	    if (u = n[r], u !== u)
		return r;
	return-1
    }
    function ti(n) {
	var t = !1;
	if (n != null && typeof n.toString != "function")
	    try {
		t = !!(n + "")
	    } catch (i) {
	    }
	return t
    }
    function d(n, t) {
	return n = typeof n == "number" || ho.test(n) ? +n : -1, t = t == null ? w : t, n > -1 && n % 1 == 0 && n < t
    }
    function bf(n) {
	for (var t, i = []; !(t = n.next()).done; )
	    i.push(t.value);
	return i
    }
    function tu(n) {
	var i = -1, t = Array(n.size);
	return n.forEach(function (n, r) {
	    t[++i] = [r, n]
	}), t
    }
    function g(n, t) {
	for (var i = -1, f = n.length, e = 0, u = [], r; ++i < f; )
	    r = n[i], (r === t || r === ri) && (n[i] = ri, u[e++] = i);
	return u
    }
    function di(n) {
	var i = -1, t = Array(n.size);
	return n.forEach(function (n) {
	    t[++i] = n
	}), t
    }
    function ii(n) {
	if (!(n && yi.test(n)))
	    return n.length;
	for (var t = vr.lastIndex = 0; vr.test(n); )
	    t++;
	return t
    }
    function c(n) {
	return n.match(vr)
    }
    function uh(n) {
	return os[n]
    }
    function kf(ut) {
	function dt(n) {
	    if (pr(n) && !ai(n) && !(n instanceof vi)) {
		if (n instanceof du)
		    return n;
		if (vr.call(n, "__wrapped__"))
		    return fw(n)
	    }
	    return new du(n)
	}
	function tl() {
	}
	function du(t, i) {
	    this.__wrapped__ = t;
	    this.__actions__ = [];
	    this.__chain__ = !!i;
	    this.__index__ = 0;
	    this.__values__ = n
	}
	function vi(n) {
	    this.__wrapped__ = n;
	    this.__actions__ = [];
	    this.__dir__ = 1;
	    this.__filtered__ = !1;
	    this.__iteratees__ = [];
	    this.__takeCount__ = s;
	    this.__views__ = []
	}
	function ng() {
	    var n = new vi(this.__wrapped__);
	    return n.__actions__ = yu(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = yu(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = yu(this.__views__), n
	}
	function tg() {
	    if (this.__filtered__) {
		var n = new vi(this);
		n.__dir__ = -1;
		n.__filtered__ = !0
	    } else
		n = this.clone(), n.__dir__ *= -1;
	    return n
	}
	function ig() {
	    var n = this.__wrapped__.value(), e = this.__dir__, o = ai(n), k = e < 0, r = o ? n.length : 0, s = rtt(0, r, this.__views__), h = s.start, c = s.end, t = c - h, l = k ? c : h - 1, a = this.__iteratees__, d = a.length, v = 0, y = bu(t, this.__takeCount__), u, f, i;
	    if (!o || r < st || r == t && y == t)
		return fp(n, this.__actions__);
	    u = [];
	    n:while (t-- && v < y) {
		for (l += e, f = -1, i = n[l]; ++f < d; ) {
		    var p = a[f], g = p.iteratee, w = p.type, b = g(i);
		    if (w == re)
			i = b;
		    else if (!b)
			if (w == uu)
			    continue n;
			else
			    break n
		}
		u[v++] = i
	    }
	    return u
	}
	function ra() {
	}
	function rg(n, t) {
	    return oy(n, t) && delete n[t]
	}
	function ug(t, i) {
	    if (gh) {
		var r = t[i];
		return r === ht ? n : r
	    }
	    return vr.call(t, i) ? t[i] : n
	}
	function oy(t, i) {
	    return gh ? t[i] !== n : vr.call(t, i)
	}
	function fg(t, i, r) {
	    t[i] = gh && r === n ? ht : r
	}
	function fs(n) {
	    var i = -1, r = n ? n.length : 0, t;
	    for (this.clear(); ++i < r; )
		t = n[i], this.set(t[0], t[1])
	}
	function eg() {
	    this.__data__ = {hash: new ra, map: ef ? new ef : [], string: new ra}
	}
	function og(n) {
	    var t = this.__data__;
	    return bh(n) ? rg(typeof n == "string" ? t.string : t.hash, n) : ef ? t.map["delete"](n) : sy(t.map, n)
	}
	function sg(n) {
	    var t = this.__data__;
	    return bh(n) ? ug(typeof n == "string" ? t.string : t.hash, n) : ef ? t.map.get(n) : hy(t.map, n)
	}
	function hg(n) {
	    var t = this.__data__;
	    return bh(n) ? oy(typeof n == "string" ? t.string : t.hash, n) : ef ? t.map.has(n) : cy(t.map, n)
	}
	function cg(n, t) {
	    var i = this.__data__;
	    return bh(n) ? fg(typeof n == "string" ? i.string : i.hash, n, t) : ef ? i.map.set(n, t) : ly(i.map, n, t), this
	}
	function il(n) {
	    var t = -1, i = n ? n.length : 0;
	    for (this.__data__ = new fs; ++t < i; )
		this.push(n[t])
	}
	function rl(n, t) {
	    var r = n.__data__, i, u;
	    return bh(t) ? (i = r.__data__, u = typeof t == "string" ? i.string : i.hash, u[t] === ht) : r.has(t)
	}
	function lg(n) {
	    var i = this.__data__, t, r;
	    bh(n) ? (t = i.__data__, r = typeof n == "string" ? t.string : t.hash, r[n] = ht) : i.set(n, ht)
	}
	function nf(n) {
	    var i = -1, r = n ? n.length : 0, t;
	    for (this.clear(); ++i < r; )
		t = n[i], this.set(t[0], t[1])
	}
	function ag() {
	    this.__data__ = {array: [], map: null}
	}
	function vg(n) {
	    var t = this.__data__, i = t.array;
	    return i ? sy(i, n) : t.map["delete"](n)
	}
	function yg(n) {
	    var t = this.__data__, i = t.array;
	    return i ? hy(i, n) : t.map.get(n)
	}
	function pg(n) {
	    var t = this.__data__, i = t.array;
	    return i ? cy(i, n) : t.map.has(n)
	}
	function wg(n, t) {
	    var i = this.__data__, r = i.array, u;
	    return r && (r.length < st - 1 ? ly(r, n, t) : (i.array = null, i.map = new fs(r))), u = i.map, u && u.set(n, t), this
	}
	function sy(n, t) {
	    var i = ul(n, t), r;
	    return i < 0 ? !1 : (r = n.length - 1, i == r ? n.pop() : bc.call(n, i, 1), !0)
	}
	function hy(t, i) {
	    var r = ul(t, i);
	    return r < 0 ? n : t[r][1]
	}
	function cy(n, t) {
	    return ul(n, t) > -1
	}
	function ul(n, t) {
	    for (var i = n.length; i--; )
		if (bo(n[i][0], t))
		    return i;
	    return-1
	}
	function ly(n, t, i) {
	    var r = ul(n, t);
	    r < 0 ? n.push([t, i]) : n[r][1] = i
	}
	function ua(t, i, r, u) {
	    return t === n || bo(t, hh[r]) && !vr.call(u, r) ? i : t
	}
	function fa(t, i, r) {
	    (r === n || bo(t[i], r)) && (typeof i != "number" || r !== n || i in t) || (t[i] = r)
	}
	function lh(t, i, r) {
	    var u = t[i];
	    vr.call(t, i) && bo(u, r) && (r !== n || i in t) || (t[i] = r)
	}
	function bg(n, t, i, r) {
	    return sf(n, function (n, u, f) {
		t(r, n, i(n), f)
	    }), r
	}
	function ay(n, t) {
	    return n && uc(t, au(t), n)
	}
	function ea(t, i) {
	    for (var r = -1, e = t == null, u = i.length, f = Array(u); ++r < u; )
		f[r] = e ? n : lc(t, i[r]);
	    return f
	}
	function oa(n) {
	    return yr(n) ? n : []
	}
	function vo(n) {
	    return typeof n == "function" ? n : ff
	}
	function ss(n) {
	    return ai(n) ? n : uw(n)
	}
	function ah(t, i, r) {
	    return t === t && (r !== n && (t = t <= r ? t : r), i !== n && (t = t >= i ? t : i)), t
	}
	function tf(i, r, u, f, o, s, h) {
	    var c, a, l, y, p;
	    if (f && (c = s ? f(i, o, s, h) : f(i)), c !== n)
		return c;
	    if (!ar(i))
		return i;
	    if (a = ai(i), a) {
		if (c = utt(i), !r)
		    return yu(i, c)
	    } else {
		if (l = uf(i), y = l == hi || l == fu, cv(i))
		    return vn(i, r);
		if (l == v || l == rt || y && !s) {
		    if (ti(i))
			return s ? i : {};
		    if (c = ftt(y ? {} : i), !r)
			return c = ay(c, i), u ? cp(i, c) : c
		} else {
		    if (!t[l])
			return s ? i : {};
		    c = ett(i, l, r)
		}
	    }
	    return(h || (h = new nf), p = h.get(i), p) ? p : (h.set(i, c), (a ? e : rf)(i, function (n, t) {
		lh(c, t, tf(n, r, u, f, t, i, h))
	    }), u && !a ? cp(i, c) : c)
	}
	function kg(t) {
	    var i = au(t), r = i.length;
	    return function (u) {
		var f;
		if (u == null)
		    return!r;
		for (f = r; f--; ) {
		    var e = i[f], s = t[e], o = u[e];
		    if (o === n && !(e in Object(u)) || !s(o))
			return!1
		}
		return!0
	    }
	}
	function vh(n) {
	    return ar(n) ? ad(n) : {}
	}
	function vy(t, i, r) {
	    if (typeof t != "function")
		throw new ku(f);
	    return wc(function () {
		t.apply(n, r)
	    }, i)
	}
	function ls(n, t, i, u) {
	    var l = -1, s = wr, h = !0, a = n.length, o = [], v = t.length, f, e, c;
	    if (!a)
		return o;
	    i && (t = r(t, gr(i)));
	    u ? (s = br, h = !1) : t.length >= st && (s = rl, h = !1, t = new il(t));
	    n:while (++l < a)
		if (f = n[l], e = i ? i(f) : f, h && e === e) {
		    for (c = v; c--; )
			if (t[c] === e)
			    continue n;
		    o.push(f)
		} else
		    s(t, e, u) || o.push(f);
	    return o
	}
	function dg(n, t) {
	    var i = !0;
	    return sf(n, function (n, r, u) {
		return i = !!t(n, r, u)
	    }), i
	}
	function gg(t, i, r, u) {
	    var f = t.length;
	    for (r = ki(r), r < 0 && (r = - r > f?0:f + r), u = u === n || u > f?f:ki(u), u < 0 && (u += f), u = r > u?0:kb(u); r < u; )
		t[r++] = i;
	    return t
	}
	function yy(n, t) {
	    var i = [];
	    return sf(n, function (n, r, u) {
		t(n, r, u) && i.push(n)
	    }), i
	}
	function lr(n, t, i, r) {
	    var f, e, u;
	    for (r || (r = []), f = - 1, e = n.length; ++f < e; )
		u = n[f], t > 0 && yr(u) && (i || ai(u) || eh(u)) ? t > 1 ? lr(u, t - 1, i, r) : ft(r, u) : i || (r[r.length] = u);
	    return r
	}
	function nn(n, t) {
	    return n == null ? n : el(n, t, gu)
	}
	function rf(n, t) {
	    return n && el(n, t, au)
	}
	function ha(n, t) {
	    return n && sa(n, t, au)
	}
	function ol(n, t) {
	    return nt(t, function (t) {
		return ao(n[t])
	    })
	}
	function sl(t, i) {
	    i = wo(i, t) ? [i + ""] : ss(i);
	    for (var r = 0, u = i.length; t != null && r < u; )
		t = t[i[r++]];
	    return r && r == u ? t : n
	}
	function ca(n, t) {
	    return vr.call(n, t) || typeof n == "object" && t in n && pc(n) === null
	}
	function tn(n, t) {
	    return t in Object(n)
	}
	function rn(n, t, i) {
	    return n >= bu(t, i) && n < cu(t, i)
	}
	function la(t, i, u) {
	    for (var w = u ? br : wr, b = t[0].length, l = t.length, f = l, a = Array(l), v = Infinity, h = [], e, y, s, c, o, p; f--; )
		e = t[f], f && i && (e = r(e, gr(i))), v = bu(e.length, v), a[f] = !u && (i || b >= 120 && e.length >= 120) ? new il(f && e) : n;
	    e = t[0];
	    y = -1;
	    s = a[0];
	    n:while (++y < b && h.length < v)
		if (c = e[y], o = i ? i(c) : c, !(s ? rl(s, o) : w(h, o, u))) {
		    for (f = l; --f; )
			if (p = a[f], !(p ? rl(p, o) : w(t[f], o, u)))
			    continue n;
		    s && s.push(o);
		    h.push(c)
		}
	    return h
	}
	function un(n, t, i, r) {
	    return rf(n, function (n, u, f) {
		t(r, i(n), u, f)
	    }), r
	}
	function ic(t, i, r) {
	    wo(i, t) || (i = ss(i), t = oc(t, i), i = pu(i));
	    var f = t == null ? t : t[i];
	    return f == null ? n : u(f, t, r)
	}
	function rc(n, t, i, r, u) {
	    return n === t ? !0 : n == null || t == null || !ar(n) && !pr(t) ? n !== n && t !== t : fn(n, t, rc, i, r, u)
	}
	function fn(n, t, i, r, u, f) {
	    var c = ai(n), y = ai(t), e = oi, o = oi, s, h;
	    c || (e = uf(n), e = e == rt ? v : e);
	    y || (o = uf(t), o = o == rt ? v : o);
	    var l = e == v && !ti(n), p = o == v && !ti(t), a = e == o;
	    return a && !l ? (f || (f = new nf), c || hc(n) ? dp(n, t, i, r, u, f) : ttt(n, t, e, i, r, u, f)) : !(u & it) && (s = l && vr.call(n, "__wrapped__"), h = p && vr.call(t, "__wrapped__"), s || h) ? (f || (f = new nf), i(s ? n.value() : n, h ? t.value() : t, r, u, f)) : a ? (f || (f = new nf), itt(n, t, i, r, u, f)) : !1
	}
	function aa(t, i, r, u) {
	    var e = r.length, l = e, a = !u, f, h, c;
	    if (t == null)
		return!l;
	    for (t = Object(t); e--; )
		if (f = r[e], a && f[2] ? f[1] !== t[f[0]] : !(f[0]in t))
		    return!1;
	    while (++e < l) {
		f = r[e];
		var o = f[0], s = t[o], v = f[1];
		if (a && f[2]) {
		    if (s === n && !(o in t))
			return!1
		} else if (h = new nf, c = u ? u(s, v, o, t, i, h) : n, !(c === n ? rc(v, s, u, fi | it, h) : c))
		    return!1
	    }
	    return!0
	}
	function py(n) {
	    var t = typeof n;
	    return t == "function" ? n : n == null ? ff : t == "object" ? ai(n) ? dy(n[0], n[1]) : ky(n) : gk(n)
	}
	function en(n) {
	    return pd(Object(n))
	}
	function wy(n) {
	    var t, i;
	    n = n == null ? n : Object(n);
	    t = [];
	    for (i in n)
		t.push(i);
	    return t
	}
	function by(n, t) {
	    var r = -1, i = wu(n) ? Array(n.length) : [];
	    return sf(n, function (n, u, f) {
		i[++r] = t(n, u, f)
	    }), i
	}
	function ky(t) {
	    var i = tv(t), r, u;
	    return i.length == 1 && i[0][2] ? (r = i[0][0], u = i[0][1], function (t) {
		return t == null ? !1 : t[r] === u && (u !== n || r in Object(t))
	    }) : function (n) {
		return n === t || aa(n, t, i)
	    }
	}
	function dy(t, i) {
	    return function (r) {
		var u = lc(r, t);
		return u === n && u === i ? rk(r, t) : rc(i, u, n, fi | it)
	    }
	}
	function hl(t, i, r, u, f) {
	    if (t !== i) {
		var o = ai(i) || hc(i) ? n : gu(i);
		e(o || i, function (e, s) {
		    if (o && (s = e, e = i[s]), ar(e))
			f || (f = new nf), on(t, i, s, r, hl, u, f);
		    else {
			var h = u ? u(t[s], e, s + "", t, i, f) : n;
			h === n && (h = e);
			fa(t, s, h)
		    }
		})
	    }
	}
	function on(t, i, r, u, f, e, o) {
	    var c = t[r], s = i[r], a = o.get(s), h, l;
	    if (a) {
		fa(t, r, a);
		return
	    }
	    h = e ? e(c, s, r + "", t, i, o) : n;
	    l = h === n;
	    l && (h = s, ai(s) || hc(s) ? ai(c) ? h = c : yr(c) ? h = yu(c) : (l = !1, h = tf(s, !e)) : av(s) || eh(s) ? eh(c) ? h = db(c) : !ar(c) || u && ao(c) ? (l = !1, h = tf(s, !e)) : h = c : l = !1);
	    o.set(s, h);
	    l && f(h, s, u, e, o);
	    o["delete"](s);
	    fa(t, r, h)
	}
	function gy(n, t, i) {
	    var f = -1, u;
	    return t = r(t.length ? t : Array(1), ni()), u = by(n, function (n) {
		var i = r(t, function (t) {
		    return t(n)
		});
		return{criteria: i, index: ++f, value: n}
	    }), ds(u, function (n, t) {
		return gs(n, t, i)
	    })
	}
	function np(n, t) {
	    return n = Object(n), et(t, function (t, i) {
		return i in n && (t[i] = n[i]), t
	    }, {})
	}
	function tp(n, t) {
	    var i = {};
	    return nn(n, function (n, r) {
		t(n, r) && (i[r] = n)
	    }), i
	}
	function va(t) {
	    return function (i) {
		return i == null ? n : i[t]
	    }
	}
	function sn(n) {
	    return function (t) {
		return sl(t, n)
	    }
	}
	function ya(n, t, i, u) {
	    var h = u ? ks : ot, o = -1, c = t.length, f = n;
	    for (i && (f = r(n, gr(i))); ++o < c; )
		for (var e = 0, s = t[o], l = i ? i(s) : s; (e = h(f, l, e, u)) > - 1; )
		    f !== n && bc.call(f, e, 1), bc.call(n, e, 1);
	    return n
	}
	function ip(n, t) {
	    for (var r = n ? t.length : 0, o = r - 1, i, e, u, f; r--; )
		i = t[r], (o == r || i != e) && (e = i, d(i) ? bc.call(n, i, 1) : wo(i, n) ? delete n[i] : (u = ss(i), f = oc(n, u), f != null && delete f[pu(u)]));
	    return n
	}
	function pa(n, t) {
	    return n + dc(uy() * (t - n + 1))
	}
	function hn(n, t, i, r) {
	    for (var e = -1, u = cu(kc((t - n) / (i || 1)), 0), f = Array(u); u--; )
		f[r ? u : ++e] = n, n += i;
	    return f
	}
	function cl(t, i, r, u) {
	    var e, o, h;
	    i = wo(i, t) ? [i + ""] : ss(i);
	    for (var s = -1, c = i.length, l = c - 1, f = t; f != null && ++s < c; )
		e = i[s], ar(f) && (o = r, s != l && (h = f[e], o = u ? u(h, e, f) : n, o === n && (o = h == null ? d(i[s + 1]) ? [] : {} : h)), lh(f, e, o)), f = f[e];
	    return t
	}
	function yo(n, t, i) {
	    var u = -1, r = n.length, f;
	    for (t < 0 && (t = - t > r?0:r + t), i = i > r?r:i, i < 0 && (i += r), r = t > i?0:i - t >>> 0, t >>>= 0, f = Array(r); ++u < r; )
		f[u] = n[u + t];
	    return f
	}
	function cn(n, t) {
	    var i;
	    return sf(n, function (n, r, u) {
		return i = t(n, r, u), !i
	    }), !!i
	}
	function ll(n, t, i) {
	    var u = 0, r = n ? n.length : u, f, e;
	    if (typeof t == "number" && t === t && r <= se) {
		while (u < r)
		    f = u + r >>> 1, e = n[f], (i ? e <= t : e < t) && e !== null ? u = f + 1 : r = f;
		return r
	    }
	    return ba(n, t, ff, i)
	}
	function ba(t, i, r, u) {
	    var l;
	    i = r(i);
	    for (var o = 0, e = t ? t.length : 0, a = i !== i, v = i === null, y = i === n; o < e; ) {
		var s = dc((o + e) / 2), f = r(t[s]), c = f !== n, h = f === f;
		l = a ? h || u : v ? h && c && (u || f != null) : y ? h && (u || c) : f == null ? !1 : u ? f <= i : f < i;
		l ? o = s + 1 : e = s
	    }
	    return bu(e, oe)
	}
	function ln(n) {
	    return rp(n)
	}
	function rp(n, t) {
	    for (var u = 0, o = n.length, i = n[0], r = t ? t(i) : i, f = r, s = 1, e = [i]; ++u < o; )
		i = n[u], r = t ? t(i) : i, bo(r, f) || (f = r, e[s++] = i);
	    return e
	}
	function fh(n, t, i) {
	    var l = -1, o = wr, a = n.length, s = !0, f = [], r = f, h, e, u, c;
	    if (i)
		s = !1, o = br;
	    else if (a >= st) {
		if (h = t ? null : kp(n), h)
		    return di(h);
		s = !1;
		o = rl;
		r = new il
	    } else
		r = t ? [] : f;
	    n:while (++l < a)
		if (e = n[l], u = t ? t(e) : e, s && u === u) {
		    for (c = r.length; c--; )
			if (r[c] === u)
			    continue n;
		    t && r.push(u);
		    f.push(e)
		} else
		    o(r, u, i) || (r !== f && r.push(u), f.push(e));
	    return f
	}
	function an(n, t) {
	    t = wo(t, n) ? [t + ""] : ss(t);
	    n = oc(n, t);
	    var i = pu(t);
	    return n != null && ik(n, i) ? delete n[i] : !0
	}
	function up(n, t, i, r) {
	    return cl(n, t, i(sl(n, t)), r)
	}
	function al(n, t, i, r) {
	    for (var f = n.length, u = r ? f : -1; (r?u--:++u < f) && t(n[u], u, n); )
		;
	    return i ? yo(n, r ? 0 : u, r ? u + 1 : f) : yo(n, r ? u + 1 : 0, r ? f : u)
	}
	function fp(n, t) {
	    var i = n;
	    return i instanceof vi && (i = i.value()), et(t, function (n, t) {
		return t.func.apply(t.thisArg, ft([n], t.args))
	    }, i)
	}
	function ka(n, t, i) {
	    for (var u = -1, f = n.length, r; ++u < f; )
		r = r ? ft(ls(r, n[u], t, i), ls(n[u], r, t, i)) : n[u];
	    return r && r.length ? fh(r, t, i) : []
	}
	function ep(t, i, r) {
	    for (var u = -1, e = t.length, o = i.length, f = {}; ++u < e; )
		r(f, t[u], u < o ? i[u] : n);
	    return f
	}
	function vn(n, t) {
	    if (t)
		return n.slice();
	    var i = new n.constructor(n.length);
	    return n.copy(i), i
	}
	function op(n) {
	    var t = new n.constructor(n.byteLength);
	    return new yc(t).set(new yc(n)), t
	}
	function yn(n) {
	    return et(tu(n), as, new n.constructor)
	}
	function pn(n) {
	    var t = new n.constructor(n.source, hu.exec(n));
	    return t.lastIndex = n.lastIndex, t
	}
	function wn(n) {
	    return et(di(n), vs, new n.constructor)
	}
	function bn(n) {
	    return tc ? Object(tc.call(n)) : {}
	}
	function kn(n, t) {
	    var i = t ? op(n.buffer) : n.buffer;
	    return new n.constructor(i, n.byteOffset, n.length)
	}
	function sp(n, t, i, r) {
	    for (var u = -1, o = n.length, s = i.length, f = -1, h = t.length, c = cu(o - s, 0), e = Array(h + c), l = !r; ++f < h; )
		e[f] = t[f];
	    while (++u < s)
		(l || u < o) && (e[i[u]] = n[u]);
	    while (c--)
		e[f++] = n[u++];
	    return e
	}
	function hp(n, t, i, r) {
	    for (var u = -1, s = n.length, h = -1, c = i.length, e = -1, l = t.length, a = cu(s - c, 0), f = Array(a + l), v = !r, o; ++u < a; )
		f[u] = n[u];
	    for (o = u; ++e < l; )
		f[o + e] = t[e];
	    while (++h < c)
		(v || u < s) && (f[o + i[h]] = n[u++]);
	    return f
	}
	function yu(n, t) {
	    var i = -1, r = n.length;
	    for (t || (t = Array(r)); ++i < r; )
		t[i] = n[i];
	    return t
	}
	function uc(n, t, i) {
	    return da(n, t, i)
	}
	function da(n, t, i, r) {
	    var f, e, u, o;
	    for (i || (i = {}), f = - 1, e = t.length; ++f < e; )
		u = t[f], o = r ? r(i[u], n[u], u, i, n) : n[u], lh(i, u, o);
	    return i
	}
	function cp(n, t) {
	    return uc(n, nw(n), t)
	}
	function vl(n, t) {
	    return function (i, r) {
		var u = ai(i) ? ys : bg, f = t ? t() : {};
		return u(i, n, ni(r), f)
	    }
	}
	function yh(t) {
	    return gt(function (i, r) {
		var e = -1, u = r.length, f = u > 1 ? r[u - 1] : n, s = u > 2 ? r[2] : n, o;
		for (f = typeof f == "function"?(u--, f):n, s && ho(r[0], r[1], s) && (f = u < 3?n:f, u = 1), i = Object(i); ++e < u; )
		    o = r[e], o && t(i, o, e, f);
		return i
	    })
	}
	function lp(n, t) {
	    return function (i, r) {
		if (i == null)
		    return i;
		if (!wu(i))
		    return n(i, r);
		for (var f = i.length, u = t ? f : -1, e = Object(i); t?u--:++u < f; )
		    if (r(e[u], u, e) === !1)
			break;
		return i
	    }
	}
	function ap(n) {
	    return function (t, i, r) {
		for (var s = -1, f = Object(t), e = r(t), o = e.length, u; o--; )
		    if (u = e[n ? o : ++s], i(f[u], u, f) === !1)
			break;
		return t
	    }
	}
	function dn(n, t, i) {
	    function r() {
		var t = this && this !== h && this instanceof r ? f : n;
		return t.apply(u ? i : this, arguments)
	    }
	    var u = t & o, f = fc(n);
	    return r
	}
	function vp(t) {
	    return function (i) {
		i = cr(i);
		var r = yi.test(i) ? c(i) : n, u = r ? r[0] : i.charAt(0), f = r ? r.slice(1).join("") : i.slice(1);
		return u[t]() + f
	    }
	}
	function ph(n) {
	    return function (t) {
		return et(yk(sk(t)), n, "")
	    }
	}
	function fc(n) {
	    return function () {
		var t = arguments, i, r;
		switch (t.length) {
		    case 0:
			return new n;
		    case 1:
			return new n(t[0]);
		    case 2:
			return new n(t[0], t[1]);
		    case 3:
			return new n(t[0], t[1], t[2]);
		    case 4:
			return new n(t[0], t[1], t[2], t[3]);
		    case 5:
			return new n(t[0], t[1], t[2], t[3], t[4]);
		    case 6:
			return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
		    case 7:
			return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
		}
		return i = vh(n.prototype), r = n.apply(i, t), ar(r) ? r : i
	    }
	}
	function gn(t, i, r) {
	    function f() {
		for (var o = arguments.length, s = Array(o), c = o, l = wh(f), a, v; c--; )
		    s[c] = arguments[c];
		return(a = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : g(s, l), o -= a.length, o < r) ? bp(t, i, yl, f.placeholder, n, s, a, n, n, r - o) : (v = this && this !== h && this instanceof f ? e : t, u(v, this, s))
	    }
	    var e = fc(t);
	    return f
	}
	function yp(t) {
	    return gt(function (i) {
		var u, r, h, e;
		i = lr(i, 1);
		var s = i.length, o = s, c = du.prototype.thru;
		for (t && i.reverse(); o--; ) {
		    if (u = i[o], typeof u != "function")
			throw new ku(f);
		    c && !r && bl(u) == "wrapper" && (r = new du([], !0))
		}
		for (o = r?o:s; ++o < s; )
		    u = i[o], h = bl(u), e = h == "wrapper" ? wl(u) : n, r = e && iv(e[0]) && e[1] == (p | l | a | ui) && !e[4].length && e[9] == 1 ? r[bl(e[0])].apply(r, e[3]) : u.length == 1 && iv(u) ? r[h]() : r.thru(u);
		return function () {
		    var f = arguments, n = f[0], t, u;
		    if (r && f.length == 1 && ai(n) && n.length >= st)
			return r.plant(n).value();
		    for (t = 0, u = s?i[t].apply(this, f):n; ++t < s; )
			u = i[t].call(this, u);
		    return u
		}
	    })
	}
	function yl(t, i, r, u, f, e, s, c, a, v) {
	    function w() {
		for (var o = arguments.length, p = o, n = Array(o), tt, ut, ft, rt, l; p--; )
		    n[p] = arguments[p];
		return(y && (tt = wh(w), ut = nh(n, tt)), u && (n = sp(n, u, f, y)), e && (n = hp(n, e, s, y)), o -= ut, y && o < v) ? (ft = g(n, tt), bp(t, i, yl, w.placeholder, r, n, ft, c, a, v - o)) : (rt = d ? r : this, l = b ? rt[t] : t, o = n.length, c ? n = htt(n, c) : nt && o > 1 && n.reverse(), k && a < o && (n.length = a), this && this !== h && this instanceof w && (l = it || fc(l)), l.apply(rt, n))
	    }
	    var k = i & p, d = i & o, b = i & tt, y = i & (l | ct), nt = i & ru, it = b ? n : fc(t);
	    return w
	}
	function pp(n, t) {
	    return function (i, r) {
		return un(i, n, t(r), {})
	    }
	}
	function ga(n) {
	    return gt(function (t) {
		return t = r(lr(t, 1), ni()), gt(function (i) {
		    var r = this;
		    return n(t, function (n) {
			return u(n, r, i)
		    })
		})
	    })
	}
	function pl(t, i, r) {
	    var f, u, e;
	    return(i = ki(i), f = ii(t), !i || f >= i) ? "" : (u = i - f, r = r === n ? " " : r + "", e = ck(r, kc(u / ii(r))), yi.test(r) ? c(e).slice(0, u).join("") : e.slice(0, u))
	}
	function ntt(n, t, i, r) {
	    function f() {
		for (var a = -1, c = arguments.length, t = -1, l = r.length, o = Array(l + c), v = this && this !== h && this instanceof f ? s : n; ++t < l; )
		    o[t] = r[t];
		while (c--)
		    o[t++] = arguments[++a];
		return u(v, e ? i : this, o)
	    }
	    var e = t & o, s = fc(n);
	    return f
	}
	function wp(t) {
	    return function (i, r, u) {
		return u && typeof u != "number" && ho(i, r, u) && (r = u = n), i = lu(i), i = i === i ? i : 0, r === n ? (r = i, i = 0) : r = lu(r) || 0, u = u === n ? i < r ? 1 : -1 : lu(u) || 0, hn(i, r, u, t)
	    }
	}
	function bp(t, i, r, u, f, e, s, h, c, v) {
	    var y = i & l, b = h ? yu(h) : n, k = y ? s : n, d = y ? n : s, g = y ? e : n, nt = y ? n : e, w, p;
	    return i |= y ? a : lt, i &= ~(y ? lt : a), i & iu || (i &= ~(o | tt)), w = [t, i, f, g, k, nt, d, b, c, v], p = r.apply(n, w), iv(t) && rv(p, w), p.placeholder = u, p
	}
	function nv(n) {
	    var t = sh[n];
	    return function (n, i) {
		if (n = lu(n), i = ki(i), i) {
		    var r = (cr(n) + "e").split("e"), u = t(r[0] + "e" + (+r[1] + i));
		    return r = (cr(u) + "e").split("e"), +(r[0] + "e" + (+r[1] - i))
		}
		return t(n)
	    }
	}
	function po(t, i, r, u, e, s, h, c) {
	    var w = i & tt, y, b, k, p, v, d, g;
	    if (!w && typeof t != "function")
		throw new ku(f);
	    return y = u ? u.length : 0, y || (i &= ~(a | lt), u = e = n), h = h === n ? h : cu(ki(h), 0), c = c === n ? c : ki(c), y -= e ? e.length : 0, i & lt && (b = u, k = e, u = e = n), p = w ? n : wl(t), v = [t, i, r, u, e, b, k, s, h, c], p && stt(v, p), t = v[0], i = v[1], r = v[2], u = v[3], e = v[4], c = v[9] = v[9] == null ? w ? 0 : t.length : cu(v[9] - y, 0), !c && i & (l | ct) && (i &= ~(l | ct)), d = i && i != o ? i == l || i == ct ? gn(t, i, c) : i != a && i != (o | a) || e.length ? yl.apply(n, v) : ntt(t, i, r, u) : dn(t, i, r), g = p ? wa : rv, g(d, v)
	}
	function dp(t, i, r, u, f, e) {
	    var s = -1, y = f & it, w = f & fi, l = t.length, p = i.length, a, h, o, c, v;
	    if (l != p && !(y && p > l))
		return!1;
	    if (a = e.get(t), a)
		return a == i;
	    for (h = !0, e.set(t, i); ++s < l; ) {
		if (o = t[s], c = i[s], u && (v = y ? u(c, o, s, i, t, e) : u(o, c, s, t, i, e)), v !== n) {
		    if (v)
			continue;
		    h = !1;
		    break
		}
		if (w) {
		    if (!kr(i, function (n) {
			return o === n || r(o, n, u, f, e)
		    })) {
			h = !1;
			break
		    }
		} else if (!(o === c || r(o, c, u, f, e))) {
		    h = !1;
		    break
		}
	    }
	    return e["delete"](t), h
	}
	function ttt(n, t, i, r, u, f, e) {
	    var o, h, s;
	    switch (i) {
		case kt:
		    return n.byteLength != t.byteLength || !r(new yc(n), new yc(t)) ? !1 : !0;
		case at:
		case vt:
		    return+n == +t;
		case si:
		    return n.name == t.name && n.message == t.message;
		case yt:
		    return n != +n ? t != +t : n == +t;
		case pt:
		case wt:
		    return n == t + "";
		case b:
		    o = tu;
		case k:
		    return(h = f & it, o || (o = di), n.size != t.size && !h) ? !1 : (s = e.get(n), s) ? s == t : dp(o(n), o(t), r, u, f | fi, e.set(n, t));
		case ci:
		    if (tc)
			return tc.call(n) == tc.call(t)
	    }
	    return!1
	}
	function itt(t, i, r, u, f, e) {
	    var y = f & it, w = au(t), b = w.length, g = au(i), nt = g.length, s, o, k, h, p, c, l, d, a, v;
	    if (b != nt && !y)
		return!1;
	    for (s = b; s--; )
		if (o = w[s], !(y ? o in i : ca(i, o)))
		    return!1;
	    if (k = e.get(t), k)
		return k == i;
	    for (h = !0, e.set(t, i), p = y; ++s < b; ) {
		if (o = w[s], c = t[o], l = i[o], u && (d = y ? u(l, c, o, i, t, e) : u(c, l, o, t, i, e)), !(d === n ? c === l || r(c, l, u, f, e) : d)) {
		    h = !1;
		    break
		}
		p || (p = o == "constructor")
	    }
	    return h && !p && (a = t.constructor, v = i.constructor, a != v && "constructor"in t && "constructor"in i && !(typeof a == "function" && a instanceof a && typeof v == "function" && v instanceof v) && (h = !1)), e["delete"](t), h
	}
	function bl(n) {
	    for (var t = n.name + "", u = nc[t], f = vr.call(nc, t) ? u.length : 0, i, r; f--; )
		if (i = u[f], r = i.func, r == null || r == n)
		    return i.name;
	    return t
	}
	function ni() {
	    var n = dt.iteratee || kv;
	    return n = n === kv ? py : n, arguments.length ? n(arguments[0], arguments[1]) : n
	}
	function tv(n) {
	    for (var t = ek(n), i = t.length; i--; )
		t[i][2] = ott(t[i][1]);
	    return t
	}
	function kl(t, i) {
	    var r = t[i];
	    return yb(r) ? r : n
	}
	function wh(n) {
	    var t = vr.call(dt, "placeholder") ? dt : n;
	    return t.placeholder
	}
	function uf(n) {
	    return vu.call(n)
	}
	function rtt(n, t, i) {
	    for (var f = -1, e = i.length, u, r; ++f < e; ) {
		u = i[f];
		r = u.size;
		switch (u.type) {
		    case"drop":
			n += r;
			break;
		    case"dropRight":
			t -= r;
			break;
		    case"take":
			t = bu(t, n + r);
			break;
		    case"takeRight":
			n = cu(n, t - r)
		}
	    }
	    return{start: n, end: t}
	}
	function tw(t, i, r) {
	    var u, f;
	    return t == null ? !1 : (u = r(t, i), u || wo(i) || (i = ss(i), t = oc(t, i), t != null && (i = pu(i), u = r(t, i))), f = t ? t.length : n, u || !!f && sc(f) && d(i, f) && (ai(t) || oh(t) || eh(t)))
	}
	function utt(n) {
	    var i = n.length, t = n.constructor(i);
	    return i && typeof n[0] == "string" && vr.call(n, "index") && (t.index = n.index, t.input = n.input), t
	}
	function ftt(n) {
	    return typeof n.constructor == "function" && !ec(n) ? vh(pc(n)) : {}
	}
	function ett(n, t, i) {
	    var r = n.constructor;
	    switch (t) {
		case kt:
		    return op(n);
		case at:
		case vt:
		    return new r(+n);
		case gi:
		case nr:
		case tr:
		case ir:
		case rr:
		case ur:
		case fr:
		case er:
		case or:
		    return kn(n, i);
		case b:
		    return yn(n);
		case yt:
		case wt:
		    return new r(n);
		case pt:
		    return pn(n);
		case k:
		    return wn(n);
		case ci:
		    return bn(n)
	    }
	}
	function iw(t) {
	    var i = t ? t.length : n;
	    return sc(i) && (ai(t) || oh(t) || eh(t)) ? dr(i, String) : null
	}
	function ho(n, t, i) {
	    if (!ar(i))
		return!1;
	    var r = typeof t;
	    return(r == "number" ? wu(i) && d(t, i.length) : r == "string" && t in i) ? bo(i[t], n) : !1
	}
	function wo(n, t) {
	    return typeof n == "number" ? !0 : !ai(n) && (ke.test(n) || !be.test(n) || t != null && n in Object(t))
	}
	function bh(n) {
	    var t = typeof n;
	    return t == "number" || t == "boolean" || t == "string" && n != "__proto__" || n == null
	}
	function iv(n) {
	    var r = bl(n), t = dt[r], i;
	    return typeof t != "function" || !(r in vi.prototype) ? !1 : n === t ? !0 : (i = wl(t), !!i && n === i[0])
	}
	function ec(n) {
	    var t = n && n.constructor, i = typeof t == "function" && t.prototype || hh;
	    return n === i
	}
	function ott(n) {
	    return n === n && !ar(n)
	}
	function stt(n, t) {
	    var f = n[1], u = t[1], e = f | u, s = e < (o | tt | p), h = u == p && f == l || u == p && f == ui && n[7].length <= t[8] || u == (p | ui) && t[7].length <= t[8] && f == l, i, r;
	    return(s || h) ? (u & o && (n[2] = t[2], e |= f & o ? 0 : iu), i = t[3], i && (r = n[3], n[3] = r ? sp(r, i, t[4]) : yu(i), n[4] = r ? g(n[3], ri) : yu(t[4])), i = t[5], i && (r = n[5], n[5] = r ? hp(r, i, t[6]) : yu(i), n[6] = r ? g(n[5], ri) : yu(t[6])), i = t[7], i && (n[7] = yu(i)), u & p && (n[8] = n[8] == null ? t[8] : bu(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = e, n) : n
	}
	function rw(t, i, r, u, f, e) {
	    return ar(t) && ar(i) && hl(t, i, n, rw, e.set(i, t)), t
	}
	function oc(n, t) {
	    return t.length == 1 ? n : lc(n, yo(t, 0, -1))
	}
	function htt(t, i) {
	    for (var f = t.length, r = bu(i.length, f), e = yu(t), u; r--; )
		u = i[r], t[r] = d(u, f) ? e[u] : n;
	    return t
	}
	function uw(n) {
	    var t = [];
	    return cr(n).replace(de, function (n, i, r, u) {
		t.push(r ? u.replace(io, "$1") : i || n)
	    }), t
	}
	function fw(n) {
	    if (n instanceof vi)
		return n.clone();
	    var t = new du(n.__wrapped__, n.__chain__);
	    return t.__actions__ = yu(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
	}
	function ctt(n, t) {
	    var i;
	    if (t = cu(ki(t), 0), i = n ? n.length : 0, !i || t < 1)
		return[];
	    for (var r = 0, f = 0, u = Array(kc(i / t)); r < i; )
		u[f++] = yo(n, r, r += t);
	    return u
	}
	function ltt(n) {
	    for (var i = -1, u = n ? n.length : 0, f = 0, r = [], t; ++i < u; )
		t = n[i], t && (r[f++] = t);
	    return r
	}
	function ew(t, i, r) {
	    var u = t ? t.length : 0;
	    return u ? (i = r || i === n ? 1 : ki(i), yo(t, i < 0 ? 0 : i, u)) : []
	}
	function ow(t, i, r) {
	    var u = t ? t.length : 0;
	    return u ? (i = r || i === n ? 1 : ki(i), i = u - i, yo(t, 0, i < 0 ? 0 : i)) : []
	}
	function wtt(n, t) {
	    return n && n.length ? al(n, ni(t, 3), !0, !0) : []
	}
	function btt(n, t) {
	    return n && n.length ? al(n, ni(t, 3), !0) : []
	}
	function ktt(n, t, i, r) {
	    var u = n ? n.length : 0;
	    return u ? (i && typeof i != "number" && ho(n, t, i) && (i = 0, r = u), gg(n, t, i, r)) : []
	}
	function dtt(n, t) {
	    return n && n.length ? bi(n, ni(t, 3)) : -1
	}
	function gtt(n, t) {
	    return n && n.length ? bi(n, ni(t, 3), !0) : -1
	}
	function nit(n) {
	    var t = n ? n.length : 0;
	    return t ? lr(n, 1) : []
	}
	function tit(n) {
	    var t = n ? n.length : 0;
	    return t ? lr(n, ei) : []
	}
	function iit(t, i) {
	    var r = t ? t.length : 0;
	    return r ? (i = i === n ? 1 : ki(i), lr(t, i)) : []
	}
	function rit(n) {
	    for (var i = -1, u = n ? n.length : 0, r = {}, t; ++i < u; )
		t = n[i], r[t[0]] = t[1];
	    return r
	}
	function sw(t) {
	    return t ? t[0] : n
	}
	function uit(n, t, i) {
	    var r = n ? n.length : 0;
	    return r ? (i = ki(i), i < 0 && (i = cu(r + i, 0)), ot(n, t, i)) : -1
	}
	function fit(n) {
	    return ow(n, 1)
	}
	function hit(n, t) {
	    return n ? yd.call(n, t) : ""
	}
	function pu(t) {
	    var i = t ? t.length : 0;
	    return i ? t[i - 1] : n
	}
	function cit(t, i, r) {
	    var f = t ? t.length : 0, u;
	    if (!f)
		return-1;
	    if (u = f, r !== n && (u = ki(r), u = (u < 0 ? cu(f + u, 0) : bu(u, f - 1)) + 1), i !== i)
		return wf(t, u, !0);
	    while (u--)
		if (t[u] === i)
		    return u;
	    return-1
	}
	function cw(n, t) {
	    return n && n.length && t && t.length ? ya(n, t) : n
	}
	function lit(n, t, i) {
	    return n && n.length && t && t.length ? ya(n, t, ni(i)) : n
	}
	function ait(t, i, r) {
	    return t && t.length && i && i.length ? ya(t, i, n, r) : t
	}
	function vit(n, t) {
	    var r = [], u;
	    if (!(n && n.length))
		return r;
	    var i = -1, f = [], e = n.length;
	    for (t = ni(t, 3); ++i < e; )
		u = n[i], t(u, i, n) && (r.push(u), f.push(i));
	    return ip(n, f), r
	}
	function uv(n) {
	    return n ? bd.call(n) : n
	}
	function yit(t, i, r) {
	    var u = t ? t.length : 0;
	    return u ? (r && typeof r != "number" && ho(t, i, r) ? (i = 0, r = u) : (i = i == null ? 0 : ki(i), r = r === n ? u : ki(r)), yo(t, i, r)) : []
	}
	function pit(n, t) {
	    return ll(n, t)
	}
	function wit(n, t, i) {
	    return ba(n, t, ni(i))
	}
	function bit(n, t) {
	    var r = n ? n.length : 0, i;
	    return r && (i = ll(n, t), i < r && bo(n[i], t)) ? i : -1
	}
	function kit(n, t) {
	    return ll(n, t, !0)
	}
	function dit(n, t, i) {
	    return ba(n, t, ni(i), !0)
	}
	function git(n, t) {
	    var r = n ? n.length : 0, i;
	    return r && (i = ll(n, t, !0) - 1, bo(n[i], t)) ? i : -1
	}
	function nrt(n) {
	    return n && n.length ? ln(n) : []
	}
	function trt(n, t) {
	    return n && n.length ? rp(n, ni(t)) : []
	}
	function irt(n) {
	    return ew(n, 1)
	}
	function rrt(t, i, r) {
	    return(t && t.length) ? (i = r || i === n ? 1 : ki(i), yo(t, 0, i < 0 ? 0 : i)) : []
	}
	function urt(t, i, r) {
	    var u = t ? t.length : 0;
	    return u ? (i = r || i === n ? 1 : ki(i), i = u - i, yo(t, i < 0 ? 0 : i, u)) : []
	}
	function frt(n, t) {
	    return n && n.length ? al(n, ni(t, 3), !1, !0) : []
	}
	function ert(n, t) {
	    return n && n.length ? al(n, ni(t, 3)) : []
	}
	function crt(n) {
	    return n && n.length ? fh(n) : []
	}
	function lrt(n, t) {
	    return n && n.length ? fh(n, ni(t)) : []
	}
	function art(t, i) {
	    return t && t.length ? fh(t, n, i) : []
	}
	function fv(n) {
	    if (!(n && n.length))
		return[];
	    var t = 0;
	    return n = nt(n, function (n) {
		if (yr(n))
		    return t = cu(n.length, t), !0
	    }), dr(t, function (t) {
		return r(n, va(t))
	    })
	}
	function aw(t, i) {
	    if (!(t && t.length))
		return[];
	    var f = fv(t);
	    return i == null ? f : r(f, function (t) {
		return u(i, n, t)
	    })
	}
	function krt(n, t) {
	    return ep(n || [], t || [], lh)
	}
	function drt(n, t) {
	    return ep(n || [], t || [], cl)
	}
	function yw(n) {
	    var t = dt(n);
	    return t.__chain__ = !0, t
	}
	function grt(n, t) {
	    return t(n), n
	}
	function dl(n, t) {
	    return t(n)
	}
	function nut() {
	    return yw(this)
	}
	function tut() {
	    return new du(this.value(), this.__chain__)
	}
	function iut(n) {
	    return this.map(n).flatten()
	}
	function rut() {
	    this.__values__ === n && (this.__values__ = yv(this.value()));
	    var t = this.__index__ >= this.__values__.length, i = t ? n : this.__values__[this.__index__++];
	    return{done: t, value: i}
	}
	function uut() {
	    return this
	}
	function fut(t) {
	    for (var u, r = this, i, f; r instanceof tl; )
		i = fw(r), i.__index__ = 0, i.__values__ = n, u ? f.__wrapped__ = i : u = i, f = i, r = r.__wrapped__;
	    return f.__wrapped__ = t, u
	}
	function eut() {
	    var i = this.__wrapped__, t;
	    return i instanceof vi ? (t = i, this.__actions__.length && (t = new vi(this)), t = t.reverse(), t.__actions__.push({func: dl, args: [uv], thisArg: n}), new du(t, this.__chain__)) : this.thru(uv)
	}
	function out() {
	    return fp(this.__wrapped__, this.__actions__)
	}
	function sut(t, i, r) {
	    var u = ai(t) ? hf : dg;
	    return r && ho(t, i, r) && (i = n), u(t, ni(i, 3))
	}
	function hut(n, t) {
	    var i = ai(n) ? nt : yy;
	    return i(n, ni(t, 3))
	}
	function cut(t, i) {
	    if (i = ni(i, 3), ai(t)) {
		var r = bi(t, i);
		return r > -1 ? t[r] : n
	    }
	    return wi(t, i, sf)
	}
	function lut(t, i) {
	    if (i = ni(i, 3), ai(t)) {
		var r = bi(t, i, !0);
		return r > -1 ? t[r] : n
	    }
	    return wi(t, i, fl)
	}
	function aut(n, t) {
	    return lr(tb(n, t), 1)
	}
	function bw(n, t) {
	    return typeof t == "function" && ai(n) ? e(n, t) : sf(n, vo(t))
	}
	function kw(n, t) {
	    return typeof t == "function" && ai(n) ? ws(n, t) : fl(n, vo(t))
	}
	function vut(n, t, i, r) {
	    n = wu(n) ? n : na(n);
	    i = i && !r ? ki(i) : 0;
	    var u = n.length;
	    return i < 0 && (i = cu(u + i, 0)), oh(n) ? i <= u && n.indexOf(t, i) > -1 : !!u && ot(n, t, i) > -1
	}
	function tb(n, t) {
	    var i = ai(n) ? r : by;
	    return i(n, ni(t, 3))
	}
	function yut(t, i, r, u) {
	    return t == null ? [] : (ai(i) || (i = i == null ? [] : [i]), r = u ? n : r, ai(r) || (r = r == null ? [] : [r]), gy(t, i, r))
	}
	function put(n, t, i) {
	    var r = ai(n) ? et : cf, u = arguments.length < 3;
	    return r(n, ni(t, 4), i, u, sf)
	}
	function wut(n, t, i) {
	    var r = ai(n) ? bs : cf, u = arguments.length < 3;
	    return r(n, ni(t, 4), i, u, fl)
	}
	function but(n, t) {
	    var i = ai(n) ? nt : yy;
	    return t = ni(t, 3), i(n, function (n, i, r) {
		return!t(n, i, r)
	    })
	}
	function kut(t) {
	    var i = wu(t) ? t : na(t), r = i.length;
	    return r > 0 ? i[pa(0, r - 1)] : n
	}
	function rb(n, t) {
	    var r = -1, i = yv(n), f = i.length, o = f - 1, u, e;
	    for (t = ah(ki(t), 0, f); ++r < t; )
		u = pa(r, o), e = i[u], i[u] = i[r], i[r] = e;
	    return i.length = t, i
	}
	function dut(n) {
	    return rb(n, s)
	}
	function gut(n) {
	    if (n == null)
		return 0;
	    if (wu(n)) {
		var t = n.length;
		return t && oh(n) ? ii(n) : t
	    }
	    return au(n).length
	}
	function nft(t, i, r) {
	    var u = ai(t) ? kr : cn;
	    return r && ho(t, i, r) && (i = n), u(t, ni(i, 3))
	}
	function tft(n, t) {
	    if (typeof t != "function")
		throw new ku(f);
	    return n = ki(n), function () {
		if (--n < 1)
		    return t.apply(this, arguments)
	    }
	}
	function fb(t, i, r) {
	    return i = r ? n : i, i = t && i == null ? t.length : i, po(t, p, n, n, n, n, i)
	}
	function eb(t, i) {
	    var r;
	    if (typeof i != "function")
		throw new ku(f);
	    return t = ki(t), function () {
		return--t > 0 && (r = i.apply(this, arguments)), t <= 1 && (i = n), r
	    }
	}
	function ob(t, i, r) {
	    i = r ? n : i;
	    var u = po(t, l, n, n, n, n, n, i);
	    return u.placeholder = ob.placeholder, u
	}
	function sb(t, i, r) {
	    i = r ? n : i;
	    var u = po(t, ct, n, n, n, n, n, i);
	    return u.placeholder = sb.placeholder, u
	}
	function hb(t, i, r) {
	    function b() {
		u && dh(u);
		e && dh(e);
		c = 0;
		o = e = s = u = a = n
	    }
	    function k(i, r) {
		r && dh(r);
		e = u = a = n;
		i && (c = kh(), h = t.apply(s, o), u || e || (o = s = n))
	    }
	    function d() {
		var n = i - (kh() - l);
		n <= 0 || n > i ? k(a, e) : u = wc(d, n)
	    }
	    function g() {
		return(u && a || e && p) && (h = t.apply(s, o)), b(), h
	    }
	    function nt() {
		k(p, u)
	    }
	    function w() {
		var w, f, r;
		return o = arguments, l = kh(), s = this, a = p && (u || !v), y === !1 ? w = v && !u : (c || e || v || (c = l), f = y - (l - c), r = (f <= 0 || f > y) && (v || e), r ? (e && (e = dh(e)), c = l, h = t.apply(s, o)) : e || (e = wc(nt, f))), r && u ? u = dh(u) : u || i === y || (u = wc(d, i)), w && (r = !0, h = t.apply(s, o)), !r || u || e || (o = s = n), h
	    }
	    var o, e, h, l, s, u, a, c = 0, v = !1, y = !1, p = !0;
	    if (typeof t != "function")
		throw new ku(f);
	    return i = lu(i) || 0, ar(r) && (v = !!r.leading, y = "maxWait"in r && cu(lu(r.maxWait) || 0, i), p = "trailing"in r ? !!r.trailing : p), w.cancel = b, w.flush = g, w
	}
	function ift(n) {
	    return po(n, ru)
	}
	function ov(n, t) {
	    if (typeof n != "function" || t && typeof t != "function")
		throw new ku(f);
	    var i = function () {
		var r = arguments, u = t ? t.apply(this, r) : r[0], f = i.cache, e;
		return f.has(u) ? f.get(u) : (e = n.apply(this, r), i.cache = f.set(u, e), e)
	    };
	    return i.cache = new ov.Cache, i
	}
	function rft(n) {
	    if (typeof n != "function")
		throw new ku(f);
	    return function () {
		return!n.apply(this, arguments)
	    }
	}
	function uft(n) {
	    return eb(2, n)
	}
	function gt(t, i) {
	    if (typeof t != "function")
		throw new ku(f);
	    return i = cu(i === n ? t.length - 1 : ki(i), 0), function () {
		for (var r = arguments, n = -1, o = cu(r.length - i, 0), f = Array(o), e; ++n < o; )
		    f[n] = r[i + n];
		switch (i) {
		    case 0:
			return t.call(this, f);
		    case 1:
			return t.call(this, r[0], f);
		    case 2:
			return t.call(this, r[0], r[1], f)
		}
		for (e = Array(i + 1), n = - 1; ++n < i; )
		    e[n] = r[n];
		return e[i] = f, u(t, this, e)
	    }
	}
	function oft(t, i) {
	    if (typeof t != "function")
		throw new ku(f);
	    return i = i === n ? 0 : cu(ki(i), 0), gt(function (n) {
		var r = n[i], f = n.slice(0, i);
		return r && ft(f, r), u(t, this, f)
	    })
	}
	function sft(n, t, i) {
	    var r = !0, u = !0;
	    if (typeof n != "function")
		throw new ku(f);
	    return ar(i) && (r = "leading"in i ? !!i.leading : r, u = "trailing"in i ? !!i.trailing : u), hb(n, t, {leading: r, maxWait: t, trailing: u})
	}
	function hft(n) {
	    return fb(n, 1)
	}
	function cft(n, t) {
	    return t = t == null ? ff : t, sv(t, n)
	}
	function lft() {
	    if (!arguments.length)
		return[];
	    var n = arguments[0];
	    return ai(n) ? n : [n]
	}
	function aft(n) {
	    return tf(n, !1, !0)
	}
	function vft(n, t) {
	    return tf(n, !1, !0, t)
	}
	function yft(n) {
	    return tf(n, !0, !0)
	}
	function pft(n, t) {
	    return tf(n, !0, !0, t)
	}
	function bo(n, t) {
	    return n === t || n !== n && t !== t
	}
	function hv(n, t) {
	    return n > t
	}
	function wft(n, t) {
	    return n >= t
	}
	function eh(n) {
	    return yr(n) && vr.call(n, "callee") && (!ia.call(n, "callee") || vu.call(n) == rt)
	}
	function bft(n) {
	    return pr(n) && vu.call(n) == kt
	}
	function wu(n) {
	    return n != null && sc(gp(n)) && !ao(n)
	}
	function yr(n) {
	    return pr(n) && wu(n)
	}
	function kft(n) {
	    return n === !0 || n === !1 || pr(n) && vu.call(n) == at
	}
	function dft(n) {
	    return pr(n) && vu.call(n) == vt
	}
	function gft(n) {
	    return!!n && n.nodeType === 1 && pr(n) && !av(n)
	}
	function net(n) {
	    if (wu(n) && (ai(n) || oh(n) || ao(n.splice) || eh(n)))
		return!n.length;
	    for (var t in n)
		if (vr.call(n, t))
		    return!1;
	    return!0
	}
	function tet(n, t) {
	    return rc(n, t)
	}
	function iet(t, i, r) {
	    r = typeof r == "function" ? r : n;
	    var u = r ? r(t, i) : n;
	    return u === n ? rc(t, i, r) : !!u
	}
	function lv(n) {
	    return pr(n) ? vu.call(n) == si || typeof n.message == "string" && typeof n.name == "string" : !1
	}
	function ret(n) {
	    return typeof n == "number" && vd(n)
	}
	function ao(n) {
	    var t = ar(n) ? vu.call(n) : "";
	    return t == hi || t == fu
	}
	function vb(n) {
	    return typeof n == "number" && n == ki(n)
	}
	function sc(n) {
	    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= w
	}
	function ar(n) {
	    var t = typeof n;
	    return!!n && (t == "object" || t == "function")
	}
	function pr(n) {
	    return!!n && typeof n == "object"
	}
	function uet(n) {
	    return pr(n) && uf(n) == b
	}
	function fet(n, t) {
	    return n === t || aa(n, t, tv(t))
	}
	function eet(t, i, r) {
	    return r = typeof r == "function" ? r : n, aa(t, i, tv(i), r)
	}
	function oet(n) {
	    return pb(n) && n != +n
	}
	function yb(n) {
	    return n == null ? !1 : ao(n) ? ny.test(ko.call(n)) : pr(n) && (ti(n) ? ny : oo).test(n)
	}
	function set(n) {
	    return n === null
	}
	function het(n) {
	    return n == null
	}
	function pb(n) {
	    return typeof n == "number" || pr(n) && vu.call(n) == yt
	}
	function av(n) {
	    var i, t;
	    return!pr(n) || vu.call(n) != v || ti(n) ? !1 : (i = pc(n), i === null) ? !0 : (t = i.constructor, typeof t == "function" && t instanceof t && ko.call(t) == hd)
	}
	function wb(n) {
	    return ar(n) && vu.call(n) == pt
	}
	function cet(n) {
	    return vb(n) && n >= -w && n <= w
	}
	function aet(n) {
	    return pr(n) && uf(n) == k
	}
	function oh(n) {
	    return typeof n == "string" || !ai(n) && pr(n) && vu.call(n) == wt
	}
	function bb(n) {
	    return typeof n == "symbol" || pr(n) && vu.call(n) == ci
	}
	function hc(n) {
	    return pr(n) && sc(n.length) && !!i[vu.call(n)]
	}
	function vet(t) {
	    return t === n
	}
	function yet(n) {
	    return pr(n) && uf(n) == bt
	}
	function pet(n) {
	    return pr(n) && vu.call(n) == he
	}
	function vv(n, t) {
	    return n < t
	}
	function wet(n, t) {
	    return n <= t
	}
	function yv(n) {
	    if (!n)
		return[];
	    if (wu(n))
		return oh(n) ? c(n) : yu(n);
	    if (es && n[es])
		return bf(n[es]());
	    var t = uf(n), i = t == b ? tu : t == k ? di : na;
	    return i(n)
	}
	function ki(n) {
	    var i, t;
	    return n ? (n = lu(n), n === ei || n === -ei) ? (i = n < 0 ? -1 : 1, i * fe) : (t = n % 1, n === n ? t ? n - t : n : 0) : n === 0 ? n : 0
	}
	function kb(n) {
	    return n ? ah(ki(n), 0, s) : 0
	}
	function lu(n) {
	    var t, i;
	    return(ar(n) && (t = ao(n.valueOf) ? n.valueOf() : n, n = ar(t) ? t + "" : t), typeof n != "string") ? n === 0 ? n : +n : (n = n.replace(hr, ""), i = eo.test(n), i || so.test(n) ? cs(n.slice(2), i ? 2 : 8) : fo.test(n) ? ee : +n)
	}
	function db(n) {
	    return uc(n, gu(n))
	}
	function bet(n) {
	    return ah(ki(n), -w, w)
	}
	function cr(n) {
	    if (typeof n == "string")
		return n;
	    if (n == null)
		return"";
	    if (bb(n))
		return ey ? ey.call(n) : "";
	    var t = n + "";
	    return t == "0" && 1 / n == -ei ? "-0" : t
	}
	function not(n, t) {
	    var i = vh(n);
	    return t ? ay(i, t) : i
	}
	function tot(n, t) {
	    return wi(n, ni(t, 3), rf, !0)
	}
	function iot(n, t) {
	    return wi(n, ni(t, 3), ha, !0)
	}
	function rot(n, t) {
	    return n == null ? n : el(n, vo(t), gu)
	}
	function uot(n, t) {
	    return n == null ? n : sa(n, vo(t), gu)
	}
	function fot(n, t) {
	    return n && rf(n, vo(t))
	}
	function eot(n, t) {
	    return n && ha(n, vo(t))
	}
	function oot(n) {
	    return n == null ? [] : ol(n, au(n))
	}
	function sot(n) {
	    return n == null ? [] : ol(n, gu(n))
	}
	function lc(t, i, r) {
	    var u = t == null ? n : sl(t, i);
	    return u === n ? r : u
	}
	function ik(n, t) {
	    return tw(n, t, ca)
	}
	function rk(n, t) {
	    return tw(n, t, tn)
	}
	function au(n) {
	    var r = ec(n), t;
	    if (!(r || wu(n)))
		return en(n);
	    var u = iw(n), f = !!u, i = u || [], e = i.length;
	    for (t in n)
		!ca(n, t) || f && (t == "length" || d(t, e)) || r && t == "constructor" || i.push(t);
	    return i
	}
	function gu(n) {
	    for (var r = -1, e = ec(n), u = wy(n), o = u.length, f = iw(n), s = !!f, i = f || [], h = i.length, t; ++r < o; )
		t = u[r], s && (t == "length" || d(t, h)) || t == "constructor" && (e || !vr.call(n, t)) || i.push(t);
	    return i
	}
	function aot(n, t) {
	    var i = {};
	    return t = ni(t, 3), rf(n, function (n, r, u) {
		i[t(n, r, u)] = n
	    }), i
	}
	function vot(n, t) {
	    var i = {};
	    return t = ni(t, 3), rf(n, function (n, r, u) {
		i[r] = t(n, r, u)
	    }), i
	}
	function wot(n, t) {
	    return t = ni(t), tp(n, function (n, i) {
		return!t(n, i)
	    })
	}
	function bot(n, t) {
	    return n == null ? {} : tp(n, ni(t))
	}
	function kot(t, i, r) {
	    if (wo(i, t))
		u = t == null ? n : t[i];
	    else {
		i = ss(i);
		var u = lc(t, i);
		t = oc(t, i)
	    }
	    return u === n && (u = r), ao(u) ? u.call(t) : u
	}
	function dot(n, t, i) {
	    return n == null ? n : cl(n, t, i)
	}
	function got(t, i, r, u) {
	    return u = typeof u == "function" ? u : n, t == null ? t : cl(t, i, r, u)
	}
	function ek(n) {
	    return af(n, au(n))
	}
	function nst(n) {
	    return af(n, gu(n))
	}
	function tst(n, t, i) {
	    var r = ai(n) || hc(n), u;
	    return t = ni(t, 4), i == null && (r || ar(n) ? (u = n.constructor, i = r ? ai(n) ? new u : [] : ao(u) ? vh(pc(n)) : {}) : i = {}), (r ? e : rf)(n, function (n, r, u) {
		return t(i, n, r, u)
	    }), i
	}
	function ist(n, t) {
	    return n == null ? !0 : an(n, t)
	}
	function rst(n, t, i) {
	    return n == null ? n : up(n, t, vo(i))
	}
	function ust(t, i, r, u) {
	    return u = typeof u == "function" ? u : n, t == null ? t : up(t, i, vo(r), u)
	}
	function na(n) {
	    return n ? nu(n, au(n)) : []
	}
	function fst(n) {
	    return n == null ? [] : nu(n, gu(n))
	}
	function est(t, i, r) {
	    return r === n && (r = i, i = n), r !== n && (r = lu(r), r = r === r ? r : 0), i !== n && (i = lu(i), i = i === i ? i : 0), ah(lu(t), i, r)
	}
	function ost(t, i, r) {
	    return i = lu(i) || 0, r === n ? (r = i, i = 0) : r = lu(r) || 0, t = lu(t), rn(t, i, r)
	}
	function sst(t, i, r) {
	    var f, u;
	    return(r && typeof r != "boolean" && ho(t, i, r) && (i = r = n), r === n && (typeof i == "boolean" ? (r = i, i = n) : typeof t == "boolean" && (r = t, t = n)), t === n && i === n ? (t = 0, i = 1) : (t = lu(t) || 0, i === n ? (i = t, t = 0) : i = lu(i) || 0), t > i && (f = t, t = i, i = f), r || t % 1 || i % 1) ? (u = uy(), bu(t + u * (i - t + hs("1e-" + ((u + "").length - 1))), i)) : pa(t, i)
	}
	function pv(n) {
	    return hk(cr(n).toLowerCase())
	}
	function sk(n) {
	    return n = cr(n), n && n.replace(co, th).replace(go, "")
	}
	function hst(t, i, r) {
	    t = cr(t);
	    i = typeof i == "string" ? i : i + "";
	    var u = t.length;
	    return r = r === n ? u : ah(ki(r), 0, u), r -= i.length, r >= 0 && t.indexOf(i, r) == r
	}
	function cst(n) {
	    return n = cr(n), n && ye.test(n) ? n.replace(ou, ih) : n
	}
	function lst(n) {
	    return n = cr(n), n && ge.test(n) ? n.replace(sr, "\\$&") : n
	}
	function pst(n, t, i) {
	    var r;
	    if (n = cr(n), t = ki(t), r = ii(n), !t || r >= t)
		return n;
	    var u = (t - r) / 2, f = dc(u), e = kc(u);
	    return pl("", f, i) + n + pl("", e, i)
	}
	function wst(n, t, i) {
	    return n = cr(n), n + pl(n, t, i)
	}
	function bst(n, t, i) {
	    return n = cr(n), pl(n, t, i) + n
	}
	function kst(n, t, i) {
	    return i || t == null ? t = 0 : t && (t = +t), n = cr(n).replace(hr, ""), wd(n, t || (uo.test(n) ? 16 : 10))
	}
	function ck(n, t) {
	    n = cr(n);
	    t = ki(t);
	    var i = "";
	    if (!n || t < 1 || t > w)
		return i;
	    do
		t % 2 && (i += n), t = dc(t / 2), n += n;
	    while (t);
	    return i
	}
	function dst() {
	    var n = arguments, t = cr(n[0]);
	    return n.length < 3 ? t : t.replace(n[1], n[2])
	}
	function gst(n, t, i) {
	    return cr(n).split(t, i)
	}
	function nht(n, t, i) {
	    return n = cr(n), i = ah(ki(i), 0, n.length), n.lastIndexOf(t, i) == i
	}
	function tht(t, i, r) {
	    var s = dt.templateSettings, e, f;
	    r && ho(t, i, r) && (i = n);
	    t = cr(t);
	    i = cc({}, i, s, ua);
	    var h = cc({}, i.imports, s.imports, ua), c = au(h), y = nu(h, c), l, o, a = 0, v = i.interpolate || li, u = "__p += '", p = ta((i.escape || li).source + "|" + v.source + "|" + (v === su ? ro : li).source + "|" + (i.evaluate || li).source + "|$", "g"), w = "//# sourceURL=" + ("sourceURL"in i ? i.sourceURL : "lodash.templateSources[" + ++us + "]") + "\n";
	    if (t.replace(p, function (n, i, r, f, e, s) {
		return r || (r = f), u += t.slice(a, s).replace(lo, rh), i && (l = !0, u += "' +\n__e(" + i + ") +\n'"), e && (o = !0, u += "';\n" + e + ";\n__p += '"), r && (u += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), a = s + n.length, n
	    }), u += "';\n", e = i.variable, e || (u = "with (obj) {\n" + u + "\n}\n"), u = (o ? u.replace(ce, "") : u).replace(le, "$1").replace(ae, "$1;"), u = "function(" + (e || "obj") + ") {\n" + (e ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + u + "return __p\n}", f = wv(function () {
		return Function(c, w + "return " + u).apply(n, y)
	    }), f.source = u, lv(f))
		throw f;
	    return f
	}
	function iht(n) {
	    return cr(n).toLowerCase()
	}
	function rht(n) {
	    return cr(n).toUpperCase()
	}
	function uht(t, i, r) {
	    if (t = cr(t), !t)
		return t;
	    if (r || i === n)
		return t.replace(hr, "");
	    if (i = i + "", !i)
		return t;
	    var u = c(t), f = c(i);
	    return u.slice(vf(u, f), yf(u, f) + 1).join("")
	}
	function fht(t, i, r) {
	    if (t = cr(t), !t)
		return t;
	    if (r || i === n)
		return t.replace(to, "");
	    if (i = i + "", !i)
		return t;
	    var u = c(t);
	    return u.slice(0, yf(u, c(i)) + 1).join("")
	}
	function eht(t, i, r) {
	    if (t = cr(t), !t)
		return t;
	    if (r || i === n)
		return t.replace(no, "");
	    if (i = i + "", !i)
		return t;
	    var u = c(t);
	    return u.slice(vf(u, c(i))).join("")
	}
	function oht(t, i) {
	    var s = gf, e = ne, r, h, o, u, f, v, y, l, a;
	    if (ar(i) && (r = "separator"in i ? i.separator : r, s = "length"in i ? ki(i.length) : s, e = "omission"in i ? cr(i.omission) : e), t = cr(t), h = t.length, yi.test(t) && (o = c(t), h = o.length), s >= h)
		return t;
	    if (u = s - ii(e), u < 1)
		return e;
	    if (f = o ? o.slice(0, u).join("") : t.slice(0, u), r === n)
		return f + e;
	    if (o && (u += f.length - u), wb(r)) {
		if (t.slice(u).search(r)) {
		    for (y = f, r.global || (r = ta(r.source, cr(hu.exec(r)) + "g")), r.lastIndex = 0; v = r.exec(y); )
			l = v.index;
		    f = f.slice(0, l === n ? u : l)
		}
	    } else
		t.indexOf(r, u) != u && (a = f.lastIndexOf(r), a > -1 && (f = f.slice(0, a)));
	    return f + e
	}
	function sht(n) {
	    return n = cr(n), n && ve.test(n) ? n.replace(eu, uh) : n
	}
	function yk(t, i, r) {
	    return t = cr(t), i = r ? n : i, i === n && (i = is.test(t) ? ts : ns), t.match(i) || []
	}
	function hht(n) {
	    var t = n ? n.length : 0, i = ni();
	    return n = t ? r(n, function (n) {
		if (typeof n[1] != "function")
		    throw new ku(f);
		return[i(n[0]), n[1]]
	    }) : [], gt(function (i) {
		for (var f = -1, r; ++f < t; )
		    if (r = n[f], u(r[0], this, i))
			return u(r[1], this, i)
	    })
	}
	function cht(n) {
	    return kg(tf(n, !0))
	}
	function bv(n) {
	    return function () {
		return n
	    }
	}
	function ff(n) {
	    return n
	}
	function kv(n) {
	    return py(typeof n == "function" ? n : tf(n, !0))
	}
	function lht(n) {
	    return ky(tf(n, !0))
	}
	function aht(n, t) {
	    return dy(n, tf(t, !0))
	}
	function dv(n, t, i) {
	    var u = au(t), r = ol(t, u), f, o;
	    return i != null || ar(t) && (r.length || !u.length) || (i = t, t = n, n = this, r = ol(t, au(t))), f = ar(i) && "chain"in i ? i.chain : !0, o = ao(n), e(r, function (i) {
		var r = t[i];
		n[i] = r;
		o && (n.prototype[i] = function () {
		    var i = this.__chain__, t, u;
		    return f || i ? (t = n(this.__wrapped__), u = t.__actions__ = yu(this.__actions__), u.push({func: r, args: arguments, thisArg: n}), t.__chain__ = i, t) : r.apply(n, ft([this.value()], arguments))
		})
	    }), n
	}
	function vht() {
	    return h._ === this && (h._ = cd), this
	}
	function gv() {
	}
	function yht(n) {
	    return n = ki(n), function () {
		return arguments[n]
	    }
	}
	function gk(n) {
	    return wo(n) ? va(n) : sn(n)
	}
	function kht(t) {
	    return function (i) {
		return t == null ? n : sl(t, i)
	    }
	}
	function dht(n, t) {
	    var i, r, u;
	    if (n = ki(n), n < 1 || n > w)
		return[];
	    for (i = s, r = bu(n, s), t = vo(t), n -= s, u = dr(r, t); ++i < n; )
		t(i);
	    return u
	}
	function ght(n) {
	    return ai(n) ? r(n, String) : uw(n)
	}
	function nct(n) {
	    var t = ++sd;
	    return cr(n) + t
	}
	function tct(t, i) {
	    var r;
	    return t === n && i === n ? 0 : (t !== n && (r = t), i !== n && (r = r === n ? i : r + i), r)
	}
	function ict(t) {
	    return t && t.length ? pi(t, ff, hv) : n
	}
	function rct(t, i) {
	    return t && t.length ? pi(t, ni(i), hv) : n
	}
	function uct(n) {
	    return fd(n) / (n ? n.length : 0)
	}
	function fct(t) {
	    return t && t.length ? pi(t, ff, vv) : n
	}
	function ect(t, i) {
	    return t && t.length ? pi(t, ni(i), vv) : n
	}
	function oct(t, i) {
	    var r;
	    return t === n && i === n ? 0 : (t !== n && (r = t), i !== n && (r = r === n ? i : r - i), r)
	}
	function fd(n) {
	    return n && n.length ? lf(n, ff) : 0
	}
	function sct(n, t) {
	    return n && n.length ? lf(n, ni(t)) : 0
	}
	var sf, fl, el, sa, wa, kp, wl, gp, nw, rv, hw, lw, vw, pw, ww, dw, gw, nb, ib, ub, kh, gl, ev, cb, lb, ai, cv, nk, tk, fk, ok, lk, ak, vk, wv, pk, wk, bk, kk, dk, nd, td, id, rd, ud;
	ut = ut ? y.defaults({}, ut, y.pick(h, rs)) : h;
	var ed = ut.Date, od = ut.Error, sh = ut.Math, ta = ut.RegExp, ku = ut.TypeError, ac = ut.Array.prototype, hh = ut.Object.prototype, ko = ut.Function.prototype.toString, vr = hh.hasOwnProperty, sd = 0, hd = ko.call(Object), vu = hh.toString, cd = h._, ny = ta("^" + ko.call(vr).replace(sr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ty = of ? ut.Buffer : n, iy = ut.Reflect, vc = ut.Symbol, yc = ut.Uint8Array, dh = ut.clearTimeout, ry = iy ? iy.enumerate : n, pc = Object.getPrototypeOf, ld = Object.getOwnPropertySymbols, es = typeof (es = vc && vc.iterator) == "symbol" ? es : n, ad = Object.create, ia = hh.propertyIsEnumerable, wc = ut.setTimeout, bc = ac.splice, kc = sh.ceil, dc = sh.floor, vd = ut.isFinite, yd = ac.join, pd = Object.keys, cu = sh.max, bu = sh.min, wd = ut.parseInt, uy = sh.random, bd = ac.reverse, ef = kl(ut, "Map"), os = kl(ut, "Set"), ch = kl(ut, "WeakMap"), gh = kl(Object, "create"), gc = ch && new ch, fy = !ia.call({valueOf: 1}, "valueOf"), nc = {}, kd = ef ? ko.call(ef) : "", dd = os ? ko.call(os) : "", gd = ch ? ko.call(ch) : "", nl = vc ? vc.prototype : n, tc = nl ? nl.valueOf : n, ey = nl ? nl.toString : n;
	dt.templateSettings = {escape: pe, evaluate: we, interpolate: su, variable: "", imports: {_: dt}};
	sf = lp(rf);
	fl = lp(ha, !0);
	el = ap();
	sa = ap(!0);
	ry && !ia.call({valueOf: 1}, "valueOf") && (wy = function (n) {
	    return bf(ry(n))
	});
	wa = gc ? function (n, t) {
	    return gc.set(n, t), n
	} : ff;
	kp = (os && new os([1, 2]).size === 2) ? function (n) {
	    return new os(n)
	} : gv;
	wl = gc ? function (n) {
	    return gc.get(n)
	} : gv;
	gp = va("length");
	nw = ld || function () {
	    return[]
	};
	(ef && uf(new ef) != b || os && uf(new os) != k || ch && uf(new ch) != bt) && (uf = function (n) {
	    var t = vu.call(n), i = t == v ? n.constructor : null, r = typeof i == "function" ? ko.call(i) : "";
	    if (r)
		switch (r) {
		    case kd:
			return b;
		    case dd:
			return k;
		    case gd:
			return bt
		}
	    return t
	});
	rv = function () {
	    var n = 0, t = 0;
	    return function (i, r) {
		var u = kh(), f = ie - (u - t);
		if (t = u, f > 0) {
		    if (++n >= te)
			return i
		} else
		    n = 0;
		return wa(i, r)
	    }
	}();
	var att = gt(function (n, t) {
	    return ai(n) || (n = n == null ? [] : [Object(n)]), t = lr(t, 1), ps(n, t)
	}), vtt = gt(function (n, t) {
	    return yr(n) ? ls(n, lr(t, 1, !0)) : []
	}), ytt = gt(function (t, i) {
	    var r = pu(i);
	    return yr(r) && (r = n), yr(t) ? ls(t, lr(i, 1, !0), ni(r)) : []
	}), ptt = gt(function (t, i) {
	    var r = pu(i);
	    return yr(r) && (r = n), yr(t) ? ls(t, lr(i, 1, !0), n, r) : []
	});
	var eit = gt(function (n) {
	    var t = r(n, oa);
	    return t.length && t[0] === n[0] ? la(t) : []
	}), oit = gt(function (t) {
	    var u = pu(t), i = r(t, oa);
	    return u === pu(i) ? u = n : i.pop(), i.length && i[0] === t[0] ? la(i, ni(u)) : []
	}), sit = gt(function (t) {
	    var u = pu(t), i = r(t, oa);
	    return u === pu(i) ? u = n : i.pop(), i.length && i[0] === t[0] ? la(i, n, u) : []
	});
	hw = gt(cw);
	lw = gt(function (n, t) {
	    t = r(lr(t, 1), String);
	    var i = ea(n, t);
	    return ip(n, t.sort(pf)), i
	});
	var ort = gt(function (n) {
	    return fh(lr(n, 1, !0))
	}), srt = gt(function (t) {
	    var i = pu(t);
	    return yr(i) && (i = n), fh(lr(t, 1, !0), ni(i))
	}), hrt = gt(function (t) {
	    var i = pu(t);
	    return yr(i) && (i = n), fh(lr(t, 1, !0), n, i)
	});
	var vrt = gt(function (n, t) {
	    return yr(n) ? ls(n, t) : []
	}), yrt = gt(function (n) {
	    return ka(nt(n, yr))
	}), prt = gt(function (t) {
	    var i = pu(t);
	    return yr(i) && (i = n), ka(nt(t, yr), ni(i))
	}), wrt = gt(function (t) {
	    var i = pu(t);
	    return yr(i) && (i = n), ka(nt(t, yr), n, i)
	}), brt = gt(fv);
	vw = gt(function (t) {
	    var r = t.length, i = r > 1 ? t[r - 1] : n;
	    return i = typeof i == "function" ? (t.pop(), i) : n, aw(t, i)
	});
	pw = gt(function (t) {
	    t = lr(t, 1);
	    var r = t.length, u = r ? t[0] : 0, i = this.__wrapped__, f = function (n) {
		return ea(n, t)
	    };
	    return r > 1 || this.__actions__.length || !(i instanceof vi) || !d(u) ? this.thru(f) : (i = i.slice(u, +u + (r ? 1 : 0)), i.__actions__.push({func: dl, args: [f], thisArg: n}), new du(i, this.__chain__).thru(function (t) {
		return r && !t.length && t.push(n), t
	    }))
	});
	ww = vl(function (n, t, i) {
	    vr.call(n, i) ? ++n[i] : n[i] = 1
	});
	dw = vl(function (n, t, i) {
	    vr.call(n, i) ? n[i].push(t) : n[i] = [t]
	});
	gw = gt(function (t, i, r) {
	    var e = -1, o = typeof i == "function", s = wo(i), f = wu(t) ? Array(t.length) : [];
	    return sf(t, function (t) {
		var h = o ? i : s && t != null ? t[i] : n;
		f[++e] = h ? u(h, t, r) : ic(t, i, r)
	    }), f
	});
	nb = vl(function (n, t, i) {
	    n[i] = t
	});
	ib = vl(function (n, t, i) {
	    n[i ? 0 : 1].push(t)
	}, function () {
	    return[[], []]
	});
	ub = gt(function (n, t) {
	    if (n == null)
		return[];
	    var i = t.length;
	    return i > 1 && ho(n, t[0], t[1]) ? t = [] : i > 2 && ho(t[0], t[1], t[2]) && (t.length = 1), gy(n, lr(t, 1), [])
	});
	kh = ed.now;
	gl = gt(function (n, t, i) {
	    var r = o, u;
	    return i.length && (u = g(i, wh(gl)), r |= a), po(n, r, t, i, u)
	});
	ev = gt(function (n, t, i) {
	    var r = o | tt, u;
	    return i.length && (u = g(i, wh(ev)), r |= a), po(t, r, n, i, u)
	});
	cb = gt(function (n, t) {
	    return vy(n, 1, t)
	});
	lb = gt(function (n, t, i) {
	    return vy(n, lu(t) || 0, i)
	});
	var fft = gt(function (n, t) {
	    t = r(lr(t, 1), ni());
	    var i = t.length;
	    return gt(function (r) {
		for (var f = -1, e = bu(r.length, i); ++f < e; )
		    r[f] = t[f].call(this, r[f]);
		return u(n, this, r)
	    })
	}), sv = gt(function (t, i) {
	    var r = g(i, wh(sv));
	    return po(t, a, n, i, r)
	}), ab = gt(function (t, i) {
	    var r = g(i, wh(ab));
	    return po(t, lt, n, i, r)
	}), eft = gt(function (t, i) {
	    return po(t, ui, n, n, n, lr(i, 1))
	});
	ai = Array.isArray;
	cv = ty ? function (n) {
	    return n instanceof ty
	} : bv(!1);
	var ket = yh(function (n, t) {
	    if (fy || ec(t) || wu(t)) {
		uc(t, au(t), n);
		return
	    }
	    for (var i in t)
		vr.call(t, i) && lh(n, i, t[i])
	}), gb = yh(function (n, t) {
	    if (fy || ec(t) || wu(t)) {
		uc(t, gu(t), n);
		return
	    }
	    for (var i in t)
		lh(n, i, t[i])
	}), cc = yh(function (n, t, i, r) {
	    da(t, gu(t), n, r)
	}), det = yh(function (n, t, i, r) {
	    da(t, au(t), n, r)
	}), get = gt(function (n, t) {
	    return ea(n, lr(t, 1))
	});
	nk = gt(function (t) {
	    return t.push(n, ua), u(cc, n, t)
	});
	tk = gt(function (t) {
	    return t.push(n, rw), u(uk, n, t)
	});
	var hot = pp(function (n, t, i) {
	    n[t] = i
	}, bv(ff)), cot = pp(function (n, t, i) {
	    vr.call(n, t) ? n[t].push(i) : n[t] = [i]
	}, ni), lot = gt(ic);
	var yot = yh(function (n, t, i) {
	    hl(n, t, i)
	}), uk = yh(function (n, t, i, r) {
	    hl(n, t, i, r)
	}), pot = gt(function (n, t) {
	    return n == null ? {} : (t = r(lr(t, 1), String), np(n, ls(gu(n), t)))
	});
	fk = gt(function (n, t) {
	    return n == null ? {} : np(n, lr(t, 1))
	});
	ok = ph(function (n, t, i) {
	    return t = t.toLowerCase(), n + (i ? pv(t) : t)
	});
	var ast = ph(function (n, t, i) {
	    return n + (i ? "-" : "") + t.toLowerCase()
	}), vst = ph(function (n, t, i) {
	    return n + (i ? " " : "") + t.toLowerCase()
	}), yst = vp("toLowerCase"), hk = vp("toUpperCase");
	lk = ph(function (n, t, i) {
	    return n + (i ? "_" : "") + t.toLowerCase()
	});
	ak = ph(function (n, t, i) {
	    return n + (i ? " " : "") + pv(t)
	});
	vk = ph(function (n, t, i) {
	    return n + (i ? " " : "") + t.toUpperCase()
	});
	wv = gt(function (t, i) {
	    try {
		return u(t, n, i)
	    } catch (r) {
		return lv(r) ? r : new od(r)
	    }
	});
	pk = gt(function (n, t) {
	    return e(lr(t, 1), function (t) {
		n[t] = gl(n[t], n)
	    }), n
	});
	wk = yp();
	bk = yp(!0);
	kk = gt(function (n, t) {
	    return function (i) {
		return ic(i, n, t)
	    }
	});
	dk = gt(function (n, t) {
	    return function (i) {
		return ic(n, i, t)
	    }
	});
	var pht = ga(r), wht = ga(hf), bht = ga(kr);
	return nd = wp(), td = wp(!0), id = nv("ceil"), rd = nv("floor"), ud = nv("round"), dt.prototype = tl.prototype, dt.prototype.constructor = dt, du.prototype = vh(tl.prototype), du.prototype.constructor = du, vi.prototype = vh(tl.prototype), vi.prototype.constructor = vi, ra.prototype = gh ? gh(null) : hh, fs.prototype.clear = eg, fs.prototype["delete"] = og, fs.prototype.get = sg, fs.prototype.has = hg, fs.prototype.set = cg, il.prototype.push = lg, nf.prototype.clear = ag, nf.prototype["delete"] = vg, nf.prototype.get = yg, nf.prototype.has = pg, nf.prototype.set = wg, ov.Cache = fs, dt.after = tft, dt.ary = fb, dt.assign = ket, dt.assignIn = gb, dt.assignInWith = cc, dt.assignWith = det, dt.at = get, dt.before = eb, dt.bind = gl, dt.bindAll = pk, dt.bindKey = ev, dt.castArray = lft, dt.chain = yw, dt.chunk = ctt, dt.compact = ltt, dt.concat = att, dt.cond = hht, dt.conforms = cht, dt.constant = bv, dt.countBy = ww, dt.create = not, dt.curry = ob, dt.curryRight = sb, dt.debounce = hb, dt.defaults = nk, dt.defaultsDeep = tk, dt.defer = cb, dt.delay = lb, dt.difference = vtt, dt.differenceBy = ytt, dt.differenceWith = ptt, dt.drop = ew, dt.dropRight = ow, dt.dropRightWhile = wtt, dt.dropWhile = btt, dt.fill = ktt, dt.filter = hut, dt.flatMap = aut, dt.flatten = nit, dt.flattenDeep = tit, dt.flattenDepth = iit, dt.flip = ift, dt.flow = wk, dt.flowRight = bk, dt.fromPairs = rit, dt.functions = oot, dt.functionsIn = sot, dt.groupBy = dw, dt.initial = fit, dt.intersection = eit, dt.intersectionBy = oit, dt.intersectionWith = sit, dt.invert = hot, dt.invertBy = cot, dt.invokeMap = gw, dt.iteratee = kv, dt.keyBy = nb, dt.keys = au, dt.keysIn = gu, dt.map = tb, dt.mapKeys = aot, dt.mapValues = vot, dt.matches = lht, dt.matchesProperty = aht, dt.memoize = ov, dt.merge = yot, dt.mergeWith = uk, dt.method = kk, dt.methodOf = dk, dt.mixin = dv, dt.negate = rft, dt.nthArg = yht, dt.omit = pot, dt.omitBy = wot, dt.once = uft, dt.orderBy = yut, dt.over = pht, dt.overArgs = fft, dt.overEvery = wht, dt.overSome = bht, dt.partial = sv, dt.partialRight = ab, dt.partition = ib, dt.pick = fk, dt.pickBy = bot, dt.property = gk, dt.propertyOf = kht, dt.pull = hw, dt.pullAll = cw, dt.pullAllBy = lit, dt.pullAllWith = ait, dt.pullAt = lw, dt.range = nd, dt.rangeRight = td, dt.rearg = eft, dt.reject = but, dt.remove = vit, dt.rest = gt, dt.reverse = uv, dt.sampleSize = rb, dt.set = dot, dt.setWith = got, dt.shuffle = dut, dt.slice = yit, dt.sortBy = ub, dt.sortedUniq = nrt, dt.sortedUniqBy = trt, dt.split = gst, dt.spread = oft, dt.tail = irt, dt.take = rrt, dt.takeRight = urt, dt.takeRightWhile = frt, dt.takeWhile = ert, dt.tap = grt, dt.throttle = sft, dt.thru = dl, dt.toArray = yv, dt.toPairs = ek, dt.toPairsIn = nst, dt.toPath = ght, dt.toPlainObject = db, dt.transform = tst, dt.unary = hft, dt.union = ort, dt.unionBy = srt, dt.unionWith = hrt, dt.uniq = crt, dt.uniqBy = lrt, dt.uniqWith = art, dt.unset = ist, dt.unzip = fv, dt.unzipWith = aw, dt.update = rst, dt.updateWith = ust, dt.values = na, dt.valuesIn = fst, dt.without = vrt, dt.words = yk, dt.wrap = cft, dt.xor = yrt, dt.xorBy = prt, dt.xorWith = wrt, dt.zip = brt, dt.zipObject = krt, dt.zipObjectDeep = drt, dt.zipWith = vw, dt.extend = gb, dt.extendWith = cc, dv(dt, dt), dt.add = tct, dt.attempt = wv, dt.camelCase = ok, dt.capitalize = pv, dt.ceil = id, dt.clamp = est, dt.clone = aft, dt.cloneDeep = yft, dt.cloneDeepWith = pft, dt.cloneWith = vft, dt.deburr = sk, dt.endsWith = hst, dt.eq = bo, dt.escape = cst, dt.escapeRegExp = lst, dt.every = sut, dt.find = cut, dt.findIndex = dtt, dt.findKey = tot, dt.findLast = lut, dt.findLastIndex = gtt, dt.findLastKey = iot, dt.floor = rd, dt.forEach = bw, dt.forEachRight = kw, dt.forIn = rot, dt.forInRight = uot, dt.forOwn = fot, dt.forOwnRight = eot, dt.get = lc, dt.gt = hv, dt.gte = wft, dt.has = ik, dt.hasIn = rk, dt.head = sw, dt.identity = ff, dt.includes = vut, dt.indexOf = uit, dt.inRange = ost, dt.invoke = lot, dt.isArguments = eh, dt.isArray = ai, dt.isArrayBuffer = bft, dt.isArrayLike = wu, dt.isArrayLikeObject = yr, dt.isBoolean = kft, dt.isBuffer = cv, dt.isDate = dft, dt.isElement = gft, dt.isEmpty = net, dt.isEqual = tet, dt.isEqualWith = iet, dt.isError = lv, dt.isFinite = ret, dt.isFunction = ao, dt.isInteger = vb, dt.isLength = sc, dt.isMap = uet, dt.isMatch = fet, dt.isMatchWith = eet, dt.isNaN = oet, dt.isNative = yb, dt.isNil = het, dt.isNull = set, dt.isNumber = pb, dt.isObject = ar, dt.isObjectLike = pr, dt.isPlainObject = av, dt.isRegExp = wb, dt.isSafeInteger = cet, dt.isSet = aet, dt.isString = oh, dt.isSymbol = bb, dt.isTypedArray = hc, dt.isUndefined = vet, dt.isWeakMap = yet, dt.isWeakSet = pet, dt.join = hit, dt.kebabCase = ast, dt.last = pu, dt.lastIndexOf = cit, dt.lowerCase = vst, dt.lowerFirst = yst, dt.lt = vv, dt.lte = wet, dt.max = ict, dt.maxBy = rct, dt.mean = uct, dt.min = fct, dt.minBy = ect, dt.noConflict = vht, dt.noop = gv, dt.now = kh, dt.pad = pst, dt.padEnd = wst, dt.padStart = bst, dt.parseInt = kst, dt.random = sst, dt.reduce = put, dt.reduceRight = wut, dt.repeat = ck, dt.replace = dst, dt.result = kot, dt.round = ud, dt.runInContext = kf, dt.sample = kut, dt.size = gut, dt.snakeCase = lk, dt.some = nft, dt.sortedIndex = pit, dt.sortedIndexBy = wit, dt.sortedIndexOf = bit, dt.sortedLastIndex = kit, dt.sortedLastIndexBy = dit, dt.sortedLastIndexOf = git, dt.startCase = ak, dt.startsWith = nht, dt.subtract = oct, dt.sum = fd, dt.sumBy = sct, dt.template = tht, dt.times = dht, dt.toInteger = ki, dt.toLength = kb, dt.toLower = iht, dt.toNumber = lu, dt.toSafeInteger = bet, dt.toString = cr, dt.toUpper = rht, dt.trim = uht, dt.trimEnd = fht, dt.trimStart = eht, dt.truncate = oht, dt.unescape = sht, dt.uniqueId = nct, dt.upperCase = vk, dt.upperFirst = hk, dt.each = bw, dt.eachRight = kw, dt.first = sw, dv(dt, function () {
	    var n = {};
	    return rf(dt, function (t, i) {
		vr.call(dt.prototype, i) || (n[i] = t)
	    }), n
	}(), {chain: !1}), dt.VERSION = df, e(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) {
	    dt[n].placeholder = dt
	}), e(["drop", "take"], function (t, i) {
	    vi.prototype[t] = function (r) {
		var f = this.__filtered__, u;
		return f && !i ? new vi(this) : (r = r === n ? 1 : cu(ki(r), 0), u = this.clone(), f ? u.__takeCount__ = bu(r, u.__takeCount__) : u.__views__.push({size: bu(r, s), type: t + (u.__dir__ < 0 ? "Right" : "")}), u)
	    };
	    vi.prototype[t + "Right"] = function (n) {
		return this.reverse()[t](n).reverse()
	    }
	}), e(["filter", "map", "takeWhile"], function (n, t) {
	    var i = t + 1, r = i == uu || i == ue;
	    vi.prototype[n] = function (n) {
		var t = this.clone();
		return t.__iteratees__.push({iteratee: ni(n, 3), type: i}), t.__filtered__ = t.__filtered__ || r, t
	    }
	}), e(["head", "last"], function (n, t) {
	    var i = "take" + (t ? "Right" : "");
	    vi.prototype[n] = function () {
		return this[i](1).value()[0]
	    }
	}), e(["initial", "tail"], function (n, t) {
	    var i = "drop" + (t ? "" : "Right");
	    vi.prototype[n] = function () {
		return this.__filtered__ ? new vi(this) : this[i](1)
	    }
	}), vi.prototype.compact = function () {
	    return this.filter(ff)
	}, vi.prototype.find = function (n) {
	    return this.filter(n).head()
	}, vi.prototype.findLast = function (n) {
	    return this.reverse().find(n)
	}, vi.prototype.invokeMap = gt(function (n, t) {
	    return typeof n == "function" ? new vi(this) : this.map(function (i) {
		return ic(i, n, t)
	    })
	}), vi.prototype.reject = function (n) {
	    return n = ni(n, 3), this.filter(function (t) {
		return!n(t)
	    })
	}, vi.prototype.slice = function (t, i) {
	    t = ki(t);
	    var r = this;
	    return r.__filtered__ && (t > 0 || i < 0) ? new vi(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), i !== n && (i = ki(i), r = i < 0 ? r.dropRight(-i) : r.take(i - t)), r)
	}, vi.prototype.takeRightWhile = function (n) {
	    return this.reverse().takeWhile(n).reverse()
	}, vi.prototype.toArray = function () {
	    return this.take(s)
	}, rf(vi.prototype, function (t, i) {
	    var e = /^(?:filter|find|map|reject)|While$/.test(i), r = /^(?:head|last)$/.test(i), u = dt[r ? "take" + (i == "last" ? "Right" : "") : i], f = r || /^find/.test(i);
	    u && (dt.prototype[i] = function () {
		var o = this.__wrapped__, s = r ? [1] : arguments, h = o instanceof vi, a = s[0], c = h || ai(o), v = function (n) {
		    var t = u.apply(dt, ft([n], s));
		    return r && l ? t[0] : t
		}, i;
		c && e && typeof a == "function" && a.length != 1 && (h = c = !1);
		var l = this.__chain__, w = !!this.__actions__.length, y = f && !l, p = h && !w;
		return!f && c ? (o = p ? o : new vi(this), i = t.apply(o, s), i.__actions__.push({func: dl, args: [v], thisArg: n}), new du(i, l)) : y && p ? t.apply(this, s) : (i = this.thru(v), y ? r ? i.value()[0] : i.value() : i)
	    })
	}), e(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
	    var t = ac[n], i = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
	    dt.prototype[n] = function () {
		var n = arguments;
		return r && !this.__chain__ ? t.apply(this.value(), n) : this[i](function (i) {
		    return t.apply(i, n)
		})
	    }
	}), rf(vi.prototype, function (n, t) {
	    var i = dt[t], r, u;
	    i && (r = i.name + "", u = nc[r] || (nc[r] = []), u.push({name: t, func: i}))
	}), nc[yl(n, tt).name] = [{name: "wrapper", func: n}], vi.prototype.clone = ng, vi.prototype.reverse = tg, vi.prototype.value = ig, dt.prototype.at = pw, dt.prototype.chain = nut, dt.prototype.commit = tut, dt.prototype.flatMap = iut, dt.prototype.next = rut, dt.prototype.plant = fut, dt.prototype.reverse = eut, dt.prototype.toJSON = dt.prototype.valueOf = dt.prototype.value = out, es && (dt.prototype[es] = uut), dt
    }
    var n, df = "4.6.1", st = 200, f = "Expected a function", ht = "__lodash_hash_undefined__", ri = "__lodash_placeholder__", o = 1, tt = 2, iu = 4, l = 8, ct = 16, a = 32, lt = 64, p = 128, ui = 256, ru = 512, fi = 1, it = 2, gf = 30, ne = "...", te = 150, ie = 16, uu = 1, re = 2, ue = 3, ei = 1 / 0, w = 9007199254740991, fe = 17976931348623157e292, ee = NaN, s = 4294967295, oe = s - 1, se = s >>> 1, rt = "[object Arguments]", oi = "[object Array]", at = "[object Boolean]", vt = "[object Date]", si = "[object Error]", hi = "[object Function]", fu = "[object GeneratorFunction]", b = "[object Map]", yt = "[object Number]", v = "[object Object]", pt = "[object RegExp]", k = "[object Set]", wt = "[object String]", ci = "[object Symbol]", bt = "[object WeakMap]", he = "[object WeakSet]", kt = "[object ArrayBuffer]", gi = "[object Float32Array]", nr = "[object Float64Array]", tr = "[object Int8Array]", ir = "[object Int16Array]", rr = "[object Int32Array]", ur = "[object Uint8Array]", fr = "[object Uint8ClampedArray]", er = "[object Uint16Array]", or = "[object Uint32Array]", ce = /\b__p \+= '';/g, le = /\b(__p \+=) '' \+/g, ae = /(__e\(.*?\)|\b__t\)) \+\n'';/g, eu = /&(?:amp|lt|gt|quot|#39|#96);/g, ou = /[&<>"'`]/g, ve = RegExp(eu.source), ye = RegExp(ou.source), pe = /<%-([\s\S]+?)%>/g, we = /<%([\s\S]+?)%>/g, su = /<%=([\s\S]+?)%>/g, be = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ke = /^\w*$/, de = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, sr = /[\\^$.*+?()[\]{}|]/g, ge = RegExp(sr.source), hr = /^\s+|\s+$/g, no = /^\s+/, to = /\s+$/, io = /\\(\\)?/g, ro = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hu = /\w*$/, uo = /^0x/i, fo = /^[-+]0x[0-9a-f]+$/i, eo = /^0b[01]+$/i, oo = /^\[object .+?Constructor\]$/, so = /^0o[0-7]+$/i, ho = /^(?:0|[1-9]\d*)$/, co = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, li = /($^)/, lo = /['\n\r\u2028\u2029\\]/g, ai = "\\ud800-\\udfff", cu = "\\u0300-\\u036f\\ufe20-\\ufe23", lu = "\\u20d0-\\u20f0", au = "\\u2700-\\u27bf", vu = "a-z\\xdf-\\xf6\\xf8-\\xff", yu = "A-Z\\xc0-\\xd6\\xd8-\\xde", pu = "\\ufe0e\\ufe0f", wu = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ao = "[" + ai + "]", bu = "[" + wu + "]", vi = "[" + cu + lu + "]", ku = "\\d+", vo = "[" + au + "]", du = "[" + vu + "]", gu = "[^" + ai + wu + ku + au + vu + yu + "]", cr = "\\ud83c[\\udffb-\\udfff]", yo = "(?:" + vi + "|" + cr + ")", nf = "[^" + ai + "]", lr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ar = "[\\ud800-\\udbff][\\udc00-\\udfff]", ut = "[" + yu + "]", tf = "\\u200d", rf = "(?:" + du + "|" + gu + ")", po = "(?:" + ut + "|" + gu + ")", uf = yo + "?", ff = "[" + pu + "]?", wo = "(?:" + tf + "(?:" + [nf, lr, ar].join("|") + ")" + ff + uf + ")*", ef = ff + uf + wo, bo = "(?:" + [vo, lr, ar].join("|") + ")" + ef, ko = "(?:" + [nf + vi + "?", vi, lr, ar, ao].join("|") + ")", go = RegExp(vi, "g"), vr = RegExp(cr + "(?=" + cr + ")|" + ko + ef, "g"), yi = RegExp("[" + tf + ai + cu + lu + pu + "]"), ns = /[a-zA-Z0-9]+/g, ts = RegExp([ut + "?" + du + "+(?=" + [bu, ut, "$"].join("|") + ")", po + "+(?=" + [bu, ut + rf, "$"].join("|") + ")", ut + "?" + rf + "+", ut + "+", ku, bo].join("|"), "g"), is = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rs = ["Array", "Buffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], us = -1, i = {}, t, y;
    i[gi] = i[nr] = i[tr] = i[ir] = i[rr] = i[ur] = i[fr] = i[er] = i[or] = !0;
    i[rt] = i[oi] = i[kt] = i[at] = i[vt] = i[si] = i[hi] = i[b] = i[yt] = i[v] = i[pt] = i[k] = i[wt] = i[bt] = !1;
    t = {};
    t[rt] = t[oi] = t[kt] = t[at] = t[vt] = t[gi] = t[nr] = t[tr] = t[ir] = t[rr] = t[b] = t[yt] = t[v] = t[pt] = t[k] = t[wt] = t[ci] = t[ur] = t[fr] = t[er] = t[or] = !0;
    t[si] = t[hi] = t[bt] = !1;
    var fs = {"À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss"}, es = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, os = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`"}, dt = {"function": !0, object: !0}, ss = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, hs = parseFloat, cs = parseInt, gt = dt[typeof exports] && exports && !exports.nodeType ? exports : n, ni = dt[typeof module] && module && !module.nodeType ? module : n, of = ni && ni.exports === gt ? gt : n, ls = ki(gt && ni && typeof global == "object" && global), sf = ki(dt[typeof self] && self), yr = ki(dt[typeof window] && window), pr = ki(dt[typeof this] && this), h = ls || yr !== (pr && pr.window) && yr || sf || pr || Function("return this")();
    y = kf();
    (yr || sf || {})._ = y;
    typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function () {
	return y
    }) : gt && ni ? (of && ((ni.exports = y)._ = y), gt._ = y) : h._ = y
}.call(this), function (n) {
    var t = typeof self == "object" && self.self == self && self || typeof global == "object" && global.global == global && global, i, r;
    if (typeof define == "function" && define.amd)
	define(["underscore", "jquery", "exports"], function (i, r, u) {
	    t.Backbone = n(t, u, i, r)
	});
    else if (typeof exports != "undefined") {
	i = require("underscore");
	try {
	    r = require("jquery")
	} catch (u) {
	}
	n(t, exports, i, r)
    } else
	t.Backbone = n(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(function (n, t, i, r) {
    var ot = n.Backbone, y = Array.prototype.slice, h, k, d, c, g, l, o, nt, it, ut, et, v, s;
    t.VERSION = "1.2.3";
    t.$ = r;
    t.noConflict = function () {
	return n.Backbone = ot, this
    };
    t.emulateHTTP = !1;
    t.emulateJSON = !1;
    var st = function (n, t, r) {
	switch (n) {
	    case 1:
		return function () {
		    return i[t](this[r])
		};
	    case 2:
		return function (n) {
		    return i[t](this[r], n)
		};
	    case 3:
		return function (n, u) {
		    return i[t](this[r], w(n, this), u)
		};
	    case 4:
		return function (n, u, f) {
		    return i[t](this[r], w(n, this), u, f)
		};
	    default:
		return function () {
		    var n = y.call(arguments);
		    return n.unshift(this[r]), i[t].apply(i, n)
		}
	}
    }, p = function (n, t, r) {
	i.each(t, function (t, u) {
	    i[u] && (n.prototype[u] = st(t, u, r))
	})
    }, w = function (n, t) {
	return i.isFunction(n) ? n : i.isObject(n) && !t._isModel(n) ? ht(n) : i.isString(n) ? function (t) {
	    return t.get(n)
	} : n
    }, ht = function (n) {
	var t = i.matches(n);
	return function (n) {
	    return t(n.attributes)
	}
    }, u = t.Events = {}, b = /\s+/, e = function (n, t, r, u, f) {
	var o = 0, s;
	if (r && typeof r == "object")
	    for (u !== void 0 && ("context"in f) && f.context === void 0 && (f.context = u), s = i.keys(r); o < s.length; o++)
		t = e(n, t, s[o], r[s[o]], f);
	else if (r && b.test(r))
	    for (s = r.split(b); o < s.length; o++)
		t = n(t, s[o], u, f);
	else
	    t = n(t, r, u, f);
	return t
    };
    u.on = function (n, t, i) {
	return h(this, n, t, i)
    };
    h = function (n, t, i, r, u) {
	if (n._events = e(k, n._events || {}, t, i, {context: r, ctx: n, listening: u}), u) {
	    var f = n._listeners || (n._listeners = {});
	    f[u.id] = u
	}
	return n
    };
    u.listenTo = function (n, t, r) {
	var o;
	if (!n)
	    return this;
	var u = n._listenId || (n._listenId = i.uniqueId("l")), f = this._listeningTo || (this._listeningTo = {}), e = f[u];
	return e || (o = this._listenId || (this._listenId = i.uniqueId("l")), e = f[u] = {obj: n, objId: u, id: o, listeningTo: f, count: 0}), h(n, t, r, this, e), this
    };
    k = function (n, t, i, r) {
	if (i) {
	    var e = n[t] || (n[t] = []), f = r.context, o = r.ctx, u = r.listening;
	    u && u.count++;
	    e.push({callback: i, context: f, ctx: f || o, listening: u})
	}
	return n
    };
    u.off = function (n, t, i) {
	return this._events ? (this._events = e(d, this._events, n, t, {context: i, listeners: this._listeners}), this) : this
    };
    u.stopListening = function (n, t, r) {
	var u = this._listeningTo, e, f, o;
	if (!u)
	    return this;
	for (e = n ? [n._listenId] : i.keys(u), f = 0; f < e.length; f++) {
	    if (o = u[e[f]], !o)
		break;
	    o.obj.off(t, r, this)
	}
	return i.isEmpty(u) && (this._listeningTo = void 0), this
    };
    d = function (n, t, r, u) {
	var v, y, h, c, l, o;
	if (n) {
	    var e = 0, f, a = u.context, s = u.listeners;
	    if (!t && !r && !a) {
		for (v = i.keys(s); e < v.length; e++)
		    f = s[v[e]], delete s[f.id], delete f.listeningTo[f.objId];
		return
	    }
	    for (y = t ? [t] : i.keys(n); e < y.length; e++) {
		if (t = y[e], h = n[t], !h)
		    break;
		for (c = [], l = 0; l < h.length; l++)
		    o = h[l], r && r !== o.callback && r !== o.callback._callback || a && a !== o.context ? c.push(o) : (f = o.listening, f && --f.count == 0 && (delete s[f.id], delete f.listeningTo[f.objId]));
		c.length ? n[t] = c : delete n[t]
	    }
	    if (i.size(n))
		return n
	}
    };
    u.once = function (n, t, r) {
	var u = e(c, {}, n, t, i.bind(this.off, this));
	return this.on(u, void 0, r)
    };
    u.listenToOnce = function (n, t, r) {
	var u = e(c, {}, t, r, i.bind(this.stopListening, this, n));
	return this.listenTo(n, u)
    };
    c = function (n, t, r, u) {
	if (r) {
	    var f = n[t] = i.once(function () {
		u(t, f);
		r.apply(this, arguments)
	    });
	    f._callback = r
	}
	return n
    };
    u.trigger = function (n) {
	var i, r, t;
	if (!this._events)
	    return this;
	for (i = Math.max(0, arguments.length - 1), r = Array(i), t = 0; t < i; t++)
	    r[t] = arguments[t + 1];
	return e(g, this._events, n, void 0, r), this
    };
    g = function (n, t, i, r) {
	if (n) {
	    var f = n[t], u = n.all;
	    f && u && (u = u.slice());
	    f && l(f, r);
	    u && l(u, [t].concat(r))
	}
	return n
    };
    l = function (n, t) {
	var i, r = -1, u = n.length, f = t[0], e = t[1], o = t[2];
	switch (t.length) {
	    case 0:
		while (++r < u)
		    (i = n[r]).callback.call(i.ctx);
		return;
	    case 1:
		while (++r < u)
		    (i = n[r]).callback.call(i.ctx, f);
		return;
	    case 2:
		while (++r < u)
		    (i = n[r]).callback.call(i.ctx, f, e);
		return;
	    case 3:
		while (++r < u)
		    (i = n[r]).callback.call(i.ctx, f, e, o);
		return;
	    default:
		while (++r < u)
		    (i = n[r]).callback.apply(i.ctx, t);
		return
	}
    };
    u.bind = u.on;
    u.unbind = u.off;
    i.extend(t, u);
    o = t.Model = function (n, t) {
	var r = n || {};
	t || (t = {});
	this.cid = i.uniqueId(this.cidPrefix);
	this.attributes = {};
	t.collection && (this.collection = t.collection);
	t.parse && (r = this.parse(r, t) || {});
	r = i.defaults({}, r, i.result(this, "defaults"));
	this.set(r, t);
	this.changed = {};
	this.initialize.apply(this, arguments)
    };
    i.extend(o.prototype, u, {changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function () {
	}, toJSON: function () {
	    return i.clone(this.attributes)
	}, sync: function () {
	    return t.sync.apply(this, arguments)
	}, get: function (n) {
	    return this.attributes[n]
	}, escape: function (n) {
	    return i.escape(this.get(n))
	}, has: function (n) {
	    return this.get(n) != null
	}, matches: function (n) {
	    return!!i.iteratee(n, this)(this.attributes)
	}, set: function (n, t, r) {
	    var f, u, o;
	    if (n == null)
		return this;
	    if (typeof n == "object" ? (f = n, r = t) : (f = {})[n] = t, r || (r = {}), !this._validate(f, r))
		return!1;
	    var a = r.unset, h = r.silent, e = [], c = this._changing;
	    this._changing = !0;
	    c || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
	    var s = this.attributes, l = this.changed, v = this._previousAttributes;
	    for (u in f)
		t = f[u], i.isEqual(s[u], t) || e.push(u), i.isEqual(v[u], t) ? delete l[u] : l[u] = t, a ? delete s[u] : s[u] = t;
	    if (this.id = this.get(this.idAttribute), !h)
		for (e.length && (this._pending = r), o = 0; o < e.length; o++)
		    this.trigger("change:" + e[o], this, s[e[o]], r);
	    if (c)
		return this;
	    if (!h)
		while (this._pending)
		    r = this._pending, this._pending = !1, this.trigger("change", this, r);
	    return this._pending = !1, this._changing = !1, this
	}, unset: function (n, t) {
	    return this.set(n, void 0, i.extend({}, t, {unset: !0}))
	}, clear: function (n) {
	    var t = {}, r;
	    for (r in this.attributes)
		t[r] = void 0;
	    return this.set(t, i.extend({}, n, {unset: !0}))
	}, hasChanged: function (n) {
	    return n == null ? !i.isEmpty(this.changed) : i.has(this.changed, n)
	}, changedAttributes: function (n) {
	    var f, t, r, u;
	    if (!n)
		return this.hasChanged() ? i.clone(this.changed) : !1;
	    f = this._changing ? this._previousAttributes : this.attributes;
	    t = {};
	    for (r in n)
		(u = n[r], i.isEqual(f[r], u)) || (t[r] = u);
	    return i.size(t) ? t : !1
	}, previous: function (n) {
	    return n == null || !this._previousAttributes ? null : this._previousAttributes[n]
	}, previousAttributes: function () {
	    return i.clone(this._previousAttributes)
	}, fetch: function (n) {
	    n = i.extend({parse: !0}, n);
	    var t = this, r = n.success;
	    return n.success = function (i) {
		var u = n.parse ? t.parse(i, n) : i;
		if (!t.set(u, n))
		    return!1;
		r && r.call(n.context, t, i, n);
		t.trigger("sync", t, i, n)
	    }, s(this, n), this.sync("read", this, n)
	}, save: function (n, t, r) {
	    var u, e, h, l;
	    if (n == null || typeof n == "object" ? (u = n, r = t) : (u = {})[n] = t, r = i.extend({validate: !0, parse: !0}, r), e = r.wait, u && !e) {
		if (!this.set(u, r))
		    return!1
	    } else if (!this._validate(u, r))
		return!1;
	    var f = this, c = r.success, o = this.attributes;
	    return r.success = function (n) {
		f.attributes = o;
		var t = r.parse ? f.parse(n, r) : n;
		if (e && (t = i.extend({}, u, t)), t && !f.set(t, r))
		    return!1;
		c && c.call(r.context, f, n, r);
		f.trigger("sync", f, n, r)
	    }, s(this, r), u && e && (this.attributes = i.extend({}, o, u)), h = this.isNew() ? "create" : r.patch ? "patch" : "update", h !== "patch" || r.attrs || (r.attrs = u), l = this.sync(h, this, r), this.attributes = o, l
	}, destroy: function (n) {
	    var r;
	    n = n ? i.clone(n) : {};
	    var t = this, u = n.success, f = n.wait, e = function () {
		t.stopListening();
		t.trigger("destroy", t, t.collection, n)
	    };
	    return n.success = function (i) {
		f && e();
		u && u.call(n.context, t, i, n);
		t.isNew() || t.trigger("sync", t, i, n)
	    }, r = !1, this.isNew() ? i.defer(n.success) : (s(this, n), r = this.sync("delete", this, n)), f || e(), r
	}, url: function () {
	    var n = i.result(this, "urlRoot") || i.result(this.collection, "url") || v(), t;
	    return this.isNew() ? n : (t = this.get(this.idAttribute), n.replace(/[^\/]$/, "$&/") + encodeURIComponent(t))
	}, parse: function (n) {
	    return n
	}, clone: function () {
	    return new this.constructor(this.attributes)
	}, isNew: function () {
	    return!this.has(this.idAttribute)
	}, isValid: function (n) {
	    return this._validate({}, i.defaults({validate: !0}, n))
	}, _validate: function (n, t) {
	    if (!t.validate || !this.validate)
		return!0;
	    n = i.extend({}, this.attributes, n);
	    var r = this.validationError = this.validate(n, t) || null;
	    return r ? (this.trigger("invalid", this, r, i.extend(t, {validationError: r})), !1) : !0
	}});
    nt = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1};
    p(o, nt, "attributes");
    var a = t.Collection = function (n, t) {
	t || (t = {});
	t.model && (this.model = t.model);
	t.comparator !== void 0 && (this.comparator = t.comparator);
	this._reset();
	this.initialize.apply(this, arguments);
	n && this.reset(n, i.extend({silent: !0}, t))
    }, ct = {add: !0, remove: !0, merge: !0}, lt = {add: !0, remove: !1}, tt = function (n, t, i) {
	var u, f, r;
	for (i = Math.min(Math.max(i, 0), n.length), u = Array(n.length - i), f = t.length, r = 0; r < u.length; r++)
	    u[r] = n[r + i];
	for (r = 0; r < f; r++)
	    n[r + i] = t[r];
	for (r = 0; r < u.length; r++)
	    n[r + f + i] = u[r]
    };
    i.extend(a.prototype, u, {model: o, initialize: function () {
	}, toJSON: function (n) {
	    return this.map(function (t) {
		return t.toJSON(n)
	    })
	}, sync: function () {
	    return t.sync.apply(this, arguments)
	}, add: function (n, t) {
	    return this.set(n, i.extend({merge: !1}, t, lt))
	}, remove: function (n, t) {
	    var u, r;
	    return t = i.extend({}, t), u = !i.isArray(n), n = u ? [n] : i.clone(n), r = this._removeModels(n, t), !t.silent && r && this.trigger("update", this, t), u ? r[0] : r
	}, set: function (n, t) {
	    var v, f, u, e, a, p, k;
	    if (n != null) {
		t = i.defaults({}, t, ct);
		t.parse && !this._isModel(n) && (n = this.parse(n, t));
		v = !i.isArray(n);
		n = v ? [n] : n.slice();
		f = t.at;
		f != null && (f = +f);
		f < 0 && (f += this.length + 1);
		var o = [], s = [], c = [], l = {}, w = t.add, d = t.merge, b = t.remove, h = !1, y = this.comparator && f == null && t.sort !== !1, g = i.isString(this.comparator) ? this.comparator : null, r;
		for (u = 0; u < n.length; u++)
		    r = n[u], e = this.get(r), e ? (d && r !== e && (a = this._isModel(r) ? r.attributes : r, t.parse && (a = e.parse(a, t)), e.set(a, t), y && !h && (h = e.hasChanged(g))), l[e.cid] || (l[e.cid] = !0, o.push(e)), n[u] = e) : w && (r = n[u] = this._prepareModel(r, t), r && (s.push(r), this._addReference(r, t), l[r.cid] = !0, o.push(r)));
		if (b) {
		    for (u = 0; u < this.length; u++)
			r = this.models[u], l[r.cid] || c.push(r);
		    c.length && this._removeModels(c, t)
		}
		if (p = !1, k = !y && w && b, o.length && k ? (p = this.length != o.length || i.some(this.models, function (n, t) {
		    return n !== o[t]
		}), this.models.length = 0, tt(this.models, o, 0), this.length = this.models.length) : s.length && (y && (h = !0), tt(this.models, s, f == null ? this.length : f), this.length = this.models.length), h && this.sort({silent: !0}), !t.silent) {
		    for (u = 0; u < s.length; u++)
			f != null && (t.index = f + u), r = s[u], r.trigger("add", r, this, t);
		    (h || p) && this.trigger("sort", this, t);
		    (s.length || c.length) && this.trigger("update", this, t)
		}
		return v ? n[0] : n
	    }
	}, reset: function (n, t) {
	    t = t ? i.clone(t) : {};
	    for (var r = 0; r < this.models.length; r++)
		this._removeReference(this.models[r], t);
	    return t.previousModels = this.models, this._reset(), n = this.add(n, i.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), n
	}, push: function (n, t) {
	    return this.add(n, i.extend({at: this.length}, t))
	}, pop: function (n) {
	    var t = this.at(this.length - 1);
	    return this.remove(t, n)
	}, unshift: function (n, t) {
	    return this.add(n, i.extend({at: 0}, t))
	}, shift: function (n) {
	    var t = this.at(0);
	    return this.remove(t, n)
	}, slice: function () {
	    return y.apply(this.models, arguments)
	}, get: function (n) {
	    if (n == null)
		return void 0;
	    var t = this.modelId(this._isModel(n) ? n.attributes : n);
	    return this._byId[n] || this._byId[t] || this._byId[n.cid]
	}, at: function (n) {
	    return n < 0 && (n += this.length), this.models[n]
	}, where: function (n, t) {
	    return this[t ? "find" : "filter"](n)
	}, findWhere: function (n) {
	    return this.where(n, !0)
	}, sort: function (n) {
	    var t = this.comparator, r;
	    if (!t)
		throw new Error("Cannot sort a set without a comparator");
	    return n || (n = {}), r = t.length, i.isFunction(t) && (t = i.bind(t, this)), r === 1 || i.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), n.silent || this.trigger("sort", this, n), this
	}, pluck: function (n) {
	    return i.invoke(this.models, "get", n)
	}, fetch: function (n) {
	    n = i.extend({parse: !0}, n);
	    var r = n.success, t = this;
	    return n.success = function (i) {
		var u = n.reset ? "reset" : "set";
		t[u](i, n);
		r && r.call(n.context, t, i, n);
		t.trigger("sync", t, i, n)
	    }, s(this, n), this.sync("read", this, n)
	}, create: function (n, t) {
	    var r, f, u;
	    return(t = t ? i.clone(t) : {}, r = t.wait, n = this._prepareModel(n, t), !n) ? !1 : (r || this.add(n, t), f = this, u = t.success, t.success = function (n, t, i) {
		r && f.add(n, i);
		u && u.call(i.context, n, t, i)
	    }, n.save(null, t), n)
	}, parse: function (n) {
	    return n
	}, clone: function () {
	    return new this.constructor(this.models, {model: this.model, comparator: this.comparator})
	}, modelId: function (n) {
	    return n[this.model.prototype.idAttribute || "id"]
	}, _reset: function () {
	    this.length = 0;
	    this.models = [];
	    this._byId = {}
	}, _prepareModel: function (n, t) {
	    if (this._isModel(n))
		return n.collection || (n.collection = this), n;
	    t = t ? i.clone(t) : {};
	    t.collection = this;
	    var r = new this.model(n, t);
	    return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
	}, _removeModels: function (n, t) {
	    for (var u = [], i, f, r = 0; r < n.length; r++)
		(i = this.get(n[r]), i) && (f = this.indexOf(i), this.models.splice(f, 1), this.length--, t.silent || (t.index = f, i.trigger("remove", i, this, t)), u.push(i), this._removeReference(i, t));
	    return u.length ? u : !1
	}, _isModel: function (n) {
	    return n instanceof o
	}, _addReference: function (n) {
	    this._byId[n.cid] = n;
	    var t = this.modelId(n.attributes);
	    t != null && (this._byId[t] = n);
	    n.on("all", this._onModelEvent, this)
	}, _removeReference: function (n) {
	    delete this._byId[n.cid];
	    var t = this.modelId(n.attributes);
	    t != null && delete this._byId[t];
	    this === n.collection && delete n.collection;
	    n.off("all", this._onModelEvent, this)
	}, _onModelEvent: function (n, t, i, r) {
	    if (n !== "add" && n !== "remove" || i === this) {
		if (n === "destroy" && this.remove(t, r), n === "change") {
		    var u = this.modelId(t.previousAttributes()), f = this.modelId(t.attributes);
		    u !== f && (u != null && delete this._byId[u], f != null && (this._byId[f] = t))
		}
		this.trigger.apply(this, arguments)
	    }
	}});
    it = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 4, foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3};
    p(a, it, "models");
    var rt = t.View = function (n) {
	this.cid = i.uniqueId("view");
	i.extend(this, i.pick(n, vt));
	this._ensureElement();
	this.initialize.apply(this, arguments)
    }, at = /^(\S+)\s*(.*)$/, vt = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    i.extend(rt.prototype, u, {tagName: "div", $: function (n) {
	    return this.$el.find(n)
	}, initialize: function () {
	}, render: function () {
	    return this
	}, remove: function () {
	    return this._removeElement(), this.stopListening(), this
	}, _removeElement: function () {
	    this.$el.remove()
	}, setElement: function (n) {
	    return this.undelegateEvents(), this._setElement(n), this.delegateEvents(), this
	}, _setElement: function (n) {
	    this.$el = n instanceof t.$ ? n : t.$(n);
	    this.el = this.$el[0]
	}, delegateEvents: function (n) {
	    var r, t, u;
	    if (n || (n = i.result(this, "events")), !n)
		return this;
	    this.undelegateEvents();
	    for (r in n)
		(t = n[r], i.isFunction(t) || (t = this[t]), t) && (u = r.match(at), this.delegate(u[1], u[2], i.bind(t, this)));
	    return this
	}, delegate: function (n, t, i) {
	    this.$el.on(n + ".delegateEvents" + this.cid, t, i);
	    return this
	}, undelegateEvents: function () {
	    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
	}, undelegate: function (n, t, i) {
	    return this.$el.off(n + ".delegateEvents" + this.cid, t, i), this
	}, _createElement: function (n) {
	    return document.createElement(n)
	}, _ensureElement: function () {
	    if (this.el)
		this.setElement(i.result(this, "el"));
	    else {
		var n = i.extend({}, i.result(this, "attributes"));
		this.id && (n.id = i.result(this, "id"));
		this.className && (n["class"] = i.result(this, "className"));
		this.setElement(this._createElement(i.result(this, "tagName")));
		this._setAttributes(n)
	    }
	}, _setAttributes: function (n) {
	    this.$el.attr(n)
	}});
    t.sync = function (n, r, u) {
	var e = ut[n], f, o, s, h;
	return i.defaults(u || (u = {}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON}), f = {type: e, dataType: "json"}, u.url || (f.url = i.result(r, "url") || v()), u.data == null && r && (n === "create" || n === "update" || n === "patch") && (f.contentType = "application/json", f.data = JSON.stringify(u.attrs || r.toJSON(u))), u.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", f.data = f.data ? {model: f.data} : {}), u.emulateHTTP && (e === "PUT" || e === "DELETE" || e === "PATCH") && (f.type = "POST", u.emulateJSON && (f.data._method = e), o = u.beforeSend, u.beforeSend = function (n) {
	    return n.setRequestHeader("X-HTTP-Method-Override", e), o ? o.apply(this, arguments) : void 0
	}), f.type === "GET" || u.emulateJSON || (f.processData = !1), s = u.error, u.error = function (n, t, i) {
	    u.textStatus = t;
	    u.errorThrown = i;
	    s && s.call(u.context, n, t, i)
	}, h = u.xhr = t.ajax(i.extend(f, u)), r.trigger("request", r, h, u), h
    };
    ut = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
    t.ajax = function () {
	return t.$.ajax.apply(t.$, arguments)
    };
    var ft = t.Router = function (n) {
	n || (n = {});
	n.routes && (this.routes = n.routes);
	this._bindRoutes();
	this.initialize.apply(this, arguments)
    }, yt = /\((.*?)\)/g, pt = /(\(\?)?:\w+/g, wt = /\*\w+/g, bt = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend(ft.prototype, u, {initialize: function () {
	}, route: function (n, r, u) {
	    i.isRegExp(n) || (n = this._routeToRegExp(n));
	    i.isFunction(r) && (u = r, r = "");
	    u || (u = this[r]);
	    var f = this;
	    return t.history.route(n, function (i) {
		var e = f._extractParameters(n, i);
		f.execute(u, e, r) !== !1 && (f.trigger.apply(f, ["route:" + r].concat(e)), f.trigger("route", r, e), t.history.trigger("route", f, r, e))
	    }), this
	}, execute: function (n, t) {
	    n && n.apply(this, t)
	}, navigate: function (n, i) {
	    return t.history.navigate(n, i), this
	}, _bindRoutes: function () {
	    if (this.routes) {
		this.routes = i.result(this, "routes");
		for (var n, t = i.keys(this.routes); (n = t.pop()) != null; )
		    this.route(n, this.routes[n])
	    }
	}, _routeToRegExp: function (n) {
	    return n = n.replace(bt, "\\$&").replace(yt, "(?:$1)?").replace(pt, function (n, t) {
		return t ? n : "([^/?]+)"
	    }).replace(wt, "([^?]*?)"), new RegExp("^" + n + "(?:\\?([\\s\\S]*))?$")
	}, _extractParameters: function (n, t) {
	    var r = n.exec(t).slice(1);
	    return i.map(r, function (n, t) {
		return t === r.length - 1 ? n || null : n ? decodeURIComponent(n) : null
	    })
	}});
    var f = t.History = function () {
	this.handlers = [];
	this.checkUrl = i.bind(this.checkUrl, this);
	typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, kt = /^[#\/]|\s+$/g, dt = /^\/+|\/+$/g, gt = /#.*$/;
    return f.started = !1, i.extend(f.prototype, u, {interval: 50, atRoot: function () {
	    var n = this.location.pathname.replace(/[^\/]$/, "$&/");
	    return n === this.root && !this.getSearch()
	}, matchRoot: function () {
	    var n = this.decodeFragment(this.location.pathname), t = n.slice(0, this.root.length - 1) + "/";
	    return t === this.root
	}, decodeFragment: function (n) {
	    return decodeURI(n.replace(/%25/g, "%2525"))
	}, getSearch: function () {
	    var n = this.location.href.replace(/#.*/, "").match(/\?.+/);
	    return n ? n[0] : ""
	}, getHash: function (n) {
	    var t = (n || this).location.href.match(/#(.*)$/);
	    return t ? t[1] : ""
	}, getPath: function () {
	    var n = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
	    return n.charAt(0) === "/" ? n.slice(1) : n
	}, getFragment: function (n) {
	    return n == null && (n = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), n.replace(kt, "")
	}, start: function (n) {
	    var e, r, t, u;
	    if (f.started)
		throw new Error("Backbone.history has already been started");
	    if (f.started = !0, this.options = i.extend({root: "/"}, this.options, n), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange"in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(dt, "/"), this._wantsHashChange && this._wantsPushState)
		if (this._hasPushState || this.atRoot())
		    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {replace: !0});
		else
		    return e = this.root.slice(0, -1) || "/", this.location.replace(e + "#" + this.getPath()), !0;
	    return this._hasHashChange || !this._wantsHashChange || this._usePushState || (this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1, r = document.body, t = r.insertBefore(this.iframe, r.firstChild).contentWindow, t.document.open(), t.document.close(), t.location.hash = "#" + this.fragment), u = window.addEventListener || function (n, t) {
		return attachEvent("on" + n, t)
	    }, this._usePushState ? u("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? u("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
	}, stop: function () {
	    var n = window.removeEventListener || function (n, t) {
		return detachEvent("on" + n, t)
	    };
	    this._usePushState ? n("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && n("hashchange", this.checkUrl, !1);
	    this.iframe && (document.body.removeChild(this.iframe), this.iframe = null);
	    this._checkUrlInterval && clearInterval(this._checkUrlInterval);
	    f.started = !1
	}, route: function (n, t) {
	    this.handlers.unshift({route: n, callback: t})
	}, checkUrl: function () {
	    var n = this.getFragment();
	    if (n === this.fragment && this.iframe && (n = this.getHash(this.iframe.contentWindow)), n === this.fragment)
		return!1;
	    this.iframe && this.navigate(n);
	    this.loadUrl()
	}, loadUrl: function (n) {
	    return this.matchRoot() ? (n = this.fragment = this.getFragment(n), i.some(this.handlers, function (t) {
		if (t.route.test(n))
		    return t.callback(n), !0
	    })) : !1
	}, navigate: function (n, t) {
	    var i, u, r;
	    if (!f.started)
		return!1;
	    if (t && t !== !0 || (t = {trigger: !!t}), n = this.getFragment(n || ""), i = this.root, (n === "" || n.charAt(0) === "?") && (i = i.slice(0, -1) || "/"), u = i + n, n = this.decodeFragment(n.replace(gt, "")), this.fragment !== n) {
		if (this.fragment = n, this._usePushState)
		    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, u);
		else if (this._wantsHashChange)
		    this._updateHash(this.location, n, t.replace), this.iframe && n !== this.getHash(this.iframe.contentWindow) && (r = this.iframe.contentWindow, t.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, n, t.replace));
		else
		    return this.location.assign(u);
		if (t.trigger)
		    return this.loadUrl(n)
	    }
	}, _updateHash: function (n, t, i) {
	    if (i) {
		var r = n.href.replace(/(javascript:|#).*$/, "");
		n.replace(r + "#" + t)
	    } else
		n.hash = "#" + t
	}}), t.history = new f, et = function (n, t) {
	var u = this, r, f;
	return r = n && i.has(n, "constructor") ? n.constructor : function () {
	    return u.apply(this, arguments)
	}, i.extend(r, u, t), f = function () {
	    this.constructor = r
	}, f.prototype = u.prototype, r.prototype = new f, n && i.extend(r.prototype, n), r.__super__ = u.prototype, r
    }, o.extend = a.extend = ft.extend = rt.extend = f.extend = et, v = function () {
	throw new Error('A "url" property or function must be specified');
    }, s = function (n, t) {
	var i = t.error;
	t.error = function (r) {
	    i && i.call(t.context, n, r, t);
	    n.trigger("error", n, r, t)
	}
    }, t
}), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1)
	throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery);
+function (n) {
    "use strict";
    function t() {
	var i = document.createElement("bootstrap"), t = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, n;
	for (n in t)
	    if (void 0 !== i.style[n])
		return{end: t[n]};
	return!1
    }
    n.fn.emulateTransitionEnd = function (t) {
	var i = !1, u = this, r;
	n(this).one("bsTransitionEnd", function () {
	    i = !0
	});
	return r = function () {
	    i || n(u).trigger(n.support.transition.end)
	}, setTimeout(r, t), this
    };
    n(function () {
	n.support.transition = t();
	n.support.transition && (n.event.special.bsTransitionEnd = {bindType: n.support.transition.end, delegateType: n.support.transition.end, handle: function (t) {
		if (n(t.target).is(this))
		    return t.handleObj.handler.apply(this, arguments)
	    }})
    })
}(jQuery);
+function (n) {
    "use strict";
    function u(i) {
	return this.each(function () {
	    var r = n(this), u = r.data("bs.alert");
	    u || r.data("bs.alert", u = new t(this));
	    "string" == typeof i && u[i].call(r)
	})
    }
    var i = '[data-dismiss="alert"]', t = function (t) {
	n(t).on("click", i, this.close)
    }, r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function (i) {
	function e() {
	    r.detach().trigger("closed.bs.alert").remove()
	}
	var f = n(this), u = f.attr("data-target"), r;
	u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
	r = n(u);
	i && i.preventDefault();
	r.length || (r = f.closest(".alert"));
	r.trigger(i = n.Event("close.bs.alert"));
	i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function () {
	return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.button"), f = "object" == typeof i && i;
	    r || u.data("bs.button", r = new t(this, f));
	    "toggle" == i ? r.toggle() : i && r.setState(i)
	})
    }
    var t = function (i, r) {
	this.$element = n(i);
	this.options = n.extend({}, t.DEFAULTS, r);
	this.isLoading = !1
    }, r;
    t.VERSION = "3.3.5";
    t.DEFAULTS = {loadingText: "loading..."};
    t.prototype.setState = function (t) {
	var r = "disabled", i = this.$element, f = i.is("input") ? "val" : "html", u = i.data();
	t += "Text";
	null == u.resetText && i.data("resetText", i[f]());
	setTimeout(n.proxy(function () {
	    i[f](null == u[t] ? this.options[t] : u[t]);
	    "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
	}, this), 0)
    };
    t.prototype.toggle = function () {
	var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
	i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function () {
	return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
	var r = n(t.target);
	r.hasClass("btn") || (r = r.closest(".btn"));
	i.call(r, "toggle");
	n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
	n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.carousel"), f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i), e = "string" == typeof i ? i : f.slide;
	    r || u.data("bs.carousel", r = new t(this, f));
	    "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
	})
    }
    var t = function (t, i) {
	this.$element = n(t);
	this.$indicators = this.$element.find(".carousel-indicators");
	this.options = i;
	this.paused = null;
	this.sliding = null;
	this.interval = null;
	this.$active = null;
	this.$items = null;
	this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
	"hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    }, u, r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0};
    t.prototype.keydown = function (n) {
	if (!/input|textarea/i.test(n.target.tagName)) {
	    switch (n.which) {
		case 37:
		    this.prev();
		    break;
		case 39:
		    this.next();
		    break;
		default:
		    return
	    }
	    n.preventDefault()
	}
    };
    t.prototype.cycle = function (t) {
	return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function (n) {
	return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function (n, t) {
	var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
	return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function (n) {
	var i = this, t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
	if (!(n > this.$items.length - 1) && !(0 > n))
	    return this.sliding ? this.$element.one("slid.bs.carousel", function () {
		i.to(n)
	    }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function (t) {
	return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function () {
	if (!this.sliding)
	    return this.slide("next")
    };
    t.prototype.prev = function () {
	if (!this.sliding)
	    return this.slide("prev")
    };
    t.prototype.slide = function (i, r) {
	var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c;
	return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {relatedTarget: o, direction: f}), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {relatedTarget: o, direction: f}), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function () {
	    u.removeClass([i, f].join(" ")).addClass("active");
	    e.removeClass(["active", f].join(" "));
	    a.sliding = !1;
	    setTimeout(function () {
		a.$element.trigger(c)
	    }, 0)
	}).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function () {
	return n.fn.carousel = u, this
    };
    r = function (t) {
	var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f;
	u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function () {
	n('[data-ride="carousel"]').each(function () {
	    var t = n(this);
	    i.call(t, t.data())
	})
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
	var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
	return n(r)
    }
    function i(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.collapse"), f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
	    !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
	    r || u.data("bs.collapse", r = new t(this, f));
	    "string" == typeof i && r[i]()
	})
    }
    var t = function (i, r) {
	this.$element = n(i);
	this.options = n.extend({}, t.DEFAULTS, r);
	this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
	this.transitioning = null;
	this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	this.options.toggle && this.toggle()
    }, u;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {toggle: !0};
    t.prototype.dimension = function () {
	var n = this.$element.hasClass("width");
	return n ? "width" : "height"
    };
    t.prototype.show = function () {
	var f, r, e, u, o, s;
	if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
	    if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function () {
		this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
		this.transitioning = 0;
		this.$element.trigger("shown.bs.collapse")
	    }, !n.support.transition)
		return o.call(this);
	    s = n.camelCase(["scroll", u].join("-"));
	    this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
	}
    };
    t.prototype.hide = function () {
	var r, i, u;
	if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented()))
	    return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function () {
		this.transitioning = 0;
		this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
	    }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function () {
	this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function () {
	return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
	    var u = n(i);
	    this.addAriaAndCollapsedClass(r(u), u)
	}, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function (n, t) {
	var i = n.hasClass("in");
	n.attr("aria-expanded", i);
	t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function () {
	return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
	var u = n(this);
	u.attr("data-target") || t.preventDefault();
	var f = r(u), e = f.data("bs.collapse"), o = e ? "toggle" : u.data();
	i.call(f, o)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
	var i = t.attr("data-target"), r;
	return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }
    function u(t) {
	t && 3 === t.which || (n(o).remove(), n(i).each(function () {
	    var u = n(this), i = r(u), f = {relatedTarget: this};
	    i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f))))
	}))
    }
    function e(i) {
	return this.each(function () {
	    var r = n(this), u = r.data("bs.dropdown");
	    u || r.data("bs.dropdown", u = new t(this));
	    "string" == typeof i && u[i].call(r)
	})
    }
    var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function (t) {
	n(t).on("click.bs.dropdown", this.toggle)
    }, f;
    t.VERSION = "3.3.5";
    t.prototype.toggle = function (t) {
	var f = n(this), i, o, e;
	if (!f.is(".disabled, :disabled")) {
	    if (i = r(f), o = i.hasClass("open"), u(), !o) {
		if ("ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {relatedTarget: this}, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented())
		    return;
		f.trigger("focus").attr("aria-expanded", "true");
		i.toggleClass("open").trigger("shown.bs.dropdown", e)
	    }
	    return!1
	}
    };
    t.prototype.keydown = function (t) {
	var e, o, s, h, f, u;
	if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
	    if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which)
		return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
	    h = " li:not(.disabled):visible a";
	    f = o.find(".dropdown-menu" + h);
	    f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
	}
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function () {
	return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
	n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery);
+function (n) {
    "use strict";
    function i(i, r) {
	return this.each(function () {
	    var f = n(this), u = f.data("bs.modal"), e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
	    u || f.data("bs.modal", u = new t(this, e));
	    "string" == typeof i ? u[i](r) : e.show && u.show(r)
	})
    }
    var t = function (t, i) {
	this.options = i;
	this.$body = n(document.body);
	this.$element = n(t);
	this.$dialog = this.$element.find(".modal-dialog");
	this.$backdrop = null;
	this.isShown = null;
	this.originalBodyPad = null;
	this.scrollbarWidth = 0;
	this.ignoreBackdropClick = !1;
	this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
	    this.$element.trigger("loaded.bs.modal")
	}, this))
    }, r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    t.prototype.toggle = function (n) {
	return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function (i) {
	var r = this, u = n.Event("show.bs.modal", {relatedTarget: i});
	this.$element.trigger(u);
	this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
	    r.$element.one("mouseup.dismiss.bs.modal", function (t) {
		n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
	    })
	}), this.backdrop(function () {
	    var f = n.support.transition && r.$element.hasClass("fade"), u;
	    r.$element.parent().length || r.$element.appendTo(r.$body);
	    r.$element.show().scrollTop(0);
	    r.adjustDialog();
	    f && r.$element[0].offsetWidth;
	    r.$element.addClass("in");
	    r.enforceFocus();
	    u = n.Event("shown.bs.modal", {relatedTarget: i});
	    f ? r.$dialog.one("bsTransitionEnd", function () {
		r.$element.trigger("focus").trigger(u)
	    }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
	}))
    };
    t.prototype.hide = function (i) {
	i && i.preventDefault();
	i = n.Event("hide.bs.modal");
	this.$element.trigger(i);
	this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function () {
	n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
	    this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
	}, this))
    };
    t.prototype.escape = function () {
	this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
	    27 == n.which && this.hide()
	}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function () {
	this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function () {
	var n = this;
	this.$element.hide();
	this.backdrop(function () {
	    n.$body.removeClass("modal-open");
	    n.resetAdjustments();
	    n.resetScrollbar();
	    n.$element.trigger("hidden.bs.modal")
	})
    };
    t.prototype.removeBackdrop = function () {
	this.$backdrop && this.$backdrop.remove();
	this.$backdrop = null
    };
    t.prototype.backdrop = function (i) {
	var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
	if (this.isShown && this.options.backdrop) {
	    if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
		return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
	    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i)
		return;
	    r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
	} else
	    !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function () {
		e.removeBackdrop();
		i && i()
	    }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function () {
	this.adjustDialog()
    };
    t.prototype.adjustDialog = function () {
	var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
	this.$element.css({paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""})
    };
    t.prototype.resetAdjustments = function () {
	this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    t.prototype.checkScrollbar = function () {
	var n = window.innerWidth, t;
	n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
	this.bodyIsOverflowing = document.body.clientWidth < n;
	this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function () {
	var n = parseInt(this.$body.css("padding-right") || 0, 10);
	this.originalBodyPad = document.body.style.paddingRight || "";
	this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function () {
	this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function () {
	var n = document.createElement("div"), t;
	return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function () {
	return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
	var r = n(this), f = r.attr("href"), u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")), e = u.data("bs.modal") ? "toggle" : n.extend({remote: !/#/.test(f) && f}, u.data(), r.data());
	r.is("a") && t.preventDefault();
	u.one("show.bs.modal", function (n) {
	    n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
		r.is(":visible") && r.trigger("focus")
	    })
	});
	i.call(u, e, this)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.tooltip"), f = "object" == typeof i && i;
	    (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
	})
    }
    var t = function (n, t) {
	this.type = null;
	this.options = null;
	this.enabled = null;
	this.timeout = null;
	this.hoverState = null;
	this.$element = null;
	this.inState = null;
	this.init("tooltip", n, t)
    }, i;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: {selector: "body", padding: 0}};
    t.prototype.init = function (t, i, r) {
	var f, e, u, o, s;
	if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {click: !1, hover: !1, focus: !1}, this.$element[0]instanceof document.constructor && !this.options.selector)
	    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
	for (f = this.options.trigger.split(" "), e = f.length; e--; )
	    if (u = f[e], "click" == u)
		this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
	    else
		"manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
	this.options.selector ? this._options = n.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    };
    t.prototype.getDefaults = function () {
	return t.DEFAULTS
    };
    t.prototype.getOptions = function (t) {
	return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {show: t.delay, hide: t.delay}), t
    };
    t.prototype.getDelegateOptions = function () {
	var t = {}, i = this.getDefaults();
	return this._options && n.each(this._options, function (n, r) {
	    i[n] != r && (t[n] = r)
	}), t
    };
    t.prototype.enter = function (t) {
	var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
	return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
	    "in" == i.hoverState && i.show()
	}, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function () {
	for (var n in this.inState)
	    if (this.inState[n])
		return!0;
	return!1
    };
    t.prototype.leave = function (t) {
	var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
	return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
	    "out" == i.hoverState && i.hide()
	}, i.options.delay.hide)) : i.hide())
    };
    t.prototype.show = function () {
	var c = n.Event("show.bs." + this.type), l, p, e, w, h;
	if (this.hasContent() && this.enabled) {
	    if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l)
		return;
	    var u = this, r = this.tip(), a = this.getUID(this.type);
	    this.setContent();
	    r.attr("id", a);
	    this.$element.attr("aria-describedby", a);
	    this.options.animation && r.addClass("fade");
	    var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, v = /\s?auto?\s?/i, y = v.test(i);
	    y && (i = i.replace(v, "") || "top");
	    r.detach().css({top: 0, left: 0, display: "block"}).addClass(i).data("bs." + this.type, this);
	    this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
	    this.$element.trigger("inserted.bs." + this.type);
	    var f = this.getPosition(), o = r[0].offsetWidth, s = r[0].offsetHeight;
	    y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
	    w = this.getCalculatedOffset(i, f, o, s);
	    this.applyPlacement(w, i);
	    h = function () {
		var n = u.hoverState;
		u.$element.trigger("shown.bs." + u.type);
		u.hoverState = null;
		"out" == n && u.leave(u)
	    };
	    n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
	}
    };
    t.prototype.applyPlacement = function (t, i) {
	var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u;
	isNaN(o) && (o = 0);
	isNaN(s) && (s = 0);
	t.top += o;
	t.left += s;
	n.offset.setOffset(r[0], n.extend({using: function (n) {
		r.css({top: Math.round(n.top), left: Math.round(n.left)})
	    }}, t), 0);
	r.addClass("in");
	h = r[0].offsetWidth;
	f = r[0].offsetHeight;
	"top" == i && f != e && (t.top = t.top + e - f);
	u = this.getViewportAdjustedDelta(i, t, h, f);
	u.left ? t.left += u.left : t.top += u.top;
	var c = /top|bottom/.test(i), a = c ? 2 * u.left - l + h : 2 * u.top - e + f, v = c ? "offsetWidth" : "offsetHeight";
	r.offset(t);
	this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function (n, t, i) {
	this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function () {
	var n = this.tip(), t = this.getTitle();
	n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
	n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function (i) {
	function f() {
	    "in" != u.hoverState && r.detach();
	    u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
	    i && i()
	}
	var u = this, r = n(this.$tip), e = n.Event("hide.bs." + this.type);
	return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this)
    };
    t.prototype.fixTitle = function () {
	var n = this.$element;
	(n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function () {
	return this.getTitle()
    };
    t.prototype.getPosition = function (t) {
	t = t || this.$element;
	var u = t[0], r = "BODY" == u.tagName, i = u.getBoundingClientRect();
	null == i.width && (i = n.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
	var f = r ? {top: 0, left: 0} : t.offset(), e = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()}, o = r ? {width: n(window).width(), height: n(window).height()} : null;
	return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function (n, t, i, r) {
	return"bottom" == n ? {top: t.top + t.height, left: t.left + t.width / 2 - i / 2} : "top" == n ? {top: t.top - r, left: t.left + t.width / 2 - i / 2} : "left" == n ? {top: t.top + t.height / 2 - r / 2, left: t.left - i} : {top: t.top + t.height / 2 - r / 2, left: t.left + t.width}
    };
    t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
	var f = {top: 0, left: 0}, e, u, o, s, h, c;
	return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function () {
	var t = this.$element, n = this.options;
	return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function (n) {
	do
	    n += ~~(1e6 * Math.random());
	while (document.getElementById(n));
	return n
    };
    t.prototype.tip = function () {
	if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length))
	    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
	return this.$tip
    };
    t.prototype.arrow = function () {
	return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function () {
	this.enabled = !0
    };
    t.prototype.disable = function () {
	this.enabled = !1
    };
    t.prototype.toggleEnabled = function () {
	this.enabled = !this.enabled
    };
    t.prototype.toggle = function (t) {
	var i = this;
	t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
	t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function () {
	var n = this;
	clearTimeout(this.timeout);
	this.hide(function () {
	    n.$element.off("." + n.type).removeData("bs." + n.type);
	    n.$tip && n.$tip.detach();
	    n.$tip = null;
	    n.$arrow = null;
	    n.$viewport = null
	})
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function () {
	return n.fn.tooltip = i, this
    }
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.popover"), f = "object" == typeof i && i;
	    (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
	})
    }
    var t = function (n, t) {
	this.init("popover", n, t)
    }, i;
    if (!n.fn.tooltip)
	throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.5";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'});
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
	return t.DEFAULTS
    };
    t.prototype.setContent = function () {
	var n = this.tip(), i = this.getTitle(), t = this.getContent();
	n.find(".popover-title")[this.options.html ? "html" : "text"](i);
	n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
	n.removeClass("fade top bottom left right in");
	n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function () {
	return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function () {
	var t = this.$element, n = this.options;
	return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function () {
	return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function () {
	return n.fn.popover = i, this
    }
}(jQuery);
+function (n) {
    "use strict";
    function t(i, r) {
	this.$body = n(document.body);
	this.$scrollElement = n(n(i).is(document.body) ? window : i);
	this.options = n.extend({}, t.DEFAULTS, r);
	this.selector = (this.options.target || "") + " .nav li > a";
	this.offsets = [];
	this.targets = [];
	this.activeTarget = null;
	this.scrollHeight = 0;
	this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
	this.refresh();
	this.process()
    }
    function i(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.scrollspy"), f = "object" == typeof i && i;
	    r || u.data("bs.scrollspy", r = new t(this, f));
	    "string" == typeof i && r[i]()
	})
    }
    t.VERSION = "3.3.5";
    t.DEFAULTS = {offset: 10};
    t.prototype.getScrollHeight = function () {
	return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function () {
	var t = this, i = "offset", r = 0;
	this.offsets = [];
	this.targets = [];
	this.scrollHeight = this.getScrollHeight();
	n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
	this.$body.find(this.selector).map(function () {
	    var f = n(this), u = f.data("target") || f.attr("href"), t = /^#./.test(u) && n(u);
	    return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
	}).sort(function (n, t) {
	    return n[0] - t[0]
	}).each(function () {
	    t.offsets.push(this[0]);
	    t.targets.push(this[1])
	})
    };
    t.prototype.process = function () {
	var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget;
	if (this.scrollHeight != f && this.refresh(), i >= e)
	    return u != (n = r[r.length - 1]) && this.activate(n);
	if (u && i < t[0])
	    return this.activeTarget = null, this.clear();
	for (n = t.length; n--; )
	    u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function (t) {
	this.activeTarget = t;
	this.clear();
	var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = n(r).parents("li").addClass("active");
	i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
	i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function () {
	n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function () {
	return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function () {
	n('[data-spy="scroll"]').each(function () {
	    var t = n(this);
	    i.call(t, t.data())
	})
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.tab");
	    r || u.data("bs.tab", r = new t(this));
	    "string" == typeof i && r[i]()
	})
    }
    var t = function (t) {
	this.element = n(t)
    }, u, i;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function () {
	var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
	if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
	    var r = f.find(".active:last a"), e = n.Event("hide.bs.tab", {relatedTarget: t[0]}), o = n.Event("show.bs.tab", {relatedTarget: r[0]});
	    (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function () {
		r.trigger({type: "hidden.bs.tab", relatedTarget: t[0]});
		t.trigger({type: "shown.bs.tab", relatedTarget: r[0]})
	    }))
	}
    };
    t.prototype.activate = function (i, r, u) {
	function e() {
	    f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
	    i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
	    o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
	    i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
	    u && u()
	}
	var f = r.find("> .active"), o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
	f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
	f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function () {
	return n.fn.tab = u, this
    };
    i = function (t) {
	t.preventDefault();
	r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
	return this.each(function () {
	    var u = n(this), r = u.data("bs.affix"), f = "object" == typeof i && i;
	    r || u.data("bs.affix", r = new t(this, f));
	    "string" == typeof i && r[i]()
	})
    }
    var t = function (i, r) {
	this.options = n.extend({}, t.DEFAULTS, r);
	this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
	this.$element = n(i);
	this.affixed = null;
	this.unpin = null;
	this.pinnedOffset = null;
	this.checkPosition()
    }, r;
    t.VERSION = "3.3.5";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {offset: 0, target: window};
    t.prototype.getState = function (n, t, i, r) {
	var u = this.$target.scrollTop(), f = this.$element.offset(), e = this.$target.height();
	if (null != i && "top" == this.affixed)
	    return i > u ? "top" : !1;
	if ("bottom" == this.affixed)
	    return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom";
	var o = null == this.affixed, s = o ? u : f.top, h = o ? e : t;
	return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function () {
	if (this.pinnedOffset)
	    return this.pinnedOffset;
	this.$element.removeClass(t.RESET).addClass("affix");
	var n = this.$target.scrollTop(), i = this.$element.offset();
	return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function () {
	setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function () {
	var i, e, o;
	if (this.$element.is(":visible")) {
	    var s = this.$element.height(), r = this.options.offset, f = r.top, u = r.bottom, h = Math.max(n(document).height(), n(document.body).height());
	    if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
		if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented())
		    return;
		this.affixed = i;
		this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
		this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
	    }
	    "bottom" == i && this.$element.offset({top: h - s - u})
	}
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function () {
	return n.fn.affix = r, this
    };
    n(window).on("load", function () {
	n('[data-spy="affix"]').each(function () {
	    var r = n(this), t = r.data();
	    t.offset = t.offset || {};
	    null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
	    null != t.offsetTop && (t.offset.top = t.offsetTop);
	    i.call(r, t)
	})
    })
}(jQuery);
!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function () {
    "use strict";
    function i() {
	return kf.apply(null, arguments)
    }
    function pe(n) {
	kf = n
    }
    function ui(n) {
	return"[object Array]" === Object.prototype.toString.call(n)
    }
    function fi(n) {
	return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }
    function we(n, t) {
	for (var r = [], i = 0; i < n.length; ++i)
	    r.push(t(n[i], i));
	return r
    }
    function ft(n, t) {
	return Object.prototype.hasOwnProperty.call(n, t)
    }
    function ei(n, t) {
	for (var i in t)
	    ft(t, i) && (n[i] = t[i]);
	return ft(t, "toString") && (n.toString = t.toString), ft(t, "valueOf") && (n.valueOf = t.valueOf), n
    }
    function kt(n, t, i, r) {
	return gu(n, t, i, r, !0).utc()
    }
    function be() {
	return{empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
    }
    function e(n) {
	return null == n._pf && (n._pf = be()), n._pf
    }
    function iu(n) {
	if (null == n._isValid) {
	    var t = e(n);
	    n._isValid = !(isNaN(n._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated);
	    n._strict && (n._isValid = n._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
	}
	return n._isValid
    }
    function ru(n) {
	var t = kt(NaN);
	return null != n ? ei(e(t), n) : e(t).userInvalidated = !0, t
    }
    function ki(n, t) {
	var u, i, r;
	if ("undefined" != typeof t._isAMomentObject && (n._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (n._i = t._i), "undefined" != typeof t._f && (n._f = t._f), "undefined" != typeof t._l && (n._l = t._l), "undefined" != typeof t._strict && (n._strict = t._strict), "undefined" != typeof t._tzm && (n._tzm = t._tzm), "undefined" != typeof t._isUTC && (n._isUTC = t._isUTC), "undefined" != typeof t._offset && (n._offset = t._offset), "undefined" != typeof t._pf && (n._pf = e(t)), "undefined" != typeof t._locale && (n._locale = t._locale), cr.length > 0)
	    for (u in cr)
		i = cr[u], r = t[i], "undefined" != typeof r && (n[i] = r);
	return n
    }
    function dt(n) {
	ki(this, n);
	this._d = new Date(null != n._d ? n._d.getTime() : NaN);
	lr === !1 && (lr = !0, i.updateOffset(this), lr = !1)
    }
    function nt(n) {
	return n instanceof dt || null != n && null != n._isAMomentObject
    }
    function v(n) {
	return 0 > n ? Math.ceil(n) : Math.floor(n)
    }
    function s(n) {
	var t = +n, i = 0;
	return 0 !== t && isFinite(t) && (i = v(t)), i
    }
    function uu(n, t, i) {
	for (var f = Math.min(n.length, t.length), e = Math.abs(n.length - t.length), u = 0, r = 0; f > r; r++)
	    (i && n[r] !== t[r] || !i && s(n[r]) !== s(t[r])) && u++;
	return u + e
    }
    function fu() {
    }
    function eu(n) {
	return n ? n.toLowerCase().replace("_", "-") : n
    }
    function ke(n) {
	for (var i, t, f, r, u = 0; u < n.length; ) {
	    for (r = eu(n[u]).split("-"), i = r.length, t = eu(n[u + 1]), t = t ? t.split("-") : null; i > 0; ) {
		if (f = ou(r.slice(0, i).join("-")))
		    return f;
		if (t && t.length >= i && uu(r, t, !0) >= i - 1)
		    break;
		i--
	    }
	    u++
	}
	return null
    }
    function ou(n) {
	var t = null;
	if (!ct[n] && "undefined" != typeof module && module && module.exports)
	    try {
		t = li._abbr;
		require("./locale/" + n);
		gt(t)
	    } catch (i) {
	    }
	return ct[n]
    }
    function gt(n, t) {
	var i;
	return n && (i = "undefined" == typeof t ? et(n) : su(n, t), i && (li = i)), li._abbr
    }
    function su(n, t) {
	return null !== t ? (t.abbr = n, ct[n] = ct[n] || new fu, ct[n].set(t), gt(n), ct[n]) : (delete ct[n], null)
    }
    function et(n) {
	var t;
	if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n)
	    return li;
	if (!ui(n)) {
	    if (t = ou(n))
		return t;
	    n = [n]
	}
	return ke(n)
    }
    function l(n, t) {
	var i = n.toLowerCase();
	ii[i] = ii[i + "s"] = ii[t] = n
    }
    function p(n) {
	if ("string" == typeof n)
	    return ii[n] || ii[n.toLowerCase()]
    }
    function hu(n) {
	var i, t, r = {};
	for (t in n)
	    ft(n, t) && (i = p(t), i && (r[i] = n[t]));
	return r
    }
    function yt(n, t) {
	return function (r) {
	    return null != r ? (cu(this, n, r), i.updateOffset(this, t), this) : oi(this, n)
	}
    }
    function oi(n, t) {
	return n._d["get" + (n._isUTC ? "UTC" : "") + t]()
    }
    function cu(n, t, i) {
	return n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
    }
    function lu(n, t) {
	var i;
	if ("object" == typeof n)
	    for (i in n)
		this.set(i, n[i]);
	else if (n = p(n), "function" == typeof this[n])
	    return this[n](t);
	return this
    }
    function di(n, t, i) {
	var r = "" + Math.abs(n), u = t - r.length, f = n >= 0;
	return(f ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }
    function r(n, t, i, r) {
	var u = r;
	"string" == typeof r && (u = function () {
	    return this[r]()
	});
	n && (wt[n] = u);
	t && (wt[t[0]] = function () {
	    return di(u.apply(this, arguments), t[1], t[2])
	});
	i && (wt[i] = function () {
	    return this.localeData().ordinal(u.apply(this, arguments), n)
	})
    }
    function de(n) {
	return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
    }
    function ge(n) {
	for (var i = n.match(df), t = 0, r = i.length; r > t; t++)
	    i[t] = wt[i[t]] ? wt[i[t]] : de(i[t]);
	return function (u) {
	    var f = "";
	    for (t = 0; r > t; t++)
		f += i[t]instanceof Function ? i[t].call(u, n) : i[t];
	    return f
	}
    }
    function gi(n, t) {
	return n.isValid() ? (t = au(t, n.localeData()), ar[t] = ar[t] || ge(t), ar[t](n)) : n.localeData().invalidDate()
    }
    function au(n, t) {
	function r(n) {
	    return t.longDateFormat(n) || n
	}
	var i = 5;
	for (ai.lastIndex = 0; i >= 0 && ai.test(n); )
	    n = n.replace(ai, r), ai.lastIndex = 0, i -= 1;
	return n
    }
    function no(n) {
	return"function" == typeof n && "[object Function]" === Object.prototype.toString.call(n)
    }
    function t(n, t, i) {
	pr[n] = no(t) ? t : function (n) {
	    return n && i ? i : t
	}
    }
    function to(n, t) {
	return ft(pr, n) ? pr[n](t._strict, t._locale) : new RegExp(io(n))
    }
    function io(n) {
	return n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, t, i, r, u) {
	    return t || i || r || u
	}).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function c(n, t) {
	var i, r = t;
	for ("string" == typeof n && (n = [n]), "number" == typeof t && (r = function (n, i) {
	    i[t] = s(n)
	}), i = 0; i < n.length; i++)
	    wr[n[i]] = r
    }
    function ni(n, t) {
	c(n, function (n, i, r, u) {
	    r._w = r._w || {};
	    t(n, r._w, r, u)
	})
    }
    function ro(n, t, i) {
	null != t && ft(wr, n) && wr[n](t, i._a, i, n)
    }
    function nr(n, t) {
	return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
    }
    function uo(n) {
	return this._months[n.month()]
    }
    function fo(n) {
	return this._monthsShort[n.month()]
    }
    function eo(n, t, i) {
	var r, u, f;
	for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++)
	    if ((u = kt([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n))
		return r
    }
    function vu(n, t) {
	var i;
	return"string" == typeof t && (t = n.localeData().monthsParse(t), "number" != typeof t) ? n : (i = Math.min(n.date(), nr(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n)
    }
    function yu(n) {
	return null != n ? (vu(this, n), i.updateOffset(this, !0), this) : oi(this, "Month")
    }
    function oo() {
	return nr(this.year(), this.month())
    }
    function tr(n) {
	var i, t = n._a;
	return t && -2 === e(n).overflow && (i = t[d] < 0 || t[d] > 11 ? d : t[k] < 1 || t[k] > nr(t[b], t[d]) ? k : t[a] < 0 || t[a] > 24 || 24 === t[a] && (0 !== t[lt] || 0 !== t[at] || 0 !== t[vt]) ? a : t[lt] < 0 || t[lt] > 59 ? lt : t[at] < 0 || t[at] > 59 ? at : t[vt] < 0 || t[vt] > 999 ? vt : -1, e(n)._overflowDayOfYear && (b > i || i > k) && (i = k), e(n).overflow = i), n
    }
    function pu(n) {
	i.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }
    function w(n, t) {
	var i = !0;
	return ei(function () {
	    return i && (pu(n + "\n" + (new Error).stack), i = !1), t.apply(this, arguments)
	}, t)
    }
    function so(n, t) {
	te[n] || (pu(t), te[n] = !0)
    }
    function wu(n) {
	var t, i, r = n._i, u = fa.exec(r);
	if (u) {
	    for (e(n).iso = !0, t = 0, i = br.length; i > t; t++)
		if (br[t][1].exec(r)) {
		    n._f = br[t][0];
		    break
		}
	    for (t = 0, i = kr.length; i > t; t++)
		if (kr[t][1].exec(r)) {
		    n._f += (u[6] || " ") + kr[t][0];
		    break
		}
	    r.match(bi) && (n._f += "Z");
	    ur(n)
	} else
	    n._isValid = !1
    }
    function ho(n) {
	var t = ea.exec(n._i);
	return null !== t ? void(n._d = new Date(+t[1])) : (wu(n), void(n._isValid === !1 && (delete n._isValid, i.createFromInputFallback(n))))
    }
    function co(n, t, i, r, u, f, e) {
	var o = new Date(n, t, i, r, u, f, e);
	return 1970 > n && o.setFullYear(n), o
    }
    function ir(n) {
	var t = new Date(Date.UTC.apply(null, arguments));
	return 1970 > n && t.setUTCFullYear(n), t
    }
    function bu(n) {
	return ku(n) ? 366 : 365
    }
    function ku(n) {
	return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }
    function lo() {
	return ku(this.year())
    }
    function ot(n, t, i) {
	var u, f = i - t, r = i - n.day();
	return r > f && (r -= 7), f - 7 > r && (r += 7), u = o(n).add(r, "d"), {week: Math.ceil(u.dayOfYear() / 7), year: u.year()}
    }
    function ao(n) {
	return ot(n, this._week.dow, this._week.doy).week
    }
    function vo() {
	return this._week.dow
    }
    function yo() {
	return this._week.doy
    }
    function po(n) {
	var t = this.localeData().week(this);
	return null == n ? t : this.add(7 * (n - t), "d")
    }
    function wo(n) {
	var t = ot(this, 1, 4).week;
	return null == n ? t : this.add(7 * (n - t), "d")
    }
    function bo(n, t, i, r, u) {
	var f, o = 6 + u - r, s = ir(n, 0, 1 + o), e = s.getUTCDay();
	return u > e && (e += 7), i = null != i ? 1 * i : u, f = 1 + o + 7 * (t - 1) - e + i, {year: f > 0 ? n : n - 1, dayOfYear: f > 0 ? f : bu(n - 1) + f}
    }
    function ko(n) {
	var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
	return null == n ? t : this.add(n - t, "d")
    }
    function pt(n, t, i) {
	return null != n ? n : null != t ? t : i
    }
    function go(n) {
	var t = new Date;
	return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function rr(n) {
	var t, i, r, u, f = [];
	if (!n._d) {
	    for (r = go(n), n._w && null == n._a[k] && null == n._a[d] && ns(n), n._dayOfYear && (u = pt(n._a[b], r[b]), n._dayOfYear > bu(u) && (e(n)._overflowDayOfYear = !0), i = ir(u, 0, n._dayOfYear), n._a[d] = i.getUTCMonth(), n._a[k] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t)
		n._a[t] = f[t] = r[t];
	    for (; 7 > t; t++)
		n._a[t] = f[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
	    24 === n._a[a] && 0 === n._a[lt] && 0 === n._a[at] && 0 === n._a[vt] && (n._nextDay = !0, n._a[a] = 0);
	    n._d = (n._useUTC ? ir : co).apply(null, f);
	    null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
	    n._nextDay && (n._a[a] = 24)
	}
    }
    function ns(n) {
	var t, e, u, r, i, f, s;
	t = n._w;
	null != t.GG || null != t.W || null != t.E ? (i = 1, f = 4, e = pt(t.GG, n._a[b], ot(o(), 1, 4).year), u = pt(t.W, 1), r = pt(t.E, 1)) : (i = n._locale._week.dow, f = n._locale._week.doy, e = pt(t.gg, n._a[b], ot(o(), i, f).year), u = pt(t.w, 1), null != t.d ? (r = t.d, i > r && ++u) : r = null != t.e ? t.e + i : i);
	s = bo(e, u, r, f, i);
	n._a[b] = s.year;
	n._dayOfYear = s.dayOfYear
    }
    function ur(n) {
	if (n._f === i.ISO_8601)
	    return void wu(n);
	n._a = [];
	e(n).empty = !0;
	for (var t, u, s, r = "" + n._i, c = r.length, h = 0, o = au(n._f, n._locale).match(df) || [], f = 0; f < o.length; f++)
	    u = o[f], t = (r.match(to(u, n)) || [])[0], t && (s = r.substr(0, r.indexOf(t)), s.length > 0 && e(n).unusedInput.push(s), r = r.slice(r.indexOf(t) + t.length), h += t.length), wt[u] ? (t ? e(n).empty = !1 : e(n).unusedTokens.push(u), ro(u, t, n)) : n._strict && !t && e(n).unusedTokens.push(u);
	e(n).charsLeftOver = c - h;
	r.length > 0 && e(n).unusedInput.push(r);
	e(n).bigHour === !0 && n._a[a] <= 12 && n._a[a] > 0 && (e(n).bigHour = void 0);
	n._a[a] = ts(n._locale, n._a[a], n._meridiem);
	rr(n);
	tr(n)
    }
    function ts(n, t, i) {
	var r;
	return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? (r = n.isPM(i), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
    }
    function is(n) {
	var t, f, u, r, i;
	if (0 === n._f.length)
	    return e(n).invalidFormat = !0, void(n._d = new Date(NaN));
	for (r = 0; r < n._f.length; r++)
	    i = 0, t = ki({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[r], ur(t), iu(t) && (i += e(t).charsLeftOver, i += 10 * e(t).unusedTokens.length, e(t).score = i, (null == u || u > i) && (u = i, f = t));
	ei(n, f || t)
    }
    function rs(n) {
	if (!n._d) {
	    var t = hu(n._i);
	    n._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond];
	    rr(n)
	}
    }
    function us(n) {
	var t = new dt(tr(du(n)));
	return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }
    function du(n) {
	var t = n._i, i = n._f;
	return n._locale = n._locale || et(n._l), null === t || void 0 === i && "" === t ? ru({nullInput: !0}) : ("string" == typeof t && (n._i = t = n._locale.preparse(t)), nt(t) ? new dt(tr(t)) : (ui(i) ? is(n) : i ? ur(n) : fi(t) ? n._d = t : fs(n), n))
    }
    function fs(n) {
	var t = n._i;
	void 0 === t ? n._d = new Date : fi(t) ? n._d = new Date(+t) : "string" == typeof t ? ho(n) : ui(t) ? (n._a = we(t.slice(0), function (n) {
	    return parseInt(n, 10)
	}), rr(n)) : "object" == typeof t ? rs(n) : "number" == typeof t ? n._d = new Date(t) : i.createFromInputFallback(n)
    }
    function gu(n, t, i, r, u) {
	var f = {};
	return"boolean" == typeof i && (r = i, i = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, us(f)
    }
    function o(n, t, i, r) {
	return gu(n, t, i, r, !1)
    }
    function nf(n, t) {
	var r, i;
	if (1 === t.length && ui(t[0]) && (t = t[0]), !t.length)
	    return o();
	for (r = t[0], i = 1; i < t.length; ++i)
	    (!t[i].isValid() || t[i][n](r)) && (r = t[i]);
	return r
    }
    function es() {
	var n = [].slice.call(arguments, 0);
	return nf("isBefore", n)
    }
    function os() {
	var n = [].slice.call(arguments, 0);
	return nf("isAfter", n)
    }
    function si(n) {
	var t = hu(n), i = t.year || 0, r = t.quarter || 0, u = t.month || 0, f = t.week || 0, e = t.day || 0, o = t.hour || 0, s = t.minute || 0, h = t.second || 0, c = t.millisecond || 0;
	this._milliseconds = +c + 1e3 * h + 6e4 * s + 36e5 * o;
	this._days = +e + 7 * f;
	this._months = +u + 3 * r + 12 * i;
	this._data = {};
	this._locale = et();
	this._bubble()
    }
    function fr(n) {
	return n instanceof si
    }
    function tf(n, t) {
	r(n, 0, 0, function () {
	    var n = this.utcOffset(), i = "+";
	    return 0 > n && (n = -n, i = "-"), i + di(~~(n / 60), 2) + t + di(~~n % 60, 2)
	})
    }
    function er(n) {
	var i = (n || "").match(bi) || [], u = i[i.length - 1] || [], t = (u + "").match(fe) || ["-", 0, 0], r = +(60 * t[1]) + s(t[2]);
	return"+" === t[0] ? r : -r
    }
    function or(n, t) {
	var r, u;
	return t._isUTC ? (r = t.clone(), u = (nt(n) || fi(n) ? +n : +o(n)) - +r, r._d.setTime(+r._d + u), i.updateOffset(r, !1), r) : o(n).local()
    }
    function sr(n) {
	return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
    }
    function ss(n, t) {
	var r, u = this._offset || 0;
	return null != n ? ("string" == typeof n && (n = er(n)), Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && t && (r = sr(this)), this._offset = n, this._isUTC = !0, null != r && this.add(r, "m"), u !== n && (!t || this._changeInProgress ? ef(this, tt(n - u, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? u : sr(this)
    }
    function hs(n, t) {
	return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
    }
    function cs(n) {
	return this.utcOffset(0, n)
    }
    function ls(n) {
	return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(sr(this), "m")), this
    }
    function as() {
	return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(er(this._i)), this
    }
    function vs(n) {
	return n = n ? o(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0
    }
    function ys() {
	return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function ps() {
	var n, t;
	return"undefined" != typeof this._isDSTShifted ? this._isDSTShifted : (n = {}, (ki(n, this), n = du(n), n._a) ? (t = n._isUTC ? kt(n._a) : o(n._a), this._isDSTShifted = this.isValid() && uu(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted)
    }
    function ws() {
	return!this._isUTC
    }
    function bs() {
	return this._isUTC
    }
    function rf() {
	return this._isUTC && 0 === this._offset
    }
    function tt(n, t) {
	var u, f, e, i = n, r = null;
	return fr(n) ? i = {ms: n._milliseconds, d: n._days, M: n._months} : "number" == typeof n ? (i = {}, t ? i[t] = n : i.milliseconds = n) : (r = ee.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {y: 0, d: s(r[k]) * u, h: s(r[a]) * u, m: s(r[lt]) * u, s: s(r[at]) * u, ms: s(r[vt]) * u}) : (r = oe.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {y: st(r[2], u), M: st(r[3], u), d: st(r[4], u), h: st(r[5], u), m: st(r[6], u), s: st(r[7], u), w: st(r[8], u)}) : null == i ? i = {} : "object" == typeof i && ("from"in i || "to"in i) && (e = ks(o(i.from), o(i.to)), i = {}, i.ms = e.milliseconds, i.M = e.months), f = new si(i), fr(n) && ft(n, "_locale") && (f._locale = n._locale), f
    }
    function st(n, t) {
	var i = n && parseFloat(n.replace(",", "."));
	return(isNaN(i) ? 0 : i) * t
    }
    function uf(n, t) {
	var i = {milliseconds: 0, months: 0};
	return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }
    function ks(n, t) {
	var i;
	return t = or(t, n), n.isBefore(t) ? i = uf(n, t) : (i = uf(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i
    }
    function ff(n, t) {
	return function (i, r) {
	    var u, f;
	    return null === r || isNaN(+r) || (so(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), f = i, i = r, r = f), i = "string" == typeof i ? +i : i, u = tt(i, r), ef(this, u, n), this
	}
    }
    function ef(n, t, r, u) {
	var o = t._milliseconds, f = t._days, e = t._months;
	u = null == u ? !0 : u;
	o && n._d.setTime(+n._d + o * r);
	f && cu(n, "Date", oi(n, "Date") + f * r);
	e && vu(n, oi(n, "Month") + e * r);
	u && i.updateOffset(n, f || e)
    }
    function ds(n, t) {
	var r = n || o(), f = or(r, this).startOf("day"), i = this.diff(f, "days", !0), u = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
	return this.format(t && t[u] || this.localeData().calendar(u, this, o(r)))
    }
    function gs() {
	return new dt(this)
    }
    function nh(n, t) {
	var i;
	return t = p("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (n = nt(n) ? n : o(n), +this > +n) : (i = nt(n) ? +n : +o(n), i < +this.clone().startOf(t))
    }
    function th(n, t) {
	var i;
	return t = p("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (n = nt(n) ? n : o(n), +n > +this) : (i = nt(n) ? +n : +o(n), +this.clone().endOf(t) < i)
    }
    function ih(n, t, i) {
	return this.isAfter(n, i) && this.isBefore(t, i)
    }
    function rh(n, t) {
	var i;
	return t = p(t || "millisecond"), "millisecond" === t ? (n = nt(n) ? n : o(n), +this == +n) : (i = +o(n), +this.clone().startOf(t) <= i && i <= +this.clone().endOf(t))
    }
    function uh(n, t, i) {
	var r, u, f = or(n, this), e = 6e4 * (f.utcOffset() - this.utcOffset());
	return t = p(t), "year" === t || "month" === t || "quarter" === t ? (u = fh(this, f), "quarter" === t ? u /= 3 : "year" === t && (u /= 12)) : (r = this - f, u = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - e) / 864e5 : "week" === t ? (r - e) / 6048e5 : r), i ? u : v(u)
    }
    function fh(n, t) {
	var r, f, u = 12 * (t.year() - n.year()) + (t.month() - n.month()), i = n.clone().add(u, "months");
	return 0 > t - i ? (r = n.clone().add(u - 1, "months"), f = (t - i) / (i - r)) : (r = n.clone().add(u + 1, "months"), f = (t - i) / (r - i)), -(u + f)
    }
    function eh() {
	return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function of() {
	var n = this.clone().utc();
	return 0 < n.year() && n.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : gi(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : gi(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    function oh(n) {
	var t = gi(this, n || i.defaultFormat);
	return this.localeData().postformat(t)
    }
    function sh(n, t) {
	return this.isValid() ? tt({to: this, from: n}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function hh(n) {
	return this.from(o(), n)
    }
    function ch(n, t) {
	return this.isValid() ? tt({from: this, to: n}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function lh(n) {
	return this.to(o(), n)
    }
    function sf(n) {
	var t;
	return void 0 === n ? this._locale._abbr : (t = et(n), null != t && (this._locale = t), this)
    }
    function hf() {
	return this._locale
    }
    function ah(n) {
	switch (n = p(n)) {
	    case"year":
		this.month(0);
	    case"quarter":
	    case"month":
		this.date(1);
	    case"week":
	    case"isoWeek":
	    case"day":
		this.hours(0);
	    case"hour":
		this.minutes(0);
	    case"minute":
		this.seconds(0);
	    case"second":
		this.milliseconds(0)
	}
	return"week" === n && this.weekday(0), "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
    }
    function vh(n) {
	return n = p(n), void 0 === n || "millisecond" === n ? this : this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms")
    }
    function yh() {
	return+this._d - 6e4 * (this._offset || 0)
    }
    function ph() {
	return Math.floor(+this / 1e3)
    }
    function wh() {
	return this._offset ? new Date(+this) : this._d
    }
    function bh() {
	var n = this;
	return[n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    }
    function kh() {
	var n = this;
	return{years: n.year(), months: n.month(), date: n.date(), hours: n.hours(), minutes: n.minutes(), seconds: n.seconds(), milliseconds: n.milliseconds()}
    }
    function dh() {
	return iu(this)
    }
    function gh() {
	return ei({}, e(this))
    }
    function nc() {
	return e(this).overflow
    }
    function hi(n, t) {
	r(0, [n, n.length], 0, t)
    }
    function cf(n, t, i) {
	return ot(o([n, 11, 31 + t - i]), t, i).week
    }
    function tc(n) {
	var t = ot(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	return null == n ? t : this.add(n - t, "y")
    }
    function ic(n) {
	var t = ot(this, 1, 4).year;
	return null == n ? t : this.add(n - t, "y")
    }
    function rc() {
	return cf(this.year(), 1, 4)
    }
    function uc() {
	var n = this.localeData()._week;
	return cf(this.year(), n.dow, n.doy)
    }
    function fc(n) {
	return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    }
    function ec(n, t) {
	return"string" != typeof n ? n : isNaN(n) ? (n = t.weekdaysParse(n), "number" == typeof n ? n : null) : parseInt(n, 10)
    }
    function oc(n) {
	return this._weekdays[n.day()]
    }
    function sc(n) {
	return this._weekdaysShort[n.day()]
    }
    function hc(n) {
	return this._weekdaysMin[n.day()]
    }
    function cc(n) {
	var t, i, r;
	for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++)
	    if (this._weekdaysParse[t] || (i = o([2e3, 1]).day(t), r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(n))
		return t
    }
    function lc(n) {
	var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	return null != n ? (n = ec(n, this.localeData()), this.add(n - t, "d")) : t
    }
    function ac(n) {
	var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
	return null == n ? t : this.add(n - t, "d")
    }
    function vc(n) {
	return null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
    }
    function lf(n, t) {
	r(n, 0, 0, function () {
	    return this.localeData().meridiem(this.hours(), this.minutes(), t)
	})
    }
    function af(n, t) {
	return t._meridiemParse
    }
    function yc(n) {
	return"p" === (n + "").toLowerCase().charAt(0)
    }
    function pc(n, t, i) {
	return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }
    function wc(n, t) {
	t[vt] = s(1e3 * ("0." + n))
    }
    function bc() {
	return this._isUTC ? "UTC" : ""
    }
    function kc() {
	return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function dc(n) {
	return o(1e3 * n)
    }
    function gc() {
	return o.apply(null, arguments).parseZone()
    }
    function nl(n, t, i) {
	var r = this._calendar[n];
	return"function" == typeof r ? r.call(t, i) : r
    }
    function tl(n) {
	var t = this._longDateFormat[n], i = this._longDateFormat[n.toUpperCase()];
	return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function (n) {
	    return n.slice(1)
	}), this._longDateFormat[n])
    }
    function il() {
	return this._invalidDate
    }
    function rl(n) {
	return this._ordinal.replace("%d", n)
    }
    function vf(n) {
	return n
    }
    function ul(n, t, i, r) {
	var u = this._relativeTime[i];
	return"function" == typeof u ? u(n, t, i, r) : u.replace(/%d/i, n)
    }
    function fl(n, t) {
	var i = this._relativeTime[n > 0 ? "future" : "past"];
	return"function" == typeof i ? i(t) : i.replace(/%s/i, t)
    }
    function el(n) {
	var t, i;
	for (i in n)
	    t = n[i], "function" == typeof t ? this[i] = t : this["_" + i] = t;
	this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function yf(n, t, i, r) {
	var u = et(), f = kt().set(r, t);
	return u[i](f, n)
    }
    function ti(n, t, i, r, u) {
	if ("number" == typeof n && (t = n, n = void 0), n = n || "", null != t)
	    return yf(n, t, i, u);
	for (var e = [], f = 0; r > f; f++)
	    e[f] = yf(n, f, i, u);
	return e
    }
    function ol(n, t) {
	return ti(n, t, "months", 12, "month")
    }
    function sl(n, t) {
	return ti(n, t, "monthsShort", 12, "month")
    }
    function hl(n, t) {
	return ti(n, t, "weekdays", 7, "day")
    }
    function cl(n, t) {
	return ti(n, t, "weekdaysShort", 7, "day")
    }
    function ll(n, t) {
	return ti(n, t, "weekdaysMin", 7, "day")
    }
    function al() {
	var n = this._data;
	return this._milliseconds = g(this._milliseconds), this._days = g(this._days), this._months = g(this._months), n.milliseconds = g(n.milliseconds), n.seconds = g(n.seconds), n.minutes = g(n.minutes), n.hours = g(n.hours), n.months = g(n.months), n.years = g(n.years), this
    }
    function pf(n, t, i, r) {
	var u = tt(t, i);
	return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
    }
    function vl(n, t) {
	return pf(this, n, t, 1)
    }
    function yl(n, t) {
	return pf(this, n, t, -1)
    }
    function wf(n) {
	return 0 > n ? Math.floor(n) : Math.ceil(n)
    }
    function pl() {
	var u, f, e, s, o, r = this._milliseconds, n = this._days, t = this._months, i = this._data;
	return r >= 0 && n >= 0 && t >= 0 || 0 >= r && 0 >= n && 0 >= t || (r += 864e5 * wf(hr(t) + n), n = 0, t = 0), i.milliseconds = r % 1e3, u = v(r / 1e3), i.seconds = u % 60, f = v(u / 60), i.minutes = f % 60, e = v(f / 60), i.hours = e % 24, n += v(e / 24), o = v(bf(n)), t += o, n -= wf(hr(o)), s = v(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
    }
    function bf(n) {
	return 4800 * n / 146097
    }
    function hr(n) {
	return 146097 * n / 4800
    }
    function wl(n) {
	var t, r, i = this._milliseconds;
	if (n = p(n), "month" === n || "year" === n)
	    return t = this._days + i / 864e5, r = this._months + bf(t), "month" === n ? r : r / 12;
	switch (t = this._days + Math.round(hr(this._months)), n) {
	    case"week":
		return t / 7 + i / 6048e5;
	    case"day":
		return t + i / 864e5;
	    case"hour":
		return 24 * t + i / 36e5;
	    case"minute":
		return 1440 * t + i / 6e4;
	    case"second":
		return 86400 * t + i / 1e3;
	    case"millisecond":
		return Math.floor(864e5 * t) + i;
	    default:
		throw new Error("Unknown unit " + n);
	}
    }
    function bl() {
	return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * s(this._months / 12)
    }
    function it(n) {
	return function () {
	    return this.as(n)
	}
    }
    function kl(n) {
	return n = p(n), this[n + "s"]()
    }
    function ht(n) {
	return function () {
	    return this._data[n]
	}
    }
    function dl() {
	return v(this.days() / 7)
    }
    function gl(n, t, i, r, u) {
	return u.relativeTime(t || 1, !!i, n, r)
    }
    function na(n, t, i) {
	var r = tt(n).abs(), h = bt(r.as("s")), f = bt(r.as("m")), e = bt(r.as("h")), o = bt(r.as("d")), s = bt(r.as("M")), c = bt(r.as("y")), u = h < ut.s && ["s", h] || 1 === f && ["m"] || f < ut.m && ["mm", f] || 1 === e && ["h"] || e < ut.h && ["hh", e] || 1 === o && ["d"] || o < ut.d && ["dd", o] || 1 === s && ["M"] || s < ut.M && ["MM", s] || 1 === c && ["y"] || ["yy", c];
	return u[2] = t, u[3] = +n > 0, u[4] = i, gl.apply(null, u)
    }
    function ta(n, t) {
	return void 0 === ut[n] ? !1 : void 0 === t ? ut[n] : (ut[n] = t, !0)
    }
    function ia(n) {
	var t = this.localeData(), i = na(this, !n, t);
	return n && (i = t.pastFuture(+this, i)), t.postformat(i)
    }
    function ci() {
	var n, e, o, t = tu(this._milliseconds) / 1e3, a = tu(this._days), i = tu(this._months);
	n = v(t / 60);
	e = v(n / 60);
	t %= 60;
	n %= 60;
	o = v(i / 12);
	i %= 12;
	var s = o, h = i, c = a, r = e, u = n, f = t, l = this.asSeconds();
	return l ? (0 > l ? "-" : "") + "P" + (s ? s + "Y" : "") + (h ? h + "M" : "") + (c ? c + "D" : "") + (r || u || f ? "T" : "") + (r ? r + "H" : "") + (u ? u + "M" : "") + (f ? f + "S" : "") : "P0D"
    }
    var kf, li, cr = i.momentProperties = [], lr = !1, ct = {}, ii = {}, df = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ar = {}, wt = {}, gf = /\d/, y = /\d\d/, ne = /\d{3}/, vr = /\d{4}/, vi = /[+-]?\d{6}/, h = /\d\d?/, yi = /\d{1,3}/, yr = /\d{1,4}/, pi = /[+-]?\d{1,6}/, wi = /[+-]?\d+/, bi = /Z|[+-]\d\d:?\d\d/gi, ri = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, pr = {}, wr = {}, b = 0, d = 1, k = 2, a = 3, lt = 4, at = 5, vt = 6, dr, ie, re, ue, fe, ee, oe, se, he, gr, nu, ce, le, ae, ve, rt, ye, n;
    r("M", ["MM", 2], "Mo", function () {
	return this.month() + 1
    });
    r("MMM", 0, 0, function (n) {
	return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function (n) {
	return this.localeData().months(this, n)
    });
    l("month", "M");
    t("M", h);
    t("MM", h, y);
    t("MMM", ri);
    t("MMMM", ri);
    c(["M", "MM"], function (n, t) {
	t[d] = s(n) - 1
    });
    c(["MMM", "MMMM"], function (n, t, i, r) {
	var u = i._locale.monthsParse(n, r, i._strict);
	null != u ? t[d] = u : e(i).invalidMonth = n
    });
    var ra = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ua = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), te = {};
    i.suppressDeprecationWarnings = !1;
    var fa = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, br = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], kr = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], ea = /^\/?Date\((\-?\d+)/i;
    i.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (n) {
	n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
    });
    r(0, ["YY", 2], 0, function () {
	return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    l("year", "y");
    t("Y", wi);
    t("YY", h, y);
    t("YYYY", yr, vr);
    t("YYYYY", pi, vi);
    t("YYYYYY", pi, vi);
    c(["YYYYY", "YYYYYY"], b);
    c("YYYY", function (n, t) {
	t[b] = 2 === n.length ? i.parseTwoDigitYear(n) : s(n)
    });
    c("YY", function (n, t) {
	t[b] = i.parseTwoDigitYear(n)
    });
    i.parseTwoDigitYear = function (n) {
	return s(n) + (s(n) > 68 ? 1900 : 2e3)
    };
    dr = yt("FullYear", !1);
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    l("week", "w");
    l("isoWeek", "W");
    t("w", h);
    t("ww", h, y);
    t("W", h);
    t("WW", h, y);
    ni(["w", "ww", "W", "WW"], function (n, t, i, r) {
	t[r.substr(0, 1)] = s(n)
    });
    ie = {dow: 0, doy: 6};
    r("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    l("dayOfYear", "DDD");
    t("DDD", yi);
    t("DDDD", ne);
    c(["DDD", "DDDD"], function (n, t, i) {
	i._dayOfYear = s(n)
    });
    i.ISO_8601 = function () {
    };
    re = w("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
	var n = o.apply(null, arguments);
	return this > n ? this : n
    });
    ue = w("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
	var n = o.apply(null, arguments);
	return n > this ? this : n
    });
    tf("Z", ":");
    tf("ZZ", "");
    t("Z", bi);
    t("ZZ", bi);
    c(["Z", "ZZ"], function (n, t, i) {
	i._useUTC = !0;
	i._tzm = er(n)
    });
    fe = /([\+\-]|\d\d)/gi;
    i.updateOffset = function () {
    };
    ee = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
    oe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    tt.fn = si.prototype;
    se = ff(1, "add");
    he = ff(-1, "subtract");
    i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    gr = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (n) {
	return void 0 === n ? this.localeData() : this.locale(n)
    });
    r(0, ["gg", 2], 0, function () {
	return this.weekYear() % 100
    });
    r(0, ["GG", 2], 0, function () {
	return this.isoWeekYear() % 100
    });
    hi("gggg", "weekYear");
    hi("ggggg", "weekYear");
    hi("GGGG", "isoWeekYear");
    hi("GGGGG", "isoWeekYear");
    l("weekYear", "gg");
    l("isoWeekYear", "GG");
    t("G", wi);
    t("g", wi);
    t("GG", h, y);
    t("gg", h, y);
    t("GGGG", yr, vr);
    t("gggg", yr, vr);
    t("GGGGG", pi, vi);
    t("ggggg", pi, vi);
    ni(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, t, i, r) {
	t[r.substr(0, 2)] = s(n)
    });
    ni(["gg", "GG"], function (n, t, r, u) {
	t[u] = i.parseTwoDigitYear(n)
    });
    r("Q", 0, 0, "quarter");
    l("quarter", "Q");
    t("Q", gf);
    c("Q", function (n, t) {
	t[d] = 3 * (s(n) - 1)
    });
    r("D", ["DD", 2], "Do", "date");
    l("date", "D");
    t("D", h);
    t("DD", h, y);
    t("Do", function (n, t) {
	return n ? t._ordinalParse : t._ordinalParseLenient
    });
    c(["D", "DD"], k);
    c("Do", function (n, t) {
	t[k] = s(n.match(h)[0], 10)
    });
    nu = yt("Date", !0);
    r("d", 0, "do", "day");
    r("dd", 0, 0, function (n) {
	return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function (n) {
	return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function (n) {
	return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    l("day", "d");
    l("weekday", "e");
    l("isoWeekday", "E");
    t("d", h);
    t("e", h);
    t("E", h);
    t("dd", ri);
    t("ddd", ri);
    t("dddd", ri);
    ni(["dd", "ddd", "dddd"], function (n, t, i) {
	var r = i._locale.weekdaysParse(n);
	null != r ? t.d = r : e(i).invalidWeekday = n
    });
    ni(["d", "e", "E"], function (n, t, i, r) {
	t[r] = s(n)
    });
    var oa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), sa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ha = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    for (r("H", ["HH", 2], 0, "hour"), r("h", ["hh", 2], 0, function () {
	return this.hours() % 12 || 12
    }), lf("a", !0), lf("A", !1), l("hour", "h"), t("a", af), t("A", af), t("H", h), t("h", h), t("HH", h, y), t("hh", h, y), c(["H", "HH"], a), c(["a", "A"], function (n, t, i) {
	i._isPm = i._locale.isPM(n);
	i._meridiem = n
    }), c(["h", "hh"], function (n, t, i) {
	t[a] = s(n);
	e(i).bigHour = !0
    }), ce = /[ap]\.?m?\.?/i, le = yt("Hours", !0), r("m", ["mm", 2], 0, "minute"), l("minute", "m"), t("m", h), t("mm", h, y), c(["m", "mm"], lt), ae = yt("Minutes", !1), r("s", ["ss", 2], 0, "second"), l("second", "s"), t("s", h), t("ss", h, y), c(["s", "ss"], at), ve = yt("Seconds", !1), r("S", 0, 0, function () {
	return~~(this.millisecond() / 100)
    }), r(0, ["SS", 2], 0, function () {
	return~~(this.millisecond() / 10)
    }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function () {
	return 10 * this.millisecond()
    }), r(0, ["SSSSS", 5], 0, function () {
	return 100 * this.millisecond()
    }), r(0, ["SSSSSS", 6], 0, function () {
	return 1e3 * this.millisecond()
    }), r(0, ["SSSSSSS", 7], 0, function () {
	return 1e4 * this.millisecond()
    }), r(0, ["SSSSSSSS", 8], 0, function () {
	return 1e5 * this.millisecond()
    }), r(0, ["SSSSSSSSS", 9], 0, function () {
	return 1e6 * this.millisecond()
    }), l("millisecond", "ms"), t("S", yi, gf), t("SS", yi, y), t("SSS", yi, ne), rt = "SSSS"; rt.length <= 9; rt += "S")
	t(rt, /\d+/);
    for (rt = "S"; rt.length <= 9; rt += "S")
	c(rt, wc);
    ye = yt("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = dt.prototype;
    n.add = se;
    n.calendar = ds;
    n.clone = gs;
    n.diff = uh;
    n.endOf = vh;
    n.format = oh;
    n.from = sh;
    n.fromNow = hh;
    n.to = ch;
    n.toNow = lh;
    n.get = lu;
    n.invalidAt = nc;
    n.isAfter = nh;
    n.isBefore = th;
    n.isBetween = ih;
    n.isSame = rh;
    n.isValid = dh;
    n.lang = gr;
    n.locale = sf;
    n.localeData = hf;
    n.max = ue;
    n.min = re;
    n.parsingFlags = gh;
    n.set = lu;
    n.startOf = ah;
    n.subtract = he;
    n.toArray = bh;
    n.toObject = kh;
    n.toDate = wh;
    n.toISOString = of;
    n.toJSON = of;
    n.toString = eh;
    n.unix = ph;
    n.valueOf = yh;
    n.year = dr;
    n.isLeapYear = lo;
    n.weekYear = tc;
    n.isoWeekYear = ic;
    n.quarter = n.quarters = fc;
    n.month = yu;
    n.daysInMonth = oo;
    n.week = n.weeks = po;
    n.isoWeek = n.isoWeeks = wo;
    n.weeksInYear = uc;
    n.isoWeeksInYear = rc;
    n.date = nu;
    n.day = n.days = lc;
    n.weekday = ac;
    n.isoWeekday = vc;
    n.dayOfYear = ko;
    n.hour = n.hours = le;
    n.minute = n.minutes = ae;
    n.second = n.seconds = ve;
    n.millisecond = n.milliseconds = ye;
    n.utcOffset = ss;
    n.utc = cs;
    n.local = ls;
    n.parseZone = as;
    n.hasAlignedHourOffset = vs;
    n.isDST = ys;
    n.isDSTShifted = ps;
    n.isLocal = ws;
    n.isUtcOffset = bs;
    n.isUtc = rf;
    n.isUTC = rf;
    n.zoneAbbr = bc;
    n.zoneName = kc;
    n.dates = w("dates accessor is deprecated. Use date instead.", nu);
    n.months = w("months accessor is deprecated. Use month instead", yu);
    n.years = w("years accessor is deprecated. Use year instead", dr);
    n.zone = w("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", hs);
    var ca = n, u = fu.prototype;
    u._calendar = {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"};
    u.calendar = nl;
    u._longDateFormat = {LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A"};
    u.longDateFormat = tl;
    u._invalidDate = "Invalid date";
    u.invalidDate = il;
    u._ordinal = "%d";
    u.ordinal = rl;
    u._ordinalParse = /\d{1,2}/;
    u.preparse = vf;
    u.postformat = vf;
    u._relativeTime = {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"};
    u.relativeTime = ul;
    u.pastFuture = fl;
    u.set = el;
    u.months = uo;
    u._months = ra;
    u.monthsShort = fo;
    u._monthsShort = ua;
    u.monthsParse = eo;
    u.week = ao;
    u._week = ie;
    u.firstDayOfYear = yo;
    u.firstDayOfWeek = vo;
    u.weekdays = oc;
    u._weekdays = oa;
    u.weekdaysMin = hc;
    u._weekdaysMin = ha;
    u.weekdaysShort = sc;
    u._weekdaysShort = sa;
    u.weekdaysParse = cc;
    u.isPM = yc;
    u._meridiemParse = ce;
    u.meridiem = pc;
    gt("en", {ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (n) {
	    var t = n % 10, i = 1 === s(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
	    return n + i
	}});
    i.lang = w("moment.lang is deprecated. Use moment.locale instead.", gt);
    i.langData = w("moment.langData is deprecated. Use moment.localeData instead.", et);
    var g = Math.abs, la = it("ms"), aa = it("s"), va = it("m"), ya = it("h"), pa = it("d"), wa = it("w"), ba = it("M"), ka = it("y"), da = ht("milliseconds"), ga = ht("seconds"), nv = ht("minutes"), tv = ht("hours"), iv = ht("days"), rv = ht("months"), uv = ht("years"), bt = Math.round, ut = {s: 45, m: 45, h: 22, d: 26, M: 11}, tu = Math.abs, f = si.prototype;
    return f.abs = al, f.add = vl, f.subtract = yl, f.as = wl, f.asMilliseconds = la, f.asSeconds = aa, f.asMinutes = va, f.asHours = ya, f.asDays = pa, f.asWeeks = wa, f.asMonths = ba, f.asYears = ka, f.valueOf = bl, f._bubble = pl, f.get = kl, f.milliseconds = da, f.seconds = ga, f.minutes = nv, f.hours = tv, f.days = iv, f.weeks = dl, f.months = rv, f.years = uv, f.humanize = ia, f.toISOString = ci, f.toString = ci, f.toJSON = ci, f.locale = sf, f.localeData = hf, f.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ci), f.lang = gr, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), t("x", wi), t("X", /[+-]?\d+(\.\d{1,3})?/), c("X", function (n, t, i) {
	i._d = new Date(1e3 * parseFloat(n, 10))
    }), c("x", function (n, t, i) {
	i._d = new Date(s(n))
    }), i.version = "2.10.6", pe(o), i.fn = ca, i.min = es, i.max = os, i.utc = kt, i.unix = dc, i.months = ol, i.isDate = fi, i.locale = gt, i.invalid = ru, i.duration = tt, i.isMoment = nt, i.weekdays = hl, i.parseZone = gc, i.localeData = et, i.isDuration = fr, i.monthsShort = sl, i.weekdaysMin = ll, i.defineLocale = su, i.weekdaysShort = cl, i.normalizeUnits = p, i.relativeTimeThreshold = ta, i
});
!function (n) {
    "use strict";
    function u() {
	var i = document.createElement("mm"), t = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, n;
	for (n in t)
	    if (void 0 !== i.style[n])
		return{end: t[n]};
	return!1
    }
    function f(i) {
	return this.each(function () {
	    var r = n(this), u = r.data("mm"), f = n.extend({}, t.DEFAULTS, r.data(), "object" == typeof i && i);
	    u || r.data("mm", u = new t(this, f));
	    "string" == typeof i && u[i]()
	})
    }
    var i, t, r;
    n.fn.emulateTransitionEnd = function (t) {
	var r = !1, f = this, u;
	n(this).one("mmTransitionEnd", function () {
	    r = !0
	});
	return u = function () {
	    r || n(f).trigger(i.end)
	}, setTimeout(u, t), this
    };
    i = u();
    i && (n.event.special.mmTransitionEnd = {bindType: i.end, delegateType: i.end, handle: function (t) {
	    if (n(t.target).is(this))
		return t.handleObj.handler.apply(this, arguments)
	}});
    t = function (i, r) {
	this.$element = n(i);
	this.options = n.extend({}, t.DEFAULTS, r);
	this.transitioning = null;
	this.init()
    };
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {toggle: !0, doubleTapToGo: !1, activeClass: "active"};
    t.prototype.init = function () {
	var t = this, i = this.options.activeClass;
	this.$element.find("li." + i).has("ul").children("ul").addClass("collapse in");
	this.$element.find("li").not("." + i).has("ul").children("ul").addClass("collapse");
	this.options.doubleTapToGo && this.$element.find("li." + i).has("ul").children("a").addClass("doubleTapToGo");
	this.$element.find("li").has("ul").children("a").on("click.metisMenu", function (r) {
	    var u = n(this), f = u.parent("li"), e = f.children("ul");
	    return r.preventDefault(), f.hasClass(i) ? t.hide(e) : t.show(e), t.options.doubleTapToGo && t.doubleTapToGo(u) && "#" !== u.attr("href") && "" !== u.attr("href") ? (r.stopPropagation(), void(document.location = u.attr("href"))) : void 0
	})
    };
    t.prototype.doubleTapToGo = function (n) {
	var t = this.$element;
	return n.hasClass("doubleTapToGo") ? (n.removeClass("doubleTapToGo"), !0) : n.parent().children("ul").length ? (t.find(".doubleTapToGo").removeClass("doubleTapToGo"), n.addClass("doubleTapToGo"), !1) : void 0
    };
    t.prototype.show = function (r) {
	var o = this.options.activeClass, u = n(r), e = u.parent("li"), f;
	if (!this.transitioning && !u.hasClass("in"))
	    return e.addClass(o), this.options.toggle && this.hide(e.siblings().children("ul.in")), u.removeClass("collapse").addClass("collapsing").height(0), this.transitioning = 1, f = function () {
		u.removeClass("collapsing").addClass("collapse in").height("");
		this.transitioning = 0
	    }, i ? void u.one("mmTransitionEnd", n.proxy(f, this)).emulateTransitionEnd(t.TRANSITION_DURATION).height(u[0].scrollHeight) : f.call(this)
    };
    t.prototype.hide = function (r) {
	var e = this.options.activeClass, u = n(r), f;
	if (!this.transitioning && u.hasClass("in"))
	    return u.parent("li").removeClass(e), u.height(u.height())[0].offsetHeight, u.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, f = function () {
		this.transitioning = 0;
		u.removeClass("collapsing").addClass("collapse")
	    }, i ? void u.height(0).one("mmTransitionEnd", n.proxy(f, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : f.call(this)
    };
    r = n.fn.metisMenu;
    n.fn.metisMenu = f;
    n.fn.metisMenu.Constructor = t;
    n.fn.metisMenu.noConflict = function () {
	return n.fn.metisMenu = r, this
    }
}(jQuery), function (n) {
    n.fn.extend({slimScroll: function (i) {
	    var r = n.extend({width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px"}, i);
	    return this.each(function () {
		function p(t) {
		    if (v) {
			t = t || window.event;
			var i = 0;
			t.wheelDelta && (i = -t.wheelDelta / 120);
			t.detail && (i = t.detail / 3);
			n(t.target || t.srcTarget || t.srcElement).closest("." + r.wrapperClass).is(u.parent()) && h(i, !0);
			t.preventDefault && !o && t.preventDefault();
			o || (t.returnValue = !1)
		    }
		}
		function h(n, t, i) {
		    o = !1;
		    var s = n, h = u.outerHeight() - f.outerHeight();
		    t && (s = parseInt(f.css("top")) + n * parseInt(r.wheelStep) / 100 * f.outerHeight(), s = Math.min(Math.max(s, 0), h), s = 0 < n ? Math.ceil(s) : Math.floor(s), f.css({top: s + "px"}));
		    e = parseInt(f.css("top")) / (u.outerHeight() - f.outerHeight());
		    s = e * (u[0].scrollHeight - u.outerHeight());
		    i && (s = n, n = s / u[0].scrollHeight * u.outerHeight(), n = Math.min(Math.max(n, 0), h), f.css({top: n + "px"}));
		    u.scrollTop(s);
		    u.trigger("slimscrolling", ~~s);
		    b();
		    l()
		}
		function w() {
		    y = Math.max(u.outerHeight() / u[0].scrollHeight * u.outerHeight(), 30);
		    f.css({height: y + "px"});
		    var n = y == u.outerHeight() ? "none" : "block";
		    f.css({display: n})
		}
		function b() {
		    w();
		    clearTimeout(nt);
		    e == ~~e ? (o = r.allowPageScroll, tt != e && u.trigger("slimscroll", 0 == ~~e ? "top" : "bottom")) : o = !1;
		    tt = e;
		    y >= u.outerHeight() ? o = !0 : (f.stop(!0, !0).fadeIn("fast"), r.railVisible && s.stop(!0, !0).fadeIn("fast"))
		}
		function l() {
		    r.alwaysVisible || (nt = setTimeout(function () {
			r.disableFadeOut && v || k || d || (f.fadeOut("slow"), s.fadeOut("slow"))
		    }, 1e3))
		}
		var v, k, d, nt, g, y, e, tt, o = !1, u = n(this), c;
		if (u.parent().hasClass(r.wrapperClass)) {
		    var a = u.scrollTop(), f = u.closest("." + r.barClass), s = u.closest("." + r.railClass);
		    if (w(), n.isPlainObject(i)) {
			if ("height"in i && "auto" == i.height && (u.parent().css("height", "auto"), u.css("height", "auto"), c = u.parent().parent().height(), u.parent().css("height", c), u.css("height", c)), "scrollTo"in i)
			    a = parseInt(r.scrollTo);
			else if ("scrollBy"in i)
			    a += parseInt(r.scrollBy);
			else if ("destroy"in i) {
			    f.remove();
			    s.remove();
			    u.unwrap();
			    return
			}
			h(a, !1, !0)
		    }
		} else if (!(n.isPlainObject(i) && "destroy"in i)) {
		    r.height = "auto" == r.height ? u.parent().height() : r.height;
		    a = n("<div><\/div>").addClass(r.wrapperClass).css({position: "relative", overflow: "hidden", width: r.width, height: r.height});
		    u.css({overflow: "hidden", width: r.width, height: r.height});
		    var s = n("<div><\/div>").addClass(r.railClass).css({width: r.size, height: "100%", position: "absolute", top: 0, display: r.alwaysVisible && r.railVisible ? "block" : "none", "border-radius": r.railBorderRadius, background: r.railColor, opacity: r.railOpacity, zIndex: 90}), f = n("<div><\/div>").addClass(r.barClass).css({background: r.color, width: r.size, position: "absolute", top: 0, opacity: r.opacity, display: r.alwaysVisible ? "block" : "none", "border-radius": r.borderRadius, BorderRadius: r.borderRadius, MozBorderRadius: r.borderRadius, WebkitBorderRadius: r.borderRadius, zIndex: 99}), c = "right" == r.position ? {right: r.distance} : {left: r.distance};
		    s.css(c);
		    f.css(c);
		    u.wrap(a);
		    u.parent().append(f);
		    u.parent().append(s);
		    r.railDraggable && f.bind("mousedown", function (i) {
			var r = n(document);
			return d = !0, t = parseFloat(f.css("top")), pageY = i.pageY, r.bind("mousemove.slimscroll", function (n) {
			    currTop = t + n.pageY - pageY;
			    f.css("top", currTop);
			    h(0, f.position().top, !1)
			}), r.bind("mouseup.slimscroll", function () {
			    d = !1;
			    l();
			    r.unbind(".slimscroll")
			}), !1
		    }).bind("selectstart.slimscroll", function (n) {
			return n.stopPropagation(), n.preventDefault(), !1
		    });
		    s.hover(function () {
			b()
		    }, function () {
			l()
		    });
		    f.hover(function () {
			k = !0
		    }, function () {
			k = !1
		    });
		    u.hover(function () {
			v = !0;
			b();
			l()
		    }, function () {
			v = !1;
			l()
		    });
		    u.bind("touchstart", function (n) {
			n.originalEvent.touches.length && (g = n.originalEvent.touches[0].pageY)
		    });
		    u.bind("touchmove", function (n) {
			o || n.originalEvent.preventDefault();
			n.originalEvent.touches.length && (h((g - n.originalEvent.touches[0].pageY) / r.touchScrollStep, !0), g = n.originalEvent.touches[0].pageY)
		    });
		    w();
		    "bottom" === r.start ? (f.css({top: u.outerHeight() - f.outerHeight()}), h(0, !0)) : "top" !== r.start && (h(n(r.start).position().top, null, !0), r.alwaysVisible || f.hide());
		    window.addEventListener ? (this.addEventListener("DOMMouseScroll", p, !1), this.addEventListener("mousewheel", p, !1)) : document.attachEvent("onmousewheel", p)
		}
	    }), this
	}});
    n.fn.extend({slimscroll: n.fn.slimScroll})
}(jQuery)