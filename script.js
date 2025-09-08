// particles
function spawnParticle(){
  const el=document.createElement("div");
  el.className="particle";
  el.style.left=Math.random()*100+"vw";
  el.style.animationDuration=5+Math.random()*5+"s";
  el.innerText="✦";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),10000);
}
setInterval(spawnParticle,300);

// click sound
const sound=new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    sound.currentTime=0;
    sound.play();
  });
});

// scroll animation
const sections=document.querySelectorAll(".section");
window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const rect=sec.getBoundingClientRect();
    if(rect.top<window.innerHeight-100){
      sec.classList.add("visible");
    }
  });
});