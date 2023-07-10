import React from "react";
import japanApp from '../assets/portfolio/japanApp.png';
import ticTacToe from '../assets/portfolio/tictactoe.png';
import blogSite from '../assets/portfolio/blog.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: 'Japanese Quiz App',
      link: 'https://yourdemo/linkforjapanapp',
      src: japanApp,
    },
    {
      id: 2,
      name: 'Tic Tac Toe',
      link: 'https://yourdemo/linkfortictactoe',
      src: ticTacToe,
    },
    {
      id: 3,
      name: 'Blog Site',
      link: 'https://yourdemo/linkforblogsite',
      src: blogSite,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name, link, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                >
                  {name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
