const division = require("./division");

test("20 / 2 should be 10", () => {
  // sujeto de prueba
  const result = division(20, 2);
  // test
  expect(result).toBe(10);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = division("20", "2");
  expect(result).toBe(err);
});

test("0 / 5 should be 0", () => {
  // sujeto de prueba
  const result = division(0, 5);
  // test
  expect(result).toBe(0);
});