<template>
  <el-upload
    ref="uploadRef"
    v-model="fileList"
    class="flex-c ju-upload"
    action="#"
    multiple
    :show-file-list="false"
    :auto-upload="false"
    v-bind="props"
    :on-change="handleChange"
    :before-upload="handleProgress"
  >
    <slot></slot>
  </el-upload>
</template>

<script setup lang="ts">
import { JuMessage } from "@/utils/components/JuMessage";
import { FilePost } from "@/utils/request";
import { UploadFile, UploadFiles } from "element-plus";
import { ref } from "vue";

const props = defineProps({
  url: String,
  limit: {
    type: [Number],
    default: 9,
  },
  headers: {
    type: Object,
    default: () => ({}),
  },
  size: {
    type: Number,
    default: 50 * 1024 * 1024,
  },
  accept: {
    type: String,
    default: ".jpg,.png",
  },
});

const uploadRef = ref();
const loading = ref(false);
const defaultUrl = "/upload";

const dialogVisible = ref(false);
const fileList = ref<UploadFiles>([]);

const handleChange = (file: UploadFile, files: UploadFiles) => {
  // 判断文件大小是否超过最大值
  if (file.size && file.size > props.size) {
    JuMessage.warning(
      "文件大小不可以超过" + Number(props.size / 1024 / 1024) + "MB"
    );
    uploadRef.value.handleRemove(file);
    return;
  }
  fileList.value = files;
  console.log(file, files);

  // handleSubmit();
};

const handleProgress = (rawFile: any) => {
  console.log("handleProgress:", rawFile);
};

const handleSubmit = async () => {
  if (loading.value) {
    return;
  }
  const formData = new FormData();
  fileList.value.forEach((file: UploadFile) => {
    formData.append("file", file.raw as any);
  });
  // 添加其他参数
  if (props.headers) {
    for (let key in props.headers) {
      formData.append(key, props.headers[key]);
    }
  }
  loading.value = true;
  const res = await FilePost(props.url || defaultUrl, formData, props.headers);
  if (res.code === 0) {
    JuMessage.success(res.message);
  } else {
    JuMessage.error(res.message);
  }
  loading.value = false;
};
</script>
<style lang="scss" scoped>
.ju-upload {
  :deep(.el-upload:focus) {
    color: inherit !important;
  }
}
</style>
