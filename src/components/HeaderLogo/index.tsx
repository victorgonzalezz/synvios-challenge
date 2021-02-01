import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, TouchableLogo, Logo } from './styles';

const HeaderLogo = ({ navigation }) => {
  return (
    <Wrapper>
      <Container>
        <TouchableLogo onPress={() => navigation.navigate('Home')} />
      </Container>
    </Wrapper>
  );
};
