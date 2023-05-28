export const ABOUT_PAGE_TITLE = "About The Program";
export const ABOUT_IMAGE_NAME = "Curiosity rover image";
export const ABOUT_INFO =
  "Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012). Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life. Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments.";

export const VIEW_IMAGES_BY_DATE = "View Images By Date";
export const VIEW_WEATHER = "View Weather";

export const WEATHER_PAGE_TITLE = "Mars Weather";
export const MARS_IMAGES_BY_DATE_PAGE_TITLE = "Mars Images By Date";

export const IMAGES_PER_SILDER = 5;

export const SORT_OPTIONS = [
  {
    id:1,
    value: "dataPoint",
    label: "Data point",
  },
  {
    id:2,
    value: "temperature",
    label: "Temperature",
  },
  {
    id:3,
    value: "wind",
    label: "Wind",
  },
  {
    id:4,
    value: "pressure",
    label: "Pressure",
  },
];

//my private API KEY
export const IMAGES_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-1&api_key=9RcHVtBeVO9nGAEGno5jrwpfK7hTjFORcJ8ZVQjR&page=1";
