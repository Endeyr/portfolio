import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') ?? 'light'
		document.documentElement.setAttribute('data-theme', storedTheme)
		setIsDarkMode(storedTheme === 'dark')
	}, [])

	const handleOnClick = () => {
		document.documentElement.setAttribute(
			'data-theme',
			!isDarkMode ? 'dark' : 'light'
		)
		localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light')
		setIsDarkMode(!isDarkMode)
	}

	return (
		<button
			type="button"
			data-theme-toggle
			aria-label="Change theme"
			onClick={handleOnClick}
		>
			{isDarkMode ? (
				<Sun className="h-6 w-6 text-yellow-300" />
			) : (
				<Moon className="h-6 w-6 text-blue-900" />
			)}
		</button>
	)
}
export default ThemeToggle
