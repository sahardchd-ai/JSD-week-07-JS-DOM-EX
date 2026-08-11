const progressX = document.querySelector("#progressX");
const btnNewPokemon = document.querySelector("#btn-newpokemon");

btnNewPokemon.addEventListener(`click`, async () => {
  try {
    // สุ่ม ID โปเกมอนตั้งแต่ 1 ถึง 151 (Gen 1)
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    const data = await response.json();
    console.log(data);
    // console.log( `${data.name} info` );

    // progressX.innerHTML = `${data.name} <img src="${data.sprites.front_default}">`;

    const div = document.createElement("div");
    div.classList.add(`Pokemon_card`);//${} info อย่าใช้เว้นวรรคในการตั้งชื่อclass
    const image = document.createElement("img");
    image.classList.add(`Pokemon_card_image`);
    image.src = data.sprites.front_default;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(`DeleteBtn`);
    deleteBtn.textContent = "delete pokemon"
    div.append(image);
    div.append(data.name);
    div.append(deleteBtn);
    progressX.append(div);

    deleteBtn.addEventListener(`click`, () => {
        div.remove();
    })

  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  }
});

// progressX.remove('data');

//  document.querySelectorAll('data').forEach(del => del.remove());

//   let count = 0;
//   if (count > 0) {
//     progressX.remove(div);
//     count -= 1;
//   }
//   count += 1;

//   console.log(count);
