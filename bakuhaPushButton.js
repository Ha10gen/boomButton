const btn = document.getElementById('soundBtn');
const img = document.getElementById('pushButton');
const player = document.getElementById('boomSound');
const volumeSlider = document.getElementById('volumeSlider');
const normalSrc = 'war_bakuha_switch_off.png';
const activeSrc = 'war_bakuha_switch_on.png';
const soundSrc = 'boom.wav';

// Audioオブジェクトを1回だけ作成
var audio_key = new Audio(soundSrc);
var audio_volume = volumeSlider.value / 100;

function playSound(){
    audio_key = new Audio(soundSrc);
    audio_key.volume = volumeSlider.value / 100;
    audio_key.play().catch(err=>console.warn('再生失敗:', err));
}

volumeSlider.addEventListener('input', () => {
  const val = volumeSlider.value;
  player.volume = val / 100;
  volumeValue.textContent = val; // 数値表示
});

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
