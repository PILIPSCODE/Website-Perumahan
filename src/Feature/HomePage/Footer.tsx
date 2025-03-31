export default function Footer() {
    return (
        <footer className="bg-[#006A71] text-white font-medium">
            <div className=" text-center text-lg border-t border-white/20 pt-6">
                © {new Date().getFullYear()} Nexora. All rights reserved.
                <div className="py-6 flex justify-center  gap-6 text-xl">
                    <a href="#" className="hover:text-gray-300">Facebook</a>
                    <a href="#" className="hover:text-gray-300">Instagram</a>
                    <a href="#" className="hover:text-gray-300">Twitter</a>
                </div>
            </div>
        </footer>
    );
}