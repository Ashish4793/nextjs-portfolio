'use client';
import React from 'react';
import { projectsBasicInfo as projects } from 'lib/projectsData'
export default function Page() {

  const redirectHandler = (id: number) => {
    // Handle redirect logic here
    window.location.href = `/projects/${id}`;
  };

  return (
    <section className="max-w-7xl mx-auto p-4">
      {/* Projects Section */}
      <div className="mb-16">
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-x-1.5 py-2 px-6 rounded-3xl text-md font-medium bg-black text-white dark:bg-white dark:text-neutral-800">
            Projects
          </span>
        </div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top Row */}
          {/* Left - Large Card (spans 2 columns) */}
          <div onClick={() => redirectHandler(projects[0].id)} className="md:col-span-2 relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient}`} />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative h-full flex flex-col justify-start p-8">
              <div className="text-white/80 text-xs font-semibold tracking-wider mb-2">
                {projects[0].tag}
              </div>
              <h3 className="text-white text-4xl font-bold leading-tight mb-3">
                {projects[0].title}
              </h3>
              <p className="text-white/90 text-lg">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Right - Medium Card (spans 1 column) */}
          <div onClick={() => redirectHandler(projects[1].id)} className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[1].gradient}`} />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative h-full flex flex-col justify-start p-8">
              <div className="text-white/80 text-xs font-semibold tracking-wider mb-2">
                {projects[1].tag}
              </div>
              <h3 className="text-white text-3xl font-bold leading-tight mb-2">
                {projects[1].title}
              </h3>
              <p className="text-white/90">
                {projects[1].description}
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          {/* Left - Medium Card (spans 1 column) */}
          <div onClick={() => redirectHandler(projects[2].id)} className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              alt={projects[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[2].gradient}`} />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative h-full flex flex-col justify-start p-8">
              <div className="text-white/80 text-xs font-semibold tracking-wider mb-2">
                {projects[2].tag}
              </div>
              <h3 className="text-white text-3xl font-bold leading-tight mb-2">
                {projects[2].title}
              </h3>
              <p className="text-white/90">
                {projects[2].description}
              </p>
            </div>
          </div>

          {/* Right - Large Card (spans 2 columns) */}
          <div onClick={() => redirectHandler(projects[3].id)} className="md:col-span-2 relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              alt={projects[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[3].gradient}`} />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative h-full flex flex-col justify-start p-8">
              <div className="text-white/80 text-xs font-semibold tracking-wider mb-2">
                {projects[3].tag}
              </div>
              <h3 className="text-white text-4xl font-bold leading-tight mb-3">
                {projects[3].title}
              </h3>
              <p className="text-white/90 text-lg">
                {projects[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}