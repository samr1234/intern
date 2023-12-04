import EmployeeCard from "../Components/EmployeeCard.jsx";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
// import { Card } from "@material-tailwind/react"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FullScreenLoader from "../Components/FullScreenLoader.jsx";
const EmployesPage = () => {
  const pagination = useRef({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    pageSize: 20,
  });
  const [user, setUser] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [domain,setDomain] = useState();
  const [gender,setGender] = useState();
  const [availability,setAvailability] = useState();

 

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
      <div className="flex flex-wrap justify-center">
        <div className="w-72 my-8 mx-4">
          <Select label="Filter By Domain" >
            {[
              "Sales",
              "Finance",
              "Marketing",
              "IT",
              "Management",
              "UI Designing",
              "Business Development",
            ]?.map((item, index) => (
              <Option value={item} key={index} onClick={()=>setDomain(item)}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-72 my-8 mx-4">
          <Select label="Filter By Gender" >
            {["Male", "Female"]?.map((item, index) => (
              <Option value={item} key={index} onClick={()=>setGender(item)}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-72 my-8 mx-4">
          <Select label="Filter By Availability" >
            {["Yes", "No"]?.map((item, index) => (
              <Option value={item} key={index} onClick={()=>setAvailability(item=="Yes"?true:false)}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      {!isLoading && (
        <>
          <div className="mx-4 my-10  flex flex-wrap gap-2 gap-y-4">
            {user &&
              user?.length > 0 &&
              user?.map((item, index) => (
                <EmployeeCard key={index} item={item} />
              ))}
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

export default EmployesPage;
