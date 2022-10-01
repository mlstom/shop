import database from "../../../../database"

export default async function getProduct(req, res) {
    const db = await database()
    const [products] = await db.execute(`SELECT * FROM Product WHERE id=${req.query.id}`)
   
    res.json(products)
}