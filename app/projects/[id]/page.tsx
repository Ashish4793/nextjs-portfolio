
// ===========================================
// FILE 2: app/project/[id]/page.tsx
// ===========================================
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projectsData } from 'lib/projectsData';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projectsData.find(p => p.id === projectId);

  // If project not found, show error message
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/projects" className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {project.category}
            </span>
            <span className="text-sm">{project.duration}</span>
            <span className="text-sm">• {project.team}</span>
          </div>
          <h1 className="text-5xl font-bold mb-3">
            {project.name}
          </h1>
          <p className="text-xl">
            {project.tagline}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Screenshot */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4">
                Project Overview
              </h2>
              <p className="leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-stone-900 dark:hover:bg-stone-800 transition-colors"
                  >
                    <svg
                      className="w-6 h-6  flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section className="bg-gray-50 dark:bg-stone-900 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">
                Tech Stack
              </h2>
              <div className="space-y-4">
                {Array.from(new Set(project.techStack.map(t => t.category))).map((category) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack
                        .filter(tech => tech.category === category)
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-stone-900  border border-gray-200 dark:border-stone-700 shadow-sm"
                          >
                            {tech.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 text-xs px-6 py-4 rounded-xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Demo
              </a>
              
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs px-6 py-4 rounded-xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}