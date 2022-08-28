import React from 'react';
import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/@shared/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<any, 'Home'>;

const Home = ({ navigation: { navigate } }: HomeScreenProps) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Changwon{`\n`}Tour Game</Title>
      </TitleWrapper>
      <Banner />
      <BtnWrapper>
        <Button
          onPress={() => navigate('OnBoarding', { screen: 'GameTheme' })}
          content="시작하기"
        />
        <Button onPress={() => navigate('OnBoarding', { screen: 'GameLoad' })} content="불러오기" />
      </BtnWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
`;

const TitleWrapper = styled.View`
  flex: 2.5;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 700;
`;

const BtnWrapper = styled.View`
  flex: 1.5;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
