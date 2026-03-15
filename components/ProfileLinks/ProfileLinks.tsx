import { Group, Button, Stack, Anchor, Divider, Image } from "@mantine/core";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import classes from "./ProfileLinks.module.css";
import { GithubIcon } from "@mantinex/dev-icons";

export default function ProfileLinks() {
  return (
    <Group gap="sm" mt="sm" wrap="wrap" justify="center">
      <Button
        className={classes.action}
        data-linked-in
        rightSection={<IconBrandLinkedinFilled size={26} />}
        justify="space-between"
        component="a"
        href={"https://www.linkedin.com/in/clairemirashaw"}
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </Button>

      <Button
        className={classes.action}
        data-github
        rightSection={<GithubIcon size={26} />}
        href={"https://github.com/clairemira"}
        justify="space-between"
        component="a"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </Button>

      <Button
        className={classes.action}
        data-orcid
        color="rgb(166, 206, 57)"
        rightSection={
          <Image
            h={26}
            w="auto"
            fit="contain"
            src="/images/orcid-logo-white.png"
          />
        }
        href={"https://orcid.org/0009-0006-9340-585X"}
        justify="space-between"
        component="a"
        target="_blank"
        rel="noopener"
      >
        ORCID
      </Button>
    </Group>
  );
}
