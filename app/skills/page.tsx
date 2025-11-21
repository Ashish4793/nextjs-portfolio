import {
  Github,
  Cloud,
  Database,
  Code,
  Settings,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Page() {
  const skills = [
    { name: "Next.js" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "MySQL" },
    { name: "Postgres" },
    { name: "MongoDB" },
    { name: "AWS DynamoDB" },
    { name: "AWS Lambda" },
    { name: "Docker" },
    { name: "K8s" },
    { name: "JWT" },
    { name: "Grafana" },
    { name: "Prometheus" },
    { name: "Git" },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      date: "Feb 2024",
      issuer: "Amazon Web Services (AWS)",
      description:
        "I earned the AWS Certified Solutions Architect – Associate certification, validating my ability to design and deploy scalable, highly available, and cost-effective systems on AWS. This certification demonstrates strong proficiency in AWS architectural best practices and the ability to translate business requirements into reliable cloud solutions.",
      skills: [
        "Design resilient and high-performing architectures",
        "Implement secure and reliable applications on AWS",
        "Select appropriate AWS services based on technical requirements",
        "Optimize cost and performance through resource planning",
        "Apply best practices for operational excellence and security",
      ],
      conclusion:
        "These skills enable me to architect and implement robust, scalable solutions on AWS—ensuring performance, reliability, and security across diverse workloads.",
      gradient:
        "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#b91c1c] via-[#ef4444] to-[#fca5a5]",
      badge:
        "https://www.novelvista.com/resources/images/course/other/aws-solution-architect-associates-logo.webp",
    },
    {
      title: "AWS Certified Cloud Practitioner – Foundational (CLF-C02)",
      date: "Dec 2023",
      issuer: "Amazon Web Services (AWS)",
      description:
        "I earned the AWS Certified Cloud Practitioner certification, establishing a strong foundation in AWS Cloud concepts, global infrastructure, and basic architectural principles. This certification demonstrates my understanding of AWS services, billing, pricing models, and cloud security fundamentals.",
      skills: [
        "Understand AWS Cloud concepts and global infrastructure",
        "Identify core AWS services and their common use cases",
        "Explain AWS pricing models and account management",
        "Understand basic security, compliance, and shared responsibility model",
        "Recognize the value of AWS for business and technical transformation",
      ],
      conclusion:
        "These skills provide me with a solid grounding in cloud fundamentals, enabling effective communication and collaboration on AWS-based projects and strategies.",
      gradient: "bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0]",
      badge:
        "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/twitter_thumb_201604_image.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-2">
      {/* Tech Stack Section */}
      <div className="mb-16">
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-x-1.5 py-2 px-4 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
            Skills
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium transition-all hover:scale-105"
            >
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-x-1.5 py-2 px-6 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
            Certifications
          </span>
        </div>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <p className="mb-4">
                    {cert.description}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 ml-6">
                  <p className=" whitespace-nowrap">
                    {cert.date}
                  </p>
                  <div
                    className={`w-24 h-24 ${cert.gradient} rounded-lg flex items-center justify-center text-4xl shadow-lg`}
                  >
                    <img src={cert.badge} className="w-16" alt="aws-saa-badge" />
                  </div>
                </div>
              </div>

              {/* Skills Covered */}
              <div className="mb-4">
                <p className="font-semibold mb-3 underline">
                  The certification broadly covers:
                </p>
                <ul className="space-y-2">
                  {cert.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <p className="text-gray-600 dark:text-gray-400 italic">
                {cert.conclusion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
