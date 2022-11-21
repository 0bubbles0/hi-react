import { NavLink } from "react-router-dom"

import { FEATURES } from "common/constants/features"

const NAV_FEATURES = [FEATURES.home, FEATURES.feedback]

export function TopBar(): JSX.Element {
  return (
    <div className="w-full p-6 sticky top-0 z-50 bg-amber-300">
      <nav className="flex gap-8">
        <img src="" alt="Logo" />
        <ul className="flex gap-8">
          {NAV_FEATURES.map(({ title, url }) => (
            <li>
              <NavLink to={url}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
