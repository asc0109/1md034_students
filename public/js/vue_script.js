'use strict';
const socket = io();

const vm = new Vue({
    el: 'main',
    data: {
        burgers: burgers,
        fullname: '',
        email: '',
        selected: 'Visa',
        gender: 'male',
        info: '',
        orders: {},
    },
    created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        markDone: function() {
            let radios = document.getElementsByName('gender');
            let burgList = document.getElementsByName('userBurger');
            let burgerRes = '';
            for(var j = 0; j < burgList.length; j++) {
                if(burgList[j].checked) {
                    burgerRes = burgerRes + ' ' + burgList[j].value;
                }
            } 
            this.info = fullname.value +' '+ email.value +' '+ selected.value +' '+ this.gender +' '+ burgerRes;
  
        },
        getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
            return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
            orderId: this.getNext(),
            details: {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y,
            },
            orderItems: ['Beans', 'Curry'],
            });
        },
    },
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
