import { groq } from "next-sanity";


export const allChefs = groq`*[_type=="chef"]`;
export const four = groq`*[_type=="chef"][0..3]`;

