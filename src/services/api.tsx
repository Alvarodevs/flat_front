import type IFormData from "../interfaces/IFormData";

export const getAllProducts = async (): Promise<unknown> => {
  const backURL = process.env.REACT_APP_API_URL
  const path = 'products';
  try {
    const resp = await fetch(`${backURL ?? ''}/${path}/`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const findByQuery = async (query: string): Promise<unknown> => {
  const backURL = process.env.REACT_APP_API_URL;
  const path = 'search';

  try {
    const resp = await fetch(
      `${backURL ?? ''}/${path}/?query=${query}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const addProduct = async (product: IFormData): Promise<unknown> => {
  const backURL = process.env.REACT_APP_API_URL;
  const path = 'new_product';
  try {
    const resp = await fetch(`${backURL ?? ''}/${path}/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain'
      },
      body: JSON.stringify(product)
    });
    const result = await resp.json();
    return result;
  } catch (error) {
    return error;
  }
};