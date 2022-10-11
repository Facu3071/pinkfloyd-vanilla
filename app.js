//---------------MENU-------------
const $menuBtn = document.querySelector(".menu-btn");
const $linksContainer = document.querySelector(".links-container");
const $links = document.querySelector(".links");
$menuBtn.addEventListener("click", (e) => {
  const containerHeight = $linksContainer.getBoundingClientRect().height;
  const linksHeight = $links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    $linksContainer.style.height = `${linksHeight}px`;
  } else {
    $linksContainer.style.height = 0;
  }
});

// scroll to exactly position
const $nav = document.querySelector("nav");
const $scrollLinks = document.querySelectorAll(".scroll-link");
$scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navbarHeight = $nav.getBoundingClientRect().height;
    const containerHeight = $linksContainer.getBoundingClientRect().height;
    const fixedNav = $nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navbarHeight;
    console.log(position);
    if (!fixedNav) {
      position = position - navbarHeight;
    }
    if (navbarHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    $linksContainer.style.height = 0;
  });
});
//----------------ABOUT--------------------
const $btns = document.querySelectorAll(".tab-btn");
const $about = document.querySelector(".about");
const $articles = document.querySelectorAll(".content");

$about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    $btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    $articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// --------------SLIDE IMG MEMBERS---------------
const members = [
  {
    id: 1,
    name: "Roger waters",
    instrument: "Bass",
    img: "/src/roger.jpg",
    info: "George Roger Waters is an English musician, singer-songwriter and composer. In 1965, he co-founded the progressive rock band Pink Floyd.",
  },
  {
    id: 2,
    name: "David Gilmour",
    instrument: "Rhythm Guitars",
    img: "/src/david.jpg",
    info: "David Jon Gilmour is an English guitarist, singer, songwriter and member of the rock band Pink Floyd. He joined as guitarist and co-lead vocalist in 1967, shortly before the departure of founding member Syd Barrett.",
  },
  {
    id: 3,
    name: "Syd barret (R.I.P)",
    instrument: "Rhythm Guitars",
    img: "/src/syd.jpg",
    info: "Roger Keith Barrett was an English singer, songwriter, and musician who co-founded the rock band Pink Floyd in 1965.",
  },
  {
    id: 4,
    name: "Richard wright",
    instrument: "Keyboards, Piano",
    img: "/src/richard.jpg",
    info: "Richard William Wright was an English musician who was a co-founder of the progressive rock band Pink Floyd. He played keyboards and sang, appearing on almost every Pink Floyd album and performing on all their tours.",
  },
  {
    id: 5,
    name: "Nick mason",
    instrument: "Drums, percussion",
    img: "/src/nick.jpg",
    info: "Nicholas Berkeley Mason  is an English drummer and co-founder of the progressive rock band Pink Floyd. He is the only member to feature on every Pink Floyd album, and the only constant member since its formation in 1965.",
  },
];
const $img = document.getElementById("img");
const $name = document.getElementById("name");
const $instrument = document.getElementById("instrument");
const $info = document.getElementById("info");
const $prevBtn = document.querySelector(".btn-left");
const $nextBtn = document.querySelector(".btn-right");

let currentItem = 0;

document.addEventListener("DOMContentLoaded", showMembers);

function showMembers() {
  const item = members[currentItem];
  $img.src = item.img;
  $info.textContent = item.info;
  $name.textContent = item.name;
  $instrument.textContent = item.instrument;
}
$prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) currentItem = members.length - 1;
  showMembers();
});
$nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem === members.length) currentItem = 0;
  showMembers();
});

/* ------------------DISCOGRAPHY ---------------*/
const disc = [
  {
    id: 1,
    title: "The Piper at the Gates of Dawn",
    category: "Studio",
    year: "1967",
    img: "/src/piper.jpg",
    desc: `The Piper at the Gates of Dawn is the debut studio album by English rock band Pink Floyd, released on 5 August 1967 by EMI Columbia.`,
  },
  {
    id: 2,
    title: "A Saucerful of Secrets",
    category: "Studio",
    year: "1968",
    img: "/src/saucerful.jpg",
    desc: `A Saucerful of Secrets is the second studio album by the English rock band Pink Floyd, released on 28 June 1968.`,
  },
  {
    id: 3,
    title: "More",
    category: "Studio",
    year: "1969",
    img: "/src/more.jpg",
    desc: `More is the third studio album and first soundtrack album by English rock band Pink Floyd. It was released on 13 June 1969.`,
  },
  {
    id: 4,
    title: "Ummagumma",
    category: "Studio",
    year: "1969",
    img: "/src/umma.jpg",
    desc: `Ummagumma is the fourth album by English rock band Pink Floyd. It is a double album and it was released on 7 November 1969 by Harvest Records.`,
  },
  {
    id: 5,
    title: "Atom heart mother",
    category: "Studio",
    year: "1970",
    img: "/src/atom.jpg",
    desc: `Atom Heart Mother is the fifth studio album by the English progressive rock band Pink Floyd. It was released by Harvest on 2 October 1970. `,
  },
  {
    id: 6,
    title: "Meddle",
    category: "Studio",
    year: "1971",
    img: "/src/meddle.jpg",
    desc: `Meddle is the sixth studio album by English rock band Pink Floyd, released by Harvest Records.`,
  },
  {
    id: 7,
    title: "Obscured by Clouds",
    category: "Studio",
    year: "1972",
    img: "/src/obscured.jpg",
    desc: `Obscured by Clouds is the seventh studio album by the English progressive rock band Pink Floyd, released on 2 June 1972 by Harvest and Capitol Records.`,
  },
  {
    id: 8,
    title: "The dark side of the moon",
    category: "Studio",
    year: "1973",
    img: "/src/darkside.jpg",
    desc: `The best album in the history.`,
  },
  {
    id: 9,
    title: "Wish you were here",
    category: "Studio",
    year: "1975",
    img: "/src/wish.jpg",
    desc: `Wish You Were Here is the ninth studio album by the English rock band Pink Floyd, released on 12 September 1975 through Harvest Records and Columbia Records.`,
  },
  {
    id: 10,
    title: "Animals",
    category: "Studio",
    year: "1977",
    img: "/src/animals.jpg",
    desc: `Animals is the tenth studio album by the English rock band Pink Floyd, released on 21 January 1977 through Harvest and Columbia Records.`,
  },
  {
    id: 11,
    title: "The wall",
    category: "Studio",
    year: "1979",
    img: "/src/wall.jpg",
    desc: `The Wall is the eleventh studio album by the English progressive rock band Pink Floyd, released on 30 November 1979 by Harvest/EMI and Columbia/CBS Records.`,
  },
  {
    id: 12,
    title: "The Final Cut",
    category: "Studio",
    year: "1983",
    img: "/src/cut.jpg",
    desc: `The Final Cut is the twelfth studio album by English rock band Pink Floyd, released on 21 March 1983`,
  },
  {
    id: 13,
    title: "A momentary lapse of reason",
    category: "Studio",
    year: "1987",
    img: "/src/momentary.jpg",
    desc: `A Momentary Lapse of Reason is the thirteenth studio album by the English progressive rock band Pink Floyd, released in the UK on 7 September 1987 by EMI.`,
  },
  {
    id: 14,
    title: "The Division Bell",
    category: "Studio",
    year: "1994",
    img: "/src/division.jpg",
    desc: `The Division Bell is the fourteenth album by the English progressive rock band Pink Floyd, released on 28 March 1994 by EMI Records.`,
  },
  {
    id: 15,
    title: "The Endless River",
    category: "Studio",
    year: "2014",
    img: "/src/endless.jpg",
    desc: `The Endless River is the fifteenth studio album by the English rock band Pink Floyd, released in November 2014 by Parlophone Records in Europe and Columbia Records in the rest of the world.`,
  },
  {
    id: 16,
    title: "Ummagumma",
    category: "Live",
    year: "1969",
    img: "/src/umma.jpg",
    desc: `Ummagumma is the fourth album by English rock band Pink Floyd. It is a double album and it was released on 7 November 1969 by Harvest Records.`,
  },
  {
    id: 17,
    title: "Delicate Sound of Thunder",
    category: "Live",
    year: "1988",
    img: "/src/delicate.jpg",
    desc: `Delicate Sound of Thunder is a live album by English progressive rock band Pink Floyd. It was recorded over five nights at the Nassau Coliseum in Uniondale, New York.`,
  },
  {
    id: 18,
    title: "Pulse",
    category: "Live",
    year: "1995",
    img: "/src/pulse.jpg",
    desc: `Pulse is the third live album by the English rock band Pink Floyd. It was released on 29 May 1995 by EMI. `,
  },
  {
    id: 19,
    title: "Is There Anybody Out There? The Wall Live 1980-81",
    category: "Live",
    year: "2000",
    img: "/src/isthere.jpg",
    desc: `Is There Anybody Out There? The Wall Live 1980-81 is a live album released by Pink Floyd in 2000.`,
  },
];
const $section = document.querySelector(".section-album");
const $btnContainer = document.querySelector(".btn-container-disc");

/* load items */
window.addEventListener("DOMContentLoaded", (e) => {
  displayAlbums(disc);
  displayBtns();
});

function displayAlbums(discItems) {
  let displayAlbums = discItems.map((album) => {
    return `<article class="album">
          <img src="${album.img}" class="photo" alt="">
          <div class="album-info">
            <div class="main-text">
              <h4> ${album.title}</h4>
              <h4 class="year">${album.year}</h4>
            </div>
            <p class="album-text">${album.desc}</p>
          </div>
        </article>`;
  });
  displayAlbums = displayAlbums.join("");
  $section.innerHTML = displayAlbums;
}
function displayBtns() {
  const categories = disc.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  $btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const discFilter = disc.filter((album) => {
        if (album.category === category) {
          return album;
        }
      });
      if (category === "all") {
        return displayAlbums(disc);
      } else {
        return displayAlbums(discFilter);
      }
    });
  });
}
// ----------BUTTON SCROLL TOP---------------

function handleScroll() {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 600) {
    // Show button
    $btnToTop.classList.remove("hidden");
  } else {
    // Hide button
    $btnToTop.classList.add("hidden");
  }
}
document.addEventListener("scroll", handleScroll);

const $btnToTop = document.querySelector(".button-top");
const rootElement = document.documentElement;
function scrollTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
$btnToTop.addEventListener("click", scrollTop);
