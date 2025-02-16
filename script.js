const root = document.querySelector('#root');
const h1 = document.createElement('h1');
root.appendChild(h1);
document.body.style.margin = '0';
document.body.style.padding = '0';
root.style.height = '100vh';
root.style.width = '100vw';
root.style.maxWidth = '100%';
root.style.maxHeight = '100%';
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
h1.style.fontSize = '3rem';

setInterval(()=>{
    const a = new Date();
    h1.textContent = a.toLocaleTimeString();
}, 1000);

root.addEventListener('click', () => {
    if(h1.style.color === 'white') {
        h1.style.color = 'black'; 
        root.style.backgroundColor = 'white';
    }else{
        h1.style.color = 'white'; 
        root.style.backgroundColor = 'black'; 
    }
});
