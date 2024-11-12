const button = document.getElementById('ref_btn') as HTMLButtonElement
const refrence = document.getElementById('ref') as HTMLElement

button.addEventListener('click' ,()=>{
    if(refrence.style.display === 'none'){
        refrence.style.display = 'block'
    }else{
        refrence.style.display = 'none'
    }
})

