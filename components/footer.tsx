export default function Footer() {
  return (
    <footer className="bg-[#BAD59E] mt-12">
      <div className="container mx-auto px-6 py-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
