import belts from "../belts";
import { FormContent } from "./temps/formContent";
export function Forms9() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 9);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 8);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
      const prevBelt = belts.find(belt => belt.id === 10);
        const nextFormLink = "/resources/info/forms/8";
        const prevFormLink = "/resources/info/forms/10";
    
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
