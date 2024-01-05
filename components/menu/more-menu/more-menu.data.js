import { ClockSVG, NoChatSVG, NoSoundSVG, ShareSVG, TrophySVG } from "@/components/svg";

export const MORE_MENU = [
  {
    name: "Bli med i konkurransen",
    Icon: TrophySVG,
    action: null,
  },
  {
    name: "Bli med i quiz",
    Icon: ClockSVG,
    action: null,
  },
  {
    name: "Del show",
    Icon: ShareSVG,
    action: 'share',
  },
  {
    name: "Del show fra ",
    Icon: ShareSVG,
    action: 'shareAtTime',
  },
  {
    name: "Skjul chat",
    Icon: NoChatSVG,
    action: 'chat',
  },
  {
    name: "Mute",
    Icon: NoSoundSVG,
    action: 'sound',
  },

];
