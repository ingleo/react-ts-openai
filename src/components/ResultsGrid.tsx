import { useGetSuggestions } from '../hooks/useGetSuggestions';
import { EnquiryPayload } from '../interfaces';

interface ResultGridProps {
  key: number;
  enquiryPayload: EnquiryPayload;
}

export const ResultsGrid: React.FC<ResultGridProps> = ({ enquiryPayload }) => {
  const { isLoading } = useGetSuggestions(enquiryPayload);
  return (
    <>
      {isLoading && <p>LOADER</p>}
      <p>{JSON.stringify(enquiryPayload)}</p>
    </>
  );
};
