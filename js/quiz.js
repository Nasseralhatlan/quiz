var started = false;
const sound = new Audio();
sound.loop = true;
var first = true;
sound.src = "./audio/UCL_theme_song_fadein.mp3";


const quiz_status = {
   score : 0 ,
   outof :  quationsEN.length ,
}



function unloadQustions(){
    document.querySelectorAll(".qustion-cont").forEach(qus=>{
        qus.remove();
    });
}
function loadQustions(){
    quationsEN.forEach((qus,id) => {
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

    document.body.innerHTML += `<button type="submit" onclick="submitAll()"> submit </button>`;    
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
    answers.forEach((item,index) => {
        quiz_status.score += parseInt(item.attributes.value.value);
    })
    unloadQustions();

    scorePercantage = calcScorePercentage();
    duration = scorePercantage > 50 ? scorePercantage > 75 ? 8000:6000 : scorePercantage > 35 ? 4000:2000;

    console.log(duration);
    console.log(scorePercantage);
    
    
    document.getElementById("result").classList.add("show_result");
    $('.counter').each(function() {
        var $this = $(this),
            countTo = scorePercantage;
        
        $({ countNum: $this.text().split("%")[0]}).animate({
          countNum: countTo
        },
      
        {
    
          duration: duration,
          easing:'linear',
          step: function() {
            num = Math.floor(this.countNum)
            $this.text(num+"%");
          },
          complete: function() {
            $this.text(this.countNum+"%");
            //alert('finished');
          }
      
        });  
      });

      
}



function start(lang){
    if(!started){
        started = true;
        // sound.play();
        loadQustions();
        if(lang == "ar"){
            document.getElementsByClassName("ar")[0].classList.add("language-choosen");
        }else if(lang == "en"){
            document.getElementsByClassName("en")[0].classList.add("language-choosen");
        }else if(lang == "es"){
            document.getElementsByClassName("es")[0].classList.add("language-choosen");
        }else if(lang == "ch"){
            document.getElementsByClassName("ch")[0].classList.add("language-choosen");
        }
    
        setTimeout(function() {
            document.getElementById("start_overlay").classList.add("hide_overlay");
        }, 500);

    }
    
}


function calcScorePercentage(){
    score = quiz_status.score;
    outof = quiz_status.outof;    
    return Math.floor((score/outof)*100);
}



function copyLink(){
    url = window.location.href;
    clipboard = document.getElementById("clipboard");
    clipboard.value = url;
    clipboard.select();
    clipboard.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("URL copyed");
}

function showAnswers(){


}

function pause(){
    sound.pause();
}

function resume(){
    sound.play();
}

