import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Af Echad",
    email: "af@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Simcha Rif",
    email: "simcha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
