import belts from "../belts";
import { FormContent } from "./temps/formContent";
export function Forms0() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 0);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = null;
    const prevBelt = null; // Assuming the previous belt has id 3
    const nextFormLink = "/"; // Replace with the actual link"; 
    const prevFormLink = "/"; // Replace with the actual link

    return (
        <FormContent 
            beltData={beltData} 
            nextBelt={nextBelt} 
            prevBelt={prevBelt} 
            nextFormLink={nextFormLink} 
            prevFormLink={prevFormLink} 
        />
    );
}
