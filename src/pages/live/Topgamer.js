import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Topgamer = () => {
  return (
    <section class="bg-[#181921] text-white py-20" data-aos="fade-up" data-aos-delay="200">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col  items-center justify-center" data-aos="fade-up" data-aos-delay="400">
          <div class="w-full md:w-1/2">
            <h2 class="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="600">Top Gamers</h2>
            <p class="text-lg text-white mb-12" data-aos="fade-up" data-aos-delay="800">These are the top gamers in our community.</p>
          </div>
          <div class="w-full md:w-1/2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="1000">
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="1200">
                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="1400">John Doe</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="1600">Gamer</p>
              </div>
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="1800">
                <img src="https://pagedone.io/asset/uploads/1696238665.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="2000">Jane Doe</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="2200">Gamer</p>
              </div>
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="2400">
                <img src="https://pagedone.io/asset/uploads/1696238684.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="2600">Bob Smith</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="2800">Gamer</p>
              </div>
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="3000">
                <img src="https://pagedone.io/asset/uploads/1696238702.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="3200">Alice Johnson</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="3400">Gamer</p>
              </div>
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="3600">
                <img src="https://pagedone.io/asset/uploads/1696238720.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="3800">Mike Brown</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="4000">Gamer</p>
              </div>
              <div class="bg-[#181921] hover:bg-[#2f3640] p-4 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="4200">
                <img src="https://pagedone.io/asset/uploads/1696238737.png" alt="Profile picture"
                  class="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 class="text-lg font-semibold text-[#f1f1f1] text-center mt-4" data-aos="fade-up" data-aos-delay="4400">Emily Davis</h3>
                <p class="text-sm text-[#f1f1f1] text-center" data-aos="fade-up" data-aos-delay="4600">Gamer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topgamer

