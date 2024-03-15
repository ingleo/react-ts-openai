import { useEffect, useRef } from 'react';

import { Loader } from '../components/Loader';
import { useGetSuggestions } from '../hooks/useGetSuggestions';
import { EnquiryPayload } from '../interfaces';

import {
  ErrorMsg,
  ListItem,
  ResultTitle,
  Results,
  ResultsPanel,
} from '../styles';

interface ResultGridProps {
  key: number;
  enquiryPayload: EnquiryPayload;
}

export const ResultsGrid: React.FC<ResultGridProps> = ({ enquiryPayload }) => {
  const { suggestions, isLoading } = useGetSuggestions(enquiryPayload);
  const myRef = useRef<HTMLDivElement>(null);

  const suggestionName = enquiryPayload.categories.join(' ');

  useEffect(() => {
    if (suggestions?.length) {
      myRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [suggestions?.length]);

  return (
    <>
      <ResultsPanel>
        {isLoading && <Loader />}
        {!isLoading && (
          <Results>
            <ResultTitle ref={myRef}>
              <span>&#128221;</span>Results for {suggestionName}
            </ResultTitle>
            <ListItem>
              {suggestions?.map((suggestion) =>
                suggestion !== 'Error' ? (
                  <li key={suggestion}>
                    <label>{suggestion}</label>
                    <a
                      href={`https://www.youtube.com/results?q=${suggestion}+${suggestionName}`}
                      target="_blank"
                    >
                      info
                    </a>
                  </li>
                ) : (
                  <ErrorMsg key={`error`}>
                    &#10060; Error fetching suggestions
                  </ErrorMsg>
                )
              )}
            </ListItem>
          </Results>
        )}
      </ResultsPanel>
    </>
  );
};
