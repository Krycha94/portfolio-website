import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import About from "./About";

describe("<About />", () => {
	beforeEach(() => {
		// IntersectionObserver isn't available in test environment, we have to do this when we use framer-motion lib
		const mockIntersectionObserver = vi.fn();
		mockIntersectionObserver.mockReturnValue({
			observe: () => null,
			unobserve: () => null,
			disconnect: () => null,
		});
		window.IntersectionObserver = mockIntersectionObserver;
	});

	it("renders correctly", () => {
		render(<About />);

		const headingEl = screen.getByRole("heading", {
			level: 3,
			name: /about me/i,
		});
		const imgEl = screen.getByRole("img");

		expect(headingEl).toHaveTextContent("About Me");
		expect(imgEl).toHaveAttribute("src", "/src/assets/about-pic.jpg");
	});
});
