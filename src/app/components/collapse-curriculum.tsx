"use client";
import { useState } from "react";

export default function CollapseCurriculum() {
  const [dialogue, setDialouge] = useState(false);
  return (
    <div>
      <div className="text-center">
        {/* <button onClick={() => setDialouge(!dialogue)}>
          Show full Curriculum
        </button> */}
        {true && (
          <div className="lg:mx-20">
            <div
              tabIndex={0}
              className="collapse collapse-arrow  border-base-300 bg-slate-50"
            >
              <div className="collapse-title text-xl font-medium">
                show full curriculum
              </div>
              <div className="collapse-content">
                <div className="py-8 mx-auto ">
                  <div>
                    <div className="card mb-8 min-w-full md:min-w-[50%] min-h-min bg-accent text-primary-content">
                      <div className="card-body">
                        <h2 className="card-title-center text-2xl font-bold">
                          Month 1
                        </h2>
                        <p>
                          Introduction to the course, HTML5, and web
                          development.
                        </p>
                        <p>
                          Basic HTML syntax, paragraphs, headings, and lists.
                        </p>
                        <p>Links, images, and tables in HTML.</p>
                        <p>Introduction to CSS, basic syntax, and selectors.</p>
                        <p>CSS styling for text, colors, and backgrounds.</p>
                        <p>CSS styling for borders, padding, and margins.</p>
                        <p>Responsive design</p>
                        <p>Introduction to JS</p>
                        <p>Variable, data types, operator</p>
                        <p>Control structure</p>
                        <p>Functions and scope in JavaScript.</p>
                        <p>Arrays and objects in JavaScript.</p>
                        <p>DOM manipulation using JavaScript.</p>
                      </div>
                    </div>
                    <div className="card my-8 min-w-full md:min-w-[50%] min-h-min bg-accent text-primary-content">
                      <div className="card-body">
                        <h2 className="card-title-center text-2xl font-bold">
                          Month 2
                        </h2>
                        <p>
                          Introduction to React and its role in web development.
                        </p>
                        <p>
                          Basic syntax and structure of a React application.
                        </p>
                        <p>Components, props, and state in React.</p>
                        <p>Fetching data</p>
                        <p>React hooks and context API.</p>
                        <p>Server-side rendering with NextJS.</p>
                        <p>
                          Building a complete project with React and NextJS.
                        </p>
                        <p>Project 1</p>
                      </div>
                    </div>
                    <div className="card my-8 min-w-full md:min-w-[50%] min-h-min bg-accent text-primary-content">
                      <div className="card-body">
                        <h2 className="card-title-center text-2xl font-bold">
                          Month 3
                        </h2>
                        <p>NextJS, Routing</p>
                        <p>Server components</p>
                        <p>Data fetching</p>
                        <p>Capstone Project</p>
                      </div>
                    </div>
                    <div className="card my-8 min-w-full md:min-w-[50%] min-h-min bg-accent text-primary-content">
                      <div className="card-body">
                        <h2 className="card-title-center text-2xl font-bold">
                          Month 4
                        </h2>
                        <p>Capstone Project continue</p>
                        <p>Resume building</p>
                        <p>Cover letter</p>
                        <p>Interview Prep</p>
                        <p>Applying jobs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
