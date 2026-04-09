// script.js

// 1. WhatsApp Contact Rotation (Balanced distribution)
const contacts = [
    { name: "Flausz", phone: "5521966481835" },
    { name: "Felipe", phone: "5521985922566" },
    { name: "Kauan", phone: "5524992774391" }
];

function getContact() {
    const index = Math.floor(Math.random() * contacts.length);
    return contacts[index];
}

// 2. Product Data (30 Items from Thug Nine - Focusing on Camisetas and Casacos)
const products = [
    { id: 1, name: "Camiseta Thug Basic", category: "Camiseta", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187742/Camiseta-Basic-T9-Patch---Preto-1.jpg" },
    { id: 2, name: "Camiseta Graphic NYC", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187798/Camiseta-Keyring---Preto-1.jpg" },
    { id: 3, name: "Moletom Gola Careca", category: "Casaco", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187895/Moletom-Careca-Elipse---Preto-1.jpg" },
    { id: 4, name: "Casaco Corta-Vento T9", category: "Casaco", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/178945/Corta-Vento-T9---Preto-1.jpg" },
    { id: 5, name: "Calça Cargo Jogger", category: "Calça", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187640/Camiseta-Oversized-Logo-Elipse---Preto-1.jpg" },
    { id: 6, name: "Calça Jeans Loose", category: "Calça", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187648/Camiseta-Oversized-Classic-02---Preto-1.jpg" },
    { id: 7, name: "Óculos Romeo 2", category: "Acessório", vibe: "Basic", image: "https://images.oakley.com/is/image/Oakley/888392100000_frogskins_matte-black-prizm-black_main.png" },
    { id: 8, name: "Shoulder Bag Black", category: "Acessório", vibe: "Graphic", image: "https://images.oakley.com/is/image/Oakley/888392100825_holbrook_matte-black-prizm-sapphire-polarized_main.png" },
    { id: 9, name: "Camiseta Box Fit", category: "Camiseta", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187758/Camiseta-Exclusive---Preto-1.jpg" },
    { id: 10, name: "Hoodie Essential Grey", category: "Casaco", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187902/Moletom-Com-Capuz-Elipse---Preto-1.jpg" },
    { id: 11, name: "Calça Moletom Comfort", category: "Calça", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187814/Camiseta-Golden-Hour---Preto-1.jpg" },
    { id: 12, name: "Corrente Prata 925", category: "Acessório", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187742/Camiseta-Basic-T9-Patch---Preto-1.jpg" },
    { id: 13, name: "Camiseta Estampa Skull", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187532/Camiseta-Pez---Off-White-1.jpg" },
    { id: 14, name: "Jaqueta Puffer Dark", category: "Casaco", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/178945/Corta-Vento-T9---Preto-1.jpg" },
    { id: 15, name: "Boné Snapback T9", category: "Acessório", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187750/Camiseta-Thugstar---Preto-1.jpg" },
    { id: 16, name: "Moletom Canguru T9", category: "Casaco", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187902/Moletom-Com-Capuz-Elipse---Preto-1.jpg" },
    { id: 17, name: "Beach Short T9", category: "Calça", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187782/Camiseta-Ready-To-Die---Preto-1.jpg" },
    { id: 18, name: "Regata Basquete Bisonix", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187798/Camiseta-Keyring---Preto-1.jpg" },
    { id: 19, name: "Camiseta Golden Hour", category: "Camiseta", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187806/Camiseta-Golden-Hour---Off-White-1.jpg" },
    { id: 20, name: "Camiseta Dobermann", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187774/Camiseta-Dobermann---Preto-1.jpg" },
    { id: 21, name: "Camiseta Ready To Die", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187782/Camiseta-Ready-To-Die---Preto-1.jpg" },
    { id: 22, name: "Moletom Exclusive", category: "Casaco", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187895/Moletom-Careca-Elipse---Preto-1.jpg" },
    { id: 23, name: "Short Runner Thug", category: "Calça", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187640/Camiseta-Oversized-Logo-Elipse---Preto-1.jpg" },
    { id: 24, name: "Óculos Juliet", category: "Acessório", vibe: "Basic", image: "https://images.oakley.com/is/image/Oakley/888392100825_holbrook_matte-black-prizm-sapphire-polarized_main.png" },
    { id: 25, name: "Bag Transversal T9", category: "Acessório", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187758/Camiseta-Exclusive---Preto-1.jpg" },
    { id: 26, name: "Camiseta Premium Heavy", category: "Camiseta", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187648/Camiseta-Oversized-Classic-02---Preto-1.jpg" },
    { id: 27, name: "Camiseta Urban", category: "Camiseta", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187532/Camiseta-Pez---Off-White-1.jpg" },
    { id: 28, name: "Jaqueta College Board", category: "Casaco", vibe: "Graphic", image: "https://thugnine.vteximg.com.br/arquivos/ids/178945/Corta-Vento-T9---Preto-1.jpg" },
    { id: 29, name: "Calça Moletom T9", category: "Calça", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187814/Camiseta-Golden-Hour---Preto-1.jpg" },
    { id: 30, name: "Gorro T9 Logo", category: "Acessório", vibe: "Basic", image: "https://thugnine.vteximg.com.br/arquivos/ids/187532/Camiseta-Pez---Off-White-1.jpg" }
];

// 3. Application State
let cart = [];
let queryFilters = {
    category: 'all',
    vibe: 'all',
    size: 'all'
};
let cardSelectedSizes = {}; // Store explicit size selections on cards

// 4. Dom Elements
const grid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartFooter = document.getElementById('cart-footer');

// 5. Functions
function renderProducts(filtered = products) {
    if (!grid) return;
    
    // Determine the default size derived from the quiz
    const defaultQuizSize = queryFilters.size !== 'all' ? queryFilters.size : null;

    grid.innerHTML = filtered.map(product => {
        const sizes = ['P', 'M', 'G', 'GG', 'XG', '2G', '3G'];
        const activeSize = cardSelectedSizes[product.id] || defaultQuizSize;
        
        let sizeSelectorHtml = '';
        if(product.category === 'Camiseta' || product.category === 'Casaco') {
            const sizeOptions = sizes.map(s => 
                `<button onclick="selectSize(${product.id}, '${s}')" id="size-btn-${product.id}-${s}" class="${activeSize === s ? 'bg-[#3b82f6] text-white border-[#3b82f6]' : 'bg-transparent text-brand-gray border-white/20'} border px-2 h-8 flex items-center justify-center rounded text-[10px] font-bold hover:border-[#3b82f6] transition-all">${s}</button>`
            ).join('');
            
            sizeSelectorHtml = `
            <div class="mb-4 mt-2">
                <div class="flex flex-wrap gap-2">
                    ${sizeOptions}
                </div>
            </div>`;
        } else {
            sizeSelectorHtml = `<div class="mb-4 h-8 flex items-center text-[10px] text-brand-gray uppercase tracking-widest font-bold">Tamanho Único</div>`;
        }

        return `
        <div class="product-card bg-brand-dark border border-white/5 rounded-2xl overflow-hidden group flex flex-col">
            <div class="product-image-container relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3 z-10">
                    <span class="bg-brand-blue/80 backdrop-blur-sm text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest text-white">
                        ${product.category}
                    </span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h4 class="text-md font-bold uppercase leading-tight mb-1 text-white">${product.name}</h4>
                    ${sizeSelectorHtml}
                </div>
                <div class="flex flex-col gap-2 mt-auto">
                    <button onclick="addToCart(${product.id})" class="w-full py-3 bg-white text-black font-black uppercase text-xs tracking-wider hover:bg-[#3b82f6] hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-2" style="font-family: 'Impact', 'Arial Black', sans-serif;">
                        ADICIONAR C/ TAMANHO
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <p class="text-[9px] text-brand-gray/60 uppercase tracking-widest font-bold text-center mt-1">Preço via WhatsApp</p>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function selectSize(productId, size) {
    cardSelectedSizes[productId] = size;
    const sizes = ['P', 'M', 'G', 'GG', 'XG', '2G', '3G'];
    sizes.forEach(s => {
        const btn = document.getElementById(`size-btn-${productId}-${s}`);
        if(btn) {
            if(s === size) {
                btn.className = "bg-[#3b82f6] text-white border-[#3b82f6] border px-2 h-8 flex items-center justify-center rounded text-[10px] font-bold transition-all";
            } else {
                btn.className = "bg-transparent text-brand-gray border-white/20 border px-2 h-8 flex items-center justify-center rounded text-[10px] font-bold hover:border-[#3b82f6] transition-all";
            }
        }
    });
}

function filterFromMenu(category) {
    if(category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
    queryFilters.category = category; // Update state casually
    document.getElementById('colecao').scrollIntoView({ behavior: 'smooth' });
}

function setQuiz(key, value) {
    queryFilters[key] = value;
    
    // Auto-finish if Category is Acessório
    if(key === 'category' && value === 'Acessório') {
        const filtered = products.filter(p => p.category === 'Acessório');
        renderProducts(filtered);
        closeICPModal();
        setTimeout(() => {
            document.getElementById('colecao').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('quiz-step-1').classList.remove('hidden');
        }, 500);
        return;
    }
    
    const currentStepNum = key === 'category' ? 1 : (key === 'vibe' ? 2 : 3);
    
    if (currentStepNum < 3) {
        document.getElementById(`quiz-step-${currentStepNum}`).classList.add('hidden');
        document.getElementById(`quiz-step-${currentStepNum + 1}`).classList.remove('hidden');
    } else {
        const filtered = products.filter(p => 
            (queryFilters.category === 'all' || p.category === queryFilters.category) &&
            (queryFilters.vibe === 'all' || p.vibe === queryFilters.vibe)
        );
        renderProducts(filtered);
        
        closeICPModal();
        
        // Scroll to catalog and reset quiz silently
        setTimeout(() => {
            document.getElementById('colecao').scrollIntoView({ behavior: 'smooth' });
            // Reset quiz steps for future use (if any)
            document.getElementById('quiz-step-3').classList.add('hidden');
            document.getElementById('quiz-step-1').classList.remove('hidden');
        }, 500);
    }
}

function closeICPModal(isSkip = false) {
    const modal = document.getElementById('icp-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500);

    if (isSkip) {
        queryFilters = { category: 'all', vibe: 'all', size: 'all' };
        renderProducts();
    }
}

function filterCatalog(type) {
    const filtered = type === 'all' ? products : products.filter(p => p.category === type);
    renderProducts(filtered);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    
    let size = "Único";
    if(product.category === 'Camiseta' || product.category === 'Casaco') {
        size = cardSelectedSizes[id] || (queryFilters.size !== 'all' ? queryFilters.size : null);
        if(!size) {
            alert("⚠️ Selecione o tamanho antes de adicionar essa peça ao carrinho.");
            return;
        }
    }
    
    cart.push({...product, selectedSize: size, cartId: Date.now() + Math.random()});
    updateCartUI();
    document.getElementById('cart-modal').classList.remove('hidden');
}

function updateCartUI() {
    if (cartCount) cartCount.innerText = cart.length;
    
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-brand-gray text-center italic mt-10">Seu carrinho está vazio.</p>';
        cartFooter.classList.add('hidden');
    } else {
        cartFooter.classList.remove('hidden');
        cartItems.innerHTML = cart.map((item) => `
            <div class="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/10 group relative">
                <img src="${item.image}" class="w-16 h-20 object-cover rounded-lg">
                <div class="flex-grow">
                    <h5 class="font-bold uppercase text-sm text-white pr-6">${item.name}</h5>
                    <p class="text-[10px] mt-1 uppercase font-bold tracking-widest text-[#3b82f6]">Tamanho: ${item.selectedSize}</p>
                    <button onclick="removeFromCart('${item.cartId}')" class="absolute top-4 right-4 text-red-500 hover:text-red-400 transition-colors p-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function checkout() {
    const selector = document.getElementById('attendant-selector');
    let contact;
    
    if(selector && selector.value !== 'random') {
        contact = contacts.find(c => c.name === selector.value);
    } else {
        contact = getContact(); // Returns random contact
    }
    
    let message = `Fala ${contact.name}! Salve!\nVim pelo site da *Board Session* e já separei as peças do meu kit:\n\n`;
    
    cart.forEach(item => {
        message += `🔥 *${item.name}*\n🏷️ Tamanho: ${item.selectedSize}\n\n`;
    });
    
    message += `Consegue me confirmar os tamanhos no estoque e passar os valores para a gente fechar?`;
    
    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});
