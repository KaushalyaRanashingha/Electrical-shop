import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Server is ready")
})

const port = process.env.PORT || 5002

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
