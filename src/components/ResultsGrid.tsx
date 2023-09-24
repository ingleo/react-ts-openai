import { useGetSuggestions } from '../hooks/useGetSuggestions';
import { EnquiryPayload } from '../interfaces';

interface ResultGridProps {
  key: number;
  enquiryPayload: EnquiryPayload;
}

export const ResultsGrid: React.FC<ResultGridProps> = ({ enquiryPayload }) => {
  const { suggestions, isLoading } = useGetSuggestions(enquiryPayload);
  return (
    <>
      {isLoading && <p>LOADER</p>}
      {
        suggestions?.map((suggestion) => (
            <p>{suggestion}</p>
        ))
      }
    </>
  );
};
