function MenuItem(name, ingredients, allergy, kcal, stringPath) {
    "use strict";
    this.name = name;
    this.ingredients = ingredients;
    this.allergy = allergy;
    this.kcal = kcal;
    this.stringPath = stringPath;
}

function nameAndKcal(burger) {
    "use strict";
    return burger.name + " " + burger.kcal + "kcal";
}

let burger1 = new MenuItem("The Void Burger", "bröd", "gluten", "60", "https://previews.123rf.com/images/ha4ipuri/ha4ipuri1806/ha4ipuri180600022/103956150-hamburger-bread-or-bun-without-anything-isolated-on-white-background-clipping-path.jpg");

let burger2 = new MenuItem("The Cheese Burger", "Bröd, 90g nötfärsburgare, ost, sallad, tomat, gurka, hamburgare dressing", "gluten och laktose", "450", "https://p7.hiclipart.com/preview/520/119/677/french-fries-cheeseburger-whopper-buffalo-burger-hamburger-big-burger.jpg");

let burger3 = new MenuItem("The Extra Meat-burger", "Bröd, 180g nötfärsburgare, ost, tomat, gurka, BBQ sås", "gluten och laktose", "640", "http://www.bigkitchenafrica.com/imgs/DSC_1303png2.png");

let burger4 = new MenuItem("The Veggie Burger", "Bröd, 90g quornfärsburgare, sallad, tomat, gurka", "gluten", "440", "https://f0.pngfuel.com/png/604/771/veggie-burger-hamburger-cheeseburger-vegetarian-cuisine-mcdonald-big-mac-burger-king-png-clip-art.png");

let burger5 = new MenuItem("The Future Burger", "Bröd, 90g halloumi, sallad, tomat, gurka", "gluten och laktose", "440", "https://www.burgerking.se/011_se/Product%20images/Veggie/image-thumb__7675__product_detail/HALLOUMI%20KING%201500x1500.png");

console.log(nameAndKcal(burger1));
console.log(nameAndKcal(burger2));
console.log(nameAndKcal(burger3));
console.log(nameAndKcal(burger4));
console.log(nameAndKcal(burger5));

//document.getElementById("myDiv").innerHTML = "Välj en burgare";

