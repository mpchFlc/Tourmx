import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about-us", label: "Guías" },
  { href: "#products", label: "Tours" },
  { href: "#contact-us", label: "Contáctanos" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Mérida, Yucatán",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Saltillo, Coahuila",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Hermosillo, Sonora",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Cajeme, Sonora",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Transporte de calidad",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Pago Seguro",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Excelente Servicio",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "José López",
    rating: 4.5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    imgURL: customer2,
    customerName: "Ana Díaz",
    rating: 4.9,
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
];

export const footerLinks = [
  {
    title: "Tours",
    links: [
      { name: "Saltillo, Coahuila", link: "/" },
      { name: "Mérida, Yucatán", link: "/" },
      { name: "Cholula, Puebla", link: "/" },
      { name: "Hermosillo, Sonora", link: "/" },
      { name: "Cajeme, Sonora", link: "/" },
      { name: "Nezahualcóyotl, México", link: "/" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { name: "Sobre nosotros", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Nuestra forma de trabajo", link: "/" },
      { name: "Política de privacidad", link: "/" },
      { name: "Política de pago", link: "/" },
    ],
  },
  {
    title: "Ponerse en contacto",
    links: [
      { name: "customer@email.com", link: "mailto:customer@email.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
