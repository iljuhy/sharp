"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";


export default function Home() {
  const main = useRef(null);
  const boxcRef = useRef(null);
  const boxcTextRef = useRef(null);

  // Run GSAP animations only after hydration
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-height: 750px) and (min-width: 769px)");
        if (mediaQuery.matches) {
            gsap.registerPlugin(ScrollTrigger);

         

            ScrollTrigger.create({
            trigger: boxcRef.current,
            pin: true,
            start: "center center",
            end: "+=1500",
            markers: false,
            onUpdate: (self) => {
                const boxText = boxcTextRef.current;

                if (self.progress > 0.33 && self.progress <= 0.66) {
                boxText.className = styles.active2;
                } else if (self.progress > 0.66) {
                boxText.className = styles.active3;
                } else {
                boxText.className = ""; // Reset class
                }
            },
            });
            ScrollTrigger.normalizeScroll({
                allowNestedScroll: true,
                lockAxis: false,
                momentum: self => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling
                type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
            });
        }
    }, []);


    const [activeButton, setActiveButton] = useState('monthly');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    
  return (
    
    
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div className={styles.page}>
            <header className={styles.header}>
                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween}`}>
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Sharp logo"
                    width={86}
                    height={28}
                />
                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.headerRight}`}>
                    <button className={`${styles.p3} ${styles.btn} ${styles.transparent}`}>Log In</button>
                    <button className={`${styles.p3} ${styles.btn} ${styles.primary}`}>Register</button>
                </div>
                </div>
            </header>
            <main className={styles.main} ref={main}>
                <div className={`${styles.section} ${styles.heroSection}`}>
                <Image
                    className={styles.heroBgImg}
                    src="/heroBg.png"
                    alt="Hero bg img"
                    width={2418}
                    height={2705}
                />
                <Image
                
                    className={`${styles.heroBgImg} ${styles.mob}`}
                    src="/heroBgMob.png"
                    alt="Hero bg img mob"
                    width={1846}
                    height={1998}
                />
                <div className={`${styles.sectionWrapper} ${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween}`}>
                    <div className={styles.heroLeft}>
                    <h1 className={styles.h1}>Elevate Your Game, Unless Your Pro</h1>
                    <p className={`${styles.p1} ${styles.colorBeige} `}>Browse, analyze, and confidently execute on +EV bets</p>
                    <button className={`${styles.p1} ${styles.btn} ${styles.secondary}`}>Get Started</button>
                    </div>
                    <div className={styles.heroRight}>
                    <Image
                        className={styles.heroImg}
                        src="/hero.png"
                        alt="Hero img"
                        width={2034}
                        height={2304}
                    />
                    </div>
                </div>
                </div>
                <div className={styles.ticker}>
                    <div className={styles.tickerWrapper}>
                        <div className={styles.tickerMove}>
                        {Array.from({ length: 4 }).map((_, index) => (
                        <Image
                            key={index}
                            className={styles.tickerImg}
                            src="/ticker.svg"
                            alt="Ticker img"
                            width={1444}
                            height={44}
                        />
                        ))}
                        </div>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.featureSection}`}>
                    <Image
                        className={`${styles.mob} ${styles.featureBg}`}
                        src="/featureBgMob.png"
                        alt="Feature bg img mob"
                        width={1855}
                        height={2697}
                    />
                    <div className={styles.sectionWrapper}>
                        <div className={`${styles.flex} ${styles.itemsCenter} ${styles.featureItem}`}>
                            <div className={styles.featureText}>
                                <p className={`${styles.p1} ${styles.colorSoftLavander}`}>01</p>
                                <h4 className={`${styles.h4} ${styles.colorSoftLavander}`}>Realtime Odds & Markets</h4>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Browse & monitor realtime odds from over 60 sportsbooks and thousands of betting markets.</p>
                            </div>
                            <div className={styles.featureImgContainer}>
                                <Image
                                    className={styles.featureLogos}
                                    src="/featureLogos.png"
                                    alt="Feature logos 1 img"
                                    width={766}
                                    height={775}
                                />
                                <Image
                                    className={styles.featureImg}
                                    src="/feature1.png"
                                    alt="Feature 1 img"
                                    width={636}
                                    height={320}
                                />
                                <Image
                                    className={`${styles.featureLogos} ${styles.mob}`}
                                    src="/featureLogosMob.png"
                                    alt="Feature logos 1 mob img"
                                    width={386}
                                    height={466}
                                />
                                <Image
                                    className={styles.featureImgMob}
                                    src="/feature1Mob.png"
                                    alt="Feature 1 img mob"
                                    width={636}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className={`${styles.flex} ${styles.itemsCenter} ${styles.featureItem}`}>
                            <div className={styles.featureText}>
                                <p className={`${styles.p1} ${styles.colorSoftLavander}`}>02</p>
                                <h4 className={`${styles.h4} ${styles.colorSoftLavander}`}>Proptimizer +EV props with the Proptimizer</h4>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Discover profitable player props using a hybrid top-down & bottom-up approach! Covering all of the major sportsbooks and pick’ems.</p>
                            </div>
                            <div className={styles.featureImgContainer}>
                                <Image
                                    className={styles.featureImg}
                                    src="/feature2.png"
                                    alt="Feature 2 img"
                                    width={787}
                                    height={602}
                                />
                                <Image
                                    className={styles.featureLogos}
                                    src="/featureLogos2.png"
                                    alt="Feature logos 2 img"
                                    width={333}
                                    height={543}
                                />
                                <Image
                                    className={styles.featureImgMob}
                                    src="/feature2Mob.png"
                                    alt="Feature 2 img mob"
                                    width={630}
                                    height={544}
                                />
                                <Image
                                    className={`${styles.featureLogos} ${styles.mob}`}
                                    src="/featureLogos2Mob.png"
                                    alt="Feature logos 2 img mob"
                                    width={390}
                                    height={540}
                                />
                            </div>
                        </div>
                        <div className={`${styles.flex} ${styles.itemsCenter} ${styles.featureItem}`}>
                            <div className={styles.featureText}>
                                <p className={`${styles.p1} ${styles.colorSoftLavander}`}>03</p>
                                <h4 className={`${styles.h4} ${styles.colorSoftLavander}`}>Beat the lines with the Sharp Report</h4>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Unlock insider knowledge with the Sharp Report. Get a unique look inside of a major sportsbooks liabilities and use it to your advantage!</p>
                            </div>
                            <div className={styles.featureImgContainer}>
                                <Image
                                    className={styles.featureImg}
                                    src="/feature3.png"
                                    alt="Feature 3 img"
                                    width={787}
                                    height={622}
                                />
                                <Image
                                    className={styles.featureLogos}
                                    src="/featureLogos3.png"
                                    alt="Feature logos 3 img"
                                    width={633}
                                    height={523}
                                />
                                <Image
                                    className={styles.featureImgMob}
                                    src="/feature3Mob.png"
                                    alt="Feature 3 img mob"
                                    width={577}
                                    height={545}
                                />
                                <Image
                                    className={`${styles.featureLogos} ${styles.mob}`}
                                    src="/featureLogos3Mob.png"
                                    alt="Feature logos 3 img mob"
                                    width={322}
                                    height={503}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.insightsSection}`}>
                    <Image
                        className={styles.insightsBg}
                        src="/insightsBg.png"
                        alt="Insights bg"
                        width={2775}
                        height={3488}
                    />
                    <Image
                        className={`${styles.mob} ${styles.insightsBg}`}
                        src="/insightsBgMob.png"
                        alt="Insights bg mob"
                        width={2775}
                        height={3488}
                    />
                    <div className={styles.sectionWrapper}>
                        <h2 className={`${styles.h2} ${styles.colorSoftLavander}`}>Maximize Your Sports Betting Insights with Real-Time Data and Analytics</h2>
                        <button className={`${styles.p1} ${styles.btn} ${styles.tertiary}`}>Get Started</button>
                        <div className={styles.insightsImageContainer}>
                        <Image
                            className={styles.insightsImgOverlay}
                            src="/insightsImgOverlay.png"
                            alt="Insights image overlay"
                            width={1126}
                            height={560}
                        />
                        <Image
                            className={styles.insightsImage}
                            src="/insightsImage.png"
                            alt="Insights image"
                            width={984}
                            height={570}
                        />
                        </div>
                        <div className={`${styles.flex} ${styles.insightsList}`}>
                            <div className={styles.insightsItem}>
                                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.insightsIcon}`}>
                                <Image
                                    className={styles.insightsIconImg}
                                    src="/insightsIcon1.svg"
                                    alt="Insights icon 1"
                                    width={28}
                                    height={28}
                                />
                                </div>
                                <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>Real-time Market Updates & Trends</h5>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Bet with confidence, knowing that you have the best line available. Easily compare lines against historical trends and steam.</p>
                            </div>
                            <div className={styles.insightsItem}>
                                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.insightsIcon}`}>
                                <Image
                                    className={styles.insightsIconImg}
                                    src="/insightsIcon2.svg"
                                    alt="Insights icon 1"
                                    width={28}
                                    height={28}
                                />
                                </div>
                                <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>Sportsbook, Pick’em & Fantasy Proptimizers</h5>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Whether you’re betting on the book or playing on a pick’em site, the Proptimizer has you covered.</p>
                            </div>
                            <div className={styles.insightsItem}>
                                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.insightsIcon}`}>
                                <Image
                                    className={styles.insightsIconImg}
                                    src="/insightsIcon3.svg"
                                    alt="Insights icon 3"
                                    width={28}
                                    height={28}
                                />
                                </div>
                                <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>Effortless One-Click Betting Made Easy</h5>
                                <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Found a prop you like? Bet instantly at the sportsbook directly from the Proptimizer with hassle-free betting.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={boxcRef} className={`${styles.section} ${styles.phoneCatSection}`}>
                    <div className={`${styles.flex} ${styles.itemsCenter} ${styles.sectionWrapper}`}>
                        <div className={styles.phoneCatText}>
                            <div ref={boxcTextRef}>
                                <div className={styles.phoneCatTextWrapper}>
                                    <div className={styles.phoneCatItem}>
                                        <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>Proptomizer on the Go</h5>
                                        <p className={`${styles.p2} ${styles.colorSoftLavander}`}>A full featured version of the Proptimizer on your phone so you can find profitable bets on the go!</p>
                                    </div>
                                    <div className={styles.phoneCatItem}>
                                        <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>AI Predictions, Betting Handles, & More</h5>
                                        <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Simulating games over 10,000 times, our AI Prediction model offer sports bettors insightful betting signals that they can use to identify profitable bets! Pair these signals with historical trend ROIs and betting handles to make impactful betting decisions!</p>
                                    </div>
                                    <div className={styles.phoneCatItem}>
                                        <h5 className={`${styles.h5} ${styles.colorSoftLavander}`}>Live Scores, Stats, & More</h5>
                                        <p className={`${styles.p2} ${styles.colorSoftLavander}`}>Follow games live! Access in-game scores, states, markets, & more! No more fumbling between apps!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.phoneCatImgContainer}>
                            <Image
                                className={styles.phoneCatImg}
                                src="/phoneCatImg.png"
                                alt="Phone categories img"
                                width={1515}
                                height={890}
                            />
                            <Image
                                className={styles.phoneCatImgMob}
                                src="/phoneCatImgMob.png"
                                alt="Phone categories img mob"
                                width={1515}
                                height={890}
                            />
                            <Image
                                className={styles.phoneCatBg}
                                src="/phoneCatBg.png"
                                alt="Phone categories bg"
                                width={2418}
                                height={2705}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.socialSection}`}>
                    <div className={styles.sectionWrapper}>
                        <h4 className={`${styles.h4} ${styles.colorSoftLavander}`}>People Love Us</h4>
                        <p className={`${styles.p1} ${styles.colorSoftLavander}`}>With a loyal following of fans on social media and top-rated feedback, our community inspires and supports us every step of the way. Be part of the journey!</p>
                        <div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.socialLinks}`}>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/tiktok.svg"
                                    alt="Social icon 1"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/x.svg"
                                    alt="Social icon 2"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/instagram.svg"
                                    alt="Social icon 3"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/fb.svg"
                                    alt="Social icon 4"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/discord.svg"
                                    alt="Social icon 5"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a className={styles.socialIcon} href="#" target="_blank">
                                <Image
                                    className={styles.socialItemImg}
                                    src="/socials/youtube.svg"
                                    alt="Social icon 6"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </div>
                        <div className={`${styles.flex} ${styles.socialStat}`}>
                            <div className={styles.socialStatItem}>
                                <Image
                                    className={styles.socialStatImg}
                                    src="/rating.svg"
                                    alt="Rating image"
                                    width={32}
                                    height={32}
                                />
                                <h4 className={styles.h4}>4.9</h4>
                                <p className={styles.p1}>AVERAGE RATING</p>
                            </div>
                            <div className={styles.socialStatItem}>
                                <Image
                                    className={styles.socialStatImg}
                                    src="/followers.svg"
                                    alt="Followers image"
                                    width={32}
                                    height={32}
                                />
                                <h4 className={styles.h4}>7.2K+</h4>
                                <p className={styles.p1}>TOTAL FOLLOWERS</p>
                            </div>
                        </div>
                        <div className={styles.socialCards}>
                            <a href="#" target="_blank" className={styles.socialCard}>
                                <div className={styles.socialCardContent}>
                                <Image
                                    className={styles.socialCardImg}
                                    src="/socailCards/1.png"
                                    alt="Social card image 1"
                                    width={160}
                                    height={160}
                                />
                                <p className={`${styles.p2} ${styles.colorWhite}`}>
                                    <span>PUT👏🏼SOME👏🏼RESPECT👏🏼 ON👏🏼THE👏🏼THE👏🏼SHARP APP's👏🏼 NAME👏🏼 @TheSharpApp <span className={styles.colorSkyBlue}>@TheSharpSurgeon @Statsational @WireDays</span></span>
                                </p>
                                </div>
                                <div className={styles.socialCardAutor}>
                                    <div className={styles.socialCardAutorLeft}>
                                        <div className={styles.socialCardAutorAvatar}>
                                            <Image
                                                className={styles.socialCardAutorImg}
                                                src="/socailCards/avatar1.png"
                                                alt="Social card avatar 1"
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <div className={styles.socialCardAutorText}>
                                            <p className={`${styles.p2} ${styles.colorWhiteSmoke}`}>Snoopdoug</p>
                                            <p className={`${styles.p3} ${styles.colorWhiteSmoke}`}>@PuntingStacks</p>
                                        </div>
                                    </div>
                                    <div className={styles.socialCardIcon}>
                                        <Image
                                            className={styles.socialCardImg}
                                            src="/socials/x.svg"
                                            alt="Social icon x"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" className={styles.socialCard}>
                                <div className={styles.socialCardContent}>
                                    <Image
                                        className={styles.socialCardImg}
                                        src="/socailCards/2.png"
                                        alt="Social card image 2"
                                        width={160}
                                        height={160}
                                    />
                                    <p className={`${styles.p2} ${styles.colorWhite}`}>
                                        <span><b>BANGGGGGGGG</b> ✅</span>
                                        <br/>
                                        <span>Keep The Points The Fever Win Out Right 🤑💵 S/O @TheSharpApp Their Top Notch App, Which Incorporates Predictive AI, Had The Line At +2 So The +6.5 Was Easy Cash 💸💵</span>
                                        <br/>
                                        <span className={styles.colorSkyBlue}>#GamblingX #GamblingTwitter</span>
                                    </p>
                                </div>
                                <div className={styles.socialCardAutor}>
                                    <div className={styles.socialCardAutorLeft}>
                                        <div className={styles.socialCardAutorAvatar}>
                                            <Image
                                                className={styles.socialCardAutorImg}
                                                src="/socailCards/avatar2.png"
                                                alt="Social card avatar 2"
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <div className={styles.socialCardAutorText}>
                                            <p className={`${styles.p2} ${styles.colorWhiteSmoke}`}>Bookie Bomber 💣</p>
                                            <p className={`${styles.p3} ${styles.colorWhiteSmoke}`}>@BookieBomber_</p>
                                        </div>
                                    </div>
                                    <div className={styles.socialCardIcon}>
                                        <Image
                                            className={styles.socialCardImg}
                                            src="/socials/x.svg"
                                            alt="Social icon x"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" className={styles.socialCard}>
                                <div className={styles.socialCardContent}>
                                <Image
                                    className={styles.socialCardImg}
                                    src="/socailCards/3.png"
                                    alt="Social card image 3"
                                    width={160}
                                    height={160}
                                />
                                <p className={`${styles.p2} ${styles.colorWhite}`}>
                                    <span>Shout Out <span className={styles.colorSkyBlue}>@TheSharpApp</span> For Helping Me Find Best Plays For My VIPs.</span>
                                    <br/>
                                    <span>The AI Incorporated In The App Gives Me Confidence In All My Plays Raves -3.5✅ Herbert o199.5✅ Cardinals/Chargers u44.5✅ Use The Link Below To Sign Up And Start Finding Winning Bets</span>
                                </p>
                                </div>
                                <div className={styles.socialCardAutor}>
                                    <div className={styles.socialCardAutorLeft}>
                                        <div className={styles.socialCardAutorAvatar}>
                                            <Image
                                                className={styles.socialCardAutorImg}
                                                src="/socailCards/avatar3.png"
                                                alt="Social card avatar 3"
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <div className={styles.socialCardAutorText}>
                                            <p className={`${styles.p2} ${styles.colorWhiteSmoke}`}>Bookie Bomber 💣</p>
                                            <p className={`${styles.p3} ${styles.colorWhiteSmoke}`}>@BookieBomber_</p>
                                        </div>
                                    </div>
                                    <div className={styles.socialCardIcon}>
                                        <Image
                                            className={styles.socialCardImg}
                                            src="/socials/x.svg"
                                            alt="Social icon x"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" className={styles.socialCard}>
                                <div className={styles.socialCardContent}>
                                    <Image
                                        className={styles.socialCardImg}
                                        src="/socailCards/4.png"
                                        alt="Social card image 4"
                                        width={160}
                                        height={160}
                                    />
                                    <p className={`${styles.p2} ${styles.colorWhite}`}>
                                    Thank you! @TheSharpApp @the_schwami . These slips already paid for my sub. ✅✅💥
                                    </p>
                                    </div>
                                    <div className={styles.socialCardAutor}>
                                    <div className={styles.socialCardAutorLeft}>
                                        <div className={styles.socialCardAutorAvatar}>
                                            <Image
                                                className={styles.socialCardAutorImg}
                                                src="/socailCards/avatar4.png"
                                                alt="Social card avatar 4"
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <div className={styles.socialCardAutorText}>
                                        <p className={`${styles.p2} ${styles.colorWhiteSmoke}`}>ChevyPicks 🏈 🦍 🏀</p>
                                        <p className={`${styles.p3} ${styles.colorWhiteSmoke}`}>@ChevyPicks</p>
                                        </div>
                                    </div>
                                    <div className={styles.socialCardIcon}>
                                        <Image
                                        className={styles.socialCardImg}
                                        src="/socials/x.svg"
                                        alt="Social icon x"
                                        width={24}
                                        height={24}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.pricingSection}`}>
                    <Image
                        className={`${styles.mob} ${styles.pricingBg}`}
                        src="/pricingBg.png"
                        alt="Pricing bg"
                        width={2418}
                        height={2705}
                    />
                    <div className={styles.sectionWrapper}>
                        <h4 className={`${styles.h4} ${styles.colorWhite}`}>Simple Pricing</h4>
                        <h5 className={`${styles.h5} ${styles.colorWhite}`}>Pick a Plan:</h5>
                        <div className={`${styles.flex} ${styles.justifyCenter} ${styles.pricingButtons}`}>
                            <button 
                                className={`${styles.p3} ${styles.btn} ${styles.gray} ${activeButton === 'monthly' ? styles.bordered : ''}`}
                                onClick={() => handleButtonClick('monthly')}
                            >Monthly</button>
                            <button 
                                className={`${styles.p3} ${styles.btn} ${styles.gray} ${activeButton === 'yearly' ? styles.bordered : ''}`}
                                onClick={() => handleButtonClick('yearly')}
                            >Yearly</button>
                        </div>
                        <div className={styles.pricingList}>
                            <div className={`${styles.flex} ${styles.itemsCenter} ${styles.pricingCard}`}>
                                <div className={styles.pricingCardLeft}>
                                    <Image
                                        className={styles.socialCardImg}
                                        src="/gift.svg"
                                        alt="Gift icon"
                                        width={64}
                                        height={64}
                                    />
                                    <h5 className={`${styles.h5} ${styles.colorWhite}`}>Pro Lite</h5>
                                    <p className={`${styles.p2} ${styles.colorWhite}`}>Essential Betting Tools for the Novice Bettor</p>
                                    <div className={`${styles.mob} ${styles.pricingCardRight}`}>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>+EV Props from the Proptimizer Odds & Markets Screen</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>The Sharp Report (Sportsbook Liabilities)</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>AI Predictions & Betting Handles</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Premium Discord Access & Coaching</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Expert Analysis</p>
                                    </div>
                                    <div className={styles.price}>
                                        <h3 className={`${styles.h3} ${styles.colorGreen}`}>49.99</h3>
                                        <p className={`${styles.p1} ${styles.colorGreen}`}>/month</p>
                                    </div>
                                    <p className={`${styles.p1} ${styles.colorGreen}`}>399.99/year</p>
                                    <button className={`${styles.p1} ${styles.btn} ${styles.greenBtn}`}>Subscribe</button>
                                </div>
                                <div className={styles.pricingCardRight}>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>+EV Props from the Proptimizer Odds & Markets Screen</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>The Sharp Report (Sportsbook Liabilities)</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>AI Predictions & Betting Handles</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Premium Discord Access & Coaching</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Expert Analysis</p>
                                </div>
                            </div>
                            <div className={`${styles.flex} ${styles.itemsCenter} ${styles.pricingCard}`}>
                                <div className={styles.pricingCardLeft}>
                                    <Image
                                        className={styles.socialCardImg}
                                        src="/case.svg"
                                        alt="Case icon"
                                        width={64}
                                        height={64}
                                    />
                                    <h5 className={`${styles.h5} ${styles.colorWhite}`}>Pro+</h5>
                                    <p className={`${styles.p2} ${styles.colorWhite}`}>Realtime Betting Tools for the Advanced Bettor</p>
                                    <div className={`${styles.mob} ${styles.pricingCardRight}`}>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Realtime +EV Props from the Proptimizer</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Odds from Circa Las Vegas, Prime, & more!</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Market based betting tools (coming soon)</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Realtime alerts & notifications (coming soon)</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>Priority Coaching & Support</p>
                                        <p className={`${styles.p1} ${styles.colorWhite}`}>All Pro Lite Features & Access</p>
                                    </div>
                                    <div className={styles.price}>
                                        <h3 className={`${styles.h3} ${styles.colorPink}`}>99.99</h3>
                                        <p className={`${styles.p1} ${styles.colorPink}`}>/month</p>
                                    </div>
                                    <p className={`${styles.p1} ${styles.colorPink}`}>799.99/year</p>
                                    <button className={`${styles.p1} ${styles.btn} ${styles.pinkBtn}`}>Subscribe</button>
                                </div>
                                <div className={styles.pricingCardRight}>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Realtime +EV Props from the Proptimizer</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Odds from Circa Las Vegas, Prime, & more!</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Market based betting tools (coming soon)</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Realtime alerts & notifications (coming soon)</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>Priority Coaching & Support</p>
                                    <p className={`${styles.p1} ${styles.colorWhite}`}>All Pro Lite Features & Access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.sectionWrapper}`}>
                    <div className={styles.footerLeft}>
                        <Image
                            className={styles.logo}
                            src="/logo.svg"
                            alt="Sharp logo"
                            width={86}
                            height={28}
                        />
                        <p className={`${styles.p1} ${styles.colorWhite}`}>Betting Simplified, Profits Maximized</p>
                        <div className={`${styles.flex} ${styles.itemsCenter} ${styles.marketButtons}`}>
                            <a href="#" target="_blank" className={styles.marketLink}>
                                <Image
                                    className={styles.marketImg}
                                    src="/store1.png"
                                    alt="App store logo"
                                    width={168}
                                    height={58}
                                />
                            </a>
                            <a href="#" target="_blank" className={styles.marketLink}>
                                <Image
                                    className={styles.marketImg}
                                    src="/store2.png"
                                    alt="Google play logo"
                                    width={168}
                                    height={58}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.p1}>Links</div>
                        <a href="#" target="_blank" className={styles.p1}>Contact</a>
                        <a href="#" target="_blank" className={styles.p1}>Affiliates</a>
                        <a href="#" target="_blank" className={styles.p1}>Merchandise</a>
                    </div>
                </div>
                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.sectionWrapper}`}>
                    <div className={styles.footerLeft}>
                        <div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.socialLinks}`}>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/tiktok.svg"
                            alt="Social icon 1"
                            width={24}
                            height={24}
                            />
                        </a>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/x.svg"
                            alt="Social icon 2"
                            width={24}
                            height={24}
                            />
                        </a>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/instagram.svg"
                            alt="Social icon 3"
                            width={24}
                            height={24}
                            />
                        </a>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/fb.svg"
                            alt="Social icon 4"
                            width={24}
                            height={24}
                            />
                        </a>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/discord.svg"
                            alt="Social icon 5"
                            width={24}
                            height={24}
                            />
                        </a>
                        <a className={styles.socialIcon} href="#" target="_blank">
                            <Image
                            className={styles.socialItemImg}
                            src="/socials/youtube.svg"
                            alt="Social icon 6"
                            width={24}
                            height={24}
                            />
                        </a>
                        </div>
                    </div>
                    <div className={`${styles.flex} ${styles.footerRight}`}>
                        <a href="#" target="_blank" className={styles.p2}>Privacy Policy</a>
                        <a href="#" target="_blank" className={styles.p2}>Terms of Service</a>
                    </div>
                </div>
                <div className={`${styles.sectionWrapper}`}>
                    <p className={styles.p4}>
                        This website is for entertainment purposes only and does not involve real money wagering.<br/>
                        If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER.<br/>
                        This service is intended for adult users only.
                    </p>
                    <p className={styles.p4}>©2024 Sharp App. All Rights Reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    </div>
  );
}