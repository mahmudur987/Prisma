import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      email: "1@1.com",
      name: "John Doe",
      profilePhoto: "https://example.com/johndoe.jpg",
    },
  });
  console.log(user);
};

async function main() {
  // createUser();

  const result = await prisma.user.findMany();
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
