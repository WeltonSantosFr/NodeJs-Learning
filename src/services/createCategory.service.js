import database from "../database";

const createCategoryService = async (name) => {
  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );

    return {
      message: "Category Created",
      category: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
