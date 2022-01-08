var main = {
  init: function () {
    this.aos()
    this.typeani()
    this.parallax()
  },

  aos: function () {
    AOS.init()
  },
  typeani: function () {
    new Typed(".element", {
      strings: [
        "Hello",
        "नमस्कार",
        "こんにちは",
        "Привет",
        "안녕하십니까",
        "你好",
        "Halló",
        "Bonjour",
        "Hola",
      ],
      typeSpeed: 500,
      loop: true,
      showCursor: false,
    })
  },
  parallax: function () {
    var circle = $("#circle")
    var layer = $("#intro")

    layer.mousemove(function (e) {
      var ivalueX = (e.pageX * -1) / 30
      var ivalueY = (e.pageY * -1) / 30
      var cvalueX = (e.pageX * -1) / 40
      var cvalueY = (e.pageY * -1) / 60
      // console.log("parllax")
      circle.css(
        "transform",
        "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
      )
      // skill.css(
      //   "transform",
      //   "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
      // )
    })
  },
}

main.init()
