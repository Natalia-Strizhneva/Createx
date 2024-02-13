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
