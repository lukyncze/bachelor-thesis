<script lang="ts">
</script>

<div class="container mx-auto space-y-6 sm:space-y-8">
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
    Hint boxes
    <!-- <HintBoxes {randomCountry} {hintsEnabledCount} /> -->
  </div>

  <div class="space-y-6 lg:flex lg:justify-center lg:gap-12 lg:space-y-0">
    <span>CountryGuessInput</span>
    <!-- <CountryGuessInput
      {countries}
      {currentGuess}
      {guessedCountries}
      {setCurrentGuess}
      {evaluateGuessAndUpdateState}
    /> -->

    <span>GuessedCountriesList</span>
    <!-- <GuessedCountriesList {countries} {guessedCountries} {randomCountry} /> -->
  </div>
</div>

<!-- {isWinModalOpen ? (
<WinModal
randomCountry={randomCountry}
totalGuessesNeeded={totalGuessesNeeded}
handleClose={() => {
handleSetInitialState();
setIsWinModalOpen(false);
}}
/>
) : null}

{isLoseModalOpen ? (
<LoseModal
randomCountry={randomCountry}
handleClose={() => {
handleSetInitialState();
setIsLoseModalOpen(false);
}}
/>
) : null} -->
