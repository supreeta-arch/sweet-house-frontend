export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold mb-3">Sweet House</h3>
          <p className="text-sm opacity-80">
            Premium South Indian sweets and snacks made with pure ingredients.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="text-sm space-y-1 opacity-80">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="text-sm space-y-1 opacity-80">
            <li>Our Story</li>
            <li>Corporate Gifting</li>
            <li>News & Media</li>
            <li>FSSAI Certified</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/20 text-center text-xs py-4 opacity-70">
        © 2025 sweethouse.co.in — All rights reserved.
      </div>
    </footer>
  );
}
