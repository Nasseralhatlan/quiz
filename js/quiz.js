var started = false;
const sound = new Audio();
sound.loop = true;
var first = true;
sound.src = "./audio/UCL_theme_song_fadein.mp3";


const quiz_status = {
   score : 0 ,
   outof :  quationsEN.length ,
   lang : "EN",
   html : ""
}



function correctAnswers(){
    answers = document.querySelectorAll(".active");    
    answers.forEach((item) => {
       if(item.attributes.value.value == 1){
           item.classList.add("correct")
       }else{
           item.classList.add("incorrect")
       }
    })

    correct_answers = document.querySelectorAll(".option");    
    correct_answers.forEach((item) => {
       if(item.attributes.value.value == 1){
           item.classList.add("correct")
       }
    })

    counter = 0 ;
    allQustions = document.querySelectorAll(".qustion-cont");    
    allQustions.forEach( qus => {
       id = qus.attributes.id.value;
       if(counter == 6 || counter == 11 || counter == 16 || counter == 21 || counter == 26 || counter == 35){
        quiz_status.html += ` <a href="https://bandsio.com/products/resistance-bands-set" target="_blank">
                            <div class="ad" >
                            <img src="./img/ad/ad_1.png" alt="">
                            </div>
                            </a>`
                            ;
       }
        qus = "";
       qus = ` <div class="qustion-cont" id="${id}">
              ${document.getElementById(id).innerHTML}
              </div>`;
        quiz_status.html += qus;
        document.getElementById(id).remove()
        counter++ ;
    });

    allAds = document.querySelectorAll(".ad");
    allAds.forEach( ad => {
        ad.remove();
    })

    document.getElementById("submit_button").remove()



}

function loadQustions(){
    qustions = quationsEN;
    languageClass = ""
    if(quiz_status.lang == "EN"){
        qustions = quationsEN;
        languageClass = "en-font";
    }else if(quiz_status.lang == "AR"){
        qustions = quationsAR;
        languageClass = "ar-font";
    }else if(quiz_status.lang == "EN"){
        qustions = quationsES;
        languageClass = "en-font";
    }else if(quiz_status.lang == "EN"){
        qustions = quationsCH;
        languageClass = "ch-font";
    }
  
    counter = 0 ;
    shuffle(qustions).forEach((qus,id) => {
       
        html = ``;
        if(counter == 6 || counter == 11 || counter == 16 || counter == 21 || counter == 26){
        html = `
                <div class="qustion-cont" id="${id}">
                <img src="${qus.img}" alt="">
                <span class="${languageClass}" >${qus.txt}</span>
                <div class="row">
                    <div onclick="chooseAnswer(event)" class="col option ${languageClass}" id="${id}.1" value="${quiz_status.lang == "AR" ?qus.ans1[0]:qus.ans1[1]}"> ${quiz_status.lang == "AR" ?qus.ans1[1]:qus.ans1[0]} </div>
                    <div onclick="chooseAnswer(event)" class="col option ${languageClass}" id="${id}.2" value="${quiz_status.lang == "AR" ? qus.ans2[0]:qus.ans2[1]}"> ${quiz_status.lang == "AR" ?qus.ans2[1]:qus.ans2[0]} </div>
                </div>
                <div class="row">
                    <div onclick="chooseAnswer(event)"class="col option ${languageClass}" id="${id}.3" value="${quiz_status.lang == "AR" ?qus.ans3[0]:qus.ans3[1]}"> ${quiz_status.lang == "AR" ?qus.ans3[1]:qus.ans3[0]} </div>
                    <div onclick="chooseAnswer(event)"class="col option ${languageClass}" id="${id}.4" value="${quiz_status.lang == "AR" ?qus.ans4[0]:qus.ans4[1]}">  ${quiz_status.lang == "AR" ?qus.ans4[1]:qus.ans4[0]} </div>
                </div>
                </div>
                <a href="https://bandsio.com/products/resistance-bands-set" target="_blank">
                <div class="ad" >
                <img src="./img/ad/ad_1.png" alt="">
                </div>
                </a>
            `;
        }else{
            html = `
            <div class="qustion-cont" id="${id}">
            <img src="${qus.img}" alt="">
            <span class="${languageClass}" >${qus.txt}</span>
            <div class="row">
                <div onclick="chooseAnswer(event)" class="col option ${languageClass}" id="${id}.1" value="${quiz_status.lang == "AR" ?qus.ans1[0]:qus.ans1[1]}"> ${quiz_status.lang == "AR" ?qus.ans1[1]:qus.ans1[0]} </div>
                <div onclick="chooseAnswer(event)" class="col option ${languageClass}" id="${id}.2" value="${quiz_status.lang == "AR" ? qus.ans2[0]:qus.ans2[1]}"> ${quiz_status.lang == "AR" ?qus.ans2[1]:qus.ans2[0]} </div>
            </div>
            <div class="row">
                <div onclick="chooseAnswer(event)"class="col option ${languageClass}" id="${id}.3" value="${quiz_status.lang == "AR" ?qus.ans3[0]:qus.ans3[1]}"> ${quiz_status.lang == "AR" ?qus.ans3[1]:qus.ans3[0]} </div>
                <div onclick="chooseAnswer(event)"class="col option ${languageClass}" id="${id}.4" value="${quiz_status.lang == "AR" ?qus.ans4[0]:qus.ans4[1]}">  ${quiz_status.lang == "AR" ?qus.ans4[1]:qus.ans4[0]} </div>
            </div>
            </div>`;
        }
            document.body.innerHTML += html;
            counter++ ;
    })


    document.body.innerHTML += `
    <a href="https://bandsio.com/products/resistance-bands-set" target="_blank">
                <div class="ad">
                <img src="./img/ad/ad_1.png" alt="">
                </div>
    </a>
    <button id="submit_button" type="submit" class="${languageClass}" onclick="submitAll()"> ${t(quiz_status.lang,"submit")} </button>`;    

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
    if(answers.length == quiz_status.outof){
    answers.forEach((item) => {
        quiz_status.score += parseInt(item.attributes.value.value);
    })
    correctAnswers();
    scorePercantage = calcScorePercentage();
    duration = scorePercantage > 50 ? scorePercantage > 75 ? 8000:6000 : scorePercantage > 35 ? 4000:2000;    
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
          }
      
        });  
      });

    }else{
        alert(t(quiz_status.lang,"alert"))
    }
}



function start(lang){
    if(!started){
        started = true;
        sound.play()
        if(lang == "ar"){
            quiz_status.lang = "AR"
            loadQustions();
            document.getElementsByClassName("ar")[0].classList.add("language-choosen");
        }else if(lang == "en"){
            quiz_status.lang = "EN"
            loadQustions();
            document.getElementsByClassName("en")[0].classList.add("language-choosen");
        }else if(lang == "es"){
            quiz_status.lang = "ES"
            loadQustions();
            document.getElementsByClassName("es")[0].classList.add("language-choosen");
        }else if(lang == "ch"){
            quiz_status.lang = "CH"
            loadQustions();
            document.getElementsByClassName("ch")[0].classList.add("language-choosen");
        }
        setTimeout(function() {
            document.getElementById("start_overlay").classList.add("hide_overlay");
        }, 500);


        document.getElementById("label_1").innerHTML = t(quiz_status.lang,"label_1")
        document.getElementById("btn-show-answers").innerHTML = t(quiz_status.lang,"btn-show-answers")
    }
}


function calcScorePercentage(){
    score = quiz_status.score;
    outof = quiz_status.outof;    
    return Math.floor((score/outof)*100);
}


function showAnswers(){
    languageClass = ""
    if(quiz_status.lang == "EN"){
        languageClass = "en-font";
    }else if(quiz_status.lang == "AR"){
        languageClass = "ar-font";
    }else if(quiz_status.lang == "EN"){
        languageClass = "en-font";
    }else if(quiz_status.lang == "EN"){
        languageClass = "ch-font";
    }
    document.body.innerHTML += quiz_status.html+`<button id="submit_button" type="submit" class="${languageClass}" onclick="backToResult()"> ${t(quiz_status.lang,"back")} </button>`;
    document.getElementById("result").classList.remove("show_result");

}

function backToResult(){
    allQustions = document.querySelectorAll(".qustion-cont");
    allQustions.forEach( qus => {
       id = qus.attributes.id.value;

       qus = "";
       qus = ` <div class="qustion-cont" id="${id}">
              ${document.getElementById(id).innerHTML}
              </div>`;
        quiz_status.html += qus;
        document.getElementById(id).remove()
    });

    document.getElementById("submit_button").remove()
    document.getElementById("result").classList.add("show_result");
}


function pause(){
    sound.pause();
}

function resume(){
    sound.play();
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

