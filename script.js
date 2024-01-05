function load() {
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
   
    function atualizarTempo() {
        let data = new Date()
        let hora = data.getHours()
        let minuto = data.getMinutes()
        let segundo = data.getSeconds()
    
        msg.innerHTML = 
            `
                <p> São exatamente ${hora} hrs: ${minuto} min: ${segundo} seg. </p>
            `;

        if (hora >= 0 && hora < 12) {
            img.src = "img/morning.jpg";
            document.body.style.background = "#d59d66"
        } else if (hora >= 12 && hora < 18) {
            //boa tarde//
            img.src = "img/evening.jpg";
            document.body.style.background = "#ae5e34" 
        } else {
            //boa noite//
            img.src = "img/night.jpg";
            document.body.style.background = "#462915"
        }
    }

    // Chamar inicialmente para exibir a hora na página carregada
    atualizarTempo();

    // Atualizar a cada segundo (1000 milissegundos)
    setInterval(atualizarTempo, 1000);
}

// Chame a função load quando o corpo da página estiver carregado
document.body.onload = load;
