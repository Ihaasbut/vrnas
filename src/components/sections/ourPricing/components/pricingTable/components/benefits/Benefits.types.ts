export type Benefit = {
   title: string;
   description: string;
};

export type BenefitsData = {
   benefits: Benefit[];
};

export type BenefitsProps = {
   data: BenefitsData;
};
