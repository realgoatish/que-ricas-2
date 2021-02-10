<script>
  import ImageLoader from "./images/ImageLoader.svelte";
  import { currentSection } from "./../_helpers/stores";

  export let info;

  const headers = info[0];

  const getStepOne = (section, headers) => {
    let result;
    if (headers.menuSectionTitle === "Platters") {
      result = section.filter((x) => x.itemName && !x.description);
    } else if (headers.menuSectionTitle === "Churros") {
      result = section.filter((x) => x.description);
    }
    return result;
  };

  const getStepTwo = (section, headers) => {
    let result;
    if (headers.menuSectionTitle === "Platters") {
      result = section.filter((x) => x.itemName && x.description);
    } else if (headers.menuSectionTitle === "Churros") {
      result = section.filter((x) => x.itemName && !x.description);
    }
    return result;
  };
</script>

<section class:visible-block={$currentSection === headers.menuSectionTitle}>
  <h1>{headers.menuSectionTitle}</h1>
  {#if headers.menuSectionPrimarySubtext}
    <p class="pre-wrap">{headers.menuSectionPrimarySubtext}</p>
  {/if}
  {#if headers.menuSectionSecondarySubtext}
    <br />
    <p class="bold">{headers.menuSectionSecondarySubtext}</p>
  {/if}

  <!-- Platters & Churros Sections -->
  {#if headers.menuStepOneTitle}
    <div class="div__step-one">
      <h2>{headers.menuStepOneTitle}</h2>
      {#each getStepOne(info, headers) as item}
        <div class="div__menu-item">
          <div class:div__menu-item-text={item.productImage}>
            <h3>{item.itemName}</h3>
            <p>{item.price}</p>
            {#if item.description}
              <p>{item.description}</p>
            {/if}
          </div>
          <!-- Display item's image if it has one -->
          {#if item.productImage}
            <figure class="figure__menu-item-image">
              <a href={item.productImage}>
                <!-- .split('') -->
                <ImageLoader
                  srcset={`
                  ${item.productImage.substring(4, 0)}-400.webp 400w,
                  ${item.productImage.substring(4, 0)}-400.jpeg `}
                  src={item.productImage}
                  alt={""}
                  rounded={true}
                />
              </a>
              <figcaption>
                <p>
                  {item.itemName}
                </p>
              </figcaption>
            </figure>
          {/if}
        </div>
      {/each}
    </div>

    <div class="div__step-two">
      <h2>{headers.menuStepTwoTitle}</h2>
      {#each getStepTwo(info, headers) as item}
        <div class="div__menu-item">
          <div class:div__menu-item-text={item.productImage}>
            <h3>{item.itemName}</h3>
            {#if item.description}
              <p>{item.description}</p>
            {/if}
          </div>
          <!-- Image container will go here w/ its own class -->
          {#if item.productImage}
            <figure class="figure__menu-item-image">
              <a href={item.productImage}>
                <ImageLoader
                  src={item.productImage}
                  alt={item.altText}
                  rounded={true}
                  width={"2960"}
                  height={"2960"}
                />
              </a>
              <figcaption>
                <p>
                  <span class="bold">Protein:</span>
                  {item.productImageProtein}
                </p>
                <!-- <br /> -->
                <p><span class="bold">Style:</span> {item.productImageStyle}</p>
              </figcaption>
            </figure>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <div>
      {#each info as item}
        {#if item.number > 0}
          <div class="div__menu-item">
            <div class:div__menu-item-text={item.productImage}>
              <h2 class="h2__menu--downsize">{item.itemName}</h2>
              <p>{item.price}</p>
              {#if item.description}
                <p>{item.description}</p>
              {/if}
            </div>
            <!-- Display item's image if it has one -->
            {#if item.productImage}
              <figure class="figure__menu-item-image">
                <a href={item.productImage}>
                  <ImageLoader
                    src={item.productImage}
                    alt={""}
                    rounded={true}
                  />
                </a>
                <figcaption>
                  <p>
                    {item.itemName}
                  </p>
                </figcaption>
              </figure>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</section>

<style>
  section {
    display: none;
    text-align: center;
  }

  .visible-block {
    display: block;
  }

  .bold {
    font-weight: 600;
  }

  .pre-wrap {
    white-space: pre-wrap;
  }

  /* Remove the branded colors/text-shadow and downsize h2's for certain menu sections. Our conditional rendering used the branded globally-styled h2's for Churros & Platters Step One & Step Two Sections. For Starters, Empanadas, Arepas, Drinks, Specials, we'll need h2's to serve the same presentational role that h3's served in Platters and Churros. This keeps both the HTML's semantic structure and the visual experience consistent */
  .h2__menu--downsize {
    font-size: 125%;
    color: inherit;
    text-shadow: none;
  }

  .h2__menu--downsize,
  h3 {
    font-weight: 500;
  }

  .div__menu-item {
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    line-height: 1.75;
    padding: 10px 0 10px;
  }

  .div__menu-item:not(:last-child) {
    border-bottom: 1px solid;
    border-color: #eae7db;
  }

  .figure__menu-item-image {
    width: 40%;
    max-width: 10rem;
  }

  .div__menu-item-text {
    width: 55%;
    margin: auto 0;
  }

  figcaption {
    line-height: 1.5;
  }
</style>
