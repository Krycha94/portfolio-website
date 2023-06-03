import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import Contact from "./Contact";

describe("<Contact />", () => {
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
		render(<Contact />);

		const headingEl = screen.getByRole("heading", {
			level: 3,
			name: /get in touch/i,
		});

		expect(headingEl).toHaveTextContent("Get In Touch");
	});

	it("click link", async () => {
		const user = userEvent.setup();
		render(<Contact />);

		const spyLink = vi.spyOn(user, "click");
		const linkEl = screen.getByRole("link");
		await user.click(linkEl);

		expect(spyLink).toBeCalled();
	});
});
