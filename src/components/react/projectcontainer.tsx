import React from "react";
import Tilt from "react-parallax-tilt";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/react/ui/card";
import { Badge } from "@/components/react/ui/badge";
import { For } from "@/components/react/utils/react_utils"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  isActive: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "first portofolio",
    description: "website for show my portofolio",
    image: "/project/portofolio1.png",
    url: "#",
    isActive: false,
  },
  {
    id: 2,
    title: "second portofolio",
    description: "website for show my portofolio",
    image: "/project/portofolio2.png",
    url: "https://portofolio-ikhwans.vercel.app/",
    isActive: true,
  },
  {
    id: 3,
    title: "telegram bot",
    description:
      "aplication for convert tiktok link into video without watermark",
    image: "/project/telegramBot.png",
    url: "https://t.me/TiktokConverterRobot",
    isActive: true,
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  url,
  isActive,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={500}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card className="w-[320px] overflow-hidden shadow-md hover:shadow-lg transition-all rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {title}
              <Badge variant={isActive ? "default" : "destructive"}>
                {isActive ? "active" : "not active"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </a>
    </Tilt>
  );
};

const ProjectContainer: React.FC = () => {
  return (
    <div className="p-8 flex flex-wrap gap-6 shadow-2xl rounded-xl justify-center w-full overflow-x-hidden  overflow-y-auto h-[450px]">
      <For each={projects}>
        {(project, _) => (
          <ProjectCard key={project.id} {...project} />
        )}
      </For>
    </div>
  );
};

export { ProjectContainer };
