import { Image } from "sanity";


export interface Chef {
    _id : string;
    name:string;
    _type:"document";
    position:string;
    experience:number; 
    specialty:string;
    image? : {
        asset:{
     _ref:string;
     _type:"image";
        }
    }
    description:string;
    available:boolean;
}

export interface food {
    food : "document";
    name:string;
    category:string;
    price:number;
    originalPrice:number; 
    tags:"array";
    image? : {
        asset:{
     _ref:string;
     _type:"image";
        }
    }
    description:"text";
    available:boolean;
}