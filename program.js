const express = require('express');
const app = express();
const PORT = 3000;

// Ruta raíz que responde con "Hola Mundo"
app.get('/', (req, res) => {
    res.send('Hola Mundo 🌍');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});