document.querySelector("#chercher").addEventListener('click', function () {
    const nomchercher = document.getElementById('nomchercher').value;
    console.log('ok');


    fetch(`http://192.168.5.70:3000/prise?nom=${nomchercher}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let foundPrise = data.find(prise => prise.nomPrise === nomchercher);
            if (foundPrise) {
                console.log(foundPrise);

                fetch(`http://192.168.5.70:3000/prise/${foundPrise.id}`, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
            } else {
                console.log("Not found");
               
            }
        })
        .catch(error => console.error('Error:', error));
});

