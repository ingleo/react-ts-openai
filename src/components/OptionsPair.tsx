import styled from 'styled-components';

import { PairOptions } from '../helpers/getPairOptions';

const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const TraitsContainer = styled.div`
  border-style: solid;
  border-width: 0.5px;
  border-color: #b57edc;
  justify-content: space-evenly;
`;

interface OptionsPairProps {
  key: string;
  pair: PairOptions;
  onToggleTrait: (name: string) => void;
}

export const OptionsPair: React.FC<OptionsPairProps> = ({
  pair,
  onToggleTrait,
}) => {
  return (
    <>
      <TraitsContainer>
        {pair.traits.map((trait) => (
          <Button
            $primary={trait.valid}
            type="button"
            key={trait.name}
            onClick={() => onToggleTrait(trait.name)}
          >
            {trait.name}
          </Button>
        ))}
      </TraitsContainer>
    </>
  );
};
