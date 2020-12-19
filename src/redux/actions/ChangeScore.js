

export const addHumanScore = (score) => {
  return {
    type: "ADD_TO_HUMAN",
    payload: score
  }
}

export const addComputerScore = (score) => {
  return {
    type: "ADD_TO_COMPUTER",
    payload: score
  }
}
