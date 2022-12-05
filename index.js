const express = require("express");
const app = express();
const fs = require("fs");
const funcoesFs = require('./funcoesParaFs')
const zeroEsquerda = require('./funcaoParaZerosAEsquerda')

app.use(express.json());

let ids;

funcoesFs.verificarSeExisteAlunosJson();

let alunos = funcoesFs.lerAlunosJson();

let arrayAlunos = funcoesFs.VerificarConteudoDeAlunosJson(alunos)

console.log(arrayAlunos)

app.get("/listar-clientes", (req, res) => {
  console.log(arrayAlunos);
  res.end();
});

app.get("/listar-clientes/?:id", (req, res) => {
  const aluno = arrayAlunos.find((cadaAluno) => cadaAluno.id == req.params.id);
  console.log(aluno);
  res.end();
});

app.post("/cadastro-cliente", (req, res) => {
  if (arrayAlunos.length < 1) {
    ids = 1;
  } else {
    console.log(arrayAlunos)
    ids = parseInt(arrayAlunos[arrayAlunos.length - 1].id, 10) + 1;
  }

  const aluno = {
    id: zeroEsquerda.idZerosEsquerda(ids, 4),
    cpf: req.body.cpf,
    nome: req.body.nome,
    cidade: req.body.cidade,
    dataNascimento: req.body.dataNascimento,
  };

  arrayAlunos.push(aluno);
  fs.writeFileSync("./alunos.json", JSON.stringify(arrayAlunos), {
    encoding: "utf-8",
  });
  console.log(arrayAlunos);
  res.end();
});

app.delete("/excluir-cliente/:id", (req, res) => {
  index = arrayAlunos.findIndex((aluno) => aluno.id == req.params.id);

  arrayAlunos.splice(index, 1);
  fs.writeFileSync("./alunos.json", JSON.stringify(arrayAlunos), {
    encoding: "utf-8",
  });
  console.log(arrayAlunos);
  res.end();
});

app.listen(3000);
