var db = require('./db')


module.exports = function (database) {
    return {
        criaTabela: function () {
            return database.run('CREATE TABLE IF NOT EXISTS corona(Country text, TotalConfirmed int, NewConfirmed int, NewDeaths int, TotalDeaths int, NewRecovered int, TotalRecovered int)')
        },
        removerTabela: function () {
            return database.run('DELETE FROM corona')
        },
        inserirTabela: async function (corona) {
            const resultado = await database.run(`INSERT INTO corona(Country, TotalConfirmed, NewConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered)
            VALUES(?, ?, ?, ?, ?, ?, ?)`, [corona.Country, corona.TotalConfirmed, corona.NewConfirmed, corona.NewDeaths, corona.TotalDeaths, corona.NewRecovered, corona.TotalRecovered]);
            return resultado.lastID;
        },
        paisesMaisInfectados: async function () {
            return database.all('SELECT Country,TotalConfirmed FROM corona ORDER BY TotalConfirmed DESC LIMIT 20')
        },
        paisesComNovosInfectados: async function () {
            return database.all('SELECT Country,NewConfirmed FROM corona ORDER BY NewConfirmed DESC LIMIT 10')
        },
        paisesComMaiorMortalidade: async function () {
            return database.all('SELECT Country,TotalDeaths FROM corona ORDER BY TotalDeaths DESC LIMIT 10')

        },
        paisesComMenorMortalidade: async function () {
            return database.all('SELECT Country,TotalDeaths FROM corona ORDER BY TotalDeaths ASC LIMIT 10')

        },
        recuperados: async function () {
            return database.all('SELECT Country,TotalRecovered FROM corona ORDER BY TotalRecovered DESC LIMIT 10')

        },
        escolherPais: async function (pais) {
            let sql = 'SELECT * FROM corona WHERE Country=?'
            return database.all(sql, pais)
        },
        porcentualDeInfectadosPorPais: async function () {
            return database.all('SELECT(Country), (TotalDeaths * 100) / TotalConfirmed as Mortalidade FROM corona ORDER BY(TotalDeaths * 100) / TotalConfirmed DESC LIMIT 10')

        },
        porcentualDeRecuperacaoPorPais: async function () {
            return database.all('SELECT(Country), (TotalRecovered * 100) / TotalConfirmed as Recuperados FROM corona ORDER BY(TotalRecovered * 100) / TotalConfirmed DESC LIMIT 10')

        }
    }
}
