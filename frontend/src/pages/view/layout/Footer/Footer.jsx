import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area bg-gray pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            {/* footer copyright */}

            <div className="copyright mb-30">
              <div className="footer-logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    alt="Logo"
                    src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
                  />
                </Link>
              </div>
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="https://hasthemes.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Flone
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Store location
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Orders tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Support Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Size guide</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget mb-30 ml-75">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* footer newsletter */}

            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3>SUBSCRIBE</h3>
              </div>
              <div className="subscribe-style">
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                {/* subscribe email */}
                {/* <SubscribeEmail mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
