function executarAcao() {
    const output = document.getElementById('statusOutput');
    output.innerText = "Ação executada com sucesso dentro do WebApp!";
    
    // Se houver ponte Nativa/WebView ativa:
    if (window.AndroidInterface) {
        window.AndroidInterface.showToast("Integração Nativa Ativa!");
    }
