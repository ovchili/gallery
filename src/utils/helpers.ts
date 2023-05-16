export const range = (start: number, end: number): number[] => {
	if (start === end) return [start];
	return [start, ...range(start + 1, end)];
};

export const paginator = (
	start: number,
	end: number,
	page: number,
	count: number
) => {
	if (start === end) {
		const pages = range(start, end);
		return pages;
	}
	const midCount = Math.floor(count / 2);
	if (page - midCount < start) {
		const pages = range(page, page + 2 * midCount);
		return pages;
	} else if (page + midCount > end) {
		const pages = range(page - 2 * midCount, end);
		return pages;
	} else {
		const pages = range(page - midCount, page + midCount);
		return pages;
	}
};
