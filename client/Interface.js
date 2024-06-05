document.addEventListener('DOMContentLoaded', function () {
    // Toggle the vertical menu visibility
    document.getElementById("main-button").addEventListener("click", function () {
        var verticalMenu = document.getElementById("vertical-menu");
        verticalMenu.classList.toggle("show");
    });

    // Close the vertical menu when the close button is clicked
    document.getElementById("close-button").addEventListener("click", function () {
        var verticalMenu = document.getElementById("vertical-menu");
        verticalMenu.classList.remove("show");
    });

    // Function to fetch data from the API
    function fetchData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            });
    }

    // Function to display information for a found prise
    function displayPriseInfo(container, prise) {
        container.classList.add('prise-info-frame');

        const etatClass = prise.etat === "0" ? "circle-off" : "circle-on";
        const etatText = prise.etat === "0" ? "Éteint" : "Allumé";
        const etatCell = `<td><span class="circle ${etatClass}"></span>${etatText}</td>`;

        container.innerHTML = `
            <table class="prise-info-table">
                <tr><th>Nom de la prise</th><td>${prise.nomPrise}</td></tr>
                <tr><th>ID de la prise</th><td>${prise.id}</td></tr>
                <tr><th>Consommation de la prise</th><td>${prise.consommation}</td></tr>
                <tr><th>Consommation TOTALE de la prise</th><td>${prise.total}</td></tr>
                <tr><th>État de la prise</th>${etatCell}</tr>
                <tr><th>Emplacement de la prise</th><td>${prise.emplacement}</td></tr>
            </table>
        `;
    }

    // Function to handle new prises
    function handlePrises(data) {
        const mainContainer = document.querySelector('.produits-container');
        mainContainer.innerHTML = '';  // Clear existing content

        data.forEach(prise => {
            const section = document.createElement('section');
            section.classList.add('produit');

            const img = document.createElement('img');
            img.src = "https://st4.depositphotos.com/3265223/24936/v/450/depositphotos_249365890-stock-illustration-electric-plug-icon-vector-logo.jpg";
            img.alt = `Prise ${prise.nomPrise}`;

            const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultat');

            const priseInfoList = document.createElement('ul');
            priseInfoList.classList.add('priseInfo');

            resultDiv.appendChild(priseInfoList);
            section.appendChild(img);
            section.appendChild(resultDiv);
            mainContainer.appendChild(section);

            // Display the prise info
            displayPriseInfo(priseInfoList, prise);
        });
    }

    // Function to display loading circle during modification of a prise
    function afficherLoadingCircle() {
        const loadingCircle = document.createElement('div');
        loadingCircle.classList.add('loading-circle');
        loadingCircle.innerHTML = `
            <div class="circle"></div>
            <div class="text">Mise à jour en cours...</div>
        `;
        document.body.appendChild(loadingCircle);
    }

    // Polling function to fetch data periodically
    function pollPrises() {
        fetchData('http://192.168.5.70:3000/prise')
            .then(data => {
                handlePrises(data);
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert("Une erreur s'est produite lors de la récupération des prises.");
            });

        // Display loading circle during modification of a prise
        afficherLoadingCircle();

        // Poll every 5 seconds
        setTimeout(pollPrises, 5000);
    }

    // Initial fetch and start polling
    pollPrises();
});
