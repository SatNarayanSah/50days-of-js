const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click', () =>{
        removeAvtiveClassess()
        panel.classList.add('active')
    })
})

function removeAvtiveClassess(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}