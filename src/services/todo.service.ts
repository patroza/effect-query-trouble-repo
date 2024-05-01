import { Context, Effect, Ref, pipe, Option, Array, Runtime } from "effect";
import { Todo } from "@/models/todo.model";
import { TodoCtx } from "@/contexts/todo.ctx";

const todos = Effect.runSync(
  Ref.make([
    new Todo({ id: crypto.randomUUID(), title: "Run a bit", completed: false }),
    new Todo({
      id: crypto.randomUUID(),
      title: "Code in Rust",
      completed: false,
    }),
    new Todo({ id: crypto.randomUUID(), title: "Hate JS", completed: true }),
    new Todo({ id: crypto.randomUUID(), title: "Hate JS", completed: true }),
  ] as const as Todo[])
);

export const getAll = (): Effect.Effect<Todo[], never, never> => {
  return Ref.get(todos);
};

export const getById = (id: string): Effect.Effect<Option.Option<Todo>> => {
  return pipe(
    Ref.get(todos),
    Effect.map((todos) => Array.findFirst(todos, (todo) => todo.id === id))
  );
};

export const deleteById = (id: string): Effect.Effect<void> => {
  return Ref.update(todos, (todos) => todos.filter((todo) => todo.id !== id));
};

export const TodoService = pipe(
  Context.empty(),
  Context.add(TodoCtx, { getAll, getById, deleteById })
);

export const TodoRuntime = pipe(
  Runtime.defaultRuntime,
  Runtime.updateContext(() => TodoService)
);
