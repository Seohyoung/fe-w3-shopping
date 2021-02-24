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
      $promotionImg.innerHTML = html;
      //현재 이미지 앞뒤로 세개 씩 불러올 수 있도록 처리..
      //기능 분리 필요할 것 같음..
    });
};

getJsonData();
