import config from "@config/config.json";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      {/* <Banner title={title} /> */}
      <div className="container">
        <div className="section row  justify-center">
          <div className="animate lg:col-6">
            <div className="mb-10">
                    <h5 class="text-primary mb-5">
                      Contact Us
                    </h5>

                    <h3 class="text-white mb-5">
                      Get In Touch
                    </h3>

                  <div class="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam, quis nostrud exercitation{" "}
                  </div>
            </div>
            <div className="mb-10 row">
              <div className="col-12 lg:col-6">
                <div className="card flex mb-4">
                  <div className="p-3 rounded-xl w-16 h-16 flex items-center mr-5 justify-center" style={{background:"#10233B"}} >
                  <FeatherIcon
                    icon="home"
                    className="card-icon w-8 h-8  m-0 p-0 text-primary"
                  />
                  </div>

                  <div>
                    <h4 className="text-white">Ubud</h4>
                    <p className="text-gray-500">Jl. Raya Ubud No.88, Bali - 80571</p>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="card flex mb-4">
                  <div className="p-3 rounded-xl w-16 h-16 flex items-center mr-5 justify-center" style={{background:"#10233B"}} >
                  <FeatherIcon
                    icon="home"
                    className="card-icon w-8 h-8  m-0 p-0 text-primary"
                  />
                  </div>

                  <div>
                    <h4 className="text-white">Denpasar</h4>
                    <p className="text-gray-500">Jl. Niti Mandala, Renon, Bali – 80225</p>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="card flex mb-4">
                  <div className="p-3 rounded-xl w-16 h-16 flex items-center mr-5 justify-center" style={{background:"#10233B"}} >
                  <FeatherIcon
                    icon="phone"
                    className="card-icon w-8 h-8  m-0 p-0 text-primary"
                  />
                  </div>

                  <div>
                    <h4 className="text-white">Call Us</h4>
                    <p className="text-gray-500">(+62)81 234 998 112</p>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="card flex mb-4">
                  <div className="p-3 rounded-xl w-16 h-16 flex items-center mr-5 justify-center" style={{background:"#10233B"}} >
                  <FeatherIcon
                    icon="mail"
                    className="card-icon w-8 h-8  m-0 p-0 text-primary"
                  />
                  </div>

                  <div>
                    <h4 className="text-white">Email Address</h4>
                    <p className="text-gray-500">support@domain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate lg:col-6">
            <form
              method="POST"
              action={config.params.contact_form_action}
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
                <textarea className="form-textarea w-full" rows="6" />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95914.39841324482!2d69.15485812161273!3d41.301794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5aaf115b69%3A0x2fdc39f07f9f6c8e!2zSVQt0L_QsNGA0Log0LjQvdC90L7QstCw0YbQuNC5INCyINC60LjQsdC10YDQvdC10YLQuNC60LU!5e0!3m2!1sru!2s!4v1683883424327!5m2!1sru!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
