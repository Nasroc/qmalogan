import belts from "../belts";
import { FormContent } from "./temps/formContent";
export function Forms1() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 1);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = null;
    const prevBelt = belts.find(belt => belt.id === 2); // Assuming the previous belt has id 3
    const nextFormLink = "/"; // Replace with the actual link"; 
    const prevFormLink = "/resources/info/forms/2"; // Replace with the actual link

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
