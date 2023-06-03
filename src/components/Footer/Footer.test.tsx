import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
	it("renders correctly", () => {
		render(<Footer />);

		const textEl = screen.getByText(/krystian kowalski/i);

		expect(textEl).toBeInTheDocument();
	});
});
