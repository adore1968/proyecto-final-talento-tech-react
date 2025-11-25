import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 w-100 vh-100">
      <FaSpinner className="animate-spin text-white" size={40} />
    </div>
  );
}

export default Loader;
