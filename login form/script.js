const signBox = document.querySelector('.sign-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', () => {
    signBox.classList.add('active')
})
loginLink.addEventListener('click', () => {
    signBox.classList.remove('active')
})