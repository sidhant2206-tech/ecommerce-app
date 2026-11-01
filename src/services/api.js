const BASE_URL = "https://dummyjson.com";

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products?limit=100`);
  if (!res.ok) throw new Error("Products load nahi ho paaye");
  const data = await res.json();
  return data.products;
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Product nahi mila");
  return res.json();
};