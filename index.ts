import fastify, { FastifyInstance } from "fastify";

const BASE_URL: string = "/api/v1/test"

const app: FastifyInstance = fastify()

app.get<{
    Params: {
        n: number
    }
}>(`${BASE_URL}/:n`, {
    schema: {
        params: {
            type: "object",
            required: ["n"],
            properties: {
                n: {
                    type: "integer",
                    minimum: 1,
                    exclusiveMaximum: 99
                }
            }
        },
    }
}, (req, res) => {
    const { n } = req.params

    let sum: number = 1
    let sequence: number[] = [0, 1]

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
        sum += sequence[i]
    }

    return res.status(200).send({
        "member-count": n,
        "sequence": sequence,
        "total": sum
    })
})

app.listen({
    host: "0.0.0.0",
    port: 3000
}, (error, address: string) => {
    if (error) throw error
    console.log(`Backend Listen at ${address}`)
})
