const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    document.documentElement.classList.add('tema-escuro');
}

function toggleTema() {
    const html = document.documentElement;
    html.classList.toggle('tema-escuro');
    if (html.classList.contains('tema-escuro')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}
