type AllStrings = string
type Subset = "circle" | "square" | "rectangle"
// Events need to start with on-
type Events = `on-${string}`

type MaxMinutes = 0 | 1 | 2 | 3 | 4 | 5;
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Hours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type WhatTimeIsIt = `${`0${Hours}` | 10 | 11 | 12}:${MaxMinutes}${Digit}`

let its_now: WhatTimeIsIt = "12:57"