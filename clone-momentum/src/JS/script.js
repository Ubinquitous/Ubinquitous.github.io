const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add("hidden"); 
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
    console.log(username);
}
function paintGreetings(username){
    const date = new Date();
    const hours = date.getHours();

    if(hours<11 && hours>4){
        greeting.innerText = `Good morning, ${username}.`;
    } else if(hours<18){
        greeting.innerText = `Good afternoon, ${username}.`;
    } else {
        greeting.innerText = `Good evening, ${username}.`;
    }
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username"); // username에 해당하는 값 불러오기(getItem)

if(savedUsername === null){ // 유저명이 없으면 null값을 반환하는 로컬스토리지의 특성을이용한코드
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 새로고침해도 greeting을 보여주기
    paintGreetings(savedUsername);
}
// local storage가 비어있으면 form을 보여주고, 아니라면 h1 보여주기
// localStorage.removeItem("username");