export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = value => {
  const added = { amount: value, date: new Date() }
  return { type: INCREMENT, added };
}

export const decrement = value => {
  const subtracted = { amount: value, date: new Date() }
  return { type: DECREMENT, subtracted };
}
