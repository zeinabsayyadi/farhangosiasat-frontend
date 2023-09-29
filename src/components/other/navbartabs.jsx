import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import Image from "next/image";
import article from "../../../public/svgs/article.svg";
import articleWhite from "../../../public/svgs/articleWhite.svg";
import news from "../../../public/svgs/news.svg";
import newsWhite from "../../../public/svgs/newsWhite.svg";
import book from "../../../public/svgs/book.svg";
import bookWhite from "../../../public/svgs/bookWhite.svg";
import podcast from "../../../public/svgs/podcast.svg";
import podcastWhite from "../../../public/svgs/podcastWhite.svg";
import video from "../../../public/svgs/video.svg";
import videoWhite from "../../../public/svgs/videoWhite.svg";
import idea from "../../../public/svgs/idea.svg";
import ideaWhite from "../../../public/svgs/ideaWhite.svg";
import { Typography, useTheme } from "@mui/material";

const NavBarTabs = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      TabIndicatorProps={{
        sx: { backgroundColor: theme.palette.primary.light },
      }}
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab
        icon={
          <Image
            priority
            src={value === 0 ? news : newsWhite}
            alt="news"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 0
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            تازه ها
          </Typography>
        }
      />
      <Tab
        icon={
          <Image
            priority
            src={value === 1 ? article : articleWhite}
            alt="article"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 1
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            مقالات
          </Typography>
        }
      />
      <Tab
        icon={
          <Image
            priority
            src={value === 2 ? book : bookWhite}
            alt="book"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 2
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            کتاب صوتی
          </Typography>
        }
      />
      <Tab
        icon={
          <Image
            priority
            src={value === 3 ? podcast : podcastWhite}
            alt="podcast"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 3
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            پادکست
          </Typography>
        }
      />
      <Tab
        icon={
          <Image
            priority
            src={value === 4 ? video : videoWhite}
            alt="video"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 4
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            ویدئو
          </Typography>
        }
      />
      <Tab
        icon={
          <Image
            priority
            src={value === 5 ? idea : ideaWhite}
            alt="sujjest"
          />
        }
        label={
          <Typography
            variant="button"
            color={
              value === 5
                ? theme.palette.text.primary.light
                : theme.palette.text.secondary.main
            }
          >
            پیشنهاد فرهنگ و سیاست
          </Typography>
        }
      />
    </Tabs>
  );
};

export default NavBarTabs;
