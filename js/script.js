// jquery filters - very much like css pseudoclasses - refining selectors, always starts with colon

// :even and :odd are based on index, as jquery wraps elements in array.
$("header nav li:even").css({ border: "2px solid blue" });
$("header nav li:odd").css({ border: "2px solid yellow" });

$("#contact ul:first").css({ backgroundColor: "yellow" });
$("#contact ul:last").css({ border: "1px solid red" });
// using :not
$("section:not('#lead-banner')").css({ border: "1px solid cyan" });

//:lt, :gt less than or greater than, be mindful of using index
$("#contact-methods li:lt(2)").css({ border: "1px solid blue" });
$("#contact-methods li:gt(1)").css({ border: "1px solid red" });

// Attribute filters: a tag with specific attribute
$("div[id]").css({ backgroundColor: "pink" });
$("img[src]").css({ border: "5px solid gray" });
$("a[href]").css({ textDecoration: "underline" });

// Attribute with specific value: a tag with specific attribute=value pairs
$("section[id=clients]").css({ backgroundColor: "red" });
