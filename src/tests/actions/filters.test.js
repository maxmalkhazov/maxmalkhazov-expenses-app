import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";
import moment from "moment";

// Set Stard Date
test("should generate set start date actions object", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	});
});

// Set End Date
test("should generate set end date actions object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0)
	});
});

// Sort By Date
test("should generate sort by date actions object", () => {
	expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

// Sort By Amount
test("should generate sort by amount actions object", () => {
	expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT"});
});

// Set Text Filter
test("should generate set text filter object with provided values", () => {
	const action = setTextFilter("some text");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "some text"
	});
});

test("should generate set text filter object with default values", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: ""
	});
});