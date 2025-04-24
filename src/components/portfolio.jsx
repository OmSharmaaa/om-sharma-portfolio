




import React from 'react';
import { motion } from 'framer-motion';
import expenseTracker from "../assets/expense-tracker.png";
import stock from "../assets/stock.jpg";
import theOmSharma from "../assets/theOmSharma.jpg";
import sorting from "../assets/sorting.png";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const CustomButton = ({ children, variant = 'primary', href, download, ...props }) => {
    const baseStyle = 'px-6 py-3 rounded-xl font-semibold text-lg transition duration-300';
    const styles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800',
    };
    return href ? (
      <a
        href={href}
        download={download}
        className={`${baseStyle} ${styles[variant]}`}
        {...props}
      >
        {children}
      </a>
    ) : (
      <button className={`${baseStyle} ${styles[variant]}`} {...props}>
        {children}
      </button>
    );
  };

  const CustomCard = ({ title, desc, img }) => (
    <motion.div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" {...fadeInUp}>
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );

  const CustomInput = ({ type = 'text', ...props }) => (
    <input
      type={type}
      className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );

  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-blue-50 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white font-sans">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.img 
          src={theOmSharma} 
          alt="Om Sharma" 
          className="w-40 h-40 rounded-full shadow-xl mb-6 border-4 border-white dark:border-gray-800"
          {...fadeInUp}
        />
        <motion.h1 className="text-5xl font-extrabold mb-2" {...fadeInUp}>Om Sharma</motion.h1>
        <motion.p className="text-xl text-gray-600 dark:text-gray-300" {...fadeInUp}>
          Engineering tech-driven solutions through code and creativity.
        </motion.p>
        <motion.div className="mt-6" {...fadeInUp}>
          <CustomButton><a href="https://github.com/omsharmaaa" target='_blank'>View My Work</a> </CustomButton>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4" {...fadeInUp}>About Me</motion.h2>
        <motion.p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8" {...fadeInUp}>
          I’m Om Sharma, a Computer Science undergrad passionate about combining code with creativity. I specialize in data-centric applications and intuitive tools that make a difference.
        </motion.p>
        <motion.div className="flex justify-center gap-4 flex-wrap" {...fadeInUp}>
          <CustomButton href="/OmSharmaResumePDF.pdf" download>
            Download Resume
          </CustomButton>
          <CustomButton variant="outline"><a href='https://linkedin.com/in/omsharma02' target="_blank" >Get in Touch</a></CustomButton>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <motion.h2 className="text-4xl font-bold text-center mb-10" {...fadeInUp}>Highlighted Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "TradeScope",
              desc: "R & Shiny dashboard tracking 100+ stocks, real-time alerts, and forecasting tools.",
              img: stock
            },
            {
              title: "Expense Tracker",
              desc: "Python/SQL tool handling 1,000+ transactions with fraud detection and data dashboards.",
              img: expenseTracker
            },
            {
              title: "Sorting Visualizer",
              desc: "Interactive app in Python/Tkinter that visualizes sorting algorithms with speed control.",
              img: sorting
            }
          ].map((project, i) => (
            <CustomCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* Skills, Experience, Achievements, Contact, Footer sections remain unchanged */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-center mb-10" {...fadeInUp}>Skills</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div {...fadeInUp}>
            <h4 className="text-xl font-semibold mb-2">Languages</h4>
            <p className="text-gray-600 dark:text-gray-300">C/C++, R, SQL, JavaScript, Python, Java</p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h4 className="text-xl font-semibold mb-2">Tools/Frameworks</h4>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, MySQL, Tableau, Excel, VS Code, Linux</p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h4 className="text-xl font-semibold mb-2">Data/ML</h4>
            <p className="text-gray-600 dark:text-gray-300">Pandas, NumPy, Matplotlib, K-Means, PCA, Regression</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <motion.h2 className="text-4xl font-bold text-center mb-10" {...fadeInUp}>Experience</motion.h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <motion.li {...fadeInUp}><strong>Microsoft Learn Student Ambassador:</strong> Organized workshops and promoted Microsoft tools (Aug 2023 – Oct 2024)</motion.li>
          <motion.li {...fadeInUp}><strong>HackerEarth Campus Ambassador:</strong> Managed coding events with 300+ participants (Aug 2023 – Jan 2024)</motion.li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-center mb-10" {...fadeInUp}>Achievements</motion.h2>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
          <motion.li {...fadeInUp}>300+ LeetCode problems solved (Top 25%)</motion.li>
          <motion.li {...fadeInUp}>HackerRank: 5⭐ Python, 3⭐ C++ & SQL</motion.li>
          <motion.li {...fadeInUp}>Led logistics for TechnOcean 2k23 with 500+ participants</motion.li>
          <motion.li {...fadeInUp}>Volunteered at IIT Bombay’s MEDHA Hackathon 2023</motion.li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-center">
        <motion.h2 className="text-4xl font-bold mb-6" {...fadeInUp}>Get in Touch</motion.h2>
        <motion.form className="flex flex-col items-center gap-4 max-w-md mx-auto" {...fadeInUp}>
          <CustomInput placeholder="Name" />
          <CustomInput type="email" placeholder="Email" />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            rows={4}
          />
          <CustomButton>Send</CustomButton>
        </motion.form>
        <motion.div className="mt-8 space-y-2" {...fadeInUp}>
          <p>Email: <a href="mailto:omsharmaa02@gmail.com" className="text-blue-600">omsharmaa02@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/omsharma02/" target="_blank" className="text-blue-600">linkedin.com/in/omsharma02</a></p>
          <p>GitHub: <a href="https://github.com/omsharmaaa" target="_blank" className="text-blue-600">github.com/omsharmaaa</a></p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Om Sharma | Made with ❤️ and a lot of code.
      </footer>

    </div>
  );
}