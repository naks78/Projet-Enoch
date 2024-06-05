const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'client')));

// Rediriger toutes les autres requêtes vers le fichier HTML
app.get('/suppuid', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'suppUID.html'));
});

// Rediriger vers les différentes pages HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'Interface.html'));
});

app.get('/p1', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'p1.html'));
});

app.get('/client', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'Client.html'));
});

app.get('/ajtprise', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'ajtprise.html'));
});

app.get('/suppprise', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'sup_prise.html'));
});


app.post('/suppprise', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'sup_prise.html'));
});

// Démarrer le client sur le port 3005
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`client démarré sur http://localhost:${PORT}`);
});





