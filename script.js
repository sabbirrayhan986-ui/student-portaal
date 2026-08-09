function toggleMenu(){document.getElementById('sideMenu').classList.toggle('open')}
function closeMenu(){document.getElementById('sideMenu').classList.remove('open')}
function openModal(id){const m=document.getElementById(id);if(m)m.classList.add('show')}
function closeModal(){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'))}
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal()}))
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()})
