(function () {

    const cpfSalvo = localStorage.getItem("cpf_validado");

    if (!cpfSalvo || cpfSalvo.length !== 11) {
        window.location.replace("../indentificao.html");
        return;
    }

    function formatarCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    const campoCpf = document.getElementById("cpf_usuario");

    if (campoCpf) {
        campoCpf.textContent = "Usuário: " + formatarCPF(cpfSalvo);
    }

    // função sair
    const botaoSair = document.getElementById("btn_sair");

    if (botaoSair) {
        botaoSair.addEventListener("click", function (e) {
            e.preventDefault();

            // remove CPF do localStorage
            localStorage.removeItem("cpf_validado");

            // redireciona para identificação
            window.location.replace("../indentificao.html");
        });
    }

})();
