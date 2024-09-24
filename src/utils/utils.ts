import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges and combines class names using `clsx` and `twMerge`.
 *
 * This function takes any number of class values (strings, arrays, objects, etc.),
 * processes them with `clsx` to conditionally combine them, and then merges Tailwind CSS
 * classes using `twMerge` to handle class conflicts (e.g., resolving multiple Tailwind
 * classes like `px-4 px-2` by keeping the latest valid class).
 *
 * @param inputs - A list of class values to be combined. These can be strings, arrays, or objects.
 * @returns A single string containing the merged class names.
 *
 * @example
 * ```typescript
 * const classNames = cn("bg-blue-500", { "text-white": true }, "px-4", "px-2");
 * console.log(classNames); // Output: "bg-blue-500 text-white px-2"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Translates the property type from English to Portuguese.
 *
 * @param propertyType - The property type to be translated. It should be one of the following values: "apartment", "house", "farm", "flat", or "loft".
 * @returns The translated property type in Portuguese. If the provided propertyType is not recognized, it returns "Tipo desconhecido".
 *
 * @example
 * ```typescript
 * const translatedType = translatePropertyType("apartment");
 * console.log(translatedType); // Output: "Apartamento"
 * ```
 */
export function translatePropertyType(
  propertyType: RealEstate["propertyType"],
): string {
  const translations: Record<string, string> = {
    apartment: "Apartamento",
    house: "Casa",
    farm: "Fazenda",
    flat: "Cobertura",
    loft: "Loft",
  };

  return translations[propertyType] || "Tipo desconhecido";
}

/**
 * Converts a number to Brazilian real currency format (BRL).
 *
 * @param amount - The number to be formatted.
 * @returns The formatted currency string in BRL.
 *
 * @example
 * ```typescript
 * const formattedAmount = formatToBRL(1234567.89);
 * console.log(formattedAmount); // Output: "R$ 1.234.567,89"
 * ```
 */
export function formatToBRL(amount: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

export const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s+[a-zA-ZÀ-ÖØ-öø-ÿ]+)+$/;

export const phoneRegex =
  /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
