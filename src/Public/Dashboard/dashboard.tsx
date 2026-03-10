import { AboutUs } from "./aboutUs";
import { ContactUs } from "./contactUs";
import { FAQ } from "./FAQ";

export function Dashboard() {
  return (
    <div className="custom-bg-light dark:custom-bg custom-dark transition-colors duration-300" style= {{minHeight: 'calc(100vh - 5rem)'}}>
      <AboutUs />
      <FAQ />
      <ContactUs />
    </div>
  );
}