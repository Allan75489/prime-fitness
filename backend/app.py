from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend funcionando!"

@app.route("/criar")
def criar():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO alunos (nome, idade, plano) VALUES (?, ?, ?)",
        ("Pedro", 22, "Mensal")
    )

    conn.commit()
    conn.close()

    return "Aluno criado!"

@app.route("/alunos")
def listar_alunos():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM alunos")
    alunos = cursor.fetchall()

    conn.close()

    return jsonify(alunos)

@app.route("/alunos", methods=["POST"])
def adicionar_aluno():
    dados = request.get_json()

    nome = dados["nome"]
    idade = dados["idade"]
    plano = dados["plano"]

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO alunos (nome, idade, plano) VALUES (?, ?, ?)",
        (nome, idade, plano)
    )

    conn.commit()
    conn.close()

    return {"mensagem": "Aluno cadastrado com sucesso"}

if __name__ == "__main__":
    app.run(debug=True)