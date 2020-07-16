import moment from "moment-timezone";

export const getCurrentTime = (format = "h:mm A", timezone = "Asia/Taipei") => {
  const currentTime = moment();
  return currentTime.tz(timezone).format(format);
};
