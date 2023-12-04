import {
    Card,
    Input,
 
    Button,
    Typography,Select, Option
  } from "@material-tailwind/react";
  import { useParams } from "react-router-dom";
  import {useState,useEffect} from "react"
  import axios from 'axios'



const UserCreateForm = () => {
    const [firstName,setFirstName]=useState()
    const [lastName,setLastName]=useState()
    const [avatar,setAvatar]=useState()
    const [email,setEmail]=useState()
    const [domain,setDomain] = useState();
    const [gender,setGender] = useState();
    const [availability,setAvailability] = useState();
    const {id} = useParams();

    console.log(id,"id on form page")

console.log(firstName,lastName,email)

    const createUser = async(e)=>{
        e.preventDefault();
        const userData = {
            
            firstName,lastName,email,availability,avatar,domain,gender
        }
        try {
            const response = await axios.post("/users", userData);
            console.log(response.data);
        } catch (error) {
            console.error("Axios Error:", error);
        }
        // res.send(data)
    }

    useEffect(()=>{
        axios.get(`/update/?uid=${id}`).then(response=>{

            const {data} = response;
            setFirstName(data[0].first_name)
            setLastName(data[0].last_name)
            setEmail(data[0].email)
            setDomain(data[0].domain)
            setAvatar(data[0].avatar)
            setAvailability(data[0].available)
            setGender(data[0].gender)
           
            
        })
    },[id])
    

    return (
        <div className=" flex  justify-center mt-10">
        <Card className="" color="transparent" shadow={false}>
         <Typography className="mx-auto" variant="h4" color="blue-gray">
           Sign Up
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
          
         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={createUser}>
           <div className="mb-1 flex flex-col gap-6">
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               First Name
             </Typography>
             <Input
               size="lg"
               value={firstName} onChange={(e)=>setFirstName(e.target.value)}
               placeholder="First Name"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Last Name
             </Typography>
             <Input
               size="lg"
               value={lastName} onChange={(e)=>setLastName(e.target.value)}
               placeholder="Last Name"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Email
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               value={email} onChange={(e)=>setEmail(e.target.value)}
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />

<Typography variant="h6" color="blue-gray" className="-mb-3">
               Gender
             </Typography>
             <div className="w-96 ">
      <Select label="Gender"className="h-11" value={gender} onChange={(value) => setGender(value)}>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
        
       
      </Select>
    </div>
    <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Domain
             </Typography>
             <Input
               size="lg"
               placeholder="Domain"
               value={domain} onChange={(e)=>setDomain(e.target.value)}
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
    <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Avatar
             </Typography>
             <Input
               size="lg"
               placeholder="Avatar"
               value={avatar} onChange={(e)=>setAvatar(e.target.value)}
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Availability
             </Typography>
             <div className="w-96 ">
             <Select label="Availability" className="h-11" value={availability} onChange={(value) => setAvailability(value)}
>
  <Option value="true">True</Option>
  <Option value="false">False</Option>
  </Select>
           </div>
           </div>
         
           <button className="mt-6" >
             Submit
           </button>
           
         </form>
       </Card>
       </div>
     );
}

export default UserCreateForm