const Dashboard = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4">
      <div className="pb-4">
        <div className="text-xl">
          Hello, <span className="font-bold">Kunal</span>
        </div>
        <h1 className="text-5xl">Complete your daily nutrition</h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 sm:w-fit">
        <div className="flex flex-col justify-between w-full h-48 p-4 shadow-lg sm:w-48 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl">Calories</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-400"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
            </svg>
          </div>
          <div>
            <p className="">Total Count</p>
            <p className="text-3xl">
              832 <span className="text-gray-500">kCal</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full h-48 p-4 shadow-lg sm:w-48 bg-tertiary/90 rounded-xl">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl">Protein</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
            </svg>
          </div>
          <div>
            <p className="">Total Count</p>
            <p className="text-3xl">
              89 <span className="text-gray-500">gm</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full h-48 p-4 shadow-lg sm:w-48 bg-primary/80 rounded-xl">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl">Water</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sky-600"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
            </svg>
          </div>
          <div>
            <p className="">Total Count</p>
            <p className="text-3xl">
              945 <span className="text-gray-500">ml</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
