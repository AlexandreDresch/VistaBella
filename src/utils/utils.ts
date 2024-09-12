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
