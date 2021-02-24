let bestsellingJson;
let promotionJson;
let mdPickJson;

const getJsonData = () => {
  fetch('./data/planningEvent.json')
    .then((res) => res.json())
    .then((data) => {
      bestsellingJson = data.event;
      promotionJson = data.mileageList;
      mdPickJson = data.mallEventList;
    })
    .then(() => {
      const $promotionImg = document.querySelector('.main--center__upper--img');
      const html = promotionJson
        .map((i) => `<img src="${i.imgurl}"/>`)
        .join('');
      console.log(html);
      $promotionImg.innerHTML = html;
    });
};

getJsonData();
