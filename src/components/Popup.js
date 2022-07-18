import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Popup = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <Modal size="lg" isOpen={isOpen} toggle={() => setisOpen(isOpen)}>
        <ModalHeader toggle={() => setisOpen(isOpen)}>
          {" "}
          More info about {this.prop.coinName2}
        </ModalHeader>
        <ModalBody>
          <span style={{ text: "bold" }}> what is a cryptocurrency? </span>
          <img
            src="https://miro.medium.com/max/1400/1*M89-EbjkLIMcO5S7B9iomA.jpeg"
            alt="cryptocoins"
          />
          <br />
          First, lets define what normal currencies are. Currencies are a sort
          of “economic buffer”, they allow people to convert their efforts into
          something that maintains its value and can be converted back into
          goods or other services at a later point in time.
          <br />
          For its part, cryptography is the process of converting ordinary plain
          text into unintelligible text and vice-versa. Modern cryptography
          deals with confidentiality — information cannot be understood by
          anyone, integrity — information cannot be altered, and authentication
          — sender and receiver can confirm each other.
        </ModalBody>
      </Modal>
    </>
  );
};

export default Popup;
