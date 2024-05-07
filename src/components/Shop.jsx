

export default function Shop() {
    const products = [
        {
            id: 1,
            name: "ROBOCAT V1",
            price: "$2,799",
            description: "A robotic cat that blends charm with cutting-edge technology. It offers features like DJing, composing music, and interactive play. Perfect for music lovers and cat enthusiasts alike.",
            imageUrl: "https://i.postimg.cc/2Scph1MB/1.png"
        },
        {
            id: 2,
            name: "JAGUAR V1",
            price: "$3,399",
            description: "A robotic protector cat with laser eyes for surveillance and a taser-equipped tail for defense. This advanced security robot ensures your home remains safe from intruders.",
            imageUrl: "https://i.postimg.cc/7LfFVxrt/2.png"
        },
        {
            id: 3,
            name: "LUCY V2",
            price: "$3,199",
            description: "A pink robotic cat designed for companionship and fun. Equipped with mood-sensing technology and interactive games, it tailors activities to your emotions and preferences.",
            imageUrl: "https://i.postimg.cc/CKXWrWFh/3.png"
        },
        {
            id: 4,
            name: "FLUFFY V3",
            price: "$2,599",
            description: "A robotic cat that brings the warm, comforting presence of a real pet into your home. Covered in soft, genuine rabbit fur, Fluffy offers the cuddly companionship of a traditional cat without the maintenance.",
            imageUrl: "https://i.postimg.cc/wvNnC0vh/4.png"
        }
    ];

    return (
        <main className="flex flex-col m-auto max-w-[1400px] md:px-12 px-4 pb-20 pt-10">
            <div className="max-w-2xl space-y-2 sm:pb-8 pb-4 pl-3">
                <h1 className="sm:text-8xl text-7xl">OUR CATS</h1>
                <p className="font-semibold pr-4">
                    Welcome to the AICAT shop! Here you&apos;ll find a range of high-tech robotic cats that are as smart as they are fun. Take a look and discover the perfect AICAT to keep you company and brighten your day!
                </p>
            </div>

            <div className="cards">
                {products.map((product) => (
                    <div key={product.id} className="item-bg p-4 flex flex-col rounded-md m-2 justify-between">
                        <div>
                            <img src={product.imageUrl} alt="" className="rounded-sm shadow-lg w-full"/>
                            <div className="flex justify-between pt-6 sm:text-2xl text-xl font-semibold py-1">
                                <p>{product.name}</p>
                                <p className="text-dark">{product.price}</p>
                            </div>
                            <p className="pt-4 text-sm py-1 font-medium">{product.description}</p>
                        </div>
                        <button className="shop-btn self-center mt-4 w-full">
                                <span className="text-lg">ADD TO CART</span>
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}

