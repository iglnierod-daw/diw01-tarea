  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      currentLanguage = savedLanguage;
      cambiarIdioma(savedLanguage);
      cambiarBandera(savedLanguage === 'es' ? 'pt' : 'es');
    } else {
      // Idioma por defecto
      currentLanguage = 'es';
      cambiarBandera('pt');
    }
  });

  document.getElementById('language-btn').addEventListener('click', toggleLanguage);

  let currentLanguage = 'es';

  function toggleLanguage() {
    if (currentLanguage === 'es') {
      cambiarIdioma('pt');
      currentLanguage = 'pt';
      cambiarBandera('es');
    } else {
      cambiarIdioma('es');
      currentLanguage = 'es';
      cambiarBandera('pt');
    }
    localStorage.setItem('language', currentLanguage);
  }

  function cambiarIdioma(idioma) {
    document.querySelectorAll('[data-' + idioma + ']').forEach(el => {
      el.textContent = el.getAttribute('data-' + idioma);
    });
  }

  function cambiarBandera(idioma) {
    const flagImg = document.getElementById('flag-img');
    if (idioma === 'es') {
      flagImg.src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";
      flagImg.alt = "ES";
    } else {
      flagImg.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
      flagImg.alt = "PT";
    }
  }