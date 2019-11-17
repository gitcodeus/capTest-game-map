function GameMap() {

}

/**
 * Render Game Map inside of HTML Element
 *
 * @param {HTMLElement} el
 */
GameMap.prototype.render = function(el) {
  var map = document.createElement('div');
  map.style.width = '500px';
  map.style.height = '500px';
  map.style.display = 'flex';
  map.style.flexWrap = 'wrap';

  var parcel;
  for (var c=0; c<100; c++) {
    parcel = document.createElement('div');
    parcel.style.width = '50px';
    parcel.style.height = '50px';
    parcel.style.border = '1px black solid';
    parcel.style.boxSizing = 'border-box';
    map.appendChild(parcel);
  }

  el.appendChild(map);
};

module.exports = GameMap;