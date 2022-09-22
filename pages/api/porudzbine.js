import database from "../../database"

export default async function allUsers(req, res) {
    const db = await database()
    const [porudzbine] = await db.execute("SELECT Porudzbina.id as porId,ProductPor.id,Product.id as productId ,velicina,stigla,grad,tel,ime, prezime,posta, ulicabr,productKolicina,naziv,cena FROM Porudzbina join ProductPor on Porudzbina.id=ProductPor.porId join Product on Product.id =productId  order by porId")
    if(req.method === 'PUT'){
        await db.execute(`UPDATE Porudzbina
        SET stigla = true WHERE id = ${req.body.id}`)
    }
    if(req.method === 'DELETE'){
        await db.execute(`DELETE  FROM Porudzbina where id=${req.body.porId}`)
        await db.execute(`DELETE FROM ProductPor where id=${req.body.id}`)
    }
    res.json(porudzbine)
}