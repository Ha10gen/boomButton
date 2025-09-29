const btn = document.getElementById('soundBtn');
const img = document.getElementById('pushButton');
const player = document.getElementById('boomSound');
const normalSrc = 'war_bakuha_switch_off.png';
const activeSrc = 'war_bakuha_switch_on.png';
const soundSrc = 'boom.wav';

// 初回準備フラグ
let audioReady = false;

// Audioオブジェクトを1回だけ作成
const sound = new Audio(soundSrc);

// 再生関数
function playSound() {
    if (!audioReady) {
        // 初回クリックでユーザー操作として準備
        sound.play().then(() => {
            sound.pause();
            sound.currentTime = 0;
            audioReady = true;
            // 本来の再生
            sound.play();
        }).catch(err => console.warn('再生失敗:', err));
    } else {
        sound.currentTime = 0;
        sound.play().catch(err => console.warn('再生失敗:', err));
    }
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
