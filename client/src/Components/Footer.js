import styled from "styled-components";
import playButtonImg from "../Images/play-button.png";
import { Row } from "react-flexbox-grid";
import { device } from "../Utils/device";
import useModal from "../Utils/useModal";
import { PrivacyModal } from "./Modal";

const Footer = () => {
  const { isShowing, toggle } = useModal();
  return (
    <FooterText className="nes-text is-error" center="xs">
      <FooterLink className="nes-text is-error" href="/">
        VASTE.ID
      </FooterLink>
      <PlayButton
        className="play-btn"
        src={playButtonImg}
        alt="GooglePlayButton"
      />
      <FooterLink className="nes-text" onClick={toggle}>
        Privacy
      </FooterLink>
      <PrivacyModal isShowing={isShowing} hide={toggle}></PrivacyModal>
    </FooterText>
  );
};

const FooterText = styled(Row)`
  margin-top: 1.5rem;
`;

const PlayButton = styled.img`
  @media ${device.tablet} {
    max-width: 10rem;
  }
  max-width: 6rem;
  height: 100%;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  margin-top: 1rem;
  @media ${device.tablet} {
    margin-top: 1.5rem;
  }
`;
export default Footer;
