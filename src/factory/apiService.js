let axios = require('axios');

function ApiService(data) {    

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': process.env.SEARCH_ASSIST_API_AUTH
      };

    const payload = {
        "name": "Some Group Name",
        "documents": data
      };    
      
    axios.post(process.env.SEARCH_ASSIST_API_URL,
                payload, 
                { headers })
         .then(response => {
         console.log('Response:', response.status);
     })
}

module.exports = ApiService




