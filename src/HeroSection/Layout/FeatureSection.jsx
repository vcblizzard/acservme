// Acservme
// FeatureSection.jsx
//  Created By Adam Permana on 09/05/23

import {
  UserGroupIcon,
  WrenchIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "HIGHLY-TRAINED STAF",
    description:
      "Tenaga ahli yang profesional handal, terpercaya dan terjamin kenyamanan untuk pelanggan.",
    icon: UserGroupIcon,
  },
  {
    name: "QUALITY SERVICE",
    description:
      "Biaya servis terjangkau dengan kualitas dan pelayanan terbaik untuk kebutuhan Anda.",
    icon: WrenchIcon,
  },
  {
    name: "FAST & EFFECTIVE SERVICE",
    description: "Layanan profesional dengan pengerjaan cepat dan responsif.",
    icon: ClockIcon,
  },
  {
    name: "PAYMENT SECURITY",
    description: "Keamanan pembayaran terjamin.",
    icon: ShieldCheckIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Jasa Service AC Terpercaya di Jakarta, harga terjangkau &
            bergaransi.
          </p>
          <p className="mt-6 text-lg leading-normal text-gray-600 whitespace-pre-line">
            ACSERVME adalah perusahaan yang bergerak di bidang pelayanan servis
            atau jasa perbaikan (service), pencucian, bongkar pasang, perawatan
            hingga instalasi AC (Air Conditioner). Dikerjakan oleh teknisi
            profesional yang terpercaya serta berpengalaman sehingga siap
            memberikan pelayanan terbaik dengan cepat dan hasil berkualitas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 pb-5 shadow-lg shadow-zinc-150">
                <dt className="text-base font-semibold leading-7 text-gray-900 mt-7">
                  {/* Icon */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#519de8] mt-7 ml-3">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                {/* ICON Deskripsi */}
                <dd className="mt-2 text-base leading-7 text-gray-600 mr-3">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
