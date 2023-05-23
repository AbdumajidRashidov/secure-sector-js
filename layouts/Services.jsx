import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";

const Services = ({ data }) => {
  return (
    <>
      <section className="section pt-0">
        <div className="mb-20 mt-32">
          <h2 className="mb-5 text-center text-white">Our Services</h2>
          <p className="mx-auto w-1/2 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <section className="section">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="shield"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Data Encryption
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Protect your sensitive data by encrypting it, ensuring that
                    only authorized individuals can access and decipher the
                    information.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="hard-drive"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Vulnerability Assessments
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Identify and address security vulnerabilities in your
                    systems and networks through comprehensive assessments and
                    simulated attacks to enhance overall security posture.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="globe"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Access Control
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Implement robust access control mechanisms to restrict
                    unauthorized access to your data, including user
                    authentication, role-based access control, and multi-factor
                    authentication.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="server"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Security Incident Response
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Develop and implement incident response plans to effectively
                    detect, mitigate, and respond to security incidents,
                    minimizing their impact and preventing further damage.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="user-check"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Security Awareness Training
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Educate your employees about data security best practices,
                    raising their awareness of potential threats and equipping
                    them with the knowledge to handle sensitive data securely.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-6 md:col-6 lg:col-4">
                <div
                  className="card card-body flex flex-col items-center justify-center rounded-xl px-14 py-10"
                  style={{ background: "#011936" }}
                >
                  <FeatherIcon
                    icon="cloud-lightning"
                    className="mb-4 h-16 w-16 text-primary"
                  />
                  <h3 className="mb-3 text-center text-xl text-white">
                    Data Loss Prevention (DLP)
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Deploy DLP solutions to monitor and prevent unauthorized
                    transmission, leakage, or loss of sensitive data, both
                    within your organization and through external channels.
                  </p>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center text-primary"
                  >
                    Learn more
                    <FeatherIcon
                      icon="arrow-right"
                      className="ml-2 h-5 w-5 text-primary"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
