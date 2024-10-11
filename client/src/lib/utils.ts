import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getProductData(page:number,skip:number,limit:number,sortBy:string) {
  // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
  // &skip=0&limit=20&sortBy=price
const res = await fetch(`https://dummyjson.com/products?page=${page}&skip=${skip}&limit=${limit}&sortBy=${sortBy}`, {
  next: { revalidate: 60 },
});
return res.json();
}


export async function getSingleProductData(id:number | string) {
  // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
const res = await fetch(`https://dummyjson.com/products/${id}}`);
return res.json();
}
