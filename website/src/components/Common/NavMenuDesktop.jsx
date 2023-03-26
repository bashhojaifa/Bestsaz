//External Lib Import
import { useState } from "react";
import { Navbar, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

//Internal Lib Import
import Logo from "../../assets/images/logo.png";
import { setLogout } from "../../redux/slice/authReducer";

const NavMenuDesktop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [items, setItems] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.authReducer);

  const onChanges = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
  };

  const onClicks = () => {
    if (searchTerm.length >= 2) {
      navigate(`/search/${searchTerm}`);
    } else {
      setPlaceholder("Search Your Product!");
    }
  };

  if (userDetails) {
    return (
      <>
        <Navbar fixed={"top"} bg="light" className="p-2">
          <Row className="w-100">
            <Col className="p-1" md={4} sm={12} xs={12}>
              <Link to={"/"}>
                <a className="btn">
                  <img className="nav-logo" src={Logo} alt="logo" />
                </a>
              </Link>
              <Link to="/cart">
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> {items}
                  &nbsp;items
                </Button>
              </Link>
            </Col>
            <Col className="p-1" md={4} sm={12} xs={12}>
              <div className="input-group w-100">
                <input
                  onChange={onChanges}
                  type="text"
                  className="form-control"
                  placeholder={placeholder}
                  aria-label="Text input with segmented dropdown button"
                />
                <button
                  type="button"
                  className="btn site-btn"
                  onClick={onClicks}
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </Col>
            <Col className="p-1" md={4} sm={12} xs={12}>
              <Link to="/favourite" className="btn">
                <i className="fa h4 fa-heart"></i>
                <sup>
                  <span className="badge text-white bg-danger">3</span>
                </sup>
              </Link>
              <Link to="/notification" className="btn">
                <i className="fa h4  fa-bell"></i>
                <sup>
                  <span className="badge text-white bg-danger">4</span>
                </sup>
              </Link>
              <Dropdown className="d-inline-flex float-right mr-5">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to={"/favourite"}>Favorite</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to={"/profile"}>Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link onClick={() => dispatch(setLogout())}>Logout</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Navbar>
      </>
    );
  }

  return (
    <>
      <Navbar fixed={"top"} bg="light" className="p-2">
        <Row className="w-100">
          <Col className="p-1" md={4} sm={12} xs={12}>
            <Link to={"/"}>
              <a className="btn">
                <img className="nav-logo" src={Logo} alt="logo" />
              </a>
            </Link>
          </Col>
          <Col className="p-1" md={4} sm={12} xs={12}>
            <div className="input-group w-100">
              <input
                placeholder={placeholder}
                onChange={onChanges}
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
              />
              <button type="button" onClick={onClicks} className="btn site-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </Col>
          <Col className="p-1" md={4} sm={12} xs={12}>
            <Link to="/favourite" className="btn">
              <i className="fa h4 fa-heart"></i>
              <sup>
                <span className="badge text-white bg-danger">3</span>
              </sup>
            </Link>
            <Link to="/notification" className="btn">
              <i className="fa h4  fa-bell"></i>
              <sup>
                <span className="badge text-white bg-danger">4</span>
              </sup>
            </Link>
            <a className="btn">
              <i className="fa h4 fa-mobile-alt"></i>
            </a>
            <Link to="/login" className="h4 btn">
              LOGIN
            </Link>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default NavMenuDesktop;
