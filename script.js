const dialog = document.querySelector('#senai-dialog');
const openButton = document.querySelector('[data-open-dialog]');
const closeButtons = document.querySelectorAll('[data-close-dialog]');

openButton.addEventListener('click', () => dialog.showModal());
closeButtons.forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});


const techSteps=[
["O visitante interage","Pelo smartphone ou tablet, o visitante escolhe uma ação na interface do sistema."],
["A conexão transmite","A comunicação sem fio permite enviar o comando da interface até o ESP32."],
["O ESP32 processa","O microcontrolador interpreta o comando recebido e aciona a função programada."],
["A maquete responde","O visitante observa o resultado físico da automação na maquete interativa."]
];
document.querySelectorAll('[data-tech]').forEach(btn=>btn.addEventListener('click',()=>{
 const n=Number(btn.dataset.tech);
 document.querySelectorAll('[data-tech]').forEach(b=>b.setAttribute('aria-selected',String(b===btn)));
 document.querySelector('.tech-index').textContent=`ETAPA 0${n+1} / 04`;
 document.getElementById('tech-title').textContent=techSteps[n][0];
 document.getElementById('tech-desc').textContent=techSteps[n][1];
}));
const memory=document.getElementById('memory-card'),flip=document.getElementById('flip-memory');
function flipMemory(){let on=memory.classList.toggle('is-flipped');flip.setAttribute('aria-pressed',String(on));flip.textContent=on?'↻ Ver fotografia':'↻ Virar card';}
memory.addEventListener('click',flipMemory);flip.addEventListener('click',flipMemory);
const photoDialog=document.getElementById('photo-dialog');
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{
 document.getElementById('photo-large').src=b.dataset.photo;
 document.getElementById('photo-caption').textContent=b.dataset.caption||'Mundo SENAI 2026';
 photoDialog.showModal();
}));
document.querySelector('.photo-close').addEventListener('click',()=>photoDialog.close());
photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)photoDialog.close()});
