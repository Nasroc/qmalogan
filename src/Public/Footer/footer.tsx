import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="/qma-logo.png"
              alt="Quantum Martial Arts Logo"
              className=" w-auto">
            </img>
          </div>

          {/* Footer Sections */}
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5">

            {/* Company Section */}
            <FooterSection
              title="Company"
              links={["dashboard", 
                // "Meet the Team"
            ]}
                linksNames={["About", 
                    // "Meet the Team"
                ]}
            />

            {/* Helpful Links Section */}
            <FooterSection
              title="Helpful Links"
              links={["#Contact", "dashboard"]}
              linksNames={["Contact", "FAQs"]}
            />

            {/* Legal Section */}
            {/* <FooterSection
              title="Legal"
              links={["Accessibility", "Terms & Conditions", "Privacy Policy", "Cookies"]}
            /> */}

            {/* Downloads Section */}
            <FooterSection
              title="Resources"
              links={["resources/info/Forms", "resources/info/Tenets", "resources/info/Pledges", "resources/info/Judo"]}
            linksNames={["Forms", "Tenets", "Pledges", "Judo"]}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Quantum Martial Arts. All rights reserved.
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-4 text-sm sm:mt-0">
              <FooterLink href="/terms" label="Terms & Conditions" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/cookies" label="Cookies" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterSectionProps = {
  title: string;
  linksNames: string[];
  links: string[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, linksNames, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
      {title}
    </h3>
    <ul className="mt-4 space-y-2">
      {links.map((link) => (
        <li key={link}>
          <Link
            to={`/${link.toLowerCase().replace(/ /g, "-")}`}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
          >
            {linksNames[links.indexOf(link)]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link
      to={href}
      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
