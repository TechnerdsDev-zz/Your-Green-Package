import React from "react";
import garden from "../../assets/images/garden.png";
import cammcan from "../../assets/images/cammcan.png";
import mission from "../../assets/images/mission_dispensaries.png";
import neta from "../../assets/images/neta.png";
import rise from "../../assets/images/rise.png";
import insa from "../../assets/images/insa.jpg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { arr } from "../../assets/data/Book";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
export default function Partners({ isHome }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [code, setCode] = useState();
  const [stateValue, setStateValue] = useState({
    name: "Garden Remedies",
  });
  const [despensaries, setDespensaries] = useState("N/A");
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("garden-remedies-newton");
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  // const handleClick = () => {
  //   const obj = arr.find((el) => el["Zip Code"] == code);
  //   setDespensaries(obj.Dispensaries);
  // };

  const [lists, setLists] = useState([
    {
      img: garden,
      name: "Garden Remedies",
      description:
        " Founded in 2013, Garden Remedies is a provider of premium cannabis grown naturally in Central Massachusetts since 2016. It grows, creates, tests and packages its products at its cultivation center in Fitchburg, offering its products at their Marlborough, Melrose and Newton adult-use and medical dispensaries, as well as tothird-party dispensary partners across the Commonwealth",
      subName: "Order Now",
    },
    {
      img: neta,
      name: "NETA",
      description:
        "NETA is a passionate group of patient advocates, experienced professionals, industry leaders and philanthropists. We have come together to improve the quality of patients’ lives through personalized care and  the best in the art and science of medical marijuana.",
      subName: "Order Now",
    },
    {
      img: rise,
      name: "Rise Chelsea",
      description:
        " At Rise Dispensaries, we open our doors to the novice and experienced alike with unmatched variety and service, all in a cozy environment to make you feel right at home.",
      subName: "Coming Soon",
    },
    {
      img: mission,
      name: "Mission Dispensaries",
      description:
        " We think of Mission as a different kind of dispensary, not just filling orders, but fulfilling your needs as an individual. Whether you’re new to the world of cannabis or   a seasoned canna-sseur, we got you covered. Over the last 5 years, Mission has become one of New England's favorite dispensaries - renowned for crafting unforgettable experiences and award-winning products at sensible prices you won't find anywhere else.",
      subName: "Order Now",
    },
    {
      img: cammcan,
      name: "CommCan",
      description:
        "Dedicated to bringing world-class cannabis products to Massachusetts, CommCan is the Commonwealth's true home-grown cannabis company. Family-owned and operated by native Massachusetts residents without any outside consultants, investors or management companies.",
      subName: "Order Now",
    },
    {
      img: insa,
      name: "INSA",
      description:
        "Insa is not some la-di-da so-and-so that’s going to carry you away to a land of make believe. It’s cannabis for real life: the good days and the ‘bout to get better. Insa offers premium cannabis in a variety of formats and functions to help wind you up, calm you down, ease your ailments—and whatever you need in between.",
      subName: "Coming Soon",
    },
  ]);
  useEffect(() => {
    const mountArray = shuffle([...lists]);
    setLists(mountArray);
  }, []);

  const ZipCode = (props) => {
    if (!despensaries) {
      setModalShow(false);
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter "
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <strong>Your Green Package Partners</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {despensaries && despensaries != "N/A" && (
            <div className="my_btn">
              <div className="my_btn">
                {despensaries === "NETA" ? (
                  <div className="card">
                    <span>
                      <img
                        src={neta}
                        alt="Logo"
                        style={{
                          display: "block",
                          width: "50%",
                          margin: "auto",
                          maxWidth: "350px",
                        }}
                      />
                    </span>
                    <div className="container">
                      <h1>{despensaries}</h1>
                      <a
                        href="https://www.netacare.org/"
                        target="_blank"
                        className="custom_btn_box"
                        rel="noreferrer"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                ) : despensaries === "CommCan" ? (
                  <div className="card">
                    <span>
                      <img
                        src={cammcan}
                        alt="Logo"
                        style={{
                          display: "block",
                          width: "50%",
                          margin: "auto",
                          maxWidth: "350px",
                        }}
                      />
                    </span>
                    <div className="container">
                      <h1>{despensaries}</h1>
                      <a
                        href="https://yourgreenpackage.com/commcan-rehoboth"
                        className="custom_btn_box"
                        rel="noreferrer"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                ) : despensaries === "Garden Remedies, NETA, Mission" ? (
                  <>
                    <div class="row">
                      <div class="column">
                        <div className="card_zip">
                          <span>
                            <img
                              src={neta}
                              alt="Logo"
                              style={{
                                display: "block",
                                width: "50%",
                                margin: "auto",
                                maxWidth: "300px",
                              }}
                            />
                          </span>
                          <div className="container">
                            <h1>NETA</h1>
                            <a
                              href="https://www.netacare.org/"
                              className="custom_btn_box"
                              rel="noreferrer"
                            >
                              Order Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="column">
                        <div className="card_zip">
                          <span>
                            <img
                              src={garden}
                              alt="Logo"
                              style={{
                                display: "block",
                                width: "50%",
                                margin: "auto",
                                maxWidth: "300px",
                              }}
                            />
                          </span>
                          <div className="container">
                            <h1>Garden Remedies</h1>
                            <a
                              href
                              onClick={clickHandler}
                              className="custom_btn_box"
                              rel="noreferrer"
                            >
                              Order Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="column mx-auto">
                        <div
                          className="card_zip "
                          style={{ marginTop: "20px" }}
                        >
                          <span>
                            <img
                              src={mission}
                              alt="Logo"
                              style={{
                                display: "block",
                                width: "50%",
                                margin: "auto",
                                maxWidth: "300px",
                              }}
                            />
                          </span>
                          <div className="container">
                            <h1>Mission Dispensaries</h1>
                            <a
                              href="https://yourgreenpackage.com/MissionBrookline"
                              className="custom_btn_box"
                              rel="noreferrer"
                            >
                              Order Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a href="" className="custom_btn">
                    Order Now
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    );
  };

  return (
    <div className={isHome ? "" : "main_container padding_top"}>
      <div className="partner">
        <div className="auto_container">
          <div className="partner_inner">
            <div className="custom_heading">
              <h3>Our Partners</h3>
              <h2>Our Partners Services Are Live!</h2>
            </div>
            <div className="partner_list">
              <ul>
                {lists.map((el) => (
                  <li>
                    {el.name === "Garden Remedies" ? (
                      <div className="partner_main">
                        <span>
                          <img src={el.img} alt="Logo" />
                        </span>
                        <h4>{el.name}</h4>
                        <p>{el.description}</p>
                        <div className="my_btn">
                          <a onClick={clickHandler} className="custom_btn">
                            {el.subName}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="partner_main">
                        <span>
                          <img src={el.img} alt="Logo" />
                        </span>
                        <h4>{el.name}</h4>
                        <p>{el.description}</p>
                        <div className="my_btn">
                          {el.name === "NETA" ? (
                            <a
                              href="https://www.netacare.org/"
                              target="_blank"
                              className="custom_btn"
                              rel="noreferrer"
                            >
                              {el.subName}
                            </a>
                          ) : el.name === "CommCan" ? (
                            <a
                              href="https://yourgreenpackage.com/commcan-rehoboth"
                              className="custom_btn"
                              rel="noreferrer"
                            >
                              {el.subName}
                            </a>
                          ) : el.name === "Mission Dispensaries" ? (
                            <a
                              href="https://yourgreenpackage.com/MissionBrookline"
                              className="custom_btn"
                              rel="noreferrer"
                            >
                              {el.subName}
                            </a>
                          ) : el.name === "INSA" ? (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                              //href="https://yourgreenpackage.com/InsaSalem"
                              className="custom_btn"
                              rel="noreferrer"
                            >
                              {el.subName}
                            </a>
                          ) : (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a href="" className="custom_btn">
                              {el.subName}
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                ))}

                {/* <li>
                  {lists.map((el) => (
                    <div className="partner_main">
                      <span>
                        <img src={neta} alt="Logo" />
                      </span>
                      <h4>Neta</h4>
                      <p>
                        NETA is a passionate group of patient advocates,
                        experienced professionals, industry leaders and
                        philanthropists. We have come together to improve the
                        quality of patients’ lives through personalized care and
                        the best in the art and science of medical marijuana.
                      </p>
                      <div className="my_btn">
                        <a
                          href="https://www.netacare.org/"
                          className="custom_btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Order Now
                        </a>
                      </div>
                    </div>
                  ))}
                </li>

                <li>
                  <div className="partner_main">
                    <span>
                      <img src={rise} alt="Logo" />
                    </span>
                    <h4>Rise Chelsea</h4>
                    <p>
                      At Rise Dispensaries, we open our doors to the novice and
                      experienced alike with unmatched variety and service, all
                      in a cozy environment to make you feel right at home.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="partner_main">
                    <span>
                      <img src={mission} alt="Logo" />
                    </span>
                    <h4>Mission Dispensaries</h4>
                    <p>
                      We think of Mission as a different kind of dispensary, not
                      just filling orders, but fulfilling your needs as an
                      individual. Whether you’re new to the world of cannabis or
                      a seasoned canna-sseur, we got you covered. Over the last
                      5 years, Mission has become one of New England's favorite
                      dispensaries - renowned for crafting unforgettable
                      experiences and award-winning products at sensible prices
                      you won't find anywhere else.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="partner_main">
                    <span>
                      <img src={cammcan} alt="Logo" />
                    </span>
                    <h4>CommCan</h4>
                    <p>
                      Dedicated to bringing world-class cannabis products to
                      Massachusetts, CommCan is the Commonwealth's true
                      "home-grown" cannabis company. Family-owned and operated
                      by native Massachusetts residents without any outside
                      consultants, investors or management companies.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="custom_search" id="search">
              <label htmlFor="">
                See which Partner delivers to your Zipcode
              </label>
              <div className="custom_searchField">
                <input
                  onChange={handleChange}
                  value={code}
                  type="number"
                  placeholder="Enter Your Zipcode"
                />
                <button
                  // onClick={handleClick}
                  onClick={() => {
                    const obj = arr.find((el) => el["Zip Code"] == code);
                    setDespensaries(obj.Dispensaries);
                    setModalShow(true);
                  }}
                  className="custom_btn"
                >
                  Search
                </button>
              </div>
              {!despensaries && (
                <span>We currently do not deliver to this zipcode</span>
              )}
              <ZipCode show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
