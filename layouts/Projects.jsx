import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import ImageFallback from "./components/ImageFallback";

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
              <div className="animate lg:col-6 lg:order-2">
                <ImageFallback
                  className="mx-auto"
                  src={speciality?.primary.image}
                  width={575}
                  height={511}
                  alt="primary speciality"
                />
              </div>
              <div className="animate lg:col-5 lg:order-1">
                <p>{speciality?.primary.subtitle}</p>
                {markdownify(
                  speciality.primary.title,
                  "h2",
                  "mt-4 section-title bar-left"
                )}
                {markdownify(speciality?.primary.description, "p", "mt-10")}
              </div>
            </div>
            <div className="row items-center">
              <div className="animate lg:col-6">
                <ImageFallback
                  className="mx-auto"
                  src={speciality?.secondary.image}
                  width={575}
                  height={511}
                  alt="secondary speciality"
                />
              </div>
              <div className="animate lg:col-5">
                <p>{speciality?.secondary.subtitle}</p>
                {markdownify(
                  speciality?.secondary.title,
                  "h2",
                  "mt-4 section-title bar-left"
                )}
                {markdownify(speciality?.secondary.description, "p", "mt-10")}
              </div>
            </div>
            <div className="row items-center">
              <div className="animate lg:col-5">
                <p>{speciality?.secondary.subtitle}</p>
                {markdownify(
                  speciality?.secondary.title,
                  "h2",
                  "mt-4 section-title bar-left"
                )}
                {markdownify(speciality?.secondary.description, "p", "mt-10")}
              </div>
              <div className="animate lg:col-6">
                <ImageFallback
                  className="mx-auto"
                  src={speciality?.secondary.image}
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
