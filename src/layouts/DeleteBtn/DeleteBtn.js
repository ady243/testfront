import React from "react";
import { useState } from "react";

function DeleteBtn() {
  const [isDeleteting, setIsDeleting] = useState(false);
  const HandleClick = () => {
    setIsDeleting(true);
    setIsDeleting(false);
  };
  return (
    <button
      onclick={HandleClick}
      ClassName={isDeleteting ? "deleting" : ""}
      disabled={isDeleteting}
    >
      <span className="button-left">
        {isDeleteting ? "Deleting..." : "Delete User"}
      </span>
      <span className="animation">
        <span className="paper-wrapper">
          <span className="paper"></span>
        </span>
        <span className="shredded-wrapper">
          <span className="shradded"></span>
        </span>
        <span className="lid">
          <span className="can"></span>
          <span className="filter"></span>
        </span>
      </span>
    </button>
  );
}

export default DeleteBtn;
