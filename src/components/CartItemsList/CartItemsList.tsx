import { Item, ItemListHeader, ItemsList, TotalValueContainer } from './styles';

const CartItemsList = () => {
  return (
    <ItemsList>
      <ItemListHeader>
        <p>Título(4)</p>
        <p>Valor</p>
      </ItemListHeader>
      <Item>
        <p>
          <span>1</span>
          5416234
        </p>
        <p>R$5,00</p>
      </Item>
      <Item>
        <p>
          <span>2</span>5416546
        </p>
        <p>R$5,00</p>
      </Item>
      <Item>
        <p>
          <span>3</span>5741359
        </p>
        <p>R$5,00</p>
      </Item>
      <Item>
        <p>
          <span>4</span>5874139
        </p>
        <p>R$5,00</p>
      </Item>
      <TotalValueContainer>
        <p>Valor total</p>
        <p>R$ 20,00</p>
      </TotalValueContainer>
    </ItemsList>
  );
};

export default CartItemsList;
