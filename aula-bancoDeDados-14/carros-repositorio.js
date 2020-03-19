var db = require('./db')

module.exports = function (database) {
    return {
        criaTabela: function () {
            return database.run('CREATE TABLE IF NOT EXISTS carros(nome text, cor text, ano int, valor int)');
        },
        insereCarro: async function (carro) {
            const resultado = await database.run(`INSERT INTO carros(nome, cor, ano, valor) VALUES(?, ?, ?, ?)`, [carro.nome, carro.cor, carro.ano, carro.valor]);
            return resultado.lastID;
        },
        mostraCarro: async function () {
            let sql = `SELECT * FROM carros`;
            const rows = await database.all(sql);
            return rows.map((row) => {
                return {
                    nome: row.nome,
                    cor: row.cor,
                    ano: row.ano,
                    valor: row.valor,
                }
            });
        },
        removeCarro: function (nome) {
            return database.run('DELETE FROM carros WHERE nome=?', nome)
        },
        //maior valor
        maiorValor: async function () {
            let sql = 'SELECT MAX (valor) as valor FROM carros'
            const rows = await database.all(sql)
            return rows.map((row) => {
                return {
                    valor: row.valor,
                }


            })
        },
        menorValor: async function () {
            let sql = 'SELECT MIN (valor) as valor FROM carros'
            const rows = await database.all(sql)
            return rows.map((row) => {
                return {
                    valor: row.valor,
                }
            })
        },
        ordernarPorPreco: async function () {
            let sql = 'SELECT valor FROM carros ORDER BY valor asc'
            const rows = await database.all(sql)
            return rows.map((row) => {
                return {
                    valor: row.valor,
                }
            })

        },
        contarCarro: async function () {
            let sql = 'SELECT COUNT(*) as quantidade FROM carros'
            const rows = await database.all(sql)
            return rows[0]
        },
        pesquisarPorCor: async function (cor) {
            let sql = 'SELECT * FROM carros WHERE cor=?'
            return database.all(sql, cor)
        },
        pesquisarPorAno: async function (ano) {
            let sql = 'SELECT * FROM carros WHERE ano=?'
            return database.all(sql, ano)
        },
        pesquisarPorAnoMaior: async function (resposta) {
            let sql = 'SELECT * FROM carros WHERE ano > ?'
            return database.all(sql, resposta)
        },
        pesquisarPorAnoMenor: async function (resposta1) {
            let sql = 'SELECT * FROM carros WHERE ano < ?'
            return database.all(sql, resposta1)
        }
    }
}