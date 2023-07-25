import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

let summary = {};

const News = (props) => {
  const [articles, setArticles] = useState([
    {
      description:
        "Crystal Palace continued their superb run under manager Roy Hodgson as they defeated Southampton 2-0 on Saturday to move nine points clear of the drop zone. The London side now has won three games in a row for the first time this season.\nPalace also maintained their 100% winning record under Hodgson.\nEberechi Eze scored twice to deal a damaging blow to the south-coast club Southampton's Premier League survival hopes.\n\nIn a game between the youngest and oldest managers in the English top flight, it was 75-year-old Roy Hodgson who triumphed over 39-year-old Ruben Selles.\nSouthampton were dominant in the first half but failed to make their chances count while Palace's Michael Olise did have the ball in the back of the net but it was ruled out for offside.\nPalace broke the deadlock nine minutes into the second half when Jordan Ayew's cross was parried by goalkeeper Gavin Bazunu straight into the path of Eze, whose eyes lit up for an easy tap-in.\n\nEze doubled the lead with a moment of individual brilliance when the 24-year-old turned to get past a defender, briefly looked up and drilled a shot from 25 yards into the bottom corner for his seventh goal of the season.\nThe result moved 12th-placed Palace nine points clear of the drop zone while Southampton are four points behind 17th-placed Everton with nine games left this season.",
      publishedAt: "15-Apr-23",
      title: "EPL: High-flying Crystal Palace beat Southampton 2-0",

      url: 391,

      urlToImage:
        "https://static.toiimg.com/thumb/msid-99521743,imgsize-50352,width-400,resizemode-4/99521743.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      summary:
        "Crystal Palace defeated Southampton 2-0 at Selhurst Park. The London side have now won three games in a row for the first time this season. Palace's 100% record under Roy Hodgson is also maintained. The result moved Palace nine points clear of the drop zone. Southampton are just four points behind 17th-placed Everton. They have nine games left to play - Palace have just nine games remaining. Hodgson, 75, beat 39-year-old Ruben Selles in a game between the youngest and oldest manager in the English top flight. Southampton's Michael Olise had a goal controversially ruled out for offside.",
      newsUrl:
        "https://timesofindia.indiatimes.com/sports/football/epl/top-stories/epl-high-flying-crystal-palace-beat-southampton-2-0/articleshow/99521718.cms",
    },
    {
      description:
        "NEW DELHI: What Kolkata Knight Riders batter Rinku Singh achieved will be remembered and talked about for years. The left-handed Rinku pulled off a magical heist as he hammered five successive sixes off Gujarat Titans' Yash Dayal from the last five balls of KKR's run chase to hand his side a miraculous three-wicket win.\nNot even the world's best batters would have backed themselves to hit five consecutive sixes with their team requiring 28 from the last five balls. Rinku garnered praise from all quarters and he found a new admirer in none other than Virat Kohli, who said he could not even think of doing that stuff in such a situation.\n\n\"What the youngsters are doing today is amazing to see. Look at this IPL, I couldn't even think of doing stuff what these young guys are doing. Just the other night, Rinku Singh hits 5 Sixes in last 5 balls which is amazing & never happened something like that. Coming in an hitting five sixes in a row to win a match, I mean what level is this? So that transition is happening is great. It is great to see such youngsters coming up,\" Kohli told Indian cricketer Robin Uthappa on Jio Cinema.\nKohli also talked about the strike rate in T20 cricket saying that the 'anchor role' in T20s is still important. Former Kiwi cricketer and commentator Simon Doull's recently criticised Kohli for his strike rate against Lucknow Super Giants in Bangalore.\n\n\"Yeah for sure (important anchor role). I completely agree with that, There are many people who because they have not been in that situation themselves, they look at the game differently. Suddenly when the power play is done, they will be like 'oh, they have started rotating the strike,\" Kohli said.\n\"I'm not thinking about strike rate. Oh my strike rate must be 160 plus or anything. I play T20 cricket for according to the situation. If situation demands I can play 230 strike rate and I can do this any day. I always play for my team & not for myself,\" he added.",
      publishedAt: "15-Apr-23",
      title:
        "'I couldn't even think of doing that stuff': Virat Kohli lauds Rinku Singh",

      url: 423,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99518255,imgsize-77978,width-400,resizemode-4/99518255.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/i-couldnt-even-think-of-doing-that-stuff-virat-kohli-lauds-rinku-singh/articleshow/99518142.cms",
      summary:
        "Rinku Singh hit five sixes in last five balls to help Kolkata Knight Riders win IPL match. Virat Kohli is impressed with the young talent coming through in the IPL. Kohli talks about strike rate in T20 cricket and importance of the 'anchor role' He says he is not concerned about his strike rate but his team needs him to play at a high level. He also says he always plays for his team and not for himself at the top of the game, like Simon Doull says he does. The match between KKR and Gujarat Titans was won by KKR by three wickets.",
    },
    {
      description:
        "NEW DELHI: Despite a global banking crisis, several US lenders on Friday reported better-than-expected Q1 earnings, esceeding investor expectations.\nBanks like JPMorgan Chase, Wells Fargo, Citigroup and PNC Financial surpassed earnings expectations after the failures of smaller banks alarmed the sector.\nThe jump in first quarter profits come as a reassuring sign for the reeling banking industry which has suffered heavy losses since the collapse of the Silicon Valley Bank earlier this year.\nHere's a lowdown on the Q1 results of the top US banks ...\n* JPMorgan Chase & Co posted a 52% jump in its first quarter profits, helped by higher interest rates, which allowed the bank to charge customers more for loans.\n* The bank saw deposits grow noticeably, as business and customers flocked to the banking titan after the failure of Silicon Valley Bank and Signature Bank.\n* Wells Fargo & Co also beat profit expectations for the first quarter as the lender earned more from higher interest rates, while executives said the US economy is strong but expected to slow in response to tighter monetary policy.\n* The bank set aside $1.21 billion in the quarter to cover for potential loan losses, compared to a release of $787 million a year earlier.\n* The bank's shares were up 4.14% in premarket trading. Net-interest income surged 45% to $13.34 billion.\n* Citigroup too posted a surprise jump in first-quarter profit after its fixed-income traders delivered a windfall large enough to cover the rising cost of the bank\u00e2\u20ac\u2122s souring loans.\n* Revenue from fixed-income, currencies and commodities trading unexpectedly rose 4% to $4.5 billion in the first quarter, as clients reacted to changing interest rates, the bank said. That helped defy analyst predictions of a drop in profits.\n* Net income rose 7% in the quarter to $4.6 billion. On an adjusted basis, per share profits amounted to $1.86.\n* PNC Financial Services Group reported an 18.5% rise in first-quarter profit on Friday, as the Federal Reserve's rate hikes fueled a surge in the U.S. regional lender's net interest income (NII).\n* Shares of PNC were up nearly 3% in premarket trading after upbeat results. They fell about 20% last quarter, which was marred by two of the biggest bank failures in U.S. history, after liquidity concerns at Silicon Valley Bank sparked a bank run.",
      publishedAt: "14-Apr-23",
      title: "Top US banks post strong Q1 profits despite global turmoil",

      url: 440,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99498054,imgsize-81586,width-400,resizemode-4/99498054.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/world/us/us-banks-citi-bank-wells-faro-jpmorgan-chase-pnc-financial-top-us-banks-post-strong-q1-profits-despite-global-turmoil/articleshow/99498065.cms#:~:text=You're%20reading&text=NEW%20DELHI%3A%20Despite%20a%20global,smaller%20banks%20alarmed%20the%20sector.",
      summary:
        "JPMorgan Chase, Wells Fargo, Citigroup and PNC Financial posts better-than-expected Q1 earnings. First quarter profits come as reassuring sign for the reeling banking industry. Comes after the collapse of the Silicon Valley Bank and Signature Bank alarmed sector. executives said the US economy is strong but expected to slow in response to tighter monetary policy. The bank saw deposits grow noticeably, as business and customers flocked to the banking titan after the failure of. Silicon Valleybank and Signature bank on June 7. They fell about 20% last quarter, which was marred by two of the biggest bank failures in U.S. history.",
    },
    {
      description:
        "By Aditya Singh, co-founder, Crypto India\nCompared to the 200+ years of the stock market, crypto assets are still in their infancy, beginning their journey with the invention of bitcoin in 2009. It has captured the psyche of most adults on the planet. But within its short stint, during the all time high of bitcoin at appx. $68,000, the crypto industry grew into a two trillion dollar industry, piquing the interest globally and close at home in India.\nYe Dil Maange More...\nThough it is a new vertical in the finance and technology industry, the crypto-assets industry has seen mass adoption. Most financial gurus consider it one of the mainstays of a diverse portfolio. It is becoming increasingly popular amongst the youth not for the highly volatile returns but for the freedom it offers. Crypto assets offer the freedom to store one's wealth how one sees fit, to work from wherever one wants, and to make decisions to preserve one's wealth.\nMore than just an easy way to make money\nA recent NASSCOM study indicates that India has 11% of global web3 talent, the fastest growing in any country, with 450+ startups founded in Q1 of 2022. It received international funding of $1.3 trillion in the last two years, as well as India boasts four web3 unicorns. It is estimated that web3 will add $1.1 trillion dollars to the Indian GDP by 2032. When discussing crypto, the general consensus is a mix of confusion and high-return assets. But many also need to focus on the fact that the web3 industry offers significant workforce employment.\nA case of two steps forward and one step back!\nThe current Indian crypto market continues to be highly unregulated, and the central government and the Reserve Bank Of India have repeatedly refused to make crypto legal. The taxation of virtual digital assets is a step in the right direction by bringing a semblance of legitimacy to this budding industry. However, the tax of crypto at 30% and clubbing it with speculative activities such as gambling does create significant distrust. To top it off, the\nintroduction of 1% TDS at source caused an uproar within the crypto community and impacted Indian exchanges. This year alone, the income tax department has collected appx 60 crores in TDS, despite the trading volume shrinking by almost 90% on the Indian exchanges. This begs the question, \"Why did the trading volume shrink?\"\nIndia currently has the highest TDS rate. Simply put, the high TDS has pushed many traders into grey markets or countries with crypto-friendly regulations. Along with the shrinking trading volumes we have also seen many crypto firms moving to countries with crypto-friendly regulations.\nThe way forward\nCrypto is an asset class and investment product. Comparing crypto to speculative activities does a disservice to everyone who has acquired unique skills to navigate this volatile market. Thus digital virtual assets should be taxed at the same rate as other asset classes. Another thing plaguing the crypto industry is lawmakers' refusal to allow the offsetting of losses incurred while trading. Like any other stock trading/business, the crypto market also works with\na bull-bear cycle. The inability of a trader to offset losses incurred during bad trades increases the tax burden on investors. The government allows share investors to carry forward their losses; crypto investors should get similar treatment.\nScaling the proverbial mountain\nWhile traversing the peaks and valleys, lawmakers must soon clarify tax on airdrops, miners' revenue, rumors of additional GST & how they will support the crypto exchanges with withdrawals stuck because of many banks' unwillingness to work with crypto exchanges. If I had to draw an analogy, we are currently at the foot of the mountain, and getting to the top of a fully transparent, healthy ecosystem that supports crypto innovations in the country will require many open dialogues. The world is waking up. Will India be late to the party or lead the way to a new age of digital revolution?",
      publishedAt: "21-Dec-22",
      title: "Union budget 2023: Enabling crypto to join the adult table",

      url: 401,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-96392057,imgsize-39762,width-400,resizemode-4/96392057.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/business/budget/union-budget-2023-enabling-crypto-to-join-the-adult-table/articleshow/96390606.cms",
      summary:
        "India has 11% of the global web3 talent, the fastest growing in any country. The current Indian crypto market continues to be highly unregulated. The introduction of 1% TDS at source caused an uproar within the crypto community. It is estimated that Web3 will add $1.1 trillion dollars to the Indian GDP by 2032. We are currently at the foot of the mountain, and getting to the top of a fully transparent, healthy ecosystem will require many open dialogues. The world is waking up. Will India be late to the party or lead the way to a new age of digital revolution?",
    },
    {
      description:
        "LUCKNOW: A team of experts from Chandigarh-based National Institute of Epidemiology of ICMR (Indian Council of Medical Research) is conducting a survey of soil-transmitted helminths prevalence among children studying in the government primary and upper primary schools in Uttar Pradesh.\nSoil-transmitted helminths lead to parasitic infection in children that hinders nutritional and physical development in young children, according to the World Health Organisation (WHO).\nShubha Singh, director, basic education, Uttar Pradesh, has sent a letter to basic shiksha adhikaris of over 30 districts of the state, asking them to provide necessary support to the concerned team.\nThe concerned block education officers of the district have also been asked to be intimated about the same.\nUnder the survey, stool samples of school going children are being collected and their microscopic examination is being done in temporary microscopic centres set up at the nearest health facility (community/ primary health centre).\nThe survey, which started from November 21, will continue till December 18.\nThe survey is being conducted in schools of Ghazipur, Gorakhpur, Hapur, Hardoi, Jalaun, Jaunpur, Amroha, Kannauj, Lakhimpur Kheri, Kushinagar, Lucknow, Mahoba, Mainpuri, Mathura, Mau, Meerut, Mirzapur, Pilibhit, Pratapgarh, Rae Bareli, Rampur, Saharanpur, Sant Kabir Nagar, Shahjahanpur, Sitapur, Siddharth Nagar and Sonbhadra.",
      publishedAt: "30-Nov-22",
      title: "Survey to detect parasitic infection in UP school kids",

      url: 388,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-95882537,imgsize-9512,width-400,resizemode-4/95882537.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/education/schools/up-board/survey-to-detect-parasitic-infection-in-up-school-kids/articleshow/95882469.cms",
      summary:
        "Soil-transmitted helminths lead to parasitic infection in children that hinders nutritional and physical development in young children, according to the WHO. Experts from Chandigarh-based National Institute of Epidemiology of ICMR are conducting the survey. The survey is being conducted in schools of Ghazipur, Gorakhpur, Hapur, Hardoi, Jalaun, Jaunpur, Amroha, Kannauj, Lakhimpur Kheri, Kushinagar, Lucknow, Mahoba, Mainpuri, Mathura. The study, which started from November 21, will continue till December 18.",
    },
    {
      description:
        "Affected students are yet to get any confirmation in this regard from the government or their medical colleges\nNational Medical Commission (NMC) has made it mandatory for Indian medical students, who have joined a medical programme in China post-November 2021, to get a license to practice as a medical doctor in China. In the absence of this license, the students will be considered ineligible to appear for Foreign Medical Graduate Examination (FMGE) in India. Several students are confused due to this decision and are waiting for official confirmation on this.\nLack of awareness\nA senior official from the Ministry of Health, on the condition of anonymity, says, \u201cThis NMC regulations aims at ensuring the quality of medical professionals once they come back post completion of their formal medical education in China. As of now, Indian authorities are unsure about the kind of training our students receive in China, which may put our patients at risk. Obtaining a license to practice medicine in China will clear any doubts.\u201d\nHowever, lack of awareness among all stakeholders is a major hurdle. \u201cSharing information on the official website is not enough. Ideally, the NMC should put together a formal redressal forum, which should actively address all doubts and queries of all the affected students. In addition to renewing faith in the administrative body, it will help students make a more informed choice about their future and careers,\u201d adds the official.\nVarious hurdles\nDr Shahroz Khan, all India student\u2019s coordinator, Indian Students in China (ISIC), says, \u201cStudents are still waiting to get any clarification regarding the mandate to get a license to practice medicine in China. We have heard that the Indian government is trying to speak to the Chinese authorities to get them onboard, but no confirmation has been received as of now.\u201d\nSeveral Indian students in their first semester, are still clueless about the new NMC regulation. Bhavana Reddy Gajulapalli, first-year student at Soochow University, China, says, \u201cI chose China as my brother is also studying medicine there. Although this NMC regulation had been released on the website before November 2021, I got to know about it after the completion of my first semester in mid-2022.\u201d\nRight now, Bhavana is focusing only on her studies. \u201cYes, my ultimate objective is to return and practice medicine in India. I am sure that within a couple of years, the governments will find a solution to help the students. There is no point worrying about giving an additional licensing exam in China, which is in the Chinese language. Our university is already providing us lessons in the language to enable better communication with patients, which will be helpful for this exam as well,\u201d says the 19-year-old, from Nellore, Andhra Pradesh.\nFor students like Ngangom Elizabeth Chanu, a 19-year-old medical student from Manipur, this regulation does not make much of a difference. \u201cI am a first-year student of Soochow University. I wanted to pursue my UG and PG medical education from China and also work there, which is why the compulsion to appear for the Chinese medical licensing exam is not an added burden.\u201d",
      publishedAt: "17-Nov-22",
      title:
        "Indian medical students studying in China may be ineligible for FMGE, find out why",

      url: 399,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-95568844,imgsize-86960,width-400,resizemode-4/95568844.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/education/study-abroad/asia/indian-medical-students-studying-in-china-may-be-ineligible-for-fmge-find-out-why/articleshow/95568866.cms",
      summary:
        "National Medical Commission has made it mandatory for Indian medical students to get a license to practice as a medical doctor in China. In the absence of this license, the students will be considered ineligible to appear for Foreign Medical Graduate Examination (FMGE) in India. Several students are confused due to this decision and are waiting for official confirmation on this. But for students like Ngangom Elizabeth Chanu, a 19-year-old medical student from Manipur, this regulation does not makes much of a difference. \u201cThere is no point worrying about giving an additional licensing exam in China, which is in the Chinese language. Our university is already providing lessons in the language to enable better communication with patients, which will be helpful for this exam as well,\u201d she says.",
    },
    {
      description:
        "NEW DELHI: Consumption of petrol, diesel and jet fuel continued to gallop apace in February, prompted by early onset of summer and harvesting pushing up demand from the farm sector and increased mobility prompted by expanding economic activities.\nEarly trade data shows petrol consumption rising 13%, diesel 12% and jet fuel almost 41% over the same month a year ago. Consumption of LPG, mostly used by households for cooking, grew maintained the usual modest growth at 2.4%.\nThe growth in consumption was substantially higher than in the same month of 2021 when the economy began firing up after the pandemic. Compared to February 2021, petrol, diesel and jet fuel sales were higher by 15.7%, 12.1% and 41.3%, respectively.\nThe growth in diesel sales was, however, appeared modest at 7.7% compared to February 2020 \u00e2\u20ac\u201d when the pandemic was yet to squeeze demand. Since diesel a key indicator economic activities, this indicates lingering pandemic overhang.\nIn contrast, petrol sales show a sharp uptick at 20% versus February 2020 as people\u00e2\u20ac\u2122s preference for personal vehicles during the post-pandemic unlock period continues as reflected in robust automobile sales.\nSimilarly, jet fuel sales have gradually recovered but still remains 10% short of the February 2020 level, indicating some resistance at this level. Industry is banking on the summer travel season for full recovery.\nSequentially also, the sales in February were higher by 13.5% for petrol, 9.2% for diesel and just 3.3% for jet fuel, the data shows.\nEarly onset of summer and absence of winter rains have pushed up demand from the farm sector due to increased use of diesel pumps for irrigating late standing crops such as mustard. Harvesting in states that have early harvesting further boosted the demand.",
      publishedAt: "1-Mar-23",
      title: "Fuel sales continue to gallop apace in February",

      url: 441,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-98342119,imgsize-56754,width-400,resizemode-4/98342119.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://m.timesofindia.com/business/india-business/fuel-sales-continue-to-gallop-apace-in-february/articleshow/98342120.cms#:~:text=NEW%20DELHI%3A%20Consumption%20of%20petrol,prompted%20by%20expanding%20economic%20activities.",
      summary:
        "Petrol consumption rose 13%, diesel 12% and jet fuel almost 41% over the same month a year ago. Growth in diesel sales was, however, appeared modest at 7.7%. Since diesel is a key indicator of economic activities, this indicates a lingering Pandemic overhang. Early onset of summer and absence of winter rains have pushed up demand from the farm sector due to use of diesel pumps for irrigating late standing crops such as mustard. Consumption of LPG, mostly used by households for cooking, grew maintained the usual modest growth at 2.4% The growth in consumption in February was substantially higher than in same month of 2021 when the economy began firing up after the pandemic.",
    },
    {
      description:
        "PANAJI: A senior citizen was cheated of Rs 46,000 by an unknown person on the pretext of helping the victim withdraw money from an ATM.\nUday Mashelkar, a Canca resident, attempted to withdraw money from an ATM in Mapusa on Saturday, but was unsuccessful after several tries. Two men standing in the queue to enter the ATM suggested that Mashelkar should instead head to another bank ATM nearby.\nThe victim said that as he was in urgent need of cash for grocery shopping, he decided to heed the advice.\nWhen he went to the other ATM, he saw the two strangers at this ATM too. \u201cI had entered the booth to withdraw money from the ATM. Suddenly, the man entered the booth and abruptly removed my card from the machine. He said I had not inserted my card properly. He wiped the ATM card on his sleeve and gave it to me and left. But my transaction did not go through, and I walked away. I realised much later the man had swapped my card,\u201d said the senior citizen.\nPolice have already begun investigating the case and have recovered CCTV footage from the ATM to identify the accused.\n\u201cI was unable to withdraw money. When I went to the market, I got a call from an unknown number who said that my ATM card has been blocked and that I should visit the bank. When I made enquiries at the bank, the staffers immediately noticed that my card has been exchanged. The staffer checked my bank account and saw that my entire amount of Rs 46,000 has been withdrawn. I began shivering and the bank staffers helped me go to the police station,\u201d said the victim.",
      publishedAt: "5-Mar-23",
      title: "Con man swaps card, Goa senior citizen loses Rs 46,000",

      url: 396,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-98422534,imgsize-23258,width-400,resizemode-4/98422534.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://m.timesofindia.com/city/goa/con-man-swaps-card-senior-citizen-loses-rs-46k/articleshow/98418474.cms",
      summary:
        "Senior citizen was cheated of Rs 46,000 by an unknown person on the pretext of helping the victim withdraw money from an ATM. Two men standing in the queue to enter the ATM suggested that Mashelkar should instead head to another bank ATM nearby in Mapusa. When he went to the other ATM, he saw the two strangers at this ATM too. Police have already begun investigating the case and have recovered CCTV footage from the ATM to identify the accused. The accused is yet to be identified. But police have released CCTV footage to help them identify the alleged identity of the accused and have launched an investigation.",
    },
    {
      description:
        "BHUBANESWAR: Mo College Abhijan has signed a memorandum of understanding (MoU) with women's wing of the Federation of Indian Chambers of Commerce and Industry (FICCI) to offer on job training programme/internship programme to students from various college and universities for the training and better employment to the students under Mo College Abhijan.\nObjective of the MoU is to offer internship to more than 200 students in two phases (Summer and Winter internships) in the fields of retail, fashion, steel and mines, IT and IT services, account and finance, beauty and wellness, digital marketing, online sales, food processing, energy, marketing, hotel, resort, healthcare, educational institutions and agriculture.\nInternship will be provided to the students for a period of 45 days, 60 days, 90 days or 180 days. The duration is at the discretion of the recruiters and the nature of the training. On completion of the training, students will receive a certificate for the same from the employers. It will help them for future employability, said an official of Mo College Abhijan.\nThe first phase of the internship programme is open for all government college students from Khurda and Cuttack districts under Mo College Abhijan.",
      publishedAt: "16-Apr-23",
      title:
        "Mo College Abhijan signs MoU with FICCI to offer internship programme to students",

      url: 447,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99528436,imgsize-5440,width-400,resizemode-4/99528436.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/education/news/mo-college-abhijan-signs-mou-with-ficci-to-offer-internship-programme-to-students/articleshow/99528428.cms#:~:text=BHUBANESWAR%3A%20Mo%20College%20Abhijan%20has,and%20better%20employment%20to%20the",
      summary:
        "Mo College Abhijan has signed a memorandum of understanding with women's wing of FICCI. The MoU is to offer internship to more than 200 students in two phases. Internship will be provided for a period of 45 days, 60 days, 90 days or 180 days. On completion of the training, students will receive a certificate for the same from the employers. The first phase of the internship programme is open for all government school students from Khurd a and Cuttack districts. It will help students for future employability, said an official of Mo College Abbijan.",
    },
    {
      description:
        'PARIS: French President Emmanuel Macron is not backtracking on comments in China urging the European Union to reduce dependency on the United States, a senior diplomat said on Wednesday.\nIn an interview with news outlet Politico and daily Les Echos, Macron also cautioned against being drawn into a crisis over Taiwan driven by an "American rhythm and a Chinese overreaction."\nThat brought criticism from some politicians and commentators in Europe and the United States, with former U.S. President Donald Trump accusing him of "kissing ass" to Beijing.\nThe French diplomat, who requested anonymity, told reporters that the substance of what Macron said, which focused on his pet project of European strategic autonomy, was clear, and his position on Taiwan and China has not changed.\n"This is something the president stands by entirely," he said of the interview.\nHowever, the Politico headline "Europe must resist pressure to become \'America\'s followers\'" was "sensationalist" and did not reflect nuances of Macron\'s views, the diplomat added.\nEvidencing that France stuck to a robust defence of international law, the diplomat said, a French military ship recently sailed through the Taiwan Strait despite Chinese military exercises around the island.\nChina has never renounced the use of force to bring the democratically governed island under its control.\n"France respects the One China principle and the president told (Chinese President Xi Jinping) that the Taiwan question should only be resolved pacifically," the French diplomat added.\nMacron and U.S. President Joe Biden agree on Taiwan but the French leader thought the meeting between Taiwan President Tsai Ing-wen and U.S. House Speaker Kevin McCarthy in California last week - prior to China\'s drills - was a "provocation", the diplomat said.\nThe Republican leadership of the U.S. Congress "uses Taiwan to pressure China," he added. "No, Europe will not get dragged into that, but that doesn\'t mean Europe will disengage (from the Taiwan issue)."',
      publishedAt: "12-Apr-23",
      title: "Macron stands by China interview: French diplomat",

      url: 419,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99441884,imgsize-31908,width-400,resizemode-4/99441884.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://m.timesofindia.com/world/uk/macron-stands-by-china-interview-french-diplomat/articleshow/99441800.cms",
      summary:
        'French President Emmanuel Macron urged the EU to reduce dependency on the United States. He also cautioned against being drawn into a crisis over Taiwan driven by an "American rhythm" Macron\'s comments brought criticism from some politicians and commentators in Europe and the U.S. A senior French diplomat said the substance of what he had said was clear and his position on Taiwan and China has not changed. However, the headline "Europe must resist pressure to become \'America\'s followers\'" was "sensationalist" and did not reflect nuances of Macron\'s views, the diplomat added in an interview with Politico and Les Echos.',
    },
    {
      description:
        'NEW DELHI: Quick commerce start-up Zepto has appointed Ramesh Bafna as its new Chief Financial Officer, the company said on Saturday.\nBafna was the chief financial officer of fashion and lifestyle e-commerce firm Myntra.\n"To take Zepto public in 2-3 years, we believe we need an incredible CFO and Ramesh is the right person for the job," Zepto co-founder and CEO Aadit Palicha said.\nZepto said that Bafna\'s appointment signifies major milestones in its growth and profitability metrics, where the company is now focusing on building an industry-leading finance team for its next phase of scale.\nBafna will take over the role in mid-May from Jitendra Nagpal who moved out of the company recently.\nBafna earlier served as the CFO at the wealth tech company, CoinSwitch Kuber. He has also spent a decade at IT services major Wipro.',
      publishedAt: "15-Apr-23",
      title:
        "Zepto ropes in former Myntra CFO Ramesh Bafna to lead finance team",

      url: 432,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99519766,imgsize-698676,width-400,resizemode-4/99519766.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://timesofindia.indiatimes.com/business/india-business/zepto-ropes-in-former-myntra-cfo-ramesh-bafna-to-lead-finance-team/articleshow/99519758.cms#:~:text=NEW%20DELHI%3A%20Quick%20commerce%20start,lifestyle%20e%2Dcommerce%20firm%20Myntra.",
      summary:
        "Ramesh Bafna appointed Chief Financial Officer of quick commerce start-up Zepto. He will take over the role in mid-May from Jitendra Nagpal who moved out of company. He has served as the CFO at the wealth tech company, CoinSwitch Kuber and at IT giant Wipro. He is expected to take the company public in 2-3 years, co-founder AaditPalicha says. The company says his appointment signifies major milestones in its growth and profitability metrics, where the company is now focusing on building an industry-leading finance team for its next phase of scale.",
    },
    {
      description:
        'LUCKNOW: Skipper KL Rahul has never been "plagued" by captaincy, said Lucknow Super Giants fielding coach Jonty Rhodes after the opener struck his first fifty of IPL 2023.\nA prolific run-getter in the IPL, Rahul smashed 74 off 56 balls albeit in a two-wicket loss.\nRahul had also captained the Punjab Kings and Rhodes was part of that support staff.\n"The captain is someone who likes to lead from the front. He has always been a successful, dominating batter in all the IPLs. Captaincy isn\'t something that\'s ever plagued him.\n\n"Many great batters when given captaincy don\'t quite handle it. He\'s led from the front and I think it\'s great to see that," Rhodes said at the post-match conference.\nThe opener, however, struggled to get going this season, managing a high score of 35 before Saturday\'s knock.\n"When the captain is scoring runs, the way that he plays he lays a really good platform for others to play around them."\n"We always knew that he was just one knock away. He\'s been batting in the nets superbly. He\'s not the kind of player anybody worries about because we always know it\'s literally one innings away."\n\nAgainst Punjab, when all other LSG batters failed to make an impact, Rahul batted till the 19th over but Rhodes felt the skipper could have stayed around and provided the final flourish.\n\n"I think he himself will be satisfied with the way the knock turned out today but possibly could\'ve batted deeper," he added.',
      publishedAt: "16-Apr-23",
      title:
        "Captaincy isn't something that's ever plagued KL Rahul: Jonty Rhodes",

      url: 417,
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99531264,imgsize-71124,width-400,resizemode-4/99531264.jpg",
      source: { name: "Times of India" },

      author: "Sumant Banerjee",
      newsUrl:
        "https://m.timesofindia.com/sports/cricket/ipl/top-stories/captaincy-isnt-something-thats-ever-plagued-kl-rahul-jonty-rhodes/articleshow/99531121.cms",
      summary:
        'KL Rahul hits 74 as Lucknow Super Giants lose to Punjab Kings. Rahul had also captained Punjab Kings last season. fielding coach Jonty Rhodes says Rahul has never been plagued by captaincy. Rhodes: "When the captain is scoring runs, the way that he plays he lays a really good platform for others to play around him" The 32-year-old is a prolific run-gett',
    },
  ]);
  const [ifGeneral, setifGeneral] = useState(
    props.category === "general" ? true : false
  );
  // if (props.category === "general") {
  //   setifGeneral(true);
  // }

  // const forGeneral = () => {
  //   setArticles([

  //   ]);
  // };

  // if (ifGeneral) {
  //   forGeneral();
  // }

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    if (!ifGeneral) {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsBits`;
    if (!ifGeneral) {
      updateNews();
    }

    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    if (!ifGeneral) {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    }
  };
  if (ifGeneral) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const handleClick = (element) => {
    summary = element.summary;
    console.log(element.summary);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          color: props.mode === "light" ? "black" : "white",
          // border: "2px solid",
          width: "50%",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 50,
          padding: 15,
          backgroundColor: props.mode === "light" ? "white" : "black",
          textShadow:
            props.mode === "light" ? "2px 2px 2px grey" : "2px 2px 2px black",
          boxShadow:
            props.mode === "light" ? "3px 3px 3px grey" : "4px 4px 4px white",
          fontFamily: "Times New Roman",
          fontSize: 48,
        }}
      >
        NewsBits - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinner />}
      {!ifGeneral && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}

      {ifGeneral && (
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div
                  className="col-md-4"
                  key={element.url}
                  onClick={() => handleClick(element)}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 200)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={null}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    summary={element.summary}
                    unique_number={element.url}
                    newsUrl={element.newsUrl}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export { summary };

export default News;
