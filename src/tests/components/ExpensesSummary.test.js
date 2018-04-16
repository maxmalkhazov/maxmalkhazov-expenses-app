import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correctly render ExpensesSummary with 1 expense", () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={125} />);
	expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with mutiple expenses", () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={500} />);
	expect(wrapper).toMatchSnapshot();
});