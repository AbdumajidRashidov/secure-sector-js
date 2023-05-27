import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row flex items-center justify-between py-12">
          <div className=" md:col-6 lg:col-3">
            <Logo />
          </div>

          <div className=" mt-8 md:col-6 lg:col-5 lg:mt-0">
            <ul className="mt-5 flex items-center justify-between leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name} className="mx-2">
                  <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" mt-8 flex justify-end md:col-6 lg:col-4 lg:mt-0">
            <div className="mt-5">
              <Social source={social} className="social-icons" />
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className=" py-3 text-end">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
