import listCategoryService from "../services/listCategory.service";

const listCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const category = await listCategoryService(id);
    return response.status(200).json(category);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listCategoryController;
