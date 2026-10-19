
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    

    const bgColors = {
        success: 'bg-green-100 border-green-200 text-green-800',
        error: 'bg-red-100 border-red-200 text-red-800',
        info: 'bg-brand-100 border-brand-200 text-brand-900'
    };
    const iconType = {
        success: 'ph-check-circle',
        error: 'ph-warning-circle',
        info: 'ph-info'
    };

    const classes = bgColors[type] || bgColors.info;
    const icon = iconType[type] || iconType.info;

    toast.className = `flex items-center gap-3 px-6 py-4 rounded-xl border shadow-lg transform transition-all duration-300 translate-x-full opacity-0 ${classes}`;
    toast.innerHTML = `
        <i class="ph ${icon} text-2xl"></i>
        <p class="text-sm font-medium">${message}</p>
    `;

    container.appendChild(toast);


    requestAnimationFrame(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


function addToCart(productName, price) {
    showToast(`${productName} adicionado ao carrinho!`, 'success');
}

function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('nome').value;
    showToast(`Obrigado pelo contato, ${name}! Responderemos em breve.`, 'success');
    e.target.reset();
}


function openModal(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector('div');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector('div');
    
    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}


function toggleAuthMode(mode) {
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');

    if (mode === 'cadastro') {
        formLogin.classList.add('hidden');
        formCadastro.classList.remove('hidden');
        formCadastro.classList.add('block');
        title.innerText = 'Crie sua conta';
        subtitle.innerText = 'Junte-se à Pura Essência.';
    } else {
        formCadastro.classList.add('hidden');
        formCadastro.classList.remove('block');
        formLogin.classList.remove('hidden');
        formLogin.classList.add('block');
        title.innerText = 'Bem-vinda de volta';
        subtitle.innerText = 'Acesse sua conta para continuar.';
    }
}

function handleLogin(e) {
    e.preventDefault();
    closeModal('login-modal');
    showToast('Login realizado com sucesso!', 'success');
}

function handleRegister(e) {
    e.preventDefault();
    closeModal('login-modal');
    showToast('Conta criada com sucesso! Bem-vinda.', 'success');
}


window.addEventListener('click', (e) => {
    const modal = document.getElementById('login-modal');
    if (e.target === modal) {
        closeModal('login-modal');
    }
});
