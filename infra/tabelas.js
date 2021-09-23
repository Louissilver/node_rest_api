class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarPets();
  }

  criarPets() {
    const sql = `
    CREATE TABLE IF NOT EXISTS caes (
      id int NOT NULL AUTO_INCREMENT, 
      nome varchar(30) NOT NULL, 
      raca varchar(30) NOT NULL,
      porte varchar(30) NOT NULL,
      sexo varchar(30) NOT NULL,
      status varchar(30) NOT NULL, 
      observacoes text, 
      PRIMARY KEY(id)
      )`;

    this.conexao.query(sql, (err) => {
      if (err) {
        console.log("Ocorreu um erro: " + err);
      } else {
        console.log("Tabela de Cães criada com sucesso!");
      }
    });
  }
}

module.exports = new Tabelas;