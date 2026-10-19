/**
 * How wide a brand name is when set like the big name on a brand page:
 * Inter Tight 900, uppercase, letter-spacing -0.045em. Returned in em, so
 * the page can size the name to fill the width exactly (font-size =
 * available width / this) without any letter falling off the edge.
 *
 * Both tables were measured in Chrome from the self-hosted font (Inter
 * Tight Variable at weight 900, 1000px): ADVANCE is each character alone,
 * KERNING how much the font moves a pair closer (or apart) when they meet,
 * e.g. "VA". Together they match the browser's own width to within 0.001em.
 * If the display font, its weight or the tracking change, measure again.
 */
const ADVANCE: Record<string, number> = {
  A: 0.7715, B: 0.6445, C: 0.7451, D: 0.709, E: 0.5986, F: 0.5605, G: 0.749,
  H: 0.7266, I: 0.2676, J: 0.5645, K: 0.6914, L: 0.5479, M: 0.9082, N: 0.6992,
  O: 0.7715, P: 0.6328, Q: 0.7734, R: 0.6445, S: 0.6426, T: 0.6631, U: 0.6983,
  V: 0.7715, W: 1.0664, X: 0.7393, Y: 0.7412, Z: 0.6709,
  '0': 0.707, '1': 0.4287, '2': 0.623, '3': 0.6514, '4': 0.6787,
  '5': 0.6524, '6': 0.6709, '7': 0.5752, '8': 0.6748, '9': 0.6709,
  ' ': 0.1758, '&': 0.6719, "'": 0.3486, '-': 0.4512, '.': 0.3496,
};

const KERNING: Record<string, number> = {
  '24': -0.0156, '41': -0.0098, '70': -0.0156, '73': -0.0166, '74': -0.0581,
  '75': -0.0098, '76': -0.0156, '77': 0.0195, '78': -0.0142, '79': -0.0098,
  '97': -0.0195, "&'": -0.0337, '&T': -0.0566, '&V': -0.0625, '&W': -0.0395,
  '&Y': -0.0737, "'&": -0.0337, "'.": -0.0962, "'4": -0.0625, "'A": -0.0791,
  "'J": -0.1646, '-2': -0.0112, '-7': -0.0337, '-X': -0.0454, ".'": -0.1133,
  '.0': -0.0322, '.1': -0.0938, '.3': -0.0195, '.6': -0.0322, '.7': -0.0352,
  '.8': -0.0337, '.9': -0.0176, '.T': -0.0337, '.Y': -0.0908, '0.': -0.0322,
  '07': -0.0195, '0Y': -0.0337, '3.': -0.0195, '5.': -0.0195, '6.': -0.0269,
  '7&': -0.0454, '7.': -0.125, '7A': -0.1079, '7J': -0.0962, '8.': -0.0195,
  '9.': -0.0322, '9Y': -0.0337, "A'": -0.0791, 'A1': -0.0337, 'AC': -0.0391,
  'AG': -0.0391, 'AO': -0.0391, 'AQ': -0.0391, 'AS': -0.0283, 'AT': -0.0923,
  'AV': -0.1074, 'AW': -0.085, 'AY': -0.0737, 'CA': -0.0225, 'CX': -0.0225,
  'D.': -0.0454, 'DA': -0.0391, 'DT': -0.0337, 'DV': -0.0454, 'DW': -0.0454,
  'DX': -0.0478, 'DY': -0.0508, 'F.': -0.0337, 'FA': -0.0908, 'FJ': -0.0679,
  'GA': -0.0225, 'GT': -0.0317, 'GV': -0.0225, 'GX': -0.0225, 'GY': -0.0337,
  'J.': -0.0337, 'KC': -0.0454, 'KG': -0.0454, 'KO': -0.0454, 'KQ': -0.0454,
  'KS': -0.0098, "L'": -0.0908, 'L1': -0.0454, 'LC': -0.0283, 'LG': -0.0283,
  'LO': -0.0283, 'LQ': -0.0283, 'LT': -0.0864, 'LV': -0.085, 'LW': -0.0679,
  'LY': -0.1318, 'O.': -0.0454, 'OA': -0.0391, 'OT': -0.0337, 'OV': -0.0454,
  'OW': -0.0454, 'OX': -0.0478, 'OY': -0.0508, 'P&': -0.0337, 'P.': -0.0337,
  'PA': -0.0908, 'PJ': -0.0962, 'Q.': -0.0454, 'QA': -0.0391, 'QT': -0.0337,
  'QV': -0.0454, 'QW': -0.0454, 'QX': -0.0479, 'QY': -0.0508, 'RV': -0.0225,
  'RY': -0.0337, 'SA': -0.0283, 'T&': -0.0337, 'T.': -0.0337, 'T4': -0.0679,
  'TA': -0.0923, 'TC': -0.0337, 'TG': -0.0337, 'TJ': -0.0908, 'TO': -0.0337,
  'TQ': -0.0337, 'U.': -0.0337, 'V&': -0.0508, 'V.': -0.0962, 'V4': -0.0337,
  'VA': -0.1074, 'VC': -0.0454, 'VG': -0.0454, 'VJ': -0.0962, 'VO': -0.0454,
  'VQ': -0.0454, 'W&': -0.0508, 'W.': -0.0962, 'W4': -0.0337, 'WA': -0.085,
  'WC': -0.0454, 'WG': -0.0454, 'WJ': -0.0625, 'WO': -0.0454, 'WQ': -0.0454,
  'WS': -0.0112, 'X-': -0.0454, 'XC': -0.0479, 'XG': -0.0479, 'XO': -0.0478,
  'XQ': -0.0479, 'Y&': -0.0625, 'Y.': -0.0908, 'Y4': -0.0679, 'YA': -0.0737,
  'YC': -0.0508, 'YG': -0.0508, 'YJ': -0.0337, 'YO': -0.0508, 'YQ': -0.0508,
  'ZC': -0.0337, 'ZG': -0.0337, 'ZO': -0.0337, 'ZQ': -0.0337,
};

/** Any character not in the table counts as wide as a W, to stay safe. */
const FALLBACK = ADVANCE.W;

const TRACKING = -0.045;

export function displayNameWidth(name: string): number {
  // "É" → "E" + accent: the accent sits above, it adds no width.
  const letters = [...name.toUpperCase().normalize('NFD').replace(/\p{M}/gu, '')];
  return letters.reduce(
    (width, letter, i) =>
      width + (ADVANCE[letter] ?? FALLBACK) + TRACKING + (KERNING[letters[i - 1] + letter] ?? 0),
    0,
  );
}
