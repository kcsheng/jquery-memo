// jquery really excels in traversing dom. the syntax is much simpler and light weight than vanilla javascript
// next element
$("img[alt=map").next().css({ border: "5px solid red" });
$("#clients img").next().css({ border: "3px solid blue" });

// previous element
$("header nav").prev().css({ border: "3px solid yellow" });

// parent, you can also use parents()

$("#points-of-sale h3").parent().css({ border: "3px solid pink" });

// children
$("#contact-methods").children().css({ backgroundColor: "cyan" });

// find
$("#social-nav").find(".linked-in").css({ border: "1px solid black" });

// closest parent - only looks up, not down
$("header ul").closest("nav").css({ border: "1px solid gray" });
