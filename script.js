function reset(el){el.className='projectile';void el.offsetWidth;}
function fireAngled(){
 const p=document.getElementById('proj1'); reset(p);
 p.classList.add('ricochet');
 document.getElementById('res1').innerText='Mermi sekerek yön değiştirdi';
}
function fireLayers(){
 const p=document.getElementById('proj2'); reset(p);
 p.classList.add('fire');
 document.getElementById('res2').innerText='ERA patladı, jet zayıfladı';
}
function fireInside(){
 const s=document.getElementById('spall');
 s.classList.remove('spall-show'); void s.offsetWidth;
 s.classList.add('spall-show');
 document.getElementById('res3').innerText='İç spall oluştu';
}
function fireSimulation(container) {
  container.innerHTML = "";

  const projectile = document.createElement("div");
  projectile.className = "projectile";

  const armor = document.createElement("div");
  armor.className = "armor";

  container.appendChild(projectile);
  container.appendChild(armor);

  // MERMİ HAREKETİ (EASING)
  const anim = projectile.animate(
    [
      { transform: "translate(-60px, -50%)" },
      { transform: "translate(620px, -50%)" }
    ],
    {
      duration: 650,
      easing: "cubic-bezier(.3,.7,.4,1)"
    }
  );

  // ÇARPMA ANI
  setTimeout(() => {
    armor.classList.add("hit");
    spawnSpall(container);
  }, 520);

  anim.onfinish = () => projectile.remove();
}

function spawnSpall(container) {
  for (let i = 0; i < 7; i++) {
    const s = document.createElement("div");
    s.className = "spall-line";
    s.style.left = 520 + Math.random() * 60 + "px";
    s.style.top = "50%";
    container.appendChild(s);
    setTimeout(() => s.remove(), 400);
  }
}

// KATMANLI ZIRH
function fireLayered(layers) {
  layers.forEach((layer, i) => {
    setTimeout(() => {
      layer.classList.add("hit");
      setTimeout(() => layer.classList.remove("hit"), 300);
    }, i * 140);
  });
}
