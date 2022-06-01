

export const unixToHuman = (remainingTime) => {
  const second = 1;

  const minute = second * 60;

  const hour = minute * 60;

  const day = hour * 24;

  const daysLeft = Math.trunc(remainingTime / day);

  const hoursLeft = Math.trunc((remainingTime % day) / hour);

  const minutesLeft = Math.trunc((remainingTime % hour) / minute);

  const secondsLeft = Math.trunc((remainingTime % minute) / second);

  return `days: ${daysLeft}, hours: ${hoursLeft}, minutes: ${minutesLeft}, seconds: ${secondsLeft}`;
};
