import { useEffect, useState } from 'react';

const defaultState = {
  hasBadges: null,
  text: null,
  hasAccomodations: null,
  textarea: null
};

export function useStep2Status(stepCompleted, setFulfilled) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const areBadgesCompleted =
      state.hasBadges === 'no' || (state.hasBadges === 'yes' && state.text);
    const areAccomodationsCompleted =
      state.hasAccomodations === 'no' ||
      (state.hasAccomodations === 'yes' && state.textarea);

    if (areBadgesCompleted && areAccomodationsCompleted) {
      setFulfilled(true);
      stepCompleted();
    }
  }, [stepCompleted, state, setFulfilled]);

  return [state, setState];
}
