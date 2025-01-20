const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    // Validación del nombre
    const fromName = document.getElementById('from_name').value;
    if (!fromName) {
      alert('Por favor, ingresa tu nombre.');
      return;
    }

    // Validación del correo electrónico
    const email = document.getElementById('email_id').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    btn.value = 'Sending...';

    // Define el Service ID y el Template ID
    const serviceID = 'default_service'; // Este es tu Service ID por defecto
    const templateID = 'template_do8fjdw'; // Este es el Template ID de tu plantilla creada

    // Usa sendForm correctamente con los IDs definidos
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('¡Mensaje enviado!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
});
