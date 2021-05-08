function generate(array) {
let tvInfo = [];
for (let i = 0; i < inventory.length; i++) {
tvInfo += ('Heey! '+ tvNames[i] + ' ' + tvPrices[i] + ' ' + tvSizes[i]);
} return tvInfo;
}
console.log(generate(inventory));



function generateTvBox(array){
let tvInfo=[];
for (let i = 0; i < array.length; i++) {
tvInfo = document.getElementById("tvContainer").innerHTML = tvNames[i] +'<br>'+ tvPrice[i]+'<br>' + tvSizes[i];
}
}
console.log(generateTvBox(inventory));


