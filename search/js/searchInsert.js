var returned;
$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        returned = data;
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
}); // end onkeyup




//Event Handler Jazz
$("#searchResults").on("click", "a", function(event){
    event.preventDefault();
    var linkName = $(this).text();
    console.log(linkName);
    console.log($(this).index("a"));
    index = $(this).index("a");
    getData(returned.RESULTS[index].lat, returned.RESULTS[index].lon);
});






function getData(lat, long){
    // Get the data from the wunderground API
    $.get("http://api.wunderground.com/api/6e66d070efecf287/geolookup/conditions/q/" + lat + "," + long + ".jsonp", function(data){

        console.log(data);
/*
        var cityState = data.location.city + ", " + data.location.country;
        $("#cityDisplay").text(cityState);
        $("head > title").prepend("Weather for " + cityState);

        var currentTemp = Math.round(data.current_observation.temp_f) + unescape('%B0');
        $("#currentTemp").text(currentTemp);

        var summary = data.current_observation.weather;
        $("#summary").text(summary);
Add in for the other two data points
        var wind = data.current_observation.wind_mph;
        $("#add1").text("The wind is blowing at " + wind + " miles per hour.");

        $("#add2").text("Relative Humidity is at " + data.current_observation.relative_humidity);
*/
    }, "jsonp");

}

// A function for changing a string to TitleCase
function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
