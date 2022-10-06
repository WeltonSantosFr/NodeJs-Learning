import database from "../database";

const createProductService = async (name, price, category_id) => {
  try {
    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );

    return {
      message: "Product Created",
      product: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
