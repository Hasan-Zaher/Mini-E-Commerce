import Loader from "@/components/ui/Loader";
import ProductPage from "@/pages/ProductPage";
import { useLocale, useTranslations } from "next-intl";

import { Suspense } from "react";

const Product = ({ params }: { params: { id: string } }) => {
  const t = useTranslations();
  const locale  = useLocale();
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <ProductPage id={params.id} locale={locale} />
    </Suspense>
  );
};
export default Product;
