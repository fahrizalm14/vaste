import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { device } from "../Utils/device";
import qrShowImg from "../Images/qrImage.png";
import { getToken } from "../Api";
import QRCodeStyling from "qr-code-styling";
import io from "socket.io-client";

const socket = io.connect("/");

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  margin: "10",
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: { type: "square", color: "#f7d51d" },
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
  const ref = useRef(null);

  const getTokenString = async () => {
    const { token } = await getToken();
    setToken(token);
    setUrl(token);
  };

  const stringTextContent = "Saya ini sedang baik-baik saja.";

  useEffect(() => {
    getTokenString();
  }, []);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
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
          </ScanMe>
        </Col>
        <Col xs={12} md={8}>
          <TextContent className="nes-container with-title is-centered is-error">
            <NesTitle className="nes-text title is-error" htmlFor="textContent">
              Copy/Paste
            </NesTitle>
            <TextArea
              value={stringTextContent}
              id="textContent"
              className="nes-textarea is-error"
            ></TextArea>

            <Row center="xs">
              <Button type="button" className="nes-btn is-warning">
                Send
              </Button>
              <Button
                type="button"
                className="nes-btn is-error"
                onClick={() => setVisibilty("block")}
              >
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
  font-size: 0.8rem;
  color: #e97a63;
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

export default MainContent;
