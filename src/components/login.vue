<template>
    <!--Modal Save-->
    <div class="modal" style="display:inline" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">login</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form  v-on:submit="onlogin($event)" >
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">username:</label>
                <input type="text" class="form-control" v-model="login.username" id="recipient-name">
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">password:</label>
                <input type="text" class="form-control" v-model="login.password" id="recipient-name">
              </div>
              
             
              
              
              <div class="mb-3">
              <button type="button" class="btn btn-secondary"  @click="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="save-btn" :disabled="disable" >login</button>
              </div>
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  @click="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" :disabled="disable" >Save</button>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  <script>
  
  //import { callApi  }  from "../../common.js";
  export default {
      name:"login-page",
      data(){
        return{
          login:{
         
            username:"Raad-c",
            password:"123456",
           
          },
          disable:false,
        }
      },
      methods:{
        close:function(){
           
           this.$emit("closeLogin");
       },
      async onlogin(e) {
        e.preventDefault();
            document.getElementById("save-btn").innerHTML="<div class='spinner-border text-info'><span class='sr-only'></span></div>";
           
          
          ///const h=new AxiosHeaders();
         try{
      
         
            this.disable=true;
 
             const res=await this.callApi("post",'https://www.kifapos.com/api/v3/login',this.login,);
             console.log("res "+res);
             document.getElementById("save-btn").innerHTML="حفظ";
                this.disable=false;
         
           // const elm=this.$refs.cBtn;
      
             if(res.status === 200){

                document.getElementById("save-btn").innerHTML="حفظ";
                this.disable=false;
               
                this.$emit("closeLogin");
                 window.localStorage.setItem("token",res["data"]["data"]["token"]);
               window.location.reload();
             }else{
                document.getElementById("save-btn").innerHTML="حفظ";
                this.disable=false;
           }
        }catch(e){
            document.getElementById("save-btn").innerHTML="حفظ";
                this.disable=false;
                console.log("ssssssssss  "+e.message);
               // console.log("hhhhhhhh  "+e);
            }
           
         
        }
      }
  }
  </script>
  