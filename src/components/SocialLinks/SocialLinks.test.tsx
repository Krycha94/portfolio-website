import { render, screen } from "@testing-library/react";
import { socialLinks } from "../../utils/constants";

import SocialLinks from "./SocialLinks";

describe("<SocialLinks />", () => {
	it("renders correctly", () => {
		render(<SocialLinks />);

		const linkEls = screen.getAllByRole("link");

		expect(linkEls).toHaveLength(socialLinks.length);
	});
});
