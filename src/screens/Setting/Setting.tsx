import React from 'react';
import { Text, Pressable } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../constants/colors';

const Setting = () => {
  return (
    <Container>
      <Version>버전 0.1.0</Version>
      <Pressable onPress={() => console.log('게임 이용 방법')}>
        <Text>게임 이용 방법</Text>
      </Pressable>
      <Question>문의하기</Question>
    </Container>
  );
};

export default Setting;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgColor};
`;

const Version = styled.Text``;

const Question = styled.Text``;
