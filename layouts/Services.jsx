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
              {/* <div className="col-12">
                <p className="mb-2 text-center text-xl text-primary">
                  Our Services
                </p>
                <h1 className="mb-10 text-center text-white">What We Offer</h1>
              </div> */}
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
                    Network Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
                    Database Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
                    Web Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
                    Locker Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
                    Data Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
                    Cloud Security
                  </h3>
                  <p className="mb-6 text-center text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
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
