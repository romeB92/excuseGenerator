/* eslint-disable */
window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = genExcuse();
  });
  console.log("Hello Rigo from the console!");
  console.log("return : " + genExcuse());
};
let genExcuse = () => {
  let who = ["My dog", "Frodo Baggins", "Cinderella", "A witch"];
  let action = ["ate", "stole", "burned", "enchanted"];
  let what = [
    "my homework",
    "the ring of power",
    "a glass slipper",
    "a broom",
    "my house"
  ];
  let when = [
    "before my class",
    "on my way to mordor",
    "before the clock struck 12",
    "during my lunch",
    "while I was praying"
  ];
  let ppt = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let item = Math.floor(Math.random() * what.length);
  let moment = Math.floor(Math.random() * when.length);

  return who[ppt] + " " + action[verb] + " " + what[item] + " " + when[moment];
};
