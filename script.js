function getDetails() {
    var cricketerName = document.getElementById('cricketerInput').value;
    var cricketerDetails = document.getElementById('cricketerDetails');

    // Replace 'YOUR_API_KEY' with the provided API key
    var apiKey = '36de9268-dec7-4e23-9a97-cf12c8952257';
    var apiUrl = `https://api.cricapi.com/v1/countries?apikey=36de9268-dec7-4e23-9a97-cf12c8952257&offset=0&name=${cricketerName}`;

    // Fetch data from the CricAPI
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display personalized details
            if (data.data && data.data.length > 0) {
                var player = data.data[0];
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
