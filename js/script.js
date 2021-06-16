// Method chaining speeds up code productivity
$("#lead-banner p").css({ color: "red" }).next;
$("#contact-methods")
  .append("<p>")
  .text("Just a new line of contact")
  .css({ color: "red", fontSize: "30px" })
  .next()
  .css({ border: "3px solid blue" })
  .closest("section")
  .css({ border: "5px solid purple" })
  .prev()
  .css({ border: "5px solid green" });
