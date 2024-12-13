import axios from "axios";

export default async function postRequest(url,body,headers){
    console.log(url);
    console.log(body);
    console.log(headers);
    
     return await axios.post(url, body,headers).then(resp=>{ 
        console.log("successresp"+JSON.stringify(resp.data));
        
                return ["200",resp];
      }).catch(err=>{
        console.log("error response"+JSON.stringify(err.response));
        
            return ["400",err.response.data.detail[0].msg];
      });
}