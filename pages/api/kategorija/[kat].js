import database from "../../../database"

export default async function getKat(req, res) {
    const db = await database()
    const [products] = await db.execute(`SELECT * FROM Product WHERE kategorija='${req.query.kat}'`)
   
    res.json(products)
}