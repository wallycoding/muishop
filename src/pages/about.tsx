import {
  Container as MuiContainer,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import useAboutState from "../states/about";

export default function About() {
  const {
    stepList,
    currentStep,
    toggleNextStep,
    toggleBackStep,
    toggleResetStep,
  } = useAboutState();

  return (
    <Container>
      <Head>
        <title>MUIshop | About</title>
        <meta name="description" content="MUIshop Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MuiContainer maxWidth="md" style={{ marginTop: 10 }}>
          <Stepper activeStep={currentStep} orientation="vertical">
            {stepList.map((step, index) => {
              return (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={toggleNextStep}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index !== stepList.length - 1 ? "Next" : "Finish"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={toggleBackStep}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          {stepList.length === currentStep && (
            <Paper square elevation={0} sx={{ p: 3, borderRadius: 1 }}>
              <Typography>Thanks for reading.</Typography>
              <Button onClick={toggleResetStep} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </MuiContainer>
      </main>
      <Footer />
    </Container>
  );
}
