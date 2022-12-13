import React from "react";
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { SocialMediaIcon } from "./SocialMediaIcon";

export const SocialMedia = () => {
  return (
    <>
      <ol className="socialMedia-container">
        <SocialMediaIcon
          url={"https://github.com/DiegoEMartinezZ"}
          image={faGithub}
        />
        <SocialMediaIcon
          url={"https://www.linkedin.com/in/diegomz/"}
          image={faLinkedin}
        />
        <SocialMediaIcon
          url={"https://www.behance.net/srmiel"}
          image={faBehance}
        />
        <SocialMediaIcon
          url={"https://www.instagram.com/lowoncyan_"}
          image={faInstagram}
        />
      </ol>
    </>
  );
};
