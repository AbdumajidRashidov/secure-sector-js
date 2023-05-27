import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { configEmailJS } from "../config";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  // const { frontmatter } = data;
  // const { title } = frontmatter;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    console.log(form.current.reset);
    emailjs
      .sendForm(
        configEmailJS.SERVICE_ID,
        configEmailJS.TEMPLATE_ID,
        form.current,
        configEmailJS.API_KEY
      )
      .then(
        (result) => {
          // show the user a success message
          form.current.reset();
          if (result.status) {
            alert("Xabaringiz muvaffaqiyatli yuborildi.)");
          }
        },
        (error) => {
          // show the user an error
          alert("error");
        }
      );
  };

  return (
    <section className="section">
      {/* <Banner title={title} /> */}
      <div className="container">
        <div className="section row  justify-center">
          <div className="animate lg:col-6">
            <div className="mb-10">
              <h5 className="mb-5 text-primary">Contact Us</h5>

              <h3 className="mb-5 text-white">Get In Touch</h3>

              {/* <div className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam, quis nostrud exercitation{" "}
                  </div> */}
            </div>
            <div className="row mb-10">
              <div className="col-12 lg:col-6">
                <div className="card mb-4 flex">
                  <div
                    className="mr-5 flex h-16 w-16 items-center justify-center rounded-xl p-3"
                    style={{ background: "#10233B" }}
                  >
                    <FeatherIcon
                      icon="home"
                      className="card-icon m-0 h-8  w-8 p-0 text-primary"
                    />
                  </div>

                  <div>
                    <h4 className="text-white">Location</h4>
                    <p className="text-gray-500">
                      64A, Labzak street, Tashkent
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 lg:col-6">
                <div className="card mb-4 flex">
                  <div
                    className="mr-5 flex h-16 w-16 items-center justify-center rounded-xl p-3"
                    style={{ background: "#10233B" }}
                  >
                    <FeatherIcon
                      icon="home"
                      className="card-icon m-0 h-8  w-8 p-0 text-primary"
                    />
                  </div>

                  <div>
                    <h4 className="text-white">Denpasar</h4>
                    <p className="text-gray-500">
                      Jl. Niti Mandala, Renon, Bali – 80225
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="card mb-4 flex">
                  <div
                    className="mr-5 flex h-16 w-16 items-center justify-center rounded-xl p-3"
                    style={{ background: "#10233B" }}
                  >
                    <FeatherIcon
                      icon="phone"
                      className="card-icon m-0 h-8  w-8 p-0 text-primary"
                    />
                  </div>

                  <div>
                    <h4 className="text-white">Call Us</h4>
                    <p className="text-gray-500">(+62)81 234 998 112</p>
                  </div>
                </div>
              </div> */}
              <div className="col-12 lg:col-6">
                <div className="card mb-4 flex">
                  <div
                    className="mr-5 flex h-16 w-16 items-center justify-center rounded-xl p-3"
                    style={{ background: "#10233B" }}
                  >
                    <FeatherIcon
                      icon="mail"
                      className="card-icon m-0 h-8  w-8 p-0 text-primary"
                    />
                  </div>

                  <div>
                    <h4 className="text-white">Email Address</h4>
                    <p className="text-gray-500">info@securesector.uz</p>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9410415362195!2d69.26120797598983!3d41.33189539943541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ec64d4dbd%3A0x6a26177af9d218c3!2sC-Space%20Labzak!5e0!3m2!1sru!2s!4v1684857904546!5m2!1sru!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="animate lg:col-6">
            <form
              // method="POST"
              ref={form}
              onSubmit={sendEmail}
              // action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea w-full"
                  rows="6"
                />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
          {/* <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9410415362195!2d69.26120797598983!3d41.33189539943541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ec64d4dbd%3A0x6a26177af9d218c3!2sC-Space%20Labzak!5e0!3m2!1sru!2s!4v1684857904546!5m2!1sru!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
