$(function () {
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });
});

// плавная прокрутка до якоря
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Кнопка вверх

$("body").append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".upbtn").css({
      bottom: "15px",
    });
  } else {
    $(".upbtn").css({
      bottom: "-80px",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});
