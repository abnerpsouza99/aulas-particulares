module.exports = {
    age: function(timestamp){
        // Deve-se pegar a data de hoje
        const today = new Date()
        // Utilizando construtor pra criar a data
        const birthDate = new Date(timestamp)

        // Guardar o valor da idade em variável
        let age = today.getFullYear() - birthDate.getFullYear()
        // Guardar o valor do mês de nascimento
        const month = today.getMonth() - birthDate.getMonth()
        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

        return age
    }

}