import { motion } from 'framer-motion';

function TabMenu({ categories, activeCategory, onSelect }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex overflow-x-auto p-4 gap-4 no-scrollbar">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`flex flex-col items-center min-w-[4rem] relative ${
              activeCategory === category.id ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => onSelect(category.id)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs">{category.name}</span>
            {activeCategory === category.id && (
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                layoutId="activeTab"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default TabMenu;