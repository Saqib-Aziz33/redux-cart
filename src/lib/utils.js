export const apiUrl = "https://fakestoreapi.com/products/";

export const fetchData = async () => {
  try {
    const responce = await fetch(apiUrl, { method: "GET" });
    const data = await responce.json();
    return data;
  } catch (e) {
    console.error("error while fetching data");
  }
};
