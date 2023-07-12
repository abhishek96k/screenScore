import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const logoutUser = () => {
  document.cookie = 'loginData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  window.location.reload();
}

const Header = () => {
const useAppstate = useContext(Appstate);

  return (
    <div className="sticky z-10 top-0 header text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={`/`}>
        <span>
          Screen<span className="text-white">Score</span>
        </span>
      </Link>
      {document.cookie ? 
      <div className="flex items-center">
      <Link to={`/addmovie`}>
        <h1 className="text-lg cursor-pointer flex items-center">
          <Button>
            <AddIcon className="mr-1" color="secondary" />
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
      <h1 className="text-lg bg-red-500 items-center ml-4 mr-4 cursor-pointer">
          <Button onClick={logoutUser}>
            <span className="text-white">Logout</span>
          </Button>
        </h1>
      </div>
      :
      <Link to={`/login`}>
        <h1 className="text-lg bg-green-500 cursor-pointer mr-4 flex items-center">
          <Button>
            <span className="text-white font-medium capitalize">Login</span>
          </Button>
        </h1>
      </Link>
      }
    </div>
  );
};

export default Header;
