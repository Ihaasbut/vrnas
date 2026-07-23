import { PRICE_PLANS_CARDS_CONFIG } from "./components/pricePlansCards/PricePlansCards.consts";
import { PricePlansData } from "./PricePlans.types";

export const PRICE_PLANS_CONFIG: PricePlansData = {
   title: "Тарифные планы",
   section: "Тарифы",
   description:
      "Выберите тариф, который подходит под ваши задачи и бюджет. Во всех планах есть бесплатный пробный период — можно протестировать сервис и понять, какой вариант вам подходит.",
   pricePlansCards: PRICE_PLANS_CARDS_CONFIG,
};
