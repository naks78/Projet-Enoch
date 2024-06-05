document.addEventListener('DOMContentLoaded', function () {

    const ajouterButton = document.getElementById('ajouter');
        ajouterButton.addEventListener('click', function () {
        const nomPrise = document.getElementById('nomchercher').value;
        const emplacement = document.getElementById('emplacement').value;

 
        fetch('http://192.168.5.70:3000/prise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nomPrise, emplacement })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Prise ajoutée avec succès');
                    // Réinitialiser les champs après l'ajout réussi
                    document.getElementById('nomchercher').value = '';
                    document.getElementById('emplacement').value = '';
                } else {
                    console.error('Erreur lors de l\'ajout de la prise');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête fetch:', error);
            });
    });
});

