$("*").on("click", function (e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.pageX);
  console.log(e.pageY);
  console.log(e.timeStamp);
  e.stopPropagation();
});
