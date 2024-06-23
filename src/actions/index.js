"use server";

// get all products

export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await result.json();

    return {
      status: 1,
      message: "Fetched Products Successfully!!",
      data: data,
    };
  } catch (e) {
    console.log(e);
    return {
      status: 0,
      message: "Error!! Please try again later",
    };
  }
}

export async function fetchProductDetails(currentProductId) {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${currentProductId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await result.json();

    return {
      status: 1,
      message: "Fetched Product Details Successfully!!",
      data: data,
    };
  } catch (err) {
    return {
      status: 0,
      message: "Failed to Fetch Product Details",
    };
  }
}
