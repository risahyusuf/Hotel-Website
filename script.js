window.addEventListener("DOMContentLoaded", () => {
const reviews = [
    {
        image: "images/review image 1.png",
        text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        nameImage: "images/Jannike Borg, Publisher.png"
    },
    {
        image: "images/review image 2.png",
        text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        nameImage: "images/LeBron Durant, Flight attendant.png"
    },
    {
        image: "images/review image 3.png",
        text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        nameImage: "images/Kaarel Piho, Chiropodist.png"
    }
];

const reviewContainer = 
document.querySelector (".review-container");

reviews.forEach ((review) => {
    const reviewDiv =
    document.createElement("div");
    reviewDiv.classList.add("review");

const reviewerImg =
document.createElement("img");
reviewerImg.src = review.image;
reviewerImg.classList.add("review-image");

const reviewText =
document.createElement("p");
reviewText.textContent = review.text;

const nameImg =
document.createElement("img");
nameImg.src = review.nameImage;
nameImg.classList.add("reviewer-name");

reviewDiv.appendChild(reviewerImg);
reviewDiv.appendChild(reviewText);
reviewDiv.appendChild(nameImg);

reviewContainer.appendChild(reviewDiv);
});

const reasonsData = [
    {
        imageSrc: "images/payment full image.png",
        imgclass: "payment-image",
        title: "Payment Method",
        description: "We have a lot of them, from<br> cryptocurrencies to barter for potatoes"
    },

     {
        imageSrc: "images/full search image.png",
        imgclass: "simple-search",
        title: "Simple search process",
        description: "We checked it out, even the kid did it,<br> but it was my mom's friend's son"
    },

     {
        imageSrc: "images/headphone image.png",
        imgclass: "support",
        title: "24/7 Support",
        description: "Is there something you don't<br> understand? Feel free to call us."
    },

     {
        imageSrc: "images/cat image.png",
        imgclass: "nice",
        title: "We are nice",
        description: "Fantasy is over, there will be something<br> really convincing here"
    }
];

const reasonContainer =
document.querySelector(".reason-container");
reasonsData.forEach(reason => {
    const div =
    document.createElement("div");
    div.classList.add("reason");

    const img =
    document.createElement("img");
    img.src = reason.imageSrc;
    img.classList.add(reason.imageClass);

    const h3 =
    document.createElement("h3");
    h3.textContent = reason.title;

    const p =
    document.createElement("p");
    p.innerHTML = reason.description;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    reasonContainer.appendChild(div);
});

const offersData = [
    {
offerImage: "images/wilderness club.png",
ratingImage:"images/rating.png",
favoriteImage: "images/favorite.png",
title: "Wilderness Club at Big<br> Ceddar",
date: "28 October — 1 November",
priceImage: "images/price.png"
    },

       {
offerImage: "images/wilderness image 2.png",
ratingImage: "images/rating.png",
favoriteImage: "images/favorite.png",
title: "Wilderness Club at Big<br> Ceddar",
date: "28 October — 1 November",
priceImage: "images/price.png"
    },

       {
offerImage: "images/wilderness image 3.png",
ratingImage: "images/rating.png",
favoriteImage: "images/favorite.png",
title: "Wilderness Club at Big<br> Ceddar",
date: "28 October — 1 November",
priceImage: "images/price.png"
    }
];

const offerContainer =
document.querySelector(".offer-container");

offersData.forEach ((offer) => {
    const offerDiv = 
    document.createElement("div");
    offerDiv.className = "offer";

const offerImg =
document.createElement("img");
offerImg.src = offer.offerImage;
offerImg.className = "offer-image"; 

const ratingImg =
document.createElement("img");
ratingImg.src = offer.ratingImage;
ratingImg.className = "rating"; 

const favoriteImg =
document.createElement("img");
favoriteImg.src = offer.favoriteImage;
favoriteImg.className = "favorite"; 

const title =
document.createElement("h3");
title.innerHTML = offer.title;

const date =
document.createElement("h4");
date.textContent = offer.date;

const priceImg =
document.createElement("img");
priceImg.src = offer.priceImage;
priceImg.className = "price";

offerDiv.appendChild(offerImg)
offerDiv.appendChild(ratingImg)
offerDiv.appendChild(favoriteImg)
offerDiv.appendChild(title)
offerDiv.appendChild(date)
offerDiv.appendChild(priceImg)

offerContainer.appendChild(offerDiv);
});

const recentPostsData = [
    {
        imageSrc: "images/athens.png",
        date: "May 23, 2022",
        timeImageSrc: "images/5 minutes.png",
        title: "My trip to Athens",
        description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },

    {
        imageSrc: "images/vilnius resorts.png",
        date: "May 22, 2022",
        timeImageSrc: "images/1 minute.png",
        title: "Vilnius resorts",
        description: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
    },

     {
        imageSrc: "images/plane.png",
        date: "May 20, 2022",
        timeImageSrc: "images/5 minutes.png",
        title: "Tips for flying on a plane",
        description: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
    }
];

const recentPostsContainer =
documebt.querySelector(".recent-posts-container");

recentPostsData.forEach((post) => {
    const postDiv =("div");
    postDiv.className ="post";

    const img =
    document.createElement("img");
    img.src = post.imageSrc;
    img.className = "post-image"

    const date =
    document.createElement("p");
    date.className = "date";
    date.textContent = post.date;

    const time =
    document.createElement("img");
    time.src = post.timeImageSrc;
    time.className = "time";

    const h3 =
    document.createElement("p");
    h3.textContent = post.title;

    const p =
    document.createElement("p");
    p.textContent = post.description;

    postDiv.appendChild(img);
    postDiv.appendChild(date);
    postDiv.appendChild(time);
    postDiv.appendChild(h3);
    postDiv.appendChild(p);

    recentPostsContainer.appendChild(postDiv);
});
});