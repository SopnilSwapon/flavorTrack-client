import Marquee from 'react-fast-marquee';
import features1 from '../../../assets/swimmingpool.jpg'
import features2 from '../../../assets/beachView.jpg'
import features3 from '../../../assets/Bergview2419-707125.jpg'
import features5 from '../../../assets/musermview.jpg'
const ResFeatures = () => {
	return (
		<section className="py-8 dark:bg-gray-100 dark:text-gray-800">
			<div className="container px-4 mx-auto">
				<div className="max-w-2xl mx-auto mb-2 text-center">

					<h2 className="text-4xl font-bold lg:text-5xl">Features for Residential Customer</h2>
				</div>
					<p className='w-[80%] mx-auto text-center mb-4'>You can explore our all feature if you are a guest for a booking our any room.If you feel this hotel is not good for me then we can say first see our feature what we are providing then you can take decision what can you do,I hope you will book our room.Really there are so much modern system to services our guest.</p>
				<div className="flex flex-wrap items-stretch -mx-4">
					<Marquee className='grid grid-cols-3' speed={100}>

						<div className='flex gap-4 mr-3'>
							<div className="card w-96 bg-gray-300 shadow-xl">
								<div className="card-body">
									<h2 className="text-xl font-bold text-center">Swimming Pool</h2>
									<p>this is swimming pool,you can take batch in this pool full free.</p>
								</div>
								<figure><img src={features1} alt="Shoes" /></figure>
							</div>
							<div className="card w-96 bg-gray-300 shadow-xl">
								<div className="card-body">
									<h2 className="text-xl font-bold text-center">Mini Museum!</h2>
									<p>You can explore our mini museum by booking any room.</p>
								</div>
								<figure><img className='h-[70%] w-full mb-0' src={features5} alt="Shoes" /></figure>
							</div>
							<div className="card w-96 bg-gray-300 shadow-xl">
								<div className="card-body">
									<h2 className="text-xl font-bold text-center">Berg!</h2>
									<p>See berg from your room & take feel happy enjoy a lot</p>
								</div>
								<figure><img src={features3} alt="Shoes" /></figure>
							</div>
				<div className="card w-96 bg-gray-300 shadow-xl">
								<div className="card-body">
									<h2 className="text-xl font-bold text-center">Beach</h2>
									<p>You can see beach from your from.So give booking & feel enjoy</p>
								</div>
								<figure><img src={features2} alt="Shoes" /></figure>
							</div>
						</div>
					</Marquee>

				</div>
			</div>
		</section>
	);
};

export default ResFeatures;