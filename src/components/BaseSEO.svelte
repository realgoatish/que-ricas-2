<script>
  import { stores } from "@sapper/app";
  import { layoutSEO } from "./../_helpers/stores.js";
  const { page } = stores();
  import { onMount } from "svelte";

  onMount(() => {
    if (
      document.querySelectorAll("script[type='application/ld+json']").length > 1
    ) {
      const test = document.querySelector("script[type='application/ld+json']");
      test.parentNode.removeChild(test);
    }
  });

  export let title = "test";
  export let description = "test";

  export let image = "test";
  export let imageExtension;
  export let altText = "test";
  const siteUrl = `https://www.que-ricas.com/`;
  export let canonical;
  // $page.path === "/" ? siteUrl : `https://${$page.host}${$page.path}/`;
  const siteName = "Que Ricas";
  const siteDescription =
    "Featuring the best Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, gluten free and vegan options";

  let jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}#westmont`,
        name: siteName,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}#logo`,
          url: $layoutSEO.logo.image,
        },
        hasMenu: `${siteUrl}menu/`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "11:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "11:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Monday",
            opens: "00:00",
            closes: "00:00",
          },
        ],
        telephone: $layoutSEO.phoneNumber,
        url: siteUrl,
        sameAs: [
          $layoutSEO.instagramLink,
          $layoutSEO.facebookLink,
          $layoutSEO.yelpLink,
        ],
        hasMap: $layoutSEO.googleMapsLink,
        email: $layoutSEO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: $layoutSEO.streetAddress,
          addressLocality: $layoutSEO.city,
          addressRegion: $layoutSEO.state,
          postalCode: $layoutSEO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "39.9114113",
          longitude: "-75.0538163",
        },
        image: {
          "@id": `${siteUrl}#logo`,
        },
        servesCuisine: ["Venezuelan", "South American"],
        priceRange: "$",
        paymentAccepted: "Cash, Credit Card",
        currenciesAccepted: "USD",
        acceptsReservations: "No",
        description: siteDescription,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: siteName,
        url: siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@id": `${siteUrl}#westmont`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: `${canonical}`,
        inLanguage: "en-US",
        name: `${title} | ${siteName}`,
        image: {
          "@type": "ImageObject",
          "@id": `${canonical}#primaryimage`,
          url: image,
        },
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        primaryImageOfPage: {
          "@id": `${canonical}#primaryimage`,
        },
        description: description,
        // breadcrumb: {
        //   "@id": `${canonical}/#breadcrumb`,
        // },
      },
    ],
  };

  let breadCrumbs = {};

  let breadCrumbId = {};

  if ($page.path === "/menu/" || $page.path === "/story/") {
    breadCrumbId = {
      breadcrumb: {
        "@id": `${canonical}#breadcrumb`,
      },
    };
    breadCrumbs = {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": `${siteUrl}#webpage`,
            url: `${siteUrl}`,
            name: `Home`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": `${canonical}#webpage`,
            url: `${canonical}`,
            name: `${$page.path === "/menu/" ? "Menu" : "Story"}`,
          },
        },
      ],
    };
    jsonld["@graph"][2] = Object.assign(jsonld["@graph"][2], {
      ...breadCrumbId,
    });
    jsonld = Object.assign(jsonld, { ...breadCrumbs });
  }

  // $: console.log(jsonld);

  jsonld = JSON.stringify(jsonld);

  // weird hack required to prevent prettier from breaking the script tag we're trying to build
  let jsonldScript = `<script type="application/ld+json">${
    jsonld + "<"
  }/script>`;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href={canonical} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={title} />
  <!-- <meta property="og:image" content={`${image.replace(`.${imageExtension}`, `-800.${imageExtension}`)}`} /> -->
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={altText} />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="400" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  {@html jsonldScript}
</svelte:head>
