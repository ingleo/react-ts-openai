import axios, { AxiosInstance } from 'axios';
import { EnquiryPayload } from '../interfaces';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://x5zxf0v1s6.execute-api.us-east-1.amazonaws.com',
  timeout: 8000,
  headers: { 'X-Api-Key': 'Se4eLkDPTC2iR5zBnVOq8749o7WgZdl88Be98JPl' },
});

export const getSuggestions = async (enquiryPayload: EnquiryPayload) => {
  try {
    console.log(enquiryPayload);
    const { data } = await instance.post('/Prod/traits', enquiryPayload);
    console.log(data);
    //return data;
  } catch (error) {
    console.error(error);
  }
};
