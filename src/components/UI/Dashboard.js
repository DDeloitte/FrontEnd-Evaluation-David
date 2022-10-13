import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">

            {/* <!-- Users List --> */}
            <div className="col-md-3">
                <div className="card text-bg-dark shadow text-center">
                    <div className="card-header">Employees List</div>
                    <a href="UsersDashboard.html" className="card-footer small text-black">View employes</a>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;