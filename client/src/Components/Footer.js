import styled from "styled-components";
import playButtonImg from "../Images/play-button.png";
import { Row } from "react-flexbox-grid";
import { device } from "../Utils/device";
const FooterText = styled(Row)`
  margin-top: 2rem;
`;

const PlayButton = styled.img`
  @media ${device.tablet} {
    max-width: 10rem;
  }
  max-width: 6rem;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  margin-top: 1.5rem;
  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterText className="nes-text is-error" center="xs">
      <FooterLink className="nes-text is-error" href="#">
        VASTE.ID
      </FooterLink>
      <PlayButton className="play-btn" src={playButtonImg} />
      <FooterLink
        className="nes-text"
        onclick="document.getElementById('dialog-privasi').showModal();"
      >
        Privacy
      </FooterLink>
    </FooterText>
  );
};

export default Footer;
