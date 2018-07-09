const getBMI = (weight, height) => {
  const meters = height / 100
  const bmi = (weight / (meters * meters)).toFixed(2)
  let group = ''
  switch (true) {
    case bmi < 18.5:
      group = 'Underweight'
      break
    case bmi < 24.9:
      group = 'Normal weight'
      break
    case bmi < 29.9:
      group = 'Overweight'
      break
    default:
      group = 'Obese'
      break
  }
  return {
    bmi,
    group
  }
}

export { getBMI }
