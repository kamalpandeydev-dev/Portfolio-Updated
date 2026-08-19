import WorkspacePremiumRounded from "@mui/icons-material/WorkspacePremiumRounded";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { RegistrationForm } from "./registration-form";

export function RegistrationPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        px: { xs: 2, sm: 3 },
        py: { xs: 3, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1060,
          overflow: "hidden",
          border: "1px solid rgba(108, 62, 244, 0.14)",
          boxShadow: "0 28px 80px rgba(42, 31, 92, 0.16)"
        }}
      >
        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderBottom: "1px solid",
            borderColor: "divider",
            background:
              "linear-gradient(135deg, rgba(108, 62, 244, 0.1), rgba(255, 184, 0, 0.12))"
          }}
        >
          <Stack spacing={2}>
            <Chip
              icon={<WorkspacePremiumRounded />}
              label="Star Sponsor"
              color="primary"
              variant="outlined"
              sx={{
                width: "fit-content",
                borderRadius: 999,
                bgcolor: "rgba(255, 255, 255, 0.72)",
                fontWeight: 700
              }}
            />
            <Box>
              <Typography component="h1" variant="h1" sx={{ mb: 1 }}>
                Business Registration
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 680 }}
              >
                Register your business profile for future sponsorship and
                collaboration opportunities with premium brands.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, pt: { xs: 0, sm: 1 } }}>
          <RegistrationForm />
        </Box>
      </Paper>
    </Box>
  );
}
