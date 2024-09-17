import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schemas/form-schema";
import { z } from "zod";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      checkbox: false,
    },
  });

  const phoneValue = watch("phone");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <h3 className="font-merriweather text-xl font-bold">Entre em contato</h3>

      <div className="font-opensans">
        <label htmlFor="name">Nome completo</label>
        <input
          className="w-full rounded-sm border px-3 py-2"
          id="name"
          type="text"
          placeholder="Seu nome completo"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm font-semibold text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="font-opensans">
        <label htmlFor="phone">Número de telefone</label>
        <PhoneInput
          id="phone"
          placeholder="Número de telefone"
          defaultCountry="BR"
          international
          withCountryCallingCode
          value={phoneValue as E164Number | undefined}
          onChange={(value) => setValue("phone", value || "")}
          className="w-full rounded-sm border px-2 py-2"
        />
        {errors.phone && (
          <p className="text-sm font-semibold text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="font-opensans">
        <label htmlFor="email">E-mail</label>
        <input
          className="w-full rounded-sm border px-3 py-2"
          id="email"
          type="email"
          placeholder="Seu e-mail"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm font-semibold text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="font-opensans">
        <label htmlFor="message">Sua Mensagem</label>
        <textarea
          className="h-72 w-full rounded-sm border px-3 py-2"
          id="message"
          placeholder="Sua mensagem"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm font-semibold text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="flex items-start">
          <input
            className="mr-2 mt-1"
            type="checkbox"
            {...register("checkbox")}
          />
          <p className="w-full text-sm">
            Eu concordo com o processamento de{" "}
            <span className="cursor-pointer text-blue-700 underline">
              dados pessoais
            </span>
            .
          </p>
        </label>
        {errors.checkbox && (
          <p className="text-sm font-semibold text-red-500">
            {errors.checkbox.message}
          </p>
        )}
      </div>

      <button
        className="h-12 w-full rounded border-2 border-solid border-primary font-bold text-primary"
        type="submit"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
