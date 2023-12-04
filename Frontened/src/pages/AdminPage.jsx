import EmployeeCard from "../Components/EmployeeCard.jsx";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
// import { Card } from "@material-tailwind/react"
import { useEffect, useRef, useState, } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FullScreenLoader from "../Components/FullScreenLoader.jsx";

const AdminPage = () => {
  const pagination = useRef({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    pageSize: 20,
  });
  const [user, setUser] = useState();

  const [isLoading, setIsLoading] = useState(true);
//   const [id,setId]=useState()
  const [domain,setDomain] = useState();
  const [gender,setGender] = useState();
  const [availability,setAvailability] = useState();

 const navigate = useNavigate();

  const fetchUsers = async () => {
    setIsLoading(true);
    await axios
      .get(
        `/users?currentPage=${pagination.current.currentPage}&pageSize=${pagination.current.pageSize}&domain=${domain}&gender=${gender}&availablility=${availability}`
      )
      .then((response) => {
        pagination.current = response.data.pagination;
        setUser(response.data.data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  const handleUpdate= (id) => {
    // Pass the ID to the parent component
    navigate(`/update/${id}`); // Assuming your employee object has an 'id' property
  };

  

  const handleNext = async () => {
    if (pagination.current.currentPage < pagination.current.totalPages) {
      pagination.current.currentPage += 1;
    }
    await fetchUsers();
  };
  const handlePrev = async () => {
    if (pagination.current.currentPage > 1) {
      pagination.current.currentPage -= 1;
    }

    await fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    pagination.current.currentPage=1;
    fetchUsers();
  }, [gender,domain,availability]);



  console.log(user);
  
  return (
    <>
     
      {!isLoading && (
        <>
          <div className="mx-4 my-10  flex flex-wrap gap-2 gap-y-4 ">
            {user &&
              user?.length > 0 &&
              user?.map((item, index) => {
                return (
// eslint-disable-next-line react/jsx-key
<div className="flex flex-col gap-2 mb-10">
                <EmployeeCard key={index} item={item} />
                <div className="h-10 flex justify-around">
                <Button className="bg-green-400" onClick={()=>handleUpdate(item.id)}>Update</Button>
                <Button className="bg-red-400">Delete</Button>
                </div>
                </div>
                )
                
})}
          </div>
          <div>
            <Button
              className="border p-2 text-lg m-5 "
              disabled={pagination.current.currentPage === 1}
              onClick={handlePrev}
            >
              prev
            </Button>
            <Button className="border p-2 text-lg m-5 " variant="text">
              {pagination.current.currentPage}
            </Button>

            <Button
              className="border p-2 text-lg m-5"
              disabled={
                pagination.current.currentPage === pagination.current.totalPages
              }
              onClick={handleNext}
            >
              next
            </Button>
          </div>
        </>
      )}

      {isLoading && <FullScreenLoader />}
    </>
  );
};

export default AdminPage;
