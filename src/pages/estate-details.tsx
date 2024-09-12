import Badge from "../components/badge";
import ContentContainer from "../components/content-container";
import ImageSlider from "../components/image-slider";
import { realEstateMockData } from "../constants/real-state";
import { formatToBRL, translatePropertyType } from "../utils/utils";

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

          <div className="bg-secondary flex justify-between rounded-md p-4">
            <div className="font-opensans">
              <p>
                {estateData.type === "rent" ? "Aluguel " : "Preço "}partindo de:
              </p>
              <p className="font-bold">
                {formatToBRL(estateData.price)}
                {estateData.type === "rent" && "/mês"}
              </p>
            </div>

            <button className="bg-primary hover:bg-primary/95 rounded-md px-4 font-bold text-white transition-opacity">
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
      </main>
      <aside className="w-1/3 bg-secondary"></aside>
    </div>
  );
}
