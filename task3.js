/*We have the employees drink preference records in a text file (employees.json, added) one employee per line, JSON-encoded. 

We want to organize the party and invite as many employees as possible. We've created the JSON files with the drink recipes (recipes.json, added) and the prices of the components (prices.json, added). 

Please, write the program that will accept the party budget M and will output the names, user ids, and chosen drinks for the employees that should be invited, sorted by user id (ascending). 
*/
const employees = [{
    "id": 1,
    "name": "Mildred Carson",
    "drinks": ["Macchiato"]
  },
  {
    "id": 2,
    "name": "Clifford Brown",
    "drinks": ["Latte"]
  },
  {
    "id": 3,
    "name": "Kellie Fletcher",
    "drinks": ["Flat White", "Espresso"]
  },
  {
    "id": 4,
    "name": "Don Parsons",
    "drinks": ["Espresso"]
  },
  {
    "id": 5,
    "name": "Renee Reynolds",
    "drinks": ["Cappuccino", "Macchiato"]
  },
  {
    "id": 6,
    "name": "Rudolph Bishop",
    "drinks": ["Latte", "Macchiato", "Flat White"]
  },
  {
    "id": 7,
    "name": "Geraldine Carpenter",
    "drinks": ["Espresso"]
  },
  {
    "id": 8,
    "name": "Hilda Jimenez",
    "drinks": ["Latte", "Macchiato", "Espresso"]
  },
  {
    "id": 9,
    "name": "Pauline Roberson",
    "drinks": ["Espresso"]
  },
  {
    "id": 10,
    "name": "Vanessa Barrett",
    "drinks": ["Flat White", "Cappuccino", "Latte"]
  }
];

const recipes = {
  "Cappuccino": {
    "coffee": 0.01,
    "water": 0.035,
    "milk": 0.09
  },
  "Espresso": {
    "coffee": 0.01,
    "water": 0.035
  },
  "Latte": {
    "coffee": 0.01,
    "water": 0.035,
    "milk": 0.135
  },
  "Flat White": {
    "coffee": 0.02,
    "water": 0.04,
    "milk": 0.11
  },
  "Macchiato": {
    "coffee": 0.01,
    "water": 0.035,
    "milk": 0.015
  }
};
const prices = {
  "coffee": 3.6,
  "water": 1,
  "milk": 1.5
};

function invitation(m) {

//визначимо ціну кожного окремого напою 

let priceDrink = {};
  //перебираємо об'єкт з рецептами напоїв
  for (let drink in recipes) {
    let p = 0;
    //перебираємо об'єкт з рецептом кожного окремого напою
    for (let ingr in recipes[drink]) {
      // перебираємо об'єкт з цінами на інгредієнти
      for (let i in prices) {
        if (ingr == i) {
          // ціна окремого напою
          p += prices[i] * recipes[drink][ingr];
        };
      };
    };
    //створюємо об'єкт напій - ціна
    priceDrink[drink] = +p.toFixed(4);
  };

//-----------------------------------------

//скільки контують напої кожного гостя

let priceOrder = [];
  //перебираємо список гостей 
  employees.forEach((person, i) => {
    let p = 0;
    //перебираємо масив замовлених напоїв окремого гостя
    person.drinks.forEach(orderDrinks => {
      for (let drink in priceDrink) {
        //шукаємо скільки коштує напій 
        if (drink == orderDrinks) {
          //ціна drinks set кожного гостя
          p += priceDrink[drink];
        };
      };
    });
    //створюємо масив об'єктів з цінами замовлених напоїв
    priceOrder.push({});
    //пушимо id гостя - вартість його замовлених напоїв
    priceOrder[i].id = i + 1;
    priceOrder[i].price = +p.toFixed(4);
  });
  // сортуємо замовлені напої від найдешевшого до найдорожчого
  priceOrder.sort((a, b) => a.price - b.price);

//-----------------------------------------

  // створюємо масив запрошених гостей
  let invitePerson = [];
  // сумарна вартість замовлених напоїв
  let sumOrder = 0;
  // додатковий індентифікатор
  let i = 0;
  // поки вартість замовлених напоїв не перевищує бюджет додаємо до списку гостей
  while (sumOrder <= m) {
    sumOrder += priceOrder[i].price;

    // шукаєм по id повну інформацію про гостя з масиву employees
    employees.forEach(elem => {
      if (priceOrder[i].id == elem.id) {
        invitePerson.push(elem);
      }
    })
    i++;
  }
  // повертаємо список запрошених і сортуємо гостей по id
  return invitePerson.sort((a, b) => a.id - b.id);
}

console.log('Будуть запрошені - ', invitation(0.75));