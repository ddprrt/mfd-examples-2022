function identity<T>(t: T): T {
    return t
}

const h = identity<string>("Hello")
const i = identity<{ name: string}>({ name: "Stefan"})
const j = identity("Hello")
const k = identity({ name: "Stefan"})

type VideoFormatUrls = {
    format1080p: URL,
    format4k: URL,
    format240p: URL
}

type SubtitleUrls = {
    en: URL, de: URL, fr: URL, pt: URL, es: URL, tr: URL
}

type URLList = {
    [x: string]: URL
}
// for debugging
declare const videos: VideoFormatUrls;
declare const subtitles: SubtitleUrls
declare const me: { name: string }

function load_url<T extends URLList>(list: T, key: keyof T): URL {
    return list[key]
}

load_url(videos, "format240p")
load_url(subtitles, "es")
//load_url(me, "name")