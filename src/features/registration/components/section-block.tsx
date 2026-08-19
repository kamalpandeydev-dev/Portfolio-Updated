import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface SectionBlockProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SectionBlock({ title, icon, children }: SectionBlockProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 4 },
        borderBottom: "1px solid",
        borderColor: "divider"
      }}
    >
      <Stack
        direction="row"
        spacing={1.25}
        sx={{ mb: 2.5, alignItems: "center" }}
      >
        <Box
          aria-hidden="true"
          sx={{
            width: 36,
            height: 36,
            borderRadius: "12px",
            display: "grid",
            placeItems: "center",
            color: "primary.main",
            backgroundColor: "rgba(108, 62, 244, 0.1)"
          }}
        >
          {icon}
        </Box>
        <Typography variant="h2">{title}</Typography>
      </Stack>
      {children}
    </Box>
  );
}
