const btn = document.getElementById('soundBtn');
const img = document.getElementById('pushButton');
const player = document.getElementById('boomSound');
const normalSrc = 'war_bakuha_switch_off.png';
const activeSrc = 'war_bakuha_switch_on.png';
const soundSrc = 'boom.wav';


function playSound(){
    const sound = new Audio(soundSrc);
    sound.play().catch(err=>console.warn('再生失敗:', err));
}


btn.addEventListener('mousedown', ()=>{
    img.src = activeSrc;
    playSound();
});


btn.addEventListener('mouseup', ()=>{
    img.src = normalSrc;
});


btn.addEventListener('mouseleave', ()=>{
    img.src = normalSrc;
});


// タッチ対応
btn.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    img.src = activeSrc;
    playSound();
}, {passive:false});


btn.addEventListener('touchend', ()=>{
    img.src = normalSrc;
});