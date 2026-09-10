import { notFound } from "next/navigation";

import { SERVICES_DATA } from "@/components/sections/ourService/components/services/Services.consts";
import ServiceDetailContent from "@/pagesContent/serviceDetail/ServiceDetailContent";

type ServiceDetailPageProps = PageProps<"/services/[slug]">;

export function generateStaticParams() {
   return SERVICES_DATA.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
   params,
}: ServiceDetailPageProps) {
   const { slug } = await params;
   const service = SERVICES_DATA.find(
      (item) => item.link === `/services/${slug}`,
   );

   if (!service) {
      notFound();
   }

   return <ServiceDetailContent service={service} />;
}
