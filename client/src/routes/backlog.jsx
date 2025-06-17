import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/backlog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/backlog"!</div>
}
