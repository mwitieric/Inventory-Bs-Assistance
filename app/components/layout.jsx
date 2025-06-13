import { Outlet, NavLink } from "react-router";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-green-100 p-4">
        <h1 className="text-xl font-bold mb-4">SpiceBiz</h1>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" end className="hover:font-semibold">
            Dashboard
          </NavLink>
          <NavLink to="/sales" className="hover:font-semibold">
            Sales
          </NavLink>
          <NavLink to="/expenses" className="hover:font-semibold">
            Expenses
          </NavLink>
          <NavLink to="/inventory" className="hover:font-semibold">
            Inventory
          </NavLink>
          <NavLink to="/restocks" className="hover:font-semibold">
            Restocks
          </NavLink>
          <NavLink to="/stock-buffer" className="hover:font-semibold">
            Stock Buffer
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
