import database from "../database";

const listProductsByCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT products.name, products.price, categories.name category FROM products JOIN categories ON products.category_id = categories.id WHERE category_id = $1",
      [id]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsByCategoryService;
