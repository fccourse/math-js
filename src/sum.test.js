import {sum, sub, mul, div } from './operations'

test("add 15 and 15 must be 30", () => {
  expect(sum(15,15)).toBe(30)
})

test("sub 15 and 15 must be 0", () => {
  expect(sub(15,15)).toBe(0)
})


test("multiply 15 and 15 must be 225", () => {
  expect(mul(15,15)).toBe(225)
})


test("divide 15 by 15 must be 1", () => {
  expect(div(15,15)).toBe(1)
})
