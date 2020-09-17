/** A custom map marker, to be cloned. */
const mapMarker = (): HTMLDivElement => {
  const marker = document.createElement('div');
  marker.classList.add('map-marker');

  const inner = document.createElement('div');
  inner.classList.add('map-marker__inner');

  marker.appendChild(inner);

  return marker;
};

export default mapMarker;
