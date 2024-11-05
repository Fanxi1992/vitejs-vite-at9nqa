import { useState } from 'react';
import Header from './components/Header';
import CardCarousel from './components/CardCarousel';
import TabMenu from './components/TabMenu';

const programs = [
  { id: 1, title: 'Strength Training', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80' },
  { id: 2, title: 'Yoga Flow', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80' },
  { id: 3, title: 'HIIT Workout', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80' },
  { id: 4, title: 'Cardio Blast', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&q=80' },
  { id: 5, title: 'Pilates', image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=500&q=80' },
];

const categories = [
  { id: 1, name: 'All', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&q=80' },
  { id: 2, name: 'Strength', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=100&q=80' },
  { id: 3, name: 'Cardio', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=100&q=80' },
  { id: 4, name: 'Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&q=80' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <main className="pt-16 pb-20">
        <CardCarousel items={programs} />
        <TabMenu 
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </main>
    </div>
  );
}

export default App;