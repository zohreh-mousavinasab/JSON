import axios from "axios";


const postData = () => {
    const userData={
           
    }
    console.log("posted");
    return ( 
        axios.post("http://localhost:3001/datajson",userData).then((res)=>console.log(res.data)).catch((err)=>{})
        );
    }
    export default postData;
