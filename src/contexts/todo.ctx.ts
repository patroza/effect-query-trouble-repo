import { Context, Effect, Option } from "effect";
import type { Todo } from "@/models/todo.model";

export class TodoCtx extends Context.Tag("Todo.Ctx")<
  TodoCtx,
  {
    getAll: () => Effect.Effect<Todo[]>;
    getById: (id: string) => Effect.Effect<Option.Option<Todo>>;
    deleteById: (id: string) => Effect.Effect<void>;
  }
>() {}
