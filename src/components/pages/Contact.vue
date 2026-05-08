<template>
  <div class="contact-page">
    <!-- Contact Info Cards Section -->
    <section class="relative py-20 sm:py-24 bg-white">
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-gman-purple-100 rounded-full blur-3xl opacity-30 -z-0"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gman-gold-100 rounded-full blur-3xl opacity-30 -z-0"
      ></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <!-- Address Card -->
            <div
              class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-stone-100 hover:border-gman-purple-200 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-gman-purple-500/5 to-gman-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div class="relative p-6 sm:p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-gman-purple-500 to-gman-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <MapPin :size="26" class="text-white" :stroke-width="2" />
                </div>

                <h3 class="text-lg font-bold text-stone-900 mb-3">Visit Us</h3>
                <p class="text-sm text-stone-600 leading-relaxed">
                  Adamstown Youth & Community Centre<br />
                  Station Road, Adamstown<br />
                  Lucan, County Dublin<br />
                  Ireland
                </p>
              </div>
            </div>

            <!-- Email Card -->
            <div
              class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-stone-100 hover:border-gman-gold-200 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-gman-gold-500/5 to-gman-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div class="relative p-6 sm:p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Mail :size="26" class="text-white" :stroke-width="2" />
                </div>

                <h3 class="text-lg font-bold text-stone-900 mb-3">Email Us</h3>
                <a
                  href="mailto:hello@example.com"
                  class="text-sm text-gman-purple-600 hover:text-gman-purple-700 font-medium transition-colors duration-200 inline-flex items-center gap-2 group/link"
                >
                  hello@example.com
                  <ArrowRight
                    :size="14"
                    class="group-hover/link:translate-x-1 transition-transform duration-200"
                    :stroke-width="2.5"
                  />
                </a>
                <p class="text-xs text-stone-500 mt-3">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            <!-- Office Hours Card -->
            <div
              class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-stone-100 hover:border-gman-purple-200 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-1"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-gman-purple-500/5 to-gman-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div class="relative p-6 sm:p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-gman-purple-500 to-gman-gold-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Clock :size="26" class="text-white" :stroke-width="2" />
                </div>

                <h3 class="text-lg font-bold text-stone-900 mb-3">
                  Office Hours
                </h3>
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-stone-600">Monday - Friday</span>
                    <span class="font-semibold text-stone-900"
                      >8:00 AM - 8:00 PM</span
                    >
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-stone-600">Weekend</span>
                    <span class="font-semibold text-stone-900"
                      >By Appointment</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Map Section -->
    <section
      id="contact-form"
      class="relative py-20 sm:py-24 bg-[#fafaf9] overflow-hidden"
    >
      <div class="absolute inset-0">
        <div
          class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/30 via-purple-100/20 to-transparent blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/40 via-yellow-50/30 to-transparent blur-3xl animate-float-medium"
        ></div>
        <div
          class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="mb-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Send Us a Message
            </h2>
            <p class="text-base text-stone-600 leading-relaxed">
              Fill out the form below and we'll get back to you as soon as
              possible. We're always happy to connect!
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <!-- Left: Contact Form -->
            <div data-aos="fade-right" data-aos-duration="600">
              <form
                @submit.prevent="handleSubmit"
                class="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-stone-100"
              >
                <div class="space-y-5">
                  <!-- Name -->
                  <div>
                    <label
                      class="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label
                      class="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <!-- Subject -->
                  <div>
                    <label
                      class="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      v-model="formData.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label
                      class="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      v-model="formData.message"
                      required
                      rows="5"
                      class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <!-- Success Message -->
                  <div
                    v-if="showSuccessMessage"
                    class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in"
                  >
                    <div
                      class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-green-900 mb-1">
                        Message Sent Successfully!
                      </h4>
                      <p class="text-sm text-green-700">
                        Thank you for reaching out! We'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  </div>

                  <!-- Error Message -->
                  <div
                    v-if="showErrorMessage"
                    class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fade-in"
                  >
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-red-900 mb-1">
                        Oops! Something went wrong
                      </h4>
                      <p class="text-sm text-red-700">
                        Sorry, there was an error sending your message. Please
                        try again or email us directly at
                        <a
                          href="mailto:hello@example.com"
                          class="underline font-semibold"
                          >hello@example.com</a
                        >
                      </p>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <Button
                    color="purple"
                    variant="solid"
                    :icon-right="Send"
                    :loading="isSubmitting"
                    type="submit"
                    block
                    class="mt-2"
                  >
                    {{ isSubmitting ? "Sending..." : "Send Message" }}
                  </Button>
                </div>
              </form>
            </div>

            <!-- Right: Map & Additional Info -->
            <div
              class="space-y-6"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <!-- Map Container -->
              <div
                class="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 group"
              >
                <div class="relative h-[330px] bg-stone-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0951234567!2d-6.4234567!3d53.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE5JzI0LjQiTiA2wrAyNScyNC40Ilc!5e0!3m2!1sen!2sie!4v1234567890"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    title="CIN Office Location - Adamstown Youth & Community Centre, Dublin, Ireland"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>

                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gman-purple-900/20 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  ></div>
                </div>

                <div
                  class="p-5 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600"
                >
                  <div class="flex items-center justify-between text-white">
                    <div class="flex items-center gap-3">
                      <MapPin :size="20" :stroke-width="2" />
                      <span class="font-semibold text-sm">
                        Adamstown, Dublin, Ireland
                      </span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Adamstown+Youth+Community+Centre+Dublin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm font-semibold hover:text-white/90 transition-colors duration-200 inline-flex items-center gap-2 group/link"
                    >
                      Get Directions
                      <ExternalLink
                        :size="14"
                        class="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                        :stroke-width="2.5"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div
                class="bg-gradient-to-br from-gman-purple-600 to-gman-gold-600 rounded-2xl shadow-lg p-6"
              >
                <h3 class="text-lg font-bold text-white mb-4">
                  Connect With Us
                </h3>
                <p class="text-sm text-white/90 mb-5">
                  Follow our journey and stay updated on our latest missions and
                  impact stories.
                </p>
                <div class="flex gap-3">
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section
      class="relative py-14 sm:py-16 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0"
          style="
            background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M30 0L30 60M0 30L60 30&quot; stroke=&quot;white&quot; stroke-width=&quot;0.5&quot; fill=&quot;none&quot;/%3E%3C/svg%3E');
          "
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Make an Impact?
          </h2>
          <p class="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Join us in transforming lives and empowering communities across
            Sample Region.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              color="gold"
              variant="solid"
              :icon-right="ArrowRight"
              class="bg-white text-gman-purple-600 hover:bg-white/90"
              to="/get-involved"
            >
              Get Involved
            </Button>
            <Button
              color="purple"
              variant="outline"
              :icon-left="Heart"
              class="border-white text-white hover:bg-white/10"
              to="/about"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  ArrowRight,
  Shield,
  ExternalLink,
  Heart,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l0sxdf8";
const EMAILJS_TEMPLATE_ID = "template_ail1cnq";
const EMAILJS_PUBLIC_KEY = "qQUfFfTnLj3kCTtNW";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Form handling
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  showSuccessMessage.value = false;
  showErrorMessage.value = false;

  try {
    // Prepare template parameters
    const templateParams = {
      to_name: "Admin",
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
      to_email: "hello@example.com",
      reply_to: formData.value.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    if (response.status === 200) {
      showSuccessMessage.value = true;

      // Reset form
      formData.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 5000);
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    showErrorMessage.value = true;

    // Hide error message after 5 seconds
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-50px, 50px) scale(1.05);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(50px, -50px) scale(0.95);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 40px) rotate(-5deg);
  }
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 18s ease-in-out infinite;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

html {
  scroll-behavior: smooth;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
