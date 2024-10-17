// Array de usuários para simulação
const usuarios = [
    { email: "victorferreirarocha03@gmail.com", senha: "senha123" }
];

// Função de login
function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        mensagemErro.textContent = ''; // Limpa a mensagem de erro
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('loja').style.display = 'grid'; // Mostra a loja
    } else {
        mensagemErro.textContent = 'E-mail ou senha incorretos.';
    }
}

// Adiciona ao carrinho (exemplo simples)
const carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    carrinhoElement.innerHTML = ''; // Limpa o carrinho

    if (carrinho.length === 0) {
        carrinhoElement.innerHTML = '<p>Carrinho vazio.</p>';
        document.getElementById('finalizar-compra').style.display = 'none'; // Esconde o botão
    } else {
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
            carrinhoElement.appendChild(li);
        });
        document.getElementById('finalizar-compra').style.display = 'block'; // Mostra o botão
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    // Aqui você pode adicionar a lógica de pagamento, etc.
}
