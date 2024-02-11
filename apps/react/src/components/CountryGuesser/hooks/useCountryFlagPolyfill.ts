import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill';
import {useEffect} from 'react';

function useCountryFlagPolyfill() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);
}

export default useCountryFlagPolyfill;
