import { AboutUs } from "./aboutUs";
import { FAQ } from "./FAQ";

export function Dashboard() {
  return (
    <div className="custom-bg custom-dark">
      <AboutUs />
      <FAQ />
    </div>
  );
}