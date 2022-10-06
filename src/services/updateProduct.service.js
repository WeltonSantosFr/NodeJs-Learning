import database from "../database";

const updateProductService = async (id, name, price, category_id) => {
  const product = await database.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);

  const alteredName = name ? name : product.rows[0].name;
  const alteredPrice = price ? price : product.rows[0].price;
  const alteredCategory = category_id
    ? category_id
    : product.rows[0].category_id;

  try {
    const res = await database.query(
      "UPDATE products SET name = $2, price = $3, category_id = $4 WHERE id = $1 RETURNING *",
      [id, alteredName, alteredPrice, alteredCategory]
    );

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return { message: "Product Updated", product: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
