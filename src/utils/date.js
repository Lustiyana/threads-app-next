export const timeDifferent = (date) => {
  const targetDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = currentDate - targetDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
