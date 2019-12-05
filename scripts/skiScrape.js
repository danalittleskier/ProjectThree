var cheerio = require("cheerio");

app.get("/ski-scrape", function (req, res) {
    //Use axios to grab the body of html
    var skis = [];
    axios.get("https://www.backcountry.com/alpine-skis").then(function (response) {
        //Save cheerio to $ to run like jQuery
        var $ = cheerio.load(response.data);
        //Grab every CHILD HTML TAG within a PARENT HTML TAG, follows cheerio syntax from documentation here
        $(".ui-product-listing-grid").each(function (i, element) {

            //Save the results to a local object
            var result = {}
            //Add text of every link, save as properties of a result object
            result.brand = $(this)
                .find("div")
                .hasClass("product");
                
                
            console.log(result.brand);
            result.model = $(this)
                .children()
                .text();
            result.image = $(this)
                .find("img")
                .attr("src")
            // result.category = $(this)
            //     .children()
            //     .text();
            // result.brand = $(this)
            //     .children()
            //     .text();
            // result. = "https://www.backcountry.com/alpine-skis" + $(this)
            //     .find("a")
            //     .attr("href");
            
            // db.Resort.create(result)
            //     .catch(function (err) {
            //         res.sendStatus(err);
            //     });
        });
        res.send("Scrape Complete")
    });
});