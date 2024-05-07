import { useState } from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Chloe M.",
      version: "LUCY V2",
      imgSrc: "https://i.postimg.cc/nLXvyvW1/Untitled-design-4.jpg",
      description:
        "This cat literally saved my life last year. It can always tell when I'm sad and knows how to cheer me up. One time it ordered Ben & Jerry's ice cream for me as a surprise. Not only that, it is just so adorable!",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-xl p-3 flex flex-col",
    },
    {
      name: "Max J.",
      version: "ROBOCAT V1",
      imgSrc: "https://i.postimg.cc/wMGgVxrr/Untitled-design.jpg",
      description:
        "This cat isn't just a pet, it's a party starter! The first night I had it, it DJ'd my house party. Then it ordered pizzas for everyone based on their preferences. Everyone had such an amazing time!",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-xl p-3 flex flex-col",
    },
    {
      name: "Dora K.",
      version: "JAGUAR V1",
      imgSrc: "https://i.postimg.cc/hj8Xpm85/4.png",
      description:
        "I feel so much safer with Jaguar V1 at home. Its features are top-notch, and the taser tail is a real deterrent.",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-2 rounded-xl p-3 flex flex-col",
      extraImgSrc: "https://i.postimg.cc/7LfFVxrt/2.png",
    },
    {
      name: "Grace T.",
      version: "FLUFFY V3",
      imgSrc: "https://i.postimg.cc/rm2d1j44/1.png",
      description:
        "This cat offers all the comfort of a pet without the hassle. Its rabbit fur is super soft, providing the perfect companion for a lazy Sunday. Plus, its maintenance-free nature means no surprises on my carpet or unexpected vet bills.",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-xl p-3 sm:flex flex-col",
      isHiddenRev: true,
    },
    {
      name: "Oliver T.",
      version: "LUCY V2",
      imgSrc: "https://i.postimg.cc/nchXGCX3/2.png",
      description:
        "Whether I'm feeling down or just a bit bored, it knows exactly how to cheer me up. Also, the games it comes with are super fun.",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-xl p-3 sm:flex flex-col",
      isHiddenRev: true,
    },
    {
      name: "Leo P.",
      version: "ROBOCAT V1",
      imgSrc: "https://i.postimg.cc/sxVv82wD/6.png",
      description:
        "This cat has taken my home gatherings to a new level. It not only plays music but adapts the playlist to the mood of the party. It's impressive how it can handle anything from ambient sounds for dinner to upbeat tracks for late-night dance sessions, all without missing a beat.",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-xl p-3 sm:flex flex-col",
      isHiddenRev: true,
    },
  ];

  const [showReviews, setShowReviews] = useState(false);
  const [buttonText, setButtonText] = useState("SEE MORE");

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setButtonText(buttonText === "SEE MORE" ? "SHOW LESS" : "SEE MORE");
  };

  return (
    <section className="max-w-5xl m-auto md:min-h-[90vh] md:pt-0 pt-16 px-2 pb-12">
      <h2 className="text-5xl">WHAT CAT OWNERS HAVE TO SAY</h2>
      <hr className="mb-8 mt-5 max-w-[660px] h-1 bg-black border-0 rounded" />

      <div className="sm:grid sm:grid-cols-3 gap-4 flex flex-wrap reviewcontainer">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${review.uniqueClassNames} ${
              review.isHiddenRev && !showReviews ? "hidden" : "sm:flex flex"
            }`}
          >
            {review.extraImgSrc && (
              <div className="hidden sm:flex w-full h-full mb-6">
                <img
                  src={review.extraImgSrc}
                  alt=""
                  className="h-full lg:max-h-[300px] rounded-lg block m-auto w-full overflow-hidden object-cover"
                />
              </div>
            )}
            <div className="flex">
              <img
                src={review.imgSrc}
                className="rounded-xl w-12"
                alt={review.name}
              />
              <div className="font-semibold pl-2">
                <p className="text-lg">{review.name}</p>
                <p className="text-violet-200">{review.version}</p>
              </div>
            </div>
            <p className="mt-4 font-medium desc-box h-full flex items-center">
              <span>{review.description}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="w-full justify-center flex sm:hidden">
        <button
          className="bg-violet-200 mt-6 text-xl p-3 px-6 font-bold rounded-md hover:bg-purple-300 transition ease-in-out delay-150"
          onClick={toggleReviews}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
