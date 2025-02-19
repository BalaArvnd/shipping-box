export const fetchData = (key) => {
  if (key) return JSON.parse(window.localStorage.getItem(key));
  console.error("Parameter Error -  Please check the key.");
  return;
};

export const postData = (key, data) => {
  if (key && data) {
    window.localStorage.setItem("boxes", JSON.stringify(data));
    return;
  }
  console.error("Parameter Error - Please check the key");
  return;
};
