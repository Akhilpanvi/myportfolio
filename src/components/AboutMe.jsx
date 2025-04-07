import React from "react";

const AboutMe = () => {
  return (
    <div
      name="About"
      className="mt-4 py-2 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        About Me
      </h4>

      <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 md:ml-8 text-my-bg-color">
        <div>
        <p class="mb-2">Greetings!</p>
          <p>
          I Akhil Panvi Chakkapalli, a passionate and driven computer science enthusiast currently pursuing a Bachelor’s in Computer Science Engineering at <strong>KL University, Vijayawada</strong>. My academic journey is rooted in developing a strong foundation across key areas such as Data Structures and Algorithms, Big Data, Operating Systems, Database Systems, Software Engineering, and Data Visualization. I am deeply committed to continuous learning, innovative problem-solving, and leveraging technology to build impactful and efficient solutions.
          </p>
          <br />
          <br />
          <p>
            <strong>
              I welcome you to connect with me on LinkedIn or contact me via
              email (2300033181@kluniversity.in).
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
