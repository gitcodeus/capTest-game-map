const PARCEL_SIZE_X = 75;
const PARCEL_SIZE_Y = 75;


/**
 * @typedef {object} ParcelData
 * @property {string} id
 * @property {string} name
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {object} MapData
 * @property {number} sizeX
 * @property {number} sizeY
 * @property {ParcelData[]} parcelsData
 */


/**
 * @param {MapData} data
 * @constructor
 */
function GameMap(data) {
  this.clickOnParcelHandler = null;
  this.mapSizeX = data.sizeX;
  this.mapSizeY = data.sizeY;
  this.parcelsDataArray = [];
  this.parcelsDataRegistry = {};

  var parcelData;
  for (var c = 0; c < data.parcelsData.length; c++) {
    parcelData = data.parcelsData[c];

    if (typeof this.parcelsDataArray[parcelData.x] === 'undefined') {
      this.parcelsDataArray[parcelData.x] = [];
    }
    this.parcelsDataArray[parcelData.x][parcelData.y] = parcelData;
    this.parcelsDataRegistry[parcelData.id] = this.parcelsDataArray[parcelData.x][parcelData.y];
  }
}


/**
 * Render Game Map inside of HTML Element
 *
 * @param {HTMLElement} el
 */
GameMap.prototype.render = function(el) {
  var map = document.createElement('div');
  map.style.width = String(this.mapSizeX * PARCEL_SIZE_X) + 'px';
  map.style.height = String(this.mapSizeY * PARCEL_SIZE_Y) + 'px';
  map.style.display = 'flex';
  map.style.flexWrap = 'wrap';

  var parcel;
  var parcelData;
  var para;

  for (var y = this.mapSizeY - 1; y >= 0; y--) {
    for (var x = 0; x < this.mapSizeX; x++) {

      parcelData = this.getParcelDataByCoordinates(x, y);

      parcel = document.createElement('div');
      parcel.id = parcelData.id;
      parcel.style.width = String(PARCEL_SIZE_X) + 'px';
      parcel.style.height = String(PARCEL_SIZE_Y) + 'px';
      parcel.style.border = '1px black solid';
      parcel.style.boxSizing = 'border-box';
      parcel.style.cursor = 'pointer';
      parcel.style.textAlign = 'center';
      parcel.style.verticalAlign = 'middle';
      parcel.style.fontSize = '16px';
            
      para = document.createElement('p');
      para.innerHTML = parcelData.name;
      parcel.appendChild(para);

      if (this.clickOnParcelHandler) {
        parcel.onclick = this.clickOnParcelHandler;
      }

      map.appendChild(parcel);
    }
  }

  el.appendChild(map);
};


/**
 * Get ParcelData by Id
 *
 * @param id
 * @return {ParcelData}
 */
GameMap.prototype.getParcelDataById = function(id) {
  return this.parcelsDataRegistry[id];
};


/**
 * Get ParcelData by Coordinates
 *
 * @param {number} x
 * @param {number} y
 * @return {ParcelData}
 */
GameMap.prototype.getParcelDataByCoordinates = function(x, y) {
  return this.parcelsDataArray[x][y];
};


/**
 * Update ParcelData by Id
 *
 * @param {string} id
 * @param {ParcelData} parcelData
 */
GameMap.prototype.updateParcelDataById = function(id, parcelData) {
  this.parcelsDataRegistry[id] = parcelData;
};


/**
 * Update ParcelData by Coordinates
 *
 * @param {number} x
 * @param {number} y
 * @param {ParcelData} parcelData
 */
GameMap.prototype.updateParcelDataByCoordinates = function(x, y, parcelData) {
  this.parcelsDataArray[x][y] = parcelData;
};


/**
 * Set Click on Parcel Handler
 *
 * @param {function} handler
 */
GameMap.prototype.setClickOnParcelHandler = function(handler) {
  this.clickOnParcelHandler = handler;
};


if (typeof module !== "undefined") {
  module.exports = GameMap;
}