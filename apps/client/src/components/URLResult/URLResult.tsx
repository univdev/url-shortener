import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import { useUrlResultQuery } from "./useUrlResultQuery";
import Image from "next/image";
import { useUrlQRQuery } from "./useUrlQRQuery";
import { ContentCopy } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";

export type URLResultProps = {
  shortUrl?: string;
};

export const URLResult: FC<URLResultProps> = ({ shortUrl }) => {
  const urlResultQuery = useUrlResultQuery(shortUrl);
  const urlQRQuery = useUrlQRQuery(shortUrl);

  if (urlResultQuery.isSuccess === false) return null;
  if (urlQRQuery.isSuccess === false) return null;

  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${urlResultQuery.data.data.shortKey}`;

  const handleCopied = () => {
    toast.success("Copied to clipboard");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" rowGap={4}>
      <TextField
        value={fullUrl}
        fullWidth
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <CopyToClipboard text={fullUrl} onCopy={handleCopied}>
                <IconButton sx={{ ml: 2 }} size="small">
                  <ContentCopy />
                </IconButton>
              </CopyToClipboard>
            ),
          },
        }}
      />
      <Image src={urlQRQuery.data.data} alt="QR" width={200} height={200} />
    </Box>
  );
};
