import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { device } from "../Utils/device";
import qrShowImg from "../Images/saweria.png";

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

const QRCode = styled.img`
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

const MainContent = () => {
  return (
    <Content>
      <Row>
        <Col xs={12} md={4}>
          <ScanMe className="nes-container with-title is-centered is-error">
            <NesTitle className="nes-text title is-warning">Scan Me</NesTitle>
            <QRCode
              src={qrShowImg}
              alt="QRCode"
              height={512}
              width={512}
            ></QRCode>
            <TokenLabel className="nes-text is-warning" htmlFor="token">
              Token
            </TokenLabel>
            <Token
              type="text"
              id="token"
              defaultValue="bcvsyshsh"
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
              id="textContent"
              className="nes-textarea is-error"
            ></TextArea>
            <Row center="xs">
              <Button type="button" className="nes-btn is-warning">
                Send
              </Button>
              <Button type="button" className="nes-btn is-error">
                Copy
              </Button>
            </Row>
          </TextContent>
        </Col>
      </Row>
    </Content>
  );
};

export default MainContent;
