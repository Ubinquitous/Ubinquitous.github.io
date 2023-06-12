const h2 = document.querySelector("h2");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const bettingForm = document.querySelector("#betting");
const upBtn = document.getElementById("upBetting");
const downBtn = document.getElementById("downBetting");
const calcBetHigh = document.getElementById("calcBetHigh");
const calcBetLow = document.getElementById("calcBetLow");
const betMoney = document.getElementById("betMoney");
const bettingButton = document.querySelector(".bettingButton");
const bettingMoneyForm = document.getElementById("bettingMoneyForm");
const standardCardImage = document.getElementById("cardImg1");
const bettingCardImage = document.getElementById("cardImg2");
const upReward = document.getElementById("reward");
const downReward = document.getElementById("Dreward");
const redButton = document.getElementById("REDBUTTON");
const blackButton = document.getElementById("BLACKBUTTON");
const threeTo8Button = document.getElementById("3TO8BUTTON");
const jokerButton = document.getElementById("JOKERBUTTON");
const jqkaButton = document.getElementById("JQKABUTTON");
const optionValue = document.getElementById("optionValue");
const refresh = document.querySelector("h3");

let optionCalculator;
let card1Num, card2Num;
let card1Type, card2Type;
let highMoneyPer, lowMoneyPer;
let success = 0;

if(parseInt(localStorage.getItem("money"))<1000){
    money = 10000;
}
else money = parseInt(localStorage.getItem("money")) || 10000;

h2.innerText = money;

const cardType = ["H_", "D_", "S_", "C_"];
const cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "JOKER"];
// 사진으로 대체 예정.
card2Type = cardType[Math.round(Math.random()*3)];
card2Num  = cardNum[Math.round(Math.random()*13)];

if(card1Type!=="H_" && card1Num==="JOKER"){
    card1Num="7";
} 

createStandardCard();
calculatorMoney();
console.log(`${card2Num}`);

bettingMoneyForm.addEventListener("submit", bettingMoneyFormPrevent);
bettingForm.addEventListener("submit", bettingFormPrevent);
upBtn.addEventListener("click", ifButtonClickIsUp);
downBtn.addEventListener("click", ifButtonClickIsDown);

redButton.addEventListener("click", ifRedButtonIsClick);
blackButton.addEventListener("click", ifBlackButtonIsClick);
threeTo8Button.addEventListener("click", if3to8ButtonIsClick);
jqkaButton.addEventListener("click", ifJQKAButtonIsClick);
jokerButton.addEventListener("click", ifJokerButtonIsClick);

function ifRedButtonIsClick(){
    optionCalculator = "RED";
    optionValue.innerText = `RED`;
}
function ifBlackButtonIsClick(){
    optionCalculator = "BLACK";
    optionValue.innerText = `BLACK`;
}
function if3to8ButtonIsClick(){
    optionCalculator = "3~8";
    optionValue.innerText = `3~8`;
}   
function ifJQKAButtonIsClick(){
    optionCalculator = "JQKA";
    optionValue.innerText = `J,Q,K,A`;
}
function ifJokerButtonIsClick(){
    optionCalculator = "JOKER";
    optionValue.innerText = `JOKER`;
}

function bettingMoneyFormPrevent(event){
    event.preventDefault();
}

function bettingFormPrevent(event){
    event.preventDefault();
}
// 이미지 createElement하기
function createStandardCard(){
    card1Type = cardType[Math.round(Math.random()*3)];
    card1Num  = cardNum[Math.round(Math.random()*13)];

    standardCardImage.src=`./img/${card1Type}${card1Num}.png`;
    console.log(standardCardImage.src);

    if(card1Num==="1" || card1Num==="JOKER"){
        card1Num="7";
        standardCardImage.src=`./img/${card1Type}7.png`;
        
    } 
}


function ifButtonClickIsUp(){

    if(betMoney.value==""){
        alert(`베팅금을 입력해주세요.`);
        return 0;
    }

    if(parseInt(betMoney.value)>money){
        alert(`베팅금은 보유금을 초과할 수 없습니다.`);
        betMoney.value ="";
        return 0;
    }
    if(parseInt(betMoney.value)<1000){
        alert(`천 원 이상부터 베팅이 가능합니다.`);
        betMoney.value = "";
        return 0;
    }

    if(parseInt(card2Num)===11){
        card2Num = "J";
    } else if(parseInt(card2Num)===12){
        card2Num = "Q";
    } else if(parseInt(card2Num)===13){
        card2Num = "K";
    } else if(parseInt(card2Num)===14){
        card2Num = "A";
    } else if(parseInt(card2Num)===15){
        card2Num = "JOKER";
    }

    bettingCardImage.src=`./img/${card2Type}${card2Num}.png`;
    console.log(bettingCardImage.src);

    if(card2Num==="JOKER" && card1Num !== "JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
        $().ready(function () {
            if(Swal.fire({
                icon: 'success',
                title: '베팅 성공',
                text: `현재 보유 금액 : ${money}`,
            })){} else window.location.reload;
            success=1;
        });
    }
    if(card2Num==="JOKER" && card1Num === "JOKER"){
        console.log(`draw`);
        $().ready(function () {
            if(Swal.fire({
                icon: 'warning',
                title: '무승부',
                text: `현재 보유 금액 : ${money}`,
            })){} else window.location.reload();
        });
    }
    if(card2Num!=="JOKER" && card1Num === "JOKER"){
        money = money - parseInt(betMoney.value);
        h2.innerText = `${money}`;
        $().ready(function () {
            if(Swal.fire({
                icon: 'error',
                title: '베팅 실패',
                text: `현재 보유 금액 : ${money}`,
            })){} else window.location.reload();
        });
    }

    if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER" && isNaN(parseInt(card1Num)) && card1Num!=="JOKER"){
        if((card1Num==="J" && card2Num==="Q") || (card1Num==="Q" && card2Num==="K") || (card1Num==="K" && card2Num==="A") || (card1Num==="Q" && card2Num==="A")){
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'success',
                    title: '베팅 성공',
                    text: `현재 보유 금액 : ${money}`,
                });
                success=1;
            });
        } else if(card1Num===card2Num){
            console.log(`draw`);
            $().ready(function () {
                Swal.fire({
                    icon: 'warning',
                    title: '무승부',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else {
            money = money - betMoney.value;
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'error',
                    title: '베팅 실패',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        }
    } else if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'success',
                title: '베팅 성공',
                text: `현재 보유 금액 : ${money}`,
            });
            success=1;
        });
    } else if(isNaN(parseInt(card1Num)) && card2Num!=="JOKER"){
        money = money - betMoney.value;
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'error',
                title: '베팅 실패',
                text: `현재 보유 금액 : ${money}`,
            });
        });
    } else {
        if(parseInt(card1Num)<parseInt(card2Num)){
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'success',
                    title: '베팅 성공',
                    text: `현재 보유 금액 : ${money}`,
                });
                success=1;
            });
        } else if(card1Num===card2Num){
            console.log(`draw`);
            $().ready(function () {
                Swal.fire({
                    icon: 'warning',
                    title: '무승부',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else {
            money = money - betMoney.value;
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'error',
                    title: '베팅 실패',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        }
    }
    if(card2Num===11){
        card2Num = ["J"];
    }else if(card2Num===12){
        card2Num = ["Q"];
    }else if(card2Num===13){
        card2Num = ["K"];
    }else if(card2Num===14){
        card2Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }
    if(card1Num===11){
        card1Num = ["J"];
    }else if(card1Num===12){
        card1Num = ["Q"];
    }else if(card1Num===13){
        card1Num = ["K"];
    }else if(card1Num===14){
        card1Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }
    betMoney.value = "";
    
    if(success===1){
        if(optionCalculator=="RED"){
            if(card2Type=="H_" || card2Type=="D_"){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="BLACK"){
            if(card2Type=="S_" || card2Type=="C_"){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="3~8"){
            if(card2Num>=3 && card2Num<=8){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="JQKA"){
            if(card2Num=="J" || card2Num=="Q" || card2Num=="K" || card2Num=="A"){
                money = money + parseInt(betMoney.value*1.8);
            } else {
                money = money - parseInt(betMoney.value*1.8);
            }
        }
    
        if(optionCalculator=="JOKER"){
            if(card2Num=="JOKER"){
                money = money + parseInt(betMoney.value*10);
                h2.innerText = `${money}`;
            } else {
                money = money - parseInt(betMoney.value*10);
                h2.innerText = `${money}`;
            }
        }
    }
    localStorage.setItem("money", money);
    betMoney.setAttribute("disabled", "disabled");
    upBtn.setAttribute("disabled", "disabled");
    downBtn.setAttribute("disabled", "disabled");
    refresh.innerText = `다시 시작하려면 새로고침 해주세요.`;
}


function ifButtonClickIsDown(){
    if(betMoney.value==""){
        alert(`베팅금을 입력해주세요.`);
        return 0;
    }
    if(parseInt(betMoney.value)>money){
        alert(`베팅금은 보유금을 초과할 수 없습니다.`);
        betMoney.value ="";
        return 0;
    }
    if(parseInt(betMoney.value)<1000){
        alert(`천 원 이상부터 베팅이 가능합니다.`);
        betMoney.value = "";
        return 0;
    }
    if(parseInt(card2Num)===11){
        card2Num = "J";
    } else if(parseInt(card2Num)===12){
        card2Num = "Q";
    } else if(parseInt(card2Num)===13){
        card2Num = "K";
    } else if(parseInt(card2Num)===14){
        card2Num = "A";
    } else if(parseInt(card2Num)===15){
        card2Num = "JOKER";
    }
    bettingCardImage.src=`./img/${card2Type}${card2Num}.png`;
    console.log(bettingCardImage.src);

    if(card2Num==="JOKER" && card1Num !== "JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'success',
                title: '베팅 성공',
                text: `현재 보유 금액 : ${money}`,
            });
            success=1;
        });
    }
    if(card2Num==="JOKER" && card1Num === "JOKER"){
        console.log(`draw`);
        $().ready(function () {
            Swal.fire({
                icon: 'warning',
                title: '무승부',
                text: `현재 보유 금액 : ${money}`,
            });
        });
    }
    if(card2Num!=="JOKER" && card1Num === "JOKER"){
        money = money - parseInt(betMoney.value);
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'error',
                title: '베팅 실패',
                text: `현재 보유 금액 : ${money}`,
            });
        });
    }
    if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER" && isNaN(parseInt(card1Num)) && card1Num!=="JOKER"){
        if((card1Num==="J" && card2Num==="Q") || (card1Num==="Q" && card2Num==="K") || (card1Num==="K" && card2Num==="A") || (card1Num==="Q" && card2Num==="A")){
            money = money - betMoney.value;
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'error',
                    title: '베팅 실패',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else if(card1Num===card2Num){
            console.log(`draw`);
            $().ready(function () {
                Swal.fire({
                    icon: 'warning',
                    title: '무승부',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else {
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'success',
                    title: '베팅 성공',
                    text: `현재 보유 금액 : ${money}`,
                });
                success=1;
            });
        }
    } else if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER"){
        money = money - betMoney.value;
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'error',
                title: '베팅 실패',
                text: `현재 보유 금액 : ${money}`,
            });
        });
    } else if(isNaN(parseInt(card1Num)) && card2Num!=="JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
        $().ready(function () {
            Swal.fire({
                icon: 'success',
                title: '베팅 성공',
                text: `현재 보유 금액 : ${money}`,
            });
            success=1;
        });
    } else {
        if(parseInt(card1Num)<parseInt(card2Num)){
            money = money - betMoney.value;
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'error',
                    title: '베팅 실패',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else if(card1Num===card2Num){
            console.log(`draw`);
            $().ready(function () {
                Swal.fire({
                    icon: 'warning',
                    title: '무승부',
                    text: `현재 보유 금액 : ${money}`,
                });
            });
        } else {
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
            $().ready(function () {
                Swal.fire({
                    icon: 'success',
                    title: '베팅 성공',
                    text: `현재 보유 금액 : ${money}`,
                });
                success=1;
            });
        }
    }

    if(card2Num===11){
        card2Num = ["J"];
    }else if(card2Num===12){
        card2Num = ["Q"];
    }else if(card2Num===13){
        card2Num = ["K"];
    }else if(card2Num===14){
        card2Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }

    if(card1Num===11){
        card1Num = ["J"];
    }else if(card1Num===12){
        card1Num = ["Q"];
    }else if(card1Num===13){
        card1Num = ["K"];
    }else if(card1Num===14){
        card1Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }
    betMoney.value = "";

    if(success===1){
        if(optionCalculator=="RED"){
            if(card2Type=="H_" || card2Type=="D_"){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="BLACK"){
            if(card2Type=="S_" || card2Type=="C_"){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="3~8"){
            if(card2Num>=3 && card2Num<=8){
                money = money + parseInt(betMoney.value*1.5);
            } else {
                money = money - parseInt(betMoney.value*1.5);
            }
        }
        if(optionCalculator=="JQKA"){
            if(card2Num=="J" || card2Num=="Q" || card2Num=="K" || card2Num=="A"){
                money = money + parseInt(betMoney.value*1.8);
            } else {
                money = money - parseInt(betMoney.value*1.8);
            }
        }
    
        if(optionCalculator=="JOKER"){
            if(card2Num=="JOKER"){
                money = money + parseInt(betMoney.value*10);
                h2.innerText = `${money}`;
            } else {
                money = money - parseInt(betMoney.value*10);
                h2.innerText = `${money}`;
            }
        }
    }

    localStorage.setItem("money", money);

    betMoney.setAttribute("disabled", "disabled");
    upBtn.setAttribute("disabled", "disabled");
    downBtn.setAttribute("disabled", "disabled");
    refresh.innerText = `다시 시작하려면 새로고침 해주세요.`;
}

function calculatorMoney(){

    if(card1Num==="J"){
        card1Num = 11;
    } else if(card1Num==="Q"){
        card1Num = 12;
    } else if(card1Num==="K"){
        card1Num = 13;
    } else if(card1Num==="A"){
        card1Num = 14;
    } else if(card1Num==="JOKER"){
        card1Num = 15;
    }
    if(card2Num==="J"){
        card2Num = 11;
    } else if(card2Num==="Q"){
        card2Num = 12;
    } else if(card2Num==="K"){
        card2Num = 13;
    } else if(card2Num==="A"){
        card2Num = 14;
    } else if(card2Num==="JOKER"){
        card2Num = 15;
    }
    let downCount=0, upCount=0;
    for(let i=1; i<parseInt(card1Num); i++){  //  LOW 계산
        downCount++;
    }
    for(let i=parseInt(card1Num); i<15; i++){ // HIGH 계산
        upCount++;
    }
    highMoneyPer = Math.round(((downCount*0.1)+1)*1000)/1000;
    lowMoneyPer = Math.round(((upCount*0.1)+1)*1000)/1000;

    upReward.innerText = `x${highMoneyPer}`;
    downReward.innerText = ` x${lowMoneyPer}`;
}