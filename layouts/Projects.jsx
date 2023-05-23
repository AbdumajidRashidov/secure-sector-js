import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import ImageFallback from "./components/ImageFallback";
import kids from "../public/images/kids.png";
import staff from "../public/images/staff.png";
import dlp from "../public/images/dlp.jpeg";

const Projects = ({ data }) => {
  const { speciality } = data.frontmatter;
  return (
    <>
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
              <div className="animate mb-10 lg:col-6 lg:order-2">
                <ImageFallback
                  className="mx-auto rounded-2xl"
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
    </>
  );
};

export default Projects;
