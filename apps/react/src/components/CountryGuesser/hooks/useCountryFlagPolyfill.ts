import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill';
import {useEffect} from 'react';

// Hook, který slouží k načtení polyfillu pro zobrazení vlajek států.
function useCountryFlagPolyfill() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);
}

export default useCountryFlagPolyfill;
