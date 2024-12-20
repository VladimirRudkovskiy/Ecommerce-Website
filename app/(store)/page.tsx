import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
	const products = await getAllProducts();
	const categories = await getAllCategories();

	// console.log(
	// 	crypto.randomUUID().slice(0, 5) +
	// 	`>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
	// );

  return (
    <div>
      <BlackFridayBanner />

			<div className="flex flex-col items-center justify-top min-h-screen bg-gray-100p-4">
				<ProductsView products = {products} categories={categories}/>
			</div>
    </div>
  );
}
