import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { projects } from "../../utils/constants";

import Project from "./Project";

describe("<Project />", () => {
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
		render(<Project {...projects[0]} />);

		const headingEl = screen.getByRole("heading", {
			level: 4,
			name: /krycha store/i,
		});
		const imgEls = screen.getAllByRole("img");

		expect(headingEl).toBeInTheDocument();
		expect(imgEls[0]).toHaveAttribute("src", "/src/assets/krycha-store.jpg");
		expect(imgEls).toHaveLength(7);
	});
});
