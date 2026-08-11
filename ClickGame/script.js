const scoreCount = document.querySelector("#scoreCount");
const btnWatering = document.querySelector("#btn-watering");
// console.log(yourCount);
let count = 0;

scoreCount.textContent =`${Math.floor(count)}`;


btnWatering.addEventListener(`click`, () => {
    count+=1;
    scoreCount.textContent = `${Math.floor(count)}`;
    btnWatering.classList.remove(`treeActive`);
    void btnWatering.offsetWidth;
    btnWatering.classList.add(`treeActive`);
    });


// const intervalId = setInterval(() => {
//   count+=0.1;
//   Math.floor(count);
//   console.log(`Count: ${Math.floor(count)}`);
//   yourCount.textContent = `${Math.floor(count)}`;
// }, 100);//1000ms=1s