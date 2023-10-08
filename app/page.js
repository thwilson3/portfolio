import NavBar from "@/components/NavBar";

const navLinks = [
  { link: `example.com`, text: "About" },
  { link: "example2.com", text: "Contact" },
];

export default function Home() {
  return (
    <NavBar/>
  );
}
