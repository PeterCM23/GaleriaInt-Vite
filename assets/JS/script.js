const gallery = document.querySelector('.gallery')
const modal = document.querySelector('.modal')
const modalContent = document.getElementById('modalImage')
const closeBtn = document.querySelector('.close')

const images = [
  "imagenes/Barry Allen.jpg",
  "imagenes/Bruce Wayne.jpg",
  "imagenes/Clark Kent.jpg",
  "imagenes/Diana Prince.jpg",
  "imagenes/Frank Castle.jpg",
  "imagenes/Hal Jordan.jpg",
  "imagenes/Natasha Romanoff.jpg",
  "imagenes/Ororo Munroe.jpg",
  "imagenes/Peter Parker.jpg",
  "imagenes/Scott Lang.jpg",
  "imagenes/Wade Wilson.jpg",
  "imagenes/Wanda Maximoff.jpg",
];

images.forEach(imageSrc =>{
    const img = document.createElement('img')
    img.src = imageSrc
    img.addEventListener('click', ()=>openModal(imageSrc))
    gallery.appendChild(img)
})

function openModal(imageSrc){
    modalContent.src = imageSrc
    modal.style.display = 'block'
}
function closeModal(){
    modal.style.display = 'none'
}
closeBtn.addEventListener('click',closeModal)

window.addEventListener('click',(event)=>{
    if(event.target === modal){
        closeModal()    
}
})

modalContent.addEventListener('click',()=>{
    closeModal()
})