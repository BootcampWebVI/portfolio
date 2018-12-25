export function setForm() {

    const userInformation = new Object()
    let objectFormContact = document.querySelector('#formContact')
    let objectInputName = document.querySelector('#name')
    let objectInputEmail = document.querySelector('#email')
    let objectInputPhone = document.querySelector('#phone')
    let objectTextMessage = document.querySelector('#message')
    let objectSelectSelection = document.querySelector('#selection')
    let objectOtherSelection = document.querySelector('.other-selection')


    objectFormContact.addEventListener('submit', validateForm.bind(this))
    objectSelectSelection.addEventListener('change', validateSelection.bind(this))

    function validateForm(evn) {
        evn.preventDefault()
        saveInformation()
    }


    function validateSelection(evn) {
        evn.preventDefault()

        if (objectSelectSelection.value === 'Otro') {
            objectOtherSelection.classList.remove('hide');
        } else {
            objectOtherSelection.classList.add('hide');
        }
    }

    function saveInformation() {
        userInformation.name = objectInputName.value
        userInformation.email = objectInputEmail.value
        userInformation.phoneNumber = objectInputPhone.value
        userInformation.message = objectTextMessage.value
        userInformation.question = objectSelectSelection.value === 'Otro' && objectOtherSelection.value.length > 0 ? objectOtherSelection.value : objectSelectSelection.value

        objectFormContact.reset()
        let objectFooterMessage = document.querySelector('form footer')
        objectFooterMessage.classList.remove('hide')
        setTimeout(function () {
            objectFooterMessage.classList.add('hide')
        }, 3000)
    }
}