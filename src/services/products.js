
export const getProducts = async ({ searchTerms }) => {
  // hago la API call.

  try {
    const response = [
      {
        id: 123,
        name: "Deco Reverse Sombrero Oxford",
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
      name: "Deco Reverse Sombrero Oxford",
      price:"$1980",
    };

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
