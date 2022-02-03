import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Accordian from "../elements/Accordian";
export default function Faqs() {
  return (
    <div className="main_container padding_top">
      {/* faqs section start */}
      <div className="faqs">
        <div className="auto_container">
          <div className="faqs_inner">
            <div className="custom_heading">
              <h3>FAQS</h3>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="accodian_main">
              <Accordion defaultActiveKey="0" flush>
                <ul>
                  <Accordian
                    question={"Who Can Place An Adult Use Delivery Order?"}
                    answer={
                      " Anyone who is 21+ years of age, has created an account with NETA, lives in the delivery radius, and hascompleted the ID verification step."
                    }
                    eventKey={"1"}
                  />
                  <Accordian
                    question={"Who Can Accept An Adult Use Delivery Order?"}
                    answer={""}
                    eventKey={"2"}
                  />
                  <Accordian
                    question={"How Do I Order Adult Use Delivery"}
                    answer={""}
                    eventKey={"3"}
                  />
                  <Accordian
                    question={" Where Do You Deliver?"}
                    answer={""}
                    eventKey={"4"}
                  />
                  <Accordian
                    question={"How Do I Know When To Expect A Delivery?"}
                    answer={""}
                    eventKey={"5"}
                  />
                  <Accordian
                    question={"What Do I Need In Preparation For My Delivery?"}
                    answer={""}
                    eventKey={"6"}
                  />
                  <Accordian
                    question={"How Do I Know My ID Is Secure?"}
                    answer={""}
                    eventKey={"7"}
                  />
                  <Accordian
                    question={"Where Can I Receive A Delivery?"}
                    answer={""}
                    eventKey={"8"}
                  />
                  <Accordian
                    question={"Where Do You Deliver?"}
                    answer={""}
                    eventKey={"9"}
                  />
                  <Accordian
                    question={"How Do I Pay For Delivery?"}
                    answer={""}
                    eventKey={"9a"}
                  />
                  <Accordian
                    question={
                      "Can I Modify A Delivery Order After It’s Placed?"
                    }
                    answer={""}
                    eventKey={"8a"}
                  />
                  <Accordian
                    question={"How Do I Reschedule My Delivery?"}
                    answer={""}
                    eventKey={"7a"}
                  />
                  <Accordian
                    question={
                      "What Happens If I’m Unavailable To Accept My Delivery?"
                    }
                    answer={""}
                    eventKey={"6a"}
                  />
                  <Accordian
                    question={" How Often Do You Deliver?"}
                    answer={""}
                    eventKey={"5a"}
                  />
                  <Accordian
                    question={
                      "When Do You Plan On Expanding Delivery To My Area?"
                    }
                    answer={""}
                    eventKey={"4a"}
                  />
                  <Accordian
                    question={"What Is The “CCC”?"}
                    answer={""}
                    eventKey={"3a"}
                  />
                  <Accordian
                    question={"Where Can I Receive A Delivery?"}
                    answer={""}
                    eventKey={"2a"}
                  />
                  <Accordian
                    question={"How Discreet Is Cannabis/Marijuana Delivery?"}
                    answer={""}
                    eventKey={"1a"}
                  />
                  <Accordian
                    question={" Accordion Item #"}
                    answer={""}
                    eventKey={"1b"}
                  />
                  <Accordian
                    question={
                      "What Happens If My Government ID Address And  Delivery Address Don’t Match?"
                    }
                    answer={""}
                    eventKey={"2b"}
                  />
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* faqs section end */}
    </div>
  );
}
