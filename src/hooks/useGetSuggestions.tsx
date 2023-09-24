import { useEffect, useState } from 'react';

import { getSuggestions } from '../helpers/getSuggestions';
import { EnquiryPayload } from '../interfaces';

const initialSuggestions: string[] = [];
export const useGetSuggestions = (enquiryPayload: EnquiryPayload) => {
  const [suggestions, setSuggestions] = useState<string[] | undefined>(
    initialSuggestions
  );
  const [isLoading, setIsLoading] = useState(true);

  const getNewSuggestions = async () => {
    const newSuggestions = await getSuggestions(enquiryPayload);
    setSuggestions(newSuggestions);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    suggestions,
    isLoading,
  };
};
