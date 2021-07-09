/* Colors */
export const color = {
    white: '#fff',
    black: '#000',
    orange: '#ecb200',
    orangeLight: '#fff0c4',
    primary: '#4c5bfd',
};

/* Default border radius value */
export const radius = {
    default: '11px',
    medium: '4px',
    small: '2px',
};

/* Fonts */
export const fontSize = {
    default: '16px',
};

/* Main theme */
export const theme = {
    /* Buttons */
    btnFontSize: fontSize.default,
    btnHeight: '48px',
    btnColor: color.white,
    btnColorHover: color.white,
    btnBg: color.orange,
    btnBgHover: '#dea700',
    btnBorderRadius: radius.medium,
    btnPaddingVertical: '10px',
    btnPaddingHorizontal: '32px',

    /* Button - primary */
    btnPrimaryColor: color.white,
    btnPrimaryColorHover: color.white,
    btnPrimaryBg: color.primary,
    btnPrimaryBgHover: '#3b4cfc', // 5% darken color.primary

    /* Button - secondary */
    btnSecondaryColor: color.black,
    btnSecondaryColorHover: color.black,
    btnSecondaryBg: color.orangeLight,
    btnSecondaryBgHover: color.white,

    /* Transition */
    transition: '0.2s cubic-bezier(.8, .20, .48, 1.0)',
};
