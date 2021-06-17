// jquery makes binding events easy across all different types of browsers

// on: binds an event
// off: unbinds an event
let lis = $("#points-of-sale li");

lis.on("mouseover", turnred);

function turnred() {
  $(this).css({ backgroundColor: "cyan" });
}
lis.on("mouseout", turnwhite);

function turnwhite(e) {
  $(this).css({ backgroundColor: "white" });
}
