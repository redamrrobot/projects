var character_box=document.getElementById('character_box');
function action2(){
character_box.classList.add('action2');
 character_box.classList.remove('action1');
 character_box.classList.remove('action3');
 document.getElementById('cardPresentation').style.display = "none";
 document.getElementById('tekstBubblePassion').style.display = "block";
 document.getElementById('tekstBubble').style.display = "none";
 document.getElementById('tekstBubbleYes').style.display = "none";
 document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
 document.getElementById('tekstBubbleAbout').style.display = "none";
 document.getElementById('carouselPassion').style.display = "block";
 document.getElementById('tableENFJ').style.display = "none";
 document.getElementById('tekstBubbleENFJ').style.display = "none";
 document.getElementById('tekstBubbleFruits').style.display = "none";
 document.getElementById('tekstBubbleSport').style.display = "none";
 document.getElementById('btnModal').style.display = "none";
 document.getElementById('sadCharacter').style.display = "none";
 document.getElementById('happyCharacter').style.display = "none";
 document.getElementById('madCharacter').style.display = "none";
 document.getElementById('mainCharacter').style.display = "block";
 document.getElementById('verySadCharacter').style.display = "none";    
 document.getElementById('videoBarca').style.display = "none";    
 document.getElementById('doubtfulCharacter').style.display = "none";   
 document.getElementById('tekstBubbleParcours').style.display = "none";   
 document.getElementById('timeLine').style.display = "none";   
 document.getElementById('endButton').style.display = "none";   
 document.getElementById('tekstBubbleEnd').style.display = "none"; 
 document.getElementById('speech-bubbleEnd').style.display = "none"; 
 document.getElementById('speech-bubble').style.display = "block"; 

 /*
 $(window).on('load')
 $('#carouselPassion').delay(7000).fadeIn()
 */
}

function action1(){
    character_box.classList.add('action1');
     character_box.classList.remove('action2');
     character_box.classList.remove('action3');
     document.getElementById('tekstBubbleYes').style.display = "none";
     document.getElementById('tekstBubbleAbout').style.display = "block";
     document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
     document.getElementById('cardPresentation').style.display = "block";
     document.getElementById('tekstBubblePassion').style.display = "none";
     document.getElementById('carouselPassion').style.display = "none";
     document.getElementById('tableENFJ').style.display = "none";
     document.getElementById('tekstBubbleENFJ').style.display = "none";
     document.getElementById('tekstBubbleFruits').style.display = "none";
     document.getElementById('btnModal').style.display = "none";
     document.getElementById('sadCharacter').style.display = "none";
     document.getElementById('happyCharacter').style.display = "block";
     document.getElementById('madCharacter').style.display = "none";
     document.getElementById('mainCharacter').style.display = "none";
     document.getElementById('tekstBubbleSport').style.display = "none";
     document.getElementById('verySadCharacter').style.display = "none";    
     document.getElementById('videoBarca').style.display = "none";    
     document.getElementById('doubtfulCharacter').style.display = "none";   
     document.getElementById('tekstBubbleParcours').style.display = "none";   
     document.getElementById('timeLine').style.display = "none";   
     document.getElementById('endButton').style.display = "none";   
     document.getElementById('tekstBubbleEnd').style.display = "none"; 
     document.getElementById('speech-bubbleEnd').style.display = "none"; 
     document.getElementById('speech-bubble').style.display = "block"; 

    }

function action3(){
        character_box.classList.add('action3');
         character_box.classList.remove('action2');
         character_box.classList.remove('action1');
         document.getElementById('tekstBubbleYes').style.display = "none";
         document.getElementById('tekstBubbleAbout').style.display = "none";
         document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
         document.getElementById('cardPresentation').style.display = "none";
         document.getElementById('tekstBubblePassion').style.display = "none";
         document.getElementById('carouselPassion').style.display = "none";
         document.getElementById('tableENFJ').style.display = "block";
         document.getElementById('tekstBubbleENFJ').style.display = "block";
         document.getElementById('tekstBubbleFruits').style.display = "none";
         document.getElementById('btnModal').style.display = "none";
         document.getElementById('btnModal').style.display = "none";
         document.getElementById('sadCharacter').style.display = "none";
         document.getElementById('happyCharacter').style.display = "block";
         document.getElementById('madCharacter').style.display = "none";
         document.getElementById('mainCharacter').style.display = "none";
         document.getElementById('tekstBubbleSport').style.display = "none";
         document.getElementById('verySadCharacter').style.display = "none";    
         document.getElementById('videoBarca').style.display = "none";    
         document.getElementById('doubtfulCharacter').style.display = "none";   
         document.getElementById('tekstBubbleParcours').style.display = "none";   
         document.getElementById('timeLine').style.display = "none";   
         document.getElementById('endButton').style.display = "none";   
         document.getElementById('tekstBubbleEnd').style.display = "none"; 
         document.getElementById('speech-bubbleEnd').style.display = "none"; 
         document.getElementById('speech-bubble').style.display = "block"; 

   }

   function action4() {
         document.getElementById('tekstBubbleYes').style.display = "none";
         document.getElementById('tekstBubbleAbout').style.display = "none";
         document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
         document.getElementById('cardPresentation').style.display = "none";
         document.getElementById('tekstBubblePassion').style.display = "none";
         document.getElementById('carouselPassion').style.display = "none";
         document.getElementById('tableENFJ').style.display = "none";
         document.getElementById('tekstBubbleENFJ').style.display = "none";
         document.getElementById('tekstBubbleFruits').style.display = "block";
         document.getElementById('btnModal').style.display = "block";
         document.getElementById('sadCharacter').style.display = "block";
         document.getElementById('madCharacter').style.display = "none";
         document.getElementById('mainCharacter').style.display = "none";
         document.getElementById('tekstBubbleSport').style.display = "none";
         document.getElementById('verySadCharacter').style.display = "none";    
         document.getElementById('videoBarca').style.display = "none";    
         document.getElementById('doubtfulCharacter').style.display = "none";   
         document.getElementById('tekstBubbleParcours').style.display = "none";   
         document.getElementById('timeLine').style.display = "none";   
         document.getElementById('endButton').style.display = "none";   
         document.getElementById('tekstBubbleEnd').style.display = "none"; 
         document.getElementById('speech-bubbleEnd').style.display = "none"; 
         document.getElementById('speech-bubble').style.display = "block"; 

   }

function stop(){
        document.getElementById('tekstBubbleYes').style.display = "none";
        document.getElementById('tekstBubbleAbout').style.display = "none";
        document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
        document.getElementById('cardPresentation').style.display = "none";
        document.getElementById('tekstBubblePassion').style.display = "none";
        document.getElementById('carouselPassion').style.display = "none";
        document.getElementById('tableENFJ').style.display = "none";
        document.getElementById('tekstBubbleENFJ').style.display = "none";
        document.getElementById('tekstBubbleFruits').style.display = "none";
        document.getElementById('btnModal').style.display = "none";
        document.getElementById('sadCharacter').style.display = "none";
        document.getElementById('madCharacter').style.display = "none";
        document.getElementById('mainCharacter').style.display = "none";
        document.getElementById('tekstBubbleSport').style.display = "block";    
        document.getElementById('verySadCharacter').style.display = "block";    
        document.getElementById('videoBarca').style.display = "block";    
        document.getElementById('doubtfulCharacter').style.display = "none";   
        document.getElementById('tekstBubbleParcours').style.display = "none";   
        document.getElementById('timeLine').style.display = "none";   
        document.getElementById('endButton').style.display = "none";   
        document.getElementById('tekstBubbleEnd').style.display = "none"; 
        document.getElementById('speech-bubbleEnd').style.display = "none"; 
        document.getElementById('speech-bubble').style.display = "block"; 

}

function resume(){
  document.getElementById('tekstBubbleYes').style.display = "none";
  document.getElementById('tekstBubbleAbout').style.display = "none";
  document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
  document.getElementById('cardPresentation').style.display = "none";
  document.getElementById('tekstBubblePassion').style.display = "none";
  document.getElementById('carouselPassion').style.display = "none";
  document.getElementById('tableENFJ').style.display = "none";
  document.getElementById('tekstBubbleENFJ').style.display = "none";
  document.getElementById('tekstBubbleFruits').style.display = "none";
  document.getElementById('btnModal').style.display = "none";
  document.getElementById('sadCharacter').style.display = "none";
  document.getElementById('madCharacter').style.display = "none";
  document.getElementById('mainCharacter').style.display = "none";
  document.getElementById('tekstBubbleSport').style.display = "none";    
  document.getElementById('verySadCharacter').style.display = "none";    
  document.getElementById('videoBarca').style.display = "none";   
  document.getElementById('doubtfulCharacter').style.display = "block";   
  document.getElementById('tekstBubbleParcours').style.display = "block";   
  document.getElementById('timeLine').style.display = "block";   
  document.getElementById('endButton').style.display = "block"; 
  document.getElementById('tekstBubbleEnd').style.display = "none"; 
  document.getElementById('speech-bubbleEnd').style.display = "none"; 
  document.getElementById('speech-bubble').style.display = "block"; 

  
}
let act1 = document.querySelector('#action1');

/*
act1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2703056.jpg')";
});
*/

$(window).on('load', function() {
    $('#yes').delay(3000).fadeIn()
    $('#no').delay(3000).fadeIn()
  })

function hideButton(x)
 {
  x.style.display = 'none';
  document.getElementById('no').style.display = "none";
  document.getElementById('tekstBubble').style.display = "none";
  document.getElementById('tekstBubbleYes').style.display = "block";
  document.getElementById('mainCharacter').style.display = "none";
  document.getElementById('happyCharacter').style.display = "block";

  $(window).on('load')
    $('#showMenu').delay(5000).fadeIn()
 }

 function noButton(x)
 {
  x.style.display = 'none';
  document.getElementById('yes').style.display = "none";
  document.getElementById('showMenu').style.display = "none";
  document.getElementById('tekstBubble').style.display = "none";
  document.getElementById('tekstBubbleNo').style.display = "block";
  document.getElementById('madCharacter').style.display = "block";
  document.getElementById('mainCharacter').style.display = "none";
  document.getElementById('happyCharacter').style.display = "none";
  $(window).on('load')
    $('#yesAfterNo').delay(2000).fadeIn()
  }
 

 function yesAfterNo(x)
 {
  x.style.display = 'none';
  document.getElementById('showMenu').style.display = "block";
  document.getElementById('tekstBubble').style.display = "none";
  document.getElementById('tekstBubbleNo').style.display = "none";
  document.getElementById('tekstBubbleYesAfterNo').style.display = "block";
  document.getElementById('madCharacter').style.display = "none";
  document.getElementById('mainCharacter').style.display = "none";
  document.getElementById('happyCharacter').style.display = "block";
 }

 function endButton(x)
 {
  x.style.display = 'none';
  document.getElementById('tekstBubbleYes').style.display = "none";
  document.getElementById('tekstBubbleAbout').style.display = "none";
  document.getElementById('tekstBubbleYesAfterNo').style.display = "none";
  document.getElementById('cardPresentation').style.display = "none";
  document.getElementById('tekstBubblePassion').style.display = "none";
  document.getElementById('carouselPassion').style.display = "none";
  document.getElementById('tableENFJ').style.display = "none";
  document.getElementById('tekstBubbleENFJ').style.display = "none";
  document.getElementById('tekstBubbleFruits').style.display = "none";
  document.getElementById('btnModal').style.display = "none";
  document.getElementById('sadCharacter').style.display = "none";
  document.getElementById('madCharacter').style.display = "none";
  document.getElementById('mainCharacter').style.display = "none";
  document.getElementById('tekstBubbleSport').style.display = "none";    
  document.getElementById('verySadCharacter').style.display = "block";    
  document.getElementById('videoBarca').style.display = "none";   
  document.getElementById('doubtfulCharacter').style.display = "none";   
  document.getElementById('tekstBubbleParcours').style.display = "none";   
  document.getElementById('timeLine').style.display = "none";   
  document.getElementById('endButton').style.display = "none"; 
  document.getElementById('tekstBubbleEnd').style.display = "block"; 
  document.getElementById('speech-bubbleEnd').style.display = "block"; 
  document.getElementById('speech-bubble').style.display = "none"; 
    var audioBTR = document.getElementById("audioBTR");
    var audioFriends = document.getElementById("audioFriends");
    audioFriends.pause();
    audioBTR.play();
 }

 

 
