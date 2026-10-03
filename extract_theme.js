const fs = require('fs');

const configStr = `{"colors":{"surface":"#0f131c","surface-container-highest":"#31353f","on-primary":"#003640","background":"#0f131c","on-secondary-container":"#00311f","primary-container":"#06b6d4","surface-container-lowest":"#0a0e17","surface-bright":"#353943","on-secondary":"#003824","primary-fixed-dim":"#4cd7f6","surface-dim":"#0f131c","on-secondary-fixed":"#002113","inverse-primary":"#00687a","secondary-container":"#00a572","inverse-on-surface":"#2c303a","error-container":"#93000a","primary":"#4cd7f6","tertiary":"#ffb95f","tertiary-fixed":"#ffddb8","on-surface-variant":"#bcc9cd","on-tertiary-fixed":"#2a1700","on-primary-fixed":"#001f26","on-background":"#dfe2ef","on-tertiary":"#472a00","on-primary-fixed-variant":"#004e5c","outline-variant":"#3d494c","on-tertiary-fixed-variant":"#653e00","surface-container-high":"#262a34","surface-variant":"#31353f","secondary":"#4edea3","on-secondary-fixed-variant":"#005236","primary-fixed":"#acedff","on-primary-container":"#00424f","tertiary-fixed-dim":"#ffb95f","tertiary-container":"#e79400","surface-container":"#1c1f29","inverse-surface":"#dfe2ef","surface-container-low":"#181b25","on-tertiary-container":"#563400","on-error-container":"#ffdad6","secondary-fixed":"#6ffbbe","secondary-fixed-dim":"#4edea3","on-surface":"#dfe2ef","outline":"#869397","on-error":"#690005","surface-tint":"#4cd7f6","error":"#ffb4ab"},"borderRadius":{"DEFAULT":"0.125rem","lg":"0.25rem","xl":"0.5rem","full":"0.75rem"},"spacing":{"gutter":"1rem","gutter-desktop":"1.5rem","space-xl":"2rem","space-xs":"0.25rem","space-sm":"0.5rem","space-lg":"1.25rem","margin":"1rem","space-md":"0.75rem","margin-desktop":"2rem"},"fontFamily":{"body-lg":["Geist"],"body-md":["Geist"],"display-lg-mobile":["Space Grotesk"],"headline-sm":["Space Grotesk"],"display-lg":["Space Grotesk"],"headline-lg":["Space Grotesk"],"label-lg":["JetBrains Mono"],"body-sm":["Geist"],"label-md":["JetBrains Mono"],"headline-xl":["Space Grotesk"],"label-sm":["JetBrains Mono"],"headline-xl-mobile":["Space Grotesk"],"data-mono":["JetBrains Mono"]},"fontSize":{"body-lg":["16px",{"lineHeight":"24px","letterSpacing":"0em","fontWeight":"400"}],"body-md":["14px",{"lineHeight":"20px","letterSpacing":"0em","fontWeight":"400"}],"display-lg-mobile":["32px",{"lineHeight":"40px","letterSpacing":"-0.02em","fontWeight":"700"}],"headline-sm":["18px",{"lineHeight":"24px","letterSpacing":"0em","fontWeight":"600"}],"display-lg":["48px",{"lineHeight":"56px","letterSpacing":"-0.03em","fontWeight":"700"}],"headline-lg":["24px",{"lineHeight":"32px","letterSpacing":"-0.01em","fontWeight":"600"}],"label-lg":["13px",{"lineHeight":"18px","letterSpacing":"0.04em","fontWeight":"600"}],"body-sm":["12px",{"lineHeight":"16px","letterSpacing":"0.01em","fontWeight":"400"}],"label-md":["11px",{"lineHeight":"16px","letterSpacing":"0.06em","fontWeight":"500"}],"headline-xl":["32px",{"lineHeight":"40px","letterSpacing":"-0.02em","fontWeight":"600"}],"label-sm":["10px",{"lineHeight":"14px","letterSpacing":"0.08em","fontWeight":"500"}],"headline-xl-mobile":["24px",{"lineHeight":"32px","letterSpacing":"-0.01em","fontWeight":"600"}],"data-mono":["12px",{"lineHeight":"16px","letterSpacing":"0em","fontWeight":"400"}]}}`;
const config = JSON.parse(configStr);

let css = `@import "tailwindcss";

@theme {
`;

// Colors
for (const [key, val] of Object.entries(config.colors)) {
  css += `  --color-${key}: ${val};\n`;
}

// Spacing
for (const [key, val] of Object.entries(config.spacing)) {
  css += `  --spacing-${key}: ${val};\n`;
}

// Border Radius
for (const [key, val] of Object.entries(config.borderRadius)) {
  if (key === 'DEFAULT') {
    css += `  --radius: ${val};\n`;
  } else {
    css += `  --radius-${key}: ${val};\n`;
  }
}

// Fonts
for (const [key, val] of Object.entries(config.fontFamily)) {
  // val is an array like ["Geist"], we'll map to standard fallback
  let font = val[0];
  if (font === 'Geist') font = '"Geist", sans-serif';
  if (font === 'Space Grotesk') font = '"Space Grotesk", sans-serif';
  if (font === 'JetBrains Mono') font = '"JetBrains Mono", monospace';
  css += `  --font-${key}: ${font};\n`;
}

// Typography (font sizes, line heights, etc)
// In Tailwind v4, we can define custom text sizes using --text-*
for (const [key, val] of Object.entries(config.fontSize)) {
  const size = val[0];
  const params = val[1];
  // To use this in tailwind v4, we'd normally just define --text-size
  // e.g. text-body-lg applies font-size, line-height, letter-spacing
  // The simplest way to support the exact utility classes AI generated (e.g., `text-body-lg`)
  // is to define custom CSS classes for them because Tailwind v4 text variables are just font-size.
  // Actually, Tailwind v4 allows `--text-body-lg: 16px` and `--text-body-lg--line-height: 24px`.
  css += `  --text-${key}: ${size};\n`;
  if (params.lineHeight) css += `  --text-${key}--line-height: ${params.lineHeight};\n`;
  if (params.letterSpacing) css += `  --text-${key}--letter-spacing: ${params.letterSpacing};\n`;
  if (params.fontWeight) css += `  --text-${key}--font-weight: ${params.fontWeight};\n`;
}

css += `}

@layer base {
  html, body {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
  }
  main > :first-child {
    margin-top: 0 !important;
  }
  main > :last-child {
    margin-bottom: 0 !important;
  }
}
::-webkit-scrollbar {
  display: none;
}
`;

// Also need to create typography utility classes because AI generated classes like `font-headline-sm`
// In Tailwind v4, if we define --text-headline-sm, we get `text-headline-sm` but it doesn't automatically apply font-weight from the config.
// So we will just write explicit utility classes for them to perfectly match what v0 generated!

css += `
@layer utilities {
`;
for (const [key, val] of Object.entries(config.fontSize)) {
  const params = val[1];
  css += `  .font-${key} { font-family: var(--font-${key}); font-weight: ${params.fontWeight}; }\n`;
}
css += `}\n`;

fs.writeFileSync('C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/globals.css', css);
