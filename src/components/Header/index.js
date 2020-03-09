import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cart, navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cart.length}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cart: state.cart,
}))(Header);
