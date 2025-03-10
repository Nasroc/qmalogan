import belts from "../belts";
import { FormContent } from "./temps/formContent";


export function Forms10() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 10);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 9);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
      const prevBelt = belts.find(belt => belt.id === 11);
        const nextFormLink = "/resources/info/forms/9";
        const prevFormLink = "/resources/info/forms/11";
    
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
