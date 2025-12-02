gdjs._1079_1074_1091_1082Code = {};
gdjs._1079_1074_1091_1082Code.localVariables = [];
gdjs._1079_1074_1091_1082Code.idToCallbackMap = new Map();
gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects2= [];
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects1= [];
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects2= [];
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects1= [];
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects2= [];
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1= [];
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects2= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects1= [];
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects2= [];
gdjs._1079_1074_1091_1082Code.GDpserObjects1= [];
gdjs._1079_1074_1091_1082Code.GDpserObjects2= [];
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects2= [];
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects2= [];
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects2= [];
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects2= [];
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects2= [];
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects1= [];
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects2= [];


gdjs._1079_1074_1091_1082Code.mapOfGDgdjs_9546_95951079_95951074_95951091_95951082Code_9546GD_9595951079_9595951072_9595951089_9595951090_9595951072_9595951074_9595951082_9595951072Objects1Objects = Hashtable.newFrom({"заставка": gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1});
gdjs._1079_1074_1091_1082Code.mapOfGDgdjs_9546_95951079_95951074_95951091_95951082Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects1});
gdjs._1079_1074_1091_1082Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1);
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._1079_1074_1091_1082Code.mapOfGDgdjs_9546_95951079_95951074_95951091_95951082Code_9546GD_9595951079_9595951072_9595951089_9595951090_9595951072_9595951074_9595951082_9595951072Objects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length ;i < len;++i) {
    gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[i].getBehavior("Resizable").setSize(1080, 1920);
}
}
{for(var i = 0, len = gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length ;i < len;++i) {
    gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[i].addForce(-(6000), 0, 1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "переход на другой экран.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("заставка"), gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length;i<l;++i) {
    if ( gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[i].getX() < -(1080) ) {
        isConditionTrue_0 = true;
        gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[k] = gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[i];
        ++k;
    }
}
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1 */
{for(var i = 0, len = gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length ;i < len;++i) {
    gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1079_1074_1091_1082Code.mapOfGDgdjs_9546_95951079_95951074_95951091_95951082Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "нажатие на кнопку2.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber((( gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}

}


};

gdjs._1079_1074_1091_1082Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDpserObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDpserObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects2.length = 0;

gdjs._1079_1074_1091_1082Code.eventsList0(runtimeScene);
gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSpriteObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite2Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite3Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDSoundButtonObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDBlankButtonObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite4Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite5Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite6Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite7Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite8Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDNewSprite9Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GDpserObjects1.length = 0;
gdjs._1079_1074_1091_1082Code.GDpserObjects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951079_951072_951089_951090_951072_951074_951082_951072Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951085_951072_951089_951090_951088_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951072_951088_951090_951072_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951076_951086_951084_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951082_951086_951083_951086_951076_951086Objects2.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects1.length = 0;
gdjs._1079_1074_1091_1082Code.GD_951087_951086_951084_951086Objects2.length = 0;


return;

}

gdjs['_1079_1074_1091_1082Code'] = gdjs._1079_1074_1091_1082Code;
