import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { 
    name, 
    email, 
    password, 
    year_of_birth,
    phone_number,
    agency_name,  
  } = req.body;
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    res.status(400).send("User already exists");
  } else {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await hash(password, 10),
        year_of_birth: parseInt(year_of_birth, 10),
        phone_number,
        agency_name,
      },
    });
    res.status(200).json(user);
  }
}
