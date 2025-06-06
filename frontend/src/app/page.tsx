import { appDescriptions, appFeatures } from "@/constants/words";

export default function HomePage() {
	return (
		<>
			<main>
				<section className="min-h-screen relative flex">
					{/* Text & Background Container */}
					<div className="w-3/5 relative flex items-center justify-center px-8 z-10 pl-20">
						<div>
							<h1 className="text-6xl font-bold mb-4">
								{appDescriptions}
							</h1>
							<p className="text-xl">{appFeatures}</p>
						</div>
					</div>

					{/* Background Image - Right Side */}
					<div
						className="w-2/5 bg-cover bg-no-repeat bg-center relative z-0"
						style={{
							backgroundImage: "url('/Clothes.jpg')",
							backgroundPosition: "70% center",
							backgroundSize: "90%",
						}}
					/>
				</section>

				{/* <section id="features" className="min-h-screen bg-black flex items-center justify-center">
          <h2 className="text-3xl">Features</h2>
        </section>
        
        <section id="contact" className="min-h-screen bg-beige flex items-center justify-center">
          <h2 className="text-3xl">Contact Us</h2>
        </section> */}
			</main>
		</>
	);
}
