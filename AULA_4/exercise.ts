// Criar uma função que receber review dos usuários.
// Usamos narrowing para receber o dado
// Boolean or number
// Números de 1 a 5
// Mensagem pra cada uma das notas
// Se receber false (usuário não deixa review), prever retorno pra esse caso

function getUserReview(nota?: number | boolean) {

    if (nota === 0 || nota! >= 6) {
        return console.log("O review deve ser entre 1 e 5 estrelas")
    }

    if (!nota) {
        return console.log('Usuário não avaliou!')
     }

    switch(nota) {
        case 1: 
            console.log(`Review com ${nota} estrela. Iremos nos esforçar da próxima vez`)
            break
        case 2: 
            console.log(`Review com ${nota} estrelas. Prometemos melhorar.`)
            break
        case 3: 
            console.log(`Review com ${nota} estrelas. Obrigado pela avaliação.`)
            break
        case 4: 
            console.log(`Review com ${nota} estrelas. Que bom que gostou!`)
            break
        case 5: 
            console.log(`Review com ${nota} estrelas. Wow! Ficamos imensamente agradecidos!`)
            break
    }
    
}

getUserReview() // Usuário não avaliou!
getUserReview(0) // O review deve ser entre 1 e 5 estrelas
getUserReview(1) // Review com 1 estrela. Iremos nos esforçar da próxima vez
getUserReview(2) // Review com 2 estrelas. Prometemos melhorar.
getUserReview(3) // Review com 3 estrelas. Obrigado pela avaliação.
getUserReview(4) // Review com 4 estrelas. Que bom que gostou!
getUserReview(5) // Review com 5 estrelas. Wow! Ficamos imensamente agradecidos!
getUserReview(6) // O review deve ser entre 1 e 5 estrelas