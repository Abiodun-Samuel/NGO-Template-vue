<template>
  <section></section>
  <section class="relative bg-white overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-purple-50/30"
      ></div>

      <!-- Animated orbs -->
      <div
        class="absolute -top-40 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-gman-purple-100/40 to-transparent rounded-full blur-3xl animate-float-gentle"
      ></div>
      <div
        class="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-gman-gold-100/40 to-transparent rounded-full blur-3xl animate-float-gentle-delayed"
      ></div>

      <!-- Sophisticated pattern -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>
    </div>

    <div
      class="relative container mx-auto px-4 lg:px-8 py-12 sm:py-20 lg:py-32"
    >
      <!-- Mission Section -->
      <div
        class="mb-16 sm:mb-20 lg:mb-28"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          <!-- Visual Card -->
          <div
            class="relative flex flex-col"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div
              class="relative flex-1 bg-gradient-to-br from-gman-purple-600 via-gman-purple-700 to-gman-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[500px] sm:min-h-[550px]"
            >
              <!-- Pattern overlay -->
              <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0 bg-radial-pattern"></div>
              </div>

              <!-- Decorative shapes -->
              <div
                class="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gman-gold-400/10 rounded-full blur-3xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-2xl"
              ></div>

              <div
                class="relative flex-1 flex flex-col justify-center space-y-6 sm:space-y-8"
              >
                <!-- Icon -->
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30 shadow-xl"
                >
                  <Heart
                    :size="32"
                    :stroke-width="2"
                    class="text-white sm:w-10 sm:h-10"
                  />
                </div>

                <!-- Headline -->
                <div>
                  <h3
                    class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 sm:mb-4"
                  >
                    Transforming Lives Through Compassion
                  </h3>
                  <div
                    class="h-1 sm:h-1.5 w-20 sm:w-28 bg-gman-gold-400 rounded-full"
                  ></div>
                </div>

                <!-- Description -->
                <p
                  class="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed"
                >
                  Building hope and creating lasting impact in communities
                  across Sample Region with dignity and unwavering commitment.
                </p>

                <!-- Stats Grid -->
                <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
                  <div
                    v-for="stat in stats"
                    :key="stat.label"
                    class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 transition-transform duration-300 hover:scale-105"
                  >
                    <div
                      class="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1"
                    >
                      {{ stat.value }}
                    </div>
                    <div
                      class="text-xs sm:text-sm text-purple-100 leading-tight"
                    >
                      {{ stat.label }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission Text -->
          <div class="flex flex-col" data-aos="fade-left" data-aos-delay="300">
            <div
              class="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div class="space-y-4 sm:space-y-6">
                <!-- Mission Description -->
                <div
                  class="prose prose-base sm:prose-lg max-w-none space-y-4 sm:space-y-6"
                >
                  <p
                    class="text-base sm:text-lg text-stone-700 leading-relaxed"
                  >
                    <span
                      class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gman-purple-600 via-gman-purple-500 to-gman-gold-600"
                    >
                      Community Impact Network (CIN)
                    </span>
                    stands as the compassionate Mission and Outreach extension
                    of Community Outreach Collective.
                  </p>

                  <p
                    class="text-base sm:text-lg text-stone-700 leading-relaxed"
                  >
                    Our unwavering mandate is to address the urgent needs of the
                    impoverished and most vulnerable in our society. Through the
                    years, we have orchestrated impactful outreach events,
                    focusing on initiatives like free food distribution.
                  </p>

                  <p
                    class="text-base sm:text-lg text-stone-700 leading-relaxed"
                  >
                    We take pride in fostering empowerment through various
                    schemes tailored for women and children, including
                    scholarships and business opportunities. At CIN, we believe
                    in transforming lives and creating a future filled with hope
                    and opportunity for all.
                  </p>
                </div>

                <!-- CAC Registration Box -->
                <div class="mt-6 sm:mt-8">
                  <div
                    class="relative group overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100/80 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow transition-all duration-500 border-2 border-purple-200"
                  >
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 opacity-[0.03]">
                      <div class="absolute inset-0 bg-radial-dots"></div>
                    </div>

                    <!-- Glow effects -->
                    <div
                      class="absolute -top-24 -right-24 w-48 h-48 bg-gman-purple-300/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"
                    ></div>
                    <div
                      class="absolute -bottom-12 -left-12 w-32 h-32 bg-gman-gold-200/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"
                    ></div>

                    <div
                      class="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
                    >
                      <!-- Icon -->
                      <div class="flex-shrink-0">
                        <div
                          class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gman-purple-500 to-gman-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        >
                          <Shield
                            :size="24"
                            :stroke-width="2.5"
                            class="text-white sm:w-7 sm:h-7"
                          />
                        </div>
                      </div>

                      <!-- Content -->
                      <div class="flex-1 min-w-0">
                        <div class="mb-3">
                          <h4
                            class="text-base sm:text-lg font-semibold text-stone-700 mb-1 leading-tight"
                          >
                            Officially Registered Organization
                          </h4>
                          <div
                            class="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-gman-purple-500 to-gman-gold-500 rounded-full"
                          ></div>
                        </div>

                        <p
                          class="text-xs sm:text-sm text-stone-700 mb-4 leading-relaxed"
                        >
                          Community Impact Network (CIN) is registered as a
                          corporate body with the Corporate Affairs Commission
                          (CAC), Sample Region.
                        </p>

                        <div
                          class="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full border-2 border-gman-purple-300 shadow group-hover:border-gman-purple-400 transition-all duration-300"
                        >
                          <FileCheck
                            :size="16"
                            class="text-gman-purple-600 flex-shrink-0"
                          />
                          <span
                            class="text-xs sm:text-sm font-bold text-stone-700 whitespace-nowrap"
                            >Registration No:</span
                          >
                          <span
                            class="text-sm sm:text-base font-semibold text-gman-purple-700 tracking-wide"
                            >171300</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Shine effect -->
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="" data-aos="fade-up" data-aos-duration="1000">
        <!-- Section Header -->
        <div class="text-center mb-12 sm:mb-16">
          <div
            class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-50 to-amber-50 rounded-full border border-purple-200 mb-4 sm:mb-6"
          >
            <Sparkles :size="14" class="text-gman-purple-600" />
            <span
              class="text-xs font-bold text-stone-700 uppercase tracking-wider"
              >Leadership Team</span
            >
          </div>

          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-stone-900 mb-3 sm:mb-4"
          >
            Meet Our Team
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Dedicated professionals united by compassion, driven by purpose
          </p>
        </div>

        <!-- Team Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="(member, index) in teamMembers"
            :key="member.name"
            class="group cursor-pointer"
            data-aos="zoom-in"
            :data-aos-delay="100 + index * 80"
            @click="openModal(member)"
          >
            <div
              class="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-stone-200 hover:border-gman-purple-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <!-- Image -->
              <div
                class="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300"
              >
                <img
                  :src="member?.image"
                  :alt="member.name"
                  class="w-full h-auto object-cover rounded-2xl sm:rounded-3xl group-hover:scale-110 transition-transform duration-700"
                />

                <!-- Gradient overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"
                ></div>

                <!-- Role badge -->
                <div class="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div
                    :class="[
                      'p-2 sm:p-3 rounded-xl backdrop-blur-xl shadow-xl border border-white/30',
                      member.badgeClass,
                    ]"
                  >
                    <component
                      :is="member.icon"
                      :size="18"
                      class="text-white sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div
                    :class="[
                      'inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-xl mb-2 sm:mb-3 border border-white/30',
                      member.badgeClass,
                    ]"
                  >
                    <component
                      :is="member.icon"
                      :size="12"
                      class="text-white"
                    />
                    <span
                      class="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider"
                    >
                      {{ member.role }}
                    </span>
                  </div>

                  <h3
                    class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight"
                  >
                    {{ member.name }}
                  </h3>
                  <p
                    class="text-xs sm:text-sm text-white/90 line-clamp-2 leading-relaxed"
                  >
                    {{ member.summary }}
                  </p>
                </div>
              </div>

              <!-- Action footer -->
              <div
                class="p-4 sm:p-5 bg-gradient-to-r from-stone-50 via-white to-purple-50/30 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-gman-purple-50 group-hover:to-gman-gold-50 transition-all duration-300"
              >
                <span
                  class="text-xs sm:text-sm font-bold text-stone-700 group-hover:text-gman-purple-700"
                >
                  View Full Profile
                </span>
                <div
                  class="w-7 h-7 sm:w-8 sm:h-8 bg-stone-200 group-hover:bg-gman-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ArrowRight
                    :size="14"
                    class="text-stone-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section
      class="relative py-16 sm:py-20 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 overflow-hidden"
    >
      <!-- Pattern Overlay -->
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
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Make a Lasting Impact?
          </h2>
          <p class="text-lg sm:text-xl text-white/90 mb-8">
            Every contribution, every hour volunteered, every voice raised makes
            a difference. Join us in transforming lives and empowering
            communities across Sample Region.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Member Modal -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedMember"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-lg"
        @click.self="closeModal"
      >
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="selectedMember"
            class="relative bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden shadow-2xl"
          >
            <!-- Close button -->
            <button
              @click="closeModal"
              class="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-stone-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gman-purple-600 transition-all duration-300 shadow-xl group"
            >
              <X
                :size="18"
                class="text-white group-hover:rotate-90 transition-transform duration-300 sm:w-6 sm:h-6"
              />
            </button>

            <!-- Scrollable content -->
            <div class="overflow-y-auto max-h-[90vh] sm:max-h-[85vh]">
              <div class="grid lg:grid-cols-[280px_1fr]">
                <!-- Left Sidebar -->
                <div
                  class="relative bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-8 pb-6 lg:pb-0 flex flex-col"
                >
                  <!-- Pattern overlay -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0 bg-radial-pattern-small"></div>
                  </div>

                  <div class="relative flex-1 flex flex-col">
                    <!-- Avatar -->
                    <div class="mb-4 sm:mb-6">
                      <div class="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-gman-gold-400 to-gman-purple-500 rounded-2xl blur-xl opacity-60"
                        ></div>
                        <img
                          :src="selectedMember?.image"
                          :alt="selectedMember.name"
                          class="relative w-full h-full object-cover rounded-2xl border-4 border-white/20"
                        />
                      </div>
                    </div>

                    <!-- Member Details -->
                    <div class="text-center mb-4 sm:mb-6">
                      <!-- Role Badge -->
                      <div
                        :class="[
                          'inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-xl mb-2 sm:mb-3 border border-white/20',
                          selectedMember.badgeClass,
                        ]"
                      >
                        <component
                          :is="selectedMember.icon"
                          :size="12"
                          class="text-white"
                        />
                        <span
                          class="text-[10px] font-bold text-white uppercase tracking-wider"
                        >
                          {{ selectedMember.role }}
                        </span>
                      </div>

                      <!-- Name -->
                      <h3
                        class="text-base sm:text-lg font-bold text-white mb-2 leading-tight px-2"
                      >
                        {{ selectedMember.name }}
                      </h3>

                      <!-- Summary - Hidden on mobile -->
                      <p
                        class="hidden lg:block text-xs text-stone-300 leading-relaxed"
                      >
                        {{ selectedMember.summary }}
                      </p>
                    </div>

                    <!-- Decorative divider - Hidden on mobile -->
                    <div class="hidden lg:flex items-center gap-2 mb-4">
                      <div
                        class="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"
                      ></div>
                      <component
                        :is="selectedMember.icon"
                        :size="14"
                        class="text-white/40"
                      />
                      <div
                        class="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"
                      ></div>
                    </div>

                    <!-- Quick Info - Hidden on mobile -->
                    <div class="hidden lg:block space-y-2">
                      <div class="flex items-center gap-2 text-stone-400">
                        <div
                          class="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"
                        >
                          <Shield :size="14" class="text-gman-gold-400" />
                        </div>
                        <span class="text-[10px]">CIN Leadership</span>
                      </div>
                      <div class="flex items-center gap-2 text-stone-400">
                        <div
                          class="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center"
                        >
                          <Users :size="14" class="text-gman-gold-400" />
                        </div>
                        <span class="text-[10px]">
                          {{ selectedMember.role }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right Content -->
                <div class="bg-white p-4 sm:p-6 lg:p-10 xl:p-16">
                  <div class="max-w-4xl">
                    <!-- Section Header -->
                    <div class="mb-6 sm:mb-8 lg:mb-10">
                      <div
                        class="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4"
                      >
                        <div
                          class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gman-purple-100 to-gman-gold-100 rounded-xl flex items-center justify-center flex-shrink-0"
                        >
                          <FileText
                            :size="20"
                            class="text-gman-purple-600 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                          />
                        </div>
                        <div class="flex-1 min-w-0">
                          <h4
                            class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-stone-900 truncate"
                          >
                            Professional Background
                          </h4>
                          <div
                            class="h-0.5 sm:h-1 w-12 sm:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-gman-purple-500 to-gman-gold-500 rounded-full mt-1 sm:mt-2"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <!-- Bio Content -->
                    <div
                      class="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
                    >
                      <div
                        v-html="selectedMember.fullBio"
                        class="text-stone-700 leading-relaxed space-y-3 sm:space-y-4 lg:space-y-6 prose-p:text-sm sm:prose-p:text-base lg:prose-p:text-lg prose-p:leading-relaxed prose-strong:text-stone-900 prose-strong:font-normal prose-ul:my-3 sm:prose-ul:my-4 lg:prose-ul:my-6 prose-li:text-sm sm:prose-li:text-base lg:prose-li:text-lg prose-li:leading-relaxed prose-headings:text-stone-900 prose-headings:font-bold prose-headings:text-base sm:prose-headings:text-lg lg:prose-headings:text-xl"
                      ></div>
                    </div>

                    <!-- Bottom Action -->
                    <div
                      class="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-stone-200 flex justify-end"
                    >
                      <button
                        @click="closeModal"
                        class="inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-gman-purple-600 to-gman-purple-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                      >
                        <span>Close</span>
                        <X :size="16" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  Heart,
  Users,
  Shield,
  Crown,
  FileText,
  DollarSign,
  Phone,
  ArrowRight,
  Sparkles,
  X,
  FileCheck,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const selectedMember = ref(null);

const stats = [
  { value: "5000+", label: "Lives Impacted" },
  { value: "50+", label: "Communities" },
  { value: "2500+", label: "Meals Served" },
];

const openModal = (member) => {
  selectedMember.value = member;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedMember.value = null;
  document.body.style.overflow = "";
};

const teamMembers = [
  {
    name: "Caleb Adewunmi Dabiri",
    role: "Chairman",
    image: "/assets/images/team/2.png",
    icon: Crown,
    badgeClass:
      "bg-gradient-to-r from-gman-purple-500/95 to-gman-purple-600/95",
    summary:
      "International/Global Immigration Expert with Master's of Law in International Law...",
    fullBio: `
      <p>Caleb is an <strong>International/Global Immigration Expert</strong> with a deep commitment to upholding legal standards and a passion for International Law.</p>
      
      <p>As a holder of a <strong>Master's of Law in International Law</strong> and with several years of experience working in European Union/Irish frontline services, Caleb is proficient in <strong>labour and employment law, legal assistance, and legal research</strong>.</p>
      
      <p>Known for ensuring that every case is addressed with precision and respect for individual dignity, he brings a deep understanding of Irish, UK and EU corporate immigration issues, sponsor licence management, ILR, Business Visitor, Family Members and EEA Applications.</p>
      
      <p>A <strong>Fellow of the Institute of Management Consultants (FIMC)</strong> and <strong>Certified Management Consultant (CMC)</strong>, Caleb thrives when managing high-volume caseloads efficiently whilst delivering exceptional service to his internal and external clients.</p>
      
      <p>Caleb's background in <strong>Project Management</strong> and commitment to continuous self-improvement has imbued him with strong communication, analytical, and problem-solving skills. Equally comfortable working independently or as part of a team, his expertise is continually sharpened by engaging with diverse cases requiring an astute application of policies and legislation.</p>
    `,
  },
  {
    name: "Mary Adewunmi",
    image: "/assets/images/team/1.png",
    role: "Secretary",
    icon: FileText,
    badgeClass: "bg-gradient-to-r from-gman-gold-500/95 to-gman-gold-600/95",
    summary:
      "Resident Pastor and Social Care Practitioner with honours from TU Dublin",
    fullBio: `
      <p>The <strong>Resident Pastor</strong> of Community Outreach Collective Adamstown Co. Dublin.</p>
      
      <p>A <strong>Social Care Practitioner</strong> with honours degree in Applied Social Care Practice from the Technological University of Dublin.</p>
      
      <p>Mary functions in the role of <strong>Secretary of CIN</strong>, bringing her pastoral care expertise and social care knowledge to support the organization's mission of serving vulnerable communities with compassion and professionalism.</p>
    `,
  },
  {
    name: "Oluwadamilare Ojo",
    role: "Financial Treasurer",
    image: "/assets/images/team/4.jpg",
    icon: DollarSign,
    badgeClass: "bg-gradient-to-r from-gman-purple-500/95 to-gman-gold-500/95",
    summary: "UI Designer and Finance Expert from Ajayi Crowther University",
    fullBio: `
      <p>A <strong>User-interface Designer</strong> who enjoys using his skills to contribute to the exciting technological advances that happen every day.</p>
      
      <p>A proud graduate of <strong>Ajayi Crowther University Oyo</strong>, with <strong>Accounting and Finance honours degree</strong>.</p>
      
      <p>Oluwadamilare functions as the <strong>Financial Treasurer of CIN</strong>, combining his design expertise with financial acumen to ensure transparent and effective management of the organization's resources, while bringing a modern, tech-forward approach to financial stewardship.</p>
    `,
  },
  {
    name: "Olabisi Adegoke-Dabiri",
    role: "Board Member",
    image: "/assets/images/team/6.png",
    icon: Users,
    badgeClass: "bg-gradient-to-r from-gman-gold-500/95 to-gman-purple-500/95",
    summary:
      "Veteran broadcaster with 35 years at NTA, Order of John Wesley member",
    fullBio: `
      <p>A <strong>retired public servant</strong> having worked with the <strong>Sample Regionn Television Authority, Ibadan</strong> in the programs division for <strong>35 years</strong>.</p>
      
      <p>Olabisi is a serving member of the <strong>Methodist Church Sample Region</strong> and was honoured as a member of the <strong>Order of John Wesley</strong>.</p>
      
      <p>An alumnus of the prestigious <strong>University of Ibadan</strong>, Olabisi brings decades of media, communications, and public service experience to CIN's board, providing invaluable guidance on outreach and community engagement.</p>
    `,
  },
  {
    name: "Olubukola Odu",
    image: "/assets/images/team/5.png",
    role: "Board Member",
    icon: Users,
    badgeClass: "bg-gradient-to-r from-gman-purple-500/95 to-gman-gold-500/95",
    summary:
      "Multifaceted professional in law, communication, and human development",
    fullBio: `
      <p>A <strong>dynamic and multifaceted professional</strong>, bringing a wealth of experience spanning over a decade in <strong>law, communication, and human development</strong>.</p>
      
      <p>Her commitment to excellence, coupled with her passion for sharing knowledge that promotes individual growth, makes her a valuable asset in any endeavour she chooses to undertake.</p>
      
      <p>She enjoys <strong>creative ideation, problem-solving</strong> for individuals and businesses, communication, and personal and professional development for individuals.</p>
      
      <p>With years of <strong>leadership and stakeholder management experience</strong>, she brings strategic insight, innovative thinking, and a people-centered approach to CIN's mission of empowering communities.</p>
    `,
  },
  {
    name: "Oluwasheun Dele Ige",
    image: "/assets/images/team/3.jpg",
    role: "Board Member",
    icon: Users,
    badgeClass: "bg-gradient-to-r from-gman-gold-500/95 to-gman-purple-500/95",
    summary:
      "Project Management Expert, Media Host, with 20+ years global experience",
    fullBio: `
      <p><strong>Non-Executive Director</strong> at Community Impact Network (CIN) with more than <strong>20 years of experience</strong> in project management, advisory, adjudication, and arbitration support for Fortune 500 and multinational companies across continents.</p>
      
      <p>Sheun hosts a show called <strong>EXCELLENT MINDSET</strong> on radio and television stations across Africa, Europe, and the Middle East, teaching young professionals and entrepreneurs how to develop excellent leadership skills using biblical principles.</p>
      
      <p><strong>Academic Excellence:</strong></p>
      <ul>
        <li>Bachelor of Science in Industrial Chemistry - University of Ilorin</li>
        <li>Advanced Diploma in Project Management - University of Cape Town</li>
        <li>Master of Laws (LLM) in Construction Law and Arbitration - Robert Gordon University</li>
        <li>MSc in Project Management in Construction - The University of Salford</li>
        <li>Alumnus of Western University, Canada</li>
      </ul>
      
      <p>His diverse expertise in project management, legal frameworks, and leadership development makes him an invaluable strategic advisor to CIN's initiatives.</p>
    `,
  },
];
</script>

<style scoped>
@keyframes float-gentle {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-40px, 40px) scale(1.08);
  }
}

@keyframes float-gentle-delayed {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(40px, -40px) scale(0.92);
  }
}

.animate-float-gentle {
  animation: float-gentle 28s ease-in-out infinite;
}

.animate-float-gentle-delayed {
  animation: float-gentle-delayed 32s ease-in-out infinite;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(120, 53, 15, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 53, 15, 0.15) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-radial-pattern {
  background-image: radial-gradient(
    circle at 2px 2px,
    white 2px,
    transparent 0
  );
  background-size: 40px 40px;
}

.bg-radial-dots {
  background-image: radial-gradient(
    circle at 2px 2px,
    rgb(124, 58, 237) 1.5px,
    transparent 0
  );
  background-size: 32px 32px;
}

.bg-radial-pattern-small {
  background-image: radial-gradient(
    circle at 2px 2px,
    white 1px,
    transparent 0
  );
  background-size: 30px 30px;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
