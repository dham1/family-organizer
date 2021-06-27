import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SettingsIconSVG } from '../../assets/settings-gear.svg';


export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 800px){
    height:60px;
    padding:10px;
    margin-bottom:20px;
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  @media screen and (max-width: 800px){
    width:10px;
    margin-top:-25px;
    height:10%;
}
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    width:80%;
}
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

OptionLink.displayName = 'OptionLink';
