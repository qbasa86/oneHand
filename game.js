const bid = document.querySelector("#bid");
const walletText = document.querySelector(".wallet");
const gamesNumberSpan = document.querySelector(".number");
const gamesWonSpan = document.querySelector(".win");
const gamesLostSpan = document.querySelector(".loss");
let gamesNumber = 0;
let gamesWon = 0;
let gamesLost = 0;
let color1 = document.querySelector(".color-1")
let color2 = document.querySelector(".color-2")
let color3 = document.querySelector(".color-3")
let wallet = 200;
let check = 0;
let num1, num2, num3;
const numbers = [1, 2, 3];
walletText.innerHTML = wallet;
gamesNumberSpan.innerHTML = gamesNumber;
gamesLostSpan.innerHTML = gamesLost;
gamesWonSpan.innerHTML = gamesWon;
start.addEventListener("click", showNumbers)

function losowanie() {
    if (bid.value <= wallet) {}
}

function showNumbers() {
    if (wallet >= bid.value && bid.value != 0) {
        num1 = numbers[Math.floor(Math.random() * numbers.length)];
        num2 = numbers[Math.floor(Math.random() * numbers.length)];
        num3 = numbers[Math.floor(Math.random() * numbers.length)];
        color1.textContent = num1;
        color2.textContent = num2;
        color3.textContent = num3;
        if (num1 === num2 && num2 === num3) {
            wallet += bid.value * 2;
            gamesWon++;
        } else {
            gamesLost++;
            wallet -= bid.value;
            if (wallet == 0) alert("Przegrałeś wszystko")
        }
        walletText.innerHTML = wallet;
        gamesNumberSpan.innerHTML = ++gamesNumber;
        gamesLostSpan.innerHTML = gamesLost;
        gamesWonSpan.innerHTML = gamesWon;
    } else alert("Nie masz takiej sumy")
}