function t(t) {
    var e = Object.create(r);
    e.create(n, t.currentTarget),
        e.position(n, t.currentTarget)
}
function e() {
    n.className = "tooltip-container no-display",
        n.removeChild(n.firstChild),
        n.removeAttribute("style")
}
function TOOLTIPload() {
    n = document.documentElement.querySelector(".tooltip-container");
    var o = document.documentElement.querySelectorAll("[data-tooltip]");
    Array.prototype.forEach.call(o, function (o) {
        o.addEventListener("mouseover", t, !1),
            o.addEventListener("mouseout", e, !1)
    })
}
var n, i, l, r = {
    create: function (t, e) {
        i = e.getBoundingClientRect(),
            l = document.createTextNode(e.getAttribute("data-tooltip")),
            t.appendChild(l),
            i.left > window.innerWidth - 100 ? t.className = "tooltip-container tooltip-left" : i.left + i.width / 2 < 100 ? t.className = "tooltip-container tooltip-right" : t.className = "tooltip-container tooltip-center"
    },
    position: function (t, e) {
        var o, n = i.top + i.height + 10;
        i.left > window.innerWidth - 100 ? (t.style.left = i.left - 220 + "px",
            t.style.top = e.offsetTop + "px") : i.left + i.width / 2 < 100 ? (t.style.left = i.left + i.width + 20 + "px",
                t.style.top = e.offsetTop + "px") : (o = i.left + i.width / 2 - t.offsetWidth / 2,
                    t.style.left = o + "px",
                    t.style.top = n + "px")
    }
};
document.addEventListener("DOMContentLoaded", TOOLTIPload, !1)