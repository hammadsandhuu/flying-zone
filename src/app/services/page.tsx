import FeatureThree from "@/components/features/feature-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "All Services - Flyingzone | Travel Agency",
  description: "Explore all our amazing tour packages and travel services. Book your dream vacation with Flyingzone travel agency.",
};
const page = () => {
  return (
    <Wrapper>
      <FeatureThree />
    </Wrapper>
  )
}

export default page

