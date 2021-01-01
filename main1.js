const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏94度で暑かったが、:insertx:は散歩に行きました。:insertx:は:inserty:。しばらく歩いていると:insertz:. Bobはそれを見て驚いたが, weighs 300ポンドの:insertx:は驚かなかった。なぜなら:inserty:では当たり前のことであるからだ。';
let insertX = ['リラックマ','Big Daddy','Father Christmas'];
let insertY = ['ハチミツの森に着きました','Disneyland','the White House'];
let insertZ = ['ふさふさの胸毛が生えた茶色いくまがいた','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("jp").checked) {
    const weight = Math.round(300*0.0714286) + 'kg';
    const temperature =  '摂氏' + Math.round((94-32) * 5 / 9) ;
    newStory = newStory.replace('華氏94',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
