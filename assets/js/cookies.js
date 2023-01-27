// Create a cookie
$.cookie('logged_in', 'admin_cookie');

// Create expiring cookie, 7 days from then:
$.cookie('logged_in', 'admin_cookie', { expires: 7 });

// Read a cookie
$.cookie('logged_in'); // => 'the_value'
$.cookie('not_existing'); // => null

// EDIT
// Attaching to a button click (jQuery 1.7+) and set cookie
$("#addCookie").on("click", function () {
    $.cookie('logged_in', 'admin_cookie', { expires: 7 });
});

// Attaching to a button click (jQuery < 1.7) and set cookie
$("#addCookie").click(function () {
    $.cookie('logged_in', 'admin_cookie', { expires: 7 });
});


if ($.cookie('logged_in')) {
    // Apply rule you want to apply
    $('.ClassToSelect').css("display", "none");
}
