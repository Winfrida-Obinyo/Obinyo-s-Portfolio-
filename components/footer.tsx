export default function Footer() {
  return (
    <footer className="bg-[#BAD59E] mt-12 w-full">
      <div className="container mx-auto px-6 py-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Dev Winfrida. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
