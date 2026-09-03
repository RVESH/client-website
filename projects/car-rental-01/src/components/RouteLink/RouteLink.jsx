import { useRouter } from '../../app/router.jsx'

/**
 * Renders a real <a> tag (good for accessibility, SEO, and right-click /
 * open-in-new-tab) but intercepts plain left-clicks to route through the
 * app's client-side router instead of a full page reload.
 *
 * `end` mirrors the common router convention: when true, the link is only
 * "active" on an exact path match (used for Home so it doesn't stay
 * highlighted on every other route).
 */
function RouteLink({
  to,
  children,
  className = '',
  activeClassName = '',
  end = false,
  onClick,
  ...rest
}) {
  const { path, navigate } = useRouter()
  const isActive = end ? path === to : path === to || path.startsWith(`${to}/`)

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (e.defaultPrevented) return
    if (e.button !== 0) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }

  const classes = [className, isActive ? activeClassName : ''].filter(Boolean).join(' ')

  return (
    <a href={to} className={classes} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouteLink
