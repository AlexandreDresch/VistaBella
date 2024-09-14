import Badge from "../components/badge";
import ContentContainer from "../components/content-container";
import ImageSlider from "../components/image-slider";
import Map from "../components/map";
import { realEstateMockData } from "../constants/real-state";
import { formatToBRL, translatePropertyType } from "../utils/utils";

export default function EstateDetails() {
  const estateData: RealEstate = realEstateMockData[0];
  return (
    <div className="flex justify-center px-5 py-10 sm:px-10 md:px-20 lg:px-40 lg:py-20">
      <main className="flex w-full flex-col space-y-10 lg:w-2/3">
        <h1 className="font-merriweather text-lg font-bold md:text-2xl lg:text-3xl">
          {estateData.title}
        </h1>

        <ImageSlider name={estateData.title} imageUrls={estateData.images} />

        <section className="w-full max-w-3xl space-y-5 lg:space-y-10">
          <div className="flex w-full justify-between">
            <Badge
              icon="./icons/company.svg"
              description={translatePropertyType(estateData.propertyType)}
            />

            <Badge
              icon="./icons/dimensions.svg"
              description={`${estateData.size}m²`}
            />

            <Badge icon="./icons/pin.svg" description={estateData.location} />
          </div>

          <div className="flex justify-between rounded-md bg-secondary p-2 text-sm sm:p-4 md:text-base">
            <div className="font-opensans">
              <p>
                {estateData.type === "rent" ? "Aluguel " : "Preço "}partindo de:
              </p>
              <p className="font-bold">
                {formatToBRL(estateData.price)}
                {estateData.type === "rent" && "/mês"}
              </p>
            </div>

            <button className="rounded-md bg-primary px-2 font-bold text-white transition-opacity hover:bg-primary/95 sm:px-4">
              <span>Tenho interesse</span>
            </button>
          </div>

          <ContentContainer content={estateData.briefDescription} />

          <ContentContainer
            title="Características:"
            content={estateData.amenities}
          />

          <ContentContainer
            title="Detalhes do Layout:"
            content={estateData.layoutDetails}
          />

          <ContentContainer
            title="Detalhes da Mobília:"
            content={estateData.furnitureDetails}
          />

          <ContentContainer
            title="Localização:"
            content={estateData.locationDetails}
          />

          <ContentContainer
            title="Opinião da Imobiliária:"
            content={estateData.propertyOpinion}
          />
        </section>

        <section className="flex max-w-3xl">
          <Map
            position={estateData.map}
            title={estateData.title}
            details={estateData.amenities}
          />
        </section>
      </main>
      <aside className="hidden w-1/3 bg-secondary lg:flex"></aside>
    </div>
  );
}
