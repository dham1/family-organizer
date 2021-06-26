import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px){
    padding:20px;
}
`;

export const ContactTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;


`;
export const ContactInfo = styled.div`
  display: block;
  justify-content: space-between;
  font-size:25px;

  a{
    margin-left:10px;
  }
`;
export const ContactInfoContainer = styled.div`
  display: block;
  justify-content: space-between;
  padding: 70px 0;
  text-align: center;
  @media screen and (max-width: 800px){
    padding:20px;
    display: block;
    text-align: left;
}
`;