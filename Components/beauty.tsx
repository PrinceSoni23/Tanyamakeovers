import Image from "next/image";

export default function BeautySection() {
  return (
    <section className="bg-pink-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-rose-400 italic text-2xl font-semibold mb-2">Our Promise</h3>
          <h1 className="text-4xl md:text-5xl font-serif text-black font-medium leading-tight mb-6">
            You are in a beauty contest<br /> every day of your life.
          </h1>
          <hr className="border-t border-rose-200 w-24 mx-auto lg:mx-0 mb-4" />
          <p className="text-gray-700 text-base mb-6">
           The world is your audience — let your glow speak louder than words.
With every brushstroke, reveal the strongest, most stunning version of you.
          </p>
          <button className="bg-gradient-to-r from-rose-400 to-rose-600 text-white px-6 py-2 font-semibold tracking-wide rounded shadow hover:opacity-90">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Center Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center">
          <div className="rounded-b-full border-[6px] border-rose-200 p-2">
            <Image
              src="/aboutpic.jpg" // Replace with actual image path
              alt="Beauty model"
              width={400}
              height={400}
              className="rounded-b-full object-cover"
            />
            {/* <Image
              src="/leaf.png" // Replace with actual image path for floral overlay
              alt="Decoration"
              width={400}
              height={50}
              className="absolute bottom-0 left-0 right-0 mx-auto z-10"
            /> */}
          </div>
        </div>

        {/* Right Features */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          {[
            {
              icon: "/makeup.png",
              title: "High quality makeup services",
              desc: "Flawless makeup with premium products and expert touch."
            },
            {
              icon: "/cosmetics.png",
              title: "Creative touches and latest techniques",
              desc: "Bringing out your beauty with modern artistry."
            },
            {
              icon: "/highlighter.png",
              title: "Durable, comfortable, and true to personality",
              desc: "Long-lasting, lightweight, and uniquely you."
            },
            {
              icon: "/crystal.png",
              title: "Every detail is done with care for perfect results",
              desc:"Perfect results begin with thoughtful detailing."
            },
          ].map(({ icon, title, desc }, index) => (
            <div key={index} className="flex items-start gap-4">
              <Image src={icon} alt={title} width={60} height={60} />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
