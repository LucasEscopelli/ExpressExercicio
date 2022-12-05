const fs = require("fs");
module.exports = {

    verificarSeExisteAlunosJson() {
      if (!fs.existsSync("alunos.json")) {
        fs.writeFileSync("alunos.json", "[]");
      }
    },
    
    lerAlunosJson() {
      let alunosLidos = fs.readFileSync("alunos.json");
      let alunos = JSON.parse(alunosLidos);
      return alunos
    },
    
    VerificarConteudoDeAlunosJson(alunos) {
      if (alunos.length > 0) {
        var arrayAlunos = alunos;
      } else {
        var arrayAlunos = [];
      }
      return arrayAlunos;
    }
}
