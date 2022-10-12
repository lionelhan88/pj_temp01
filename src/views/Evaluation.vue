<template>
  <div >
    
    <h2>分项评定</h2>
    <el-descriptions
      class="margin-top"
      :column="2"
      border
      :keys="item" v-for="item in evaluationList"
    >
      
      <el-descriptions-item align="left" label-align="center">
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            分项名称
          </div>
        </template>
        
        <div align="center" class="asdfasf">
          {{item.testItemsName}}
        </div>
      </el-descriptions-item>
      
      <el-descriptions-item align="left" label-align="center">
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <infoFilled />
            </el-icon>
            详情
          </div>
        </template>
        <el-tag class="cell-item1">检测详情</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item align="left" label-align="center" span="2">
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <editPen />
            </el-icon>
            等级评分
          </div>
        </template>
        <el-radio-group v-model="item.level">
          <el-radio :label="1">a 级</el-radio>
          <el-radio :label="2">b 级</el-radio>
          <el-radio :label="3">c 级</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      
      <el-descriptions-item align="left" label-align="center">
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <comment />
            </el-icon>
            备注
          </div>
        </template>
        <el-input v-model="item.remarks" placeholder="Please input" type="textarea"/>
      </el-descriptions-item>
    </el-descriptions>
    
  </div>

  <h2>综合评定</h2>
  <div>
    <el-descriptions
      class="margin-top"
      :column="2"
      border
    >
      <el-descriptions-item align="center" span="2">
        <template #label>
          <div >
            <el-icon :style="iconStyle">
              <editPen />
            </el-icon>
            综合评定等级
          </div>
        </template>
        <el-radio-group v-model="comprehensiveGrade" disabled fill="#00868B" >
          <el-radio :label="1" border>A</el-radio>
          <el-radio :label="2" border>B</el-radio>
          <el-radio :label="3" border>C</el-radio>
        </el-radio-group>
        </el-descriptions-item>

        <el-descriptions-item align="left" label-align="center">
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <comment />
              </el-icon>
              备注
            </div>
          </template>
          <el-input v-model="detectionResult"  type="textarea">
            
          </el-input>
        </el-descriptions-item>

    </el-descriptions>

    <!--页面重置按钮-->
      <el-button class="saveBtn" type="primary" @click="saveInfo()"
        >保存</el-button
      >

      <!--检测项目重置按钮-->
      <el-button class="cancelBtn" @click="returnPage()"
        >返回</el-button
      >

  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, getCurrentInstance, onMounted } from 'vue'
import {
  EditPen,
  Comment,
  User,
  InfoFilled,
} from '@element-plus/icons-vue'

import { useRouter, useRoute } from "vue-router"

const route = useRoute();
const router = useRouter();
const data = {
  id: route.query
};

const comprehensiveGrade = ref();
const detectionResult = ref();
const evaluationList = ref([]);

const finalContent = [
  "（A级）可继续使用，并应按规范要求做好维护保养",
  "（B级）某某分项存在一般缺陷，应按规范要求15天内完成整改，并申请复检",  
  "（C级）某某分项存在严重缺陷，应按规范要求7天内完成整改，并申请复检。某某存在坠落、倾覆危险，应按规范要求24小时内予以拆除。"
];

let newData = reactive({
  comprehensiveGrade: "",
  detectionResult:"",
  id:0,
  scoreEvaluationVoList:[
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    },
    {
      id:0,
      level:0,
      remarks:"",
    }
  ]
});



const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { getDetectionResultById, saveDetectionResultById } from '@/api/apiRequest.ts';


let arr=[];

onMounted( () => {
  const detail =  getDetectionResultById(data.id);
  console.log(detail);
  detail.then( response => {
    detectionResult.value = response.data.data.finalLevel.detectionResult;
    comprehensiveGrade.value = response.data.data.finalLevel.comprehensiveGrade;
    evaluationList.value = response.data.data.scoreEvaluationVoList;

    console.log("33333333333333 ", evaluationList);
  }); 
})

watch( 
  ()=>[...evaluationList.value] , (newVal, oldVal) =>{
    console.log("================================== ", data.id);
    console.log(newVal, oldVal);
    if(evaluationList.value.every(evaluationList => evaluationList.level in [1,2,3])){
      
      if(evaluationList.value.some(evaluationList => evaluationList.level == 3 )){

        comprehensiveGrade.value = 3;
        detectionResult.value = finalContent[2]

      }else if( evaluationList.value.every(evaluationList => evaluationList.level == 1 )){
        comprehensiveGrade.value = 1;
        detectionResult.value = finalContent[0]

      }
      
      if(evaluationList.value[3].level == 1 && evaluationList.value[5].level == 1 && evaluationList.value[6].level == 1 ){
        
        arr = evaluationList.value.filter( evaluationList => evaluationList.level > 1);
        console.log("heeeeeeeeeeeeeeeeeeeeee" , evaluationList.value[3].testItemsName, 
        evaluationList.value[5].testItemsName, evaluationList.value[6].testItemsName);
        if(arr.length <= 2){
          comprehensiveGrade.value = 1;
          detectionResult.value = finalContent[0]
          console.log("httttttttttttttttttttttttttttttt" , arr.length);
        }else{
          console.log("noooooooooooooooooo", arr.length);
          comprehensiveGrade.value = 2;
          detectionResult.value = finalContent[1];
        }
      } else{
        comprehensiveGrade.value = 2;
        detectionResult.value = finalContent[1];
      }
    }
  }, 
  {deep: true}
);

  
const saveInfo = () => {

  for(let i in evaluationList.value){
   
    newData.scoreEvaluationVoList[i].id = evaluationList.value[i].id;
    newData.scoreEvaluationVoList[i].level = evaluationList.value[i].level;
    newData.scoreEvaluationVoList[i].remarks = evaluationList.value[i].remarks;

  }

  newData.id = route.query.id;
  newData.comprehensiveGrade = comprehensiveGrade.value;
  newData.detectionResult = detectionResult.value;

  console.log("333333333333333333 ", newData);

  saveDetectionResultById(newData);
}


  const returnPage = () => {
    router.go(-1);
  }
</script>

<style scoped lang="scss">
.cell-item1{
    align: center;
    margin-right: 24px;
    margin-left: 48px;
  }
  
	.cell-item1{
    align: center;
		display:flex;

  }
  .asdfasf{
    width: 150px;
    align: center;
    display: flex;
  }
.margin-top {
  margin-top: 20px;
}

.saveBtn {


  margin-top: 48px;
  margin-left: 720px;
}

.cancelBtn{


  margin-top: 48px;
  margin-left: 800px;
}

</style>

<!-- 

<script lang="ts" setup>
import { computed, ref, reactive, watch, onMounted, getCurrentInstance } from 'vue'
import {
  EditPen,
  Comment,
  User,
  InfoFilled,
} from '@element-plus/icons-vue'

import { useRouter, useRoute } from "vue-router"

const route = useRoute();
const router = useRouter();
const data = {id: route.query};
console.log(data);


const comprehensiveGrade = ref();
const detectionResult = ref();
const evaluationList = ref([]);


const finalContent = [
  "（A级）可继续使用，并应按规范要求做好维护保养",
  "（B级）某某分项存在一般缺陷，应按规范要求15天内完成整改，并申请复检",  
  "（C级）某某分项存在严重缺陷，应按规范要求7天内完成整改，并申请复检。某某存在坠落、倾覆危险，应按规范要求24小时内予以拆除。"
];



const list= reactive([
  {
  name: "基础或被依附体状况",
  value:"",
  input:""}, 
  {
  name: "结构构件",
  value:"",
  input:""},
  {
  name: "构架连接",
  value:"",
  input:""},
  {
  name: "面板及围护",
  value:"",
  input:""},
  {
  name: "结构防腐",
  value:"",
  input:""},
  {
  name: "电气照明及防雷装置",
  value:"",
  input:""},
  {
  name: "结构复核",
  value:"",
  input:""},
]);


const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { getDetectionResultById } from '@/api/apiRequest.ts';


let arr=[];

onMounted( () => {
  const detail =  getDetectionResultById(data.id);
  console.log(detail);
  detail.then( response => {
    detectionResult.value = response.data.data.finalLevel.detectionResult;
    comprehensiveGrade.value = response.data.data.finalLevel.comprehensiveGrade;
    evaluationList.value = response.data.data.scoreEvaluationVoList;

    console.log("33333333333333 ", evaluationList);
  }); 
})

watch( 
  ()=>[...evaluationList.value] , (newVal, oldVal) =>{
    console.log("================================== ", data);
    console.log(newVal, oldVal);
    if(evaluationList.value.every(evaluationList => evaluationList.level in [1,2,3])){
      
      if(evaluationList.value.some(evaluationList => evaluationList.level == 3 )){

        comprehensiveGrade.value = 3;
        detectionResult.value = finalContent[2]

      }else if( evaluationList.value.every(evaluationList => evaluationList.level == 1 )){
        comprehensiveGrade.value = 1;
        detectionResult.value = finalContent[0]

      }else if(evaluationList.value[3].level == evaluationList.value[5].level == evaluationList.value[6].level ==0 ){
        
        arr = evaluationList.value.filter( evaluationList => evaluationList.level >0);
        console.log("heeeeeeeeeeeeeeeeeeeeee" , arr.length);
        if(arr.length <= 2){
          comprehensiveGrade.value = 1;
          detectionResult.value = finalContent[0]
          console.log("httttttttttttttttttttttttttttttt" , arr.length);
        }else{
          comprehensiveGrade.value = 2;
          detectionResult.value = finalContent[1];
        }
      } else{
        comprehensiveGrade.value = 2;
        detectionResult.value = finalContent[1];
      }
    }
  }, 
  {deep: true}
);

  
  

  const returnPage = () => {
    router.go(-1);
  }
</script>


// else if( evaluationList.value.every(evaluationList => evaluationList.level == 0 )){
        
        finalLevel.comprehensiveGrade = 1;
        finalLevel.detectionResult = finalContent[0];
      } -->

<!-- <div>
    <el-row>
      <el-col :span="12">
        <el-descriptions
          class="margin-top"
          :column="1"
          border
        >
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                基础或被依附体状况：
              </div>
            </template>
            <el-tag size="small" class="cell-item_1">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          
          <el-descriptions-item  label-align="left" align='center'>
            <template #label>
              <div>
                <el-icon >
                  <EditPen />
                </el-icon>
                评分等级
              </div>
            </template>
              <el-radio-group v-model="radio" >
                <el-radio :label="3">A</el-radio>
                <el-radio :label="6">B</el-radio>
                <el-radio :label="9">C</el-radio>
              </el-radio-group>
          </el-descriptions-item>
          
          <el-descriptions-item align="left">
            <template #label>
              <div>
                <el-icon >
                  <Comment/>
                </el-icon>
                备注
              </div>
            </template>
          <el-input v-model="input" placeholder="Please input" type="textarea"/>
          </el-descriptions-item>        
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions
          class="margin-top"
          :column="1"
          border
        >
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                基础或被依附体状况：
              </div>
            </template>
            <el-tag size="small" class="cell-item_1">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>

          <A></A>
          
        </el-descriptions>
      </el-col>
    </el-row>

  </div> 
  
  
  <son>
      <template v-slot:grade = "scope">
        <el-descriptions-item label-align="left" align="center">
          <template #label>
            <div>
              <el-icon>
                <EditPen />
              </el-icon>
              评分等级
            </div>
          </template>
          <el-radio-group v-model="scope.radio">
            <el-radio :label="3">A</el-radio>
            <el-radio :label="6">B</el-radio>
            <el-radio :label="9">C</el-radio>
          </el-radio-group>
        </el-descriptions-item>
      </template>

      <template #remark>
        <el-descriptions-item align="left">
          <template #label>
            <div>
              <el-icon>
                <Comment />
              </el-icon>
              备注
            </div>
          </template>
          <el-input
            v-model="input"
            placeholder="Please input"
            type="textarea"
          />
        </el-descriptions-item>
      </template>
    </son>
    
     for(let i in list){
      arr.push(list[i].value)
      console.log("list val " + i + " is " + list[i].value)
    }
    arr.every(function (value) {
        return value < 10
    }) 
    console.log("arafsad " + arr + " leng " + arr.length + " if has 2 " + arr.some(arr => arr == 2));-->
 -->

<!-- <div>
    <el-row>
      <el-col :span="12">
        <el-descriptions
          class="margin-top"
          :column="1"
          border
        >
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                基础或被依附体状况：
              </div>
            </template>
            <el-tag size="small" class="cell-item_1">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          
          <el-descriptions-item  label-align="left" align='center'>
            <template #label>
              <div>
                <el-icon >
                  <EditPen />
                </el-icon>
                评分等级
              </div>
            </template>
              <el-radio-group v-model="radio" >
                <el-radio :label="3">A</el-radio>
                <el-radio :label="6">B</el-radio>
                <el-radio :label="9">C</el-radio>
              </el-radio-group>
          </el-descriptions-item>
          
          <el-descriptions-item align="left">
            <template #label>
              <div>
                <el-icon >
                  <Comment/>
                </el-icon>
                备注
              </div>
            </template>
          <el-input v-model="input" placeholder="Please input" type="textarea"/>
          </el-descriptions-item>        
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions
          class="margin-top"
          :column="1"
          border
        >
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                基础或被依附体状况：
              </div>
            </template>
            <el-tag size="small" class="cell-item_1">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>

          <A></A>
          
        </el-descriptions>
      </el-col>
    </el-row>

  </div> 
  
  
  <son>
      <template v-slot:grade = "scope">
        <el-descriptions-item label-align="left" align="center">
          <template #label>
            <div>
              <el-icon>
                <EditPen />
              </el-icon>
              评分等级
            </div>
          </template>
          <el-radio-group v-model="scope.radio">
            <el-radio :label="3">A</el-radio>
            <el-radio :label="6">B</el-radio>
            <el-radio :label="9">C</el-radio>
          </el-radio-group>
        </el-descriptions-item>
      </template>

      <template #remark>
        <el-descriptions-item align="left">
          <template #label>
            <div>
              <el-icon>
                <Comment />
              </el-icon>
              备注
            </div>
          </template>
          <el-input
            v-model="input"
            placeholder="Please input"
            type="textarea"
          />
        </el-descriptions-item>
      </template>
    </son>-->
