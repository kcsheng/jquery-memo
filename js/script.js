// jquery simplifies syntax of event binding/unbinding through using helpers

// $(".wrapper li").hover(() => {
//   this.css({ border: "1px solid red" });
// });
$("#lead-banner").click(() => {
  alert("You clicked!");
});

$("header li").click(() => {
  $(this).css({ border: "2px solid red" });
});
