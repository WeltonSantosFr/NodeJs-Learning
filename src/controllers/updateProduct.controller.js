import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price, category_id } = request.body;

  try {
    const updatedProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );

    return response.status(200).json(updatedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateProductController;
