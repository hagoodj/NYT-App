// when search button is clicked
$("#search").on("click", function() {
    event.preventDefault();

    console.log("search was clicked!");

    if ($("#search-term").val() == "") {
        // prompt user for search term
        $("#search-term-label").html("Search Term<span class='text-danger'> (required)</span>");
    }
    else {

        var q = "q=" + $("#search-term").val();
        var startDate = "&start_date=" + $("#start-year").val() + "0101"; 
        var endDate = "&end_date=" + $("#end-year").val() + "1231";
        var resultsNum = $("#records-retrieved").val();
        var apikey = "&api-key=0YPwVieguvy1TfgAQ0q807LIGYhm0rSw"

        // remove startDate string if input box is empty
        if ($("#start-year").val() === "" || $("#start-year").val() < 1000) {
            startDate = "";
        }

        // remove endDate string if input box is empty
        if ($("#end-year").val() === "" || $("#end-year").val() < 1000) {
            endDate = "";
        }

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + q + startDate + endDate + apikey;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.response.docs;
            $(".articles-view").empty();
            console.log(results);
            if (resultsNum > 10 || resultsNum === 0 || resultsNum === "") {
                resultsNum = 10;
            }

            for (var i = 0; i < resultsNum; i ++) {
                var article = $("<div>");
                var headline = " " + results[i].headline.print_headline;
                var byLine = " " + results[i].byline.original;
                var section = "<br>Section: " + results[i].section_name;
                var pubDate = "<br>" + results[i].pub_date;
                var pp = results[i].print_page +  " pp.";
                var articleUrl = $("<a>").attr("href", results[i].web_url);
                articleUrl.html("<br>" + results[i].web_url);

                article.append(i, headline, byLine, pp, section, pubDate, articleUrl)
                article.addClass("article");
                $(".articles-view").append(article);
            }
        })
        $("#search-term-label").html("Search Term");
    }

})

// when clear button is clicked
$("#clear").on("click", function() {
    event.preventDefault();

    console.log("clear was clicked");
    // reset the input texts
    $("#search-term").val("");
    $("#records-retrieved").val("");
    $("#start-year").val("");
    $("#end-year").val("");
    $("#search-term-label").html("Search Term");
    $(".articles-view").empty();
})