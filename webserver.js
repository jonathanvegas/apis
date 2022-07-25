const express = require("express")
const app = express()
const port = 3001

//
const arr = [1,2,3,4,5]
app.get('/', (req, res) => {
    res.send(arr)
  })
//

app.listen(port, () => {
    console.log(`started on port ${port}`)
})