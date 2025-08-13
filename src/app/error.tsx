"use client";

import ErrorMessage from "@/components/ErrorMessage";

const RootErrorPage = () => {
  return (
    <ErrorMessage
      content="An error occurred because the application cannot recover. Please try again later"
      contentTitle="501"
      pageTitle="Internal Server Error"
    />
  );
};

export default RootErrorPage;
