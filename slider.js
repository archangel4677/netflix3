document.addEventListener("click",e=>{
    let handle
    if(e.target.matches(".handle"))
    {handle=e.target}
    else {handle=e.target.closest(".handle")}
    if(handle!=null){
        onHandleClick(handle)
    }
})
window.addEventListener("resize",(e)=>{
    //calculateProgressBar
})
document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
function calculateProgressBar(progressBar){
    progressBar.innerHTML=""
    
    const slider=progressBar.closest(".trending-row").querySelector(".slider")
    const itemCount=slider.children.length
    console.log(itemCount)
    
    const itemsPerScreen=parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
    console.log(itemsPerScreen)
    const sliderIndex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    console.log(sliderIndex)
    const progressBarItemCount=Math.ceil(itemCount/itemsPerScreen)
    
    console.log(progressBarItemCount)
    for(let i=0;i<progressBarItemCount;i++){
        const barItem=document.createElement("div")
        barItem.classList.add("progress-item")
        
        
        if(i===sliderIndex){
            barItem.classList.add("active")
        }
        progressBar.append(barItem)
    }
}

function onHandleClick(handle){
    const progressBar=handle.closest(".trending-row").querySelector(".progress-bar")
    const slider =handle.closest(".movie-slider").querySelector(".slider")
    
    const sliderIndex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
   const progressBarItemCount=progressBar.children.length
    if(handle.classList.contains("left-handle")){
  if(sliderIndex-1<0){   
slider.style.setProperty("--slider-index",progressBarItemCount-1)
progressBar.children[sliderIndex].classList.remove("active")
progressBar.children[sliderIndex-1].classList.add("active")    
   }
else{
    slider.style.setProperty("--slider-index",sliderIndex-1)
    progressBar.children[sliderIndex].classList.remove("active")
    progressBar.children[sliderIndex-1].classList.add("active")  
} }
  if(handle.classList.contains("right-handle")){
if(sliderIndex+1>=progressBarItemCount){
    slider.style.setProperty("--slider-index",0)
    progressBar.children[sliderIndex].classList.remove("active")
    progressBar.children[0].classList.add("active")
}
else{
slider.style.setProperty("--slider-index",sliderIndex+1)
progressBar.children[sliderIndex].classList.remove("active")
progressBar.children[sliderIndex+1].classList.add("active")
    }
}}
function openModal(videoUrl,title) {
    
   
    var modal = document.getElementById('myModal');
    // var name=document.button.closest('.m1').querySelector('.moviename').innerText;
    var videoFrame = document.getElementById('videoFrame');

    document.getElementById('title').innerText=title;
    
    
    videoFrame.src = videoUrl+"&autoplay=1";

    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    var videoFrame = document.getElementById('videoFrame');
    document.getElementById('title').innerText='';
    videoFrame.src = '';
    modal.style.display = 'none';
  }