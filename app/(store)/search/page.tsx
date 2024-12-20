import React from 'react'

async function SearchPage({
	searchParams,
}: {
	searchParams: {
		query: string;
	};
}) {
	const { query } = await searchParams;
	const products = await searchProductsByName(query);

	return (
		<div>SearchPage for {query}</div>
	)
}

export default SearchPage