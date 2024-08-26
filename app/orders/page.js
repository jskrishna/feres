import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

const OrdersPage = () => {
  const restaurants = [
    {
      name: 'Beef Burger',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
    {
      name: 'Fresh orange juice',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
    {
      name: 'Fresh mango juice',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
    {
      name: 'Beef Burger',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
    {
      name: 'Fresh orange juice',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
    {
      name: 'Fresh mango juice',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire..',
      deliveryFee: 'ETB 150',
      image: '/burger.png',
    },
  ];

  return (
    <MainLayout>
      <div className="p-4 bg-white fixed w-full z-10">
        <div className="flex justify-between items-center mb-6">
          <button className="text-green-600 rounded-[13px] w-[44px] h-[44px] flex items-center justify-center border-[1px] border-solid border-[#EEEEEE]">
            <img
              src="/arrow-left.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-8'
            />
          </button>
          <div className="text-center">
            <h2 className="text-[20px] font-bold text-[#2F2F3F] flex items-center gap-2">Select menu</h2>
          </div>

          <div className='flex justify-between items-center'>
            <h3 className="text-[18px] font-[500] text-[#0AB247]">Close</h3> {/* Set text color */}
          </div>
        </div>

        <div className="">
          <div className='flex justify-between items-center mb-4'>
            <h3 className="text-[18px] font-[500] text-[#2F2F3F]">Categories</h3> {/* Set text color */}
            <Link href="#" className='text-[#979797] text-[16px] font-[500]'>View all</Link>
          </div>
          <div>
            <div className="flex items-center gap-x-[18px] category">
              <div>
                <Link
                  href="#"
                  className="py-3 px-6 flex rounded-[13px] bg-[#0AB247] border border-[#EEEEEE] text-white text-[18px] font-normal normal-link active-link"
                >
                  All
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="py-3 px-6 rounded-[13px] border border-[#EEEEEE] text-[#AEAEAE] text-[18px] font-normal normal-link"
                >
                  Trending meals
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="py-3 px-6 rounded-[13px] border border-[#EEEEEE] text-[#AEAEAE] text-[18px] font-normal normal-link"
                >
                  Sandwiches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4 space-y-6 mt-44 bg-[#F8F8F8]'>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className="text-[18px] font-[500] text-[#2F2F3F]">All menu</h3> {/* Set text color */}
          </div>
          <div className="space-y-4">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-[13px] flex p-3 items-center">
                <img src={restaurant.image} alt={restaurant.name} className="h-24 object-cover rounded-lg" />
                <div className="ml-2 space-y-2 w-full">
                  <h4 className="text-[16px] font-[500] text-[#2F2F3F]">{restaurant.name}</h4>
                  <p className="text-[12px] text-[#2F2F3F] text-opacity-40">{restaurant.description}</p>
                  <div className="text-[16px] font-[400] text-[#9E9E9E]"><span className="line-through"> {restaurant.deliveryFee}</span> <b className="text-[#0AB247]">{restaurant.deliveryFee}</b></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center border-t-[1px] border-[#ECECEC] border-solid">
        <Link href="/" passHref className='flex-1 py-4'>
          <div className="text-center cursor-pointer">
            <img
              src="/home.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-8 m-auto'
            />
            <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Home</p>
          </div>
        </Link>
        <Link href="/orders" passHref className='flex-1 py-4'>
          <div className="text-center cursor-pointer">
            <img
              src="/invoice-02.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-8 m-auto'
            />
            <p className="mt-[8px] text-[12px] font-[500] text-[#0AB247]">Orders</p>
          </div>
        </Link>
        <Link href="/messages" passHref className='flex-1 py-4'>
          <div className="text-center cursor-pointer">
            <img
              src="/message-02.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-8 m-auto'
            />
            <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Messages</p>
          </div>
        </Link>
        <Link href="/profile" passHref className='flex-1 py-4'>
          <div className="text-center cursor-pointer">
            <img
              src="/user.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-8 m-auto'
            />
            <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Profile</p>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default OrdersPage;