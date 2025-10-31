import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🥟</span>
            <span className="text-2xl font-bold">Домашние пельмени</span>
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>

          <nav className="hidden lg:flex gap-6 items-center">
            <Link to="/" className="hover:text-accent transition-colors text-lg">
              Главная
            </Link>
            <Link to="/products" className="hover:text-accent transition-colors text-lg">
              Продукция
            </Link>
            <Link to="/delivery" className="hover:text-accent transition-colors text-lg">
              Доставка
            </Link>
            <Link to="/reviews" className="hover:text-accent transition-colors text-lg">
              Отзывы
            </Link>
            <Link to="/contacts" className="hover:text-accent transition-colors text-lg">
              Контакты
            </Link>
            <Button variant="secondary" size="lg" className="ml-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-3 pb-4">
            <Link
              to="/"
              className="py-2 hover:text-accent transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/products"
              className="py-2 hover:text-accent transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link
              to="/delivery"
              className="py-2 hover:text-accent transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Доставка
            </Link>
            <Link
              to="/reviews"
              className="py-2 hover:text-accent transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link
              to="/contacts"
              className="py-2 hover:text-accent transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button variant="secondary" size="lg" className="w-full mt-2">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
