import axios from "axios";
export default {
    data() {  return {      } },
    methods: {
    async callApi(method, url, dataObj) {
            try {
             
                let token = "26690|QccIP0rjrcwTNNXJixs0ZrGUE9gMvhoRL7FAg2ph";// window.localStorage.getItem("token");
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


