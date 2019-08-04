import { useEffect, useState } from 'react';

const defaultState = {
  hasBadges: null,
  badges: null,
  hasAccomodations: null,
  accomodations: null
};

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

function areBadgesCompleted({ hasBadges, badges }) {
  return hasBadges === 'no' || (hasBadges === 'yes' && badges);
}

function areAccomodationsCompleted({ hasAccomodations, accomodations }) {
  return (
    hasAccomodations === 'no' || (hasAccomodations === 'yes' && accomodations)
  );
}
