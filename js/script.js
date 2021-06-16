console.log($("#lead-banner").css("position"));

$("#lead-banner").css("top", "100px").css("border", "3px solid red");
// better way if you have multiple css attribute to change/add
$("header nav li").css({
  border: "1px solid blue",
  fontSize: "30px",
  opacity: "0.2",
});
