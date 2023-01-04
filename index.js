function isReadableColor(textColor, bgColor, textSize = 18) {
  // Convert hexadecimal colors to RGB
  const textRGB = hexToRGB(textColor);
  const bgRGB = hexToRGB(bgColor);

  // Calculate contrast ratio using the WCAG formula
  const contrastRatio = getContrastRatio(textRGB, bgRGB);

  // Return true if the contrast ratio is greater than or equal to the minimum
  // recommended contrast ratio of 4.5:1 for text larger than 18pt, or 3:1 for smaller text
  return contrastRatio >= 4.5 || (contrastRatio >= 3 && textSize < 18);
}

function hexToRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function getContrastRatio(color1, color2) {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  return (
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05)
  );
}

function getLuminance(color) {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  return (
    0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
    0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)) +
    0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4))
  );
}

module.exports = isReadableColor;
