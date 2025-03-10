import belts from "../belts";
import { FormContent } from "./temps/formContent";
export function Forms2() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 2);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 1);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
    const prevBelt = belts.find(belt => belt.id === 3); // Assuming the previous belt has id 3
    const nextFormLink = "/resources/info/forms/1"; // Replace with the actual link"; 
    const prevFormLink = "/resources/info/forms/3"; // Replace with the actual link

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
