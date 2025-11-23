import { useTheme } from '../context/ThemeContext';
import { CLICK_SOUND } from '../utils/sounds';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const playClickSound = () => {
        try {
            const audio = new Audio(CLICK_SOUND);
            audio.volume = 0.35;
            audio.play().catch((e) => {
                // Ignore auto-play errors or empty source errors
                console.debug('Audio play failed', e);
            });
        } catch (error) {
            console.error('Error playing sound', error);
        }
    };

    const handleToggle = () => {
        playClickSound();
        toggleTheme();
    };

    return (
        <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color] outline-none select-none focus-visible:border-primary-500 focus-visible:ring-[3px] focus-visible:ring-primary-500/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-secondary-200 dark:hover:bg-secondary-700 hover:text-secondary-900 dark:hover:text-white size-8"
            onClick={handleToggle}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
                <Moon className="w-5 h-5 text-secondary-700" />
            )}
        </button>
    );
};
