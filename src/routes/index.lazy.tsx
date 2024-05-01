import { createLazyFileRoute } from "@tanstack/react-router";
import Todo from "@/components/todo";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex flex-col gap-2 items-center justify-center align-center">
      <h3>Welcome Home!</h3>
      <Todo.GetAll />
    </div>
  );
}
