// function processJson(jsonValue, cb) {
//     const jsVal=JSON.stringify(jsonValue);
//     return fetch(`http://localhost:3001/api/parseJson?data=${jsVal}`, {}).then(checkStatus).then(parseJSON).then(cb);
//   }
// function processJson(jsonValue, cb) {
//     const jsVal=JSON.stringify(jsonValue);
//     return fetch('http://localhost:3001/api/parseJson', {
//       method:'post',
//       body: JSON.stringify("hdfjdfhfh"),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       }
//       }).then(checkStatus).then(parseJSON).then(cb);
//   }

  function processJson(data,cb) {
    console.log("third step:" , JSON.stringify(data))
    return fetch('http://localhost:3001/api/parseJson', {
      method: 'post',
      body:JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus).then(cb);
  }
  function search(query, cb) {
    return fetch(`/api/food?q=${query}`, {
      accept: 'application/json',
    }).then(checkStatus)
      .then(parseJSON)
      .then(cb);
  }


  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log(JSON.stringify(response));
      console.log(response);
      console.log(typeof response);
      return response.json();
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    }
  }
  
  function parseJSON(response) {
    return response.json();
  }  

const Client = { processJson};
export default Client;
    