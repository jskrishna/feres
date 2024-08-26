// components/CategoryMenu.js
import React from 'react';

const CategoryMenu = () => {
  const menuItems = [
    { name: 'Beef Burger', description: 'beef patties, comb the ground beef, salt, pepper', oldPrice: 'ETB 170', price: 'ETB 140' },
    { name: 'Fresh orange juice', description: 'Orange juice, no added sugar', oldPrice: 'ETB 170', price: 'ETB 140' },
    { name: 'Ice cream', description: 'Creamy vanilla ice cream', oldPrice: 'ETB 170', price: 'ETB 140' },
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">All Menu</h3>
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg flex p-4">
            <img src="/menu-item.jpg" alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="ml-4 flex-1">
              <h4 className="text-md font-bold">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.description}</p>
              <div className="text-xs text-red-500 line-through">{item.oldPrice}</div>
              <div className="text-sm text-green-500">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
