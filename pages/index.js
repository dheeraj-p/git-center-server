export default function Home() {
  return (
    <h2>
      {process.env.SERVER_HOST}, {process.env.SERVER_PORT}
    </h2>
  );
}
