import Image from 'next/image';
import React from 'react';
import { createClient } from '@sanity/client';



const client = createClient({
    projectId:"pe7pu33j", 
    dataset: "production",
    useCdn: true,
    token: "skjq6vvsvNz3PiWsdgohbGvUfR64ocHJKuQVwXuiKWqpXFhXcj3JZj4xF54z64XUK0zaqNdahVuL9VN8ziB0ZvgbBvFpFn2mxINpErN4EcrZPyvzFEYxUBK9jTcxmYJVkbGj7k3uIUsdvrlcWAEB31Rew3S1vjaJkE2M2b8uHRc6n09xl8X2",
    apiVersion: '2023-08-31',
  });

 
 
    
 

      export default async function FetchFood() {
        const query = `*[_type == "food"]{
          _id,
          name,
          price,
          "originalPrice": originalPrice,
          rating,
          tags,
          "imageUrl": image.asset->url,
          description,
          available,
        }`;
    const foods = await client.fetch(query);
    return (
      <div>
        <h1>Foods</h1>
        <div>
          {foods.map((food: any) => (
            <div key={food._id}>
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <p>Price: ${food.price}</p>
              {food.originalPrice && (
                <p>
                  Original Price: <s>${food.originalPrice}</s>
                </p>
              )}
              <p>{food.available ? "Available" : "Out of Stock"}</p>
              <Image src={food.imageUrl} alt={food.name}  />
              {food.tags && (
                <p>Tags: {food.tags.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }