export default function Repositories({}) {
  return (
    <div>
      {[].map(r => {
        return <div>{r.name}</div>;
      })}
    </div>
  );
}
