import Head from 'next/head'
import Layout from '../components/layout'

const title = "See some of my work at JBA Consulting"
const description = "I'm Rob Berry, Head of Technology at JBA Consulting. I have specialist knowledge in advanced data and GIS analysis, high performance processing and system and architecture design."

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <section className="dark-grey">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="heavy">Work</h1>
              <p>
                Hi, I&apos;m Rob, a creative developer of technology for engineers.
              </p>
              <p>
                I&apos;m Head of Technology at <a href="https://www.jbaconsulting.com" className="type-white heavy"
                  target="_blank" rel="noopener noreferrer">JBA Consulting</a>,
                where I deliver cutting edge projects, using my specialist knowledge in advanced
                data and GIS analysis, high performance processing (distributed CPU and GPU) and system and
                architecture design.
              </p>
              <p>
                I am a Chartered Engineer, Fellow of CIWEM, PRINCE2 Practitioner, Certified ScrumMaster,
                and <a href="https://aws.amazon.com" className="type-white heavy" target="_blank" rel="noopener noreferrer">
                  Amazon Web Services</a> Solution Architect.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white narrow">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p><span className="linkedin"></span>Connect on <a href="https://uk.linkedin.com/in/robberry"
                className="type-grey heavy" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </section>
      <section className="off-white">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="heavy">Recent client projects</h2>
              <ul>
                <li>
                  NaFRA2
                  <div className="organisation">Environment Agency, UK</div>
                </li>
                <li>
                  Romania Flood Risk Management Plan
                  <div className="organisation">The World Bank, United States</div>
                </li>
                <li>
                  Incident Management Forecasting System
                  <div className="organisation">Environment Agency, UK</div>
                </li>
                <li>
                  Vietnam Flood Forecasting System
                  <div className="organisation">The World Bank, United States</div>s
                </li>
                <li>
                  LUCAS 2022, Lot 7 Hosting
                  <div className="organisation">Eurostat, Luxembourg</div>
                </li>
                <li>
                  Flood Warning Service
                  <div className="organisation">Environment Agency, UK</div>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h2 className="heavy">Internal work</h2>
              <p className="normal">
                Alongside client work I set strategy and implement IT hardware and software projects at JBA.  It&apos;s quite a challenge:
              </p>
              <ul>
                <li>We have many petabytes of storage</li>
                <li>
                  Our compute grid comprises of &asymp;&nbsp;350x high performance <a href="https://www.nvidia.com/en-gb/data-center/pascal-gpu-architecture/"
                    className="heavy type-grey" target="_blank" rel="noopener noreferrer">NVidia</a> GPU devices, they process millions of
                  models a month via <a href="https://research.cs.wisc.edu/htcondor/" className="heavy type-grey" target="_blank" rel="noopener noreferrer">
                    HTCondor</a>
                </li>
                <li>
                  We run our own data centres and also utilise <a href="https://aws.amazon.com" className="heavy type-grey" target="_blank"
                    rel="noopener noreferrer">Amazon Web Services</a> and <a href="https://azure.microsoft.com" className="heavy type-grey"
                      target="_blank" rel="noopener noreferrer">Microsoft Azure</a> for a hybrid cloud setup
                </li>
                <li>Many of our government clients require highly available systems and have complex support requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-grey">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heavy">Skills</h2>
            </div>
            <div className="col-4">
              <h2>Computing</h2>
              <div className="skill">
                <p className="label type-white">Cloud</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-90" role="progressbar" aria-valuenow="90"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Python</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-80" role="progressbar" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">C#</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-50" role="progressbar" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Web technologies</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-75" role="progressbar" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Tinkering</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-95" role="progressbar" aria-valuenow="95"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h2>Data</h2>
              <div className="skill">
                <p className="label type-white">Databases</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-90" role="progressbar" aria-valuenow="90"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">GIS</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-90" role="progressbar" aria-valuenow="90"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Big data</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-70" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h2>Business</h2>
              <div className="skill">
                <p className="label type-white">Strategy and innovation</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-80" role="progressbar" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Service design and management</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-60" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">Enterprise and solution architecture </p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-85" role="progressbar" aria-valuenow="85"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill">
                <p className="label type-white">
                  Process optimisation</p>
                <div className="progress">
                  <div className="progress-bar bg-blue pc-70" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h2 className="heavy">Recent publications and presentations</h2>
              <ul>
                <li>
                  <a href="/downloads/publications/digital-technolgies-for-a-step-change-in-national-scale-flood-mapping.pdf"
                    target="_blank" rel="noopener noreferrer" className="heavy type-grey">
                    Digital technologies to enable a step change in the modelling and collaborative development
                    of national-scale flood mapping
                  </a>
                  <div className="author">Berry,&nbsp;R. and Hunter,&nbsp;N.</div>
                  <div className="location">Flood and Coastal Risk Management Conference, UK.</div>
                </li>
                <li>
                  <a href="/downloads/publications/local-to-country-scale-flood-forecasting.pdf" target="_blank" rel="noopener noreferrer"
                    className="heavy type-grey">
                    Local to Country Scale Flood Forecasting
                  </a>
                  <div className="author">Berry,&nbsp;R., Hunter,&nbsp;N., Bevington,&nbsp;J. and Lamb,&nbsp;R.</div>
                  <div className="location">Flood Forecasting Meets ML, Google, Israel.</div>
                </li>
                <li>
                  <a href="/downloads/publications/flood-foresight-forecast-and-near-real-time-flood-impact-assessment.pdf"
                    target="_blank" rel="noopener noreferrer" className="heavy type-grey">
                    Flood Foresight: Near real-time and forecast flood information for proactive flood
                    management
                  </a>
                  <div className="author">Revilla-Romero,&nbsp;B., Allatson,&nbsp;C., Berry,&nbsp;R.,
                    Bevington,&nbsp;J., Gubbin,&nbsp;A., Hankin,&nbsp;B., Mattingley,&nbsp;P., Pinnell,&nbsp;M.,
                    Shelton,&nbsp;K. and Wood,&nbsp;E.</div>
                  <div className="location">Geophysical Research Abstracts Vol. 20, EGU2018-16413, 2018 European
                    Geosciences Union General Assembly, Vienna.</div>
                </li>
                <li>
                  <a href="/downloads/publications/collaborative-development-of-high-resolution-pluvial-flood-maps-for-flanders.pdf"
                    target="_blank" rel="noopener noreferrer" className="heavy type-grey">
                    Collaborative development of high resolution pluvial flood maps for Flanders
                  </a>
                  <div className="author">Cauwenberghs,&nbsp;K., Feyaerts,&nbsp;T., Hunter,&nbsp;N., Dewelde,&nbsp;J.,
                    Vansteenkiste,&nbsp;T., Huybrighs,&nbsp;M., Vaes,&nbsp;G. and Berry,&nbsp;R.</div>
                  <div className="location">13th International Conference on Hydro Informatics (HIC2018), Palermo,
                    Italy.</div>
                </li>
                <li>
                  <a href="/downloads/publications/revista-hidrotehnica-nr4-6-2018.pdf" target="_blank" rel="noopener noreferrer"
                    className="heavy type-grey">
                    Modelul JFlow® - O Potentiala Solutie Pentru Cartografierea Hazardului La Inudatii la Scara
                    Bazinului Hidrografic
                  </a>
                  <div className="author">Berry,&nbsp;R., Tancock,&nbsp;M., Cooper,&nbsp;J. and Radulescu,&nbsp;D.
                  </div>
                  <div className="location">Revista Hidrotehnica, Vol. 63.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
