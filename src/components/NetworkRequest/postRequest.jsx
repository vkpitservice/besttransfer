import axios from "axios";

export default async function postRequest(url,body,headers){
    return await axios.post(url, body,headers).then(resp=>{ 
        console.log("successresp"+JSON.stringify(resp.data));
        
                return ["200",resp];
      }).catch(err=>{
        console.log("error response"+JSON.stringify(err.response.data.detail));
        
            return ["400",err.response.data.detail];
      });
}