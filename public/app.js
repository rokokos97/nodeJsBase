console.log('hello from app');
document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove'){
        remove(event.target.dataset.id).then(()=>{
            event.target.closest('li').remove()
        })
    }
})

async function remove(id){
    await fetch(`/${id}`, {method: 'DELETE'})
}