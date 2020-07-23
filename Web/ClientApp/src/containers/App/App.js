import React from 'react';
import styled from '@emotion/styled';
//import { ThemeContext } from '../commons/Theme/ThemeProvider'

import Routes from '../../Routes/Routes';

//providers 
import { AuthProvider } from '../../contexts/AuthProvider';

const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  h1 {
    color: ${props => props.theme.body};
  };
  h2 {
    color: ${props => props.theme.body};
  };
  color: ${props => props.theme.body};
  padding: 3px;
  height: 100%;
  overflow-x: hidden;
`;


export default () => {

  return (
    <Wrapper>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </Wrapper>
  )
}
