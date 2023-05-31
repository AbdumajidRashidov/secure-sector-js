import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import Post from "@layouts/partials/Post";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import imgUrl from "../public/images/blog/01.jpg";
import kids from "../public/images/kids.png";
import staff from "../public/images/staff.png";
import dlp from "../public/images/dlp-sm.png";
import Contact from "@layouts/Contact";

const Home = ({ banner, brands, features, intro, speciality, testimonial }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-description",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      // const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: 0,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: 10,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: 50,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base>
      <section className="section banner mt-3  pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="row ">
              <div className="col-12  flex items-center justify-center lg:col-6">
                <div className="banner-content mt-5">
                  {markdownify(
                    banner.title,
                    "h1",
                    "mb-8 banner-title opacity-0"
                  )}
                  <p className="banner-description mb-8 opacity-0">
                    Secure Sector for comprehensive data protection solutions.
                    Safeguard your sensitive information from unauthorized
                    access, breaches, and data loss. Our secure and reliable
                    solutions ensure the confidentiality and integrity of your
                    data, giving you peace of mind. Discover our cutting-edge
                    technologies and industry-leading expertise today.
                  </p>
                  <div className="banner-btn">
                    <Link className="btn btn-primary" href={banner.link.href}>
                      {banner.link.label}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <ImageFallback
                  className="banner-img opacity-0"
                  src={banner.image}
                  width={1170}
                  height={666}
                  priority={true}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 md:col-6 lg:col-4">
              <div
                className="card card-body rounded-xl p-5"
                style={{ background: "#011936" }}
              >
                <div className="flex items-center justify-start p-3">
                  <FeatherIcon icon="lock" className="h-10 w-10 text-primary" />
                  <h3 className="ml-4 text-xl text-white">Security services</h3>
                </div>
                <div className="ml-4">
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
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
                    icon="file-text"
                    className="h-10 w-10 text-primary"
                  />
                  <h3 className="ml-4 text-xl text-white">Data Privacy</h3>
                </div>
                <div className="ml-4">
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4">
              <div
                className="card card-body rounded-xl p-5"
                style={{ background: "#011936" }}
              >
                <div className="flex items-center justify-start p-3">
                  <FeatherIcon icon="save" className="h-10 w-10 text-primary" />
                  <h3 className="ml-4 text-xl text-white">
                    Industry Certified
                  </h3>
                </div>
                <div className="ml-4">
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-xl">
          <div className="row">
            {/* <div className="col-12 lg:col-12">
              <h2 className="mb-12 text-center text-white">
                Trusted Over <span style={{ color: "#0EC9AC" }}>2300 +</span>{" "}
                Companies in the World
              </h2>
            </div> */}
            <div className="row py-5">
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=" h-40 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={brand}
                          sizes="100vw"
                          alt=""
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section">
        <div className="container-xl">
          <div
            className="bg-theme_lighter rounded-2xl p-10"
            style={{ background: "#011936" }}
          >
            <div className="row m-0 p-0">
              <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                <FeatherIcon icon="globe" className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-center text-white">
                  3,452 <span className="text-primary">+</span>
                </h3>
                <p className="mt-2">Cybersecurity Projects</p>
              </div>
              <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                <FeatherIcon icon="globe" className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-center text-white">
                  3,452 <span className="text-primary">+</span>
                </h3>
                <p className="mt-2">Cybersecurity Projects</p>
              </div>
              <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                <FeatherIcon icon="globe" className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-center text-white">
                  3,452 <span className="text-primary">+</span>
                </h3>
                <p className="mt-2">Cybersecurity Projects</p>
              </div>
              <div className="col-12 flex flex-col items-center justify-center lg:col-3">
                <FeatherIcon icon="globe" className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-center text-white">
                  3,452 <span className="text-primary">+</span>
                </h3>
                <p className="mt-2">Cybersecurity Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="mb-2 text-center text-xl text-primary">
                Our Services
              </p>
              <h1 className="mb-10 text-center text-white">What We Offer</h1>
            </div>
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
                  Identify and address security vulnerabilities in your systems
                  and networks through comprehensive assessments and simulated
                  attacks to enhance overall security posture.
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
                  transmission, leakage, or loss of sensitive data, both within
                  your organization and through external channels.
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
      <section className="section pt-0">
        <section className="section">
          <div className="container">
            <div className="row items-center justify-center">
              <div className="col-12">
                <p className="mb-2 text-center text-xl text-primary">
                  Our Products
                </p>
                <h3 className="mb-10 text-center text-white">
                  You can imporve your business with our products
                </h3>
              </div>
              <div className="animate mb-10 h-80 lg:col-6 lg:order-2">
                <ImageFallback
                  className="mx-auto h-80 rounded-2xl object-cover"
                  src={dlp}
                  width={575}
                  height={511}
                  alt="primary speciality"
                />
              </div>
              <div className="animate mb-10 lg:col-5 lg:order-1">
                <h2 className="section-title bar-left mt-4 text-white">
                  Sector DLP
                </h2>
                <p className="mt-10 text-gray-500">
                  Sector DLP aims to protect sensitive data from unauthorized
                  access, leakage, or loss within an organization. It involves
                  implementing technology solutions, policies, and procedures to
                  prevent data breaches and ensure compliance with data
                  protection regulations. By monitoring and controlling data
                  flow across networks, endpoints, and storage systems, a DLP
                  project helps organizations identify and prevent data
                  exfiltration, accidental data loss, and insider threats. The
                  project typically includes risk assessments, policy
                  development, deployment of DLP tools, user training, and
                  ongoing monitoring and refinement to maintain a strong defense
                  against data loss incidents.
                </p>
              </div>
            </div>
            <div className="row mb-10 items-center">
              <div className="animate lg:col-6">
                <ImageFallback
                  className="mx-auto rounded-2xl"
                  src={kids}
                  width={575}
                  height={511}
                  alt="secondary speciality"
                />
              </div>
              <div className="animate lg:col-5">
                <h2 className="section-title bar-left mt-4 text-white">
                  Sector Kids
                </h2>
                <p className="mt-10 text-gray-500">
                  Sector kids - is a software tool designed to help parents
                  monitor and manage their children`s online activities across
                  various devices and platforms. It provides features and
                  functionalities that allow parents to enforce age-appropriate
                  restrictions, promote healthy digital habits, and ensure the
                  online safety of their children.
                </p>
              </div>
            </div>
            <div className="row mb-10 items-center">
              <div className="animate lg:col-5">
                <h2 className="section-title bar-left mt-4 text-white">
                  Sector staff monitoring
                </h2>
                <p className="mt-10 text-gray-500">
                  The platform is a software solution designed to track and
                  monitor the activities and performance of employees within an
                  organization. It provides tools and functionalities that allow
                  employers to oversee employee productivity, ensure compliance
                  with company policies, and improve overall workforce
                  management.
                </p>
              </div>
              <div className="animate lg:col-6">
                <ImageFallback
                  className="mx-auto rounded-2xl"
                  src={staff}
                  width={575}
                  height={511}
                  alt="secondary speciality"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="section">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="mb-2 text-center text-xl text-primary">Our News</p>
              <h1 className="mb-10 text-center text-white">Latest News</h1>
            </div>
            <div className="col-12 lg:col-4">
              <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
                <Link href={`#`}>
                  <ImageFallback
                    className="w-full object-cover"
                    src={imgUrl}
                    alt={""}
                    width={570}
                    height={335}
                  />
                </Link>
                <div className="p-2">
                  <h2 className="h4">
                    <Link
                      href={`#`}
                      className="block hover:text-primary hover:underline"
                    >
                      {"Five Strategies to Optimize Cloud Security in 2021"}
                    </Link>
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="pl-0">
                      <p className="font-medium text-dark">{"Adam Smith"}</p>
                      <p>{dateFormat("20.20.2022")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 lg:col-4">
              <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
                <Link href={`#`}>
                  <ImageFallback
                    className="w-full object-cover"
                    src={imgUrl}
                    alt={""}
                    width={570}
                    height={335}
                  />
                </Link>
                <div className="p-2">
                  <h2 className="h4">
                    <Link
                      href={`#`}
                      className="block hover:text-primary hover:underline"
                    >
                      {"Five Strategies to Optimize Cloud Security in 2021"}
                    </Link>
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="pl-0">
                      <p className="font-medium text-dark">{"Adam Smith"}</p>
                      <p>{dateFormat("20.20.2022")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 lg:col-4">
              <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
                <Link href={`#`}>
                  <ImageFallback
                    className="w-full object-cover"
                    src={imgUrl}
                    alt={""}
                    width={570}
                    height={335}
                  />
                </Link>
                <div className="p-2">
                  <h2 className="h4">
                    <Link
                      href={`#`}
                      className="block hover:text-primary hover:underline"
                    >
                      {"Five Strategies to Optimize Cloud Security in 2021"}
                    </Link>
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="pl-0">
                      <p className="font-medium text-dark">{"Adam Smith"}</p>
                      <p>{dateFormat("20.20.2022")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
