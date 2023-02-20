//~ init express

import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())


//Lesson 1 - Listen
app.listen(3000, () => {
    console.log("Aplicação TS+Express funcionando!")
})


//Lesson 2 - Method get
app.get('/', (req, res) => {
    return res.send("Hello Express!")
})

//Lesson 3 - Method post
app.post('/api/product', (req, res) => {
    console.log(req.body)
    return res.send("Produto adicionado!")
})

//Lesson 4 - Method all
app.all('/api/product/check', (req, res) => {
    if (req.method === 'POST') {
        return res.send("Inseriu registro!")
    } else if (req.method === 'GET') {
        return res.send("Leu registro!")
    } else {
        return res.send("Nao podemos realizar a operação!")
    }
})

//Lesson 5 - Interfaces

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando interfaces!")
})