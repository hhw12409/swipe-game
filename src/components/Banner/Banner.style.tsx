import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const BannerWrapper = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cardColor};
`;
