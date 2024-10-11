export const goToLocation = (
  coordinates: [latitude: number, longitude: number, elevation?: number]
) => {
  console.log(`Latitudine: ${coordinates[0]}`);
  console.log(`Longitudine: ${coordinates[1]}`);
  if (coordinates[2] !== undefined) {
    console.log(`Altitudine: ${coordinates[2]}`);
  } else {
    console.log("Altitudine non fornita");
  }
};

goToLocation([45.4642, 9.19]);
goToLocation([45.4642, 9.19, 120]);
