export const generateUniqueId = (product) => {
    return `${product.productName}-${product.price}-${product.rating}`;
  };