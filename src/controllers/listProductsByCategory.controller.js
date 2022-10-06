import listProductsByCategoryService from "../services/listProductsByCategory.service";

const listProductsByCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listProductsByCategoryService(id);
    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listProductsByCategoryController;
