const TODOS = {
  1: {
    id: 1,
    title: "Sleep",
    description: "Sleep for 12 hours",
    createdAt: Date.now(),
    type: "saved"
  },
  2: {
    id: 2,
    title: "Eat",
    description: "Eat for 12 hours",
    createdAt: Date.now(),
    type: "saved"
  },
};

let id = 3;

const fetchTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TODOS);
    }, 1000);
  });
};

const createUnsavedTodo = (title, description, createdAt) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const unsavedTodo = {
        id: id++,
        title,
        description,
        createdAt,
      };
      resolve(unsavedTodo);
    }, 1000);
  });
};

const saveTodo = (unsavedTodo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      TODOS[unsavedTodo.id] = unsavedTodo;
      resolve(TODOS[unsavedTodo.id]);
    }, 1000);
  });
};

const updateTodo = (id, title, description) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedTodo = TODOS[id];
      updatedTodo.title = title;
      updatedTodo.description = description;
      resolve(updatedTodo);
    }, 1000);
  });
};

export { fetchTodos, createUnsavedTodo, saveTodo, updateTodo };
