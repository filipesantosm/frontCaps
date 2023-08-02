/* eslint-disable react/jsx-no-constructed-context-values */
import { IDraw } from '@/interfaces/Draw';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { createContext, useContext, useEffect, useState } from 'react';

interface CurrentDrawData {
  currentDraw?: IDraw;
}

const CurrentDrawContext = createContext({} as CurrentDrawData);

interface Props {
  children: React.ReactNode;
}

const CurrentDrawProvider = ({ children }: Props) => {
  const [currentDraw, setCurrentDraw] = useState<IDraw>();

  useEffect(() => {
    getCurrentDraw();
  }, []);

  const getCurrentDraw = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          'filters[active][$eq]': true,
          populate: '*',
        },
      });

      const draw = data?.data?.[0];

      setCurrentDraw(draw);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <CurrentDrawContext.Provider value={{ currentDraw }}>
      {children}
    </CurrentDrawContext.Provider>
  );
};

export default CurrentDrawProvider;

export const useCurrentDraw = () => useContext(CurrentDrawContext);
