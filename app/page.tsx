import { Download } from "lucide-react";

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-6xl font-semibold tracking-tighter">
        Hi, I'm Ashish!
      </h1>
      <h2 className="mb-8 text-2xl tracking-tighter">
        SDE Intern at Hortiprise | Full Stack Developer | Passionate about
        Scalable Architectures & Cloud Systems
      </h2>
      <p className="mb-4">
        {`A recent CS Grad skilled in Next.js, TypeScript, Node.js, and Prisma, focused on creating high-quality, production-ready web applications. I love engineering solutions that combine solid backend architecture with smooth, efficient front-end experiences — always built for speed, reliability, and long-term scalability.`}
      </p>
      <div className="my-8">
        <a
        target="_blank"
        rel="noreferrer"
          href="/assets/resume/Ashish-Kumar-Resume.pdf"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium cursor-pointer rounded-2xl border border-transparent bg-black text-white hover:bg-gray-900 focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </section>
  );
}
