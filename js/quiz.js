
const quationsEN = [
    {
        txt : "Which two teams played in the 2002 champions league final",
        img : "./img/UEFA-CHAMPIONS-LEAGUE.jpg",
        ans1 : ["Barcelona vs Arsenal",0],
        ans2 : ["AC Mialn vs Juventus",0],
        ans3 : ["Real Madrid vs Bayer leverkusen",1],
        ans4 : ["AC Milan vs Liverpool ",0],

    },
    {
        txt : "Who assisted zidane in this goal ?",
        img : "./img/zidane-goal.jpeg",
        ans1 : ["Robert carlos",1],
        ans2 : ["Figo",0],
        ans3 : ["Raul",0],
        ans4 : ["Morienets",0],
    },
    {
        txt : "What was the final result of the 2002 champions league final?",
        img : "./img/2002-ucl-final-match-card.png",
        ans1 : ["BAY 0 - RM 2",0],
        ans2 : ["BAY 1 - RM 2",1],
        ans3 : ["BAY 2 - RM 3",0],
        ans4 : ["BAY 2 - RM 1",0],
    },
    {
        txt : "Which two teams played in the 2004 champions league final",
        img : "./img/UEFA-CHAMPIONS-LEAGUE.jpg",
        ans1 : ["Barcelona vs Arsenal",0],
        ans2 : ["Chelese vs Bayren munech",0],
        ans3 : ["Porto vs monaco",1],
        ans4 : ["AC Milan vs Liverpool ",0],

    },
    {
        txt : "Who was the top goalscorer in the 2005 chamions league ?",
        img : "./img/goal-top_2005.png",
        ans1 : ["Terry henry",0],
        ans2 : ["Gerrard",0],
        ans3 : ["Ruud van nistelrooy",1],
        ans4 : ["Ronaldinho",0],

    },
    {
        txt : "When was this historical goal by ronaldinho ?",
        img : "./img/RON.jpg",
        ans1 : ["2004 champions league Round of 16",0],
        ans2 : ["2004 champions league semi final",0],
        ans3 : ["2005 champions league Round of 16",1],
        ans4 : ["2005 champions league semi final",0],

    },
    {
        txt : "From what match this picture was ?",
        img : "./img/07-Gerrard-Milan-2_3294832k.jpg",
        ans1 : ["2003 champions league final",0],
        ans2 : ["2005 champions league final",1],
        ans3 : ["2003 champions league semi final",0],
        ans4 : ["2005 champions league semi final",0],

    },
    {
        txt : "At what minute did milan score the first goal of the 2005 champions league final ?",
        img : "./img/maldini-goal-2005.jpg",
        ans1 : ["1:00",1],
        ans2 : ["7:00",0],
        ans3 : ["3:00",0],
        ans4 : ["12:00",0],

    },
    {
        txt : "What was the ruslt of the first half of the 2005 UCL final ?",
        img : "./img/pre-game-lineup-2005.jpg",
        ans1 : ["Milan 3 - 0 Liverpool ",1],
        ans2 : ["Milan 3 - 2 Liverpool ",0],
        ans3 : ["Milan 2 - 1 Liverpool ",0],
        ans4 : ["Milan 2 - 0 Liverpool ",0],

    },
    {
        txt : "What was the final result of the 2005 UCL Final?",
        img : "./img/2005-match-card.jpg",
        ans1 : ["Milan 4 - 4 Liverpool , liverpool won by penalties",0],
        ans2 : ["Milan 3 - 2 Liverpool",0],
        ans3 : ["Milan 3 - 3 Liverpool , liverpool won by penalties",1],
        ans4 : ["Milan 3 - 4 Liverpool ",0],

    },
    {
        txt : "Who was the 2005 UCL Final man of the match ?",
        img : "./img/2005-manOfTheMatch.png",
        ans1 : ["Maldini",0],
        ans2 : ["Xabi Alonso",0],
        ans3 : ["Dudek",0],
        ans4 : ["Steven gerard",1],
    },
    {
        txt : "Where did the 2006 final took place?",
        img : "./img/ucl-stad.png",
        ans1 : ["Istanbul",0],
        ans2 : ["Berlin",0],
        ans3 : ["Paris",1],
        ans4 : ["Londo",0],
    },
    {
        txt : "From left to right fill the empty boxes with team that played in the 2006 ucl semi final and final?",
        img : "./img/2006-uclGoldenBox.png",
        ans1 : ["Milan - Arsenal - Villarreal",0],
        ans2 : ["Barcelona - Chelsea - Chelsea",0],
        ans3 : ["Barcelona - manchester united - manchester united",0],
        ans4 : ["Barcelona - Arsenal - Villarreal",1],
    },











]

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

    document.getElementById("result").classList.add("show_result");
    $('.counter').each(function() {
        var $this = $(this),
            countTo = calcScorePercentage();
        
        $({ countNum: $this.text().split("%")[0]}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 8000,
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
        sound.play();
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