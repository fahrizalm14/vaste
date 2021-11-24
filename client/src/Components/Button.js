import styled, { css } from "styled-components";
import { device } from "../Utils/device";
import { TutorialModal } from "./Modal";
import useModal from "../Utils/useModal";

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
  const { isShowing, toggle } = useModal();
  return (
    <>
      <ButtonFixed onClick={toggle} animated>
        <i className="nes-logo is-large" />
        <span className="nes-text is-error">Tutorial</span>
      </ButtonFixed>
      <TutorialModal isShowing={isShowing} hide={toggle}></TutorialModal>
    </>
  );
};

export { ButtonTutorial };
