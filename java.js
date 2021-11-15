
const incrementor = document.querySelector("#inc");
const decrementor = document.querySelector("#dec");
const counterDisplay = document.querySelector("#counter");

let counter = 0;

incrementor.addEventListener("click",() =>{
    counter += 1;
    counterDisplay.textContent = counter;

})
decrementor.addEventListener("click",() =>{
    counter -= 1;
    counterDisplay.textContent = counter;

})

//df23e141e5849f2396ad851c2744c80c


// 1. .forEach()
// 2. .map()
// 3. .filter()

