'use client';
import useSWR from 'swr';
import Link from 'next/link';
import styles from './page.module.css';

type Planet = {
  climate: string,
  diameter: string,
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  residents: string[],
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string
}

const fetcher = (...args: [RequestInfo | URL]) => fetch(...args).then((res) => res.json());

/*
 helper function to format strings properly. the api returns a string type, so we have to pass a 
 parameter to indicate if we want the value to be displayed as a number
*/
const format = (value: string | number, number: boolean): string | number => {
  if(value === 'unknown') {
    return '?';
  }

  if(number) {
    return Number(value).toLocaleString().replaceAll(',', ' ');
  }

  return value;
}; 

// helper function to calculate the surface area of a planet covered in water
const calculateSurfaceArea = (diameter: string, surfaceWater: string ): string =>  {
  if(diameter === 'unknown' || surfaceWater === 'unknown') {
    return 'unknown';
  }

  const radius = Number(diameter)/2;
  const percentageWater = Number(surfaceWater)/100;

  return String(Math.round(4 * Math.PI * Math.pow(radius, 2) * percentageWater));
};

export default function Home()  {
  const { data, error, isLoading } = useSWR('https://swapi.dev/api/planets/', fetcher);

  // Alphabetically sort the planets
  const sortedData = data?.results.sort((a: Planet, b: Planet) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  if (isLoading) return <p className={styles.main}>Loading...</p>;
  if (error) return <p className={styles.main}> Error loading content</p>;

  return (
    <main className={styles.main}>
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Residents</th>
          <th>Terrain</th>
          <th>Population</th>
          <th>Surface Area Covered in Water (km<sup>2</sup>) </th>
        </tr>

        {sortedData?.map((planet: Planet) => {
          return (
            <tr key={planet.name} className={styles.card}>
              <td><Link href={planet.url} target='_blank'>{planet.name}</Link></td>
              <td>{format(planet.climate, false)}</td>
              <td>{format(planet.residents.length, true)}</td>
              <td>{format(planet.terrain, false)}</td>
              <td>{format(planet.population, true)}</td>
              <td>{format(calculateSurfaceArea(planet.diameter, planet.surface_water), true)}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  </main>
  );
}
