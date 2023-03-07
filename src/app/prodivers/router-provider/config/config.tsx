import {Main} from "@/pages/main";

export interface IRoutingList {
    langKey: string
    iconJsx: JSX.Element
    to: string
    key: string
    component?: JSX.Element
    backLink?: string
}

export const ROUTES: IRoutingList[] = [
    {
        langKey: "pages.main",
        iconJsx: <div/>,
        to: '/',
        key: "MAIN",
        component: <Main/>,
    },
    {
        langKey: "pages.games",
        iconJsx: <div/>,
        to: '/games',
        key: "GAMES",
        component: <Main/>,
    },
    {
        langKey: "pages.game",
        iconJsx: <div/>,
        to: '/game/:id',
        key: "GAME",
        component: <Main/>,
        backLink: "/games"
    },
    {
        langKey: "pages.static",
        iconJsx: <div/>,
        to: '/static/:id',
        key: "STATIC",
        component: <Main/>,
    }
]