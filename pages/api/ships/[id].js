import prisma from "../../../utils/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const ship = await prisma.ship.findUnique({ where: { id } });
    res.status(200).json(ship);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const deletedShip = await prisma.ship.delete({ where: { id } });
      res.status(200).json(deletedShip);
    } catch {
      res.status(400).json({ message: "No record found." });
    }
  }
};

export default handler;
