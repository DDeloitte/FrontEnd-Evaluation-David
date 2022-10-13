import React, { useState } from "react";


const AddUser = (props) => {//props to pass in the info

  //use state variables
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  //use state functions:

  //submit form use state
  const AddUserHandler = (event) => {
    event.preventDefault(); //avoids reloading the page when submitting

      props.onAddUser(username,age,department);//call the onAddUser() function that receives three fields
    }
    

  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value);//asigns the input to the variable setUsername
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);//asigns the input to the variable setAge
  };

  const DepartmentChangeHandler = (event) => {
    setDepartment(event.target.value);//asigns the input to the variable setDepartment
  };

  return (

    <div>

      <div className="container">

      <div className="row justify-content-center align-items-center">

        <div className="col-md-8">

          <div className="card shadow-lg mt-5">
            {/* Header */}
            <div className="card-header text-bg-dark">Add New User</div>

            {/* Card Body */}
            <div className="card-body">

              <form 
                className="row g-3 align-items-center justify-content-center"
                onSubmit={AddUserHandler}>

                {/* <!-- Username prompt --> */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="Username">Username</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mt-2"
                      placeholder="Username"
                      id="Username"
                      onChange={UsernameChangeHandler}
                      value={username}
                      required
                    ></input>
                  </div>
                </div>

                {/* <!-- Age prompt --> */}
                <div className="col-md-12 ">
                  <div className="mb-3">
                    <label htmlFor="Age">Age (Years)</label>
                    <input
                      type="num"
                      className="form-control form-control-sm mt-2"
                      placeholder="Age"
                      id="Age"
                      onChange={AgeChangeHandler}
                      value={age}
                      required
                    ></input>
                  </div>
                </div>

                {/* <!-- Department prompt --> */}
                <div className="col-md-12 ">
                  <div className="mb-3">
                    <label htmlFor="Department">Department</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mt-2"
                      placeholder="Department"
                      id="Department"
                      onChange={DepartmentChangeHandler}
                      value={department}
                      required
                    ></input>
                  </div>
                </div>

                <div className="card-footer">
                  {/* <!-- Submit data --> */}
                  <div className="col-md-2">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-sm btn-primary">
                        Add User
                      </button>
                    </div>
                  </div>
                </div>

                

              </form>

            </div>


          </div>

        </div>

      </div>

      </div>

    </div>

  );
};

export default AddUser;