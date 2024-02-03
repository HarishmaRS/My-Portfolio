function closeNavbar() {
    document.getElementById('navbarContent').classList.remove('show');

}
function myPortfolio(){
    alert('The page you currently viewing is the portfolio page created by using HTML, CSS, Bootstrap, JavaScript. Thank you!!!')
}

// Initialize tooltip 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)})


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