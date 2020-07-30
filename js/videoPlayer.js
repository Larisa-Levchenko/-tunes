export const videoPlayerInit =() =>{
   const videoPlayer=document.querySelector('.video-player');
   const videoButtonPlay=document.querySelector('.video-button__play');
   const videoButtonStop=document.querySelector('.video-button__stop');
   const videoTimePassed=document.querySelector('.video-time__passed');
   const videoTimeTotal=document.querySelector('.video-time__total');
   const videoProgress=document.querySelector('.video-progress'); 
   
   const toggleVideoButton = () =>{
      if(videoPlayer.paused){
         videoButtonPlay.classList.remove('fa-pause');
         videoButtonPlay.classList.add('fa-play');
      }else{
         videoButtonPlay.classList.remove('fa-play');
         videoButtonPlay.classList.add('fa-pause');
      }
   };
   const toggleVideoPlayer = () =>{
      if(videoPlayer.paused){
         videoPlayer.play();
      }else{             
         videoPlayer.pause();
      }
      toggleVideoButton();
   };
   const stopVideoPlayer = () =>{
      videoPlayer.pause();
      videoPlayer.currentTime=0;
      toggleVideoButton();
   }
   const addZero = n => n<10 ? '0'+n:n;
  
   videoPlayer.addEventListener('click',toggleVideoPlayer);
   videoButtonPlay.addEventListener('click', toggleVideoPlayer);
   videoButtonStop.addEventListener('click',stopVideoPlayer);
   videoPlayer.addEventListener('timeupdate', ()=>{
      let playerCurrentTime=videoPlayer.currentTime;
      let playerDuration=videoPlayer.duration;     
      let minuteCurrentTime=Math.floor(playerCurrentTime/60);
      let secondCurrentTime=Math.floor(playerCurrentTime%60);      
      let minuteDuration=Math.floor(playerDuration/60);
      let secondDuration=Math.floor(playerDuration%60);

      videoProgress.value=(playerCurrentTime/playerDuration)*100;
      videoTimePassed.textContent=addZero(minuteCurrentTime)+':'+addZero(secondCurrentTime);
      videoTimeTotal.textContent=addZero(minuteDuration)+':'+addZero(secondDuration);      
   });
   videoProgress.addEventListener('change',()=>{
      let playerDuration=videoPlayer.duration; 
      let value=videoProgress.value;
      videoPlayer.currentTime=(value*playerDuration)/100;
   })


}