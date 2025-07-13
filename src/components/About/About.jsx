import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ganesh Harikant
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-cyan-500 leading-tight">
            <span className="text-white">Aspiring </span>
            <ReactTypingEffect
              text={[
             'Full Stack Web Developer',
      'IoT Solutions Developer',
      'UI/UX Enthusiast',
      'Creative Problem Solver'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-cyan-500">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer skilled in building modern web applications using the MERN stack. 
            With hands-on experience through academic and personal projects, I’ve developed both front-end and back-end solutions that focus on performance, user experience, and scalability. 
            I enjoy turning ideas into functional products and continuously explore new technologies to grow as a developer.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1IjJ9y1O80k3S6JxI24bneiTwjwsle-PU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
              boxShadow: '0 0 2px #06b6d4, 0 0 2px #06b6d4, 0 0 40px #06b6d4',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#06b6d4"
            glarePosition="all"
            scale={1.05}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            transitionSpeed={1500}
            className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] 
                       rounded-full shadow-[0_0_60px_10px_rgba(6,182,212,0.4)] 
                       border-4 border-cyan-500 cursor-pointer"
          >
            <img
              src={profileImage}
              alt="Ganesh Harikant"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(6,182,212,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;