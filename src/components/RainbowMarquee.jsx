const RainbowMarquee = () => {
    return (
        <div className="overflow-hidden w-full py-6 rainbow-bg relative z-10">
            <div className="marquee flex gap-20 text-2xl ubuntu-medium text-black">
                <span>APP DEVELOPMENT</span>
                <span>WEB DEVELOPMENT</span>
                <span>APP DEVELOPMENT</span>
                <span>WEB DEVELOPMENT</span>
                <span>APP DEVELOPMENT</span>
                <span>WEB DEVELOPMENT</span>
                <span>APP DEVELOPMENT</span>
                <span>WEB DEVELOPMENT</span>
            </div>
        </div>
    );
};

export default RainbowMarquee;