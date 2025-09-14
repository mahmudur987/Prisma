import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // createUser();

  const result = await prisma.dentist.findMany();
  console.log(result);
}

main()
  .then(async () => {
    console.log("Done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
