import { COLORS, COLORS_PARSED } from "./interfaces";

function RGB_to_HSLA(rgba: string): number[] {
  // take a string and convert first
  let [r, g, b, a = 1] = rgba
    .slice(rgba.indexOf("(") + 1, rgba.indexOf(")"))
    .split(",")
    .map((n) => parseInt(n));

  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l, a];
}

function HEXA_to_HSLA(hex: string): number[] {
  let r: any = 0,
    g: any = 0,
    b: any = 0,
    a: any = 1;

  switch (hex.length) {
    case 4:
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
      a = "0xff";
      break;
    case 5:
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
      a = "0x" + hex[4] + hex[4];
      break;
    case 7:
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
      a = "0xff";
      break;
    case 9:
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
      a = "0x" + hex[7] + hex[8];
      break;
  }

  let [h, s, l, _a] = RGB_to_HSLA(`rgba(${r}, ${g}, ${b}, ${a})`);

  a = (a / 255).toFixed(3);

  return [h, s, l, a];
}

function String_HSLA_to_HSLA(hsla: string): number[] {
  let [h, s, l, a = 1] = hsla
    .slice(hsla.indexOf("(") + 1, hsla.indexOf(")"))
    .split(",")
    .map((n) => parseInt(n));
  return [h, s, l, a];
}

function parse_to_HSLArray(colorValue: string): number[] {
  if (colorValue.includes("rgb")) {
    return RGB_to_HSLA(colorValue);
  } else if (colorValue.includes("#")) {
    return HEXA_to_HSLA(colorValue);
  } else if (colorValue.includes("hsl")) {
    return String_HSLA_to_HSLA(colorValue);
  } else {
    console.warn(
      "your color should be hex, rgb or hsl. otherwise it's displayed as black"
    );
    return [0, 0, 0, 1];
  }
}

function parseColors(colors: COLORS): COLORS_PARSED {
  let parsedColors: COLORS_PARSED = {
    main: [],
    accent: [],
    onAccent: [],
    text: [],
  };
  for (let colorKey in colors) {
    parsedColors[colorKey] = parse_to_HSLArray(colors[colorKey]);
  }
  return parsedColors;
}

export { parseColors };

/*
Thanks to Css-Tricks for the article about converting color spaces :
https://css-tricks.com/converting-color-spaces-in-javascript/
*/
