import axios from "axios";

export const useCurrentLocation = async (): Promise<string> => {

  const location_key = process.env.NEXT_PUBLIC_LOCATION_KEY;
  const response = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${location_key}`);

  return response.data.city;
}
