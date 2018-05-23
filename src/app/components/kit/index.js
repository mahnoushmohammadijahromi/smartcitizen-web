import angular from 'angular';
import editKit from './editKit';
import newKit from './newKit';
import setupModule from './setupModule';
import showKit from './showKit';


export default angular.module('app.component.kit',[
  editKit,
  newKit,
  setupModule,
  showKit
])
.name;
