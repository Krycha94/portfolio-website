import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("<Header />", () => {
	it("renders correctly", () => {
		render(<Header />);
		screen.debug();

		const headerEl = screen.getByRole("banner");

		expect(headerEl).toBeInTheDocument();
	});
});
