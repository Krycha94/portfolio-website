import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import MobileNav from "./MobileNav";

describe("<MobileNav />", () => {
	it("renders correctly", () => {
		const closeHandler = vi.fn();
		render(<MobileNav onClose={closeHandler} isMenuOpen={false} />);

		const linkEl = screen.getAllByRole("link");

		expect(linkEl).toHaveLength(5);
	});

	it("aside element has visible class when passing true in props", () => {
		const closeHandler = vi.fn();
		render(<MobileNav onClose={closeHandler} isMenuOpen={true} />);

		const asideEl = screen.getByRole("complementary");

		expect(asideEl).toHaveClass("_visible_d28df4");
	});

	it("aside element has not visible class when passing false in props", () => {
		const closeHandler = vi.fn();
		render(<MobileNav onClose={closeHandler} isMenuOpen={false} />);

		const asideEl = screen.getByRole("complementary");

		expect(asideEl).not.toHaveClass("_visible_d28df4");
	});
});
