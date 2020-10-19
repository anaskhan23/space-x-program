import React from "react";
import Filter from "./../filter";

import { shallow } from "enzyme";

test("render the initial state value", () => {
	const wrapper = shallow(<Filter />);
	expect(wrapper.find("#filter").text()).toBe(
		"FiltersLaunch Year<Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button /><Button />Successful Launch<Button /><Button />Successful Landing<Button /><Button />"
	);
});
