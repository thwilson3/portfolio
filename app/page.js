const navLinks = [
  { link: `example.com`, text: "About" },
  { link: "example2.com", text: "Contact" },
];

export default function Home() {
  return (
    <header className="bg-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-black">{`{email: hi@thwilson3.io}`}</div>
        {navLinks.map((link, idx) => (
          <ul key={idx} class="text-black p-2">
            <a href={link.link}>
            {link.text}
            </a>
          </ul>
        ))}
      </nav>
    </header>
  );
}
