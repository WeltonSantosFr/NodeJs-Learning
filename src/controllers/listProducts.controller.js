import listProductsService from "../services/listProducts.service";

const listProductsController = async (request, response) => {
  try {
    const products = await listProductsService();
    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listProductsController;
