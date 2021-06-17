// Just change the css to animate method:
// You can only animate properties with numeric values
// font family or color wont work
// default animate speed is 400 and swing (momentum type)
// The last param is callback function when animate is
$("section > h2").on("click", function () {
  $(this).animate(
    { width: "500px", height: "200px" },
    1000,
    "linear",
    function () {
      alert("Animate completed!");
    }
  );
});
