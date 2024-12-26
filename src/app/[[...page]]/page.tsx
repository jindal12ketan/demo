/**
 * @file Dynamic Page Router
 * @description Handles dynamic routing and content fetching from Builder.io
 * @param {Object} params - URL parameters including locale and page segments
 * @property {string[]} params.page - Array of URL segments
 */
// This file is used for dynamic routing to render Builder.io pages
// It fetches content from Builder.io based on the locale and url path
// The content is rendered using the RenderBuilderContent component
// The page content is fetched using the Builder.io SDK
// This file can be customized to handle 404 errors and other use cases

import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Initialize Builder.io with the public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Page props for dynamic routing
interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  // Define the Builder.io model name for the page
  const builderModelName = "page";

  // Extract locale and page segments
  // default to "en-us" locale if not provided
  // urlPath is the remaining segments after the locale
  const [locale = "en-us", ...pageSegments] = params?.page ?? [];
  const urlPath = "/" + (pageSegments.length > 0 ? pageSegments.join("/") : "");

  // Fetch content dynamically from Builder.io
  // using the model name and user attributes
  // page content is fetched based on the locale and url path
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
        locale,
      },
    })
    .toPromise();

  // Handle missing content or invalid locale
  // TODO - handle 404 status code & page not found
  if (!content) {
    return (
      <div>
        <h1>Page not found</h1>
        <p>The requested content could not be found for locale "{locale}" and path "{urlPath}".</p>
      </div>
    );
  }

  // Render the Builder.io page
  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
