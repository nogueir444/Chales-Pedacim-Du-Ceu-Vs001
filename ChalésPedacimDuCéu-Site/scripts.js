// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Funções JavaScript específicas podem ser adicionadas aqui
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});
