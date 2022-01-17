var speechRecognition=window.webkitSpeechRecognition
var recognition=new speechRecognition();
var textBox=document.getElementById("textBox");
var instruction=document.getElementById("instruction");
var content=''
recognition.continuous=true;
recognition.onstart=function(){
    instruction.innerText="Voice Listening is Online"
};
recognition.onspeechend=function(){
    instruction.innerText="No Activity"
};
recognition.onerror=function(){
    instruction.innerText="Didn't catch your voice. Try Again."
};
recognition.onresult=function(e){
    var current=e.resultIndex;
    var transcript=e.results[current][0].transcript;
    console.log(transcript);
    if(transcript.includes("delete all")){
        content='';
        textBox.innerText=content;
    }
    else if(transcript.includes("full stop")){
        content+='. ';
        textBox.innerText=content;
    }
    else if(transcript.includes("make it capital")){
        content=content.toUpperCase();
        textBox.innerText=content;
    }
    else{
        content+=transcript;
        textBox.innerText=content;
    }
    
};
function strt(){
    if(content.length){
        content+=''
    }

    recognition.start();
}
