import axios, { AxiosInstance } from 'axios';

import { EnquiryPayload } from '../interfaces';
import { CompletionResponse } from '../interfaces/CompletionResponse';

const suggestionsUrl = import.meta.env.VITE_SUGGESTIONS_URL;
const xApiKey = import.meta.env.VITE_X_API_KEY;

const instance: AxiosInstance = axios.create({
  baseURL: suggestionsUrl,
  timeout: 8000,
  headers: { 'X-Api-Key': xApiKey },
});

export const getSuggestions = async (enquiryPayload: EnquiryPayload) => {
  try {
    const { data } = await instance.post('/Prod/traits', enquiryPayload);
    const namesList = formatCompletionResp(data);
    return namesList;
  } catch (error) {
    return ['Error'];
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
