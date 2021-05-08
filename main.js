// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// OPDRACHT 1: HOEVEEL EXEMPLAREN MOETEN WE NOG VERKOPEN?

const tvsToSell = inventory.map((tv)=>{
  return tv.originalStock - tv.sold;
})

// console.log(tvsToSell);

//NOW WE NEED TO ADD THEM UP.

const totalTvsTosell = tvsToSell.reduce((a,b)=>{
  return a + b;
})

// console.log(totalTvsTosell);

//Put the number of tv's to sell in red on the page.
// STEP 1: CREATE ELEMENTS IN DOM
// STEP 2: SET CONTENT EQUAL TO JS FUNCTION BY USING TEXT CONTENT AND CHANGE STYLING THE SAME WAYU
// STEP 3: STICK IT TO THE PAGE! USING DOCUMENT.BODYU APPENDCHILD. REFER TO THE ELEMENT!

const tvCounter = document.createElement("p");

tvCounter.textContent = `We have ${totalTvsTosell} televisions left in stock.`;
tvCounter.style.color = "red";

document.body.appendChild(tvCounter);

// ** OPDRACHT 2 ** //
// 2A.
//Array method with all TV types

const tvTypes = inventory.map((tv)=>{
  return tv.type;
})

// console.log(tvTypes);

//2B. RETURN ARRAY METHOD OF TV'S COMPLETE SOLD OUT.

const soldOut = inventory.filter((tv)=>{
  if (tv.originalStock !== tv.sold){
      return true;
  }
})

// console.log(soldOut);

//2C. RETURN ALL TV'S THAT HAVE AMBILIGHT FUNCTION

const ambilightTvs = inventory.filter((tv)=>{
  if (tv.options.ambiLight === true) {
    return true;
  }
})

// console.log(ambilightTvs);

//2D. SORT TV'S FROM LOWEST TO HIGHEST PRICE

const sortPrice = inventory.sort((a,b)=>{
  return b.price - a.price;
})

// console.log(sortPrice);

// ** OPDRACHT 3 ** ////
// 3A. HOW MUCH DO WE EARN IF WE WERE TO SELL ALL TV'S?
// price per tv * tv's left.
// tvstosell function * price of each tv.

const totalProfit = inventory.map((tv)=>{
  const tvsToSell = tv.originalStock - tv.sold;
  const profit = tvsToSell * tv.price;
  return profit;

})
// console.log(totalProfit); // shows profit per tv type

//NOW WE NEED TO ADD THOSE UP

const profitTotal = totalProfit.reduce((a,b)=>{
  return a + b;
})

// console.log(profitTotal);

//put total made if all tvs are sold in blue on page.

const profit = document.createElement("p");

profit.textContent = `Total potential profits are $${profitTotal} dollars.`;
profit.style.color = "blue";

//STICK TO THE DAMN PAGE
document.body.appendChild(profit);

// OPDRACHT 3B.
// How much have we made so far? Show this in green on the page.
// Map through and do sold per tv * price.

const moneyMadeSoFar = inventory.map((tv)=>{
  return tv.sold * tv.price;
})

// console.log(moneyMadeSoFar);

//NOW WE ADD UP MONEY MADE SO FAR WITH REDUCE FOR ONE NUMBER.

const totalMade = moneyMadeSoFar.reduce((a,b)=>{
  return a + b;
})

// console.log(totalMade);

//CREATE ELEMENT
//APPEND ELEMENT WITH TEXT AND FUNCTION
// STICK TO PAGE

const madeSoFar = document.createElement("p");

madeSoFar.textContent = `We have made $${totalMade} so far.`;
madeSoFar.style.color = "green";

document.body.appendChild(madeSoFar);

// ** OPDRACHT 4 ** //
// Show the types of 2 TV's on the page.
//targetting inventory.type of 2 tv's, can target with array index method.

const tvTypeOne = inventory.map((tv)=>{
  return tv.type;
})

console.log(tvTypeOne[3]);
console.log(tvTypeOne[2]);

// now create NOdes and stick to page for both of them.

const typeOne = document.createElement('p');
const typeTwo = document.createElement("p");

typeOne.textContent = `Bestseller TV type #1 ${tvTypeOne[3]}.`;
typeTwo.textContent = `Bestseller TV type #1 ${tvTypeOne[2]}.`;

document.body.appendChild(typeOne);
document.body.appendChild(typeTwo);


// ** OPDRACHT 5 ** //
// 5A.  Create a string that for the name of a TV. Make a function that takes one TV object as parameter and then combines [merk] [type] - [naam]. Needs to reusable for any tv in array.

const tvDetailsShort = inventory.map((tv)=>{
  return `${tv.brand} ${tv.type} - ${tv.name}`
})

const tvDetailsOneTv = console.log(tvDetailsShort[4]); // create const for one tv.
// console.log(tvDetailsOneTv);


// 5B. FORMAT THE PRICE IN A NICE FORMAT €379,-. MAKE A FUNCTION SO THAT IT CAN BE REUSED FOR ANY TELEVISION IN ARRAY.

const priceTag = inventory.map((tv)=>{
  const price = tv.price
  return `€ ${tv.price},-`
})

console.log(priceTag); // price tag for all televisions.
//saving the price tag in format for tv 4 in index in a const (variable)
const selectedTvPriceTag = console.log(priceTag[4]);
// console.log(selectedTvPriceTag);
console.log(priceTag[4]);

// 5C.  MAKE A STRING THAT RETURNS THE AVAILABLE SCREEN SIZES FOR ONE TELEVISION. MAKE THE FUNCTION SO THAT IT EXPECTS AN ARRAY AND CAN RETURN SCREENSIZES FOR ANY OF THE TELEVISION IN STOCK.
//PROVIDE THE INFORMATION IN THIS FORMAT - [schermgrootte] inches ([schermgrootte omgerekend]cm) |
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).

// 1 inch x 2.54 = 1 cm
//WE NEED TO ACTIVATE THE ARRAY OF SCREEN SIZE.
// ARRAY - OBJECT - ARRAY.

const screenSizes = inventory.map((tv)=>{
  return tv.availableSizes;
})
console.log(screenSizes); // tv screensizes for all indexed television objects
console.log(screenSizes[4]); // screensizes for index TV 4.

//testing making function that can take in any array

const screens = (arr)=>{
  return arr.availableSizes;
}

screens(inventory)
console.log(screens(inventory[4]));

// convert to CM FUNCTION

const convertToCm = inches =>{
  return inches * 2.54;
}

const checkScreenSizes = inventory.map((screen)=>{
  const sizing = screen.availableSizes.map((arr)=>{
    return  `${arr} inch (${convertToCm(arr)} cm ) |`
  })
  return `${sizing}`
});


// console.log(checkScreenSizes);
const screensTv4 = checkScreenSizes[4];
const screensAll = checkScreenSizes;
console.log(screensTv4); // shows available screen sizes for TV 4 in inches and cm.

//We need to seperate out the commas using join.
//STUCK HERE!!!!////

// 5D.  Show the  one TV on webpage

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


// console.log(tvDetailsShort[4]); // tv name and type
// console.log(priceTag[4]); // tv price
// console.log(screensTv4); // shows available sizes

const showTvFour = ()=>{
  return`${tvDetailsShort[4]} \n
 ${priceTag[4]}\n
 ${screensTv4};
  `
};

console.log(showTvFour());

//Now put on page.
// const typeOne = document.createElement('p');
// const typeTwo = document.createElement("p");
//
// typeOne.textContent = `Bestseller TV type #1 ${tvTypeOne[3]}.`;
// typeTwo.textContent = `Bestseller TV type #1 ${tvTypeOne[2]}.`;
//
// document.body.appendChild(typeOne);
// document.body.appendChild(typeTwo);

const tvFourOnPage = document.createElement('p');
const tvFourOnPage2 = document.createElement('p');
const tvFourOnPage3 = document.createElement('p');

tvFourOnPage.textContent= `${tvDetailsShort[4]}`;
tvFourOnPage2.textContent= `${priceTag[4]}`;
tvFourOnPage3.textContent = `${screensTv4}`;


document.body.appendChild(tvFourOnPage);
document.body.appendChild(tvFourOnPage2);
document.body.appendChild(tvFourOnPage3);



// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!


function generate(array) {
  let tvInfo = [];
  for (let i = 0; i < inventory.length; i++) {
    tvInfo += ('Heey! '+ tvDetailsShort[i] + ' ' + priceTag[i] + ' ' + screensAll[i]);
  }
  return tvInfo;
}
console.log(generate(inventory));

const showTvDetails = (tvObject)=>{
  for (let i = 0; i < inventory.length;i++){
    return`${tvDetailsShort[i]} \n
 ${priceTag[i]}\n
 ${screensAll[i]};
  `
  }
  return tvObject;
};

// console.log(showTvDetails(inventory));

// const showTvDetails2 = inventoryArray => {
//   inventoryArray.map((tv)=>{
//     return  `${tvDetailsShort}`
//   })
// }
//
// console.log(showTvDetails2(inventory));

//5.BONUS OPDRACHTEN
//
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!

const priceSort = document.getElementById("price-sort");
const ambilightSort = document.getElementById("ambilight-sort");
const soldOut = document.getElementById("sold-out");


//Creating the click events for each button
priceSort.addEventListener("click",sortPrice);
ambilightSort.addEventListener("click",ambilightSort);
soldOut.addEventListener("click", soldOut);

































