const quations = [
    {
        txt : "This a test qustion text",
        img : "https://i.dailymail.co.uk/i/pix/2015/05/06/22/2862CE1000000578-3071013-image-m-7_1430949048701.jpg",
        ans1 : ["A",0],
        ans2 : ["B",0],
        ans3 : ["C",1],
        ans4 : ["D",0],
    },
    {
        txt : "This a test qustion text",
        img : "https://i.dailymail.co.uk/i/pix/2015/05/06/22/2862CE1000000578-3071013-image-m-7_1430949048701.jpg",
        ans1 : ["A",0],
        ans2 : ["B",0],
        ans3 : ["C",1],
        ans4 : ["D",0],
    },
]

const quiz_status = {
   score : 0 ,
}

function loadQustions(){
    quations.forEach((qus,id) => {
        html = `
                <div class="qustion-cont" id="${id}">
                <img src="${qus.img}" alt="">
                <span>${qus.txt}</span>
                <div class="row">
                    <div onclick="chooseAnswer(event)" class="col option" id="${id}.1" value="${qus.ans1[1]}"> ${qus.ans1[0]} </div>
                    <div onclick="chooseAnswer(event)" class="col option" id="${id}.2" value="${qus.ans2[1]}"> ${qus.ans2[0]} </div>
                </div>
                <div class="row">
                    <div onclick="chooseAnswer(event)"class="col option" id="${id}.3" value="${qus.ans3[1]}"> ${qus.ans3[0]} </div>
                    <div onclick="chooseAnswer(event)"class="col option" id="${id}.4" value="${qus.ans4[1]}">  ${qus.ans4[0]} </div>
                </div>
                </div>
            `;

            document.body.innerHTML += html;
    })

    document.body.innerHTML += `<button onclick="submitAll()"> submit </button>`;
}

function chooseAnswer(e){
    id  =  e.target.attributes.id.value;
    qus =  id.split(".")[0];
    ans =  id.split(".")[1];
    document.getElementById(qus+".1").classList.remove("active");
    document.getElementById(qus+".2").classList.remove("active");;
    document.getElementById(qus+".3").classList.remove("active");;
    document.getElementById(qus+".4").classList.remove("active");;
    document.getElementById(id).classList.add("active");    
}

function submitAll(){
    answers = document.querySelectorAll(".active");
    alert("Are you sure you want to submit")
}

loadQustions();