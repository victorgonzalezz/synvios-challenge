import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const TouchableLogo = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;