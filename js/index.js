$("#totop").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    scrollingSpeed: 800,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["第一屏", "第二屏", "第三屏", "第四屏"],
    continuousVertical: true,
    fixedElements: "#menu",
    menu: "#menu",
    afterLoad: function (anchor, index) {
        if (index === 2) {
            $(".middle-left").transition({x: 0});
            $(".middle-right").transition({y: 0});
        }
        if (index === 1) {
            $(".header_1").transition({x: 0})
        }
        if (index === 3) {
            $(".dong1").transition({rotate: 0});
            $(".dong2").transition({rotate: 0})
        }
        if (index === 4) {
            $(".call p").transition({y: 0});
            $(".call h1").transition({x: 0});
            $(".call .input").transition({x: 0});
            $(".call h2").transition({x: 0});
            $(".call h3").transition({x: 0});
        }
    },
    onLeave: function (index) {
        if (index === 3) {
            $(".dong1").transition({rotate: 360});
            $(".dong2").transition({rotate: 360});

        }
        if (index === 1) {
            $(".header_1").transition({x: -1000});
        }
        if (index === 2) {
            $(".middle-left").transition({x: -1000});
            $(".middle-right").transition({y: 1000});
        }
        if (index === 4) {
            $(".call p").transition({y: -1300});
            $(".call h1").transition({x: 1300});
            $(".call .input").transition({x: -1300});
            $(".call h2").transition({x: 1300});
            $(".call h3").transition({x: 1300});
        }
    }

});


