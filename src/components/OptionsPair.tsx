import { PairOptions } from '../interfaces';

import { TraitButton, TraitsContainer } from '../styles';

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
          <TraitButton
            $primary={trait.valid}
            type="button"
            key={trait.name}
            onClick={() => onToggleTrait(trait.name)}
          >
            {trait.name}
          </TraitButton>
        ))}
      </TraitsContainer>
    </>
  );
};
