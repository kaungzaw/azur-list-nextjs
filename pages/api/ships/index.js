import prisma from "../../../utils/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const ships = await prisma.ship.findMany();
    res.status(200).json(ships);
  } else if (req.method === "POST") {
    const { ship } = req.body;
    try {
      const createdShip = await prisma.ship.create({ data: ship });
      res.status(201).json(createdShip);
    } catch {
      res.status(400).json({ message: "error" });
    }
  }
};

export default handler;
