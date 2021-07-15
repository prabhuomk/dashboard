import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import CreateIcon from "@material-ui/icons/Create";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="list">
        <DashboardIcon />
        <Button color="inherit"> Dashboard</Button>
      </div>
      <br />
      <div className="list">
        <ListIcon />
        <Button color="inherit">List Users</Button>
      </div>
      <br />
      <div className="list">
        <CreateIcon />
        <Button color="inherit">Create Users</Button>
      </div>
      <br />
      <div className="list">
        <EditIcon />
        <Button color="inherit"> Edit Users</Button>
      </div>
      <br />
      <div className="list">
        <AccountCircleIcon />
        <Button color="inherit"> Profile</Button>
      </div>
      <br />
      <div className="list">
        <EditIcon />
        <Button color="inherit"> Edit Profile</Button>
      </div>
    </div>
  );
}
