import { useEffect, useState } from 'react';

const defaultState = {
  hasBadges: null,
  badges: null,
  hasAccomodations: null,
  accomodations: null
};

const areBadgesCompleted = ({ hasBadges, badges }) =>
  hasBadges === 'no' || (hasBadges === 'yes' && badges);

const areAccomodationsCompleted = ({ hasAccomodations, accomodations }) =>
  hasAccomodations === 'no' || (hasAccomodations === 'yes' && accomodations);

export function useStep2State(stepCompleted, setFulfilled) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    if (areBadgesCompleted(state) && areAccomodationsCompleted(state)) {
      setFulfilled(true);
      stepCompleted();
    }
  }, [stepCompleted, state, setFulfilled]);

  return [state, setState];
}
