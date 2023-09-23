import { useEffect, useState } from 'react';

import { getSuggestions } from '../helpers/getSuggestions';
import { EnquiryPayload } from '../interfaces';

export const useGetSuggestions = (enquiryPayload: EnquiryPayload) => {
  //const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewSuggestions = async () => {
    const newSuggestions = await getSuggestions(enquiryPayload);
    console.log(newSuggestions);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading
  }
};
