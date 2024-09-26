import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Badge from "../components/badge";
import ContentContainer from "../components/content-container";
import ImageSlider from "../components/image-slider";
import Map from "../components/map";
import {
  broker,
  otherServices,
  realEstateMockData,
} from "../constants/real-state";
import { translatePropertyType } from "../utils/utils";
import { icons } from "../constants/icons";
import AnimatedCounter from "../components/animated-counter";
import ContactForm from "../components/forms/contact-form";
import ContactModal from "../components/modals/contact-modal";
import Button from "../components/button";
import Layout from "../components/layout";

export default function EstateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth <= 1024,
  );

  useEffect(() => {
    if (!id || !realEstateMockData[Number(id)]) {
      navigate("/");
    }
  }, [id, navigate]);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const estateData = realEstateMockData[Number(id)];
  if (!estateData) return null;

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <main className="flex w-full flex-col space-y-10 lg:w-2/3">
        <h1 className="font-merriweather text-lg font-bold md:text-2xl lg:text-3xl">
          {estateData.title}
        </h1>

        <ImageSlider name={estateData.title} imageUrls={estateData.images} />

        <div className="flex max-w-3xl flex-col items-center space-y-10">
          <section className="w-full max-w-2xl space-y-5 lg:space-y-10">
            <div className="flex w-full justify-between">
              <Badge
                icon={icons.company}
                description={translatePropertyType(estateData.propertyType)}
              />
              <Badge
                icon={icons.dimensions}
                description={`${estateData.size}m²`}
              />
              <Badge icon={icons.location} description={estateData.location} />
            </div>

            <div className="rounded-primary flex justify-between bg-secondary p-2 text-sm sm:p-4 md:text-base">
              <div className="font-opensans">
                <p>
                  {estateData.type === "rent" ? "Aluguel " : "Preço "} partindo
                  de:
                </p>
                <div className="flex gap-1">
                  <AnimatedCounter amount={estateData.price} />
                  <span>{estateData.type === "rent" && "/mês"}</span>
                </div>
              </div>

              {isMobileView ? (
                <ContactModal />
              ) : (
                <Button onClick={scrollToContactForm}>Tenho interesse</Button>
              )}
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

          <section className="flex w-full max-w-2xl">
            <Map
              position={estateData.map}
              title={estateData.title}
              details={estateData.amenities}
            />
          </section>

          <section className="w-full max-w-2xl space-y-5">
            <h3 className="font-merriweather text-lg font-bold">
              Você pode se interessar em
            </h3>
            <div className="flex h-max w-full max-w-3xl gap-4 overflow-x-auto py-2 md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg md:[&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar]:invisible">
              {otherServices.map((service) => (
                <a
                  key={service.id}
                  className="relative flex h-[100px] max-h-[100px] w-[150px] min-w-[150px] items-center justify-center md:max-h-[180px] md:w-[200px]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-primary size-auto max-h-[100px] min-w-[150px] object-cover md:w-[200px]"
                  />
                  <span className="rounded-primary absolute bottom-0 bg-black/10 px-1 font-bold text-white">
                    {service.title}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <aside
        className="hidden h-max w-[352px] flex-col space-y-10 pt-16 lg:flex"
        ref={contactFormRef}
      >
        <div className="rounded-primary bg-secondary p-4">
          <ContactForm />
        </div>
        <div className="rounded-primary flex w-[352px] flex-col items-center space-y-2 bg-secondary p-4">
          <img
            src={broker.image}
            alt={broker.name}
            className="size-32 rounded-full"
          />
          <h3 className="font-merriweather text-xl font-bold">{broker.name}</h3>
          <p className="font-opensans text-sm">{broker.phone}</p>
          <p className="font-opensans text-sm">{broker.email}</p>
          <a href="/" className="text-blue-700">
            Ver perfil
          </a>
        </div>
        <div className="rounded-primary flex w-[352px] flex-col space-y-2 bg-secondary p-4">
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
    </Layout>
  );
}
