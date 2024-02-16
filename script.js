let audioindex=0;
let audioElement=new Audio("MUsic/Song3.mp3")
let songs=[{songName:"Asal Mein",filePath:"Music/Song1.mp3",coverPath:"song-1.jpg"},
{songName:"Ek Tarfa",filePath:"Music/Song2.mp3",coverPath:"song-2.jpg"},
{songName:"Hawa Banke",filePath:"Music/Song3.mp3",coverPath:"song-3.jpg"},
{songName:"Ye Baarish",filePath:"Music/Song4.mp3",coverPath:"song-4.jpg"},
{songName:"Excuses",filePath:"Music/Song5.mp3",coverPath:"song-5.jpg"}]
let j=0;
let aud=[]
let i=0
let master_play=$('#master-play');
let play_button=$('.subplay')
let l=play_button.length
master_play.on('click',function(){
    if(audioElement.paused||audioElement.currentTime<=0)
    {
 audioElement.currentTime=0;       
audioElement.play();
master_play.removeClass('fa-circle-pause');
master_play.addClass('fa-circle-play');



    }
    else{
        audioElement.pause();
        master_play.removeClass('fa-circle-play');
        master_play.addClass('fa-circle-pause');
        audioElement.pause();   
    }
})
let play_back=$('#back');
play_back.on('click',function(){
    audioElement.currentTime=Math.abs(audioElement.currentTime-10);
})
let play_forward=$('#forward');
play_forward.on('click',function(){
    audioElement.currentTime=Math.abs(audioElement.currentTime+10);
})
let pro=document.getElementById("myProgress");
pro.value=0;
audioElement.addEventListener('timeupdate',function(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    pro.value=progress;
})
pro.addEventListener('change',function(){
 audioElement.currentTime=(((pro.value)/100)*audioElement.duration);   
})

let playButtons = document.querySelectorAll('.playb');
    playButtons.forEach((playButton, index) => {
      playButton.addEventListener('click', function () {
        if(audioElement.play)
        {
            audioElement.currentTime=0
           
            audioElement.src = songs[index].filePath;
            audioElement.play();   
        }
        else{
            
        audioElement.pause();
        }
       
      });

    });

        
        


