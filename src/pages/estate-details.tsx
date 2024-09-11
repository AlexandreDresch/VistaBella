import ContentContainer from "../components/content-container";
import ImageSlider from "../components/image-slider";
import { realEstateMockData } from "../constants/real-state";

export default function EstateDetails() {
  const estateData: RealEstate = realEstateMockData[0];
  return (
    <div className="flex justify-center px-40 py-20">
      <main className="flex w-2/3 flex-col space-y-10">
        <h1 className="font-merriweather text-3xl font-bold">
          {estateData.title}
        </h1>

        <ImageSlider name={estateData.title} imageUrls={estateData.images} />

        <section className="w-full max-w-3xl space-y-10">
          <ContentContainer content={estateData.briefDescription} />

          <ContentContainer title="Características:" content={estateData.amenities} />
        </section>
      </main>
      <aside className="w-1/3 bg-gray-200"></aside>
    </div>
  );
}
