import React from 'react';
import { Container, BannerWrapper } from './Banner.style';
import { Ionicons } from '@expo/vector-icons';

const Banner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Ionicons name="game-controller" size={100} color="black" />
      </BannerWrapper>
    </Container>
  );
};

export default Banner;
