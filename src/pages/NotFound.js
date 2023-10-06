import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found !</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        sapiente beatae quas laborum, iure provident similique repellat quidem
        facilis reprehenderit omnis? Sapiente eos nihil quas non autem amet
        dolore voluptatum?
      </p>

      <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  );
}
