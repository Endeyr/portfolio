import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

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
			className={cn(
				'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden'
			)}
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
