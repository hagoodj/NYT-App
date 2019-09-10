// when search button is clicked
$("#search").on("click", function() {
    event.preventDefault();

    console.log("search was clicked!");

    var q = $("#search-term").val();
    var startDate = $("#start-year").val();
    var endDate = $("#end-year").val();
    var resultsNum = $("#records-retrieved").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    q + "&start_date=" + startDate + "0101&end_date=" + endDate + "1231&api-key=0YPwVieguvy1TfgAQ0q807LIGYhm0rSw"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.response.docs;
        if (resultsNum > 10) {
            resultsNum = 10;
        }

        for (var i = 0; i < resultsNum; i ++) {
            var article = $("<div>");
            var headline = " " + results[i].headline.print_headline;
            var byLine = " " + results[i].byline.original;
            var section = "<br>Section: " + results[i].section_name;
            var pubDate = "<br>" + results[i].pub_date;
            var pp = results[i].print_page +  " pp.";
            var articleUrl = "<br>" + results[i].web_url;

            article.append(i, headline, byLine, pp, section, pubDate, articleUrl);
            $("#articles-view").append(article);
        }
    })

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
})