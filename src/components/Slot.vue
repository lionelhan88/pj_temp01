<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
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
            <el-tag size="small" class="cell-item_2" @click="saveData()">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade" :data="data1"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                结构构件：
              </div>
            </template>
            <el-tag size="small" class="cell-item_3">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2" >保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                构架连接：
              </div>
            </template>
            <el-tag size="small" class="cell-item_3">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                面板及维护：
              </div>
            </template>
            <el-tag size="small" class="cell-item_4">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                结构及防腐：
              </div>
            </template>
            <el-tag size="small" class="cell-item_4">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                电气照明及防雷装置：
              </div>
            </template>
            <el-tag size="small" class="cell-item_1">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                结构复核：
              </div>
            </template>
            <el-tag size="small" class="cell-item_3">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>

      <el-col :span="12">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item align="right" label-align="left">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <list />
                </el-icon>
                综合评定等级：
              </div>
            </template>
            <el-tag size="small" class="cell-item_5">检测详情</el-tag>
            <el-tag size="small" class="cell-item_2">保存</el-tag>
          </el-descriptions-item>
          <slot name="grade"></slot>
          <slot name="remark"></slot>
        </el-descriptions>
      </el-col>
    </el-row>

    <el-button class="saveBtn" type="primary" @click="testResult()"
            >保存</el-button
          >
    <el-button class="cancelBtn" @click="testResult()">取消</el-button>
    <el-button class="approveBtn" @click="testResult()">完工</el-button>
    <el-button class="reportBtn" @click="testResult()">取消完工</el-button>
    <el-button class="returnBtn" @click="testResult()">返回</el-button>
  </div>
</template>

<script lang="ts" setup>
import { List } from "@element-plus/icons-vue";
import { ref } from "vue";

const radio = ref();

const saveData = () => {
    console.log("button hit!! " + radio.value);
}
</script>

<style>
.el-descriptions {
  margin: 8px;
}

.cell-item_1 {
  margin-left: 350px;
  align: center;
}

.cell-item_2 {
  margin-left: 20px;
  align: center;
}

.cell-item_3 {
    margin-left: 160px;
    align: center;
}

.cell-item_4 {
    margin-left: 200px;
    align: center;
}

.cell-item_5 {
    margin-left: 240px;
    align: center;
}

.saveBtn {
  margin-top: 50px;
  position: relative;
  left: 16%;
}

.cancelBtn {
  margin-top: 50px;
  position: relative;
  left: 24%;
}

.approveBtn {
  margin-top: 50px;
  position: relative;
  left: 32%;
}

.reportBtn {
  margin-top: 50px;
  position: relative;
  left: 40%;
}

.returnBtn {
  margin-top: 50px;
  position: relative;
  left: 48%;
}

</style>

<!-- <el-descriptions v-slot:xxx>
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
            </el-descriptions> -->
