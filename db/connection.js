import { Sequelize } from "sequelize";
const sequelize = new Sequelize("blogProject", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
export const connectDB = async (req, res) => {
  return await sequelize
    .sync()
    .then((result) => console.log("DB Connected"))
    .catch((err) => console.error(err));
};
