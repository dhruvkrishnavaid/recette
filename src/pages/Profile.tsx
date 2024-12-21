const Profile = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center justify-center w-12 h-12 p-4 bg-white rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      >
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
          className=""
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
      </button>
      <div className="flex flex-col items-center gap-4">
        <h1 className="w-full text-5xl font-bold text-center">Profile</h1>
        <div className="flex flex-col w-full items-center">
          <img
            src="https://picsum.photos/200.webp"
            alt="pfp"
            className="z-10 rounded-full h-64 w-64 border-4 border-primary shadow-lg"
          />
          <div className="-mt-12 flex flex-col w-full md:w-3/4 bg-white rounded-xl px-4 pt-12 divide-y divide-primary">
            <div className="py-4">
              <div className="text-2xl font-semibold pb-2">Name:</div>Test User
              1
            </div>
            <div className="py-4">
              <div className="text-2xl font-semibold pb-2">Email:</div>
              somehandle@someemail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
