export async function getLaunches() {
  const res = await fetch('https://api.spacexdata.com/v5/launches');
  return res.json();
}
