import handleError from '@/utils/handleToast';
import axios from 'axios';

interface GeoLocationApiResponse {
  ipAddress: string;
}

export const getUserIpAddress = async () => {
  try {
    const { data } = await axios.get<GeoLocationApiResponse>(
      'https://freeipapi.com/api/json',
    );

    return data.ipAddress;
  } catch (error) {
    handleError(error);
  }
};
