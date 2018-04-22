import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
	const action = addExpense(expenses[1]);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: expenses[1]
	});
});

test("should add expense to database and store", (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: "test",
		amount: 100,
		note: "testing",
		createdAt: 10
	}
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		
		return database.ref(`expenses/${actions[0].expense.id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: "",
		amount: 0,
		note: "",
		createdAt: 0
	}
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		
		return database.ref(`expenses/${actions[0].expense.id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});



// test("should setup add expense actions object with default values", () => {
// 	const action = addExpense();
// 	expect(action).toEqual({
// 		type: "ADD_EXPENSE",
// 		expense: {
// 			description: "",
// 			amount: 0,
// 			createdAt: 0,
// 			note: "",
// 			id: expect.any(String)
// 		}
// 	});
// });