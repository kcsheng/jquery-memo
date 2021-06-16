// Wrap or unwrap an element or elements, so you can manipulate them, e.g., visibility, clickability, responsiveness... etc

// wrap() wraps individully
// unwrap() unwraps individually
// wrapAll() wraps everythng in one single element
$("section").wrap("<div>"); // wraps all sections with individual divs
$("section").unwrap(); // reverse wrapping
$("section").wrapAll("<div>"); //wraps all sections into one div
