module.exports = {
    contadorDeNumerosDaConta: 3,
    banco: {
        nome: "Cubos Bank",
        numero: 123,
        agencia: '0001',
        senha: "Cubos123Bank",
    },
    contas: [
        {
            numeroConta: 1,
            saldo: 1500,
            usuario: {
                nome: "Foo Barrrr",
                cpf: "00011122233",
                data_nascimento: "2021-03-15",
                telefone: "71999998888",
                email: "foo@bar.com",
                senha: "1234"
            }
        },
        {
            numeroConta: 2,
            saldo: 1000,
            usuario: {
                nome: "Foo Bar 2",
                cpf: "00011122234",
                data_nascimento: "2021-03-15",
                telefone: "71999998888",
                email: "foo@bar2.com",
                senha: "12345"
            }
        }
    ],
    saques: [
    ],
    depositos: [
    ],
    transferencias: [
    ],
}