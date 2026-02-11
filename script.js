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
