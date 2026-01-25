export default function WhatsAppChat() {
  const phoneNumber = "919739314380";
  const message = encodeURIComponent(
    "Hi Sweet House! I would like to know more about your products."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[9999] flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      <img
        src={`${import.meta.env.BASE_URL}whatsapp.svg`}
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="hidden sm:block font-semibold">
        Chat with us
      </span>
    </a>
  );
}
