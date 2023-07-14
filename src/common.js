import axios from "axios";
export default {
    data() {  return {      } },
    methods: {
    async callApi(method, url, dataObj) {
            try {
             
                let token = "26729|WWQHntmUWHJPFLTy7ImZ9KRyd24rRG43iR56N53n";// window.localStorage.getItem("token");
              const  headers= {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization":`Bearer ${token}`,
                    "Accept-Language":window.localStorage.getItem("lang"),
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


