import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// Remove Expense
test("should setup remove expense actions object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({ 
		type: "REMOVE_EXPENSE",
		id: "123abc"
	});
});

// Edit Expense
test("should setup edit expense actions object", () => {
	const action = editExpense("id", { amount: "new amount value" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "id",
		updates: {
			amount: 'new amount value'
		}
	});
});

// Add Expense
test("should setup add expense actions object with provided values", () => {
	const expenseData = {
		description: "Car",
		amount: 100,
		createdAt: 5000,
		note: "test"
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test("should setup add expense actions object with default values", () => {
	const action = addExpense();
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			description: "",
			amount: 0,
			createdAt: 0,
			note: "",
			id: expect.any(String)
		}
	});
});