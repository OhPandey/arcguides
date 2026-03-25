import { HeroTree } from "../../headers/hero";
import { aangTree } from "./air/aang";
import { borteTree } from "./air/borte";
import { bumiTree } from "./air/bumi";
import { meeloTree } from "./air/meelo";
import { tenzinTree } from "./air/tenzin";
import { yangchenTree } from "./air/yangchen";
import { caiTree } from "./earth/cai";
import { kingBumiTree } from "./earth/kingBumi";
import { kueiTree } from "./earth/kuei";
import { kyoshiTree } from "./earth/kyoshi";
import { melonLordTree } from "./earth/melonLord";
import { sukiTree } from "./earth/suki";
import { teoTree } from "./earth/teo";
import { tophTree } from "./earth/toph";
import { asamiTree } from "./fire/asami";
import { azulaTree } from "./fire/azula";
import { irohTree } from "./fire/iroh";
import { kenshiTree } from "./fire/kenshi";
import { piandaoTree } from "./fire/piandao";
import { rokuTree } from "./fire/roku";
import { zukoTree } from "./fire/zuko";
import { amonTree } from "./water/amon";
import { kataraTree } from "./water/katara";
import { kataraPLTree } from "./water/kataraPL";
import { korraTree } from "./water/korra";
import { phyanTree } from "./water/phyan";
import { sokkaTree } from "./water/sokka";
import { unalaqTree } from "./water/unalaq";
import { yueTree } from "./water/yue";

export const heroMapping: Record<string, HeroTree> = {
    unalaq: unalaqTree,
    korra: korraTree,
    sokka: sokkaTree,
    yue: yueTree,
    phyan: phyanTree,
    katara: kataraTree,
    azula: azulaTree,
    zuko: zukoTree,
    asami: asamiTree,
    kenshi: kenshiTree,
    piandao: piandaoTree,
    iroh: irohTree,
    kyoshi: kyoshiTree,
    cai: caiTree,
    suki: sukiTree,
    kuei: kueiTree,
    teo: teoTree,
    toph: tophTree,
    melonLord: melonLordTree,
    aang: aangTree,
    bumi: bumiTree,
    borte: borteTree,
    meelo: meeloTree,
    tenzin: tenzinTree,
    amon: amonTree,
    kingBumi: kingBumiTree,
    yangchen: yangchenTree,
    kataraPL: kataraPLTree,
    roku: rokuTree
}