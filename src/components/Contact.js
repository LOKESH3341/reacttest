import { useEffect, useState } from "react";
import Axios from "axios";

function Contact()
{
    const [name,setName] = useState("Lokesh"); //Functin component
    //this.state = {name: "Lokesh"} //class component
    //const [x.setX] = useState(defaultValue);

    const [data,setData] = useState([]);
    

    // const handleClick = () => {
    //     setName("Ravi");
    // }

    useEffect(() =>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200) //200 = OK
            {
                console.log(res.data);
                setData(res.data);

            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const ContactDetails = () => {
        return data.map((val)=>{
            return <p>{val.name} - {val.phone}</p>
        })
    }


    return(
        <div>
            <h2>The owner of this page is {name}</h2>
            <button onClick={() => setName("Ravi")}>Change owner</button>
            {ContactDetails()}
        </div>
    )
}

/*
class C1 extends Component
{
    componentDidMount()
    {
        Axios.get()
    }
}

const p = new Promise((res,rej)=>{
    res("Hello");
})

p
.then((msg)=>{console.log("Success"+msg)})
.catch()

pending
resolved -> .then()
rejected -> .catch()

Object>
config
data
status
headers


*/


export default Contact;