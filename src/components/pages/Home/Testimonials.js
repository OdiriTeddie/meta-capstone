import Customer1Img from "../../../assets/customer1.jpg";
import Customer2Img from "../../../assets/customer2.jpg";
import Customer3Img from "../../../assets/customer3.jpg";
import Customer4Img from "../../../assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Tony Bloom",
    image: Customer1Img,
    rating: [1, 1, 1, 1, 0.5],
    says: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. dolores eos qui ratione voluptatem sequi nesciunt. `,
  },
  {
    fullName: "Rachael Sonda",
    image: Customer2Img,
    rating: [1, 1, 1, 1, 1],
    says: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam  dolores eos qui ratione voluptatem sequi nesciunt.. `,
  },
  {
    fullName: "Lilly Andrews",
    image: Customer3Img,
    rating: [1, 1, 1, 1, 0.5],
    says: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. dolores eos qui ratione voluptatem sequi nesciunt. `,
  },
  {
    fullName: "Rita McAllister",
    image: Customer4Img,
    rating: [1, 1, 1, 1],
    says: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. dolores eos qui ratione voluptatem sequi nesciunt. `,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
