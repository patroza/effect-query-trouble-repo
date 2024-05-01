import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { pipe, Effect, Runtime, Console } from "effect";
import * as Todos from "@/services/todo.service";
import { TodoCtx } from "@/contexts/todo.ctx";

export default function GetAllTodos() {
  const queryClient = useQueryClient();
  // get todos
  const { data: todos, isLoading } = useQuery({
    queryKey: ["Todos", "Get"],
    queryFn: async () => {
      console.log("fetching fotos....")
      return await pipe(
        TodoCtx,
        Effect.flatMap((ctx) => ctx.getAll()),
        Effect.tap((todos) => Console.log(todos)),
        Runtime.runPromise(Todos.TodoRuntime)
      );
    },
  });

  const todoDeleteMutation = useMutation({
    mutationKey: ["Todos", "Delete"],
    mutationFn: async (id: string) => {
      return await pipe(
        TodoCtx,
        Effect.tap((ctx) => ctx.deleteById(id)),
        Effect.tap((ctx) =>
          pipe(
            ctx.getAll(),
            Effect.tap((todos) => Console.log(todos))
          )
        ),
        Runtime.runPromise(Todos.TodoRuntime)
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['Todos', 'Get'] }),
  });

  const onTodoToggle = (id: string) => {
    console.log(`Toggling todo with id ${id}...`);
  };

  return isLoading ? (
    <div>Loading todos...</div>
  ) : (
    <ul className="flex flex-row flex-grow flex-wrap align-center gap-1">
      {todos!.map((todo) => (
        <li
          key={"todo-" + todo.id}
          className={
            "card card-bordered cursor-pointer hover:bg-accent-content transition-colors duration-700 " +
            (todo.completed
              ? "bg-success text-success-content hover:text-success"
              : "bg-error text-error-content hover:text-error")
          }
          onClick={() => onTodoToggle(todo.id)}
        >
          <div className="card-body">
            <h1 className="card-title">{todo.title}</h1>
            <h2>Id: {todo.id}</h2>
            <div className="card-actions justify-end">
              <button
                className="btn btn-warning"
                onClick={() => todoDeleteMutation.mutate(todo.id)}
              >
                {"✖"}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
