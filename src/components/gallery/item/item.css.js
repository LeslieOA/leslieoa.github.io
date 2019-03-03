import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Item = styled.figure`
  background: rgba(255,255,0,1); 
  outline: 1px solid red;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem 0;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem 0;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
