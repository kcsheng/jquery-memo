// slide up slide down slide toggle

$(".slideup-btn").on("click", function () {
  $("lead-banner").slideUp(400);
});
$(".slidedown-btn").on("click", function () {
  $("lead-banner").slideDown(400);
});
$(".slidetoggle-btn").on("click", function () {
  $("lead-banner").slideToggle(400);
});
