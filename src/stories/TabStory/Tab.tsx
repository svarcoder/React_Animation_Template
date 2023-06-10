import React from "react";
import { TabOne, TabTwo } from "./style";

interface TabsProps {
  Switch?: "Type1" | "Type2";
}

export const Tabs = ({ Switch }: TabsProps) => {
  return (
    <div>
      {Switch === "Type1" && (
        <TabOne>
          <div className="tab_container">
            <input
              className="inputnew"
              id="tab1"
              type="radio"
              name="tabs"
              checked
            />
            <label className="label1" htmlFor="tab1">
              <i className="fa fa-code"></i>
              <span>Code</span>
            </label>

            <input className="inputnew" id="tab2" type="radio" name="tabs" />
            <label className="label1" htmlFor="tab2">
              <i className="fa fa-pencil-square-o"></i>
              <span>About</span>
            </label>

            <input className="inputnew" id="tab3" type="radio" name="tabs" />
            <label className="label1" htmlFor="tab3">
              <i className="fa fa-bar-chart-o"></i>
              <span>Services</span>
            </label>

            <input className="inputnew" id="tab4" type="radio" name="tabs" />
            <label className="label1" htmlFor="tab4">
              <i className="fa fa-folder-open-o"></i>
              <span>Portfolio</span>
            </label>

            <input className="inputnew" id="tab5" type="radio" name="tabs" />
            <label className="label1" htmlFor="tab5">
              <i className="fa fa-envelope-o"></i>
              <span>Contact</span>
            </label>

            <section id="content1" className="tab-content">
              <h3>Headline 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </section>

            <section id="content2" className="tab-content">
              <h3>Headline 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section id="content3" className="tab-content">
              <h3>Headline 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section id="content4" className="tab-content">
              <h3>Headline 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <section id="content5" className="tab-content">
              <h3>Headline 5</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
         
          </div>
        </TabOne>
      )}
      {Switch === "Type2" && (
        <TabTwo>
          <div className="tabs">
            <input type="radio" id="tab1" name="tab-control" checked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <ul>
              <li title="Features">
                <label htmlFor="tab1" role="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
                  </svg>
                  <br />
                  <span>Features</span>
                </label>
              </li>
              <li title="Delivery Contents">
                <label htmlFor="tab2" role="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
                  </svg>
                  <br />
                  <span>Delivery Contents</span>
                </label>
              </li>
              <li title="Shipping">
                <label htmlFor="tab3" role="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
                  </svg>
                  <br />
                  <span>Shipping</span>
                </label>
              </li>{" "}
              <li title="Returns">
                <label htmlFor="tab4" role="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                  </svg>
                  <br />
                  <span>Returns</span>
                </label>
              </li>
            </ul>

            <div className="slider">
              <div className="indicator"></div>
            </div>
            <div className="content">
              <section>
                <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati
                atque quibusdam officiis est dolorum minima deleniti ratione
                molestias numquam. Voluptas voluptates quibusdam cum?
              </section>
              <section>
                <h2>Delivery Contents</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                quas adipisci a accusantium eius ut voluptatibus ad impedit
                nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit
                amet, similique nulla.
              </section>
              <section>
                <h2>Shipping</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nemo ducimus eius, magnam error quisquam sunt voluptate labore,
                excepturi numquam! Alias libero optio sed harum debitis! Veniam,
                quia in eum.
              </section>
              <section>
                <h2>Returns</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                dicta vero rerum? Eaque repudiandae architecto libero
                reprehenderit aliquam magnam ratione quidem? Nobis doloribus
                molestiae enim deserunt necessitatibus eaque quidem incidunt.
              </section>
            </div>
          </div>
        </TabTwo>
      )}{" "}
    </div>
  );
};
