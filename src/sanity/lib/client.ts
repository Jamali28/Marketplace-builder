import { createClient } from 'next-sanity'
  

const projectId="pe7pu33j"
const dataset="production"
const apiVersion="2023-08-31"

export const client = createClient({
  projectId:"pe7pu33j",
  dataset:"production",
  apiVersion:"2023-08-31",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skjq6vvsvNz3PiWsdgohbGvUfR64ocHJKuQVwXuiKWqpXFhXcj3JZj4xF54z64XUK0zaqNdahVuL9VN8ziB0ZvgbBvFpFn2mxINpErN4EcrZPyvzFEYxUBK9jTcxmYJVkbGj7k3uIUsdvrlcWAEB31Rew3S1vjaJkE2M2b8uHRc6n09xl8X2",

})
