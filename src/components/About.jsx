import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello and welcome! My name is Jason Golliet, and I am a full-stack
          software engineer based in the Greater Seattle Area. With a deep
          passion for technology, especially future tech and AI, I am always
          eager to challenge myself and broaden my skills. My interest in
          language learning also keeps me motivated to continuously refine my
          communication abilities, particularly in technical contexts.
        </p>

        <br />

        <p className="text-xl">
          My portfolio includes a variety of projects, all of which reflect my
          dedication, problem-solving skills, and commitment to producing
          high-quality work. I welcome you to browse through these works to get
          a sense of my abilities and style. When I'm not immersed in code, I
          enjoy traveling and exploring new cultures. These experiences have
          not only enriched me personally, but also have added to my flexibility
          and adaptability in diverse team environments. Feel free to contact me
          if you would like to collaborate or learn more about my work. Thank
          you for stopping by!
        </p>
      </div>
    </div>
  );
};

export default About;
