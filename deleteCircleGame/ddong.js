var count = 1;
let main = document.querySelector("#main");
let randomVal = Math.floor(Math.random() * 1000);
let randomVal2 = Math.floor(Math.random() * 1000);
let score_wrapper = document.querySelector(".score_wrapper");
let stop_btn = document.querySelector("#stop_btn");
let start_btn = document.querySelector("#start_btn");
let gameOver = document.querySelector(".gameOver");
var nIntervId;
function start() {
  nIntervId = setInterval(function makeCircle() {
    randomVal = Math.floor(Math.random() * 1000);
    randomVal2 = Math.floor(Math.random() * 1000);
    while (randomVal > 650) randomVal = Math.floor(Math.random() * 1000);
    while (randomVal2 > 1000) randomVal = Math.floor(Math.random() * 1000);

    let div = document.createElement("div");

    score_wrapper.innerHTML = `<div class='score'>${count++}</div>`;
    let score = document.querySelector(".score");

    div.className = "ddong";
    div.style = `width:50px;
        height:50px;
        background-color:black;
        position:absolute;
        top:${randomVal}px;
        left:${randomVal2}px;
         border-radius:25px 25px 25px 25px;
         background-color:rgb(${randomVal},${randomVal2},${100})`;
    div.addEventListener("click", () => {
      div.remove();
      score_wrapper.innerHTML = `<div>${count--}</div>`;
    });
    main.appendChild(div);
    if (count > 15) {
      clearInterval(nIntervId);
      var typingBool = false;
      var typingIdx = 0;
      var typingTxt = document.querySelector(".typing-text").innerText; // 타이핑될 텍스트를 가져온다
      typingTxt = typingTxt.split(""); // 한글자씩 자른다.
      if (typingBool == false) {
        // 타이핑이 진행되지 않았다면
        typingBool = true;

        var tyInt = setInterval(typing, 100); // 반복동작
      }

      function typing() {
        if (typingIdx < typingTxt.length) {
          // 타이핑될 텍스트 길이만큼 반복
          document.querySelector(".gameOver").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
          typingIdx++;
        } else {
          clearInterval(tyInt); //끝나면 반복종료
        }
      }
      setTimeout(() => history.go(-1), 5000);
    }
  }, 500);
}

main.addEventListener("load", start());
