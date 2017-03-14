import { writeFileSync } from 'fs';

const CELLS = 10;
const CELL_SIZE = 10;

const SIZE = CELLS * CELL_SIZE;

const SVG_HEADER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">`;
const SVG_FOOTER = `</svg>`;


function buildSVGIcon() {
  const svgParts = [SVG_HEADER];

  for (let i = 0; i < CELL_SIZE; i++) {
    const x = i * CELL_SIZE;
    for (let j = 0; j < CELL_SIZE; j++) {
      const colour = getCellColour();
      const y = j * CELL_SIZE;
      const rectElement = `<rect x="${x}" y="${y}" width="${CELL_SIZE}" height="${CELL_SIZE}" fill="${colour}"></rect>`;
      svgParts.push(rectElement);
    }
  }

  svgParts.push(SVG_FOOTER);

  writeFileSync('./icon.svg', svgParts.join(''));
}


function getCellColour(): '#fff' | '#000' {
  return Math.random() < 0.5 ? '#fff' : '#000';
}

buildSVGIcon();