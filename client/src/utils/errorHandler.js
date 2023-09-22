export const makingReadableError = (error) => {
  let errMessage = error.message.split('auth/')[1];
  let errArr = errMessage.slice(0, errMessage.length - 2).split('-');
  return errArr.map((e) => e[0].toUpperCase() + e.slice(1)).join(' ')
}