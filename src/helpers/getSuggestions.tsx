import axios, { AxiosInstance } from 'axios';
import { EnquiryPayload } from '../interfaces';
import { CompletionResponse } from '../interfaces/CompletionResponse';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://x5zxf0v1s6.execute-api.us-east-1.amazonaws.com',
  timeout: 8000,
  headers: { 'X-Api-Key': 'Se4eLkDPTC2iR5zBnVOq8749o7WgZdl88Be98JPl' },
});

export const getSuggestions = async (enquiryPayload: EnquiryPayload) => {
  try {
    const { data } = await instance.post('/Prod/traits', enquiryPayload);
    const namesList = formatCompletionResp(data);
    return namesList;
  } catch (error) {
    return ['Error getting suggestions'];
  }
};

const formatCompletionResp = (data: CompletionResponse) => {
  const completionResp = data.choices[0].message.content;
  const extractedNames = completionResp.match(/"(.*?)"/g);
  const suggestionsName = extractedNames?.map((element) =>
    element.replace(/"/g, '')
  );
  return suggestionsName;
};
