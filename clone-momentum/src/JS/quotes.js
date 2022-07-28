

const quotes = [
{
    quote:"실패로부터 성공을 창조하라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
    author:"데일 카네기",
},
{
    quote:"행동하는 것은 모든 성공의 기본적인 요소이다.",
    author:"파블로 피카소",
},
{
    quote:"인내는 쓰지만, 그 열매는 달다.",
    author:"아리스토텔레스",
},
{
    quote:"태도의 나약함은 성격의 나약함이 된다.",
    author:"아인슈타인",
},
{
    quote:"노력을 대신할 수 있는 것은 없다.",
    author:"에디슨",
},
{
    quote:"가장 현명한 사람은 자신만의 방향을 따른다.",
    author:"에우리피데스",
},
{
    quote:"웃음이 없는 하루는 낭비한 하루다.",
    author:"월트 디즈니",
},
{
    quote:"비참하게 실패하는 사람은 큰 성과를 거둘 수 있다.",
    author:"존 케네디",
},
{
    quote:"실패하기는 어렵지만 성공을 시도한 적이 없는 것이 더 나쁘다.",
    author:"루즈 벨트",
},
{
    quote:"시간이 얼마나 남았는지는 상관 없다. 어떻게 쓰느냐가 중요한거다.",
    author:"에코",
},
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
/*
    Math.round() : 반올림
    Math.ceil() : 올림
    Math.floor() : 내림
    Math.random() : 랜덤 소수값
    createEleent : html tag생성
*/
