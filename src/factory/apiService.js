let axios = require('axios');

function ApiService(data) {
    // console.log('API serviec', data)
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTRhMzNmOGZkLWYwYjYtNWQzMi05NjU3LWVlMGQxZjQyNzljNSJ9._VIU9Qkswwkinf-_iWUoZLnkiKJXuT6TRQzpxg-YCc0'
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
      
    
    axios.post('https://searchassist.kore.ai/searchassistapi/external/stream/st-2aa7e384-71e3-5032-8a46-b4dde43d1e8b/ingest?contentSource=manual&extractionType=data&index=true', 
                payload, 
                { headers })
         .then(response => {
         console.log('Response:', response.status);
     })
}

module.exports = ApiService




