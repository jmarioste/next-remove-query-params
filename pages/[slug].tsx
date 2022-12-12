import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DynamicMarketingPage = () => {
  const router = useRouter();

  const query = router.query;

  useEffect(() => {
    if (router.isReady) {
      router.push(
        {
          query: {
            slug: query.slug,
          },
        },
        undefined,
        { shallow: true }
      );

      const utm_source = query.utm_source;
      if (utm_source) {
        console.log(utm_source);
        // do data tracking
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return <div>Dynamic Marketing Page</div>;
};

export default DynamicMarketingPage;
