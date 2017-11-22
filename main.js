var options = {
    "toppings": [
        {
        "name": "Mushrooms",
        "img": "icons/white.png",
        "wine": "Pinot Noir",
        "wineText":"Pairs well with the earthiness of mushrooms",
        "wineImg": "icons/redwine.png",
        "id": 0
        },
        {
        "name": "Margherita",
        "img":"icons/margherita.png",
        "wine": "Chianti",
        "wineText": "Tomato and basil are delicate flavors, a light-bodied red is best",
        "wineImg": "icons/redwine.png",
        "id": 1
        },
        {
        "name": "Pepperoni",
        "img": "icons/pepperoni.png",
        "wine": "Syrah",
        "wineText": "The spiciness of the pork requires a balanced wine",
        "wineImg": "icons/redwine.png",
        "id": 2
        }
    ]
}
//Global variables
//var selected;

//Load pizza topping array ("options") images
$(document).ready(function(){
    var source = $("#toppings-template").html()
    var template = Handlebars.compile(source);
    var newHTML = template(options);
    $("#pizza-topping-container").append(newHTML);


//On selection of topping icon, call wine pairing function and show topping icon function
$(".topping-options").click(function(){
    var id = $(this).attr("id");
    console.log(id);
    console.log("on click");
    pairWithWine(id);
    //var selected = id;
    showSelection(id);
});

//Assign array id to new variable for use in function
/*$(".topping-options").click(function(){
    var selected = $(this).attr("id");
    showSelection(selected);
    });*/
});

//Return best wine pairing based on selection
    function pairWithWine(id) {
        var source = $("#wine-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(options.toppings[id]);
        $("#wine-container").html(newHTML);
    }

//Indicate selected pizza topping type img back to user
    function showSelection(id) {
        var source = $("#toppings-template").html();
        var template = Handlebars.compile(source);
        console.log(options.toppings[id]);
        var newHTML = template(options.toppings[id]);
        console.log(newHTML);
        $("#pizza-topping-container").html(newHTML);
    }
//Create a new pairing, resets wine container

$(".redo").on("click", function() {
        document.reload();
    });
