function t(lang,code){
  if(lang == "en" || lang == "EN"){
     return dictionaryEN[code];
 }else if(lang == "ar" || lang == "AR"){
    return dictionaryAR[code];
 }else if(lang == "es" || lang == "ES"){
    return dictionaryES[code];
 }else if(lang == "ch" || lang == "ES"){
    return dictionaryCH[code];
 }
}

dictionaryEN = {
    "label_1" : "Your score is ...",
    "btn-show-answers" :  "Show answers" ,
    "alert" : "Please answer all qustions before submiting",
    "submit" : "Submit",
    "back": "Back to result",
}

dictionaryAR = {
    "label_1" : "نتيجتك هي ....",
    "btn-show-answers" :  "اعرض الاجوبة" ,
    "alert" : "يرجى الإجابة على جميع الأسئلة قبل التقدم",
    "submit" : "إرسال",
    "back": "العودة إلى النتيجة",
}

dictionaryES = {
    "label_1" : "tu puntaje es ...",
    "btn-show-answers" :  "Mostrar respuestas" ,
    "alert" : "Responda todas las preguntas antes de enviar",
    "submit" : "enviar",
    "back": "Volver al resultado",
}

dictionaryCH = {
    "label_1" : "你的分数是 ...",
    "btn-show-answers" :  "显示答案" ,
    "alert" : "提交前请回答所有问题",
    "submit" : "提交",
    "back": "返回结果",    
}