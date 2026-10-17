/**
 * Confirmed physical stats for the About page.
 *
 * Numbers and sizes are language-neutral and live here; hair/eye colour are
 * language-specific text and are translated in src/i18n/ui.ts instead
 * (see `about.stats.hair` / `about.stats.eyes`).
 *
 * `confirmed: false` fields render as "pending" rather than a guessed value
 * (see docs/PROJECT-BRIEF.md, privacy rules — never invent a measurement).
 *
 * Age is a manual field, never computed from a birthdate — the site must
 * never store or derive a full date of birth. Update by hand when it changes.
 */
export interface StatField<T> {
  value: T | null;
  confirmed: boolean;
}

function confirmed<T>(value: T): StatField<T> {
  return { value, confirmed: true };
}

// Use { value: null, confirmed: false } directly on any future field the
// user hasn't confirmed yet (e.g. "otras medidas") — don't invent a value.
export const profile = {
  age: confirmed(25),
  heightCm: confirmed(180),
  chestCm: confirmed(98),
  waistCm: confirmed(75),
  hipCm: confirmed(95),
  clothingSize: confirmed('M'),
  shoeSizeEu: confirmed(42),
} as const;
