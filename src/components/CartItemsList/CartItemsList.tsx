import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { formatCurrency } from '@/utils/formatCurrency';
import {
  Item,
  ItemListHeader,
  Items,
  ItemsList,
  TotalValueContainer,
} from './styles';

const CartItemsList = () => {
  const { cartItems } = useCart();
  const { selectedDrawPromo } = useCurrentDraw();

  const unitTitlePrice =
    (selectedDrawPromo?.price || 0) / (selectedDrawPromo?.quantity || 1);

  return (
    <ItemsList>
      <ItemListHeader>
        <p>Título({cartItems.length})</p>
        <p>Valor</p>
      </ItemListHeader>
      <Items>
        {cartItems.map((cartTitle, index) => (
          <Item key={cartTitle.id}>
            <p>
              <span>{index + 1}</span>
              {cartTitle.number}
            </p>
            <p>{formatCurrency(unitTitlePrice || 0)}</p>
          </Item>
        ))}
      </Items>
      <TotalValueContainer>
        <p>Valor total</p>
        <p>{formatCurrency(unitTitlePrice * cartItems.length)}</p>
      </TotalValueContainer>
    </ItemsList>
  );
};

export default CartItemsList;
