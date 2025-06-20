import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import customer from '../../../assets/customer-top.png'
const reviews =[
  {
    "id": "5f47ac10b4f1c03e8c123456",
    "user_email": "john.doe@example.com",
    "userName": "John Doe",
    "delivery_email": "delivery1@example.com",
    "ratings": 4.5,
    "review": "Smooth delivery and polite staff.",
    "parcel_id": "5f47ac10b4f1c03e8c654321",
    "pick_up_email": "pickup1@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/10.jpg",
    "date": "2024-05-08T14:30:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c234567",
    "user_email": "jane.smith@example.com",
    "userName": "Jane Smith",
    "delivery_email": "delivery2@example.com",
    "ratings": 3.8,
    "review": "Took a bit longer than expected, but okay overall.",
    "parcel_id": "5f47ac10b4f1c03e8c765432",
    "pick_up_email": "pickup2@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/25.jpg",
    "date": "2024-06-10T10:15:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c345678",
    "user_email": "alex.brown@example.com",
    "userName": "Alex Brown",
    "delivery_email": "delivery3@example.com",
    "ratings": 5.0,
    "review": "Excellent service! Fast and secure.",
    "parcel_id": "5f47ac10b4f1c03e8c876543",
    "pick_up_email": "pickup3@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/34.jpg",
    "date": "2024-07-01T08:50:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c456789",
    "user_email": "lisa.white@example.com",
    "userName": "Lisa White",
    "delivery_email": "delivery4@example.com",
    "ratings": 4.2,
    "review": "Very responsive and professional.",
    "parcel_id": "5f47ac10b4f1c03e8c987654",
    "pick_up_email": "pickup4@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/12.jpg",
    "date": "2024-07-15T09:10:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c567890",
    "user_email": "david.lee@example.com",
    "userName": "David Lee",
    "delivery_email": "delivery5@example.com",
    "ratings": 2.9,
    "review": "Late delivery and no updates. Disappointed.",
    "parcel_id": "5f47ac10b4f1c03e8c098765",
    "pick_up_email": "pickup5@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/19.jpg",
    "date": "2024-08-02T16:45:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c678901",
    "user_email": "nina.khan@example.com",
    "userName": "Nina Khan",
    "delivery_email": "delivery6@example.com",
    "ratings": 4.9,
    "review": "Superb experience! Highly recommended.",
    "parcel_id": "5f47ac10b4f1c03e8c109876",
    "pick_up_email": "pickup6@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/8.jpg",
    "date": "2024-08-10T12:00:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c789012",
    "user_email": "michael.jordan@example.com",
    "userName": "Michael Jordan",
    "delivery_email": "delivery7@example.com",
    "ratings": 3.3,
    "review": "Decent service but packaging could be better.",
    "parcel_id": "5f47ac10b4f1c03e8c210987",
    "pick_up_email": "pickup7@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/22.jpg",
    "date": "2024-08-14T18:20:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c890123",
    "user_email": "emma.watson@example.com",
    "userName": "Emma Watson",
    "delivery_email": "delivery8@example.com",
    "ratings": 4.7,
    "review": "Fast, safe, and friendly delivery service.",
    "parcel_id": "5f47ac10b4f1c03e8c321098",
    "pick_up_email": "pickup8@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/5.jpg",
    "date": "2024-08-20T07:30:00.000Z"
  }
]
 

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <>
      {[...Array(full)].map((_, i) => <FaStar key={`f-${i}`} className="text-yellow-400" />)}
      {half && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`e-${i}`} className="text-yellow-400" />)}
    </>
  );
};

const Customers = () => {
    return (
        <div className='mt-6'>
            <div className="flex justify-center items-center">
<img src={customer} alt="" />
            </div>
            <h1 className='text-center text-[2.5rem] font-bold'>What our customers are sayings</h1>
            <p className='text-center text-[1rem] mt-3'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>

            <div className="mt-10 mb-10">
                <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 "
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div  className="container shadow-2xl  flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 hover:shadow-3xl transition">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={item.user_photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{item.userName}</h4>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-700">
			<span className="text-xl flex font-bold">{renderStars(item.ratings)}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-600">
		<p>{item.review}</p>
    <p>{item.date}</p>
	</div>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
            </div>
        </div>
    );
};

export default Customers;