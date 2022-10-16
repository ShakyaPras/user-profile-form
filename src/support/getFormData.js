const getFormData = async () => {
  const URL = "https://frontend-take-home.fetchrewards.com/form";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export default getFormData;
