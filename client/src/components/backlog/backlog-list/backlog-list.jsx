export function BacklogList({ backlogItems }) {
  return (
    <ul>
      {backlogItems.map((backlogItem) => {
        return <li key={backlogItem.id}>{backlogItem.taskName}</li>;
      })}
      <li></li>
    </ul>
  );
}
