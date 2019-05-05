function learnJS(lang, callback){
    console.log("I learn " + lang);
    callback();
}

learnJS("JavaScript", function(){
    console.log("I completed third lesson");
});