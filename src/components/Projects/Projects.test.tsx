import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Projects from "./Projects";

describe("<Projects />", () => {
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
		render(<Projects />);

		const headingEl = screen.getByRole("heading", {
			level: 3,
			name: /my projects/i,
		});

		expect(headingEl).toBeInTheDocument();
	});
});
