import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = (event) => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={scrollDirection == "down" ? -200 : 0}
      transform={"auto"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social) => {
              return (
                <a
                  style={{ marginRight: "1rem" }}
                  href={social.url}
                  target="blank"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              );
            })}
          </nav>

          <nav>
            <a
              style={{ marginRight: "1rem" }}
              href="/#projects"
              onClick={handleClick("projects")}
            >
              Projects
            </a>
            <a
              style={{ marginRight: "1rem" }}
              href="/#contact-me"
              onClick={handleClick("contactme")}
            >
              Contact Me
            </a>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
