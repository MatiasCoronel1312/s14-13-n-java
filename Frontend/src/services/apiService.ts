import apiUrl  from '../env/environment.prod.ts';
import axios from 'axios';
class ApiService {
  

   constructor () {

   }
   apiURL = apiUrl

   getData(finalURL:string){
    return axios.get(apiUrl+finalURL)
    .then(response => response.data)
    .catch(function (error) {
        // handle error
        console.log(error);
    })
   }
}

export default ApiService;