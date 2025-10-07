import { FaTiktok } from "react-icons/fa6";

const Splash = () => {
    return (
        <div className="bg-black h-screen flex flex-col items-center justify-center gap-6">
            <FaTiktok className="text-4xl" />
            <p className="text-2xl font-bold">TikTok</p>
        </div>
    )
}

export default Splash;