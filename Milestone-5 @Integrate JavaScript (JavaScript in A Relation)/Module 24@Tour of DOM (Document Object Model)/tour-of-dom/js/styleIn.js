const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.backgroundColor = 'green';
    section.style.paddingLeft = '10px';
}

const section = document.getElementById('fruits-list');
section.classList.add('bg-color');