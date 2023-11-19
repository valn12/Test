const multiplicacion = require("./multiplicacion");

test("20 * 18 should be 360", () => {
  // sujeto de prueba
  const result = multiplicacion(20, 18);
  // test
  expect(result).toBe(360);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = multiplicacion("20", "18");
  expect(result).toBe(err);
});

test("15 * 95 should be 1425", () => {
  // sujeto de prueba
  const result = multiplicacion(15, 95);
  // test
  expect(result).toBe(1425);
});