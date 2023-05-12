import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      {/* <Banner title={title} /> */}
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-6">
            <div class="">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-bc3970f elementor-widget elementor-widget-heading"
                  data-id="bc3970f"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div class="elementor-widget-container">
                    <h5 class="elementor-heading-title elementor-size-default">
                      Contact Us
                    </h5>{" "}
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-5373d7d elementor-widget elementor-widget-heading"
                  data-id="5373d7d"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">
                      Get In Touch
                    </h2>{" "}
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-ec249d2 elementor-widget elementor-widget-text-editor"
                  data-id="ec249d2"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div class="elementor-widget-container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam, quis nostrud exercitation{" "}
                  </div>
                </div>
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-633d4f9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="633d4f9"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-no">
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0799188"
                      data-id="0799188"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-19a22a1 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="19a22a1"
                          data-element_type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_733_1_645e137a531b4">
                              <div class="jkit-icon-box-wrapper hover-from-left">
                                <div class="icon-box icon-box-header elementor-animation-">
                                  <div class="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-home-line"
                                    ></i>
                                  </div>
                                </div>
                                <div class="icon-box icon-box-body">
                                  <h4 class="title">Ubud</h4>
                                  <p class="icon-box-description">
                                    Jl. Raya Ubud No.88, Bali - 80571
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9233252"
                      data-id="9233252"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-de0eeb6 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="de0eeb6"
                          data-element_type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_733_2_645e137a5d135">
                              <div class="jkit-icon-box-wrapper hover-from-left">
                                <div class="icon-box icon-box-header elementor-animation-">
                                  <div class="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-home-line"
                                    ></i>
                                  </div>
                                </div>
                                <div class="icon-box icon-box-body">
                                  <h4 class="title">Denpasar</h4>
                                  <p class="icon-box-description">
                                    Jl. Niti Mandala, Renon, Bali – 80225
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-8c8a770 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="8c8a770"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-no">
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cd45748"
                      data-id="cd45748"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-de70fd3 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="de70fd3"
                          data-element_type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_733_3_645e137a61d42">
                              <div class="jkit-icon-box-wrapper hover-from-left">
                                <div class="icon-box icon-box-header elementor-animation-">
                                  <div class="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-phone-call-line"
                                    ></i>
                                  </div>
                                </div>
                                <div class="icon-box icon-box-body">
                                  <h4 class="title">Call Us</h4>
                                  <p class="icon-box-description">
                                    (+62)81 234 998 112
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-09e36c3"
                      data-id="09e36c3"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-7fcc955 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="7fcc955"
                          data-element_type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_733_4_645e137a65f5a">
                              <div class="jkit-icon-box-wrapper hover-from-left">
                                <div class="icon-box icon-box-header elementor-animation-">
                                  <div class="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-envelope"
                                    ></i>
                                  </div>
                                </div>
                                <div class="icon-box icon-box-body">
                                  <h4 class="title">Email Address</h4>
                                  <p class="icon-box-description">
                                    support@domain.com
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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
