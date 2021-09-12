import "./Header.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout  } = useAuth0();
  return (
    <div className="Navbar">
      <div className="containers">
        <LinkContainer to='/'><h1>DinoMatric</h1></LinkContainer>
        <Button className="phones" color="default">
          <PhoneAndroidIcon />
        </Button>
        {isAuthenticated?<Button className="logs" color="default" onClick={()=> logout({ returnTo: window.location.origin })}>
          <PersonIcon />
        </Button>: 
        <Button className="logs" color="default" onClick={() => loginWithRedirect()}>
        <PersonIcon />
      </Button> }
        
      </div>
    </div>
  );
};

export default Navbar;
