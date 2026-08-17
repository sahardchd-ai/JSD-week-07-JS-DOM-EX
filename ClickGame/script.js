const scoreCount = document.querySelector("#scoreCount");
const btnWatering = document.querySelector("#btn-watering");
const upgradeStore = document.querySelector("#upgradeStore");
// const  = document.querySelector("");

// ประกาศ ชื่อที่เก็บเป็น ""(ในStringจะใส่อะไรก็ได้)
const localScore = "localScore";
const localTotalScore = "localTotalScore";

let count = Number(localStorage.getItem(localScore)) || 0;
let totalCount = Number(localStorage.getItem(localTotalScore)) || 0;
let plusCount = 1;

//กดปุ่มแล้วscoreเพิ่ม
btnWatering.addEventListener(`click`, () => {
  count += plusCount;
  totalCount += plusCount;
  scoreCount.textContent = `${Math.floor(count)}`;
  // 2. บันทึกค่า count ล่าสุดลง localStorage ทันทีที่คลิก
  localStorage.setItem(localScore, count);
  localStorage.setItem(localTotalScore, totalCount);
  console.clear();
  console.log(totalCount);
  updateAllUpgrades();

  // เพิ่มอนิเมชันการกดปุ่ม
  btnWatering.classList.remove(`treeActive`);
  void btnWatering.offsetWidth;
  btnWatering.classList.add(`treeActive`);
});

//เอาไว้รีscore
const reset = document.querySelector("#btn-reset");
reset.addEventListener(`click`, () => {
  localStorage.clear(); // ลบข้อมูลที่บันทึกไว้ในเบราว์เซอร์
  location.reload(); // รีเฟรชหน้าเว็บ ตัวแปร let/const ทุกตัวจะกลับเป็นค่าเริ่มแรกทั้งหมด
  console.clear();
  console.log(totalCount);
});

// ถ้าscoreถึงเกณฑ์ จะปลดลอค(แยกแต่ละอัปเกรด)
// function updateUpgrade1Status() {
//   if (count >= upgrade1Cost) {
//     // คะแนนพอ -> ปลดล็อก
//     upgrade1.classList.add("is-active");
//     upgrade1.classList.remove("is-disabled");
//   } else {
//     // คะแนนไม่พอ -> ล็อกไว้
//     upgrade1.classList.add("is-disabled");
//     upgrade1.classList.remove("is-active");
//   }
// }


const upgradeList = [
  { name: document.querySelector("#upgrade1"), cost: 15, count: 0 }, // ตัวเลข 15 ถูกก๊อปปี้มาวางตรงนี้
  { name: document.querySelector("#upgrade2"), cost: 60, count: 0 }, // ตัวเลข 15 ถูกก๊อปปี้มาวางตรงนี้
];
// upgradeList[0].cost = 15;
// upgradeList[1].cost = 15;


// อัปเดทค่าในการอัปเกรดจากร้านทั้งหมด
function updateAllUpgrades() {
  upgradeList.forEach((upg) => {
    const canAfford = count >= upg.cost;
    upg.name.classList.toggle("is-active", canAfford);
    upg.name.classList.toggle("is-disabled", !canAfford);
  });
}

// ฟังก์ชั่นการอัปเกรดขั้น1
// const upgrade1 = document.querySelector("#upgrade1");
const fertilizerCount1 = document.querySelector("#fertilizerCount1");
const localupgrade1Count = "localupgrade1Count";
let upgrade1Count = Number(localStorage.getItem(localupgrade1Count)) || 0;
// ถ้าscoreถึงเกณฑ์ จะปลดลอค(แบบใช้ข้อมูลเป็นArrayเพื่อให้ลดขั้นการเขียนโค้ด)

upgradeList[0].name.addEventListener(`click`, () => {
  if (count >= upgrade1Cost) {
    count -= upgrade1Cost;
    upgrade1Count += 1;

    // แสดงค่าที่เปลี่ยนในการอัปเกดรขั้น1
    fertilizerCount1.textContent = upgrade1Count;
    scoreCount.textContent = `${Math.floor(count)}`;

    // อัปเดทค่าที่เปลี่ยนในการอัปเกดรขั้น1
    localStorage.setItem(localScore, count);
    localStorage.setItem(localUpgrade1Count, upgrade1Count);

    // อัปเดทdivอัปเกรดขั้น1
    updateAllUpgrades();
  }
});

setInterval(() => {
  if (upgrade1Count > 0) {
    const income = upgrade1Count * 0.1;

    count += income;
    totalCount += income; // 🔥 แก้ไข: เพิ่มค่า totalCount ตรงนี้ด้วย!

    // ป้องกันทศนิยมเพี้ยน
    count = Number(count.toFixed(1));
    totalCount = Number(totalCount.toFixed(1));

    // บันทึกค่าลง localStorage
    localStorage.setItem(localScore, count);
    localStorage.setItem(localTotalScore, totalCount);

    updateAllUpgrades();
  }
}, 500);

// ก่รประกาศตัวแปรและฟังก์ชันต่างๆเมื่อเริ่มเวปหรือรีเฟรช
scoreCount.textContent = `${Math.floor(count)}`;
fertilizerCount1.textContent = upgrade1Count; // แสดงจำนวนอัปเกรดเดิมที่เคยซื้อไว้
// fertilizerCount2.textContent = upgrade1Count; // แสดงจำนวนอัปเกรดเดิมที่เคยซื้อไว้
updateAllUpgrades();
// updateUpgrade2Status();
