import ErrorMessage from "@/components/ErrorMessage";

const NotFoundPage = () => {
  return (
    <ErrorMessage
      content="Error 404 - The page you are trying access does not exist"
      contentTitle="404"
      pageTitle="The blog - Page not found - 404"
    />
  );
};

export default NotFoundPage;
