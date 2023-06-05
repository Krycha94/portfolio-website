import { render, screen } from "@testing-library/react";

import Stack from "./Stack";

describe("<Stack />", () => {
	it("renders correctly", () => {
		render(<Stack />);

		const li = screen.getAllByRole("listitem");

		expect(li).toHaveLength(8);
	});
});
