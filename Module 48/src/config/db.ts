import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

function connectDB() {
  prisma
    .$connect()
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.error(err, "❌ Error connecting to DB"));
}

export default connectDB;
