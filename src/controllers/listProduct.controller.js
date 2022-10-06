import listProductService from "../services/listProduct.service";

const listProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listProductService(id);

    return response.status(200).json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listProductController;
