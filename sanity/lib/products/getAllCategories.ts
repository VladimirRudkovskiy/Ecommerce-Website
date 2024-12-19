import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live"


export const getAllCategories = async () => {
	const ALL_CATEGORIES_QUERY = defineQuery(`
		*[_type == "category"] | order(name asc)
		`);

		try {
			// Use sanityfetch to send the query
			const categories = await sanityFetch({
				query: ALL_CATEGORIES_QUERY,
			});

			// Return the list of the categories or an empty array if none is found
			return categories.data || [];
		} catch (error) {
			console.error("Error fetching all categoriesL", error);
			return [];
		};
};