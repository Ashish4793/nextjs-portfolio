import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      {/* Contact Section */}
      <div className="mb-16">
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-x-1.5 py-2 px-6 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
            Contact
          </span>
        </div>

        {/* Connect with me Section */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl border border-gray-200 dark:border-stone-800 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Connect with me
          </h2>
          <p className=" mb-8">
            You can reach out to me directly through these channels
          </p>

          <div className="space-y-4">
            {/* GitHub */}
            <a
              href="https://github.com/Ashish4793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-stone-800 hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gray-200 dark:bg-stone-700">
                <Github className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  GitHub
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  github.com/Ashish4793
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ashishk4793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-stone-800 hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gray-200 dark:bg-stone-700">
                <Linkedin className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  www.linkedin.com/in/ashishk4793
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hire.ashishh@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-stone-800 hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gray-200 dark:bg-stone-700">
                <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  hire.ashishh@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="https://x.com/AshishK4793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-stone-800 hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gray-200 dark:bg-stone-700">
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  X
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  x.com/AshishK4793
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
