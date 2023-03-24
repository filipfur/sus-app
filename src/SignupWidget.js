//import { useEffect, useState } from "react"
import './SignupWidget.css'

// Create a new form that will be used to submit data to Google Forms.

export function SignupWidget()
{

    /*const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        "entry.2098405450": "",
        "entry.1363189276": "", 
        "entry.1331313201": "",
        "entry.1765914356": "",
        "entry.812086521": ""
    });*/
  

    /*async function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
    
        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSewQli5dBi0g1S8Ve-Bz6Xr7XP4W_27mBoVJwmftpsWTkFTVQ/formResponse?entry.2098405450=${formData["entry.2098405450"]}&entry.1363189276=${formData["entry.1363189276"]}&entry.1331313201=${formData["entry.1331313201"]}&entry.1765914356=${formData["entry.1765914356"]}&entry.812086521=${formData["entry.812086521"]}`;
    
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
    }*/

    /*
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSc_bNC0OfqnGf7MDV_-7ORzSmL4og4yBtzFoK1r82-kD69DGA/formResponse" method="POST" target="_self">
                <input type="text" name="entry.2098405450" placeholder="Förnamn" />
                <input type="text" name="entry.1363189276" placeholder="Efternamn" />
                <input type="text" name="entry.1331313201" placeholder="Discord Alias" />
                <input type="text" name="entry.1765914356" placeholder="Personnummer" />
                <input type="text" name="entry.812086521" placeholder="Address (gata, postnummer, ort)" />
                <button type="submit" className="submit-form">Submit</button>
            </form>
    */

    return (<div className="widget">
        <div className="body">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc_bNC0OfqnGf7MDV_-7ORzSmL4og4yBtzFoK1r82-kD69DGA/viewform?embedded=true" title="signup-gform" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Läser in …</iframe>
        </div>
    </div>)
}