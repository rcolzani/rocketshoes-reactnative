import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  ProductList,
  Product,
  ProductInfo,
  ProductPicture,
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductControls,
  ProductControlsQuantity,
  DeleteButton,
  ProductTotal,
  ProductRemoveButton,
  ProductAddButton,
  ProductQuantity,
  Footer,
  TotalText,
  TotalPrice,
  FinalizeButton,
  FinalizeButtonText,
} from './styles';

function Cart({ navigation, cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductList
        data={cart}
        keyExtractor={produto => String(produto.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductInfo>
              <ProductPicture source={{ uri: item.image }} />
              <ProductDescription>
                <ProductName>{item.title}</ProductName>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductDescription>
              <DeleteButton onPress={() => removeFromCart(item.id)}>
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </DeleteButton>
            </ProductInfo>
            <ProductControls>
              <ProductControlsQuantity>
                <ProductRemoveButton onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ProductRemoveButton>
                <ProductQuantity>{item.amount}</ProductQuantity>
                <ProductAddButton onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ProductAddButton>
              </ProductControlsQuantity>
              <ProductTotal>{item.subtotal}</ProductTotal>
            </ProductControls>
          </Product>
        )}
      />
      <Footer>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>{total}</TotalPrice>
        <FinalizeButton>
          <FinalizeButtonText>finalizar pedido</FinalizeButtonText>
        </FinalizeButton>
      </Footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
