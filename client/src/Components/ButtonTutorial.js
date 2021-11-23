import styled, { css } from "styled-components";
import { device } from "../Utils/device";

const ButtonFixed = styled.a`
  @media ${device.tablet} {
    bottom: 4rem;
  }
  bottom: 3rem;
  right: 0;
  margin-right: -9rem;
  padding: 0 1.2rem;
  position: fixed;
  z-index: 999;
  transform: translate(0%);
  transition: 0.3s ease-out;

  ${(props) =>
    props.animated &&
    css`
      &:hover {
        position: fixed;
        transform: translate(-60%, 0%);
        transition: 0.3s ease-out;
      }
    `}
`;

const ButtonTutorial = () => {
  return (
    <ButtonFixed
      onclick="document.getElementById('dialog-tutorial').showModal();"
      animated
    >
      <i className="nes-logo is-large" />
      <span className="nes-text is-error">Tutorial</span>
    </ButtonFixed>
  );
};

export default ButtonTutorial;
