import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

//Graphical part, displays the data, buttons, etc
const UsersDashboard = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uAge, uDepartment) => {//function that receives three arguments
    setUsersList((prevUsersList) => {//asigns the arguments to the variable setUsersList
      return [...prevUsersList, {name: uName, age: uAge, department: uDepartment, id: Math.random().toString()} ]//copy the prev arrays and returns an array
    });
    console.log(usersList);
  };

  return (

    <div>

      {/* First the add user form */}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </div>

  );
};

export default UsersDashboard;