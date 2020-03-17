import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductList,
  Container,
  Product,
  Picture,
  Name,
  Price,
  AddButton,
  AddButtonQuantityView,
  AddButtonQuantityText,
  AddButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(id);

    // navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={produto => String(produto.id)}
          renderItem={({ item }) => (
            <Product>
              <Picture source={{ uri: item.image }} />
              <Name>{item.title}</Name>
              <Price>{item.priceFormatted}</Price>
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <AddButtonQuantityView>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <AddButtonQuantityText>
                    {amount[item.id] || 0}
                  </AddButtonQuantityText>
                </AddButtonQuantityView>
                <AddButtonText>Adicionar</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
