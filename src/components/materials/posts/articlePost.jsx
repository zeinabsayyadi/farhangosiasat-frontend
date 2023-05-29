import {
  Box,
  ButtonBase,
  CardActionArea,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

//spilit context to 1 2 or 3 parts in backend
// function strSplitOnLength(data, your_desired_width) {
//     if(data.length <= 0)
//         return [];  // return an empty array

//     var splitData = data.split(/([\s\n\r]+)/);
//     var arr = [];
//     var cnt = 0;
//     for (var i = 0; i < splitData.length; ++i) {
//         if (!arr[cnt]) arr[cnt] = '';  //Instantiate array entry to empty string if null or undefined

//         if (your_desired_width < (splitData[i].length + arr[cnt].length))
//             cnt++;

//         arr[cnt] += splitData[i];
//     }

//     return arr;
// }

// strSplitOnLength('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, est ut interdum ullamcorper, metus lorem interdum ipsum, vitae vulputate ante quam ut augue. Praesent sit amet varius lorem. Aliquam odio nunc, mattis in mollis vitae, laoreet non velit. Curabitur adipiscing, nisl tincidunt consequat ornare, ligula mauris sed.', 140);​

const ArticlePost = ({ article }) => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          backgroundColor: theme.palette.background.darkgreen,
          display: "flex",
        }}
      >
        <Typography>{article?.title}</Typography>
        <Typography>{article?.author}</Typography>
        <div>
          <Image
            alt={article?.title}
            src={article?.img[0]}
          />
        </div>
        <Typography paragraph>{article?.context[0]}</Typography>
      </Box>
      <div>
        <Image
          alt={article?.title}
          src={article?.img[1]}
        />
      </div>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
        }}
      >
        <Typography paragraph>{article?.context[1]}</Typography>
        <div>
          <Image
            alt={article?.title}
            src={article?.img[2]}
          />
        </div>
        <Typography paragraph>{article?.context[2]}</Typography>
      </Box>

      <CardActionArea>
        <ButtonBase>قلب</ButtonBase>
        <ButtonBase>کامنت</ButtonBase>
      </CardActionArea>
    </div>
  );
};
export default ArticlePost;
