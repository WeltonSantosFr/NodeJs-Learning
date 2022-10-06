import database from "../database";

const updateCategoryService = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $2 WHERE id = $1 RETURNING *",
      [id, name]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return { message: "Category Updated", category: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
