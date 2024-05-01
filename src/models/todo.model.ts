import { pipe } from "effect";
import { Schema } from "@effect/schema";

export class Todo extends Schema.Class<Todo>("Todo.Schema")({
  id: Schema.UUID,
  title: pipe(Schema.String, Schema.length({ min: 5, max: 255 })),
  completed: Schema.Boolean,
}) {}
