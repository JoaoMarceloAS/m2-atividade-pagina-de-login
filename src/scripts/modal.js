function showModalRegister() {

    const localModal = document.querySelector('#main')
    const linkRegister = document.querySelector('#registerBtn')


    linkRegister.addEventListener('click', () => {

        const theModal = createModal()
        localModal.appendChild(theModal)
        theModal.showModal()
        closeMyModal()

    })
}

function createModal() {

    const dialog = document.createElement('dialog')
    dialog.id = 'modalRegister'

    const div = document.createElement('div')
    div.classList.add = 'topo-modal'

    const h2 = document.createElement('h2')
    h2.innerText = 'Crie sua conta'

    const span = document.createElement('span')
    span.innerText = 'X'
    span.id = 'closeModal'

    const form = document.createElement('form')

    const pEmail = document.createElement('p')
    pEmail.innerText = 'Email:'

    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.placeholder = 'Insira seu email'

    const pPassword = document.createElement('p')
    pPassword.innerText = 'Senha:'

    const inputPassword = document.createElement('input')
    inputPassword.placeholder = 'Crie uma senha'
    inputPassword.type = 'password'

    const inputSubmit = document.createElement('input')
    inputSubmit.type = 'submit'
    inputSubmit.value = 'Criar conta'
    inputSubmit.id = 'submitRegister'

    dialog.append(div, form)
    div.append(h2, span)
    form.append(pEmail, inputEmail, pPassword, inputPassword, inputSubmit)

    return dialog;

}

function closeMyModal() {

    const btnClose = document.querySelector('#closeModal')
    const modalContainer = document.querySelector('#modalRegister')
    const btnSubmit = document.querySelector('#submitRegister')

    btnClose.addEventListener('click', () => {
        modalContainer.remove()
    })

    btnSubmit.addEventListener('click', () => { 
        modalContainer.remove()
    })

}

showModalRegister()