const btnCadastrar = document.getElementById("Cadastrar");
        btnCadastrar.addEventListener ("click", () => {
        let nome = document.getElementById("nome").value;
        document.getElementById ("linome").innerHTML = "Nome: " +nome;
});

        btnCadastrar.addEventListener ("click", () => {
        let email = document.getElementById("email").value;
        document.getElementById ("liemail").innerHTML = "Email:" +email;
});
        btnCadastrar.addEventListener ("click", () => {
        let nasc = document.getElementById("nasc").value;
        document.getElementById ("linasc").innerHTML = "Data de Nascimento:" +nasc;
});

