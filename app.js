const express = require('express')
const app = express()
app.listen(3000)
app.get('/players/', async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      cricket_team ;`
  const booksArray = await db.all(getBooksQuery)
  response.send(booksArray)
})
