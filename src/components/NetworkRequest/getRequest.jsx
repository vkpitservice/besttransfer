import axios from "axios";

export default async function getRequest(url,headers){
    return await axios.get(url, headers).then(resp=>{ 
        console.log("successresp"+JSON.stringify(resp.data));
        
                return ["200",resp];
      }).catch(err=>{
        console.log("error response"+JSON.stringify(err.response.data.detail));
        
            return ["400",err.response.data.detail];
      });
}