const yourCount = document.querySelector("#yourCount");
const btnWatering = document.querySelector("#btn-watering");
// console.log(yourCount);
let count = 0;

yourCount.textContent =`${Math.floor(count)}`;


btnWatering.addEventListener(`click`, () => {
    count+=1;
    yourCount.textContent = `${Math.floor(count)}`;
    });


// const intervalId = setInterval(() => {
//   count+=0.1;
//   Math.floor(count);
//   console.log(`Count: ${Math.floor(count)}`);
//   yourCount.textContent = `${Math.floor(count)}`;
// }, 100);//1000ms=1s