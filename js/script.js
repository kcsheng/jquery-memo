// hide can do shrink, move and fadeout all at once.
// show does the reverse
$("section h3").on("click", function () {
  $(this).hide(1000).show(1000);
});
// toggle fade in or out depending on its current state
// Whenever there is a toggle you need to have another element as a switch. In the following example, map is the switch.
$("img[alt=map]").on("click", function () {
  $("section > h2").toggle(1000);
});
