import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const analytics = Analytics({
  app: "movie-website",
  plugins: [
    googleAnalytics({
      measurementIds: [process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!],
    }),
  ],
});

export default analytics;
