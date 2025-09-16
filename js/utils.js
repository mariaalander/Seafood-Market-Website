let map;

export async function initMap() {
  const position = { lat: 59.3181215, lng: 18.0756785 };

  try {
    // Ladda Google Maps-bibliotek
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Skapa kartan
    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      zoomControl: true,
      mapId: "seafood_market_map",
    });

    // Lägg till markör
    new AdvancedMarkerElement({
      map,
      position,
      title: "Seafood Market",
    });
  } catch (error) {
    console.error("Kunde inte ladda Google Maps:", error);
    document.getElementById("map").innerHTML =
      "Kartan kunde inte laddas. Se adressen ovan.";
  }
}
