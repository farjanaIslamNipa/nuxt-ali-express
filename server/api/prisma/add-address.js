const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const address = await prisma.address.create({
    data: {
      userId: body.userId,
      name: body.name,
      address: body.address,
      zipcode: body.zipCode,
      city: body.city,
      country: body.country
    }
  })
  return address
})