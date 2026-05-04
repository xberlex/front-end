import Main from "../components/MainDashboard";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Dashboard () {
    return (
        <div className="app-container">
           <Sidebar/>
           <Main/>
        </div>
    );
}

export default Dashboard;