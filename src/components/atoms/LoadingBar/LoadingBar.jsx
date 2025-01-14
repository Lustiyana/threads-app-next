/** @format */

const LoadingBar = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span
        className="loading loading-spinner loading-lg bg-primary"
        role="status"
        aria-label="Loading"
      ></span>
    </div>
  );
};

export default LoadingBar;
