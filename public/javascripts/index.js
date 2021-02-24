fetch('./data/planningEvent.json')
  .then((res) => res.json())
  .then((data) => console.log(data.mallEventList));
