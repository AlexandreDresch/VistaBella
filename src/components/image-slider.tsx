import { useState } from "react";

interface ImageSliderProps {
  name: string;
  imageUrls: string[];
}

export default function ImageSlider({ imageUrls, name }: ImageSliderProps) {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  function handleImageChange(image: string) {
    setSelectedImage(image);
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-96 w-full max-w-3xl items-center justify-center bg-red-500">
        <img
          src={selectedImage}
          alt={name}
          className="h-96 w-full object-cover"
        />
      </div>

      <div className="md:[&::-webkit-scrollbar-thumb]:bg-accent mt-8 flex w-full max-w-3xl gap-4 overflow-x-auto md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:invisible">
        {imageUrls.map((image) => (
          <button
            key={image}
            className="flex h-[100px] items-center justify-center"
            onClick={() => handleImageChange(image)}
          >
            <img
              src={image}
              alt={name}
              sizes="100vw"
              className="h-auto w-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
