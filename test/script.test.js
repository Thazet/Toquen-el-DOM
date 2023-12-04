import { test, expect } from "vitest";

import { moverCarrusel } from "../Src/JS/carrusel.js";

test('action', () => {


  expect(imagenes[0].classList.contains("imagen-actual")).toBe(false);
  expect(imagenes[1].classList.contains("imagen-actual")).toBe(true);
    
});
