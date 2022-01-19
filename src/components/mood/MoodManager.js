export const getMoods = () => {
  return fetch("http://localhost:8088/Mood")
    .then(res => res.json())
};
