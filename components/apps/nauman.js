import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutNauman extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", 
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        
        localStorage.setItem("about-section", screen);

        
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about nauman" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nauman's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nauman's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nauman's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nauman's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutNauman;

export const displayAboutNauman = () => {
    return <AboutNauman />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Nauman Sajjad Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hi, I'm <span className="font-bold">Nauman Sajjad</span> ,</div>
                <div className="font-normal ml-1">I'm an <span className="text-pink-600 font-bold">AI Automation Specialist!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">As an <span className=" font-medium">AI Automation Specialist</span>. I leverage my Computer Science background to design and implement intelligent automation solutions and robust backend systems. My expertise lies in applying cutting-edge AI to solve real-world challenges, delivering practical and efficient applications for businesses. ( Let's connect: <a className='text-underline' href='mailto:nauman.sajjad3393@gmail.com'><u>@nauman.sajjad3393@gmail.com</u></a> )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome projects that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I'm not coding, I enjoy exploring new AI tools, developing assistant applications, working on education tech projects, and experimenting with agent-based automation and LLMs.</li>
                <li className=" mt-3 list-star"> My passion lies in leveraging AI and automation to streamline workflows and solve complex challenges.</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Lahore Garrison University, Lahore, Pakistan
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - 2027</div>
                    <div className=" text-sm md:text-base">B.Sc. Computer Sciences</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 3.97/4.0</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Fazaia Inter College, Lahore, Pakistan
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021 - 2023</div>
                    <div className=" text-sm md:text-base">F.Sc. Pre-Medical</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 94%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Garrison Boys High School, Lahore, Pakistan
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2021</div>
                    <div className=" text-sm md:text-base">Matric Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 92%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">AI automation, Natural Language Processing (NLP), and RAG systems!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="nauman python" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="nauman c++" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="nauman javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/SQL-000000?style=flat&logo=postgresql&logoColor=white" alt="nauman sql" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="nauman git" className="m-1" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="nauman docker" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="nauman HTML" />
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="nauman SASS" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white" alt="nauman tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="nauman pytorch" />
                        <img className="m-1" src="https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white" alt="nauman scikit-learn" />
                        <img className="m-1" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white" alt="nauman pandas" />
                        <img className="m-1" src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" alt="nauman flask" />
                        <img className="m-1" src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="nauman django" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="nauman react" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="nauman node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="nauman tailwind css" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="nauman linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "PrimeWallet Banking Web App",
            date: "Jan 2024",
            link: "https://github.com/naumansajjad/PrimeWallet",
            description: [
                "Developed a full-stack banking application with secure user authentication, transaction management, and responsive UI.",
                "Technologies: Python, Flask, React.js, MSSQL"
            ],
            domains: ["python", "flask", "react.js", "javascript", "mssql"]
        },
        {
            name: "AI Academic Assistant",
            date: "Dec 2023",
            link: "https://github.com/naumansajjad/AI-Academic-Assistant",
            description: [
                "Built an intelligent assistant to help students with research, summarization, and query answering.",
                "Leveraged RAG for enhanced knowledge retrieval and conversational AI."
            ],
            domains: ["python", "nlp", "rag", "pytorch"]
        },
        {
            name: "AI Insightful Summaries",
            date: "Oct 2023",
            link: "https://github.com/naumansajjad/AI-InsightfulSummaries",
            description: [
                "Created an AI tool for generating concise and insightful summaries from lengthy documents or articles.",
                "Features: Customizable length, key-phrase extraction, and multi-document analysis."
            ],
            domains: ["python", "nlp", "automation"]
        },
        {
            name: "Google Forms Auto-Filler",
            date: "Aug 2023",
            link: "https://github.com/naumansajjad/Autofill-Google-Forms",
            description: [
                "Developed an automation script to intelligently pre-fill Google Forms based on provided data or pre-defined rules.",
                "Improved efficiency for data entry tasks and surveys."
            ],
            domains: ["python", "automation", "web-scraping"]
        },
        {
            name: "Multi-Agent Workflow for Job Applications",
            date: "Jun 2023",
            link: "https://github.com/naumansajjad/Multi-Agent-Job-Workflow",
            description: [
                "Engineered a multi-agent system to automate various stages of job application, from resume tailoring to cover letter generation.",
                "Integrated with LLMs for dynamic content creation and task delegation."
            ],
            domains: ["python", "llm", "automation", "multi-agent", "crewai"]
        },
        {
            name: "CLI File Manager",
            date: "Apr 2023",
            link: "https://github.com/naumansajjad/File-Manager-with-CLI-Using-OOP-Concepts-In-C-",
            description: [
                "Command-line interface file manager offering intuitive navigation, file operations (copy, move, delete), and search functionalities.",
                "Designed for efficiency and ease of use in terminal environments."
            ],
            domains: ["C++", "cli", "OOP"]
        }
    ];

    const tag_colors = {
        "python": "green-400",
        "flask": "gray-500",
        "react.js": "blue-400",
        "javascript": "yellow-300",
        "mssql": "indigo-500",
        "nlp": "pink-500",
        "rag": "purple-500",
        "pytorch": "orange-500",
        "automation": "teal-400",
        "web-scraping": "red-500",
        "llm": "blue-300",
        "multi-agent": "purple-600",
        "cli": "gray-600",
        "transformers": "red-400",
        "django": "green-600",
        "tailwindcss": "blue-300"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectName = project.link ? project.link.split('/').pop() : ''; 
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        {project.link && projectName && (
                                            <iframe src={`https://ghbtns.com/github-btn.html?user=naumansajjad&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                        )}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, idx) => { 
                                            return <li key={idx} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, idx) => { 
                                                return <span key={idx} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Nauman-Sajjad-Resume.pdf" title="nauman sajjad resume" frameBorder="0"></iframe>
    )
}