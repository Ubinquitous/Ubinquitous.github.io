const API_KEY = `suyekkuR7SRO2720g7tgje0Nr1frEuxvzTGqC29kOGrjWzm8b3jdikE0/z4HtHCm3YSdxOp/LnAtzPwwATb6lg==`;
const url = `https://apis.data.go.kr/6260000/BusanNkdngSltpwInfoService/getNkdngSltpwInfo?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&resultType=json`;

fetch(url).then(response => response.json())
    .then(data => {
        const suon = document.getElementById("suon");
        const suonOK = document.getElementById("suonOK");
        const yumbun = document.getElementById("yumbun");
        const yumbunOK = document.getElementById("yumbunOK");
        const pH = document.getElementById("pH");
        const pHOK = document.getElementById("pHOK");

        suon.innerText = data.getNkdngSltpwInfo.item[0].item01v;
        yumbun.innerText = data.getNkdngSltpwInfo.item[0].tem03v;
        pH.innerText = data.getNkdngSltpwInfo.item[0].item04v;
        if(data.getNkdngSltpwInfo.item[0].item01f=="SMPL"){
            suonOK.innerText = `정상`;
        } else {
            suonOK.innerText = `비정상`;
        }
        if(data.getNkdngSltpwInfo.item[0].item03f=="SMPL"){
            yumbunOK.innerText = `정상`;
        } else {
            yumbunOK.innerText = `비정상`;
        }
        if(data.getNkdngSltpwInfo.item[0].item04f=="SMPL"){
            pHOK.innerText = `정상`;
        } else {
            pHOK.innerText = `비정상`;
        }
    });


/*
data.getNkdngSltpwInfo.item[0].value

hourDate: "2022071519" 측정날짜
item01f: "SMPL" 수온상태 (SMPL:정상)
item01v: "28.1" 수온
item03f: "SMPL" 염분상태
item04f: "SMPL" pH 상태
item04v: "7.8" pH
tem03v: "0.15" 염분
*/
