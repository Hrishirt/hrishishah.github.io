"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
  {
    id: 1,
    title: "Shakespeare Poetry Generator",
    description: "A Recurrent Neural Network (RNN) model using Keras to generate poetry, trained exclusively on the'shakespeare.txt' dataset from TensorFlow, mastering the distinctive style of Shakespearean text. Achieved an 89.13% accuracy with the model, consistently generating words and phrases that adhere flawlessly to the training data's text style.",
    image: "/images/shakespeare.jpg",
    tag: ["All", "AI"],
    hostUrl: "https://github.com/Hrishirt/Shakespeare",
  },
  {
    id: 2,
    title: "Brain Tumor Detector",
    description: "A CNN using Keras and TensorFlow to classify MRI scans into a tumor or no tumor category. Then optimized the model with multiple pooling layers to efficiently extract features from MRI scans. Enhanced the CNN model's accuracy by 86.12% by implementing preprocessing, data splitting, and overfitting prevention techniques in medical image analysis. This was then deployed using flask to form a webapp",
    image: "/images/brain.jpg",
    tag: ["All", "AI", "Web"],
    hostUrl: "https://github.com/Hrishirt/Brain-Tumor-Detector",
  },
  {
    id: 3,
    title: "QR-GO",
    description: "A project that mimics pokemon GO, but instead it uses QR-Codes. Uses google maps API, allows users to scan QR-codes to gain points",
    image: "/images/pokeball.jpg",
    tag: ["All", "Mobile"],
    hostUrl: "https://github.com/CMPUT301W23T25/QR-Go-Gotta-Scan-Em-All",
  },
  {
    id: 4,
    title: "Research Paper on LLM's and Taint Analysis",
    description: "A research paper that measures the efficiency of Large Language Models to read Taint Diagrams in order to perform Taint Analysis.",
    image: "/images/LLM.jpg",
    tag: ["All", "Paper"],
    hostUrl: "https://www.academia.edu/119257618/Evaluating_the_Efficacy_of_Static_Analysis_tools_with_Image_Recognition_and_LLMs_for_Enhanced_Taint_Analysis_Propagation_compared_to_existing_methods",
  }
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTabChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] mt-4 mb-8 md:mb-12' id='projects'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTabChange} 
          tag='All' 
          isSelected={tag ==="All"} 
        />

        <ProjectTag 
          onClick={handleTabChange} 
          tag='Web' 
          isSelected={tag ==="Web"} 
        />

        <ProjectTag 
          onClick={handleTabChange} 
          tag='AI' 
          isSelected={tag ==="AI"} 
        />

        <ProjectTag 
          onClick={handleTabChange} 
          tag='Mobile' 
          isSelected={tag ==="Mobile"} 
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.filter(project => tag === 'All' || project.tag.includes(tag)).map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            hostUrl={project.hostUrl}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectSection
