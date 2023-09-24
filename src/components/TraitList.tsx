import { OptionsPair } from './OptionsPair';
import { PairOptions } from '../interfaces';

import { List } from '../styles';

interface OptionsProps {
  traitList: PairOptions[];
  onTogglePairTrait: (newPair: PairOptions) => void;
}

export const TraitList: React.FC<OptionsProps> = ({
  traitList,
  onTogglePairTrait,
}) => {
  const handleToggleTrait = (pair: PairOptions) => {
    const traitsChanged = pair.traits.map((trait) => {
      return {
        ...trait,
        valid: !trait.valid,
      };
    });

    const newPair: PairOptions = {
      name: pair.name,
      traits: traitsChanged,
    };

    onTogglePairTrait(newPair);
  };

  return (
    <>
      <div>
        <h4>Select one option for each aspect of your personality</h4>
        <List>
          {traitList.map((pair) => (
            <OptionsPair
              key={pair.name}
              pair={pair}
              onToggleTrait={() => handleToggleTrait(pair)}
            />
          ))}
        </List>
      </div>
    </>
  );
};
