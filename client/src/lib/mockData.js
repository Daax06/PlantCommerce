import monsteraImg from '@assets/generated_images/Monstera_deliciosa_product_photo_f2dc90d8.png';
import succulentImg from '@assets/generated_images/Succulent_arrangement_product_photo_5291318f.png';
import pothosImg from '@assets/generated_images/Pothos_hanging_plant_photo_27a77628.png';
import fiddleLeafImg from '@assets/generated_images/Fiddle_leaf_fig_photo_16b38727.png';
import snakePlantImg from '@assets/generated_images/Snake_plant_product_photo_8a41faee.png';
import orchidImg from '@assets/generated_images/Orchid_flowering_plant_photo_8a79793f.png';

export const MOCK_PLANTS = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    category: 'Tropical',
    price: 4500,
    image: monsteraImg,
    description: 'Large split leaves create a dramatic statement in any room',
  },
  {
    id: '2',
    name: 'Echeveria Collection',
    category: 'Succulent',
    price: 2800,
    image: succulentImg,
    description: 'Beautiful rosette arrangement perfect for bright windowsills',
  },
  {
    id: '3',
    name: 'Golden Pothos',
    category: 'Hanging',
    price: 3200,
    image: pothosImg,
    description: 'Cascading vines with heart-shaped leaves, low maintenance',
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    category: 'Statement',
    price: 6800,
    image: fiddleLeafImg,
    description: 'Tall architectural beauty with dramatic foliage',
  },
  {
    id: '5',
    name: 'Snake Plant',
    category: 'Low-Light',
    price: 3500,
    image: snakePlantImg,
    description: 'Upright architectural form, thrives in low light conditions',
  },
  {
    id: '6',
    name: 'White Orchid',
    category: 'Flowering',
    price: 5200,
    image: orchidImg,
    description: 'Elegant blooms that bring sophistication to any space',
  },
];

export const CATEGORIES = ['Tropical', 'Succulent', 'Hanging', 'Statement', 'Low-Light', 'Flowering'];

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
