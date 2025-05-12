var typed = new Typed('.typer', {
strings: ['Backend Developer.', 'Fullstack Developer.', 'Frontend.'],
    typeSeed:100,
    backSpeed:100,
    loop:true,
  });


  let valueNumbers=document.querySelectorAll(".exp-number");
  let interval=2000;

  valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{ 
        startValue+=1;
        valueNumber.textContent=startValue;
        if(startValue==endValue) {
        clearInterval(counter);
        }
        }, duration)
});

document.addEventListener("click", function(e){
   if(e.target.classList.contains("gallery-item")){
     const src=e.target.getAttribute("src");
     document.querySelector(".modal-body img").src = src;

       const myModal=new bootstrap.Modal(document.getElementById('gallery-modal')) 
       myModal.show();
   }  
});

// Botón Volver arriba
const scrollTopButton = document.getElementById("scroll-top-button");

// Muestra el botón cuando el usuario hace scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

// Hacer scroll hacia arriba cuando se hace clic en el botón
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
});

