import FeatureDetailsTwo from "@/components/features/feature-details-two";
import listing_data from "@/data/ListingData";
import shop_data from "@/data/ShopData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Tour Details Flyingzone - Tour & Travel Booking React Next js Template",
};

const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
  const { id } = await params;
  const tourId = id?.[0] ? Number(id[0]) : null;
  
  // Find the tour from ShopData first (used in tour-grid-2/services), then fallback to listing_data
  let tour = null;
  if (tourId) {
    tour = shop_data.find((item) => Number(item.id) === Number(tourId)) || 
           listing_data.find((item) => Number(item.id) === Number(tourId));
  }

  return (
    <Wrapper>
      <FeatureDetailsTwo tour={tour} />
    </Wrapper>
  )
}

export default page

