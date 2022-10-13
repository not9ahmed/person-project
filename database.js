const {Client}  = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '951753',
    database: 'persons_db'
  })


client.connect()

client.query(`SELECT * FROM persons`, (err, res) => {

    if(err){
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
        // console.log(res.rows)

         
        let dbRows = res.rows

        // console.log(dbRows)


        // console.log(res.rows)

        // This must include everything
        module.exports = dbRows

        console.log(module.exports)

        testIteration(res.rows)
    }

    client.end()
})



function testIteration(databaseRows){


    dbRows = databaseRows

    for (row of databaseRows) {
        
        console.log(row.id)
    }


} 


// console.log(dbRows)

// module.exports = dbRows