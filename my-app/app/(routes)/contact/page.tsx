// app/(routes)/contact/page.tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact HSDF – Reach Out to Help Thalassemia Children",
  description:
    "Get in touch with us via phone, email, or visit our center in Karachi. We're here to answer your questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">0314-2834582</p>
                      <p className="text-gray-600">0310-2581868</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@hsdf.org.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">R-406, Ahsanabad No.5, Karachi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">Monday–Friday: 9am–5pm</p>
                      <p className="text-gray-600">Saturday: 9am–1pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Badge */}
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                <p className="font-semibold">Registered Non-Profit</p>
                <p>Reg. No. DO/SW/CDD/VA/NF/2003/43</p>
                <p className="mt-2">Est. 2003 · Karachi, Pakistan</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-video w-full bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3981837238735!2d67.034752!3d24.860514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b1566d6b9%3A0x3a1d6b8c5f2d8c!2sAhsanabad%20Block%205%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HSDF Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}