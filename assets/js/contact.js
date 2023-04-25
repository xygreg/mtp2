(function () {
  'use strict'

  function valideazaEmail(email) {
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      var emailInput = form.querySelector('#email');
      var submitButton = form.querySelector('button[type="submit"]');
      var wasSubmitted = false;

      function toggleSubmitButton() {
        if (wasSubmitted) {
          submitButton.disabled = !form.checkValidity() || !valideazaEmail(emailInput.value);
        }
      }

      emailInput.addEventListener('input', function () {
        var emailValid = valideazaEmail(emailInput.value);

        if (!emailValid) {
          emailInput.setCustomValidity('Adresa de e-mail nu este validă.');
        } else {
          emailInput.setCustomValidity('');
        }
        // reafiseaza iconita
        emailInput.reportValidity();

        toggleSubmitButton();
      });

      form.addEventListener('input', function () {
        toggleSubmitButton();
      });

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          wasSubmitted = true;
          submitButton.disabled = true;
        } else {
          wasSubmitted = false;
        }

        form.classList.add('was-validated');
        toggleSubmitButton();
      }, false);
    });
})();
