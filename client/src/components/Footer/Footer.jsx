import React from "react";
import './Footer.css';
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="footer-start">
      <div>
      <footer data-component="footer">
      <div className="container-fluid feature" align="left">
        <div className="row">
          <div className="col-sm-3 footer-logo-box">
            <img src={logo} alt="logo"/>
          </div>
          <div className="col-sm-3">
            <ul>
                  <li><h4>About Us</h4></li>
                  <li>GET TO KNOW US</li>
                  <li>Privay policy</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>Links</h4></li>
              <li className="navlinks">
              <Link to="/dinodrawing">Dino Drawing</Link>
            </li>
            <li className="navlinks">
              <Link to="/chromedino">Chrome Dino</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinofun">DinoFun</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinofacts">DinoFacts</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinoshowcase">Dino Showcase</Link>
            </li>
            <li className="navlinks">
              <Link to="/prehistoricquiz">Prehistoric Quiz</Link>
            </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>Contact Us</h4></li>
              <li className="footer-icon-box"><i className="fa fa-envelope fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='#'>abc@gmail.com</a></li>
              <li className="footer-icon-box"><i className="fa fa-phone fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='#'>9876543210</a></li>
              <li className="footer-icon-box"><i className="fa fa-map-marker fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='#'>Ghaziabad</a></li>
              <li className="footer-icon-box2 text-center">If you have any queries feel free to Contact us !!!!</li>
            </ul>
          </div>
        </div>

        <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-connect">
              CONNECT <span className="footer-social-small">with</span> US
              </span>
              <span className="footer-social-overlap footer-social-icons-wrapper">
              <a href="#" target="_new" title="Facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" target="_new" title="Instagram"><i className="fa fa-instagram"></i></a>
              </span>
        </section>

<div className="row footer-copyright">

  <div className="col-sm-6 footer-copyright-text">
      <i className="fa fa-copyright" aria-hidden="true"></i> DinoMatric <span className="small"> | </span> <a href="#" rel="nofollow">Terms</a><span className="small"> | </span><a href="#"  rel="nofollow">Privacy</a>
  </div>

  <div className="col-sm-6 footer-copyright-text2">
      <i className="fa fa-pencil fa-1x fa-inverse" aria-hidden="true"></i> Powered by: <a href="#" target="_new">DinoMatric</a>.
  </div>

</div>

</div>
      </footer>
      </div>
    </div>
  );
}

export default Footer;
