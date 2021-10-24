const sum = require("./sum")
test("add 15 + 15 to be equal 30", () => {
  expect(sum(15,15)).toBe(30)
})
