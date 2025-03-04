"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "T2DS",
    description: "Design solution service provider",
    image: "/images/projects/1.png",
    tag: ["All", "WordPress"],
    previewUrl: "https://www.t2ds.com/",
  },
  {
    id: 2,
    title: "ZEA Relief Cream",
    description: "An E-commerce Website that Sells Pain Relief Cream",
    image: "/images/projects/2.png",
    tag: ["All", "Shopify"],
    previewUrl: "https://www.zea.global/",
  },
  {
    id: 3,
    title: "Masseuse Massage",
    description: "An E-commerce website that sells massage chair",
    image: "/images/projects/3.png",
    tag: ["All", "Shopify"],
    previewUrl: "https://masseusemassage.com.au/",
  },
  {
    id: 4,
    title: "Product Board",
    description: "A service provider on the start-up compony",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    previewUrl: "https://www.productboard.com/",
  },
  {
    id: 5,
    title: "Double Jump",
    description: "A WordPress website that provides Full Service Video Production or A La Carte Pricing",
    image: "/images/projects/5.png",
    tag: ["All", "WordPress"],
    previewUrl: "https://www.doublejump.media/",
  },
  {
    id: 6,
    title: "AAR Autoglass",
    description: "A WordPress website that deals a Autoglass product. ",
    image: "/images/projects/6.png",
    tag: ["All", "WordPress"],
    previewUrl: "https://autoglassinsanantonio.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Handled Projects
      </h2>
      <div className="text-white grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WordPress"
          isSelected={tag === "WordPress"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Shopify"
          isSelected={tag === "Shopify"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
