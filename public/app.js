console.log('hello from app');
document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove'){
        remove(event.target.dataset.id).then(()=>{
            event.target.closest('li').remove()
        })
    }
    if (event.target.dataset.type === 'edit') {

        const editNote = event.target.closest("li")
        const id = event.target.dataset.id
        const title = event.target.dataset.title
        const initialHTML = editNote.innerHTML

        editNote.innerHTML = `
      <input type="text" value="${title}">
      <div>
        <button class="btn btn-success" data-type="save">Save</button>
        <button class="btn btn-danger" data-type="cancel">Cancel</button>
      </div>
    `
        editNote.addEventListener("click", editNoteListener)
        function editNoteListener ({ target }){
            if(target.dataset.type === "cancel"){
                editNote.innerHTML = initialHTML;
            }
            if(target.dataset.type === "save"){
                const newTitle = editNote.querySelector('input').value;
                console.log(typeof newTitle);
                if (newTitle.length > 0 ) {
                    update({ id, title: newTitle }).then(() => {
                        editNote.innerHTML = initialHTML;
                        editNote.querySelector("span").innerText = newTitle;
                        editNote.querySelector('[data-type=edit]').dataset.title = newTitle;
                    })
                } else {
                    alert("Title is required")
                }

            }
        }
    }
})

async function remove(id){
    await fetch(`/${id}`, {method: 'DELETE'})
}
async function update(newNote) {
    await fetch(`/${newNote.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
    })
}
