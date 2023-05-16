import axios from "axios";
export default {
    data() {  return {      } },
    methods: {
    async callApi(method, url, dataObj) {
            try {
                let token ="24920|B7bLNKOOlzdpWZMU527x6cEPl17qONZjpNsIzEqG";  //window.localStorage.getItem("token");
              const  headers= {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization":`Bearer ${token}`,
                    "Accept-Language":"en",
                    "Access-Control-Allow-Origin":"*"
                   };
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj,
                    headers:headers,
               });
            } catch (e) {
              
             return e.response;
            }
        },
       
        

    },

    }


