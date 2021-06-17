// Replace css or animate with fade methods
// Params in parentheses
// Chaning them can produce a flashing effect

$("section > h2").on("click", function () {
  $(this).fadeOut(2000).fadeIn(500);
});

$("section h3").on("click", function () {
  $(this).fadeTo(1000, 0.6).fadeTo(200, 1);
});
