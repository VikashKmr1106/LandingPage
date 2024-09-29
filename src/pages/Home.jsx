import React from 'react'
import About from './About'
const Home = () => {
	return (
		<>
		  <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-12 py-12">
				<div className="content">
					<h1 className='text-4xl font-semibold mb-3'>Welcome to Our Landing Page!</h1>
          <p className='text-lg font-semibold'>This is a simple landing page template using React and Bootstrap.</p>
          <p className='text-lg font-semibold'>Feel free to customize it according to your needs.</p>
					<button className='text-purple-600 bg-slate-400 p-2 rounded mt-3'>contact us</button>
				</div>
				<div className="image">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, possimus. Provident tempora porro aspernatur illum perspiciatis reprehenderit minus, quisquam vitae tenetur eius dolorem molestiae esse numquam asperiores eveniet ea quis nam natus nemo quia quaerat ab excepturi odit. Voluptatum fugiat aperiam eius laborum. Ullam maxime architecto esse commodi voluptatum quae totam saepe temporibus quos tempora repellendus nulla eligendi facere corporis modi quam obcaecati deserunt, dolorum, perspiciatis hic nostrum laborum voluptas dicta quaerat. Dolorem numquam tempore alias? Dignissimos magnam ex porro laboriosam illo ullam officiis. Rerum dolor quibusdam magni nostrum eum repellendus molestiae sapiente, rem reiciendis, recusandae non, amet omnis maxime.</p>
				</div>
			</div>

			<About  />
		</>
	)
}

export default Home