/*Primary wine-pizza pairing JS functions*/

//Pizza type and pairing objects array
var options = {
    "toppings": [
        {
        "name": "Mushrooms",
        "img": "icons/mushroom.png",
        "wine": "Pinot Noir",
        "wineText":"The subtle tannin flavor, low acid, and light body of a Pinot Noir pairs well with the earthiness of mushrooms.",
        "wineImg": "icons/redwine.png",
        "id": 0
        },
        {
        "name": "Margherita",
        "img": "icons/1margherita.png",
        "wine": "Chianti",
        "wineText": "Characterized by fresh ingredients - mozzarella, basil, tomato - a Margherita does well with a more delicate wine such as a Chianti.",
        "wineImg": "icons/redwine.png",
        "id": 1
        },
        {
        "name": "Pepperoni",
        "img": "icons/pepperoni.png",
        "wine": "Sangiovese",
        "wineText": "This Italian red stands up to the strong flavors and fatty richness of the pepperoni.",
        "wineImg": "icons/redwine.png",
        "id": 2
        },
        {
        "name": "Sausage",
        "img": "icons/sausages.png",
        "wine": "Syrah",
        "wineText": "A full-bodied red pairs nicely with the spice mix (fennel, anise) in most sausages.",
        "wineImg":"icons/redwine.png",
        "id": 3
        },
        {
        "name": "Hawaiian",
        "img": "icons/pineapple.png",
        "wine": "Riesling",
        "wineText": "These toppings are both sweet and salty and the Riesling matches well with both.",
        "wineImg": "icons/white-wine.png",
        "id": 4
        },
        {
        "name": "Veggie",
        "img": "icons/pepper-onion.png",
        "wine": "Sauvignon Blanc",
        "wineText": "You want a wine that pairs well with all of the different flavors of the vegetables. A good choice is a crisp and acidic Sauvignon Blanc.",
        "wineImg": "icons/white-wine.png",
        "id": 5
        },
        {
        "name": "White Pizza",
        "img": "icons/cheese.png",
        "wine": "Chardonnay",
        "wineText": "This is a creamy pizza that lacks the acidity of a tomato sauce. The Chardonnay elevates the cream flavors.",
        "wineImg": "icons/white-wine.png",
        "id": 6
        },
        ]
}

//Load pizza topping array ("options") images
$(document).ready(function(){
    var source = $("#toppings-template").html()
    var template = Handlebars.compile(source);
    var newHTML = template(options);
    $("#pizza-topping-container").append(newHTML);
});

//Hides sidenav bar
$(document).ready(function () {
    $("#sidenavCollapse").on("click", function () {
        $('#sidenav').toggleClass("active");
    });

//On selection of topping icon, call wine pairing function and show selected topping
$(".topping-options").click(function(){
    var id = $(this).attr("id");
    var source = $(".topping-options").html();
    var template = Handlebars.compile(source);
    var newHTML = template(options.toppings[id]);
    pairWithWine(id);
});
});

//Return best wine pairing based on selection
    function pairWithWine(id) {
        var source = $("#wine-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(options.toppings[id]);
        $("#wine-container").html(newHTML);
    };

//Create a new pairing, resets wine container
$(".btn").on("click", function() {
        document.reload();
    });
