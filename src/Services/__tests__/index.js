import { getBMI } from '../bmi'

test('getBMI returns bmi', () => {
  const bmiResult = getBMI(100, 180)
  expect(bmiResult.bmi).toBeGreaterThan(1)
})

test('getBMI returns group', () => {
  const bmiResult = getBMI(100, 180)
  expect(bmiResult.group).toBeTruthy()
})

test('getBMI given 100kg and 180cm returns 30.86', () => {
  const bmiResult = getBMI(100, 180)
  expect(bmiResult.bmi).toBeCloseTo(30.86)
})

test('getBMI given 100kg and 180cm returns Obese', () => {
  const bmiResult = getBMI(100, 180)
  expect(bmiResult.group).toBe('Obese')
})

test('getBMI given 80kg and 180cm returns Normal weight', () => {
  const bmiResult = getBMI(80, 180)
  expect(bmiResult.group).toBe('Normal weight')
})

test('getBMI given 50kg and 180cm returns Underweight', () => {
  const bmiResult = getBMI(50, 180)
  expect(bmiResult.group).toBe('Underweight')
})
