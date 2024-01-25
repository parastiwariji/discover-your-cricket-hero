function getDetails() {
    var cricketerName = document.getElementById('cricketerInput').value;
    var cricketerDetails = document.getElementById('cricketerDetails');

    // Replace 'YOUR_RAPIDAPI_KEY' with the actual RapidAPI key
    var apiKey = 'b93b786234msh578f133815b0948p12948ajsn904d43b3675f';
    var apiUrl = `https://dev132-cricket-live-scores-v1.p.rapidapi.com/playersearch.php?name=${cricketerName}`;

    // Fetch data from the RapidAPI Cricket API
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            // Display personalized details
            if (data && data.player && data.player.length > 0) {
                var player = data.player[0];
                cricketerDetails.innerHTML = `<p>${player.name} is an amazing cricketer. Details: ${player.profile}</p>`;
            } else {
                cricketerDetails.innerHTML = `<p>No information found for ${cricketerName}. Please check the spelling or try another cricketer.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching cricketer details:', error);
            // Display a generic message in case of an error
            cricketerDetails.innerHTML = `<p>Oops! Something went wrong. Please try again later.</p>`;
        });
}
