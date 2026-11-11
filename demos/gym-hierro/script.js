const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);toggle.querySelector('span').textContent=open?'−':'+';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');toggle.querySelector('span').textContent='+';}});
const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const name=form.elements.name.value.trim();if(!name){form.elements.name.focus();return;}const message=`Hola, soy ${name}. Vi la demo de Hierro. ${form.elements.interest.value}.`;window.open(`https://wa.me/541155550808?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');});
