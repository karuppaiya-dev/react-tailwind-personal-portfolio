const skillGroups = [
  {
    category: "Frontend",
    span: "col-span-2 max-md:col-span-1",
    layout: "list",
    float: "animate-float1",
    skills: [
      { name: "HTML", tag: "Markup" },
      { name: "CSS", tag: "Style" },
      { name: "JavaScript", tag: "Language" },
      { name: "React", tag: "Library" },
      { name: "Next.js", tag: "Framework" },
      { name: "Tailwind CSS", tag: "CSS" },
      { name: "Bootstrap", tag: "CSS" },
    ],
  },
  {
    category: "Database",
    span: "col-span-1",
    layout: "list",
    float: "animate-float2",
    skills: [
      { name: "MongoDB", tag: "NoSQL" },
      { name: "MySQL", tag: "SQL" },
      { name: "PostgreSQL", tag: "SQL" },
    ],
  },
  {
    category: "Backend",
    span: "col-span-1",
    layout: "list",
    float: "animate-float3",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "REST API", tag: "Design" },
    ],
  },
  {
    category: "Tools",
    span: "col-span-1",
    layout: "list",
    float: "animate-float1",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Platform" },
      { name: "Vercel", tag: "Hosting" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-secondary text-primary text-[10px] font-medium px-4 py-1.5 rounded-full border border-border uppercase tracking-widest mb-4">
          Tech Stack
        </span>

        <h2 className="text-4xl font-semibold text-foreground mb-2">
          Skills & Technologies
        </h2>

        <p className="text-sm text-muted-foreground mb-6">
          Tools and technologies I use to build things
        </p>

        <div className="flex justify-center items-center gap-2">
          <div className="h-0.5 w-9 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="h-0.5 w-9 rounded-full bg-primary" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 max-w-2xl mx-auto">

        {/* Stats Card */}
        <div className="col-span-1 bg-secondary border border-border rounded-xl p-5 flex flex-col items-center justify-center gap-3 animate-float2 max-md:flex-row max-md:justify-around">
          <div className="text-center">
            <p className="text-3xl font-semibold text-primary">14</p>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1">
              Technologies
            </p>
          </div>

          <div className="w-6 h-px bg-border max-md:w-px max-md:h-6" />

          <div className="text-center">
            <p className="text-3xl font-semibold text-primary">3+</p>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1">
              Projects
            </p>
          </div>

          <div className="w-6 h-px bg-border max-md:w-px max-md:h-6" />

          <div className="text-center">
            <p className="text-3xl font-semibold text-primary">∞</p>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1">
              Learning
            </p>
          </div>
        </div>

        {/* Skill Cards */}
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className={`${group.span} bg-secondary border border-border rounded-xl p-5 hover:bg-surface hover:border-primary/40 transition-all ${group.float}`}
          >
            {/* Category */}
            <p className="flex items-center gap-2 text-sm hover:text-secondary-foreground text-muted-foreground uppercase tracking-widest mb-3">
              <span className="inline-block w-3 h-px bg-primary rounded-full" />
              {group.category}
            </p>

            {/* List Layout */}
            <div className="flex flex-col gap-2">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-background border border-border hover:border-primary/40 transition-all"
                >
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>

                  <span className="text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/30">
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};