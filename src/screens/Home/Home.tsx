import React, { useState } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Swiper from 'react-native-swiper';
import icons from '../../constants/icons';

/** test module */
import { Ionicons } from '@expo/vector-icons';
import Banner from '../../components/Banner/Banner';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// console.log(Math.round(SCREEN_WIDTH / 8));
const Home = ({ navigation: { navigate } }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Banner />
      <BtnWrapper>
        <Btn onPress={() => console.log('test')}>
          <BtnText>시작하기</BtnText>
        </Btn>
      </BtnWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
`;

const Btn = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: ${colors.btnColor};
  border-radius: 10px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: 500;
`;

const BtnWrapper = styled.View`
  width: 100%;
  height: 90%;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
`;
