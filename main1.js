const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏99度で暑かったが、:insertx:は散歩に行きました。:insertx:は:inserty:に着きました。しばらく歩いていると:insertz:. Bobはそれを見て驚いたが,体重560ポンドの:insertx:は驚かなかった。なぜなら:inserty:では当たり前のことであるからだ。';
let insertX = ['リラックマ','かぐや姫','プーさん'];
let insertY = ['ハチミツの森','竹林','ディズニーランド'];
let insertZ = ['ふさふさの胸毛が生えた茶色いくまがいた','光り輝く竹があった','よく喋るたくさんの種類の動物がいた'];

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
    const weight = Math.round(560*0.0714286) + 'kg';
    const temperature =  '摂氏' + Math.round((99-32) * 5 / 9) ;
    newStory = newStory.replace('華氏99',temperature);
    newStory = newStory.replace('560ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
