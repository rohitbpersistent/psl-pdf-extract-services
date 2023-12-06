let axios = require('axios');

function ApiService(data) {
    console.log('API serviec', data)
    return;
    
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTk1NDIwYzI3LTMzMjEtNWUyMi1hZjlhLWM3ZDhlNjFkOTZkOSJ9.PqqQEwa8-m7vD8rLlascv5YAhqtYTKKcEKPA5Di1DSw'
        // 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTI2Y2ZhYTc3LTI2ODktNTIxZS05OGE4LTM3OGJlZjlmZmY5ZSJ9.EvsfXMjM7z8dtLWEaz859EtEBvpYyaMy4UN6DTnCFpA'
      };
      
    
    // let snippet = generateOutputArray(convertPathToNestedArray(inputArray));
    
    // let snip=[];
    
    // for(let j=0;j<snippet.length;j++){
    //     let object={
    //         title:snippet[j].title,
    //         content:snippet[j].content,
    //         url:snippet[j].url
    //     }
    //     let tempcontent="";
    //     for(let i=0;i<snippet[j].content.length;i++){
    //         tempcontent+=snippet[j].content[i];
    //     }
    //     object.content=tempcontent;
    //     snip.push(object)
    // }
    
    // fs.writeFileSync("structuredDataResult.json", JSON.stringify(snip));
    
    const payload = {
        "name": "Some Group Name",
        "documents": data
      };
    // const payload = {
    //     "name": "Some Group Name",
    //     "documents": [{
    //         "id": "1",
    //         "titile": "Service Supervisor1",
    //         "content": "Gemma_Allen8451@sveldo.biz",
    //         "url": "Gemma Allen"
    //     },
    //     {
    //         "id": "2",
    //         "title": "Service Supervisor2",
    //         "content": "Liv_Baker8412@jiman.org",
    //         "url": "Liv Baker"
    //     }]
    //   };
      
    axios.post('https://searchassist-app.kore.ai/searchassistapi/external/stream/st-beccc06c-dff7-5316-a4a2-406ccf58a27e/ingest?contentSource=manual&extractionType=data&index=true', 
    // axios.post('https://searchassist-app.kore.ai/searchassistapi/external/stream/st-f9c8abc7-e1a4-5735-84b4-cc08f25deb31/ingest?contentSource=manual&extractionType=data&index=true', 
                payload, 
                { headers })
         .then(response => {
         console.log('Response:', response.status);
     })
}

module.exports = ApiService




