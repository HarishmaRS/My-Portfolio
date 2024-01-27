function closeNavbar() {
    document.getElementById('navbarContent').classList.remove('show');

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEPNZbPhlshzHmgtmRDnHw6d-jlW60dkzlHpisG1H2B7Yo4bADFTnSkaGqKn2V4EvB4Q/exec'
        const form = document.forms['contact_form']
        const msg = document.getElementById('msg');

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Thank you for your message!"
                    setTimeout(function() {
                        msg.innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })