import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-dialog-polyfill";
import styled from "styled-components";
import Typed from "react-typed";

import qrSaweriaImg from "../Images/saweria.png";
import useModal from "../Utils/useModal";
import { device } from "../Utils/device";
import { sendTextContent } from "../Api";

const SendTextModal = ({ isShowing, hide, value }) => {
  const [token, setToken] = useState("");
  const changeToken = (event) => setToken(event.target.value);
  const sending = async () => {
    const result = await sendTextContent(token, value);
    console.log(result);
    if (result.status === "error") {
      return alert("fail");
    }
    return hide();
  };
  const newLocal = isShowing
    ? createPortal(
        <>
          <Modal open={true} className="nes-dialog is-dark is-rounded">
            <ModalContainer className="nes-container with-title is-dark is-centered">
              <ModalTitle className="title">Send To</ModalTitle>
              <InputToken
                maxLength={5}
                value={token}
                onChange={changeToken}
                type="text"
                className="nes-input is-primary"
              />
            </ModalContainer>
            <br />
            <Button onClick={hide} className="nes-btn">
              Close
            </Button>
            <Button onClick={sending} className="nes-btn is-primary">
              Send
            </Button>
          </Modal>
        </>,
        document.body
      )
    : null;
  return newLocal;
};
const InputToken = styled.input`
  max-width: 10rem;
  text-align: center;
`;

const SaweriaModal = ({ isShowing, hide }) => {
  const newLocal = isShowing
    ? createPortal(
        <>
          <Modal open={true} className="nes-dialog is-rounded">
            <ModalContainer className="nes-container with-title is-centered">
              <ModalTitle className="title">Scan Me</ModalTitle>
              <QRSaweria src={qrSaweriaImg}></QRSaweria>
            </ModalContainer>
            <br />
            <Button onClick={hide} className="nes-btn is-error">
              Close
            </Button>
          </Modal>
        </>,
        document.body
      )
    : null;
  return newLocal;
};
const QRSaweria = styled.img``;

const PrivacyModal = ({ isShowing, hide }) => {
  const newLocal = isShowing
    ? createPortal(
        <>
          <Modal open={true} className="nes-dialog is-rounded">
            <PrivacyContainer>
              <Typed
                strings={[
                  `We do not store your data.`,
                  `This site does not use cookies.`,
                  `We have security procedures in place to protect the loss, misuse and alteration of information within our control.`,
                ]}
                typeSpeed={40}
                loop
              />
              <br />
            </PrivacyContainer>
            <EmailContact>
              Feedback, Suggestions and Messages: <br />
              <a href="mailto:fahrizalm14@gmail.com">Send Mail</a>
            </EmailContact>
            <br />
            <Button onClick={hide} className="nes-btn is-error">
              Close
            </Button>
          </Modal>
        </>,
        document.body
      )
    : null;
  return newLocal;
};
const PrivacyContainer = styled.div`
  width: 15rem;
  height: 10rem;
  @media ${device.tablet} {
    width: 30rem;
    height: 10rem;
  }
`;
const EmailContact = styled.p`
  padding-top: 6rem;
  max-width: 15rem:
  @media ${device.tablet} {
    padding-top: 0rem;
  }
`;

const TutorialModal = ({ isShowing: isShow, hide }) => {
  console.log(isShow);
  const btnPaypal = () => {
    window.open(
      "https://paypal.com/paypalme/fahrizalm14",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };
  const btnGopay = () => {
    window.open(
      "https://app.midtrans.com/payment-links/1635143252510",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };
  const { isShowing, toggle } = useModal();
  const newLocal = isShow
    ? createPortal(
        <>
          <Modal open={true} className="nes-dialog is-dark is-rounded">
            <ModalContainer className="nes-container with-title is-dark is-centered">
              <ModalTitle className="title">Video Tutorial</ModalTitle>
              <IFrame
                width="100%"
                height={315}
                src="https://www.youtube.com/embed/nLxmuh6wCVY"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </ModalContainer>
            <Typed
              strings={[`Please click GooglePlay button to download The App.`]}
              typeSpeed={60}
            />
            <br />
            <Button onClick={() => btnPaypal()} className="nes-btn is-primary">
              PayPal
            </Button>
            <Button onClick={() => btnGopay()} className="nes-btn is-success">
              Gopay
            </Button>
            <Button onClick={toggle} className="nes-btn is-error">
              Saweria
            </Button>
            <br />
            <Button onClick={hide} className="nes-btn is-error">
              Close
            </Button>
          </Modal>
          <SaweriaModal isShowing={isShowing} hide={toggle}></SaweriaModal>
        </>,
        document.body
      )
    : null;
  return newLocal;
};
const IFrame = styled.iframe``;
const ModalContainer = styled.div``;

//root
const ModalTitle = styled.p``;
const Button = styled.button``;

export { SaweriaModal, TutorialModal, PrivacyModal, SendTextModal };
