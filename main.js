excuse = document.getElementById("excuse")
window.onload=(excuse.innerHTML=newPhrase());
function newPhrase(){
    let phrase='';
    let who = ['The dog','My grandma','His turtle','My bird.'];
    let action = ['ate','peed','crushed','broke.'];
    let what = ['my homework','the keys','the car.'];
    let when = ['before the class','right on time','when i finished.'];
    let phraseArr = [who,action,what,when];
for(let i = 0; i<phraseArr.length; i++){
    numberSelected=randomNumber(phraseArr[i])
     phrase+= phraseArr[i][numberSelected]+' ';
 }
  return phrase;
}
function randomNumber(arr){
    let number = Math.floor(Math.random()*arr.length);
    return number;
}