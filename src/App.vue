<template>
<main>
    <NavBar/>
    <article class="font-sans text-white">
        <div class="
                    bg-gradient-to-b
                    from-purple-500
                    to-indigo-500
                    text-center
                    px-10
                    md:px-20
                    py-20
                    md:py-40">
            <div class="text-5xl md:text-7xl font-bold">Yukino</div>
            <p class="mt-8">Stream anime or read manga ad-free from multiple sources.</p>
            <div class="
                        mt-8
                        flex flex-row flex-wrap
                        justify-center
                        items-center
                        gap-2">
                <button class="
                            focus:outline-none
                            bg-white
                            hover:bg-gray-200
                            text-black
                            px-5
                            py-2
                            rounded-lg
                            shadow-lg
                            transition
                            duration-300"
                        @click.prevent="scrollToDownloads()">
                    <span class="mr-1">
                        <Icon icon="save"/></span>
                    Download
                </button>
                <a class="
                          bg-black
                          hover:bg-gray-800
                          px-5
                          py-2
                          rounded-lg
                          shadow-lg
                          transition
                          duration-300"
                          href="https://github.com/BlaNKtext/YukinoCustom" target="_blank"><span class="mr-1">
                        <Icon :icon="['fab', 'github']"/></span>
                    GitHub</a>
                <a class="
                          bg-blue-500
                          hover:bg-blue-600
                          px-5
                          py-2
                          rounded-lg
                          shadow-lg
                          transition
                          duration-300"
                         :href="guidesUrl" target="_blank"><span class="mr-1">
                        <Icon icon="book-open"/></span>
                    Guide</a>
               </div>
           </div>
      </article>
    <div class="text-gray-700 text-center mx-8 md:mx-20 my-16">
        <p class="text-lg">
            The project's name <strong>Haneko</strong> has been switched to
            <strong>Yukino</strong> meaning
            <strong>Snow</strong> because Haneko sounded terrible.
        </p>
        <p class="mt-10 text-red-500 font-bold">
            I do not support piracy nor run/serve any illegal or
            copyrighted contents, everything is acquired from third-party
            sources. The developer of this application does not have any
            affiliation with any of the third-party sources.
        </p>
        <hr class="my-10" />
        <div>
            <h1 class="text-2xl font-bold">Highlights</h1>
            <div class="
                        mt-4
                        grid grid-cols-1
                        md:grid-cols-2
                        items-center
                        gap-4">
                <div class="col-span-1" v-for="feature in features">
                    <div class="
                                bg-gray-100
                                rounded
                                text-lg
                                flex flex-col
                                md:flex-row
                                justify-center
                                items-center
                                gap-2
                                md:gap-5
                                px-5
                                py-4">
                        <div :class="`flex-none rounded text-white w-12 h-10 flex justify-center items-center ${feature.bgcolor}`">
                            <Icon :icon="feature.icon" />
                        </div>
                        <div class="
                                    flex-grow
                                    text-center
                                    md:text-left
                                    font-bold
                                    md:leading-snug">
                            <p :class="`text-xs ${feature.textcolor}`">
                                {{ feature.headline }}
                            </p>
                            <p>
                                {{ feature.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-10" />
        <div>
            <h1 class="text-2xl font-bold">Preview</h1>
            <div class="mt-4">
                <SlideShow :images="screenshots" :imgClassNames="[
                            'rounded',
                            'w-auto',
                            'md:max-w-5/6',
                            'max-h-[70vh]',
                            'shadow-lg',]" />
            </div>
        </div>
        <hr class="my-10" />
        <div>
            <h1 class="text-2xl font-bold" id="download">Download</h1>
            <div class="mt-4" v-for="(download, i) in downloads">
                <p class="font-bold cursor-pointer" @click="setOpened(i)">
                    <span class="mr-1.5 text-xs opacity-75">
                        <Icon icon="angle-double-down" v-if="isOpenedIndex === i" />
                        <Icon icon="angle-double-right" v-else /> </span>{{ download.version }}
                </p>
                <div class="
                            flex flex-col
                            lg:flex-row
                            justify-center
                            items-center
                            gap-3
                            mt-2
                        " v-if="isOpenedIndex === i">
                    <a class="
                                bg-indigo-500
                                hover:bg-indigo-600
                                text-white
                                px-5
                                py-2
                                rounded-lg
                                shadow-lg
                                transition
                                duration-300"
                                :href="src.url" v-for="[platform, src] in Object.entries(download.platforms)">
                        <p>
                            <span class="mr-1">
                                <Icon :icon="getIcon(platform)" /></span>
                            Download for
                            <span class="capitalize">{{ platform }}</span>
                        </p>
                        <p class="text-xs opacity-75">
                            {{ getMb(src.size) }} MB
                        </p>
                    </a>
                </div>
            </div>
            <div class="mt-4">
                <a class="
                            text-indigo-500
                            hover:text-indigo-600
                            font-bold
                            transition
                            duration-300"
                            :href="releases.web" target="_blank">View all releases</a>
                <p class="mt-1">
                    Have trouble installing the app? Checkout our
                    <a class="
                              text-indigo-500
                              hover:text-indigo-600
                              font-bold
                              transition
                              duration-300"
                              :href="guidesUrl" target="_blank">
                        guides</a>
                    page!
                </p>
            </div>
        </div>
        <hr class="my-10" />
        <div>
            <h1 class="text-2xl font-bold">Need help?</h1>
            <p class="mt-4">
                Use our
                <a class="
                          text-indigo-500
                          hover:text-indigo-600
                          font-bold
                          transition
                          duration-300"
                          :href="guidesUrl">guides</a>
            </p>
        </div>
    </div>
    <div class="bg-indigo-500 text-center text-white px-10 py-10">
        <p>
            <strong>Yukino</strong> is licensed under <strong>MIT</strong>.
        </p>
        <p class="mt-1">
            Made with TS, Vue and time by
            <a class="font-bold" href="https://github.com/BlaNKtext" target="_blank">BlaNK</a>.
        </p>
    </div>
</main>
</template>
<script lang="ts">
import {
    defineComponent
} from "vue";
import {
    constants,
    scrollToDownloads
} from "./util";
import NavBar from "./components/NavBar.vue";
import SlideShow from "./components/SlideShow.vue";
interface DownloadEntity {
    version: string;
    platforms: Record <
        string, {
            size: number;
            url: string;
        } >
    ;
}
export default defineComponent({
    name: "App",
    components: {
        NavBar,
        SlideShow,
    },
    data() {
        const data: {
            screenshots: string[];
            features: {
                icon: string | string[];
                headline: string;
                text: string;
                bgcolor: string;
                textcolor: string;
            } [];
            releases: {
                web: string;
                all: string;
            };
            downloads: DownloadEntity[];
            guidesUrl: string;
            isOpenedIndex: number | null;
        } = {
            screenshots: ["desktop"].reduce((pv, cv) => {
                pv.push(
                    ...[
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/home.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/search.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/anime.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/episodes.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/sources.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/player.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/manga.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/bookmarks.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/connections.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/favorites.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/history.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/schedule.png`,
                        `https://github.com/BlaNKtext/YukinoWeb/raw/master/screenshots/${cv}/settings.png`
                    ]
                );
                return pv;
            }, < string[] > []),
            features: [{
                    icon: "compact-disc",
                    headline: "Ad-free",
                    text: "No more pop-ups! Watch anime with no ad interruption.",
                    bgcolor: "bg-red-500",
                    textcolor: "text-red-500",
                },
                {
                    icon: "map-marker-alt",
                    headline: "Source",
                    text: "Scrapes data from multiple sites including GogoAnime, MangaDex, etc.",
                    bgcolor: "bg-purple-500",
                    textcolor: "text-purple-500",
                },
                {
                    icon: "book-open",
                    headline: "Manga",
                    text: "Search up your favorite manga and start reading it right away!",
                    bgcolor: "bg-green-500",
                    textcolor: "text-green-500",
                },
                {
                    icon: "heart",
                    headline: "Open-sourced",
                    text: "Source code available publicly, licensed under MIT.",
                    bgcolor: "bg-pink-500",
                    textcolor: "text-pink-500",
                },
                {
                    icon: "stream",
                    headline: "UI",
                    text: "Simple, consistent and user-friendly interface!",
                    bgcolor: "bg-yellow-500",
                    textcolor: "text-yellow-500",
                },
                {
                    icon: "moon",
                    headline: "Theme",
                    text: "Has Light and Dark mode to protect your eyes!",
                    bgcolor: "bg-gray-900",
                    textcolor: "text-gray-500",
                },
                {
                    icon: ["fab", "discord"],
                    headline: "Discord RPC",
                    text: "Let your friends know what you are watching!",
                    bgcolor: "bg-blue-700",
                    textcolor: "text-blue-700",
                },
                {
                    icon: "bolt",
                    headline: "Cross Platform",
                    text: "Available for Windows, MacOS, and Linux! Built on top of Vue and Electron.",
                    bgcolor: "bg-blue-400",
                    textcolor: "text-blue-400",
                },
            ],
            releases: {
                web: "https://github.com/BlaNKtext/YukinoCustom/releases",
                all: "https://api.github.com/repos/BlaNKtext/YukinoCustom/releases",
            },
            downloads: [],
            guidesUrl: constants.urls.guides,
            isOpenedIndex: 0,
        };

        return data;
    },
    mounted() {
        this.getReleases();
    },
    methods: {
        async getReleases() {
            try {
                const res = (await fetch(this.releases.all).then((res) =>
                    res.json()
                )) as any[];
                const releases = res
                    .filter((x) => !x.draft)
                    .sort(
                        (a, b) =>
                        new Date(a.updated_at).getTime() -
                        new Date(b.updated_at).getTime())
                    .slice(0, 5);
                releases.forEach((release) => {
                    const version = release.tag_name;
                    const windows = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".exe")
                    );
                    const linux = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".AppImage")
                    );
                    const mac = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".dmg")
                    );
                    const android = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".apk")
                    );
                    if (version) {
                        const r: DownloadEntity = {
                            version,
                            platforms: {},
                        };
                        if (windows) {
                            r.platforms.windows = {
                                url: windows.browser_download_url,
                                size: windows.size,
                            };
                        }
                        if (linux) {
                            r.platforms.linux = {
                                url: linux.browser_download_url,
                                size: linux.size,
                            };
                        }
                        if (mac) {
                            r.platforms.mac = {
                                url: mac.browser_download_url,
                                size: mac.size,
                            };
                        }
                        if (android) {
                            r.platforms.android = {
                                url: android.browser_download_url,
                                size: android.size,
                            };
                        }
                        this.downloads.push(r);
                    }
                });
            } catch (err) {
                console.error(err);
            }
        },
        setOpened(index: number) {
            if (this.isOpenedIndex === index)
                return (this.isOpenedIndex = null);
            this.isOpenedIndex = index;
        },
        getMb(size: number) {
            return (size / 1000000).toFixed(2);
        },
        getIcon(platform: string) {
            switch (platform) {
                case "windows":
                    return ["fab", "windows"];
                case "linux":
                    return ["fab", "linux"];
                case "mac":
                    return ["fab", "apple"];
                case "android":
                    return ["fab", "android"];
                default:
                    return "";
            }
        },
        scrollToDownloads,
    },
});
</script>