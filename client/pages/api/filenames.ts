import fs from "fs";
import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const { projectsList } = req.body;
  projectsList.forEach((project: any, index: number) => {
    const { projectDirectory } = project;
    const publicDirectoryPath = `./public/projects/${projectDirectory}`;
    try {
      const fileNames: string[] = fs.readdirSync(publicDirectoryPath);
      projectsList[index].images = fileNames;
    } catch (error) {}
  });
  res.status(200).json(projectsList);
};

export default handler;
