import React from "react";
import Tilt from "react-parallax-tilt";
import { For } from "@/components/react/utils/react_utils";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "TypeScript", level: 80, color: "bg-blue-500" },
  { name: "JavaScript", level: 80, color: "bg-yellow-400" },
  { name: "HTML", level: 100, color: "bg-orange-500" },
  { name: "CSS", level: 70, color: "bg-blue-400" },
  { name: "Golang", level: 60, color: "bg-teal-400" },
  { name: "Python", level: 60, color: "bg-green-500" },
];

const SkillBar: React.FC<Skill> = ({ name, level, color }) => {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-700`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillList: React.FC = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="white"
      glarePosition="bottom"
      transitionSpeed={500}
      className="w-[320px] my-auto p-6 bg-white rounded-2xl shadow-lg"
    >
      <div className="space-y-4">
        <For each={skills}>{(skill, index) => (
          <SkillBar key={index} {...skill} />
        )}</For>
      </div>
    </Tilt>
  );
};

export { SkillList };
