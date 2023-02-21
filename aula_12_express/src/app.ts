//~ init express

import express, {Request, Response, NextFunction} from 'express'

const app = express()

app.use(express.json())


//~Lesson 11 - Middleware for all routes
//~ method "use"

function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

//~Lesson 1 - Listen
app.listen(3000, () => {
    console.log("Aplicação TS+Express funcionando!")
})


//~Lesson 2 - Method get
app.get('/', (req, res) => {
    return res.send("Hello Express!")
})

//~Lesson 3 - Method post
app.post('/api/product', (req, res) => {
    console.log(req.body)
    return res.send("Produto adicionado!")
})

//~Lesson 4 - Method all
app.all('/api/product/check', (req, res) => {
    if (req.method === 'POST') {
        return res.send("Inseriu registro!")
    } else if (req.method === 'GET') {
        return res.send("Leu registro!")
    } else {
        return res.send("Nao podemos realizar a operação!")
    }
})

//~Lesson 5 - Interfaces

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando interfaces!")
})


//~Lesson 6 - Sending JSON

app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30,
        color: "blue",
        size: ["P", "M", "G"]
    })
})

//~Lesson 7 - Router Params

app.get("/api/product/:id", (req: Request, res: Response) => {
    const id = req.params.id

    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10,
        }

        return res.json(product)
    } else {
        return res.send("Produto não encontrado")
    }

})

//~Lesson 8 - Complex routes

app.get("/api/product/:id/review/:reviewid", (req: Request, res: Response) => {

    console.log(req.params)

    const productId = req.params.id
    const reviewId = req.params.reviewid

    return res.send(`Acessando review ${reviewId} do produto ${productId}`)

})

//~Lesson 9 - Router handler


function getUser(req: Request, res: Response) {
    console.log(`Getting user with id: ${req.params.id}`)
    return res.send("Found user")
}

app.get("/api/user/:id", getUser)


//~Lesson 10 - Middlewares

function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("Welcome!")
        next()
    } else {
        console.log("Access denied!")
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({msg: "Welcome to administrative portal"})
})

//~ Lesson 12 - Request e Response generics

app.get(
    "/api/user/:id/details/:name",
    (
        req: Request<{id: string; name: string}>, 
        res: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)

        return res.json({status: true})
    }
)

//~ Lesson 13 - Handling errors
//~ try catch

app.get("/api/error", (req: Request, res: Response) => {

    try {

        throw new Error("Algo deu errado")

    }

    catch (e: any) {

        res.status(500).json({msg: e.message})

    }
})