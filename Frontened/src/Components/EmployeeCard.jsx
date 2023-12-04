

const EmployeeCard = ({item}) => {
  return (
    <div className="border-4 border-gray cursor-pointer h-[22rem] w-[17rem]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ">
      <div className="relative">
        <div className="flex flex-col  items-center  bg-gradient-to-b from-[#e36d42] via-[#ce7a61] to-[#75757c]  h-36 clip ">
          <h1 className="mt-6 text-xl text-white">{item?.first_name +" "+ item?.last_name}</h1>
          <h3 className="text-lg  text-gray-100">{item?.domain}</h3>
        </div>
        <div className="absolute top-24  left-[5.5rem] border-2 border-[#e36d42] rounded-full bg-white">
          <img
            className="h-20 border-4 rounded-full  "
            src={item?.avatar}
            alt="avatar"
          />
        </div>
      </div>
      <div className="mt-16 ml-2">
        <div>
          <div className="flex justify-start gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-5 text-[#f16e3e]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h6 className="text-sm">{item?.email}</h6>
          </div>
        </div>
        <div className="flex justify-start gap-2 items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-5 text-[#f16e3e]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <h6 className="text-sm">{item?.gender}</h6>
        </div>
      </div>

      <div className="mt-8 text-lg ">
        <h6 className="flex justify-center items-center">
          Availability - {item?.available ? "YES":"NO"}
          <span className="text-green-600">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg> */}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default EmployeeCard