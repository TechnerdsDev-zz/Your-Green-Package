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
                      "A. Anyone who Is 21+ years of age and lives In a town that allows for adult use cannabis delivery."
                    }
                    eventKey={"1"}
                  />
                  <Accordian
                    question={"Who Can Accept An Adult Use Delivery Order?"}
                    answer={
                      "Only the ordering customer can accept a delivery order. A delivery driver will validate the customers ID matches the ID provided when ordering."
                    }
                    eventKey={"2"}
                  />
                  <Accordian
                    question={"How Do I Order Adult Use Delivery"}
                    answer={
                      "Simply visit our partners page, select your dispensary, pick your favorite products, and delivery time."
                    }
                    eventKey={"3"}
                  />
                  <Accordian
                    question={" Where Do You Deliver?"}
                    answer={
                      "Simply visit our partners page, select your dispensary, pick your favorite products, and delivery time."
                    }
                    eventKey={"4"}
                    // click={"Click Here"}
                  />
                  <Accordian
                    question={"How Do I Pay For Delivery?"}
                    answer={
                      "You can pay for your delivery with exact cash or debit."
                    }
                    eventKey={"5"}
                  />
                  <Accordian
                    question={"What Do I Need In Preparation For My Delivery?"}
                    answer={
                      "In order to receive your delivery, you will need your payment (exact cash, debit card, or Canpay) and the physical copy of the government issued ID that was used for delivery registration."
                    }
                    eventKey={"6"}
                  />
                  <Accordian
                    question={"How Do I Reschedule My Delivery?"}
                    answer={
                      "Yes, you can modify your delivery order by contacting the dispensary"
                    }
                    eventKey={"7"}
                  />
                  <Accordian
                    question={"Where Can I Receive A Delivery?"}
                    answer={
                      "You can receive a delivery at any residential address within our delivery radius. Some municipalities do not allow cannabis delivery services. You can check If we delivery to your area here"
                    }
                    eventKey={"8"}
                  />
                  <Accordian
                    question={"How Often Do You Deliver?"}
                    answer={
                      "We delivery Monday - Sunday with multiple time slots each day. You can select your delivery time and day In the checkout process."
                    }
                    eventKey={"9"}
                  />
                  <Accordian
                    question={
                      "Can I Modify A Delivery Order After It’s Placed?"
                    }
                    answer={
                      "Yes, you can modify your delivery order by contacting the dispensary you ordered from."
                    }
                    eventKey={"9a"}
                  />
                  <Accordian
                    question={"Where Can You Not Deliver?"}
                    answer={
                      "We cannot deliver to businesses. Including hotels, schools, federal and state buildings, or any residences with municipalities that have a cannabis delivery ban in place."
                    }
                    eventKey={"8a"}
                  />
                  <Accordian
                    question={
                      "What Happens If I’m Unavailable To Accept My Delivery?"
                    }
                    answer={
                      "Your delivery will be canceled and you will need to submit a new delivery order for a future date."
                    }
                    eventKey={"7a"}
                  />
                  <Accordian
                    question={"How Do I Know When To Expect A Delivery?"}
                    answer={
                      "Delivery customers will have a range of times and days to choose from when finalizing their order. On the day of your delivery, we will notify you via a series of texts and emails to provide near, real time updates on the status of your delivery."
                    }
                    eventKey={"6a"}
                  />
                  <Accordian
                    question={
                      "When Do You Plan On Expanding Delivery To My Area?"
                    }
                    answer={
                      "We will continue to expand our delivery radiuses as this portion of our business grows. Join our mailing list for updates on delivery expansion."
                    }
                    eventKey={"5a"}
                  />
                  <Accordian
                    question={"Can An Out Of State Resident Order Delivery?"}
                    answer={
                      "Yes, as long as you have a government Issued ID, and your delivery address Is a residential address within one of our partners approved delivery radius."
                    }
                    eventKey={"4a"}
                  />
                  <Accordian
                    question={"How Discreet Is Cannabis/Marijuana Delivery?"}
                    answer={
                      "We respect your privacy by delivering your order in a discreet unmarked car with professionally dressed delivery drivers."
                    }
                    eventKey={"3a"}
                  />
                  <Accordian
                    question={"What Is The “CCC”?"}
                    answer={
                      "The Cannabis Control Commission (CCC) is a state agency responsible for implementing and administering the laws enabling access to medical and adult use of marijuana in the Commonwealth of Massachusetts."
                    }
                    eventKey={"2a"}
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
