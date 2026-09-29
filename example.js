function calculateTotal(price, quantity) {
  return price * quantity;
}

function searchTodos(todos, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return todos;
  }

  return todos.filter(todo =>
    todo.title.toLowerCase().includes(normalizedQuery)
  );
}

module.exports = {
  calculateTotal,
  searchTodos
};
