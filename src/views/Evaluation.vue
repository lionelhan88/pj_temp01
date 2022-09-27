<template>
  <div class="conteiner">
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
  </div>
</template>

<script lang="ts" setup>
import son from "@/components/Slot.vue";

</script>

<style scoped lang="scss"></style>

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

  </div> -->
