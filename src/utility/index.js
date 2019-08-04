export const opacityToggler = (isVisible, min = 0.6) => ({
  opacity: isVisible ? 1 : min
});

export const range = length => Array.from({ length }, (_v, k) => ++k);

/**
 * That's an example.
 * Now it avoids only blank text filled inputs...
 * @param {string} text
 */
export const stripper = text => text.trim();
