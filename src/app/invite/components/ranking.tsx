import Image from 'next/image'

import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'
import medalCopper from '../../../assets/medal-copper.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440x] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Kauê Cavalcante
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalGold} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Kauê Cavalcante
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalSilver} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Kauê Cavalcante
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalCopper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
