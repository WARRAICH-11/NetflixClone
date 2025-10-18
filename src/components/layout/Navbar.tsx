import { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onMyListClick: () => void;
  onCategoryClick: (category: string) => void;
  notificationCount?: number;
}

export function Navbar({ onSearchClick, onMyListClick, onCategoryClick, notificationCount = 0 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div 
            onClick={scrollToTop}
            className="text-[#e50914] tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
          >
            <svg
              viewBox="0 0 111 30"
              className="h-6 md:h-8 fill-current"
              aria-hidden="true"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,27.8432843 93.9057081,27.5891096 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5074221 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>

          <ul className="hidden md:flex items-center gap-6">
            <li 
              onClick={scrollToTop}
              className="text-white cursor-pointer hover:text-gray-300 transition-colors"
            >
              Home
            </li>
            <li 
              onClick={() => onCategoryClick('ai')}
              className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
            >
              AI & ML
            </li>
            <li 
              onClick={() => onCategoryClick('python')}
              className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
            >
              Python
            </li>
            <li 
              onClick={() => onCategoryClick('webdev')}
              className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
            >
              Web Dev
            </li>
            <li 
              onClick={onMyListClick}
              className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
            >
              My List
            </li>
          </ul>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-6">
          <button
            onClick={onSearchClick}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white hover:text-gray-300 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e50914] rounded-full text-[10px] flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-[#141414] border border-gray-700 rounded shadow-2xl">
                <div className="p-4">
                  <h3 className="text-white mb-3">Notifications</h3>
                  <div className="space-y-3">
                    <div className="text-gray-400 text-sm p-3 bg-[#2f2f2f] rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <p className="text-white mb-1">New Course Available</p>
                      <p>Advanced Machine Learning techniques added to your recommendations</p>
                    </div>
                    <div className="text-gray-400 text-sm p-3 bg-[#2f2f2f] rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <p className="text-white mb-1">Learning Milestone</p>
                      <p>You've completed 5 hours of Python tutorials!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              aria-label="User menu"
            >
              <div className="w-8 h-8 rounded bg-[#e50914] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-12 w-48 bg-[#141414] border border-gray-700 rounded shadow-2xl">
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-[#2f2f2f] transition-colors">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-[#2f2f2f] transition-colors">
                    Account Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-[#2f2f2f] transition-colors">
                    Learning Progress
                  </button>
                  <div className="border-t border-gray-700 my-2" />
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-[#2f2f2f] transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
