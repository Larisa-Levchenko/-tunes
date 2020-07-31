export const radioPlayerInit =() =>{
   const radio =document.querySelector('.radio');
   const radioCoverImg =document.querySelector('.radio-cover__img');
   const radioNavigation =document.querySelector('.radio-navigation');
   const radioHeader =document.querySelector('.radio-header__big');
   const radioItem =document.querySelectorAll('.radio-item');
   const radioStop =document.querySelector('.radio-stop');

   const audio= new Audio();
   audio.type='audio/aac';

   radioStop.disabled=true;
   
   const togglePlayer =()=>{
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-pause');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-pause');
    }
   };
   const selectItem = elem => {
    radioItem.forEach(item=>item.classList.remove('select'));
    elem.classList.add('select');
  };
  
   radioNavigation.addEventListener('change',event=>{         
     const target=event.target;
     const urlRadio=target.dataset.radioStantion;
     const parrent = target.closest('.radio-item');
     selectItem(parrent);

     const title = parrent.querySelector('.radio-name').textContent;
     const img = parrent.querySelector('.radio-img').src;
     
     
     radioCoverImg.src=img;
     radioHeader.textContent = title; 
     radioStop.disabled=false;     
     audio.src=urlRadio;
     audio.play();     
     togglePlayer(); 
    
   });
   radioStop.addEventListener('click',()=>{
    if (audio.paused){
      audio.play();
    }else{
      audio.pause();
    }     
     togglePlayer();
     
   })

   
}