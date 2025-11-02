import { Github, Cloud, Database, Code, Settings } from "lucide-react";

export default function Page() {
  const experiences = [
    {
      company: "Hortiprise",
      role: "SDE Intern",
      period: "May 2025 - Present",
      type: "Internship",
      description: [
        "Working as a Software Development Engineer Intern at Hortiprise, contributing to the development and maintenance of their web applications. Gained hands-on experience in full-stack development, collaborating with cross-functional teams to deliver high-quality software solutions.",
      ],
      technologies: [
        { name: "Next.js", icon: Code },
        { name: "TypeScript", icon: Code },
        { name: "Node.js", icon: Code },
        { name: "Prisma", icon: Database },
        { name: "PostgreSQL", icon: Database },
      ],
    },
  ];

  const education = [
    {
      institution: "VIT Bhopal, India",
      degree:
        "B.Tech CSE with specialization in Cloud Computing and Automation",
      period: "2021 - 2025",
      logo: "🎓",
    },
    {
      institution: "St. Arnold's Hr. Sec. School, India",
      degree: "High School ",
      period: "2008 - 2021",
      logo: "🏫",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-2">
      {/* Experience Section */}
      <div className="mb-16">
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-x-1.5 py-2 px-6 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
            Experience
          </span>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 last:mb-0">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>
                <p className="text-lg ">{exp.role}</p>
              </div>
              <div className="text-right">
                <p>{exp.period}</p>
                <p className="text-sm">{exp.type}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 space-y-3">
              {exp.description.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-sm">
                  - {paragraph}
                </p>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-3">- Technologies:</p>
              <ul className="space-y-2">
                {exp.technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span>•</span>
                      <span>{tech.name}</span>
                      <Icon className="w-4 h-4" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

     {/* Education Section */}
<div>
  <div className="flex justify-center mb-8">
    <span className="inline-flex items-center gap-x-1.5 py-2 px-6 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
      Education
    </span>
  </div>

  {education.map((edu, index) => (
    <div
      key={index}
      className="flex gap-6 mb-8 last:mb-0 items-start"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
          {edu.logo}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        {/* Header Row */}
        <div className="flex justify-between items-start w-full">
          <h3 className="text-lg font-semibold">{edu.institution}</h3>
          <p className="text-sm text-gray-600 flex-shrink-0 ml-4 whitespace-nowrap">
            {edu.period}
          </p>
        </div>

        {/* Degree */}
        <p className="text-base text-neutral-700">
          {edu.degree}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
