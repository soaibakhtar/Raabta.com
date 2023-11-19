const footer = () => {
    return `
    <div class="flex flex-col gap-10 px-5 lg:px-12 py-5 border-2">
    <div class="flex flex-col gap-10 justify-between md:flex-row">
        <div class="flex flex-col w-full md:w-1/4 gap-5">
            <a href="/" class="text-2xl font-bold border-2">Raabta</a>
            <p>We at RAABTA create opportunities of connection in different verticals like Performing Arts, Cultural Heritage, Language, Education, Profession, Technology etc.</p>
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex border-2 border-black justify-center items-center">
                <div class="px-10 py-5 bg-[#00000030] text-4xl">
                    <i class="fa-solid fa-location"></i>
                </div>
                <div class="px-2">
                    <p>100 highland ave,</p>
                    <h3 class="text-l font-bold">California, United State</h3>
                </div>
            </div>
            <div class="flex border-2 border-black justify-center items-center">
                <div class="px-10 py-5 bg-[#00000030] text-4xl">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="px-2">
                    <p>100 highland ave,</p>
                    <h3 class="text-l font-bold">California, United State</h3>
                </div>
            </div>
            <div class="flex border-2 border-black justify-center items-center">
                <div class="px-10 py-5 bg-[#00000030] text-4xl">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="px-2">
                    <p>100 highland ave,</p>
                    <h3 class="text-l font-bold">California, United State</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center md:justify-between border-t border-t-2 border-gray-500 py-2">
        <span>&#169;2018 <a href="/" class="hover:text-gray-400">Raabta</a> all right reserved, made with by <a href="/" class="hover:text-gray-400">AmisoTech Software Pvt. Ltd.</a></span>
        <div class="flex flex-row gap-5">
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-square-x-twitter"></i></a>
        </div>
    </div>
</div>
    `
}

export {footer}