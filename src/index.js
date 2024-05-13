const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(cors()) // Habilita CORS

// Utiliza las rutas importadas
app.use('/api', routes)

// Iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
