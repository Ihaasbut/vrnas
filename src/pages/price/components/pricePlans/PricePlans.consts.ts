import { PRICE_PLANS_CARDS_CONFIG } from "./components/pricePlansCards/PricePlansCards.consts";
import { PricePlansProps } from "./PricePlans.types";

export const PRICE_PLANS_CONFIG: PricePlansProps = {
   title: "Тарифные планы",
   section: "Тарифы",
   isCenter: true,
   description:
      "Выберите тариф, который подходит под ваши задачи и бюджет. Во всех планах есть бесплатный пробный период — можно протестировать сервис и понять, какой вариант вам подходит.",
   pricePlansCards: PRICE_PLANS_CARDS_CONFIG,
};
