import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import QRCodeStyling from "qr-code-styling";
import io from "socket.io-client";

import { device } from "../Utils/device";
import qrShowImg from "../Images/qrImage.png";
// import smileGif from "../Images/smile.gif";
import { getToken } from "../Api";
import { SendTextModal } from "./Modal";
import useModal from "../Utils/useModal";

const socket = io("https://vaste-app.herokuapp.com").connect();

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  margin: "10",
  imageOptions: { hideBackgroundDots: true, margin: 0 },
  // dotsOptions: { type: 'square', color: '#e97a63' },
  backgroundOptions: { color: "#ffffff" },
  image: `${qrShowImg}`,
  dotsOptionsHelper: {
    colorType: { single: true, gradient: false },
  },
  cornersSquareOptions: { type: "square", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
  },
  cornersDotOptions: { type: "", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
  },
});
const MainContent = () => {
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("https://vaste.site");
  const [textContent, setTexContent] = useState("");
  const ref = useRef(null);
  const { isShowing, toggle } = useModal();

  const getTokenString = async () => {
    const { token } = await getToken();
    setToken(token);
    setUrl(token);
  };

  const changeText = (event) => setTexContent(event.target.value);

  const updateClipboard = (newClip) => {
    navigator.clipboard.writeText(newClip).then(() => {
      setVisibilty("block");
    });
  };

  const copyText = () => {
    if (textContent === "") return alert("Masih kosong");
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        updateClipboard(textContent);
      }
    });
  };

  const sendText = () => {
    if (textContent === "") {
      alert("kosong");
    } else {
      toggle();
    }
  };

  // receive message
  socket.on(token, (arg) => {
    setTexContent(arg.textContent);
  });

  useEffect(() => {
    getTokenString();
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: JSON.stringify(url),
    });
  }, [url]);

  const [visibility, setVisibilty] = useState("none");
  if (visibility === "block") setTimeout(() => setVisibilty("none"), 3000);
  return (
    <Content>
      <Row>
        <Col xs={12} md={4}>
          <ScanMe className="nes-container with-title is-centered is-error">
            <NesTitle className="nes-text title is-warning">Scan Me</NesTitle>
            <QRCode ref={ref} />

            {/* <SmileGif src={smileGif} /> */}

            <TokenLabel className="nes-text is-warning" htmlFor="token">
              Token
            </TokenLabel>
            <ButtonReloadToken onClick={getTokenString}>
              &#x21bb;
            </ButtonReloadToken>
            <Token
              type="text"
              id="token"
              defaultValue={token}
              className="nes-input is-warning"
              readOnly
            />

            {/* <Button className="nes-btn is-warning" onClick={sendText}>
              Send
            </Button> */}
          </ScanMe>
        </Col>
        <Col xs={12} md={8}>
          <TextContent
            className="nes-container with-title is-centered is-error"
            readOnly
          >
            <NesTitle className="nes-text title is-error" htmlFor="textContent">
              Copy/Paste
            </NesTitle>
            <TextArea
              value={textContent}
              id="textContent"
              className="nes-textarea is-error"
              onChange={changeText}
            ></TextArea>

            <Row center="xs">
              <Button className="nes-btn is-warning" onClick={sendText}>
                Send
              </Button>
              <Button className="nes-btn is-error" onClick={copyText}>
                Copy
                <BaloonCopied
                  style={{ display: visibility }}
                  className="nes-balloon from-left is-dark"
                >
                  copied
                </BaloonCopied>
              </Button>
            </Row>
          </TextContent>
        </Col>
        <SendTextModal
          value={textContent}
          isShowing={isShowing}
          hide={toggle}
        ></SendTextModal>
      </Row>
    </Content>
  );
};

const Content = styled.div`
  padding-top: 2rem;
`;

const ScanMe = styled.div`
  min-height: 25rem;
  margin-bottom: 1.4rem;
  border-color: #f7d51d;
  @media ${device.tablet} {
    margin-bottom: 0rem;
  }
`;

const TextContent = styled.div`
  min-height: 25rem;
  border-color: #e97a63;
`;

const NesTitle = styled.label``;

const TextArea = styled.textarea`
  min-height: 16rem;
  font-size: 0.5rem;
`;

const QRCode = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const TokenLabel = styled.label``;

const Token = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&display=swap");
  font-family: "Inconsolata", monospace;
  color: #e97a63;
  font-size: 2rem;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const BaloonCopied = styled.div`
  display: none;
  position: absolute;
  font-size: 12px;
  bottom: 0;
  left: 25px;
  z-index: 9;
`;

const ButtonReloadToken = styled.button`
  border: none;
  font-size: 1.2rem;
  color: #e97a63;
  background: none;
`;

// const SmileGif = styled.img`
//   width: auto;
//   height: 100%;
// `;

export default MainContent;
