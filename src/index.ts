/**
 * This is a central file wher all the modules get their imports from. Doing 
 * it this way the rolup more consistently will build true rather than assumed linking
 */
import FoozleLocalStorage from './FoozleLocalStorage';
import CreatePageObj from './CreatePageObj';
import CreateVideoObj from './CreateVideoObj';
import MergeObjs from './MergeObjects';
import Foozletimer from './FoozleTimer';
import ConfigFactory from './ConfigFactory';
import PageTime from './PageTime';
import VideoProps from './VideoProps';
import ICreateObj from './iCreateObj';
import ILooseObject from './iLooseObject';

export { FoozleLocalStorage }
export { CreatePageObj }
export { CreateVideoObj }
export { MergeObjs }
export { Foozletimer }
export { ConfigFactory }
export { PageTime }
export { VideoProps }
export { ICreateObj }
export { ILooseObject }