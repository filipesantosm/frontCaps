export const secondsToDuration = (seconds: number) => {
  let remainingSeconds = seconds;

  const SECONDS_IN_DAY = 60 * 60 * 24;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MINUTE = 60;

  const days = Math.floor(remainingSeconds / SECONDS_IN_DAY);
  remainingSeconds %= SECONDS_IN_DAY;

  const hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
  remainingSeconds %= SECONDS_IN_HOUR;

  const minutes = Math.floor(remainingSeconds / SECONDS_IN_MINUTE);
  remainingSeconds %= SECONDS_IN_MINUTE;

  return {
    days,
    hours,
    minutes,
    seconds: remainingSeconds,
  };
};
