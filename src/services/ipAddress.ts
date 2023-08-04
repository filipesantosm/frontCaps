import handleError from '@/utils/handleToast';
import axios from 'axios';

interface GeoLocationApiResponse {
  IPv4: string;
}

export const getUserIpAddress = async () => {
  try {
    const { data } = await axios.get<GeoLocationApiResponse>(
      'https://geolocation-db.com/json/',
    );

    return data.IPv4;
  } catch (error) {
    handleError(error);
  }
};
