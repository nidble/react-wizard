import { useEffect, useState } from 'react';

export const TYPE_A11S = 'accomodations';
export const TYPE_HAS_A11S = 'hasAccomodations';

export const TYPE_BADGES = 'badges';
export const TYPE_HAS_BADGES = 'hasBadges';

const defaultState = {
  hasBadges: null,
  badges: null,
  hasAccomodations: null,
  accomodations: null
};

export function useStep2State(stepCompleted, setFulfilled) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const { hasBadges, badges, hasAccomodations, accomodations } = state;
    const areBadgesCompleted =
      hasBadges === 'no' || (hasBadges === 'yes' && badges);
    const areAccomodationsCompleted =
      hasAccomodations === 'no' ||
      (hasAccomodations === 'yes' && accomodations);

    if (areBadgesCompleted && areAccomodationsCompleted) {
      setFulfilled(true);
      stepCompleted();
    }
  }, [stepCompleted, state, setFulfilled]);

  return [state, setState];
}
