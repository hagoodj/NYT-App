



// article search url: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ubVFwmgMiXClcqzz9FyoX639MSKR6wGt
// start/end year url: q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231

// ajax function to pull info from nytimes api
var q = $("#search-term").val();
var startDate = $("#start-year").val();
var endDate = $("#end-year").val();
var resultsNum = $("records-retrived option:selected").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    q + "&start_date=" + startDate + "0101&end_date=" + endDate + "1231&api-key=ubVFwmgMiXClcqzz9FyoX639MSKR6wGt"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var results = response.response.docs;
    console.log(response);
})

// when search button is clicked
$("#search").on("click", function() {

})

// when clear button is clicked
$("#clear").on("click", function() {
    
})