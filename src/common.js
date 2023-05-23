import axios from "axios";
export default {
    data() {  return {      } },
    methods: {
    async callApi(method, url, dataObj) {
            try {
             
                let token = window.localStorage.getItem("token");
              const  headers= {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization":`Bearer ${token}`,
                    "Accept-Language":window.localStorage.getItem("lang")!=null?window.localStorage.getItem("lang"):"ar",
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


