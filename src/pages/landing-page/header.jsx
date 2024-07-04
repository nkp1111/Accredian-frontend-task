import GeneralPadding from "../../components/general-padding";

export default function Header() {
  return (
    <header className="w-full py-4 bg-primary-content/50">
      <GeneralPadding>
        <div className="flex items-center justify-between gap-4">
          {/* logo and course dropdown */}
          <div className="flex gap-4 items-center">
            <p>logo</p>
            <p>course dropdown</p>
          </div>
          {/* nav and sign sign out button  */}
          <div className="flex gap-4 items-center">
            <nav>
              navitems
            </nav>
            <div className="flex gap-4 items-center">
              <button className="btn btn-ghost">Login</button>
              <button className="btn btn-primary">Try for free</button>
            </div>
          </div>
        </div>
      </GeneralPadding>
    </header>
  )
}
