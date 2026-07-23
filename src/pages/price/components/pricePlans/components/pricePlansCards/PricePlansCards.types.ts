export type PricePlanCard = {
   title: string;
   price: string;
   period: string;
   description: string;
   features: string[];
   buttonText: string;
   isMain: boolean;
};

export type PricePlansCardsProps = {
   pricePlansCards: PricePlanCard[];
};
