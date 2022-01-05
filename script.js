const cidade = document.querySelector(".cidade"),
    name = document.querySelector(".name"),
    university = document.querySelector(".university"),
    work1 = document.querySelector(".work1"),
    work2 = document.querySelector(".work2");
      
const nomeimg = document.querySelector(".nome-img"),
    localimg = document.querySelector(".local-img"),
    universityimg = document.querySelector(".university-img"),
    work1img = document.querySelector(".work1-img"),
    work2img = document.querySelector(".work2-img");

//mouse move

window.addEventListener("mousemove", (e) => {
  let x = e.offsetX -10;
      y = e.offsetY +150;

                        
   if(e.target.classList.contains("name")){
       nomeimg.style.left = `${x}px`;
       nomeimg.style.top = `${y}px`;   
}
    if(e.target.classList.contains("cidade")){
       localimg.style.left = `${x}px`;
       localimg.style.top = `${y}px`;    

}
    if(e.target.classList.contains("university")){
       universityimg.style.left = `${x}px`;
       universityimg.style.top = `${y}px`;  
}
    if(e.target.classList.contains("work1")){
        work1img.style.left = `${x}px`;
        work1img.style.top = `${y}px`;  
}
    if(e.target.classList.contains("work2")){
        work2img.style.left = `${x}px`;
        work2img.style.top = `${y}px`;  
}   

});
                        
//mouse over
name.addEventListener("mouseover", () => {
    nomeimg.style.display = "block";       
});


//mouse leave
name.addEventListener("mouseleave", () => {
    nomeimg.style.display = "none";     
});

//mouse over
cidade.addEventListener("mouseover", () => {
    localimg.style.display = "block";
});


//mouse leave
cidade.addEventListener("mouseleave", () => {
    localimg.style.display = "none";    
});

//mouse over
university.addEventListener("mouseover", () => {
    universityimg.style.display = "block";
});


//mouse leave
university.addEventListener("mouseleave", () => {
    universityimg.style.display = "none";      
});

//mouse over
work1.addEventListener("mouseover", () => {
    work1img.style.display = "block";
});


//mouse leave
work1.addEventListener("mouseleave", () => {
    work1img.style.display = "none";      
});

//mouse over
work2.addEventListener("mouseover", () => {
    work2img.style.display = "block";
});


//mouse leave
work2.addEventListener("mouseleave", () => {
    work2img.style.display = "none";      
});
