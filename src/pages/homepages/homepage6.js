import LayoutSix from "../../components/Layout/LayoutSix";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import sliderData from "../../data/slider/sliderSix.json";
import ProductTabTwo from "../../components/Sections/ProductThumb/ProductTab/ProductTabTwo";
import productTabTwoData from "../../data/products.json";
import CategoriesTwo from "../../components/Sections/Categories/CategoriesTwo";
import categoriesTwodata from "../../data/categories/categoryTwo.json";
import TestimonialThree from "../../components/Sections/Testimonial/TestimonialThree";
import testimonialData from "../../data/testimonial/testimonialThree.json";
import IntroductionTen from "../../components/Sections/Introduction/IntroductionTen";
import introductionTenData from "../../data/introduction/IntroductionTen.json";
import Benefits from "../../components/Other/Benefits";
import DaleOfWeekThree from "../../components/Sections/DealOfWeek/DaleOfWeekThree";
import BlogThree from "../../components/Sections/Blog/BlogThree";
import blogData from "../../data/blog/blog.json";
import InstagramOne from "../../components/Sections/Instagram/InstagramOne";

export default function homepage6() {
  return (
    <LayoutSix title="Jellyfish Store">
      <SliderTwo className="-style-7" data={sliderData} showDots />
      <CategoriesTwo data={categoriesTwodata} />
      <ProductTabTwo
        data={productTabTwoData}
        disableFeaturedProduct
        titleSize={36 / 16 + "em"}
      />
      
        <IntroductionTen data={introductionTenData} />
    
      <DaleOfWeekThree last={10000000} />
      <Benefits />

      <ProductTabTwo
        data={productTabTwoData}
        disableFeaturedProduct
        title="Bestseller"
        titleSize={36 / 16 + "em"}
        numberOfProducts={4}
      />
    </LayoutSix>
  );
}
