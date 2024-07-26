const API_BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (filters = {}) => {
    const { category, company, rating, minPrice, maxPrice, availability } = filters;
    const url = `${API_BASE_URL}/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    
    try {
      console.log(`Fetching products from URL: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  };
  
  export const fetchProductById = async (id) => {
    const url = `${API_BASE_URL}/companies/ALL/categories/ALL/products?top=1000&minPrice=0&maxPrice=100000`;
    
    try {
      console.log(`Fetching product by ID from URL: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const product = data.find(product => generateUniqueId(product) === id);
      return product;
    } catch (error) {
      console.error('Failed to fetch product by ID:', error);
      throw error;
    }
  };
  
  const generateUniqueId = (product) => {
    return `${product.productName}-${product.price}-${product.rating}`;
  };