import { ReactElement, ReactNode } from "react";

import Bat from "shared/assets/bat.svg";
import Beetle from "shared/assets/beetle.svg";
import Butterfly from "shared/assets/butterfly.svg";
import Chameleon from "shared/assets/chameleon.svg";
import Crocodile from "shared/assets/crocodile.svg";
import Dog from "shared/assets/dog.svg";
import Hippo from "shared/assets/hippo.svg";
import Husky from "shared/assets/husky.svg";
import Kangaroo from "shared/assets/kangaroo.svg";
import Manatee from "shared/assets/manatee.svg";
import Monkey from "shared/assets/monkey.svg";
import Raccoon from "shared/assets/raccoon.svg";
import Rooster from "shared/assets/rooster.svg";
import SeaRay from "shared/assets/sea-ray.svg";
import Toucan from "shared/assets/toucan.svg";
import Whale from "shared/assets/whale.svg";

export enum Animals {
  BAT = "bat",
  BEETLE = "beetle",
  BUTTERFLY = "butterfly",
  CHAMELEON = "chameleon",
  CROCODILE = "crocodile",
  DOG = "dog",
  HIPPO = "hippo",
  HUSKY = "husky",
  KANGAROO = "kangaroo",
  MANATEE = "manatee",
  MONKEY = "monkey",
  RACCOON = "raccoon",
  ROOSTER = "rooster",
  SEARAY = "sea-ray",
  TOUCAN = "toucan",
  WHALE = "whale",
}

export const AvatarIcons: Record<Animals, ReactNode> = {
  [Animals.BAT]: <Bat />,
  [Animals.BEETLE]: <Beetle />,
  [Animals.BUTTERFLY]: <Butterfly />,
  [Animals.CHAMELEON]: <Chameleon />,
  [Animals.CROCODILE]: <Crocodile />,
  [Animals.DOG]: <Dog />,
  [Animals.HIPPO]: <Hippo />,
  [Animals.HUSKY]: <Husky />,
  [Animals.KANGAROO]: <Kangaroo />,
  [Animals.MANATEE]: <Manatee />,
  [Animals.MONKEY]: <Monkey />,
  [Animals.RACCOON]: <Raccoon />,
  [Animals.ROOSTER]: <Rooster />,
  [Animals.SEARAY]: <SeaRay />,
  [Animals.TOUCAN]: <Toucan />,
  [Animals.WHALE]: <Whale />,
};
