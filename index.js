var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for(var j=0;j<numberOfDrumButtons;j++){
   document.querySelectorAll(".drum")[j].addEventListener("click",function(){

     var i = this.innerHTML;
     Playsound(i);
   });
 }

 document.addEventListener("keypress",function(event){

   Playsound(event);

 });


 function Playsound(i){
     var soundurl;
     if(i=="w"){
       soundurl="sounds/crash.mp3";
     }
     else if(i=="a"){
       soundurl="sounds/kick-bass.mp3";
     }
     else if(i=="s"){
       soundurl="sounds/snare.mp3";
     }
     else if(i=="d"){
       soundurl="sounds/tom-1.mp3";
     }
     else if(i=="j"){
       soundurl="sounds/tom-2.mp3";
     }
     else if(i=="k"){
       soundurl="sounds/tom-3.mp3";
     }
     else if(i=="l"){
       soundurl="sounds/tom-4.mp3";
     }
     var audio = new Audio(soundurl);
     audio.play();
   }
