/* eslint-disable @next/next/no-img-element */
export default function Card({ children, imageSource, ...props }) {
    return (
        <div {...props} className="relative w-full sm:w-80 max-w-xs overflow-hidden rounded-2xl shadow-lg group">
            <img src={imageSource} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent">
                <div className="p-4 text-white">{children}</div>
            </div>
        </div>
    );
}
