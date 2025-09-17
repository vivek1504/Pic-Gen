import "../customCSS/loader.css"; // custom animations

const Loader = () => {
    const letters = "Generating".split("");

    return (
        <div className="relative flex items-center justify-center w-44 h-44 font-inter text-white text-lg font-light rounded-full select-none">
            {/* Rotating background */}
            <div className="loader absolute top-0 left-0 w-full aspect-square rounded-full bg-transparent z-0"></div>

            {/* Animated letters */}
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`loader-letter inline-block z-10`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default Loader;