import { googleFormsToJson } from "react-google-forms-hooks"

//const result = await googleFormsToJson('https://docs.google.com/forms/d/e/1FAIpQLSc_bNC0OfqnGf7MDV_-7ORzSmL4og4yBtzFoK1r82-kD69DGA/viewform');
const result = await googleFormsToJson('https://docs.google.com/forms/d/e/1FAIpQLSe5U3qvg8WHs4nkU-e6h2RlAD7fKoCkou6HO2w2-tXYIA_F8g/viewform');

console.log(result.fields);