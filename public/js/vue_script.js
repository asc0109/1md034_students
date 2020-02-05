const vm = new Vue({
    el: '#wrapper',
    data: {
        burgers: burgers,
        /*[
            {name: 'The Void Burger', ingredients: 'Bröd',kcal: '60', allergy: 'gluten', imgPath: 'https://previews.123rf.com/images/ha4ipuri/ha4ipuri1806/ha4ipuri180600022/103956150-hamburger-bread-or-bun-without-anything-isolated-on-white-background-clipping-path.jpg'}, 
            {name: 'The Chees Burger', ingredients: 'Bröd, 90g nötfärsburgare, ost, sallad, tomat, gurka, hamburgare dressing', kcal: '450', allergy: 'gluten och laktos', imgPath: 'https://p7.hiclipart.com/preview/520/119/677/french-fries-cheeseburger-whopper-buffalo-burger-hamburger-big-burger.jpg'},
            {name: 'The Extra Meat-Burger', ingredients: 'Bröd, 180g nötfärsburgare, ost, tomat, gurka, BBQ sås',kcal: '640', allergy: 'gluten och laktos', imgPath: 'http://www.bigkitchenafrica.com/imgs/DSC_1303png2.png'},
            {name: 'The Veggie Burger', ingredients: 'Bröd, 90g quornfärsburgare, sallad, tomat, gurka',kcal: '440', allergy: 'gluten', imgPath: 'https://f0.pngfuel.com/png/604/771/veggie-burger-hamburger-cheeseburger-vegetarian-cuisine-mcdonald-big-mac-burger-king-png-clip-art.png'},
            {name: 'The Future Burger', ingredients: 'Bröd, 90g halloumi, sallad, tomat, gurka',kcal: '440', allergy: 'gluten och laktos', imgPath: 'https://www.burgerking.se/011_se/Product%20images/Veggie/image-thumb__7675__product_detail/HALLOUMI%20KING%201500x1500.png'},
        ],*/
    }
})

/*
const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare2'
  }
})

const vm = new Vue({
  el: '#main',
  data: {
    burger1: 'The Void Burger 60kcal',
    burger2: 'The Cheese Burger 450kcal',
    burger3: 'The Extra Meat-burger 640kcal',
    burger4: 'The Veggie Burger 440kcal',
    burger5: 'The Future Burger 440kcal',
  }
})
<div id="myID">
    <h1>Välj en hamburgare</h1>
    <p v-for="burger in burgers" v-if="burger.allergy">
      {{ burger.name }} {{ burger.kcal}} kcal {{ burger.allergy }}
    </p>    
    <p v-else>
      {{ burger.name }} {{ burger.kcal}} kcal
    </p>
</div>

const vm = new Vue({
  el: '#myID',
  data: {
  burgers: [
  {name: 'The Void Burger', kcal: '60', allergy: 'gluten'}, 
  {name: 'The Chees Burger', kcal: '450', allergy: 'gluten och laktos'},
  {name: 'The Extra Meat-Burger', kcal: '640', allergy: 'gluten och laktos'},
  {name: 'The Veggie Burger', kcal: '440', allergy: 'gluten'},
  {name: 'The Future Burger', kcal: '440', allergy: 'gluten och laktos'},
  ],
    arbitraryVariableName: 'Välj en burgare ' + new Date(),
  }
})
*/