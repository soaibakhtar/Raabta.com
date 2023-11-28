const navbar = () => {
    return `<nav class="flex items-center justify-between px-5 lg:px-12 h-16 w-full">
    <a href="#" class="text-2xl font-bold border-2 px-2 py-1">Raabta</a>
    <div class="dropdown-menu top-[-320px] absolute -top-full left-0 max-lg:bg-[#fff] w-full flex flex-col gap-6 items-center py-3 text-lg font-bold lg:static lg:flex-row lg:justify-between">
        <div></div>
        <ul class="flex flex-col gap-4 lg:flex-row lg:gap-8">
            <li class="hover:text-gray-400"><a href="./">Home</a></li>
            <li class="hover:text-gray-400"><a href="./about.html">About</a></li>
            <li class="hover:text-gray-400"><a href="">Service</a></li>
            <li class="hover:text-gray-400"><a href="">Gallery</a></li>
            <li class="hover:text-gray-400"><a href="">Contact</a></li>
        </ul>

        <div class="flex flex-row gap-4">
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fa-brands fa-square-x-twitter"></i></a>
        </div>
    </div>
    <div class="toggle-button lg:hidden">
        <i class="fa-solid fa-bars fa-lg"></i>
    </div>
</nav>`
}

export {navbar};