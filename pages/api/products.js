import database from "../../database"

export default async function allUsers(req, res) {
    const db = await database()
    const [products] = await db.execute("SELECT * FROM Product")
    if(req.method === 'POST'){
       await db.execute(`insert into Product(naziv,opis,cena,kategorija,quantity,imageUrl,pol) values ('${req.body.naziv}','${req.body.opis}',${req.body.cena},'${req.body.kategorija}',0,'${req.body.url}','${req.body.pol}') `)
    }
    if(req.method ==='DELETE'){
        await db.execute(`DELETE  FROM Product where id=${req.body.id}`)
    }
    if(req.method ==='PUT'){
        await db.execute(`UPDATE Product
        SET naziv = '${req.body.naziv}', opis = '${req.body.opis}', cena = ${req.body.cena}, kategorija = '${req.body.kategorija}', quantity = ${req.body.quantity}, imageUrl = '${req.body.url}' , pol = '${req.body.pol}'
        WHERE id = ${req.body.id}`)
    }
    res.json(products)
}