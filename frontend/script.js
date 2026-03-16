function cadastrarAluno() {
    fetch("http://127.0.0.1:5000/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: "Lucas",
            idade: 23,
            plano: "Mensal"
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("Aluno cadastrado!")
        })
}