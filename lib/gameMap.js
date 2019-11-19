function GameMap() {
  this.clicOnParcelHandler = null;
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
    parcel.id = 'parcel_' + String(c + 1);
    parcel.style.width = '50px';
    parcel.style.height = '50px';
    parcel.style.border = '1px black solid';
    parcel.style.boxSizing = 'border-box';
    parcel.style.cursor = 'hand';
    parcel.onclick = this.clicOnParcelHandler;
    map.appendChild(parcel);
  }

  el.appendChild(map);
};

/**
 * Set Click on Parcel Handler
 *
 * @param {function} handler
 */
GameMap.prototype.handleClickOnParcel = function(handler) {
  this.clicOnParcelHandler = handler;
};


if (typeof module !== "undefined") {
  module.exports = GameMap;
}