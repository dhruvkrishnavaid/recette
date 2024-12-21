const Notifications = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
    <div className="flex p-6">
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
      </div>
      <div className="p-4 h-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/no-notifications-illustration-download-in-svg-png-gif-file-formats--notification-mail-empty-state-pack-design-development-illustrations-4841580.png?f=webp"
          alt="bell"
        />
        <h1 className="text-4xl text-center w-full h-fit">
          No new notifications
        </h1>
      </div>
    </div>
  );
};

export default Notifications;
