import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed to Cart")
  }
  const {cart} = useSelector((state) => state);
  return( 
    <div className={` flex flex-row p-0 md-p-3 justify-between border-b-2
    border-slate-500 mt-2 md:mx-5 `}>
      <div className='flex md:flex-col flex-row p-0 gap-5 items-center'>
        <div className='w-[30%]'>
          <img src={item.image} alt="ProductImage" />
        </div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <p className='text-base text-slate-700font-medium'>{item.description}</p>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-bold text-green-600'>${item.price}</p>
            <div className='bg-red-200 hover:bg-red-400 transition-transform duration-300
            p-3 m-3 group rounded-full cursor-pointer'
            onClick={removeFromCart}>
              <FcDeleteDatabase className='bg-red-700 rounded group-hover:bg-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CartItem;
