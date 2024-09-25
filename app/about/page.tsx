'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
]

const techSkills = [
  'HTML, CSS, JavaScript, TypeScript, Tailwind',
  'Next.js and React.js for dynamic web applications',
  'Django REST Framework for API development',
  'CI/CD pipelines with GitHub Actions for testing & deployment',
  'Deployment to Heroku, Ngrok, and other cloud services',
  'Database management with PostgreSQL',
  'Algorithm design & optimization (binary search, merge sort, etc.)',
  'Android development using Kotlin',
  'API testing with Postman and Swagger documentation',
  'Adobe Illustrator, Photoshop for design; Figma for wireframes',
  'Agile principles, Jira for team collaboration & product management',
  'Version control with Git for collaborative development',
]

export default function About() {
  return (
    <div
      className="container mx-auto px-4 py-12 text-gray-900 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-lg shadow-lg relative"
      style={{
        backgroundImage: 'url(/images/image2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10">
        <motion.h1 
          className="text-5xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r from-blue-900 to-[#BAD59E] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100">
            I am a highly skilled web developer with a passion for creating responsive, interactive web applications and experiences. With expertise in frontend technologies like HTML, CSS, Tailwind, and JavaScript, as well as backend development using Django REST, I thrive in fast-paced environments that demand innovative solutions. I possess strong problem-solving abilities, a deep understanding of efficient algorithms, and a knack for both front-end and back-end optimization. I am also adept at Android app development, database management, and working with CI/CD pipelines for continuous integration and deployment.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold mb-6 text-[#BAD59E]">Technical Skills</h2>
            <ul className="list-disc pl-6 space-y-3">
              {techSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-lg text-gray-100"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 flex justify-center items-center">
            <motion.img
              src="/images/image3.jpg" 
              alt="Placeholder"
              className="w-80 h-80 object-cover rounded-full shadow-lg" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#BAD59E]">Skill Proficiency</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-100">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 shadow-sm">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-[#BAD59E] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
