// get request for data + api key
// promise that will return the response (this is the object that is returned)
// get user input
// loop through the response and print each giphy

//FUNCTION THAT GET THE DATA AND DOES STUFF
function getData() {

    $('.disappear').hide();
    $('.inner').empty();

    // get value of user input
    var input = $("#searchtext").val();

    var location = 'http://api.giphy.com/v1/gifs/search?q=';
    var userinput = input;
    var apikey = '&api_key=He9MNoXecFsgMxMfOU0EKZ3HLV1z21XK&limit=20';

    var xhr = $.get(location + userinput + apikey);

    //javascript, jQuery from Giphy Docs - here's where I want to get the info from plus my key bro, can I get those Giphs plzzzzz
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=He9MNoXecFsgMxMfOU0EKZ3HLV1z21XK&limit=30");
    // Once Giphy is done checking out my request, can you please send back my data aka response :)
    xhr.done(function(response) {

        console.log("success got data", response);

        var jiffs =response.data;

        for (i in jiffs) {
            $('.inner').append('<img class="data-img" src="'+ jiffs[i].images.original.url +'" >');
        }

        // $('.history').append('<button class="btn btn-outline-secondary btn-lg btn-block history-button mx-auto" type="submit" value=" + input +">' +input +'</button>');
        $('.history').append('<button class="btn btn-outline-secondary btn-lg btn-block mx-auto history-button" type="submit">' +input +'</button>');

        $('#search-term-display').html(input + ' ...');

    });
}

//HANDLE SUBMIT BUTTON
$('#searchgifs').click(function() {

    getData();

})

//HANDLE ENTER BUTTON
$('.form-control').keypress(function(e) {
    if(e.which == 13) {
        getData();
    }
});






//TODO fix history buttons when you have time - so user can access past giphs
// $(".history-button").click(function () {
//     var text = $(this).text();
//     var historytext = $("input").val(text);
//
//
//     $('.disappear').hide();
//     $('.inner').empty();
//     // get value of history button
//
//     var input = $("#searchtext").val();
//
//     var location = 'http://api.giphy.com/v1/gifs/search?q=';
//     var userinput = input;
//     var apikey = '&api_key=He9MNoXecFsgMxMfOU0EKZ3HLV1z21XK&limit=20';
//
//     var xhr = $.get(location + userinput + apikey);
//
//
//     //javascript, jQuery from Giphy Docs - here's where I want to get the info from plus my key bro, can I get those Giphs plzzzzz
//     // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=He9MNoXecFsgMxMfOU0EKZ3HLV1z21XK&limit=30");
//     // Once Giphy is done checking out my request, can you please send back my data aka response :)
//     xhr.done(function(response) {
//
//         console.log("success got data", response);
//
//         var jiffs =response.data;
//
//         for (i in jiffs) {
//             $('.inner').append('<img class="data-img" src="'+ jiffs[i].images.original.url +'" >');
//         }
//
//         $('#search-term-display').html(input + ' ...');
//
//     });
//
// });















