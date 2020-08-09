document.querySelector('#add-time')//Procurar o botão
.addEventListener('click', cloneField)//Quando clicar no botão

function cloneField(){//executar uma ação
    
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)//duplicar os campos. Que campos?
    
    const fields = newFieldsContainer.querySelectorAll('input')//limpar os campos. Que campos?

    fields.forEach(function (field) {
        field.value=""
    })//forma bizarra de FOR
        

    document.querySelector('#schedule-items').appendChild(newFieldsContainer)//colocar na pagina. Onde?
}
    

