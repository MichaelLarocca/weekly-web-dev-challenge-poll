import { renderSubmissions, getSubmissions } from "./submissions.js";
import { displaySubmissionCount } from "/displaySubmissionCount.js";
import { renderPreviousChallenges } from "./prevChallengesList.js";
import { countdown } from "./challengeCountdown.js";
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
  const submissionsJson = "./submissions.json";
  const images = "/imgs/entries/";
  const challengeName = "latest_challenge";
  const submissionText = "Submissions so far: ";

  const subs = (await getSubmissions(submissionsJson)).latest_challenge;

  displaySubmissionCount(challengeName, submissionText);

  renderSubmissions(subs, images, true);

  renderPreviousChallenges();
})();

//Challenge Countdown
//Date Format -> Month day, year time/hour Timezone
countdown(new Date("November 8, 2021 13:00:00 GMT+00:00"));


/* Random background color on page load */
let colorOptions = [
  "#AAD1B6", // Green
  "#B5CAF9", // Blue
  "#C7B9FF", // Purple
  "#F0B9DD", // Pink
  "#F3BF99", // Orange
  "#FBF3AB", // Yellow
  "linear-gradient(to right, #c7b9ff, 50%, #f3bf99)", // Purple --> Orange gradient
];
let selectedColor =
  colorOptions[Math.floor(Math.random() * colorOptions.length)];
document.body.style.background = selectedColor;

