const express = require('express');
const cors = require('cors');  // Ajouter cette ligne
const connectToMongoDB = require('./db');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 5000;

// Activer CORS pour toutes les requêtes
app.use(cors());

app.use(express.json());

connectToMongoDB();

app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
