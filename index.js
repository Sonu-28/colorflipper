let color = ['RGB(169 174 204)', 'RGB(220 237 7)', 'RGB(49 237 7)', 'RGB(237 65 7)', 'RGB(7 229 237)'];
let btn =document.getElementById('btn');
btn.addEventListener('click', function(){
    let bgcolor = color[Math.floor(Math.random()*color.length)];
    document.getElementById('fliper').style.backgroundColor=bgcolor;
    document.getElementById('btn').value=bgcolor;
});