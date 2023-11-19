const resta = require("./resta");

test("70 - 40 should be 30", () => {
  // sujeto de prueba
  const result = resta(70, 40);
  // test
  expect(result).toBe(30);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = resta("70", "40");
  expect(result).toBe(err);
});

test("858 - 0 should be 858", () => {
  // sujeto de prueba
  const result = resta(858, 0);
  // test
  expect(result).toBe(858);
});