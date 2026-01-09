// generate-safelist.js

const fs = require('fs');
const path = require('path');

const breakpoints = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];
const widths = [
  'full',
  '1/12',
  '2/12',
  '2.4/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
];
const maxWidths = ['sm', 'md', 'lg', 'xl', '2xl'];
const justify = ['start', 'center', 'end', 'between'];
const itemsAlign = ['start', 'center', 'end'];
const order = ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const align = ['left', 'center', 'right'];
const spacingPrefixes = [
  '-m',
  'm',
  'p',
  '-p',
  'pb',
  'px',
  'py',
  '-mb',
  'mb',
  'mr',
  '-my',
  '-mr',
  '-mx',
  'ml',
  '-ml',
  'pl',
  '!-mb',
  '!-my',
];
const spacing = ['auto', '2', '4', '6', '8', '10', '12', '16', '20', '24', '32', '36'];
const cursors = ['pointer'];
const flexs = ['col', 'col-reverse', 'row', 'row-reverse'];
const displays = ['block', 'inline-block'];
const bg = [
  'white',
  'black',
  'primary',
  'secondary',
  'off-white-100',
  'off-white-200',
  'font',
  'border-grey',
  'dark-brown',
  'light-brown',
  'grey-100',
  'grey-200',
  'grey-300',
  'grey-400',
  'grey-500',
  'grey-600',
];
const textColors = [
  'white',
  'black',
  'primary',
  'secondary',
  'off-white-100',
  'off-white-200',
  'font',
  'border-grey',
  'dark-brown',
  'light-brown',
  'grey-100',
  'grey-200',
  'grey-300',
  'grey-400',
  'grey-500',
  'grey-600',
];

const grids = [1, 2, 3, 4, 5];
const borders = ['r', 'b', 'l', 't'];
const objectPositions = [
  'bottom',
  'center',
  'left',
  'left-bottom',
  'left-top',
  'right',
  'right-bottom',
  'right-top',
  'top',
];

let safeList = [];

// Non-breakpoint classes
grids.forEach((g) => safeList.push(`grid-cols-${g}`));
bg.forEach((b) => safeList.push(`bg-${b}`, `from-${b}`, `to-${b}`));
objectPositions.forEach((pos) => safeList.push(`object-${pos}`));
textColors.forEach((t) => safeList.push(`text-${t}`));
displays.forEach((d) => safeList.push(d));
flexs.forEach((f) => safeList.push(`flex-${f}`));
cursors.forEach((c) => safeList.push(`cursor-${c}`));
widths.forEach((w) => safeList.push(`w-${w}`));
justify.forEach((j) => safeList.push(`justify-${j}`));
order.forEach((o) => safeList.push(`order-${o}`));
maxWidths.forEach((mw) => safeList.push(`max-w-screen-${mw}`));
itemsAlign.forEach((a) => safeList.push(`items-${a}`, `self-${a}`));
align.forEach((a) => safeList.push(`text-${a}`));
spacing.forEach((s) => {
  safeList.push(`space-y-${s}`, `space-x-${s}`, `gap-${s}`);
  spacingPrefixes.forEach((p) => safeList.push(`${p}-${s}`));
});

// With breakpoints
breakpoints.forEach((bp) => {
  displays.forEach((d) => safeList.push(`${bp}${d}`));
  flexs.forEach((f) => safeList.push(`${bp}flex-${f}`));
  widths.forEach((w) => safeList.push(`${bp}w-${w}`));
  justify.forEach((j) => safeList.push(`${bp}justify-${j}`));
  order.forEach((o) => safeList.push(`${bp}order-${o}`));
  align.forEach((a) => safeList.push(`${bp}text-${a}`));
  itemsAlign.forEach((a) => safeList.push(`${bp}items-${a}`));
  grids.forEach((g) => safeList.push(`${bp}grid-cols-${g}`));
  borders.forEach((b) => safeList.push(`${bp}border-${b}`));
  spacing.forEach((s) => {
    safeList.push(`${bp}gap-${s}`);
    spacingPrefixes.forEach((p) => safeList.push(`${bp}${p}-${s}`));
  });
});

// Extra classes
safeList.push(
  'flex-1',
  'overflow-hidden',
  'object-contain',
  'mix-blend-multiply',
  'font-light',
  'text-right',
  '!grid',
  'col-span-1',
  'col-span-2',
  'col-span-3',
  '!w-auto',
  'dark-outlined',
  'md:primary',
  'dark-primary',
  'md:black',
  'md:outlined',
  'py-[var(--header-height)]',
  'h3-5',
  'max-md:text-white',
  'text-primary-500'
);

// Remove duplicates and write to file
const unique = [...new Set(safeList)];

// Write to safelist.txt
const outputPath = path.join(__dirname, 'safelist.txt');
fs.writeFileSync(outputPath, unique.join('\n'));
