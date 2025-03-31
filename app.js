const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4'];

let index = 0;
nextButton.addEventListener('click', function () {
    index += 1
    video.src = movieList[index];

    if (index === 3) {
        index = -1;
    }
})


// Função para verificar se o elemento está visível na viewport autoBlur
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && // Parte superior do elemento está dentro da viewport
        rect.bottom > 0 // Parte inferior do elemento está dentro da viewport
    );
}

// Função para ativar/desativar o desfoque dinamicamente
function activateBlurEffect() {
    const elements = document.querySelectorAll('.autoBlur');

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.filter = 'blur(0)'; // Remove o desfoque quando visível
        } else {
            element.style.filter = 'blur(40px)'; // Aplica o desfoque quando fora da viewport
        }
    });
}

// Configura o desfoque inicial
document.querySelectorAll('.autoBlur').forEach((element) => {
    element.style.filter = 'blur(40px)'; // Aplica o desfoque inicial
});

// Adiciona o evento de scroll para ativar/desativar o desfoque
window.addEventListener('scroll', activateBlurEffect);

// Chama a função ao carregar a página para verificar elementos já visíveis
activateBlurEffect();


// Função para verificar se o elemento está visível na viewport no autoDisplay
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && // Parte superior do elemento está dentro da viewport
        rect.bottom > 0 // Parte inferior do elemento está dentro da viewport
    );
}

// Função para ativar/desativar a animação de exibição
function handleAutoDisplay() {
    const elements = document.querySelectorAll('.autoDisplay');

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible'); // Adiciona a classe para mostrar o elemento
        } else {
            element.classList.remove('visible'); // Remove a classe para esconder o elemento
        }
    });
}

// Adiciona o evento de scroll para ativar/desativar a visibilidade
window.addEventListener('scroll', handleAutoDisplay);

// Chama a função ao carregar a página para verificar elementos já visíveis
handleAutoDisplay();
