const quations = [
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

}
function loadQustions(){
    quations.forEach((qus,id) => {
        html = `
                <div class="qustion-cont" id="${id}">
                <img src="${qus.img}" alt="">
                <span>${qus.txt}</span>
                <div class="row">
                    <div class="col option" qus="${id}.1" value="${qus.ans1[1]}"> ${qus.ans1[0]} </div>
                    <div class="col option" qus="${id}.2" value="${qus.ans2[1]}"> ${qus.ans2[0]} </div>
                </div>
                <div class="row">
                    <div class="col option" qus="${id}.3" value="${qus.ans3[1]}"> ${qus.ans3[0]} </div>
                    <div class="col option" qus="${id}.4" value="${qus.ans4[1]}">  ${qus.ans4[0]} </div>
                </div>
                </div>
            `;

            document.body.innerHTML += html;
    })
}


loadQustions();