import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Age</label>
        <input type="numer" min='1' step='1'/>
      </div>
      <div>
          <button type='submit'>Add user</button>
      </div>
    </form>
  );
};

export default AddUser;
