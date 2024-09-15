import Badge from "../components/badge";
import ContentContainer from "../components/content-container";
import Header from "../components/header";
import ImageSlider from "../components/image-slider";
import Map from "../components/map";
import {
  broker,
  otherServices,
  realEstateMockData,
} from "../constants/real-state";
import { formatToBRL, translatePropertyType } from "../utils/utils";

export default function EstateDetails() {
  const estateData: RealEstate = realEstateMockData[0];
  return (
    <>
      <Header />
      <div className="flex min-w-full max-w-7xl justify-center gap-20 px-5 py-10 sm:px-10 md:px-20 lg:px-40 lg:py-20">
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
                  {estateData.type === "rent" ? "Aluguel " : "Preço "}partindo
                  de:
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

          <section className="max-w-3xl space-y-5">
            <h3 className="font-merriweather text-lg font-bold">
              Você pode se interessar em
            </h3>

            <div className="md:[&::-webkit-scrollbar-thumb]:bg-accent flex h-full w-full max-w-3xl gap-4 overflow-x-auto py-2 md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:invisible">
              {otherServices.map((service) => (
                <button
                  key={service.id}
                  className="relative flex h-[100px] max-h-[100px] w-[150px] min-w-[150px] items-center justify-center md:max-h-[180px] md:w-[200px]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="size-auto max-h-[100px] min-w-[150px] rounded-sm object-cover md:w-[200px]"
                  />
                  <span className="absolute bottom-0 rounded-sm bg-black/10 px-1 font-bold text-white">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </main>
        <aside className="sticky top-10 hidden h-max w-[352px] flex-col space-y-10 lg:flex">
          <form action="" className="space-y-2 rounded-sm bg-secondary p-4">
            <h3 className="font-merriweather text-xl font-bold">
              Entre em contato
            </h3>

            <div className="font-opensans">
              <label htmlFor="name">Nome completo</label>
              <input
                className="w-full rounded-sm border px-3 py-2"
                id="name"
                type="text"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="font-opensans">
              <label htmlFor="name">Número de telefone</label>
              <input
                className="w-full rounded-sm border px-3 py-2"
                id="phone"
                type="number"
                placeholder="Número de telefone"
              />
            </div>

            <div className="font-opensans">
              <label htmlFor="email">E-mail</label>
              <input
                className="w-full rounded-sm border px-3 py-2"
                id="email"
                type="email"
                placeholder="Seu e-mail"
              />
            </div>

            <div className="font-opensans">
              <label htmlFor="message">Sua Mensagem</label>
              <textarea
                className="h-72 w-full rounded-sm border px-3 py-2"
                id="message"
                placeholder="Sua mensagem"
              />
            </div>

            <div className="flex">
              <label className="flex items-start">
                <input className="mr-2 mt-1" type="checkbox" />
                <p className="w-full text-sm">
                  Eu concordo com o processamento de{" "}
                  <span className="cursor-pointer text-blue-700 underline">
                    dados pessoais
                  </span>
                  .
                </p>
              </label>
            </div>

            <button
              className="h-12 w-full rounded border-2 border-solid border-primary font-bold text-primary"
              type="button"
            >
              Sign Up
            </button>
          </form>

          <div className="flex w-[352px] flex-col items-center space-y-2 rounded-sm bg-secondary p-4">
            <img
              src={broker.image}
              alt={broker.name}
              className="size-32 rounded-full"
            />
            <h3 className="font-merriweather text-xl font-bold">
              {broker.name}
            </h3>
            <p className="font-opensans text-sm">{broker.phone}</p>
            <p className="font-opensans text-sm">{broker.email}</p>

            <a href="/" className="text-blue-700">
              Ver perfil
            </a>
          </div>

          <div className="flex w-[352px] flex-col space-y-2 rounded-sm bg-secondary p-4">
            <h3 className="font-merriweather text-xl font-bold">Resumo</h3>

            <div className="flex flex-col space-y-2">
              <p className="text-left text-sm">{estateData.location}</p>
              {estateData.amenities.map((amenity, index) => (
                <p key={index} className="text-left text-sm">
                  {amenity}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
