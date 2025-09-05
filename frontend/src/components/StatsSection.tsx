import CountUp from "react-countup";

const StatsSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="text-center space-y-2">
                        <CountUp
                            start={10100}
                            useEasing
                            useGrouping
                            end={4563090}
                            duration={0.9}
                            className="text-6xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-white">

                        </CountUp>
                        <span className="text-6xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-white">
                            +
                        </span>
                        <div className="text-muted-foreground text-lg font-medium tracking-wide">
                            ACTIVE CREATORS
                        </div>

                    </div>
                    <div className="text-center space-y-2">
                        <CountUp
                            start={10100}
                            useEasing
                            useGrouping
                            end={803893847}
                            duration={0.9}
                            className="text-6xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-white">

                        </CountUp>
                        <span className="text-6xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-white">
                            +
                        </span>
                        <div className="text-muted-foreground text-lg font-medium tracking-wide">
                            IMAGES GENERATED
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;