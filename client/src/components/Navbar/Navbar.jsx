import "./Header.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="containers">
        <h1>DinoMatric</h1>
        <Button className="phones" color="dark">
          <PhoneAndroidIcon />
        </Button>
        <Button className="logs" color="dark">
          <PersonIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
