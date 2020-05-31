export const fakeLogToServer = <T>(param: T) => {
  // ideally log this to some server ;)
  console.log(`%c ${param}`, "background: yellow; color:black");
};
