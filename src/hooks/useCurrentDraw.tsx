/* eslint-disable react/jsx-no-constructed-context-values */
import { IDraw } from '@/interfaces/Draw';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { createContext, useContext, useEffect, useState } from 'react';

export interface PromoOption {
  value: number;
  label: string;
  price: number;
}

interface CurrentDrawData {
  currentDraw?: IDraw;
  selectedDrawOption?: PromoOption;
  setSelectedDrawOption: React.Dispatch<
    React.SetStateAction<PromoOption | undefined>
  >;
  promoOptions: PromoOption[];
}

const CurrentDrawContext = createContext({} as CurrentDrawData);

interface Props {
  children: React.ReactNode;
}

const CurrentDrawProvider = ({ children }: Props) => {
  const [currentDraw, setCurrentDraw] = useState<IDraw>();
  const [selectedDrawOption, setSelectedDrawOption] = useState<PromoOption>();

  useEffect(() => {
    getCurrentDraw();
  }, []);

  const getCurrentDraw = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          'filters[isPublished][$eq]': true,
          populate: '*',
        },
      });

      const draw = data?.data?.[0];

      setCurrentDraw(draw);
      const drawPromo = draw?.attributes?.draw_promos?.data?.[0];

      if (drawPromo) {
        setSelectedDrawOption({
          label:
            drawPromo.attributes.quantity === 1
              ? '1 Título'
              : `${drawPromo.attributes.quantity} títulos`,
          value: drawPromo.id,
          price: drawPromo.attributes.value,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const drawPromos = currentDraw?.attributes?.draw_promos?.data || [];

  const promoOptions = drawPromos.map(drawPromo => ({
    label:
      drawPromo.attributes.quantity === 1
        ? '1 Título'
        : `${drawPromo.attributes.quantity} títulos`,
    value: drawPromo.id,
    price: drawPromo.attributes.value,
  }));

  return (
    <CurrentDrawContext.Provider
      value={{
        currentDraw,
        setSelectedDrawOption,
        selectedDrawOption,
        promoOptions,
      }}
    >
      {children}
    </CurrentDrawContext.Provider>
  );
};

export default CurrentDrawProvider;

export const useCurrentDraw = () => useContext(CurrentDrawContext);
