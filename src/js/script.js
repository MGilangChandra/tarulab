const toggleBtn = document.getElementById('openOrClose');
const buttonBar = document.getElementById('buttonBar');
const icon = toggleBtn.querySelector('box-icon');
const links = buttonBar.querySelectorAll('a');

let isOpen = false;

function closeMenu() {
    buttonBar.classList.remove('top-[68px]');
    buttonBar.classList.add('top-full');
    icon.style.transform = 'rotate(0deg)';
    document.body.classList.remove('overflow-hidden');
    isOpen = false;
}

toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        buttonBar.classList.remove('top-full');
        buttonBar.classList.add('top-[68px]');
        icon.style.transform = 'rotate(225deg)';
        icon.style.transition = 'transform 0.3s ease';
        document.body.classList.add('overflow-hidden');
    } else {
        closeMenu();
    }
});

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});
