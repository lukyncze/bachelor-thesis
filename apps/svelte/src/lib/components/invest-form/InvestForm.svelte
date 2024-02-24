<script lang="ts">
  import {createForm} from 'svelte-forms-lib';
  import {object, number} from 'yup';
  import {type InvestFormData} from './types';
  import InputLabel from './InputLabel.svelte';

  export let investFormData: InvestFormData | undefined;
  export let defaultValues: InvestFormData = {
    oneOffInvestment: 500,
    investmentLength: 10,
    averageSavingsInterest: 5,
    averageSP500Interest: 10,
  };

  // Validace formuláře pomocí knihovny yup.
  const validationSchema = object().shape({
    oneOffInvestment: number().min(20).max(99_999_999).required(),
    investmentLength: number().min(3).max(60).required(),
    averageSavingsInterest: number().min(0).max(10).required(),
    averageSP500Interest: number().required(),
  });

  // Tvorba formuláře s využitím svelte-forms-lib knihovny.
  const {form, errors, isValid, handleChange, handleSubmit} = createForm({
    initialValues: defaultValues,
    validationSchema,
    onSubmit: values => {
      // Převede hodnoty formuláře na typ InvestFormData.
      investFormData = validationSchema.cast(values);
    },
  });
</script>

<form on:submit={handleSubmit}>
  <div class="md:flex md:gap-4">
    <div class="mb-4 md:w-1/2">
      <InputLabel id="oneOffInvestment">One-off investment (20-99.999.999€)</InputLabel>

      <!-- Propojení formulářového prvku se stavem formuláře pomocí bind:value={$form.NÁZEV_POLE}. -->
      <!-- Propagace změn do stavu formuláře zajišťuje on:change={handleChange}. -->
      <input
        id="oneOffInvestment"
        type="number"
        on:change={handleChange}
        bind:value={$form.oneOffInvestment}
        class="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
      />

      {#if $errors.oneOffInvestment}
        <p class="text-red-500 text-xs italic mt-1">
          Please enter a valid amount of one-off investment (positive number).
        </p>
      {/if}
    </div>

    <div class="mb-4 md:w-1/2">
      <InputLabel id="investmentLength">Investment length (3-60 years)</InputLabel>

      <!-- Propojení formulářového prvku se stavem formuláře pomocí bind:value={$form.NÁZEV_POLE}. -->
      <!-- Propagace změn do stavu formuláře zajišťuje on:change={handleChange}. -->
      <div class="flex">
        <input
          id="investmentLength"
          type="range"
          min="3"
          max="60"
          on:change={handleChange}
          bind:value={$form.investmentLength}
          class="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
        />

        <div
          class="w-24 py-2 rounded-lg bg-slate-100 border border-gray-200 self-center text-center"
        >
          {$form.investmentLength} years
        </div>
      </div>

      {#if $errors.investmentLength}
        <p class="text-red-500 text-xs italic mt-1">
          Please enter a valid length investment (positive number).
        </p>
      {/if}
    </div>
  </div>

  <div class="md:flex md:gap-4">
    <div class="mb-4 md:w-1/2">
      <InputLabel id="averageSavingsInterest">
        Average interest on a savings account (0-10 %)
      </InputLabel>

      <!-- Propojení formulářového prvku se stavem formuláře pomocí bind:value={$form.NÁZEV_POLE}. -->
      <!-- Propagace změn do stavu formuláře zajišťuje on:change={handleChange}. -->
      <input
        id="averageSavingsInterest"
        type="number"
        step={0.1}
        on:change={handleChange}
        bind:value={$form.averageSavingsInterest}
        class="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
      />

      {#if $errors.averageSavingsInterest}
        <p class="text-red-500 text-xs italic mt-1">
          Please enter a valid average amount of interest on savings account (non-negative number).
        </p>
      {/if}
    </div>

    <div class="mb-4 md:w-1/2">
      <InputLabel id="averageSP500Interest">
        Average S&P 500 yield (approximate value in %)
      </InputLabel>

      <!-- Propojení formulářového prvku se stavem formuláře pomocí bind:value={$form.NÁZEV_POLE}. -->
      <!-- Propagace změn do stavu formuláře zajišťuje on:change={handleChange}. -->
      <input
        id="averageSP500Interest"
        type="number"
        on:change={handleChange}
        bind:value={$form.averageSP500Interest}
        class="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300 cursor-not-allowed opacity-70"
        disabled
        readOnly
      />

      {#if $errors.averageSP500Interest}
        <p class="text-red-500 text-xs italic mt-1">
          Please enter a valid average amount of S&P 500 yield (non-negative number).
        </p>
      {/if}
    </div>
  </div>

  <button
    type="submit"
    disabled={!$isValid}
    class="w-full px-4 py-2 mr-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 disabled:opacity-50"
  >
    Calculate
  </button>
</form>
