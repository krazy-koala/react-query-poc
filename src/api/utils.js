const getTodosByDate = (todos) => {
  const todosByDate = new Map();
  for (const todo of Object.values(todos)) {
    const date = new Date(todo.createdAt);
    const key = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (!todosByDate.has(key)) {
      todosByDate.set(key, []);
    }
    todosByDate.get(key).push(todo);
  }
  return todosByDate;
};

export { getTodosByDate };