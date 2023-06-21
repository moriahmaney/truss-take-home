This project is the submission by Moriah Maney for Truss's take home project for the Senior Software Engineer position. The prompt given is as follows:

Please write a webpage that loads data from `https://swapi.dev/api/planets/`, formats and displays that data in a table. SWAPI documentation can be found [here](https://swapi.dev/documentation)

Please load and display data from a single page of the API, but be aware that we may test your solution against a different page.

Name the entrypoint for your application `index.html`.

You may use additional files to organize your code. You may also use frameworks and build tools as long as clear, simple instructions are provided for how to run them. Please ensure your solution can be easily viewed in the browser. Be ready to answer questions about why you chose a given approach.

Don't worry about making the table look fancy; you can style it however you
would like to alongside the requirements below. We will look at the markup you
generate and any code you write to load or display the data.

For each planet in the dataset, please display:

-   The planet's name
    -   The name should be a link that, when clicked, opens the planet's API URL in a new window
-   The planet's climate
-   How many residents the planet has
-   The terrains found on the planet
-   The population
-   The surface area (in km<sup>2</sup>) covered by water
    -   Assume that all planets are perfect spheres.
    -   The radius of a sphere is half its diameter.
    -   The value of `surface_water` from the API is a percentage, so a value of `50` means the planet is 50% covered in water.
    -   Round these values to the nearest integer value.

Additionally, please satisfy these requirements:

-   Show a loading message while loading the data, and hide this message once the data is displayed.
-   Display an error message if the data load fails for some reason. We may test your code against an invalid URL to demonstrate this.
-   Sort the planets alphabetically
-   Any column that is "unknown" should be displayed as `?`.
-   Format all numbers larger than 999 with spaces to group digits into groups of three.
    For example, ten thousand should be displayed as `10 000`.
-   Cells in the table should be separated by 1 pixel gray lines.

## Getting Started
First, install packages: 
```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.