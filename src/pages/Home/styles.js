import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 40px 0 0 10px;
  background: #000;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const Product = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  max-width: 250px;
  max-height: 380px;
`;

export const Picture = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: auto 0 20px;
`;

export const AddButton = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;

  align-items: center;
  margin-top: auto;
`;

export const AddButtonQuantityView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddButtonQuantityText = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
