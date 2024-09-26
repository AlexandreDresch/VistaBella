import { useEffect, useRef, useState } from "react";

import { icons } from "../constants/icons";

interface ImageSliderProps {
  name: string;
  imageUrls: string[];
}

export default function ImageSlider({ imageUrls, name }: ImageSliderProps) {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function handleImageChange(image: string) {
    setSelectedImage(image);
  }

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  }

  function handleScroll() {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setIsLeftDisabled(scrollLeft === 0);

      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const { scrollWidth, clientWidth } = scrollContainer;

      if (scrollWidth <= clientWidth) {
        setIsLeftDisabled(true);
        setIsRightDisabled(true);
      } else {
        scrollContainer.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
          scrollContainer.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [imageUrls]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-96 w-full max-w-3xl items-center justify-center bg-secondary">
        <img
          src={selectedImage}
          alt={name}
          className="h-96 w-full rounded-primary object-cover"
        />
      </div>

      <div className="flex w-full max-w-3xl items-center gap-2">
        <button
          className={`mt-4 flex h-max items-center justify-center rounded-full bg-primary p-1 px-[6px] ${isLeftDisabled && "bg-primary/10"}`}
          onClick={scrollLeft}
          disabled={isLeftDisabled}
        >
          <img
            src={icons.left}
            alt={name}
            sizes="100vw"
            className="size-8 object-contain"
          />
        </button>
        <div
          ref={scrollContainerRef}
          className="md:[&::-webkit-scrollbar-thumb]:bg-accent mt-8 flex w-full gap-4 overflow-x-auto md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:invisible"
        >
          {imageUrls.map((image) => (
            <button
              key={image}
              className="flex h-[100px] max-h-[100px] w-[190px] min-w-[190px] items-center justify-center"
              onClick={() => handleImageChange(image)}
            >
              <img
                src={image}
                alt={name}
                sizes="100vw"
                className="h-auto max-h-[100px] rounded-primary w-full object-fill"
              />
            </button>
          ))}
        </div>
        <button
          className={`mt-4 flex h-max items-center justify-center rounded-full bg-primary p-1 px-[6px] ${isRightDisabled && "bg-primary/10"}`}
          onClick={scrollRight}
          disabled={isRightDisabled}
        >
          <img
            src={icons.right}
            alt={name}
            sizes="100vw"
            className="size-8 object-contain"
          />
        </button>
      </div>
    </div>
  );
}
