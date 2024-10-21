document.addEventListener('DOMContentLoaded', () => {
const button = document.querySelector('button#btn')
const input = document.querySelector('input#task')
const taskList = document.querySelector('ul#task-list')
const tarefas = []
const adicionarTarefa = () =>{
    const task = input.value.trim().toLowerCase()
    if(input.value.trim() == ''){
        alert('Por favor, adicione alguma tarefa !')

    }else if(inLista(task)){
        alert('Erro. Tarefa ja adicionada na lista')
        input.value = ''
        input.focus()
    }else{
            tarefas.push(task)
            const item = document.createElement('li')
            taskList.appendChild(item)
            item.textContent = task
            input.value = ''

            const btnEdit = document.createElement('button')
            btnEdit.classList.add('btnEdit')
            btnEdit.innerHTML = '<i class="fas fa-check"></i>'   
            btnEdit.addEventListener('click', () => {
                item.classList.toggle('completed')
            }) 
            const btnRemove = document.createElement('button')
            btnRemove.setAttribute('class', 'btnRemove')
            btnRemove.innerHTML = '<i class="fa-solid fa-trash"></i>'
            btnRemove.addEventListener('click', () => {
                taskList.removeChild(item)
                tarefas.splice(tarefas.indexOf(task), 1)
            })

            const btnContainer = document.createElement('div')
            btnContainer.style.display = 'flex'
            btnContainer.style.marginLeft = 'auto'
            btnContainer.style.gap = '2px'

        btnContainer.appendChild(btnEdit)
        btnContainer.appendChild(btnRemove)
        item.appendChild(btnContainer)
    }
}

    button.addEventListener('click', adicionarTarefa)
    input.addEventListener('keydown', (evento) => {
        if(evento.key === 'Enter'){
            evento.preventDefault()
            adicionarTarefa()
        }
    })

const inLista = (l) => {
    return tarefas.includes(l)
}
})

