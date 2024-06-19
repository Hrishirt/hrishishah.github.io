import React from 'react';
import Card from './Card';

const Experience = () => {
  return (
    <main className='App p-4'>
    <h2 className='text-4xl font-bold flex justify-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] py-12'>Experience</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Card imageSource={'/images/compScience.jpg'}>
          <h3 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]'>Dev ops Engineer Intern</h3> 
          <p>
            Developed and maintained the company using API's and DigitalOcean. 
            ran different tests to make sure different components of the server were working 
            Enhanced architecture using containerization to improve application performance.
            
            
          </p>   
        </Card>

        <Card imageSource={'/images/compScience.jpg'}>
          <h3 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]'>Software Engineer Team Leader Intern</h3> 
          <p>
          Led a team of 5 interns to solve various problems and make a profit for the Company. Manually built 
          sensors to capture data. Used languages such as C, Python in order to develop a data collection system. 
          </p>   
        </Card>

        <Card imageSource={'/images/compScience.jpg'}>
          <h3 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]'>Computing Science Teaching Assistant</h3> 
          <p>
          Created assignments that matched course topics. 
          I held one-on-one help sessions to support their understanding and success. 
          My efforts were well-received, earning a 5/5 rating from 85% of the class. 
          </p>   
        </Card>
      </div>
    </main>
  );
};

export default Experience;
