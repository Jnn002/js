import data from "/src/data/data.json";
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

const convertNumber = number => {
    if (number >= 10000) {
        return `${number / 1000}k`;
    } else {
        return number;
    }
};

export const OverviewContainer = () => {
    return (
        <section className="max-w-[1440px] absolute top-[191px] mx-auto left-0 right-0 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.overview.map(item => (
                    <OverviewCard
                        key={item.id}
                        user={item.user}
                        audience={convertNumber(item.audience)}
                        audienceType={item.audienceType}
                        network={item.network}
                        isUp={item.isUp}
                        today={item.today}
                    />
                ))}
            </div>
        </section>
    );
};

export const OverviewTodayContainer = () => {
    return (
        <section>
            <h2 className=" text-2xl font-bold mb-5 mt-5 dark:text-white text-very-dark-blue-top px-6">
                Overview Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
                {data["overview-today"].map(item => (
                    <OverviewTodayCard
                        key={item.id}
                        network={item.network}
                        statsType={item.statsType}
                        stats={convertNumber(item.stats)}
                        porcentage={item.porcentage}
                        isUp={item.isUp}
                    />
                ))}
            </div>
        </section>
    );
};
