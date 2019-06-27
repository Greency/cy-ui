import SwipeCellGroup from './src/swipeCellGroup';
import SwipeCell from './src/swipeCell';

SwipeCellGroup.install = function (Vue) {
    Vue.component('cy-swipe-cell-group', SwipeCellGroup);
}

SwipeCell.install = function (Vue) {
    Vue.component('cy-swipe-cell', SwipeCell);
}

export {
    SwipeCellGroup,
    SwipeCell
};