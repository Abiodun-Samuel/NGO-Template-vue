<template>
  <section></section>

  <!-- Ways to Get Involved Section -->
  <section id="ways-to-help" class="relative py-20 sm:py-24 bg-white">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-gman-purple-100 rounded-full blur-3xl opacity-30 -z-0"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gman-gold-100 rounded-full blur-3xl opacity-30 -z-0"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-12 sm:mb-16"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          Get Involved
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Choose Your Path to Impact
        </h2>
        <p
          class="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed"
        >
          There are many ways to contribute to our mission. Select the path that
          resonates with your passion and skills.
        </p>
      </div>

      <!-- Ways Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Involvement Cards -->
        <div
          v-for="(way, index) in waysToHelp"
          :key="way.title"
          class="relative group"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="0"
        >
          <div
            class="relative h-full bg-gradient-to-br p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            :style="{ backgroundImage: way.gradient }"
            @click="handleCardClick(way.action, way.title)"
          >
            <!-- Pattern Overlay -->
            <div
              class="absolute inset-0 opacity-10"
              style="
                background-image: radial-gradient(
                  circle at 2px 2px,
                  white 1px,
                  transparent 0
                );
                background-size: 30px 30px;
              "
            ></div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon -->
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md"
              >
                <component
                  :is="way.icon"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                  :stroke-width="2"
                />
              </div>

              <!-- Title -->
              <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {{ way.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-white/90 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base min-h-[4rem] sm:min-h-[4.5rem]"
              >
                {{ way.description }}
              </p>

              <!-- CTA -->
              <div
                class="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300 text-sm sm:text-base"
              >
                <span>{{ way.cta }}</span>
                <ArrowRight
                  :size="16"
                  class="group-hover:translate-x-1 transition-transform duration-300"
                  :stroke-width="2.5"
                />
              </div>
            </div>

            <!-- Decorative Corner -->
            <div
              class="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact Stories Section -->
  <section class="relative py-20 sm:py-24 bg-[#fafaf9] overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0">
      <div
        class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/30 via-purple-100/20 to-transparent blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/40 via-yellow-50/30 to-transparent blur-3xl animate-float-medium"
      ></div>
      <div
        class="absolute -bottom-20 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-purple-100/25 via-violet-50/20 to-transparent blur-3xl animate-float-slower"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-12 sm:mb-16"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <p
          class="text-sm font-semibold text-gman-gold-600 uppercase tracking-wider mb-3"
        >
          Real Stories
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          See Your Impact in Action
        </h2>
        <p class="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto">
          Every contribution makes a tangible difference in the lives of people
          and communities we serve.
        </p>
      </div>

      <!-- Impact Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Impact Cards -->
        <div
          v-for="(impact, index) in impactStories"
          :key="impact.title"
          class="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0"
        >
          <!-- Image Container -->
          <div class="relative h-56 sm:h-64 overflow-hidden">
            <img
              :src="impact.image"
              :alt="impact.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <!-- Icon Badge -->
            <div
              class="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
            >
              <component
                :is="impact.icon"
                class="w-5 h-5 sm:w-6 sm:h-6 text-gman-purple-600"
                :stroke-width="2"
              />
            </div>

            <!-- Stat Badge -->
            <div
              class="absolute bottom-4 right-4 bg-gman-gold-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg"
            >
              <span class="text-white font-bold text-xs sm:text-sm"
                >Real Impact</span
              >
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 sm:p-6">
            <h3
              class="text-lg sm:text-xl font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-gman-purple-600 transition-colors duration-300"
            >
              {{ impact.title }}
            </h3>
            <p class="text-sm sm:text-base text-stone-600 leading-relaxed">
              {{ impact.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Support Our Work Section (Premium Redesign) -->
  <section
    id="donation-section"
    class="relative container rounded-lg mx-auto my-20 py-20 sm:py-28 bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900 overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <!-- Enhanced Animated Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gman-gold-400 rounded-full opacity-15 blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gman-purple-500 rounded-full opacity-15 blur-3xl animate-float-slower"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gman-gold-300 rounded-full opacity-10 blur-3xl animate-float-medium"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div
          class="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 rounded-2xl mb-5 shadow-lg"
          >
            <Heart :size="28" :stroke-width="2" class="text-white" />
          </div>

          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
          >
            Support Our Work
          </h2>

          <div class="max-w-3xl mx-auto space-y-3">
            <p class="text-lg sm:text-xl text-white/90 leading-relaxed">
              Every act of kindness, no matter how small, has the power to make
              a difference. Your generosity fuels positive change and creates a
              ripple effect of compassion.
            </p>
            <p class="text-sm sm:text-base text-white/70 leading-relaxed">
              As Aaron and Hur lifted up Moses' hands while Joshua fought the
              battle (Exodus 17:12–14), we seek your gifts of love.
            </p>
          </div>
        </div>

        <!-- Main Grid Layout -->
        <div class="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <!-- Left: Impact Areas (3 cols) -->
          <div
            class="lg:col-span-3 space-y-5"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div class="mb-6">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                Where Your Support Goes
              </h3>
              <p class="text-white/70 text-sm">
                Every contribution directly transforms lives across Sample Region
              </p>
            </div>

            <!-- Impact Cards -->
            <div class="space-y-4">
              <div
                v-for="(area, index) in impactAreas"
                :key="area.title"
                class="group relative bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                data-aos="fade-right"
                data-aos-duration="600"
                :data-aos-delay="index * 80"
              >
                <!-- Hover Glow -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity duration-300"
                  :class="area.iconBg"
                ></div>

                <div class="relative flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                    :class="area.iconBg"
                  >
                    <component
                      :is="area.icon"
                      :size="22"
                      class="text-white"
                      :stroke-width="2"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-white mb-1 text-base">
                      {{ area.title }}
                    </h4>
                    <p class="text-sm text-white/70 leading-relaxed">
                      {{ area.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gratitude Note -->
            <div
              class="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 mt-6"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div class="flex items-start gap-3">
                <Sparkles
                  :size="18"
                  class="text-gman-gold-300 mt-0.5 flex-shrink-0"
                  :stroke-width="2"
                />
                <div>
                  <p class="text-sm text-white/80 leading-relaxed">
                    <span class="font-semibold text-white">Thank you</span> to
                    our friends and partners who have supported our missions.
                    The good Lord reward you bountifully.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Bank Details (2 cols) -->
          <div
            class="lg:col-span-2"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div class="lg:sticky lg:top-8">
              <!-- Card -->
              <div class="relative group">
                <!-- Outer Glow -->
                <div
                  class="absolute -inset-1 bg-gradient-to-br from-gman-purple-500 to-gman-gold-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  <!-- Header -->
                  <div
                    class="bg-gradient-to-br from-gman-purple-600 to-gman-gold-600 px-5 py-4"
                  >
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                      >
                        <Landmark
                          :size="20"
                          :stroke-width="2"
                          class="text-white"
                        />
                      </div>
                      <div>
                        <h3 class="font-bold text-white text-base">
                          Bank Transfer
                        </h3>
                        <p class="text-xs text-white/80">Direct donation</p>
                      </div>
                    </div>
                  </div>

                  <!-- Body -->
                  <div class="p-5 space-y-4">
                    <!-- Bank -->
                    <div>
                      <p
                        class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
                      >
                        Bank Name
                      </p>
                      <p class="text-base font-bold text-stone-900">
                        Zenith Bank Sample Region
                      </p>
                    </div>

                    <div class="border-t border-stone-100"></div>

                    <!-- Account Number -->
                    <div>
                      <p
                        class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2"
                      >
                        Account Number
                      </p>
                      <div
                        class="flex items-center justify-between gap-2 bg-stone-50 rounded-lg px-3 py-2.5"
                      >
                        <p
                          class="text-xl font-bold text-gman-purple-600 font-mono"
                        >
                          1224220999
                        </p>
                        <button
                          @click="copyAccountNumber"
                          class="p-2 hover:bg-white rounded-md transition-colors duration-200 group/btn"
                          title="Copy"
                        >
                          <component
                            :is="copied ? Check : Copy"
                            :size="16"
                            :class="
                              copied
                                ? 'text-green-600'
                                : 'text-stone-400 group-hover/btn:text-gman-purple-600'
                            "
                            :stroke-width="2.5"
                          />
                        </button>
                      </div>
                    </div>

                    <div class="border-t border-stone-100"></div>

                    <!-- Account Name -->
                    <div>
                      <p
                        class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
                      >
                        Account Name
                      </p>
                      <p class="text-sm font-bold text-stone-900 leading-tight">
                        Community Impact Network
                      </p>
                    </div>

                    <!-- Security Badge -->
                    <div
                      class="bg-green-50 border border-green-200 rounded-lg px-3 py-2.5 mt-4"
                    >
                      <div class="flex items-center gap-2">
                        <Shield
                          :size="14"
                          class="text-green-600 flex-shrink-0"
                          :stroke-width="2"
                        />
                        <p class="text-xs text-green-800 leading-snug">
                          Verified CAC registered account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Stats Below Card -->
              <div class="grid grid-cols-1 gap-3 mt-5">
                <div
                  class="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center"
                >
                  <p class="text-2xl font-bold text-gman-gold-300">100%</p>
                  <p class="text-xs text-white/70 mt-0.5">Transparent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section
    id="contact-form"
    class="relative py-20 sm:py-24 bg-[#fafaf9] overflow-hidden"
  >
    <!-- Premium Background -->
    <div class="absolute inset-0">
      <div
        class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/30 via-purple-100/20 to-transparent blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/40 via-yellow-50/30 to-transparent blur-3xl animate-float-medium"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto">
        <div
          class="text-center mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
          >
            Ready to Make a Difference?
          </h2>
          <p class="text-base sm:text-lg text-stone-600">
            Tell us how you'd like to get involved and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-stone-100"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <div class="space-y-5 sm:space-y-6">
            <div class="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label class="block text-sm font-semibold text-stone-700 mb-2">
                  Full Name *
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-stone-700 mb-2">
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
            </div>

            <div>
              <label class="block text-sm font-semibold text-stone-700 mb-2">
                Phone Number
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-stone-700 mb-2">
                How would you like to help? *
              </label>
              <select
                v-model="formData.interest"
                required
                class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select an option</option>
                <option value="Volunteer Your Time">Volunteer Your Time</option>
                <option value="Corporate Partnership">
                  Corporate Partnership
                </option>
                <option value="Sponsor an Event">Sponsor an Event</option>
                <option value="Organize a Fundraiser">
                  Organize a Fundraiser
                </option>
                <option value="Professional Services">
                  Professional Services
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-stone-700 mb-2">
                Tell us more about your interest *
              </label>
              <textarea
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gman-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Share your thoughts, skills, or how you'd like to contribute..."
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
                  Interest Submitted Successfully!
                </h4>
                <p class="text-sm text-green-700">
                  Thank you for your interest! We'll get back to you within 24
                  hours.
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
                  Sorry, there was an error sending your message. Please try
                  again or email us directly at
                  <a
                    href="mailto:hello@example.com"
                    class="underline font-semibold"
                    >hello@example.com</a
                  >
                </p>
              </div>
            </div>

            <Button
              color="purple"
              variant="solid"
              :icon-right="Send"
              :loading="isSubmitting"
              type="submit"
              block
              class="mt-2"
            >
              {{ isSubmitting ? "Sending..." : "Submit Your Interest" }}
            </Button>
          </div>
        </form>
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
          Together, We Can Transform Lives
        </h2>
        <p class="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
          Join the CIN family and be part of a movement that's making real,
          lasting change in communities across Sample Region.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            color="gold"
            variant="solid"
            :icon-right="Mail"
            class="bg-white text-gman-purple-600 hover:bg-white/90"
            to="/contact"
          >
            Contact Us
          </Button>
          <Button
            color="purple"
            variant="outline"
            :icon-left="Users"
            class="border-white text-white hover:bg-white/10"
            @click="scrollToWays"
          >
            View All Options
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  Heart,
  Users,
  Utensils,
  Stethoscope,
  GraduationCap,
  Send,
  Mail,
  Landmark,
  Shield,
  Copy,
  Check,
  HandHeart,
  Gift,
  Calendar,
  Briefcase,
  ArrowRight,
  Trophy,
  Building,
  Sparkles,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l0sxdf8";
const EMAILJS_TEMPLATE_ID = "template_ail1cnq";
const EMAILJS_PUBLIC_KEY = "qQUfFfTnLj3kCTtNW";

emailjs.init(EMAILJS_PUBLIC_KEY);

const waysToHelp = ref([
  {
    title: "Volunteer Your Time",
    description:
      "Join our dedicated team of volunteers and directly impact lives through hands-on service in our outreach programs.",
    icon: HandHeart,
    gradient: "linear-gradient(135deg, #5d2b7a 0%, #684078 100%)",
    cta: "Become a Volunteer",
    action: "volunteer",
  },
  {
    title: "Make a Donation",
    description:
      "Your financial contribution helps us expand our reach and provide essential resources to those in need.",
    icon: Gift,
    gradient: "linear-gradient(135deg, #caa14d 0%, #b88d3a 100%)",
    cta: "Donate Now",
    action: "donate",
  },
  {
    title: "Corporate Partnership",
    description:
      "Partner with CIN to create sustainable community impact while enhancing your corporate social responsibility goals.",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, #684078 0%, #5d2b7a 100%)",
    cta: "Explore Partnership",
    action: "partner",
  },
  {
    title: "Sponsor an Event",
    description:
      "Support our outreach events, medical missions, and empowerment schemes to maximize community impact.",
    icon: Calendar,
    gradient: "linear-gradient(135deg, #5d2b7a 0%, #caa14d 100%)",
    cta: "Sponsor Event",
    action: "sponsor",
  },
  {
    title: "Organize a Fundraiser",
    description:
      "Rally your network to support CIN by organizing fundraising activities in your community or workplace.",
    icon: Trophy,
    gradient: "linear-gradient(135deg, #caa14d 0%, #b88d3a 100%)",
    cta: "Start Fundraiser",
    action: "fundraise",
  },
  {
    title: "Professional Services",
    description:
      "Contribute your professional skills in areas like healthcare, education, IT, or business to strengthen our operations.",
    icon: Building,
    gradient: "linear-gradient(135deg, #684078 0%, #caa14d 100%)",
    cta: "Offer Services",
    action: "services",
  },
]);

const impactStories = ref([
  {
    icon: Utensils,
    title: "2,500+ Meals Served",
    description:
      "Providing nutritious meals to vulnerable families and communities across Sample Region.",
    image: "/assets/images/about4.jpg",
  },
  {
    icon: Stethoscope,
    title: "15+ Medical Missions",
    description:
      "Delivering essential healthcare services to underserved populations and aged individuals.",
    image: "/assets/images/about3.jpg",
  },
  {
    icon: GraduationCap,
    title: "500+ Lives Empowered",
    description:
      "Creating opportunities through scholarships, skills training, and business support.",
    image: "/assets/images/about.jpg",
  },
]);

const impactAreas = ref([
  {
    title: "Food Distribution",
    description: "Provide nutritious meals to vulnerable communities",
    icon: Utensils,
    iconBg: "from-gman-purple-500 to-gman-purple-600",
  },
  {
    title: "Empowerment Programs",
    description: "Skills training and livelihood support",
    icon: Users,
    iconBg: "from-gman-gold-400 to-gman-gold-500",
  },
  {
    title: "Medical Missions",
    description: "Healthcare services for underserved populations",
    icon: Stethoscope,
    iconBg: "from-gman-purple-500 to-gman-gold-500",
  },
]);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const copied = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  showSuccessMessage.value = false;
  showErrorMessage.value = false;

  try {
    const templateParams = {
      to_name: "Admin",
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: `Get Involved: ${formData.value.interest}`,
      message: `Phone: ${formData.value.phone || "Not provided"}\n\nInterest: ${formData.value.interest}\n\nMessage:\n${formData.value.message}`,
      to_email: "hello@example.com",
      reply_to: formData.value.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    if (response.status === 200) {
      showSuccessMessage.value = true;
      formData.value = {
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      };
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 5000);
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    showErrorMessage.value = true;
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};

const handleCardClick = (action, title) => {
  if (action === "donate") {
    scrollToDonation();
  } else {
    formData.value.interest = title;
    scrollToForm();
  }
};

const scrollToWays = () => {
  const element = document.getElementById("ways-to-help");
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const scrollToDonation = () => {
  const element = document.getElementById("donation-section");
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const scrollToForm = () => {
  const element = document.getElementById("contact-form");
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const copyAccountNumber = async () => {
  try {
    await navigator.clipboard.writeText("1224220999");
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
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

@keyframes float-reverse {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-40px, -40px) scale(1.08);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.08;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.18;
    transform: scale(1.15);
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

.animate-float-reverse {
  animation: float-reverse 22s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 15s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 20s ease-in-out infinite;
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
