gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCloudObjects1= [];
gdjs.New_32sceneCode.GDCloudObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects1= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects2= [];
gdjs.New_32sceneCode.GDCoinObjects1= [];
gdjs.New_32sceneCode.GDCoinObjects2= [];
gdjs.New_32sceneCode.GDTxtScoreObjects1= [];
gdjs.New_32sceneCode.GDTxtScoreObjects2= [];
gdjs.New_32sceneCode.GDEnemyObjects1= [];
gdjs.New_32sceneCode.GDEnemyObjects2= [];
gdjs.New_32sceneCode.GDRightObstacleObjects1= [];
gdjs.New_32sceneCode.GDRightObstacleObjects2= [];
gdjs.New_32sceneCode.GDLeftObstacleObjects1= [];
gdjs.New_32sceneCode.GDLeftObstacleObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32sceneCode.GDCoinObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftObstacleObjects1Objects = Hashtable.newFrom({"LeftObstacle": gdjs.New_32sceneCode.GDLeftObstacleObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightObstacleObjects1Objects = Hashtable.newFrom({"RightObstacle": gdjs.New_32sceneCode.GDRightObstacleObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").setNumber(0);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TxtScore"), gdjs.New_32sceneCode.GDTxtScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDTxtScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTxtScoreObjects1[i].setString("Score " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariableString(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDEnemyObjects1[k] = gdjs.New_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariableString(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDEnemyObjects1[k] = gdjs.New_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].addForce(100, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftObstacle"), gdjs.New_32sceneCode.GDLeftObstacleObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftObstacleObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightObstacle"), gdjs.New_32sceneCode.GDRightObstacleObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightObstacleObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8064668);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftObstacle"), gdjs.New_32sceneCode.GDLeftObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightObstacle"), gdjs.New_32sceneCode.GDRightObstacleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDRightObstacleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightObstacleObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDLeftObstacleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftObstacleObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCloudObjects1.length = 0;
gdjs.New_32sceneCode.GDCloudObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDTxtScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDTxtScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.New_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.New_32sceneCode.GDRightObstacleObjects1.length = 0;
gdjs.New_32sceneCode.GDRightObstacleObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftObstacleObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftObstacleObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
