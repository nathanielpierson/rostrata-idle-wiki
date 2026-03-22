import { NavLink, Outlet } from 'react-router-dom'
import { getWikiNavItems } from './wikiContent'
import './wiki.css'

export default function WikiLayout() {
  const nav = getWikiNavItems()

  return (
    <div className="wiki-shell">
      <header className="wiki-header">
        <NavLink to="/" className="wiki-brand">
          Rostrata Idle Wiki
        </NavLink>
      </header>

      <div className="wiki-body">
        <aside className="wiki-sidebar" aria-label="Wiki navigation">
          <nav>
            <p className="wiki-sidebar__title">Pages</p>
            <ul className="wiki-sidebar__list">
              {nav.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      isActive ? 'wiki-sidebar__link wiki-sidebar__link--active' : 'wiki-sidebar__link'
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="wiki-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
