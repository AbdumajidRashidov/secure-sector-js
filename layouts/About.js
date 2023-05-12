import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <div className="mb-44 mt-32">
          <h2 className="mb-5 text-center text-white">About Us</h2>
          <p className="mx-auto w-1/2 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mb-10">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 md:col-6 lg:col-4">
                <div
                  className="card card-body rounded-xl p-5"
                  style={{ background: "#011936" }}
                >
                  <div className="flex items-center justify-start p-3">
                    <FeatherIcon
                      icon="lock"
                      className="h-10 w-10 text-primary"
                    />
                    <h3 className="ml-4 text-xl text-white">Free Shipping</h3>
                  </div>
                  <div className="ml-4">
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-4">
                <div
                  className="card card-body rounded-xl p-6"
                  style={{ background: "#011936" }}
                >
                  <div className="flex items-center justify-start p-3">
                    <FeatherIcon
                      icon="lock"
                      className="h-10 w-10 text-primary"
                    />
                    <h3 className="ml-4 text-xl text-white">Free Shipping</h3>
                  </div>
                  <div className="ml-4">
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-4">
                <div
                  className="card card-body rounded-xl p-5"
                  style={{ background: "#011936" }}
                >
                  <div className="flex items-center justify-start p-3">
                    <FeatherIcon
                      icon="lock"
                      className="h-10 w-10 text-primary"
                    />
                    <h3 className="ml-4 text-xl text-white">Free Shipping</h3>
                  </div>
                  <div className="ml-4">
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container-xl">
            <div
              className="bg-theme_lighter rounded-2xl p-10"
              style={{ background: "#011936" }}
            >
              <div className="row m-0 p-0">
                <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                  <FeatherIcon
                    icon="globe"
                    className="h-10 w-10 text-primary"
                  />
                  <h3 className="mt-2 text-center text-white">
                    3,452 <span className="text-primary">+</span>
                  </h3>
                  <p className="mt-2">Cybersecurity Projects</p>
                </div>
                <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                  <FeatherIcon
                    icon="globe"
                    className="h-10 w-10 text-primary"
                  />
                  <h3 className="mt-2 text-center text-white">
                    3,452 <span className="text-primary">+</span>
                  </h3>
                  <p className="mt-2">Cybersecurity Projects</p>
                </div>
                <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                  <FeatherIcon
                    icon="globe"
                    className="h-10 w-10 text-primary"
                  />
                  <h3 className="mt-2 text-center text-white">
                    3,452 <span className="text-primary">+</span>
                  </h3>
                  <p className="mt-2">Cybersecurity Projects</p>
                </div>
                <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                  <FeatherIcon
                    icon="globe"
                    className="h-10 w-10 text-primary"
                  />
                  <h3 className="mt-2 text-center text-white">
                    3,452 <span className="text-primary">+</span>
                  </h3>
                  <p className="mt-2">Cybersecurity Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="section container">
          <div className="animate text-center">
            <p className="mb-5 text-2xl text-primary">Our Team</p>
            <h2 className="mb-10 text-white">Meet With Our Expert</h2>
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{our_office.subtitle}</p>
            {markdownify(our_office.title, "h2", "section-title mt-4")}
            {markdownify(our_office.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {our_office.countries.map((country, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      <ImageFallback
                        // className="mx-auto"
                        src={country.flag}
                        width={80}
                        height={80}
                        alt={country.name}
                      />
                      <h5 className="h4 mt-2">{country.name}</h5>
                      <p className="mt-2">{country.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <Cta />
    </>
  );
};

export default About;
