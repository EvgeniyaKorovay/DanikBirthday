let container = document.querySelector("#container");
let potter = document.querySelector("#potter");
let wood = document.querySelector("#wood");
let balloons = document.querySelector("#balloons");
let score = document.querySelector("#score");
let happyBrithday = document.querySelector("#happyBrithday");
let volandemort = document.querySelector("#volendemort");

let interval = null;
let playerScore = 0;
let gameIsStarted = false;

let scoreCounter = () =>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
};

window.addEventListener("keydown", (start)=>{

    if(start.code === "Space" && !gameIsStarted)
   {
        happyBrithday.style.display = "none";
        wood.classList.add("woodMov");
        volandemort.classList.add("volandMov");
        balloons.firstElementChild.style.animation = "balloonsAnimate 50s linear infinite";

        playerScore = 0;
        gameIsStarted = true;
        interval = setInterval(scoreCounter,200);
   }
});

window.addEventListener("keydown", (e)=>{
  if (e.key === "ArrowUp")
        if (potter.classList !== "potterActive")
        {
            potter.classList.add("potterActive");

            setTimeout(()=>{
                potter.classList.remove("potterActive");
            },500);
        }
});

let result = setInterval(() => {
    let potterBottom = parseInt(getComputedStyle(potter).getPropertyValue("bottom"));
    let woodLeft = parseInt(getComputedStyle(wood).getPropertyValue("Left"));
    let volandLeft = parseInt(getComputedStyle(volandemort).getPropertyValue("Left"));

    let isCollided = (potterBottom <= 90 && woodLeft >= 20 && woodLeft <= 70) ||
        (potterBottom >= 100 && volandLeft >= 10 && volandLeft <= 20);

    if (isCollided)
    {
        happyBrithday.style.display = "block";
        wood.classList.remove("woodMov");
        volandemort.classList.remove("volandMov");
        balloons.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
        gameIsStarted = false;
    }
}, 10);





