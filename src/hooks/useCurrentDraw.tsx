/* eslint-disable react/jsx-no-constructed-context-values */
import { DrawPromo, IDraw } from '@/interfaces/Draw';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { isBefore, parseISO } from 'date-fns';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface PromoOption {
  value: number;
  label: string;
  price: number;
  quantity: number;
}

interface CurrentDrawData {
  currentDraw?: IDraw;
  selectedDrawPromo?: PromoOption;
  setSelectedDrawPromo: React.Dispatch<
    React.SetStateAction<PromoOption | undefined>
  >;
  promoOptions: PromoOption[];

  disablePurchase: boolean;
  setDisablePurchase: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentDrawContext = createContext({} as CurrentDrawData);

interface Props {
  children: React.ReactNode;
}

const drawPromoToOption = (drawPromotion: DrawPromo) => {
  return {
    label:
      drawPromotion.attributes.quantity === 1
        ? '1 Título'
        : `${drawPromotion.attributes.quantity} Títulos`,
    value: drawPromotion.id,
    price: drawPromotion.attributes.value,
    quantity: drawPromotion.attributes.quantity,
  };
};

const CurrentDrawProvider = ({ children }: Props) => {
  const [currentDraw, setCurrentDraw] = useState<IDraw>();
  const [selectedDrawPromo, setSelectedDrawPromo] = useState<PromoOption>();
  const [disablePurchase, setDisablePurchase] = useState(true);

  useEffect(() => {
    getCurrentDraw();
  }, []);

  const getCurrentDraw = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          'filters[isPublished][$eq]': true,
          populate: 'draw_promos,image',
        },
      });

      const draw = data?.data?.[0];

      setCurrentDraw(draw);

      const finalDate =
        draw?.attributes?.dateFinal || draw?.attributes?.dateDraw
          ? parseISO(draw?.attributes?.dateFinal || draw?.attributes?.dateDraw)
          : undefined;

      setDisablePurchase(!!finalDate && isBefore(finalDate, new Date()));

      const drawPromo = draw?.attributes?.draw_promos?.data?.[0];

      if (drawPromo) {
        setSelectedDrawPromo(drawPromoToOption(drawPromo));
      }
    } catch (error) {
      handleError(error);
    }
  };

  const promoOptions = useMemo(() => {
    const drawPromos = currentDraw?.attributes?.draw_promos?.data || [];

    drawPromos.sort((a, b) => a.attributes.quantity - b.attributes.quantity);

    return drawPromos.map(drawPromoToOption);
  }, [currentDraw]);

  return (
    <CurrentDrawContext.Provider
      value={{
        currentDraw,
        setSelectedDrawPromo,
        selectedDrawPromo,
        promoOptions,
        disablePurchase,
        setDisablePurchase,
      }}
    >
      {children}
    </CurrentDrawContext.Provider>
  );
};

export default CurrentDrawProvider;

export const useCurrentDraw = () => useContext(CurrentDrawContext);
