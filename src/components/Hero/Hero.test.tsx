import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Hero from "./Hero";

describe("<Hero />", () => {
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
		render(<Hero />);

		const headingEl = screen.getByRole("heading", {
			level: 1,
			name: /krystian/i,
		});

		expect(headingEl).toBeInTheDocument();
	});
});
