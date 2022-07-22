import styled from 'styled-components';
import { device } from '../Utils/device';

const SocialButton = styled.a`
  margin-left: auto;
  // margin-right: 1.1rem;
`;

const GithubLink = styled.div`
  font-size: 0.6rem;
`;

const Icon = styled.i`
  color: #e97a63;
`;

const Header = () => {
  return (
    <AppBar>
      <NavBrand>
        <BrandLink href="/">VASTE.ID</BrandLink>
        <BrandDes>Multi Device Text Copyer</BrandDes>
      </NavBrand>
      <SocialButton
        href="https://github.com/erzetid/vaste"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <GithubLink className="nes-text is-error">Github</GithubLink>
        <Icon className="nes-icon github"></Icon>
      </SocialButton>
    </AppBar>
  );
};

const AppBar = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 auto;
`;
const NavBrand = styled.div`
  margin-right: auto;
  // margin-left: 1.1rem;
`;

const BrandLink = styled.a`
  color: #f7d51d;
  font-size: 1rem;
  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;
const BrandDes = styled.div`
  color: #f7d51d;
  font-size: 0.5rem;
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;

export default Header;
