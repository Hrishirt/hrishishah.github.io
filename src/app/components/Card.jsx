/* eslint-disable @next/next/no-img-element */
export default function Card({ children, imageSource, ...props }) {
    return (
        <div {...props} className="relative w-full sm:w-80 max-w-xs overflow-hidden rounded-2xl shadow-lg group">
            <div className="relative w-full h-48">
                <img src={imageSource} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <div className="relative bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="text-[#ADB7Be]">
                    {children}
                </div>
            </div>
        </div>
    );
}

