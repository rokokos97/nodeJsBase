console.log('hello from app');
document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove'){
        remove(event.target.dataset.id).then(()=>{
            event.target.closest('li').remove()
        })
    } else if (event.target.dataset.type === 'edit'){
        const newTitle = prompt('Enter new title')
        if(newTitle){
            edit(event.target.dataset.id, newTitle)
        }
        console.log(event.target.dataset.id)
    }

})

async function remove(id){
    await fetch(`/${id}`, {method: 'DELETE'})
}
async function edit(id , title){
    await fetch(`/${id}`,{method:'PUT', body: title})
    console.log(id,title)
}