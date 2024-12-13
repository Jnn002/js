import facebooklogo from "/src/assets/images/icon-facebook.svg";
import twitterlogo from "/src/assets/images/icon-twitter.svg";
import instagramlogo from "/src/assets/images/icon-instagram.svg";
import youtubelogo from "/src/assets/images/icon-youtube.svg";
import iconUp from "/src/assets/images/icon-up.svg";
import iconDown from "/src/assets/images/icon-down.svg";

const networkLogo = {
    Facebook: facebooklogo,
    Twitter: twitterlogo,
    Instagram: instagramlogo,
    YouTube: youtubelogo
};

const networkColor = {
    Facebook: "bg-facebook",
    Twitter: "bg-twitter",
    Instagram: "bg-instagram-gradient",
    YouTube: "bg-youtube"
};

// eslint-disable-next-line react/prop-types
export const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {
    return (
        <article className="bg-light-grayish-blue w-[316px] lg:w-[306px] h-[216px] mb-5 rounded-md mx-auto overflow-hidden text-center dark:bg-dark-desaturated-blue dark:text-white hover:brightness-95 dark:hover:brightness-110 cursor-pointer">
            <div className={`${networkColor[network]} h-1 mb-2`}></div>
            <div className="flex items-center place-content-center gap-2 p-3">
                <img src={networkLogo[network]} alt={`${network} logo`}></img>
                <p className="text-xs text-dark-grayish-blue font-bold">{user}</p>
            </div>
            <p className="text-[56px] font-semibold text-very-dark-blue dark:text-white">{audience}</p>
            <p className="uppercase tracking-[5px] text-very-dark-blue text-s dark:text-desaturated-blue">
                {audienceType}
            </p>
            <div className="flex items-center place-content-center gap-1 mt-1">
                <img src={isUp ? iconUp : iconDown} alt="Icon Arrow Up" />
                <p className={`${isUp ? "text-lime-green" : "text-bright-red"} text-s font-bold`}>{today} today</p>
            </div>
        </article>
    );
};

// eslint-disable-next-line react/prop-types
export const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }) => {
    return (
        <article className="bg-light-grayish-blue w-[316px] lg:w-[306px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] dark:bg-dark-desaturated-blue dark:text-white hover:brightness-95 dark:hover:brightness-110 cursor-pointer">
            <div className="flex justify-between items-center place-content-center gap-2 mb-[21px]">
                <p className="font-semibold">{statsType}</p>
                <img src={networkLogo[network]} alt={`${network} logo`}></img>
            </div>
            <div className="flex justify-between">
                <p className="font-bold text-very-dark-blue dark:text-white text-xl">{stats}</p>
                <div className="flex items-center place-content-center gap-1">
                    <img src={isUp ? iconUp : iconDown} alt="Icon Arrow Up" />

                    <p className={`${isUp ? "text-lime-green" : "text-bright-red"} text-s font-bold`}>
                        {porcentage} Today
                    </p>
                </div>
            </div>
        </article>
    );
};
