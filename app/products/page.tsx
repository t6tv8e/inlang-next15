import * as m from "@/paraglide/messages";

export default function Products() {
  return (
    <div className="min-h-screen">
      <ul>
        <li>{m.apples()}</li>
        <li>{m.bananas()}</li>
        <li>{m.oranges()}</li>
      </ul>
    </div>
  );
}
