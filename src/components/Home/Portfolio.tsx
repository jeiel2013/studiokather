import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Botanica Studio",
    category: "Visual Identity",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
  },
  {
    id: 2,
    title: "Lumina Arc",
    category: "Rebranding",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Nordic Home",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Aura Tech",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Essence",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Kinetic",
    category: "Brand Strategy",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
  },
];

export const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section
      id="portfolio"
      className="py-16 
      min-[768px]:py-20 
      min-[820px]:py-20
      min-[853px]:py-20
      min-[912px]:py-20
      lg:py-24 
      -mt-45 
      min-[344px]:-mt-38
      min-[360px]:-mt-46
      min-[375px]:-mt-43
      min-[412px]:-mt-47
      min-[414px]:-mt-54
      min-[430px]:-mt-60
      min-[540px]:-mt-28
      min-[768px]:-mt-37 
      min-[820px]:-mt-40
      min-[853px]:-mt-45
      min-[912px]:-mt-36
      min-[1024px]:-mt-84
      min-[1280px]:-mt-75
      bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full">
        <div
          className="grid 
        grid-cols-1 
        min-[540px]:grid-cols-1
        min-[768px]:grid-cols-2 
        min-[820px]:grid-cols-2
        min-[853px]:grid-cols-2
        min-[912px]:grid-cols-2
        min-[1024px]:grid-cols-3
        min-[1280px]:grid-cols-3
        gap-4 
        min-[768px]:gap-5
        min-[820px]:gap-5
        min-[853px]:gap-6
        min-[912px]:gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group relative w-full aspect-square overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black/60 ${activeProject === project.id ? "opacity-100" : "opacity-0"} 
                min-[768px]:opacity-0 
                min-[768px]:group-hover:opacity-100 
                transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]`}
              >
                <h3
                  className={`text-offwhite text-xl 
                  min-[768px]:text-2xl 
                  min-[820px]:text-2xl
                  min-[853px]:text-3xl
                  min-[912px]:text-3xl
                  font-semibold 
                  ${activeProject === project.id ? "translate-y-0" : "translate-y-4"} 
                  min-[768px]:translate-y-4 
                  min-[768px]:group-hover:translate-y-0 
                  transition-transform duration-500 delay-75`}
                >
                  {project.title}
                </h3>
                <span
                  className={`text-beige text-sm 
                  min-[853px]:text-base
                  min-[912px]:text-base
                  mt-2 font-light 
                  ${activeProject === project.id ? "translate-y-0" : "translate-y-4"} 
                  min-[768px]:translate-y-4 
                  min-[768px]:group-hover:translate-y-0 
                  transition-transform duration-500 delay-100`}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
