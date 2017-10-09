$(document).on("scroll", function () {


  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")

    } else {
      $(tag).removeClass("visible")
    }

  if (pageTop > 200) {
      $(".hero").addClass("fade")
  } else
  	$(".hero").removeClass("fade")
  }
  return false
})

$('.menu-toggle').on('click',function(){
  $('.menu').toggleClass('open')
    return false

})
$(".menu-toggle").on("click", function () {

  if ($("img.icon").attr("src") == "/assets/menu-icon.svg") {
     $("img.icon").attr("src", "/assets/menu-close.svg")
  } else {
     $("img.icon").attr("src", "/assets/menu-icon.svg")
  }
})
$("a.shophover").hover(function () {
  $("div.navigation-overlay-bg-shop-hover").fadeIn()
}, function () {
  $("div.navigation-overlay-bg-shop-hover").fadeOut()
})
$("a.winterhover").hover(function () {
  $("div.navigation-overlay-bg-winter-hover").fadeIn()
}, function () {
  $("div.navigation-overlay-bg-winter-hover").fadeOut()
})
$("a.processhover").hover(function () {
  $("div.navigation-overlay-bg-process-hover").fadeIn()
}, function () {
  $("div.navigation-overlay-bg-process-hover").fadeOut()
})
$("a.abouthover").hover(function () {
  $("div.navigation-overlay-bg-about-hover").fadeIn()
}, function () {
  $("div.navigation-overlay-bg-about-hover").fadeOut()
})
