import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification container section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
{/*===========================  Education =========================== */}
        <div className={toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
            }
        >
            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Economy</h3>
                    <span className="qualification__subtitle">Colombia - Universidad del Atlantico</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2018 - Present</div>
                </div>

            </div>
            
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Software development</h3>
                    <span className="qualification__subtitle">Colombia - Universidad del Norte</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2021 - 2022</div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Certified Public Accountant</h3>
                    <span className="qualification__subtitle">Colombia - Universidad de la Costa CUC</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2014 - 2022</div>
                </div>

            </div>


            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Certificate SFPC (v2020)</h3>
                    <span className="qualification__subtitle">Colombia - CertiProf</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2022 - 2022</div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Financial analysis</h3>
                    <span className="qualification__subtitle">Colombia - SENA</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2018 - 2018</div>
                </div>

            </div>

          </div>
{/*=========================  Fin Education ========================= */}



{/*===========================  Experience =========================== */}
        <div className={toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
            }
        >

            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Tester QA</h3>
                    <span className="qualification__subtitle">SQA - Colombia</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2022 - Present</div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Functional Analyst and Developer</h3>
                    <span className="qualification__subtitle">Inversisa - Colombia</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2022 - Present</div>
                </div>

            </div>

            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Accounting analyst</h3>
                    <span className="qualification__subtitle">Inversisa - Colombia</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2016 - 2022</div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Junior Developer</h3>
                    <span className="qualification__subtitle">DigitalGex - Colombia</span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2020 - 2022</div>
                </div>

            </div>

          </div>
{/*=========================  Fin Experience ========================= */}
        </div>
      </div>
    </section>
  );
}

export default Qualification