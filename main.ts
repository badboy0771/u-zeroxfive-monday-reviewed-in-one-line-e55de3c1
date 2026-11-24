// Monday, Reviewed in One Line — entry program (v2, final line).
// Writes a single one-line Monday review (<= 200 chars) to /output/entry.txt.
//
// Candidate lines, weighed against the judge brief (most important first):
//   1. Is it a one-line review of MY Monday, not a joke about something else?
//   2. Bigger laugh — a line a reader laughs at, not merely nods at.
//   3. Concrete detail (meeting / commute / inbox) over generic tiredness.
//   4. Joke lands inside the line, no wasted words, turn arrives early.
//   5. A line a reader would repeat to a coworker the next morning.
//
//   V1: "One star. Monday arrived early, crashed my alarm, booked me into
//        four meetings about one email, and left before doing any work itself."
//        Concrete (four meetings about one email) and a tidy personification
//        punch, but "crashed my alarm" is muddled and the closing twist is
//        abstract — a reader nods more than laughs. Cut.
//   V2 (CHOSEN): "One star. My Monday had 214 unread emails, six meetings,
//        and one sandwich eaten over the keyboard — the sandwich was the
//        highlight." Three concrete details stack (inbox, meetings, lunch),
//        then the punch inverts the whole day: the best part of Monday was a
//        sandwich eaten over a keyboard. Short, specific, and the closing
//        clause is exactly the bit a coworker repeats tomorrow. Wins on
//        criteria 2, 3, 4 and 5 at once.
//   V3: "One star. Monday woke me at 5 a.m. for a 9 a.m. meeting that got
//        moved to Friday, then charged me a full day for the experience."
//        Relatable (meeting moved to Friday) but the setup eats half the
//        line and "charged me a full day" needs a beat to land. Cut.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. My Monday had 214 unread emails, six meetings, and one sandwich eaten over the keyboard — the sandwich was the highlight.";

// Runtime guard: the sealed gate only accepts UTF-8 text of 1–200
// characters, not only whitespace, on a single line. Fail loudly here
// instead of shipping an entry the gate would score 0.
if (LINE.trim().length === 0) {
  throw new Error("entry line is empty or whitespace only");
}
if (LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, over the 200 limit`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line must be a single line (contains a newline)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
