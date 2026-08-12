const scoreCount = document.querySelector("#scoreCount");
const btnWatering = document.querySelector("#btn-watering");
// const  = document.querySelector("");
const reset = document.querySelector("#btn-reset");
const localScore = "localScore"
const upgradeStore = document.querySelector("#upgradeStore");

// console.log(yourCount);
let count = Number(localStorage.getItem(localScore)) || 0;
let plusCount = 1;

scoreCount.textContent = `${Math.floor(count)}`;

//กดปุ่มแล้วscoreเพิ่ม
btnWatering.addEventListener(`click`, () => {
  count += plusCount;
  scoreCount.textContent = `${Math.floor(count)}`;
  // 2. บันทึกค่า count ล่าสุดลง localStorage ทันทีที่คลิก
  localStorage.setItem(localScore, count);

  // เพิ่มอนิเมชันการกดปุ่ม
  btnWatering.classList.remove(`treeActive`);
  void btnWatering.offsetWidth;
  btnWatering.classList.add(`treeActive`);
});

//เอาไว้รีscore
reset.addEventListener(`click`, () => {
  localStorage.removeItem(localScore); // ลบค่าออกจากความจำ
  count = 0;
  scoreCount.textContent = `${Math.floor(count)}`;
});


// const  = document.querySelector("");
// while(count = 15){
//
// };
