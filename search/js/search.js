$('#searchResults').slideUp(0);
$('#searchResults').css("display", "block;");
$('#query').click(function() { this.focus() });
$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
    $('#searchResults').slideDown(1000);
    $('#query').focus();
}); // end onkeyup

$('#query').focus(function(){ //If there's text in the box then when you focus on it
    if($('#query').val() != ""){
        $('#searchResults').slideDown(1000);
    } else $('#searchResults').slideUp(0);
});

$('#query').focusout(function(event){
    $('#searchResults').slideUp(1000);
});
