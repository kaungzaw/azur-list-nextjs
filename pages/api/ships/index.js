import prisma from "../../../utils/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    await prisma.$connect();
    const ships = await prisma.ship.findMany();
    await prisma.$disconnect();
    res.status(200).json(ships);
  } else if (req.method === "POST") {
    const { ship } = req.body;
    try {
      await prisma.$connect();
      const createdShip = await prisma.ship.create({ data: ship });
      res.status(201).json(createdShip);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.toString().replace(/\n/g, "") });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default handler;
