// Screen registry: files in screens/ add entries here. Add new <script> tags in index.html.
// Screens is declared in index.html
const DEVICES = { iphone17:[393,852], iphone17pm:[440,956], se:[390,844] };
const stack = ['home'];
const $ = id => document.getElementById(id);

function render(){
  $('viewport').innerHTML = Screens[stack.at(-1)]();
}
document.addEventListener('click', e => {
  const go = e.target.closest('[data-go]'), back = e.target.closest('[data-back]');
  if (go){ stack.push(go.dataset.go); render(); }
  else if (back && stack.length > 1){ stack.pop(); render(); }
  else if (e.target.closest('#home')){ stack.length = 1; render(); }
});
$('deviceSelect').onchange = e => {
  const [w,h] = DEVICES[e.target.value];
  document.documentElement.style.setProperty('--screen-w', w+'px');
  document.documentElement.style.setProperty('--screen-h', h+'px');
};
$('themeSelect').onchange = e => document.querySelector('.screen').dataset.theme = e.target.value;
$('zoom').oninput = e => document.documentElement.style.setProperty('--scale', e.target.value/100);
$('reload').onclick = render;
(function tick(){ const d=new Date(); $('clock').textContent = (d.getHours()%12||12) + ':' + String(d.getMinutes()).padStart(2,'0'); setTimeout(tick,30000); })();
render();
