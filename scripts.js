document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const registerPassword = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const registerEmail = document.getElementById('registerEmail');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const navbarTop = document.getElementById('navbarTop');
    const body = document.body;

    // Validación de formulario de inicio de sesión
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(loginForm) && validateLoginPassword()) {
            alert('Inicio de sesión exitoso');
        }
    });

    // Validación de formulario de registro
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(registerForm) && validatePasswordMatch() && validatePasswordLength()) {
            alert('Registro exitoso');
        }
    });

    // Validación de longitud de contraseña durante la entrada
    registerPassword.addEventListener('input', validatePasswordLength);
    confirmPassword.addEventListener('input', validatePasswordMatch);
    registerEmail.addEventListener('input', validateEmail);
    loginEmail.addEventListener('input', validateEmail);
    loginPassword.addEventListener('input', validateLoginPassword);

    // Función para validar formularios
    function validateForm(form) {
        let isValid = true;
        Array.from(form.elements).forEach((input) => {
            if (input.checkValidity() === false) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });
        return isValid;
    }

    // Validación de coincidencia de contraseñas
    function validatePasswordMatch() {
        const password = registerPassword.value;
        const confirmPasswordValue = confirmPassword.value;
        if (password !== confirmPasswordValue) {
            confirmPassword.classList.add('is-invalid');
            confirmPassword.classList.remove('is-valid');
            return false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
            return true;
        }
    }

    // Validación de longitud mínima de contraseña
    function validatePasswordLength() {
        const password = registerPassword.value;
        if (password.length < 8) {
            registerPassword.classList.add('is-invalid');
            registerPassword.classList.remove('is-valid');
            return false;
        } else {
            registerPassword.classList.remove('is-invalid');
            registerPassword.classList.add('is-valid');
            return true;
        }
    }

    // Validación de longitud mínima de contraseña para inicio de sesión
    function validateLoginPassword() {
        const password = loginPassword.value;
        if (password.length < 8) {
            loginPassword.classList.add('is-invalid');
            loginPassword.classList.remove('is-valid');
            return false;
        } else {
            loginPassword.classList.remove('is-invalid');
            loginPassword.classList.add('is-valid');
            return true;
        }
    }

    // Validación de formato de correo electrónico
    function validateEmail(event) {
        const emailInput = event.target;
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }
    }

    // Evento de teclado para mostrar redes sociales al presionar flecha abajo
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowDown") {
            navbarTop.style.display = 'block'; // Mostrar la barra de navegación
            body.style.overflow = 'hidden'; // Evitar que la página haga scroll
        }
    });

    // Restaurar comportamiento normal al presionar cualquier tecla que no sea ArrowDown
    document.addEventListener('keydown', (event) => {
        if (event.key !== "ArrowDown") {
            navbarTop.style.display = 'none'; // Ocultar la barra de navegación
            body.style.overflow = ''; // Permitir que la página haga scroll nuevamente
        }
    });
});
