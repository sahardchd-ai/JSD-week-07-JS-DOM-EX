const scoreCount = document.querySelector("#scoreCount");
const btnWatering = document.querySelector("#btn-watering");
const upgradeStore = document.querySelector("#upgradeStore");
// const  = document.querySelector("");

const localScore = "localScore";
const localTotalScore = "localTotalScore";
const localUpgrade1Count = "localUpgrade1Count";

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

  updateUpgrade1Status();

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

// ฟังก์ชันอัปเกรดร้านค้าขั้น1
const upgrade1 = document.getElementById("upgrade1");
const fertilizerCount1 = document.getElementById("fertilizerCount1");
let upgrade1Cost = 15; // คะแนนที่ใช้
let upgrade1Count = Number(localStorage.getItem(localUpgrade1Count)) || 0; //จำนวนที่อัปเกรด

function updateUpgrade1Status() {
  if (count >= upgrade1Cost) {
    // คะแนนพอ -> ปลดล็อก
    upgrade1.classList.add("is-active");
    upgrade1.classList.remove("is-disabled");
  } else {
    // คะแนนไม่พอ -> ล็อกไว้
    upgrade1.classList.add("is-disabled");
    upgrade1.classList.remove("is-active");
  }
}

// เมื่อกดซื้ออัปเกรด
upgrade1.addEventListener(`click`, () => {
  if (count >= upgrade1Cost) {
    count -= upgrade1Cost; // หักคะแนนซื้อ
    upgrade1Count += 1; // เพิ่มจำนวนอัปเกรด

    // แสดงค่าในUI
    fertilizerCount1.textContent = upgrade1Count;
    scoreCount.textContent = `${Math.floor(count)}`;

    localStorage.setItem(localScore, count);
    localStorage.setItem(localUpgrade1Count, upgrade1Count);

    updateUpgrade1Status();
  }
});

setInterval(() => {
  // 🔥 ปั๊มคะแนนเฉพาะตอนที่มีอัปเกรดอย่างน้อย 1 ชิ้น
  if (upgrade1Count > 0) {
    const income = upgrade1Count * 0.1;
    
    count += income;
    totalCount += income; // 🔥 แก้ไข: เพิ่มค่า totalCount ตรงนี้ด้วย!

    // ป้องกันทศนิยมเพี้ยน
    count = Number(count.toFixed(1));
    totalCount = Number(totalCount.toFixed(1));

    // แสดงผลบน UI
    scoreCount.textContent = `${Math.floor(count)}`;

    // บันทึกค่าลง localStorage
    localStorage.setItem(localScore, count);
    localStorage.setItem(localTotalScore, totalCount);

    updateUpgrade1Status();
  }
}, 500);

// ฟังก์ชันอัปเกรดร้านค้าขั้น2
const upgrade2 = document.getElementById("upgrade2");
const fertilizerCount2 = document.getElementById("fertilizerCount2");
let upgrade2Cost = 100; // คะแนนที่ใช้
let upgrade2Count = Number(localStorage.getItem(localUpgrade2Count)) || 0; //จำนวนที่อัปเกรด

function updateUpgrade2Status() {
  if (count >= upgrade2Cost) {
    // คะแนนพอ -> ปลดล็อก
    upgrade2.classList.add("is-active");
    upgrade2.classList.remove("is-disabled");
  } else {
    // คะแนนไม่พอ -> ล็อกไว้
    upgrade2.classList.add("is-disabled");
    upgrade2.classList.remove("is-active");
  }
}


// เมื่อกดซื้ออัปเกรด
upgrade2.addEventListener(`click`, () => {
  if (count >= upgrade2Cost) {
    count -= upgrade2Cost; // หักคะแนนซื้อ
    upgrade2Count += 1; // เพิ่มจำนวนอัปเกรด

    // แสดงค่าในUI
    fertilizerCount2.textContent = upgrade2Count;
    scoreCount.textContent = `${Math.floor(count)}`;

    localStorage.setItem(localScore, count);
    localStorage.setItem(localUpgrade2Count, upgrade2Count);

    updateUpgrade2Status();
  }
});

setInterval(() => {
  // 🔥 ปั๊มคะแนนเฉพาะตอนที่มีอัปเกรดอย่างน้อย 1 ชิ้น
  if (upgrade2Count > 0) {
    const income = upgrade2Count * 0.1;
    
    count += income;
    totalCount += income; // 🔥 แก้ไข: เพิ่มค่า totalCount ตรงนี้ด้วย!

    // ป้องกันทศนิยมเพี้ยน
    count = Number(count.toFixed(1));
    totalCount = Number(totalCount.toFixed(1));

    // แสดงผลบน UI
    scoreCount.textContent = `${Math.floor(count)}`;

    // บันทึกค่าลง localStorage
    localStorage.setItem(localScore, count);
    localStorage.setItem(localTotalScore, totalCount);

    updateUpgrade2Status();
  }
}, 500);






// ก่รประกาศตัวแปรและฟังก์ชันต่างๆเมื่อเริ่มเวปหรือรีเฟรช
scoreCount.textContent = `${Math.floor(count)}`;
fertilizerCount1.textContent = upgrade1Count; // แสดงจำนวนอัปเกรดเดิมที่เคยซื้อไว้
fertilizerCount2.textContent = upgrade1Count; // แสดงจำนวนอัปเกรดเดิมที่เคยซื้อไว้
updateUpgrade1Status();
updateUpgrade2Status()
