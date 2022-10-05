export const getProducts = async ({ searchTerms }) => {
  // hago la API call.

  try {
    const response = [
      {
        id: 123,
        name: "producto 1",
      },
      {
        id: 456,
        name: "producto 2",
      },
    ];

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getProductDetail = async ({ productId }) => {
  // hago la API call.

  try {
    const response = {
      id: productId,
      name: "producto 1",
      price: 999,
    };

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
