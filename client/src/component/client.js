
  function processJson(data,cb) {
    
    return fetch('http://localhost:3001/api/parseJson', {
      method: 'post',
      body:JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus).then(cb).catch(expHandler);
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
    
      return response.json();
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      
      throw error;
    } 
  }
  function expHandler(e){
  console.log("exption:",e)
  
  }

 const Client = {processJson};
export default Client;
    