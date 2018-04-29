import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "test uid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt })=> {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

// Remove Expense
test("should setup remove expense actions object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({ 
		type: "REMOVE_EXPENSE",
		id: "123abc"
	});
});

test("should remove expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[2].id;
	store.dispatch(startRemoveExpense({ id })).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "REMOVE_EXPENSE",
			id
		});
		return database.ref(`users/${uid}/expenses/${id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
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

test("should edit expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[1].id;
	const updates = ({ amount: 450 });
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "EDIT_EXPENSE",
			id,
			updates
		});
		return database.ref(`users/${uid}/expenses/${id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val().amount).toBe(updates.amount);
		done();
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
	const store = createMockStore(defaultAuthState);
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
		
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore(defaultAuthState);
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
		
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test("should setup set expenses action object with data", () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses
	});
});

test("should fetch the expenses from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses
		});
		done();
	});
});