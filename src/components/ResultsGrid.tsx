import { Loader } from '../components/Loader';
import { useGetSuggestions } from '../hooks/useGetSuggestions';
import { EnquiryPayload } from '../interfaces';

import { ListItem, ResultTitle, Results, ResultsPanel } from '../styles';

interface ResultGridProps {
  key: number;
  enquiryPayload: EnquiryPayload;
}

export const ResultsGrid: React.FC<ResultGridProps> = ({ enquiryPayload }) => {
  const { suggestions, isLoading } = useGetSuggestions(enquiryPayload);
  return (
    <>
      <ResultsPanel>
        {isLoading && <Loader />}
        {!isLoading && (
          <Results>
            <ResultTitle>
              <span>&#9989; </span>Results for{' '}
              {enquiryPayload.categories.join(' ')}
            </ResultTitle>
            <ListItem>
              {suggestions?.map((suggestion) => (
                <li key={suggestion}>
                  <label>{suggestion}</label>
                  <a
                    href={`https://www.youtube.com/results?q=${suggestion}`}
                    target="_blank"
                  >
                    info
                  </a>
                </li>
              ))}
            </ListItem>
          </Results>
        )}
      </ResultsPanel>
    </>
  );
};
