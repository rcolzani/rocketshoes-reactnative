import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  margin: 55px 15px 0;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Product = styled.View`
  flex-direction: column;
  padding-bottom: 25px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductPicture = styled.Image`
  width: 70px;
  height: 70px;
`;

export const ProductDescription = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 0 25px;
`;
export const ProductName = styled.Text``;
export const ProductPrice = styled.Text``;
export const DeleteButton = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  flex-direction: row;
  background: #eee;
  padding: 10px;
`;

export const ProductControlsQuantity = styled.View`
  flex-direction: row;
`;

export const ProductTotal = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
`;
export const ProductRemoveButton = styled.TouchableOpacity``;
export const ProductQuantity = styled.Text`
  width: 50px;
  text-align: right;
  padding: 0 5px;
  background: #fff;
`;
export const ProductAddButton = styled.TouchableOpacity``;

export const Footer = styled.View`
  align-items: center;
`;
export const TotalText = styled.Text`
  color: #999999;
  font-weight: bold;
`;
export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 30px;
`;
export const FinalizeButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
`;
export const FinalizeButtonText = styled.Text`
  min-width: 100%;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;
